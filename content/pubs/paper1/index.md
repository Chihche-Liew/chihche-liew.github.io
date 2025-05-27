---
title: "Controllable Traffic Simulation through LLM-Guided Hierarchical Chain-of-Thought Reasoning" 
date: 2024-09-23
author: ["Zhiyuan Liu", "Leheng Li", "Yuning Wang", "Haotian Lin", "Zhizhe Liu", "Lei He", "Jianqiang Wang"]
summary: "This paper introduces a diffusion-based, LLM-enhanced traffic simulation framework with a chain-of-thought mechanism and Frenet-frame-based cost functions to improve controllability and spatial understanding in autonomous driving scenario generation, achieving superior performance on the Waymo Open Motion Dataset."
cover:
    alt: "Controllable Traffic Simulation through LLM-Guided Hierarchical Chain-of-Thought Reasoning"
    relative: true
editPost:
    URL: "https://arxiv.org/pdf/2409.15135"
    Text: "arXiv preprint arXiv:2409.15135"
---

---

##### Abstract

Evaluating autonomous driving systems in complex and diverse traffic scenarios through controllable simulation is essential to ensure their safety and reliability. However, existing traffic simulation methods face challenges in their controllability. To address this, this paper proposes a novel diffusion-based and LLM-enhanced traffic simulation framework. Our approach incorporates a unique chain-of-thought (CoT) mechanism, which systematically examines the hierarchical structure of traffic elements and guides LLMs to thoroughly analyze traffic scenario descriptions step by step, enhancing their understanding of complex situations. Furthermore, we propose a Frenet-frame-based cost function framework that provides LLMs with geometrically meaningful quantities, improving their grasp of spatial relationships in a scenario and enabling more accurate cost function generation. Experiments on the Waymo Open Motion Dataset (WOMD) demonstrate that our method handles more intricate descriptions, generates a broader range of scenarios in a controllable manner, and outperforms existing diffusion-based methods in terms of efficiency.

---

##### Citation

Liu, Zhiyuan, et al. "Controllable traffic simulation through llm-guided hierarchical chain-of-thought reasoning." *arXiv preprint arXiv:2409.15135* (2024).

```BibTeX
@article{liu2024controllable,
  title={Controllable traffic simulation through llm-guided hierarchical chain-of-thought reasoning},
  author={Liu, Zhiyuan and Li, Leheng and Wang, Yuning and Lin, Haotian and Liu, Zhizhe and He, Lei and Wang, Jianqiang},
  journal={arXiv preprint arXiv:2409.15135},
  year={2024}
}
```
