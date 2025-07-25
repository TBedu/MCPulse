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
  bedrock: boolean
  hideIp?: boolean
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
    ip: 'mc.example.com',
    bedrock: false,
    hideIp: false
  },
  {
    id: '2',
    name: 'X_Star Network',
    type: '生存',
    version: '互通',
    icon: '/icon/2.jpg',
    description: '开设原版生存、原版城建、趣味小游戏。兼容JE1.8-1.21.7，BE最新。由 TBedu Network 旗下 X_Star 管理组 运营，是一个充满活力与创意的 Minecraft 群组服务器。',
    link: 'https://wiki.tbedu.top',
    ip: 'mc.tbedu.top',
    bedrock: false,
    hideIp: false
  },
  {
    id: '3',
    name: 'BySide ',
    type: '生存',
    version: '1.21.1',
    icon: '/img/default.png',
    description: '拥有生电生存小游戏合集的我的世界高版本服务器，服务器建设中，持续更新中......',
    link: 'https://qm.qq.com/q/S9wHA1N8IO',
    ip: 'mc.byside.top',
    bedrock: false,
    hideIp: false
  },
  {
    id: '4',
    name: 'Starry Isles',
    type: '空岛',
    version: '基岩版',
    icon: '/icon/StarryIsles.png',
    description: '这是一个开了一年的基岩版空岛服，拥有单方块空岛的玩法，玩家领取一个属于自己的空岛。使用方块刷新包，可以让空岛中心的方块刷出资源。服务器还有等级系统，玩家可以通过购买方块包获得经验，等级到达某些层次时，玩家的血量上限会得到提升。服务器还有技能系统与boss。本服务器将是您度过愉快游戏时光的绝佳选择。',
    link: 'minecraft://?addExternalServer=starry-isles|starry-isles.play-mc.space:54875',
    ip: '150.138.79.19:54875',
    bedrock: true,
    hideIp: false
  },
  {
    id: '5',
    name: 'OriginsCraft',
    type: '生存',
    version: '1.21.7',
    icon: '/icon/OriginsCraft.png',
    description: 'OriginsCraft正版服是一个纯生存养老探索向的公益型（暂时的）插件服务器，是面向新时代的优秀社区环境和永不换挡的正版Minecraft服务器，服务器使用PURPUR核心进行运转和维护，使用简幻云购买的服务器，性能有保障，没有超开行为。（因部分原因此服务器运营商会经常被ddos攻击，望理解） 服目前拥有箱子锁、随机传送、死亡不掉落。服务器采用PURPUR端，服务器允许部分生电特性，但不推荐专业的生电玩家游玩此服务器。本服限制地图范围（半径3w），但可保证世界资源不会枯竭。服务器没有ban例如TNT、红石类型方块，只要你的行为不会对服务器造成卡顿即可随意使用。',
    link: 'https://qun.qq.com/universal-share/share?ac=1&authKey=2znW8zAgyO6v0CBitUsn63LqZVD0RE68QLzsNc%2BoVlW%2Brva628gCRA3nq1YOxat4&busi_data=eyJncm91cENvZGUiOiI4NDk4OTEwNDIiLCJ0b2tlbiI6IndlMGVjTlFpN0J5UjUzM2VIOTJhZloxN1h1akw4RSsxYjRFZGNsRE83UGVPa1lRV0hMbWVhYWs1U21paFRVblIiLCJ1aW4iOiI1NTE0NzQ1ODEifQ%3D%3D&data=lHadmP1EviT1aK2FQI-RGSFbn3vyCE5VcuOGNodlD1riesuUFhetQomr5AAuwMUa_1RP-wg1PjBrrwCcH_0SIw&svctype=4&tempid=h5_group_info',
    ip: 'play.originscraft.top',
    bedrock: false,
    hideIp: false
  },
]