import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttons } = this.props;
    return (
      <div className={buttons.length <= 5 ? 'calc-operators' : 'calc-digits'}>
        { buttons.map((btn) => <button type="button" key={btn}>{ btn }</button>) }
      </div>
    );
  }
}

Button.propTypes = {
  buttons: PropTypes.string.isRequired,
};

export default Button;
