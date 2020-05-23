import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class Dz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow={
                isShow:true
            }
         }
         this.toToggole=this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                {/* <div className={this.state.isShow?'show':'hide'}>Dz</div> */}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit//删除dom
                >
                <div>Dz</div>
                </CSSTransition>
                <div><button onClick={this.toToggole}>come in</button></div>
            </div>
         );
    }
    toToggole(){
        this.setState({
            isShow: this.state.isShow?false:true
        })
    }
}
 
export default Dz;