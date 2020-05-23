import styled, { createGlobalStyle } from 'styled-components'
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
// css in js js 代码里写 css
// jsx  html in js ts 配置 babel preset-react 
// 定义样式组件 首字母大写
// 做无状态 但界面状态丰富  style分配
// 好处：作用于当前组件 不影响其他的地方
const Wapper = styled.p`
  color: pink;
`
// 样式组件
const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default function IndexPage() {// 向外输出函数式组件
    return (
        <div>Next , ssr in react!
            {/* <Wapper>
                Hello World
            </Wapper> */}
            <Stats url="https://covid19.mathdro.id/api"></Stats>
            <CountrySelector></CountrySelector>
        </div>
    )
}
