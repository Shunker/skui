import React, { Component } from 'react'
import './style.css';

export default class Button extends Component {
    constructor(props){
        super(props);
        
        
        this.state={
            small:false,
            larger:false,
            primary:false,
            success:false,
            error:false
        }
    }
    componentDidMount = () => {
        console.log(this.props);
      this.changeSize(this.props.size)
      this.changeType(this.props.type)
    }
    
    changeSize=(size)=>{
        switch (size) {
            case 'small':
              this.setState({
                  small:true
              })  
                break;
            case 'larger':
              this.setState({
                  larger:true
              })  
                break;
            default:
                break;
        }
    }
    changeType=(type)=>{
        switch (type) {
            case 'primary':
              this.setState({
                  primary:true
              })  
                break;
            case 'success':
              this.setState({
                  success:true
              })  
                break;
            case 'error':
              this.setState({
                  error:true
              })  
                break;
            default:
                break;
        }
    }
  render() {
    return (
      <div>
        <button className={`btn ${this.state.small?"btn-small":null} ${this.state.larger?"btn-larger":null} ${this.state.primary?"btn-primary":null} ${this.state.success?"btn-success":null} ${this.state.error?"btn-error":null}`}>按钮</button>
      </div>
    )
  }
}
