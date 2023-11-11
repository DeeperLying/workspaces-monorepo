<!--
 * @Author: Lee
 * @Date: 2023-11-11 15:00:33
 * @LastEditTime: 2023-11-11 18:47:46
 * @LastEditors: Lee
-->
#### 组件库

公司需要将公共组件独立出来，放到一个组件库。做一下技术调研

### 参考文章

1. [pnpm + workspace + changesets 构建你的 monorepo 工程](https://juejin.cn/post/7098609682519949325)

2. [从 0 到 1 搭建 monorepo 组件库(基于 dumi、lerna、father-build)](https://juejin.cn/post/7074111715507437598) 
 
3. [组件库在想文档github page](https://deeperlying.github.io/workspaces-monorepo/components/groups)

### See

0. 只注重实践具体原理细节一窍不通。

1. 我可以打包并且通过@workspace 直接本地引用，这个很爽虽然 npm link这样可以这样做但是还是感觉这个更加舒服一些。

2. 还有就是其实我可以在启一个工作区，用来直接调试我的组件。dumi毕竟是文档用它了调试并不是很专业的样子。

3. 因为本地包可以直接调用，而且启动的工作区就相当于是一个独立的环境。放什么都可以vue or react other .... well so crazy