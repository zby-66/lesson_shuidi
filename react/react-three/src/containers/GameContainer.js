import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import THREE, { Vector3 } from 'three'
import { loadModel } from '../utils/utils'
import Game from '../components/Game'

export default class GameContainer extends Component {
  constructor() {
    super()
    this.state = {
      cameraPosition: new Vector3(0, 5, 0),
      lookAt: Vector3(0, 0, 0)
    }
    // this.gameLoop = this.gameLoop.bind(this); 
  }
  // react lifeCycle mounted 
  componentDidMount() {
    this.mounted = true
    window.THREE = THREE
    // 3d 模型  设计师
    // 有点大
    loadModel('../../assets/sitepoint-robot.json')
    .then(geometry => 
      this.setState({ geometry }))
    this.requestGameLoop()
  }
  requestGameLoop () {
    // 60 fps 
    // 1. () =》 {}
    // 2. bind
    // 3. 构造函数申明时bind
    this.reqAnimId = window.requestAnimationFrame(this.gameLoop)
  }
  // decorator
  @autobind
  gameLoop () {
    // console.log(this, '+++++++');
  }
  render() {
    const width = window.innerWidth,
      height = window.innerHeight
    // react jsx 把state 解出来
    const {
      cameraPosition, 
      lookAt,
      geometry
    } = this.state
    return (
      <div>
        {
          geometry?<Game 
            width={width}
            height={height}
            cameraPosition={cameraPosition}
            lookAt={lookAt}
            geometry={geometry}
          />:'Loading'
        }
      </div>
    )
  }
}
