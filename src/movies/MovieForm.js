import React, { Component } from 'react'

export default class MovieForm extends Component {

  state = {
    text: '',
  }

  onChange = e => this.setState({text: e.target.value})

  render() {

    const {submitForm} = this.props
    const {text} = this.state
    debugger
    return (
      <div>
        <form onSubmit={() => submitForm({text: text})} data-testid="movie-form">
          <label htmlFor="text">
            Text
            <input
             type="text" 
             id="text"
             onChange={(e) => this.onChange(e)} 
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
