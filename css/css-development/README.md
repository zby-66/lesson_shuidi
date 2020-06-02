## BEM


## css-module   vs  scope
scope: .vue 组件帮你处理了 css 模块化

命名冲突
.main .wrap .button 

```css
css 模块化
@import 
```
<style lang="" scope></style>

```js
loader: 'css-loader',
options: {
  modules: {
    mode: 'local',
    exportGlobals: true,
    localIdentName: '[hash:base64]',
    hashPrefix: 'my-custom-hash',
  },
},
```

```css
._23_aKvs-b8bW2Vg3fwHozO {
  background: red;
  color: yellow;
}

._13LGdX8RMStbBE9w-t0gZ1 {
  background: blue;
}
```

只在当前组件生效：
<div data-v-00e8ca52="" data-v-6fdc8784="" class="view timeline-index-view">
.container .view.timeline-index-view[data-v-00e8ca52]


## css in js

css 里面使用 js 变量

styled-components:

```jsx
.normal {
  color: black;
}
.active {
  color: 'red';
}
class Button {
  render() {
    // return <div className={active ? 'active' : 'normal'}/>
    return <Active active={active} />
  }
}
const Active = styled.div`
 color: ${active ? 'red' : 'black'}
`
```

## js in css === css Houdini
css 标准
why css Houdini：css 浏览器标准实现太慢了
flex：2009
```js
js：import('./模板字符串.js')
还没纳入 js 标准，因为 babel 负责编译 js
```

less sass stylus： 预处理器
postCss: 后处理器
-webkit-
-moz-

css pollyfill 做不了原因：
** js 在 网页绘制过程中，所能触及到的地方有限**

- **window event loop**
- worker event loop
```js
new Worker('./xxx.js')
```
- worklet event loop
```js
CSS.paintWorklet.addModule('./cicle.js')
```