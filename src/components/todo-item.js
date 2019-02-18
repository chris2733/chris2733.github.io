import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      display: this.props.todo.hidden ? "none" : "",
    }
  }
  render() {
    const { classN, content, title } = this.props.todo;
    return (
      <div className="todo-item" style={this.getStyle()}>
        <h3>{title}</h3>
        <button
          className={classN} >
          {content}
        </button>
        <h4>Codepen Link</h4>
        <a href="#nogo" className="codepenlink">Not yet m8</a>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;
