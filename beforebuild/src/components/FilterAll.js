import React, { Component } from 'react';

export class FilterAll extends Component {
  state = {
    typeF: "typeall",
  }

  onChange = (e) => {
    this.props.filterChange(this.state.typeF);
  }
  render() {
    return (
      <div
        onClick={this.onChange}
        className="filterbuttons">
        Show All
      </div>
    )
  }
}

export default FilterAll;
