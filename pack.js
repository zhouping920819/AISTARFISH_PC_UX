/*
 * @Description:  更新ejs模版信息
 * @Version: 2.0
 * @Autor: baijue
 * @Date: 2022-03-21 18:52:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-21 18:54:13
 */
const { default: pack } = require('packw');
const path = require('path');

pack(true, {
  entry: {
    index: `../docs/index`,
  },
  output: {
    path: path.resolve(__dirname, 'output'),
  },
  // devServer: {
  //   port: 9100,
  // },
  resolve: {
    alias: {
      'AISTARFISH_PC_UX': path.resolve(__dirname, '../src'),
    },
  },
});
