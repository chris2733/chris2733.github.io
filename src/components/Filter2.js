import React, { Component } from 'react';

export class Filter2 extends Component {
  state = {
    typeF: "type2",
  }

  onChange = (e) => {
    this.props.filterChange(this.state.typeF);
  }
  render() {
    return (
        <div
          onClick={this.onChange}
          className="filterbuttons"
          > Filter by type 2
        </div>
    )
  }
}

export default Filter2;
