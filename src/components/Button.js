import { React, Component } from 'react';
import { func } from 'prop-types';

export default class Button extends Component {
  render() {
    const {
      deleteCard,
    } = this.props;
    return (
      <button
        data-testid="delete-button"
        className="btn-remove"
        type="button"
        onClick={ deleteCard }
      >
        Excluir
      </button>
    );
  }
}

Button.propTypes = {
  deleteCard: func.isRequired,
};
