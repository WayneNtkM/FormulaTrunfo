import { React, Component } from 'react';
import { func } from 'prop-types';

export default class Checkbox extends Component {
  render() {
    const { filterTrunfo } = this.props;
    return (
      <input
        data-testid="trunfo-filter"
        type="checkbox"
        name="check"
        onChange={ filterTrunfo }
      />
    );
  }
}

Checkbox.propTypes = {
  filterTrunfo: func.isRequired,
};
