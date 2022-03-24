/*
 * @Description: 
 * @Version: 2.0
 * @Autor: baijue
 * @Date: 2022-03-21 17:06:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-24 16:54:05
 */
import { defineConfig } from 'dumi';
const repo = 'AISTARFISH_PC_UX'
export default defineConfig({
  title: 'AISTARFISH_PC_UX',
  favicon:
    'https://static.aistarfish.com/front-release/file/F2021082014202908600003617.bitbug_favicon(1).ico',
  logo: 'https://static.aistarfish.com/front-release/file/F2021082014202908600003617.bitbug_favicon(1).ico',
  outputPath: 'docs',
  // outputPath: 'docs-dist',
  mode: 'site',
  webpack5: {},
  // resolve: {
  //   includes: ['mdx'],
  // },
  hash: true,
  navs: [
    {
      title: '文档',
      path: '/docs',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: '',
    },
  ],

  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.cache = {
      type: 'filesystem',
      name: 'dumi',
      buildDependencies: {
        config: [__filename],
      },
      store: 'pack',
    };
    memo.plugins.delete('friendly-error');
    memo.plugins.delete('copy');
  },

  styles: [
    `
    #root .__dumi-default-menu-header p {
      display:none;
    }
    #root .__dumi-default-menu-header h1 {
      font-size: 24px;
      margin: 16px auto;
    }
    `,
  ],
  // more config: https://d.umijs.org/config
});
