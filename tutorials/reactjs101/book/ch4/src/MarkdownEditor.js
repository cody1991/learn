import React, {
  Component,
  PropTypes
} from 'react';

import remarkable from 'remarkable'

class MarkdownEditor extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.rawMarkup = this.rawMarkup.bind(this)
    this.state = {
      value: 'Enter some word'
    }
  }

  handleChange() {
    this.setState({
      value: this.refs.textarea.value
    })
  }

  rawMarkup() {
    const md = new remarkable()
    return {
      __html: md.render(this.state.value)
    }
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea 
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value}></textarea>
        <h3>Output</h3>
        <div className="content" dangerouslySetInnerHTML={this.rawMarkup()}>
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;