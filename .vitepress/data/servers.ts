export interface MinecraftServer {
  id: string
  name: string
  type: string
  version: string
  icon: string | {
    src: string
    alt?: string
    width?: number
    height?: number
  }
  description: string
  link: string
  ip?: string
}


// 服务器类型或版本仅供参考，如果不全，你自己写就行
export const serverTypes = ['生存', '生电','创造', '模组', '小游戏','群组服','无政府','空岛']
export const serverVersions = ['互通','基岩版','1.21.X','1.21.4','1.21.3','1.21.1','1.21','1.20.4','1.20.1', '1.18.2', '1.16.5']

export const servers: MinecraftServer[] = [
  {
    id: '1',
    name: 'test',
    type: '生存',
    version: '1.21.1',
    icon: '/img/default.png',
    description: ' 生存建筑 | 冒险探索 | 生电社交 | 养老摸鱼 ',
    link: 'https://qm.qq.com/q/8KQVFPSyA0',
    ip: 'mc.example.com'
  },
  {
    id: '2',
    name: 'X_Star Network',
    type: '生存',
    version: '互通',
    icon: '/icon/2.jpg',
    description: '开设原版生存、原版城建、趣味小游戏。兼容JE1.8-1.21.7，BE最新。由 TBedu Network 旗下 X_Star 管理组 运营，是一个充满活力与创意的 Minecraft 群组服务器。',
    link: 'https://wiki.tbedu.top',
    ip: 'mc.tbedu.top'
  },
  {
    id: '3',
    name: 'BySide ',
    type: '生存',
    version: '1.21.1',
    icon: '/img/default.png',
    description: '拥有生电生存小游戏合集的我的世界高版本服务器，服务器建设中，持续更新中......',
    link: 'https://qm.qq.com/q/S9wHA1N8IO',
    ip: 'mc.byside.top'
  },
  {
    id: '4',
    name: 'Starry Isles',
    type: '空岛',
    version: '基岩版',
    icon: '/img/StarryIsles.png',
    description: '这是一个开了一年的基岩版空岛服，拥有单方块空岛的玩法，玩家领取一个属于自己的空岛。使用方块刷新包，可以让空岛中心的方块刷出资源。服务器还有等级系统，玩家可以通过购买方块包获得经验，等级到达某些层次时，玩家的血量上限会得到提升。服务器还有技能系统与boss。本服务器将是您度过愉快游戏时光的绝佳选择。',
    link: 'minecraft://?addExternalServer=starry-isles|starry-isles.play-mc.space:54875',
    ip: '150.138.79.19:54875'
  },
]