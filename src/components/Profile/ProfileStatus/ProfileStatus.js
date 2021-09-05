import React from "react";

export default class ProfileStatus extends React.Component {
  state = {
    isEditMode: false,
    status: this.props.status
  }

  enableEditMode = () => {
    this.setState({
      isEditMode: true,
    })
  }

  disableEditMode = () => {
    this.setState({
      isEditMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render () {
    return (
      <>
        {
          this.state.isEditMode
            ? <input
              autoFocus={true}
              onBlur={ this.disableEditMode }
              type="text"
              value={this.state.status}
              onChange={this.onStatusChange}
            />
            : <div onDoubleClick={ this.enableEditMode }>{this.props.status || '-----'}</div>
        }
      </>
    )
  }
}