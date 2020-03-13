import React, { Component } from 'react'
import Movieform from "./Movieform";

export default class MovieForm extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="page-title">New Movie</h1>
        <Movieform />
      </div>
    )
  }
}
