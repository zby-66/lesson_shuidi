为了协调event、用户交互、脚本、render、网络等等

## 分类
- 打开一个页面，window event loop
- worker event loop
- worklet event loop


事件循环有一个或多个 task queue
task 的产生可能来自于下面：
- Events
- Parsing
每个事件循环都有一个当前正在运行的 task

每个事件循环都有一个 microtask queue
每个事件循环都有 microtask checkpoint 布尔值(最初为 false)

## process

事件循环只要存在，就必须不断地执行以下步骤:
  - 从 taskQueue 取出第一个可运行任务，执行
  - 遇到：Microtasks
    - 如果 microtask checkpoint 为 true，则返回。
    - Set microtask checkpoint true
    - 只要微任务队列不为空：
      - 运行 Microtask
    - Set checkpoint to false
  - Update the rendering：渲染


- 每次从 taskQueue 取出第一个可运行任务，执行，
- 如果有 microtask queue，那么只要微任务队列不为空，一直运行Microtask，
- 如果需要那么会发生 render


- 一个 task
- 所有 Microtask
- render

## 任务的分类

主要有两个类型，不同类型的任务放去 不同的队列去。
这部分主要分散在各个标准里面：

microtask类型:
- process.nextTick
- MutationObserver 回调
- Promise.then 回调

task类型:
- 主代码块
- setTimeout
- setInterval
- setImmediate

<!-- task === MacroTask -->