import React from "react";

export default class ProfileStatus extends React.Component {
  state = {
    statusText: 'status text',
    isEditMode: false
  }

  enableEditMode = () => {
    this.setState({
      isEditMode: true
    })
  }

  disableEditMode = () => {
    this.setState({
      isEditMode: false
    })
  }

  render () {
    return (
      <>
        {
          this.state.isEditMode
            ? <input autoFocus={true} onBlur={ this.disableEditMode } type="text" value={this.state.statusText} />
            : <div onDoubleClick={ this.enableEditMode }>{this.state.statusText}</div>
        }
      </>
    )
  }
}