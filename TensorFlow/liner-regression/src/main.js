import * as tf from '@tensorflow/tfjs'; // 模板包
import * as tfvis from '@tensorflow/tfjs-vis'; // 数据可视化工具

// 1: 数据
const xs = [1, 2, 3, 4]; // input  [i1.png, i2.png, i3.png]
const yx = [1, 3, 5, 7]; // output [y,       n,        y  ]

window.onload = async ()=> {
  tfvis.render.scatterplot({
    name: '数据集',
  }, {
    values: xs.map((x, i) => {
      return {
        x,
        y: yx[i]
      }
      // [{x: 1, y: 1}, {x: 2, y: 3}]
    })
  })
  const model = tf.sequential();
  model.add(tf.layers.dense({
    units: 1,
    inputShape: 1
  }))
  //损失函数 告诉错了 错得有多离谱
  //MSD 均方误差
  model.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.1)
  })
  //optimizer 优化器

  //数据转换一下 数组转换成坐标
  const input = tf.tensor(xs), labels = tf.tensor(yx);

  //开始让机器学习
  //超参数： 动态调整 不是死的
  await model.fit(input, labels, {
    batchSize: 4,//每次学习个数
    epochs: 100, //学习多少轮
    callbacks: tfvis.show.fitCallbacks({
      name:'训练过程'
    },
    ['loss']
    )
  })
  const output = model.predict(tf.tensor([5]))
  console.log(output.dataSync());
}