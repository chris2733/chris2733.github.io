import React, { Component } from 'react';

export class Filter1 extends Component {
  state = {
    typeF: "type1",
    checked: false,
  }
  onChange = (e) => {
    this.props.filterChange(this.state.typeF);
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  }
  render() {
    return (
        <div
            onClick={this.onChange}
            className={this.state.checked ? "filterbuttons checked" : "filterbuttons"}
            > Filter by type 1
        </div>
    )
  }
}

export default Filter1;
