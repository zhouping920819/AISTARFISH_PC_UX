/*
 * @Description: 解析模版(因为组件比较多，我这里markdown文档通过ejs动态生成，当组件api/demo更新时，可以自动更新文档,无需手工维护)
 * @Version: 2.0
 * @Autor: baijue
 * @Date: 2022-03-21 18:18:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-22 11:02:41
 */
const ejs = require('ejs');
const data = require('./doc-data');
const path = require('path');
const fs = require('fs');

const tpl = `---
title: <%= title %>
order: <%= order %>
mobile: <%= mobile %>
group:
  title: <%= groupTitle %>
  order: <%= groupOrder %>
  path: <%= groupPath %>
---
<API src="../src/<%= name %>.tsx"></API>
`;

data.map((group, idx) => {
    console.log("group------", group)
    group.comps.map((item, subIdx) => {
        item.order = subIdx;
        item.groupOrder = idx;
        item.groupPath = group.path;
        item.groupTitle = group.title;
        item.mobile = typeof item.mobile === 'boolean' ? item.mobile : true;

        const fileName = path.resolve(__dirname, `./mdx/${item.name}.md`);

        if (fs.existsSync(fileName)) {
            fs.unlinkSync(fileName);
        }

        fs.writeFileSync(path.resolve(__dirname, `./mdx/${item.name}.md`), ejs.render(tpl, item));
    });
});

