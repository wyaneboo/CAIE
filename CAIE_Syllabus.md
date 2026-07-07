# Chartered AI Engineer (CAIE)
### A Three-Level Professional Certification Syllabus — Calibrated to CFA-Level Rigor
 
**Total commitment:** ~900–1,000 hours across three sequential levels
**Pass philosophy:** breadth at Level I, applied systems at Level II, synthesis & judgment at Level III
**Exam philosophy:** Level I tests whether you *know*, Level II tests whether you can *build*, Level III tests whether you can *decide*.
 
---
 
## How to read this document
 
Each topic area lists **Learning Outcome Statements (LOS)** using CFA-style command verbs. The verb tells you the depth expected:
 
- *define / describe / list* → recall (Level I weighting)
- *calculate / implement / derive* → application (Level I–II)
- *analyze / compare / diagnose* → judgment (Level II)
- *design / evaluate / defend / synthesize* → mastery (Level III)
Treat each LOS as an exam question waiting to happen. If you can't answer it cold, you haven't learned it.
 
---
---
 
# LEVEL I — FOUNDATIONS
**~300 hours · Computer-based · 180 multiple-choice questions over two 2.25-hour sessions**
**Goal: prove you have the mathematical, statistical, and software bedrock to build nothing-from-scratch.**
 
Level I is deliberately wide and unforgiving on fundamentals. Like CFA L1, it punishes people who skipped the boring foundations and tried to start at the exciting part.
 
### Curriculum weights
| Topic Area | Weight |
|---|---|
| 1. Mathematical Foundations | 20% |
| 2. Probability, Statistics & Information Theory | 18% |
| 3. Programming & Software Engineering for AI | 14% |
| 4. Classical Machine Learning | 18% |
| 5. Deep Learning Fundamentals | 16% |
| 6. Data Engineering Fundamentals | 8% |
| 7. Professional Ethics & Responsible AI I | 6% |
 
---
 
## Topic 1 — Mathematical Foundations (20%)
 
**1.1 Linear Algebra**
- Define vector spaces, basis, rank, span, and linear independence.
- Calculate matrix products, inverses, determinants, and traces by hand for small matrices.
- Describe and compute eigenvalues, eigenvectors, and the eigendecomposition.
- Explain the Singular Value Decomposition (SVD) and its relationship to PCA and low-rank approximation.
- Interpret matrix operations geometrically (rotation, scaling, projection).
- Describe the role of positive-definite matrices and the Gram matrix.
**1.2 Calculus & Optimization**
- Compute partial derivatives, gradients, Jacobians, and Hessians.
- Apply the chain rule to compositions of functions (the mathematical core of backprop).
- Define convexity and explain why it matters for optimization guarantees.
- Describe gradient descent, and derive the update rule from a Taylor expansion.
- Compare GD, SGD, momentum, RMSProp, and Adam, and explain the bias-correction terms in Adam.
- Explain second-order methods (Newton's method) and why they're rarely used at scale.
**1.3 Numerical Methods & Stability**
- Describe floating-point representation, machine epsilon, and catastrophic cancellation.
- Explain why we compute log-sum-exp instead of naive softmax.
- Describe condition number and its effect on optimization.
- Define gradient vanishing/explosion in numerical terms.
---
 
## Topic 2 — Probability, Statistics & Information Theory (18%)
 
**2.1 Probability**
- Apply the axioms of probability, conditional probability, and Bayes' theorem.
- Describe common distributions (Bernoulli, Binomial, Gaussian, Poisson, Categorical, Dirichlet) and their use cases.
- Calculate expectation, variance, covariance, and correlation.
- Explain the Central Limit Theorem and the Law of Large Numbers.
- Describe joint, marginal, and conditional distributions.
**2.2 Statistical Inference**
- Compare frequentist and Bayesian inference paradigms.
- Apply Maximum Likelihood Estimation (MLE) and Maximum A Posteriori (MAP) estimation.
- Construct and interpret confidence intervals and hypothesis tests.
- Explain the bias-variance tradeoff formally.
- Describe bootstrapping and cross-validation as resampling methods.
**2.3 Information Theory**
- Define entropy, cross-entropy, and KL divergence; compute each for discrete distributions.
- Explain why cross-entropy is the natural loss for classification.
- Describe mutual information and its applications.
- Connect maximum likelihood to minimizing KL divergence.
---
 
## Topic 3 — Programming & Software Engineering for AI (14%)
 
**3.1 Python Mastery**
- Describe Python's memory model, the GIL, and its implications for concurrency.
- Apply vectorized NumPy operations and explain broadcasting rules.
- Use generators, decorators, context managers, and type hints idiomatically.
- Profile and optimize Python code (cProfile, line_profiler, memory profiling).
**3.2 Software Engineering Practice**
- Apply version control workflows (branching, rebasing, Conventional Commits).
- Write unit, integration, and property-based tests for ML code.
- Describe dependency management and reproducible environments (venv, Poetry, Docker).
- Explain clean architecture, SOLID principles, and separation of concerns as applied to ML systems.
**3.3 Computational Foundations**
- Analyze time and space complexity (Big-O) of common algorithms.
- Describe CPU vs GPU vs TPU architectures and the memory hierarchy.
- Explain parallelism, vectorization (SIMD), and why GPUs suit matrix math.
---
 
## Topic 4 — Classical Machine Learning (18%)
 
**4.1 Supervised Learning**
- Derive and implement linear and logistic regression from scratch.
- Explain regularization (L1/L2), and contrast their effects on weights.
- Describe decision trees, and the splitting criteria (Gini, entropy).
- Explain ensemble methods: bagging, random forests, boosting (AdaBoost, gradient boosting, XGBoost).
- Describe SVMs, the kernel trick, and the margin-maximization objective.
- Apply k-NN and explain the curse of dimensionality.
**4.2 Unsupervised Learning**
- Implement k-means and explain its convergence properties and failure modes.
- Describe hierarchical clustering and DBSCAN.
- Apply PCA for dimensionality reduction and explain variance retention.
- Describe Gaussian Mixture Models and the EM algorithm.
- Explain t-SNE and UMAP for visualization, and their distortions.
**4.3 Model Evaluation**
- Calculate accuracy, precision, recall, F1, ROC-AUC, PR-AUC, and explain when each is appropriate.
- Diagnose overfitting/underfitting from learning curves.
- Describe class imbalance strategies (resampling, class weights, focal loss).
- Explain data leakage and how to prevent it in pipelines.
---
 
## Topic 5 — Deep Learning Fundamentals (16%)
 
**5.1 Neural Network Mechanics**
- Describe the perceptron, MLP, and universal approximation theorem.
- Derive backpropagation for a multi-layer network.
- Compare activation functions (sigmoid, tanh, ReLU, GELU, SwiGLU) and their gradient behavior.
- Explain weight initialization schemes (Xavier, He) and why they matter.
**5.2 Training Deep Networks**
- Describe batch normalization, layer normalization, and RMSNorm.
- Explain dropout, weight decay, and early stopping as regularizers.
- Describe learning-rate schedules (warmup, cosine decay) and their rationale.
- Diagnose training instabilities (NaN losses, dead neurons, exploding gradients).
**5.3 Core Architectures**
- Describe CNNs: convolution, pooling, receptive fields, parameter sharing.
- Describe RNNs, LSTMs, GRUs, and the vanishing-gradient problem they address.
- Explain the attention mechanism at a foundational level.
- Describe autoencoders and their latent-space interpretation.
---
 
## Topic 6 — Data Engineering Fundamentals (8%)
 
- Describe structured, semi-structured, and unstructured data formats (Parquet, Avro, JSON, ORC).
- Explain ETL vs ELT and batch vs streaming paradigms.
- Apply SQL for aggregation, joins, window functions, and CTEs.
- Describe data warehouses, lakes, and lakehouses.
- Explain data validation, schema enforcement, and quality monitoring.
- Describe feature stores and their role in training/serving consistency.
---
 
## Topic 7 — Professional Ethics & Responsible AI I (6%)
 
*(This is the CAIE equivalent of CFA's ethics core — it appears at every level and is weighted disproportionately to its size. A borderline candidate who fails ethics fails the exam.)*
 
- Describe the CAIE Code of Conduct and Standards of Professional Practice.
- Define algorithmic bias, fairness, and the major fairness criteria (demographic parity, equalized odds) — and explain why they're mutually incompatible.
- Describe data privacy principles (consent, minimization, purpose limitation) and major regulations (GDPR, the EU AI Act risk tiers).
- Explain informed consent and dual-use risk in AI development.
- Describe the duty of competence: knowing the limits of your own models.
---
---
 
# LEVEL II — APPLICATION & SYSTEMS
**~320 hours · Item-set format · ~22 vignettes, each with 4–6 questions, two 2.25-hour sessions**
**Goal: prove you can architect, train, and operate real systems — not just recite their parts.**
 
Level II is where most candidates fail. Like CFA L2, every question is wrapped in a realistic scenario ("vignette") — a company, a dataset, a constraint, a bug — and you must apply judgment, not recall facts.
 
### Curriculum weights
| Topic Area | Weight |
|---|---|
| 8. Advanced Architectures (Transformers, Diffusion, GNNs) | 18% |
| 9. NLP & Large Language Models | 16% |
| 10. Computer Vision | 10% |
| 11. Reinforcement Learning | 10% |
| 12. ML Systems Design & Distributed Training | 14% |
| 13. MLOps & Production Engineering | 14% |
| 14. Retrieval, RAG & Vector Systems | 10% |
| 15. Responsible AI II — Evaluation, Fairness & Interpretability | 8% |
 
---
 
## Topic 8 — Advanced Architectures (18%)
 
**8.1 The Transformer, in full**
- Derive scaled dot-product attention and explain the √d scaling factor.
- Decompose multi-head attention into Q/K/V projections and explain why multiple heads help.
- Explain positional encodings: sinusoidal, learned, RoPE, ALiBi — and their extrapolation properties.
- Describe the full transformer block: attention, FFN, residuals, normalization placement (pre-LN vs post-LN).
- Analyze the quadratic complexity of attention and describe efficiency variants (FlashAttention, sparse, linear, sliding-window).
- Explain KV caching, its memory cost, and techniques to reduce it (MQA, GQA, paged attention).
**8.2 Generative architectures**
- Describe VAEs and the reparameterization trick.
- Describe GANs, the minimax objective, and mode collapse.
- Explain diffusion models: forward/reverse process, denoising objective, DDPM vs DDIM sampling.
- Compare diffusion and autoregressive generation tradeoffs.
**8.3 Graph & multimodal**
- Describe Graph Neural Networks and message passing.
- Explain how multimodal models align text and image embeddings (CLIP-style contrastive learning).
---
 
## Topic 9 — NLP & Large Language Models (16%)
 
**9.1 Language modeling foundations**
- Describe tokenization schemes (BPE, WordPiece, SentencePiece, Unigram) and their tradeoffs.
- Explain the pretraining objective (next-token prediction) and its emergent consequences.
- Compare encoder-only (BERT), decoder-only (GPT), and encoder-decoder (T5) paradigms.
- Describe embeddings and contextual vs static representations.
**9.2 LLM behavior & adaptation**
- Explain in-context learning and few-shot prompting.
- Compare full fine-tuning, LoRA/QLoRA, adapters, and prefix-tuning by cost and effect.
- Describe instruction tuning and its data requirements.
- Explain decoding strategies (greedy, beam, top-k, top-p, temperature) and their effect on output.
- Describe hallucination: its mechanistic causes and mitigation strategies.
**9.3 Evaluation**
- Apply LLM evaluation methods (perplexity, benchmark suites, LLM-as-judge) and explain their limits.
- Diagnose contamination and benchmark gaming.
---
 
## Topic 10 — Computer Vision (10%)
 
- Describe modern CNN architectures (ResNet skip connections, EfficientNet scaling).
- Explain Vision Transformers (ViT) and patch embeddings.
- Describe object detection (YOLO, Faster R-CNN) and segmentation (U-Net, Mask R-CNN).
- Apply transfer learning and fine-tuning for vision tasks.
- Describe data augmentation strategies and their regularizing effect.
- Explain image generation and editing pipelines (latent diffusion).
---
 
## Topic 11 — Reinforcement Learning (10%)
 
- Formulate problems as Markov Decision Processes (states, actions, rewards, transitions, discount).
- Derive the Bellman equations and explain value vs policy iteration.
- Compare model-free methods: Q-learning, SARSA, DQN.
- Describe policy-gradient methods (REINFORCE, A2C, PPO) and the variance-reduction role of the baseline.
- Explain the exploration-exploitation tradeoff (ε-greedy, UCB, Thompson sampling).
- Describe RLHF: reward modeling, the PPO loop, and its role in LLM alignment.
- Compare RLHF with DPO and other preference-optimization methods.
---
 
## Topic 12 — ML Systems Design & Distributed Training (14%)
 
- Describe data, model, tensor, and pipeline parallelism — and when each is needed.
- Explain ZeRO/sharded optimizer states and FSDP.
- Calculate memory requirements for training (parameters, gradients, optimizer states, activations).
- Describe mixed-precision training (FP16/BF16/FP8) and loss scaling.
- Explain gradient accumulation, checkpointing, and their memory/compute tradeoffs.
- Describe distributed communication primitives (all-reduce, all-gather) and interconnect constraints.
- Design a training cluster given a model size, dataset, and budget.
---
 
## Topic 13 — MLOps & Production Engineering (14%)
 
- Describe the end-to-end ML lifecycle and the train/serve skew problem.
- Design CI/CD pipelines for models (testing, validation gates, automated retraining).
- Explain model registries, versioning, and lineage tracking.
- Compare serving patterns: batch, real-time, streaming, and the latency/throughput tradeoff.
- Describe model optimization for inference: quantization, pruning, distillation, compilation (ONNX, TensorRT).
- Explain monitoring: data drift, concept drift, performance degradation, and alerting.
- Describe A/B testing, canary deployments, and shadow deployments for models.
- Diagnose a production incident from latency/error/drift signals (vignette-heavy).
---
 
## Topic 14 — Retrieval, RAG & Vector Systems (10%)
 
- Compare sparse (BM25, TF-IDF) and dense retrieval, and explain hybrid search.
- Describe embedding models and approximate nearest-neighbor indexes (HNSW, IVF, product quantization).
- Analyze chunking strategies and their effect on retrieval quality.
- Explain re-ranking and the bi-encoder vs cross-encoder tradeoff.
- Diagnose retrieval drift and context-relevance failures.
- Describe advanced patterns: query expansion, adaptive/agentic RAG, multi-hop retrieval.
- Evaluate a RAG system (faithfulness, context precision/recall, answer relevance).
---
 
## Topic 15 — Responsible AI II (8%)
 
- Apply interpretability methods: SHAP, LIME, attention analysis, and their limitations.
- Describe mechanistic interpretability concepts (features, circuits, probing).
- Audit a model for bias across subgroups and explain remediation tradeoffs.
- Describe adversarial attacks (evasion, poisoning, prompt injection, jailbreaks) and defenses.
- Explain model cards, datasheets, and documentation standards.
- Evaluate privacy-preserving techniques (differential privacy, federated learning) by their guarantees and costs.
---
---
 
# LEVEL III — SYNTHESIS, SAFETY & JUDGMENT
**~300 hours · Constructed-response (essay) + item sets · two 2.25-hour sessions**
**Goal: prove you can make sound architectural and ethical decisions under real constraints, and defend them in writing.**
 
Level III abandons multiple choice for **constructed-response essays** — the defining feature of CFA L3. You're given an open-ended scenario and must *design*, *justify*, and *defend* a solution. There's no answer key to memorize; there's a grading rubric for reasoning. This is what separates an engineer from a chartered one.
 
### Curriculum weights
| Topic Area | Weight |
|---|---|
| 16. Scaling Laws & Frontier System Architecture | 16% |
| 17. LLM Training, Fine-Tuning & Alignment | 16% |
| 18. Agentic Systems & Orchestration | 14% |
| 19. Technical AI Safety & Alignment | 14% |
| 20. Production Reliability, Governance & Economics | 16% |
| 21. Capstone System Design | 16% |
| 22. Professional Standards & Ethics III | 8% |
 
---
 
## Topic 16 — Scaling Laws & Frontier Architecture (16%)
 
- Derive and apply scaling laws (Chinchilla compute-optimal allocation of parameters vs tokens).
- Evaluate the compute/data/parameter tradeoff for a fixed FLOPs budget.
- Describe Mixture-of-Experts architectures: routing, load balancing, sparse activation.
- Explain long-context techniques and their architectural costs.
- Design a model architecture given target capability, latency, and hardware constraints, and defend every choice.
---
 
## Topic 17 — LLM Training, Fine-Tuning & Alignment (16%)
 
- Design a pretraining data pipeline: sourcing, dedup, filtering, mixture weighting, and their downstream effects.
- Construct a post-training recipe: SFT → reward modeling → RLHF/DPO, justifying data and method choices.
- Compare alignment methods (RLHF, DPO, constitutional methods, RLAIF) and recommend one for a given context.
- Diagnose alignment failures (reward hacking, sycophancy, mode collapse) and propose fixes.
- Evaluate fine-tuning vs RAG vs prompting for a given business problem, defending the tradeoff.
---
 
## Topic 18 — Agentic Systems & Orchestration (14%)
 
- Decompose the "agent = LLM + harness" pattern into planning, memory, tool use, and reflection.
- Compare orchestration frameworks (LangGraph, AutoGen, and graph- vs pipeline-based control flow).
- Design tool-calling and function-calling interfaces, including the MCP connector pattern.
- Explain multi-agent coordination, delegation, and failure propagation.
- Diagnose agentic failure modes (loops, context overflow, tool misuse, cascading errors) and design guardrails.
- Evaluate agent reliability and design observability for non-deterministic systems.
---
 
## Topic 19 — Technical AI Safety & Alignment (14%)
 
- Describe the alignment problem and distinguish outer vs inner alignment.
- Explain specification gaming, goal misgeneralization, and deceptive alignment.
- Design evaluation suites for dangerous capabilities and safety properties.
- Describe red-teaming methodology and defense-in-depth.
- Evaluate scalable oversight approaches (debate, recursive reward modeling, weak-to-strong generalization).
- Defend a deployment decision under capability uncertainty (essay-style).
---
 
## Topic 20 — Production Reliability, Governance & Economics (16%)
 
- Design SLOs/SLAs for AI systems and explain error budgets.
- Architect for reliability: fallbacks, circuit breakers, graceful degradation, rate limiting.
- Model inference cost economics (cost per token, GPU utilization, batching, caching, build-vs-buy).
- Optimize a serving stack for cost under a latency constraint, showing the math.
- Design AI governance: model risk management, audit trails, approval workflows, regulatory compliance.
- Construct an incident-response and postmortem process for AI-specific failures.
---
 
## Topic 21 — Capstone System Design (16%)
 
The integrative core. Candidates receive a multi-page business scenario and must produce a written design covering:
- Requirements elicitation and constraint identification.
- End-to-end architecture (data → training/selection → serving → monitoring).
- Model and infrastructure selection with justified tradeoffs.
- Cost, latency, and reliability analysis with quantitative estimates.
- Risk, safety, and ethics assessment.
- A staged rollout and evaluation plan.
Graded like a CFA L3 essay: on the *quality and defensibility of reasoning*, not a single correct answer.
 
---
 
## Topic 22 — Professional Standards & Ethics III (8%)
 
- Apply the full Code and Standards to ambiguous real-world cases.
- Resolve conflicts between business pressure, user welfare, and professional duty.
- Evaluate the societal externalities of a deployment (labor displacement, misuse, environmental cost).
- Defend a decision to *not* build or deploy a system.
---
---
 
# Recommended study resources by level
 
**Level I**
- *Mathematics for Machine Learning* — Deisenroth, Faisal, Ong (free PDF)
- *Pattern Recognition and Machine Learning* — Bishop
- *An Introduction to Statistical Learning* — James et al. (free PDF)
- 3Blue1Brown linear algebra & neural network series
- Andrew Ng's Machine Learning Specialization
**Level II**
- *Deep Learning* — Goodfellow, Bengio, Courville (free online)
- *Dive into Deep Learning* (d2l.ai) — hands-on, free
- *Designing Machine Learning Systems* — Chip Huyen
- The Annotated Transformer; FlashAttention, LoRA, and RAG primary papers
- fast.ai Practical Deep Learning
**Level III**
- *Designing Data-Intensive Applications* — Kleppmann (systems thinking)
- Scaling-laws papers (Kaplan et al.; Chinchilla)
- RLHF / DPO / Constitutional AI primary papers
- Anthropic, OpenAI, and DeepMind safety/alignment research
- *AI Engineering* — Chip Huyen (production focus)
---
 