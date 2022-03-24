
/*
 * @Description: 
 * @Version: 2.0
 * @Autor: baijue
 * @Date: 2022-03-21 17:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-22 10:21:26
 */
import React from 'react';

export interface IHelloProps {
    /**
     * @description       也可以显式加上描述名
     * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
     * @default           支持定义默认值
     */
    className?: string; // 支持识别 TypeScript 可选类型为非必选属性
}

const Hello: React.FC<IHelloProps> = () => <>Hello World!</>;

export default Hello;