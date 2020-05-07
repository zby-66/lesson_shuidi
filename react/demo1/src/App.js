import React,{Component} from 'react'

class App extends Component{
  render(){
    return (
      //jsx
      <ul className="my-list">
        <li>{true?'daz':'xxy'}</li>
        <li>love xiaop</li>
      </ul>
    )
    // var child1 = React.createElement('li',null,'daz')
    // var child1 = React.createElement('li',null,'love xiaop')
    // var root = React.createElement('ul',{className: 'my-list'}, child1,child2)
  }
}


export default App;