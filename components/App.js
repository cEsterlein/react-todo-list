import React, {Component} from 'react'
import TextInput from './TodoInput'
import TodoList from './TodoList'
import {connect} from 'react-redux'

class App extends Component{

  render(){
    return (
      <div className = 'appComponent'>
        <div> Todo List </div>
        <TextInput dispatch={this.props.dispatch} />
        <TodoList todos={this.props.todos}/>
      </div>
    )

  }

}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(App)
