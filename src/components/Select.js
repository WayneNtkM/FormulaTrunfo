import { React, Component } from 'react';
import { bool, func } from 'prop-types';

export default class Select extends Component {
  render() {
    const { filterCards, disabled } = this.props;
    return (
      <select
        data-testid="rare-filter"
        className="filter-rare"
        name="rare"
        defaultValue="todas"
        disabled={ disabled }
        onChange={ filterCards }
      >
        <option>todas</option>
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </select>
    );
  }
}

Select.propTypes = {
  filterCards: func.isRequired,
  disabled: bool.isRequired,
};
