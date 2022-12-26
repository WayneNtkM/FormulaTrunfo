import React from 'react';
import { useCardFormStore, useCardStore } from '../../zustand/store';

function Form() {
  const { form, setCardForm, restoreForm } = useCardFormStore((state) => state);
  const { setCard, checkTrunfo, hasTrunfo } = useCardStore((state) => state);

  const onInputChange = ({ target: { value, name } }) => {
    setCardForm({ [name]: value });
  };

  const onSaveButtonClick = (e) => {
    e.preventDefault();
    setCard(form);
    restoreForm();
    checkTrunfo();
  };

  return (
    <form className="form">
      <p>Nome</p>
      <input
        data-testid="name-input"
        className="inpt-name"
        id="name-inpt"
        type="text"
        placeholder="Ayrton Senna"
        name="cardName"
        value={ form.cardName }
        onChange={ onInputChange }
      />
      <p>Descrição</p>
      <textarea
        data-testid="description-input"
        className="inpt-desc"
        name="description"
        rows={ 4 }
        value={ form.description }
        onChange={ onInputChange }
      />
      <div className="attr-img-div">
        <section>
          <p>Atk</p>
          <input
            data-testid="attr1-input"
            className="inpt-attr1 attr"
            min={ 0 }
            type="number"
            name="attr1"
            value={ form.attr1 }
            onChange={ onInputChange }
          />
        </section>
        <section>
          <p>Def</p>
          <input
            data-testid="attr2-input"
            className="inpt-attr2 attr"
            value={ form.attr2 }
            min={ 0 }
            type="number"
            name="attr2"
            onChange={ onInputChange }
          />
        </section>
        <section>
          <p>Overall</p>
          <input
            data-testid="attr3-input"
            className="inpt-attr3 attr"
            value={ form.attr3 }
            min={ 0 }
            type="number"
            name="attr3"
            onChange={ onInputChange }
          />
        </section>
        <section className="img-sec">
          <p>Imagem</p>
          <input
            data-testid="image-input"
            placeholder="https://www.autoracing.com.br/wp-content/uploads/2020/03/f1-ayrton-senna-capacete.jpg"
            value={ form.imageSrc }
            name="imageSrc"
            onChange={ onInputChange }
          />
        </section>
      </div>
      <p>Raridade</p>
      <select
        data-testid="rare-input"
        className="inpt-rare"
        name="rare"
        value={ form.rare }
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
                  name="cardTrunfo"
                  checked={ form.cardTrunfo }
                  onChange={ ({ target: { name } }) => setCardForm({
                    [name]: !form.cardTrunfo }) }
                />
                Super Trunfo
              </label>)
            : 'Você já tem um Super Trunfo em seu baralho'
        }
      </section>
      <section className="btn-sec">
        <button
          data-testid="save-button"
          className="btn-submit"
          type="submit"
          // disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </section>
    </form>
  );
}

export default Form;
