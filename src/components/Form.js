import { React, Component } from 'react';
import { string, func, bool } from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        Nome
        <input
          data-testid="name-input"
          className="inpt-name"
          type="text"
          placeholder="placeholder"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
        />
        Descrição
        <textarea
          data-testid="description-input"
          className="inpt-desc"
          name="description"
          rows={ 4 }
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <div className="attr-img-div">
          <section>
            Atk
            <input
              data-testid="attr1-input"
              className="inpt-attr1 attr"
              min={ 0 }
              type="number"
              name="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </section>
          <section>
            Def
            <input
              data-testid="attr2-input"
              className="inpt-attr2 attr"
              value={ cardAttr2 }
              min={ 0 }
              type="number"
              name="attr2"
              onChange={ onInputChange }
            />
          </section>
          <section>
            Overall
            <input
              data-testid="attr3-input"
              className="inpt-attr3 attr"
              value={ cardAttr3 }
              min={ 0 }
              type="number"
              name="attr3"
              onChange={ onInputChange }
            />
          </section>
          <section className="img-sec">
            Imagem
            <input
              data-testid="image-input"
              placeholder="placeholder"
              value={ cardImage }
              name="imageSrc"
              onChange={ onInputChange }
            />
          </section>
        </div>
        Raridade
        <select
          data-testid="rare-input"
          className="inpt-rare"
          name="rare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <section className="super-sec">

          {
            hasTrunfo === false
              ? (
                <label htmlFor="check">
                  <input
                    data-testid="trunfo-input"
                    className="checked-inpt"
                    id="check"
                    type="checkbox"
                    name="checked"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trunfo
                </label>)
              : 'Você já tem um Super Trunfo em seu baralho'
          }

          {/* <input
            data-testid="trunfo-input"
            className="checked-inpt"
            type="checkbox"
            name="checked"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo */}
        </section>
        <section className="btn-sec">
          <button
            data-testid="save-button"
            className="btn-submit"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </section>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string.isRequired,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
  hasTrunfo: bool.isRequired,
  isSaveButtonDisabled: bool.isRequired,
  onInputChange: func.isRequired,
  onSaveButtonClick: func.isRequired,
};
