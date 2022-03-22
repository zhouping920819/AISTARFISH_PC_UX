/*
 * @Description: 
 * @Version: 2.0
 * @Autor: baijue
 * @Date: 2022-03-21 17:06:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-22 10:32:39
 */
// import React from 'react';

// export default ({ title }: { title: string }) => <h1>{title}</h1>;
import React from 'react';

export interface IHelloProps {
    /**
     * 可以这样写属性描述
     * @description       也可以显式加上描述名
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
     * @default           支持定义默认值
     */
    className?: string; // 支持识别 TypeScript 可选类型为非必选属性
}

const Foo: React.FC<IHelloProps> = () => <>Hello WorldFoo!</>;

export default Foo;