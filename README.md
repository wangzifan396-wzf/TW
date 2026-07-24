# AI 可视化实验室集 · AI Visualization Labs

> 11 个零依赖交互式 AI 可视化项目，88+ 模块，纯 HTML/CSS/JS + SVG。把 AI 的黑箱拆成你能看见的零件。

## 总入口

**[https://wangzifan396-wzf.github.io/TW/](https://wangzifan396-wzf.github.io/TW/)**

打开即用，无需安装任何依赖。

## 项目列表

| # | 项目 | 描述 | Demo | Source |
|---|------|------|------|--------|
| 01 | AI 发展趋势 2026 | 聚合 Stanford HAI / McKinsey / Gartner 等权威数据源 | [Demo](https://wangzifan396-wzf.github.io/TW/ai-trends-2026.html) | [Code](https://github.com/wangzifan396-wzf/TW/blob/main/ai-trends-2026.html) |
| 02 | System Design 可视化 | 负载均衡、CAP 定理、一致性哈希等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/system-design-viz/) | [Code](https://github.com/wangzifan396-wzf/system-design-viz) |
| 03 | LLM 可视化实验室 | Tokenizer、Attention、KV-Cache 等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/llm-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/llm-viz-lab) |
| 04 | MoE 可视化实验室 | 专家路由、Top-K 选择、稀疏激活等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/moe-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/moe-viz-lab) |
| 05 | Agent 可视化实验室 | ReAct、工具调用、多智能体协作等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/agent-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/agent-viz-lab) |
| 06 | RAG 可视化实验室 | 文档分块、向量检索、重排序等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/rag-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/rag-viz-lab) |
| 07 | Transformer 可视化实验室 | 位置编码、Self-Attention、FFN 等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/transformer-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/transformer-viz-lab) |
| 08 | Diffusion 可视化实验室 | 前向加噪、反向去噪、U-Net 等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/diffusion-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/diffusion-viz-lab) |
| 09 | RLHF 可视化实验室 | PPO、DPO、奖励模型、安全对齐等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/rlhf-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/rlhf-viz-lab) |
| 10 | 推理优化可视化实验室 | KV-Cache、PagedAttention、量化、投机解码等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/inference-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/inference-viz-lab) |
| 11 | 微调技术可视化实验室 | LoRA、QLoRA、Adapter、Prefix Tuning 等 8 模块 | [Demo](https://wangzifan396-wzf.github.io/finetune-viz-lab/) | [Code](https://github.com/wangzifan396-wzf/finetune-viz-lab) |

## 技术栈

- 纯 HTML / CSS / JavaScript，零外部依赖
- SVG 数据可视化
- Linear 工程冷峻美学
- 响应式设计，支持 `prefers-reduced-motion`

## 设计原则

- **零依赖** — 不引用任何 CDN、框架或库，永远不会因上游变更而 break
- **单文件** — 每个项目就是一个 `index.html`，复制到任何地方都能运行
- **交互式** — 不是静态图，每个模块都有动画、滑块、按钮
- **高性能** — 全 `transform` 驱动动画，`requestAnimationFrame` 节流，无 `backdrop-filter`

## License

MIT License - 可自由使用、修改、分发。
