import React, { Component } from 'react';

export class FilterAll extends Component {
  state = {
    typeF: "typeall",
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
        className={this.state.checked ? "filterbuttons checked" : "filterbuttons"}>
        Show All
      </div>
    )
  }
}

export default FilterAll;
