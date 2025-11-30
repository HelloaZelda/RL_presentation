<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1SFcoEp1P7cvU8-lZkKUYaWSZZNTq9ZuK

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## 媒体文件命名与放置
将下列素材放入 `public` 目录下对应的子文件夹，文件名需要与表格保持一致：
- 如果页面显示“请放入文件：/videos/xxx.mp4”，表示缺少对应素材，按提示命名后放入即可。

| 类型 | 存放路径 | 文件名 | 说明/用途 | 建议比例 | 建议分辨率 |
| --- | --- | --- | --- | --- | --- |
| 视频 | `public/videos` | `unitree-promo.mp4` | 首页封面宣传片 | 16:9 | ≥1920×1080 |
| 视频 | `public/videos` | `p1.mp4` | 训练阶段 1：完全站不稳 | 16:9 | ≥1920×1080 |
| 视频 | `public/videos` | `p2.mp4` | 训练阶段 2：一走就倒 | 16:9 | ≥1920×1080 |
| 视频 | `public/videos` | `p3.mp4` | 训练阶段 3：能挪动 | 16:9 | ≥1920×1080 |
| 视频 | `public/videos` | `unitree-showcase.mp4` | 最终 Unitree 能力展示 | 16:9 | ≥1920×1080 |
| 图片 | `public/pictures` | `unitree-running.jpg` | Unitree 跑跳抗推图 | 16:9 | ≥1920×1080 |
| 图片 | `public/pictures` | `alphago-logo.png` | AlphaGo Logo | 1:1 | ≥1024×1024 |
| 图片 | `public/pictures` | `random-go-board.png` | 随机落子的棋盘示意 | 4:3 | ≥1600×1200 |
| 图片 | `public/pictures` | `alphago-training-curve.png` | AlphaGo 训练曲线 | 16:9 | ≥1920×1080 |
| 图片 | `public/pictures` | `rl-loop-diagram.png` | RL 循环示意图 | 16:9 | ≥1920×1080 |
| 图片 | `public/pictures` | `baby-first-steps.jpg` | 婴儿迈步（人类类比） | 3:4 | ≥1200×1600 |
| 图片 | `public/pictures` | `humanoid-env.png` | Mujoco Humanoid 环境截图 | 16:9 | ≥1920×1080 |
