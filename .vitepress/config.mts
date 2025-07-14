import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  // VitePress's options here...
  lang: 'zh-CN',
  title: "MCPulse",
  description: "动态活力联谊组织",
  head: [
    ['link', { rel: 'icon', href: './img/logo.ico' }]
  ],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://mcpulse.tbedu.top'
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
    logo: './img/MCPulse.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '公告', link: '/info/' },
      { text: '成员服列表', link: '/servers/' },
      { text: '组织专栏', link: '/press/' },
      { text: '团队', link: '/team/' }
    ],
    socialLinks: [
      { icon: 'qq', link: 'https://qm.qq.com/q/Fk3UE6QAQq' },
      { icon: 'github', link: 'https://github.com/TBedu/MCPulse' }
    ],
    footer: {
      message: '根据 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 发布。',
      copyright: '版权所有 © 2025年起 <a href="https://mcpulse.tbedu.top" target="_blank">MCPulse</a>'
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
      sortMenusByFrontmatterOrder: true
     }
//     {
//       documentRootPath: '/',
//       scanStartPath: 'service',
//       resolvePath: '/service/',
//       useTitleFromFileHeading: true,
//       useTitleFromFrontmatter: true,
//       useFolderTitleFromIndexFile: true,
//       useFolderLinkFromIndexFile: true,
//       sortMenusByFrontmatterOrder: true
//     }
  ])
);