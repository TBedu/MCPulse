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
export const serverTypes = ['生存', '生电','创造', '模组', '小游戏','群组服','无政府']
export const serverVersions = ['互通','基岩版','1.21.X','1.21.4','1.21.3','1.21.1','1.21','1.20.4','1.20.1', '1.18.2', '1.16.5']

export const servers: MinecraftServer[] = [
  {
    id: '1',
    name: 'test',
    type: '生存',
    version: '1.21.1',
    icon: '/img/default.png',
    description: ' 生存建筑 | 冒险探索 | 生电社交 | 养老摸鱼 组织介绍MCPulse 组织是由 凛夜·星海 等服务器服主为了共同发展而联合起来的有组织的整体。本组织旨在对各个有需求的服务器提供相对应的扶持，宣传以及建议，提出的建议并不具有专业性，仅供参考。MCPulse 服务器交流组织保留对本免责声明的最终解释权。如果您对此有异议，请及时向本组织管理组私信反馈。免责声明',
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
]