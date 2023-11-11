/*
 * @Author: Lee
 * @Date: 2023-11-11 15:30:33
 * @LastEditTime: 2023-11-11 15:46:03
 * @LastEditors: Lee
 */
import React, { type FC } from 'react';

const H1: FC<{ title: string }> = (props) => <div>
  {props.title}
  <div style={{background: "red"}} >TSX想怎么写就怎么写，多的就不再赘述。</div>
</div>;

export default H1;
