import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  // --- PART 1: Intro ---
  // 1. Cover
  {
    id: 'cover',
    title: '宇树机器人是如何学会走路的？',
    subtitle: '强化学习 RL 课堂分享',
    layout: 'cover',
    content: {
      media: [
        { 
          type: 'video', 
          placeholderText: 'Unitree 进化史 (Bilibili)', 
          caption: 'Unitree Robotics - Evolution of Motion',
          src: '//player.bilibili.com/player.html?bvid=BV1wC4y1H7CL&page=1&high_quality=1&danmaku=0' // Unitree B2 Bilibili Source
        }
      ]
    }
  },
  // 2. Why Shocking
  {
    id: 'why-shocking',
    title: '宇树为什么震撼？',
    subtitle: '不是“写程序”，而是“训练出来的”',
    layout: 'media-text',
    content: {
      text: [
        '宇树的动作不是人类一步一步教的。',
        '关键技术：强化学习 (RL) + 大规模仿真训练。',
        '结论：不是告诉它“怎么走”，而是让它自己“悟”出最稳的走法。'
      ],
      media: [
        { 
          type: 'image', 
          placeholderText: '跑、跳、抗推展示', 
          caption: 'Unitree B2 Running & Jumping',
          src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop'
        }
      ]
    }
  },
  // 3. Walking is Hard
  {
    id: 'walking-is-hard',
    title: '行走是最难的机控问题之一',
    subtitle: '为什么需要 RL？',
    layout: 'grid',
    content: {
      sections: [
        { title: '多关节协调', icon: 'Bone', description: '每条腿、每个关节必须实时配合。' },
        { title: '高维连续动作', icon: 'Activity', description: '控制维度极高，稍微错一点就会摔倒。' },
        { title: '实时平衡', icon: 'Scale', description: '需要在动态中时刻保持重心。' },
        { title: '人类对比', icon: 'Baby', description: '人类婴儿也要学几个月，机器人也一样难。' }
      ]
    }
  },

  // --- PART 2: AlphaGo Analogy ---
  // 4. Why AlphaGo
  {
    id: 'why-alphago',
    title: '为什么先讲 AlphaGo Zero？',
    subtitle: '理解“从零学会”的最佳案例',
    layout: 'media-text',
    content: {
      text: [
        '要理解机器人学走路，最好的类比就是 AlphaGo Zero。',
        '它演示了 AI 如何从一无所知变成世界最强。',
        '它的学习方式，和机器人学走路本质上一模一样。'
      ],
      media: [
        { 
          type: 'image', 
          placeholderText: 'AlphaGo Logo', 
          caption: 'From Zero to Hero',
          src: 'https://upload.wikimedia.org/wikipedia/en/3/35/AlphaGo_logo.svg'
        }
      ]
    }
  },
  // 5. Zero Start
  {
    id: 'zero-start',
    title: 'Zero：完全不会下棋的起点',
    subtitle: '和刚出生的机器人一样',
    layout: 'media-text',
    content: {
      text: [
        '没有棋谱、没有人类指导。',
        '完全随机落子 (Random Policy)。',
        '类比：刚出生的机器人连站都站不稳，大脑是一张白纸。'
      ],
      media: [
        { 
          type: 'image', 
          placeholderText: 'Go Board', 
          caption: 'Random Initialization',
          src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1000&auto=format&fit=crop'
        }
      ]
    }
  },
  // 6. How Zero Learns
  {
    id: 'zero-learning',
    title: 'Zero 如何学习？',
    subtitle: '自我对弈 + 奖励',
    layout: 'concept',
    content: {
      sections: [
        { title: '赢一盘', icon: 'Trophy', description: '奖励 +1 (Reward)' },
        { title: '输一盘', icon: 'AlertTriangle', description: '惩罚 -1 (Penalty)' },
        { title: '自我进化', icon: 'Repeat', description: '每天几百万盘自我对弈，调整策略。' }
      ]
    }
  },
  // 7. Day 3 Stats
  {
    id: 'zero-day-3',
    title: 'Zero 第 3 天：100:0',
    subtitle: '暴打旧版 AlphaGo',
    layout: 'outro',
    content: {
      title: '100 : 0',
      bullets: [
        '仅仅三天，它就暴打学习过人类棋谱的旧版 AlphaGo。',
        '关键点：它不是变聪明，而是练了太多。',
        '量变产生质变。'
      ]
    }
  },
  // 8. Day 40
  {
    id: 'zero-day-40',
    title: 'Zero 第 40 天：超越人类',
    subtitle: '学出人类没见过的棋形',
    layout: 'media-text',
    content: {
      text: [
        '超过 Master 版本，成为史上最强。',
        '创造了人类从未见过的新定式。',
        '启示：机器人也可能学出人类直觉之外的动作。'
      ],
      media: [
        { 
          type: 'image', 
          placeholderText: 'AlphaGo Data Chart', 
          caption: 'Superhuman Performance',
          src: 'https://deepmind.google/static/imagery/hero-research-alphago.jpg'
        }
      ]
    }
  },
  // 9. Zero Growth Chain
  {
    id: 'zero-chain',
    title: 'Zero 的成长链条',
    subtitle: '总结',
    layout: 'concept',
    content: {
      sections: [
        { title: '随机', icon: 'Shuffle', description: 'Random Policy' },
        { title: '奖励', icon: 'Trophy', description: 'Reward Signal' },
        { title: '找规律', icon: 'Brain', description: 'Pattern Recognition' },
        { title: '超越', icon: 'TrendingUp', description: 'Superhuman' }
      ]
    }
  },

  // --- PART 3: RL Principles ---
  // 10. RL Definition
  {
    id: 'rl-def',
    title: 'RL 一句话讲清',
    subtitle: '核心定义',
    layout: 'media-text',
    content: {
      text: [
        'RL = 状态 (State) → 动作 (Action) → 奖励 (Reward) → 策略更新。',
        '本质：试错 (Trial & Error) + 奖励信号 (Reward Signal)。'
      ],
      media: [
         { 
           type: 'image', 
           placeholderText: 'RL Loop Diagram', 
           caption: 'The Reinforcement Learning Loop',
           src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Reinforcement_learning_diagram.svg/1200px-Reinforcement_learning_diagram.svg.png'
         }
      ]
    }
  },
  // 11. RL Framework Diagram
  {
    id: 'rl-framework',
    title: 'RL 结构图',
    subtitle: '关键一页',
    layout: 'grid',
    content: {
      sections: [
        { title: '状态 (State)', icon: 'Activity', description: '眼睛看到的、身体感受到的（角度、速度）。' },
        { title: '动作 (Action)', icon: 'Zap', description: '电机怎么转、腿怎么发力。' },
        { title: '奖励 (Reward)', icon: 'Trophy', description: '走得好给糖，摔倒打手板。' },
        { title: '策略 (Policy)', icon: 'Brain', description: '机器人的大脑，负责做决定。' }
      ]
    }
  },
  // 12. Human Analogy
  {
    id: 'rl-human-analogy',
    title: '类比人类：婴儿学走路',
    subtitle: '小脑 vs RL',
    layout: 'media-text',
    content: {
      text: [
        '婴儿学走路完全同构：',
        '摔倒 → 疼（负奖励） → 小脑纠正动作。',
        '走稳 → 这种感觉对（正奖励） → 记住这个动作。',
        'RL 就是“机器人版的小脑”。'
      ],
      media: [
        { 
          type: 'video', 
          placeholderText: '婴儿学走路', 
          caption: 'Trial and Error Learning',
          src: 'https://www.youtube.com/embed/M9S_K8tVvLen?autoplay=1&mute=1'
        }
      ]
    }
  },

  // --- PART 4: Big Robots ---
  // 13. Sim vs Real
  {
    id: 'sim-vs-real',
    title: '为什么在仿真里训练？',
    subtitle: 'Simulation',
    layout: 'concept',
    content: {
      sections: [
        { title: '成本', icon: 'Scale', description: '真实摔一次几千块，仿真摔一次 0 元。' },
        { title: '效率', icon: 'Wind', description: '仿真可以加速时间，几分钟跑完几年的路。' },
        { title: '并行', icon: 'Layers', description: '同时跑几千个环境 (Parallel Training)。' }
      ]
    }
  },
  // 14. Humanoid Task
  {
    id: 'humanoid-task',
    title: 'Humanoid-v4 任务',
    subtitle: '机器人要解决什么？',
    layout: 'media-text',
    content: {
      text: [
        '高维观测 (Observations)：300+ 维数据输入。',
        '高维动作 (Actions)：17+ 个电机同时控制。',
        '目标：保持平衡 + 向前移动。'
      ],
      media: [
        { 
          type: 'image', 
          placeholderText: 'Mujoco Simulation', 
          caption: 'Mujoco Humanoid Environment',
          src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/MuJoCo_logo.svg'
        }
      ]
    }
  },
  // 15. Default Reward Structure
  {
    id: 'default-reward',
    title: '默认奖励结构',
    subtitle: '这决定了机器人的命运',
    layout: 'list',
    content: {
      code: `total_reward = 
  + 5.0 * healthy_reward      # 活着就给分
  + 1.25 * forward_vel_reward # 越快分越高
  - 0.1 * ctrl_cost           # 省点力气
  - 0.0 * contact_cost        # (v4 bug)`,
      sections: [
        { title: 'Healthy', description: '只要不摔倒，每一帧都加分。' },
        { title: 'Forward', description: '向前移动的速度奖励。' }
      ]
    }
  },

  // --- PART 5: My RL Experiment (Reward Focus) ---
  // User can now click these placeholders to add their own video links
  
  // 16. My RL Intro
  {
    id: 'my-rl-intro',
    title: '我的 RL 训练：Reward 决定一切',
    subtitle: '只讲 Reward，不讲算法',
    layout: 'concept',
    content: {
      sections: [
        { title: '模型不知道', icon: 'Brain', description: '模型不知道什么是“走路”。' },
        { title: '奖励定义', icon: 'Code', description: 'Reward 定义了“什么叫好动作”。' },
        { title: '结果', icon: 'Target', description: '我的三个视频，全都是 Reward 导致的。' }
      ]
    }
  },
  // 17. Phase 1
  {
    id: 'phase-1',
    title: '视频阶段 1：完全站不稳',
    subtitle: '原因：Healthy Reward 主导',
    layout: 'media-text',
    content: {
      text: [
        '现象：疯狂乱动，试图站住但做不到。',
        '原因：Healthy Reward = 站着就 +5。',
        '它为了拿这 5 分，尝试各种奇怪姿势。',
        '总结：Reward 给了目标，但没教“怎么达成”，所以全乱。'
      ],
      media: [
        { type: 'video', placeholderText: '[点击添加：疯狂乱动视频]', caption: 'Phase 1: Trying to stay "Healthy"' }
      ]
    }
  },
  // 18. Phase 2
  {
    id: 'phase-2',
    title: '视频阶段 2：迈步就摔',
    subtitle: '原因：Forward Reward 激励',
    layout: 'media-text',
    content: {
      text: [
        '现象：向前冲一下，然后立马摔倒。',
        '原因：Forward Reward = 动一下有分。',
        '它发现“动”能得分，但没学会控制重心。',
        '总结：Reward 激励它动，但没教它“稳”。'
      ],
      media: [
        { type: 'video', placeholderText: '[点击添加：迈步即摔视频]', caption: 'Phase 2: Greedy for Forward Reward' }
      ]
    }
  },
  // 19. Phase 3
  {
    id: 'phase-3',
    title: '视频阶段 3：蹒跚走路',
    subtitle: '原因：Healthy + Forward 折中',
    layout: 'media-text',
    content: {
      text: [
        '现象：像喝醉了一样，左右摇晃但能走。',
        '原因：Healthy (别摔) + Forward (要动) 的博弈结果。',
        '策略发现“晃着走”既能前进又不容易摔。',
        '总结：Reward 没教“自然”，只教了“活着+前进”。'
      ],
      media: [
        { type: 'video', placeholderText: '[点击添加：蹒跚步态视频]', caption: 'Phase 3: The Trade-off Solution' }
      ]
    }
  },
  // 20. My RL Summary
  {
    id: 'my-rl-summary',
    title: '我的 RL 实验总结',
    subtitle: 'Reward = 价值观',
    layout: 'concept',
    content: {
      sections: [
        { title: '站不稳', icon: 'Activity', description: 'Healthy 主导，由于太难而乱动。' },
        { title: '迈步摔', icon: 'AlertTriangle', description: 'Forward 主导，贪婪导致失稳。' },
        { title: '蹒跚', icon: 'Scale', description: 'Healthy + Forward 的“苟且”折中。' }
      ]
    }
  },

  // --- PART 6: Back to Unitree ---
  // 21. How Unitree Solved
  {
    id: 'unitree-solution',
    title: '宇树是如何解决的？',
    subtitle: '为什么它走得那么好？',
    layout: 'grid',
    content: {
      sections: [
        { title: '精细 Reward', icon: 'Smile', description: '加入姿态、抬脚高度、平滑度等奖励，强迫动作像人。' },
        { title: '大规模训练', icon: 'Layers', description: '海量环境并行，练得更多。' },
        { title: '物理高保真', icon: 'Cpu', description: 'Sim2Real 迁移无缝衔接。' },
        { title: '抗扰动', icon: 'ShieldCheck', description: '专门训练推搡恢复能力。' }
      ]
    }
  },
  // 22. Unitree Final
  {
    id: 'unitree-final',
    title: '宇树最终能力展示',
    subtitle: '全能选手',
    layout: 'media-text',
    content: {
      text: [
        '高速奔跑、灵活跳跃、稳定抗推。',
        '对比我的“蹒跚阶段”，反衬宇树的强大。',
        '这是 Reward 设计极致优化的结果。'
      ],
      media: [
        { 
          type: 'video', 
          placeholderText: '宇树跑跳完整展示', 
          caption: 'State of the Art Policy',
          src: 'https://www.youtube.com/embed/zXaZkdD4UA0?autoplay=1&mute=1'
        }
      ]
    }
  },
  // 23. RL Meaning
  {
    id: 'rl-meaning',
    title: 'RL 的意义',
    subtitle: '机器人能“悟”动作',
    layout: 'concept',
    content: {
      sections: [
        { title: '无需编程', icon: 'Code', description: '不用写死动作库，不用调 PID。' },
        { title: '自动生成', icon: 'Zap', description: '未来所有复杂动作都将自动学出。' },
        { title: '更像生物', icon: 'DNA', description: '赋予机器人类似生物的运动直觉。' }
      ]
    }
  },

  // --- PART 7: Outro ---
  // 24. Outro
  {
    id: 'outro',
    title: '总结',
    subtitle: '谢谢大家',
    layout: 'outro',
    content: {
      bullets: [
        'AlphaGo Zero：证明 RL 能从零学到最强。',
        'RL 核心：奖励 (Reward) 定义行为价值观。',
        '我的实验：展示了奖励如何一步步逼出走路动作。',
        '宇树：把 RL + 大规模训练做到极致的成果。'
      ]
    }
  }
];