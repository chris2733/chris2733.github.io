import React, { Component } from 'react';

export class Filter1 extends Component {
  state = {
    typeF: "type1",
  }

  onChange = (e) => {
    this.props.filterChange(this.state.typeF);
  }
  render() {
    return (
      <div
        onClick={this.onChange}
        className="filterbuttons"
        > Filter by type 1
      </div>
    )
  }
}

export default Filter1;
