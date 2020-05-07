import React, { Component } from 'react'
import * as THREE from 'three' // 组件
// THREE.js 组件
import React3 from 'react-three-renderer'
// three.js 更简单
export default class GameContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.cameraPositon = new THREE.Vector3(0, 0, 5) //三维空间
    this.state = {
      // 运动  几何体 x, y z 
      cubeRotation: new THREE.Euler() // mvvm 
    }
    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x + 0.1,
          this.state.cubeRotation.y + 0.1,
          0
        )
      })
    }
  }
  render() {
    const width = window.innerWidth,
      height = window.innerHeight
    console.log(width, height)
    return (
      <React3
        mainCamera="camera"
        width={width}
        height={height}
        onAnimate={this._onAnimate}
        >
        <scene>
          <perspectiveCamera 
            name="camera"
            fov={75}
            aspect={width/height}
            near={0.1}
            far={1000}
            position={this.cameraPositon}
          />
          <mesh
            rotation={this.state.cubeRotation}
          >
            <boxGeometry
            width={1}
            height={1}
            depth={1}>
            </boxGeometry>
            <meshBasicMaterial color={0x00ff00}/>
          </mesh>
        </scene>
      </React3>
    )
  }
}
