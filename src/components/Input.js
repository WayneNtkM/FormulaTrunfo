import { React, Component } from 'react';
import { bool, func, string } from 'prop-types';

export default class Input extends Component {
  render() {
    const { filterCards, disabled, value } = this.props;
    return (
      <input
        data-testid="name-filter"
        type="text"
        name="filter"
        value={ value }
        disabled={ disabled }
        onChange={ filterCards }
      />
    );
  }
}

Input.propTypes = {
  filterCards: func.isRequired,
  disabled: bool.isRequired,
  value: string.isRequired,
};
