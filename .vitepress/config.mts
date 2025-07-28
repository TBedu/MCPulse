import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  // VitePress's options here...
  lang: 'zh-CN',
  title: "MCPulse",
  description: "动态活力联谊组织",
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['meta', { name: 'description', content: 'MCPulse是一个动态活力联谊组织，让每个服务器都能找到自己的 peers，为玩家提供动态活力的联谊活动' }],
    ['meta', { name: 'keywords', content: 'MCPulse, 动态活力联谊组织, MCPulse组织, 集体宣传, 集宣, Minecraft, MC, 服务器, Minecraft服务器, MC服务器, 玩家联谊活动, 多元活动, 活跃氛围, 专业服务, 玩家交流, 玩家互动, 玩家合作, 玩家合作活动, 玩家合作组织, 玩家合作服务器, 玩家合作服务器活动, 玩家合作服务器组织, 玩家合作服务器活动组织' }]
  ],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://www.mcpulse.top'
  },
  themeConfig: {
    // Theme related configurations.
    darkModeSwitchLabel: "深色模式",
    lightModeSwitchTitle: "切换至浅色模式",
    darkModeSwitchTitle: "切换至深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回页首",
    langMenuLabel: "切换语言",
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    logo: '/img/MCPulse.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '规章制度', link: '/rules/' },
      { text: '成员服列表', link: '/servers/' },
      { text: '组织专栏', link: '/press/introduction/' },
      { text: '团队', link: '/team/' }
    ],
    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/Fk3UE6QAQq' },
      { icon: 'github', link: 'https://github.com/TBedu/MCPulse' }
    ],
    footer: {
      message: '根据 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 发布。',
      copyright: '版权所有 © 2025年起 <a href="https://www.mcpulse.top" target="_blank">MCPulse</a>'
    },
    editLink: {
      pattern: 'https://github.com/TBedu/MCPulse/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: [2, 6],
      label: "页面导航"
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '确认',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: '退出'
                }
              }
            }
          }
        }
      }
    }
  }
};

export default defineConfig(
  withSidebar(vitePressOptions, [
    {
      documentRootPath: '/',
      scanStartPath: 'press',
      basePath: '/press/',
      resolvePath: '/press/',
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      useFolderTitleFromIndexFile: true,
      useFolderLinkFromIndexFile: true,
      sortMenusByFrontmatterOrder: true,
      rootGroupText: '组织专栏',
      collapsed: true
     }
  ])
);