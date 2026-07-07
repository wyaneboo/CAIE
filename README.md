# CAIE — The Chartered AI Engineer Course

An interactive, self-contained course covering the full **Chartered AI Engineer (CAIE)**
three-level syllabus (see [CAIE_Syllabus.md](CAIE_Syllabus.md)) — 22 topics, ~900–1000 hours of
material, taking a beginner from foundations to senior-level architectural judgment.

**Written for readers with a physics (or other quantitative) degree but no computer-science
background.** Every topic leans on math you already know — linear algebra, statistical mechanics,
calculus — via explicit "⚛ Physics bridge" panels, while building software engineering and
production ML from zero. Unfamiliar jargon is decoded on every page, and every topic ends with
curated free resources (books with chapter numbers, primary papers, courses) to go deeper.

## Run it

No build step, no dependencies, no server required. Either:

- **Open [index.html](index.html) directly in a browser**, or
- serve the folder statically (avoids any browser file:// quirks):
  ```
  python -m http.server 8000       # then visit http://localhost:8000
  ```

The only external resource is the KaTeX CDN for math rendering (pages work without it; formulas
just show as source). Progress tracking (topic completion checkboxes, sidebar ticks) is stored in
your browser's localStorage. The theme toggle (◐) cycles auto → light → dark.

## What's inside

| | Level | Topics | Focus |
|---|---|---|---|
| **I** | Foundations (~300 h) | 1–7 | Math, probability, programming, classical ML, deep learning, data engineering, ethics — *know* |
| **II** | Application & Systems (~320 h) | 8–15 | Transformers, LLMs, vision, RL, distributed training, MLOps, RAG, responsible AI — *build* |
| **III** | Synthesis, Safety & Judgment (~300 h) | 16–22 | Scaling laws, alignment, agents, AI safety, reliability & economics, capstone, ethics — *decide* |

Nearly every core concept has an **interactive visualization** — ~60 widgets in total, including:

- eigenvector / SVD explorers, gradient-descent racers, CLT and entropy labs (Level I)
- a live attention heatmap, KV-cache calculator, BPE trainer, decoding playground,
  gridworld value-iteration vs Q-learning, training-memory calculator, drift-monitor simulator,
  dynamic-batching latency explorer, sparse-vs-dense retrieval and ANN index playgrounds (Level II)
- a Chinchilla compute-optimal allocator, MoE router with load-balancing, RLHF reward-hacking
  demo, agent-loop and failure-mode simulators, defense-in-depth stacker, error-budget and
  serving-cost optimizers, a rubric-scored capstone design studio, and an ethics deliberation
  trainer (Level III)

## Structure

```
index.html              course home: levels, topics, progress
assets/course.css       shared design system (light/dark)
assets/course.js        course manifest, navigation, quiz/tab engines,
                        canvas plotting toolkit (window.CAIE)
level1/  topic-01 … topic-07
level2/  topic-08 … topic-15
level3/  topic-16 … topic-22
CAIE_Syllabus.md        the source syllabus
```

Each topic page follows the same shape: learning outcomes → concept sections with physics
bridges and interactive widgets → jargon decoder → self-check questions (with explanations) →
"go deeper" resources → prev/next navigation.

## Suggested path

Go in order — later topics deliberately build on earlier ones (the capstone, Topic 21, maps
every stage of a system design back to the topics that cover it). Play with every widget's
"things to try" list; the widgets are the course, not decoration. Mark topics complete as you
go; the home page tracks per-level progress.
