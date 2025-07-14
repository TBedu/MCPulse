---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const Technology = [
    {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3361271686&spec=640&img_type=jpg',
    name: '凛夜·星海',
    title: '站长',
    desc: '负责 MCPulse 官网的搭建、维护和运营，以及 MeowLand 服务器的管理和维护',
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2877181146&spec=640&img_type=jpg',
    name: 'FeltSquirrel727',
    title: '技术支持',
    desc: 'MCPulse 官网维护，X_Star 服主',
    links: [
      { icon: 'github', link: 'https://github.com/TBedu' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3461568163481938' }
    ]
  },
]
const Development = [
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=3962434748&spec=640&img_type=jpg',
    name: '邪恶草莓大鹅',
    title: '宣传兼设计',
    desc: '负责 MCPulse 宣传图绘制等', 
  },
  {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=2734322452&spec=640&img_type=jpg',
    name: '小山沂河',
    title: '审核',
    desc: '负责 MCPulse 服务器审核、评分等', 
  }
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>认识来自五湖四海的团队成员，我们致力于通过更完善的组织架构和更先进的宣传方案，让每个服务器发出自己独有的光芒</template>
  </VPTeamPageTitle>
    <VPTeamPageSection>
    <template #title>技术部</template>
    <template #lead>负责网站开发，以及各项组织所需的相关资源管理工作</template>
    <template #members>
      <VPTeamMembers size="small" :members="Technology" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>宣发部</template>
    <template #lead>负责制作宣传片，并统筹各类宣传事务，审核各服务器提交的成员服加入申请，进行综合评分。对于审核通过的服务器，将其相关数据提交至技术部。</template>
    <template #members>
      <VPTeamMembers size="small" :members="Development" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>