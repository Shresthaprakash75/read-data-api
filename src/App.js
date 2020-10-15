import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { readData } from './action/action';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    console.log('data read check');
    this.props.readData()
  }

  render (){
    console.log(this.props.data)
    return (
      <ul>
        {
          this.props.data != null ? this.props.data.map((data) => <li key={data.id}>{data.title}</li>) : null
        }
      </ul>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    data : state.data
  }
}
export default connect(mapStateToProps, {readData})(App);