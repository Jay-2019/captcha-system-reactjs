import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card/index';
export default class App extends Component {
  render() {
    return (
      <div className="jumbotron  align-items-center">
        <Card />
      </div>
    )
  }
}