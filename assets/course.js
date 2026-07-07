/* ============================================================
   CAIE Course — shared runtime
   Navigation, theme, progress tracking, quiz engine, viz helpers.
   Vanilla JS, no dependencies (KaTeX loaded per-page from CDN,
   pages degrade to readable raw LaTeX offline).
   ============================================================ */
(function () {
  "use strict";

  // ---------- course manifest (single source of truth) ----------
  const COURSE = [
    { id: "t01", level: 1, num: 1,  file: "level1/topic-01-mathematical-foundations.html", title: "Mathematical Foundations", weight: "20%", desc: "Linear algebra, calculus & optimization, numerical stability." },
    { id: "t02", level: 1, num: 2,  file: "level1/topic-02-probability-statistics.html", title: "Probability, Statistics & Information Theory", weight: "18%", desc: "Distributions, inference, entropy, KL divergence." },
    { id: "t03", level: 1, num: 3,  file: "level1/topic-03-programming-software.html", title: "Programming & Software Engineering for AI", weight: "14%", desc: "Python, testing, Big-O, CPU vs GPU, reproducibility." },
    { id: "t04", level: 1, num: 4,  file: "level1/topic-04-classical-ml.html", title: "Classical Machine Learning", weight: "18%", desc: "Regression, trees, SVMs, clustering, evaluation." },
    { id: "t05", level: 1, num: 5,  file: "level1/topic-05-deep-learning.html", title: "Deep Learning Fundamentals", weight: "16%", desc: "Backprop, training dynamics, CNNs, RNNs, attention." },
    { id: "t06", level: 1, num: 6,  file: "level1/topic-06-data-engineering.html", title: "Data Engineering Fundamentals", weight: "8%", desc: "Formats, ETL, SQL, warehouses, feature stores." },
    { id: "t07", level: 1, num: 7,  file: "level1/topic-07-ethics-1.html", title: "Professional Ethics & Responsible AI I", weight: "6%", desc: "Fairness criteria, privacy, regulation, duty of competence." },
    { id: "t08", level: 2, num: 8,  file: "level2/topic-08-advanced-architectures.html", title: "Advanced Architectures", weight: "18%", desc: "Transformers in full, diffusion, VAEs, GANs, GNNs, CLIP." },
    { id: "t09", level: 2, num: 9,  file: "level2/topic-09-nlp-llms.html", title: "NLP & Large Language Models", weight: "16%", desc: "Tokenization, pretraining, fine-tuning, decoding, evals." },
    { id: "t10", level: 2, num: 10, file: "level2/topic-10-computer-vision.html", title: "Computer Vision", weight: "10%", desc: "ResNets, ViT, detection, segmentation, latent diffusion." },
    { id: "t11", level: 2, num: 11, file: "level2/topic-11-reinforcement-learning.html", title: "Reinforcement Learning", weight: "10%", desc: "MDPs, Bellman equations, Q-learning, PPO, RLHF." },
    { id: "t12", level: 2, num: 12, file: "level2/topic-12-ml-systems.html", title: "ML Systems Design & Distributed Training", weight: "14%", desc: "Parallelism, ZeRO, memory math, mixed precision." },
    { id: "t13", level: 2, num: 13, file: "level2/topic-13-mlops.html", title: "MLOps & Production Engineering", weight: "14%", desc: "CI/CD, serving, drift monitoring, incident response." },
    { id: "t14", level: 2, num: 14, file: "level2/topic-14-rag.html", title: "Retrieval, RAG & Vector Systems", weight: "10%", desc: "Dense vs sparse retrieval, ANN indexes, chunking, evals." },
    { id: "t15", level: 2, num: 15, file: "level2/topic-15-responsible-ai-2.html", title: "Responsible AI II — Evaluation, Fairness & Interpretability", weight: "8%", desc: "SHAP, mechanistic interp, adversarial attacks, privacy." },
    { id: "t16", level: 3, num: 16, file: "level3/topic-16-scaling-laws.html", title: "Scaling Laws & Frontier Architecture", weight: "16%", desc: "Chinchilla, compute-optimal training, MoE, long context." },
    { id: "t17", level: 3, num: 17, file: "level3/topic-17-llm-training-alignment.html", title: "LLM Training, Fine-Tuning & Alignment", weight: "16%", desc: "Data pipelines, SFT → RM → RLHF/DPO, alignment failures." },
    { id: "t18", level: 3, num: 18, file: "level3/topic-18-agentic-systems.html", title: "Agentic Systems & Orchestration", weight: "14%", desc: "Agent loops, tool use, MCP, multi-agent failure modes." },
    { id: "t19", level: 3, num: 19, file: "level3/topic-19-ai-safety.html", title: "Technical AI Safety & Alignment", weight: "14%", desc: "Outer/inner alignment, specification gaming, oversight." },
    { id: "t20", level: 3, num: 20, file: "level3/topic-20-reliability-economics.html", title: "Production Reliability, Governance & Economics", weight: "16%", desc: "SLOs, fallbacks, inference cost math, governance." },
    { id: "t21", level: 3, num: 21, file: "level3/topic-21-capstone.html", title: "Capstone System Design", weight: "16%", desc: "End-to-end design studio with graded rubric dimensions." },
    { id: "t22", level: 3, num: 22, file: "level3/topic-22-ethics-3.html", title: "Professional Standards & Ethics III", weight: "8%", desc: "Ambiguous cases, externalities, the duty to say no." }
  ];
  const LEVELS = {
    1: { name: "Level I — Foundations", meta: "~300 h · know" },
    2: { name: "Level II — Application & Systems", meta: "~320 h · build" },
    3: { name: "Level III — Synthesis, Safety & Judgment", meta: "~300 h · decide" }
  };

  // ---------- storage ----------
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
      catch (e) { return fallback; }
    },
    set(key, val) {
      try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* private mode */ }
    }
  };
  const progress = {
    all() { return store.get("caie-progress", {}); },
    done(id) { return !!progress.all()[id]; },
    set(id, v) { const p = progress.all(); if (v) p[id] = true; else delete p[id]; store.set("caie-progress", p); }
  };

  // ---------- theme ----------
  function applyTheme(mode) {
    if (mode === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", mode);
    document.dispatchEvent(new CustomEvent("caie:theme"));
  }
  function initTheme() {
    applyTheme(store.get("caie-theme", "auto"));
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const order = ["auto", "light", "dark"];
      const cur = store.get("caie-theme", "auto");
      const next = order[(order.indexOf(cur) + 1) % 3];
      store.set("caie-theme", next);
      applyTheme(next);
      btn.title = "Theme: " + next;
    });
    // system change also re-fires theme event so canvases repaint
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        document.dispatchEvent(new CustomEvent("caie:theme"));
      });
    }
  }

  // ---------- navigation ----------
  function root() { return document.body.dataset.root || "."; }
  function buildSidebar() {
    const nav = document.getElementById("sidebar");
    if (!nav) return;
    const cur = document.body.dataset.page;
    const p = progress.all();
    let html = '<a class="home-link" href="' + root() + '/index.html">⌂ Course home</a>';
    for (const lv of [1, 2, 3]) {
      html += '<div class="lvl">' + LEVELS[lv].name + "</div>";
      for (const t of COURSE.filter(c => c.level === lv)) {
        html += '<a href="' + root() + "/" + t.file + '"' + (t.id === cur ? ' class="current"' : "") + ">" +
          '<span class="tnum">' + t.num + "</span><span>" + t.title + "</span>" +
          (p[t.id] ? '<span class="done">✓</span>' : "") + "</a>";
      }
    }
    nav.innerHTML = html;
    const toggle = document.getElementById("navToggle");
    if (toggle) toggle.addEventListener("click", () => nav.classList.toggle("open"));
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 980 && nav.classList.contains("open") &&
          !nav.contains(e.target) && e.target.id !== "navToggle") nav.classList.remove("open");
    });
  }
  function buildFooterNav() {
    const cur = document.body.dataset.page;
    const idx = COURSE.findIndex(c => c.id === cur);
    if (idx < 0) return;
    const box = document.querySelector(".page-footer");
    if (!box) return;
    const prev = COURSE[idx - 1], next = COURSE[idx + 1];
    let html = '<label class="complete-toggle"><input type="checkbox" id="completeBox"> Mark Topic ' +
      COURSE[idx].num + " complete</label>" + '<div class="pn">';
    if (prev) html += '<a href="' + root() + "/" + prev.file + '"><div class="dir">← Previous</div><div class="pn-title">' + prev.num + ". " + prev.title + "</div></a>";
    if (next) html += '<a class="next" href="' + root() + "/" + next.file + '"><div class="dir">Next →</div><div class="pn-title">' + next.num + ". " + next.title + "</div></a>";
    else html += '<a class="next" href="' + root() + '/index.html"><div class="dir">Finish →</div><div class="pn-title">Back to course home</div></a>';
    html += "</div>";
    box.innerHTML = html;
    const cb = document.getElementById("completeBox");
    cb.checked = progress.done(cur);
    cb.addEventListener("change", () => { progress.set(cur, cb.checked); buildSidebar(); });
  }

  // ---------- quiz engine ----------
  // Markup: <div class="quiz" data-answer="b"> <p class="quiz-q">…</p>
  //   <div class="opts"><button data-opt="a">…</button>…</div>
  //   <div class="quiz-exp">…</div> </div>
  function initQuizzes() {
    document.querySelectorAll(".quiz").forEach(q => {
      const ans = q.dataset.answer;
      q.querySelectorAll(".opts button").forEach(btn => {
        btn.addEventListener("click", () => {
          if (q.classList.contains("revealed")) return;
          q.classList.add("revealed");
          q.querySelectorAll(".opts button").forEach(b => {
            if (b.dataset.opt === ans) b.classList.add("correct");
            else if (b === btn) b.classList.add("wrong");
            b.disabled = true;
          });
        });
      });
    });
  }

  // ---------- tab helper ----------
  // Markup: <div class="tabs" data-tabgroup="g"><button data-tab="a" class="active">…
  //         <div data-tabpane="g:a">…  (panes with matching group shown/hidden)
  function initTabs() {
    document.querySelectorAll(".tabs[data-tabgroup]").forEach(tabs => {
      const g = tabs.dataset.tabgroup;
      tabs.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
          tabs.querySelectorAll("button").forEach(b => b.classList.toggle("active", b === btn));
          document.querySelectorAll('[data-tabpane^="' + g + ':"]').forEach(p => {
            p.style.display = p.dataset.tabpane === g + ":" + btn.dataset.tab ? "" : "none";
          });
          document.dispatchEvent(new CustomEvent("caie:tab", { detail: { group: g, tab: btn.dataset.tab } }));
        });
      });
      const act = tabs.querySelector("button.active") || tabs.querySelector("button");
      if (act) act.click();
    });
  }

  // ---------- math (KaTeX auto-render if the CDN loaded) ----------
  function renderMath() {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    }
  }

  // ============================================================
  // Viz helpers (exposed as window.CAIE)
  // ============================================================
  const CAIE = { COURSE, LEVELS, progress, store };

  CAIE.$ = (sel) => document.querySelector(sel);
  CAIE.css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  CAIE.pal = () => ({
    s: [CAIE.css("--s1"), CAIE.css("--s2"), CAIE.css("--s3"), CAIE.css("--s4"),
        CAIE.css("--s5"), CAIE.css("--s6"), CAIE.css("--s7"), CAIE.css("--s8")],
    ink: CAIE.css("--ink"), ink2: CAIE.css("--ink-2"), muted: CAIE.css("--muted"),
    grid: CAIE.css("--grid"), baseline: CAIE.css("--baseline"), surface: CAIE.css("--surface"),
    page: CAIE.css("--page"), good: CAIE.css("--good"), warning: CAIE.css("--warning"),
    serious: CAIE.css("--serious"), critical: CAIE.css("--critical"),
    seqLo: CAIE.css("--seq-lo"), seqHi: CAIE.css("--seq-hi"), divMid: CAIE.css("--div-mid")
  });

  // Hex interpolation for sequential/diverging colormaps
  function hex2rgb(h) {
    h = h.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  CAIE.lerpHex = (a, b, t) => {
    const A = hex2rgb(a), B = hex2rgb(b);
    const c = A.map((v, i) => Math.round(v + (B[i] - v) * Math.max(0, Math.min(1, t))));
    return "rgb(" + c.join(",") + ")";
  };
  CAIE.seq = (t) => CAIE.lerpHex(CAIE.css("--seq-lo"), CAIE.css("--seq-hi"), t); // magnitude: light→dark blue
  CAIE.div = (t) => { // polarity: −1 red … 0 neutral … +1 blue
    const mid = CAIE.css("--div-mid");
    return t < 0 ? CAIE.lerpHex(mid, CAIE.css("--s6"), -t) : CAIE.lerpHex(mid, CAIE.css("--s1"), t);
  };
  CAIE.alpha = (hexColor, a) => {
    const c = hex2rgb(hexColor.trim());
    return "rgba(" + c.join(",") + "," + a + ")";
  };

  // DPR-aware canvas setup. Returns 2d ctx scaled so drawing units = CSS px.
  CAIE.setupCanvas = (canvas, cssW, cssH) => {
    const dpr = window.devicePixelRatio || 1;
    const w = cssW || canvas.clientWidth || 640;
    const h = cssH || canvas.clientHeight || 360;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, w, h };
  };

  // Small plotting toolkit: linear axes + line/dot/bar primitives.
  // const P = CAIE.plot(canvas, {w, h, xmin, xmax, ymin, ymax, pad});
  CAIE.plot = (canvas, o) => {
    const { ctx, w, h } = CAIE.setupCanvas(canvas, o.w, o.h);
    const pad = o.pad || { l: 46, r: 12, t: 12, b: 30 };
    const pw = w - pad.l - pad.r, ph = h - pad.t - pad.b;
    const X = x => pad.l + (x - o.xmin) / (o.xmax - o.xmin) * pw;
    const Y = y => pad.t + ph - (y - o.ymin) / (o.ymax - o.ymin) * ph;
    const P = { ctx, w, h, pad, X, Y, o };
    P.clear = () => { ctx.clearRect(0, 0, w, h); };
    P.axes = (xlabel, ylabel, opts) => {
      const pal = CAIE.pal(); opts = opts || {};
      ctx.save();
      ctx.strokeStyle = pal.grid; ctx.lineWidth = 1;
      ctx.fillStyle = pal.muted; ctx.font = "11px " + CAIE.css("--sans");
      const xt = opts.xticks || 5, yt = opts.yticks || 4;
      for (let i = 0; i <= yt; i++) {
        const v = o.ymin + (o.ymax - o.ymin) * i / yt, y = Y(v);
        ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(w - pad.r, y); ctx.stroke();
        ctx.textAlign = "right"; ctx.textBaseline = "middle";
        ctx.fillText(opts.yfmt ? opts.yfmt(v) : +v.toFixed(2), pad.l - 6, y);
      }
      for (let i = 0; i <= xt; i++) {
        const v = o.xmin + (o.xmax - o.xmin) * i / xt, x = X(v);
        ctx.textAlign = "center"; ctx.textBaseline = "top";
        ctx.fillText(opts.xfmt ? opts.xfmt(v) : +v.toFixed(2), x, pad.t + ph + 6);
      }
      ctx.strokeStyle = pal.baseline;
      ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, pad.t + ph); ctx.lineTo(w - pad.r, pad.t + ph); ctx.stroke();
      ctx.fillStyle = pal.ink2; ctx.font = "600 11px " + CAIE.css("--sans");
      if (xlabel) { ctx.textAlign = "center"; ctx.fillText(xlabel, pad.l + pw / 2, h - 13); }
      if (ylabel) {
        ctx.save(); ctx.translate(12, pad.t + ph / 2); ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center"; ctx.fillText(ylabel, 0, 0); ctx.restore();
      }
      ctx.restore();
    };
    P.line = (pts, color, width) => {
      ctx.save(); ctx.strokeStyle = color; ctx.lineWidth = width || 2;
      ctx.lineJoin = "round"; ctx.beginPath();
      let started = false;
      for (const p of pts) {
        if (!isFinite(p[0]) || !isFinite(p[1])) { started = false; continue; }
        const x = X(p[0]), y = Y(p[1]);
        if (y < -2000 || y > 4000) { started = false; continue; }
        if (!started) { ctx.moveTo(x, y); started = true; } else ctx.lineTo(x, y);
      }
      ctx.stroke(); ctx.restore();
    };
    P.fn = (f, color, width, n) => {
      n = n || 160; const pts = [];
      for (let i = 0; i <= n; i++) {
        const x = o.xmin + (o.xmax - o.xmin) * i / n;
        pts.push([x, f(x)]);
      }
      P.line(pts, color, width);
    };
    P.dot = (x, y, r, color, ring) => {
      ctx.save(); ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(X(x), Y(y), r || 4, 0, Math.PI * 2); ctx.fill();
      if (ring) { ctx.strokeStyle = CAIE.pal().surface; ctx.lineWidth = 2; ctx.stroke(); }
      ctx.restore();
    };
    P.label = (x, y, text, color, align) => {
      ctx.save(); ctx.fillStyle = color || CAIE.pal().ink2;
      ctx.font = "600 11px " + CAIE.css("--sans");
      ctx.textAlign = align || "left"; ctx.textBaseline = "bottom";
      ctx.fillText(text, X(x), Y(y) - 5); ctx.restore();
    };
    return P;
  };

  // Sliders: bind <input type=range id> to callback + live value display
  // <label>lr <input type="range" id="x"> <span class="val" id="x-v"></span></label>
  CAIE.bind = (id, fn, fmt) => {
    const el = document.getElementById(id);
    const out = document.getElementById(id + "-v");
    const update = () => {
      const v = parseFloat(el.value);
      if (out) out.textContent = fmt ? fmt(v) : v;
      fn(v);
    };
    el.addEventListener("input", update);
    update();
    return el;
  };
  // like bind but doesn't call fn on init (for grouped redraws)
  CAIE.bindQuiet = (id, fn, fmt) => {
    const el = document.getElementById(id);
    const out = document.getElementById(id + "-v");
    el.addEventListener("input", () => {
      const v = parseFloat(el.value);
      if (out) out.textContent = fmt ? fmt(v) : v;
      fn(v);
    });
    const v0 = parseFloat(el.value);
    if (out) out.textContent = fmt ? fmt(v0) : v0;
    return el;
  };

  CAIE.onTheme = (fn) => document.addEventListener("caie:theme", fn);

  // Formatters
  CAIE.fmt = {
    si: (v) => {
      const a = Math.abs(v);
      if (a >= 1e12) return (v / 1e12).toPrecision(3) + "T";
      if (a >= 1e9) return (v / 1e9).toPrecision(3) + "B";
      if (a >= 1e6) return (v / 1e6).toPrecision(3) + "M";
      if (a >= 1e3) return (v / 1e3).toPrecision(3) + "k";
      return "" + +v.toPrecision(3);
    },
    pct: (v) => (100 * v).toFixed(1) + "%",
    bytes: (v) => {
      if (v >= 1024 ** 4) return (v / 1024 ** 4).toFixed(2) + " TB";
      if (v >= 1024 ** 3) return (v / 1024 ** 3).toFixed(2) + " GB";
      if (v >= 1024 ** 2) return (v / 1024 ** 2).toFixed(2) + " MB";
      return (v / 1024).toFixed(1) + " KB";
    },
    usd: (v) => v >= 100 ? "$" + Math.round(v).toLocaleString() : "$" + v.toFixed(2)
  };

  // Seeded RNG (mulberry32) so demos are reproducible
  CAIE.rng = (seed) => {
    let a = seed >>> 0;
    return () => {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  CAIE.gauss = (rand) => {
    // Box–Muller
    let u = 0, v = 0;
    while (u === 0) u = rand();
    while (v === 0) v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  window.CAIE = CAIE;

  // ---------- boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    buildSidebar();
    buildFooterNav();
    initQuizzes();
    initTabs();
    renderMath();
    document.dispatchEvent(new CustomEvent("caie:ready"));
  });
})();
