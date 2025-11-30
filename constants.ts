import { SlideContent } from './types';

export const SLIDES: SlideContent[] = [
  // --- PART 1: Intro ---
  // 1. Cover
  {
    id: 'cover',
    title: '宇树机器人是如何学会走路的？',
    subtitle: '强化学习 RL',
    layout: 'cover',
    content: {
      media: [
        { type: 'video', placeholderText: '宇树机器人宣传片', caption: 'Unitree Robotics Demo' }
      ]
    }
  },
  // 2. Why Shocking
  {
    id: 'why-shocking',
    title: '宇树为什么震撼？',
    subtitle: '不是普通算法，而是“训练出来的”',
    layout: 'media-text',
    content: {
      text: [
        '宇树的动作不是通过规则实现的。',
        '关键技术：强化学习 (RL) + 大规模仿真训练。',
        '不是告诉它“怎么走”，而是让它自己“悟”出最稳的走法。'
      ],
      media: [
        { type: 'image', placeholderText: '跑、跳、抗推展示', caption: 'Running, Jumping, Pushing' }
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
    title: 'AlphaGo Zero',
    subtitle: 'RL的最佳案例',
    layout: 'media-text',
    content: {
      text: [
        '要理解机器人学走路，最好的类比就是 AlphaGo Zero。',
        '它演示了 AI 如何从一无所知变成世界最强。',
        '它的学习方式，和机器人学走路本质上一模一样。'
      ],
      media: [
        { type: 'image', placeholderText: 'AlphaGo Logo', caption: 'From Zero to Hero' }
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
        { type: 'image', placeholderText: '随机乱下的棋盘', caption: 'Random Initialization' }
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
        '超过原始版本，成为史上最强。',
        '创造了人类从未见过的新棋法。',
        '启示：机器人也可能学出人类直觉之外的动作。'
      ],
      media: [
        { type: 'image', placeholderText: 'AlphaGo Zero 曲线图', caption: 'Superhuman Performance' }
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
         { type: 'image', placeholderText: '简单RL循环示意图', caption: 'The RL Loop' }
      ]
    }
  },
  // 11. RL Framework Diagram
  {
    id: 'rl-framework',
    title: 'RL 结构图',
    subtitle: '奖励',
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
    title: '人类学走路',
    subtitle: '先天 CPG + 小脑误差校正',
    layout: 'media-text',
    content: {
      text: [
        '人类学走路不是靠奖励最大化，而是：',
        '1）先天 CPG 提供节律（基因写好的步伐程序）。',
        '2）小脑用感觉反馈做误差校正（摔倒 → 调整 → 更稳）。',
        '3）因此“人类学走路很容易”，底层结构已经准备好了。',
        '但机器没有 CPG 和小脑，只能靠无数次摔倒从零学起。',
        'RL 本质上是“人工小脑”：用试错把控制策略逼出来。'
      ],
      media: [
        { type: 'image', placeholderText: '婴儿迈步', caption: 'CPG + Cerebellum Adaptation' }
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
        { type: 'image', placeholderText: 'Humanoid 环境截图', caption: 'Mujoco Humanoid-v4' }
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

 // 17. Learning Phases (Merged, using grid)
{
  id: 'rl-learning-phases',
  title: 'RL 步态进化三阶段',
  subtitle: '从乱动 → 摔 → 蹒跚',
  layout: 'grid',
  content: {
    sections: [
      {
        title: '阶段 1：完全站不稳',
        icon: 'Activity',
        description: '站着就 +5 → 疯狂乱动 → 想站却站不住。',
        media: { type: 'video', placeholderText: 'Phase 1', caption: 'Trying to stay healthy' }
      },
      {
        title: '阶段 2：迈步就摔',
        icon: 'Zap',
        description: 'Forward Reward 让它“动一下就得分” → 一动就摔。',
        media: { type: 'video', placeholderText: 'Phase 2', caption: 'Forward but unstable' }
      },
      {
        title: '阶段 3：蹒跚走路',
        icon: 'Scale',
        description: 'Healthy + Forward 的折中 → 左右摇晃但能走。',
        media: { type: 'video', placeholderText: 'Phase 3', caption: 'Wobbly walking' }
      }
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
        { title: '精细 Reward', icon: 'Smile', description: '引入姿态、抬脚高度、节律平滑等指标，让步态更像人。' },
        { title: '大规模训练', icon: 'Layers', description: '成百上千环境并行训练，积累极庞大的运动经验。' },
        { title: '高精度物理建模', icon: 'Cpu', description: '重力、摩擦、关节特性都严谨还原，保证在现实机器上也稳定。' },
        { title: '抗扰动强化', icon: 'ShieldCheck', description: '专门训练被推、被拉、打滑后的快速恢复能力。' }
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
        '这是 Reward 设计极致优化的结果。'
      ],
      media: [
        { type: 'video', placeholderText: '宇树跑跳完整展示', caption: 'State of the Art Policy' }
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
        { title: '无需编程', icon: 'Code', description: '不用写死动作库。' },
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
        'RL 核芯：奖励 (Reward) 定义行为价值观。',
        '我的实验：展示了奖励如何一步步逼出走路动作。',
        '宇树：把 RL + 大规模训练做到极致的成果。'
      ]
    }
  }
];
