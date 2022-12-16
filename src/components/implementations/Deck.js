import React from 'react';
import { useCardStore } from '../../zustand/store';

function Deck() {
  const { allCards } = useCardStore((state) => state);
  return (
    <div className="cards-list">
      <fieldset className="fieldset">
        <legend className="legend">
          <h1>Deck de Cartas</h1>
        </legend>
        {/* <section>
          <Input
            filterCards={ this.filterName }
            value={ filter }
            disabled={ disabled }
          />
          <Select
            filterCards={ this.filterRare }
            disabled={ disabled }
          />
          <Checkbox
            value={ filterRare }
            filterTrunfo={ this.filterTrunfo }
          />
        </section> */}
        {
          allCards.map((card) => (
            <div className="card-out" key={ card.cardName }>
              <div className="card">
                <div className="card-in">
                  <section className="name">
                    <h2
                      data-testid="name-card"
                    >
                      {card.cardName}
                    </h2>
                  </section>
                  <section className="img-card">
                    {
                      card.imageSrc === '' ? <img
                        data-testid="image-card"
                        src="https://staticr1.blastingcdn.com/media/photogallery/2018/2/15/660x290/b_1200x675x75/il-nuovo-logo-ufficiale-della-formula-1_1833515.jpg"
                        alt={ card.cardName }
                      /> : <img
                        data-testid="image-card"
                        src={ card.imageSrc }
                        alt={ card.cardName }
                      />
                    }

                  </section>
                  <section className="desc-sec">
                    <p
                      data-testid="description-card"
                    >
                      {card.description}
                    </p>
                  </section>
                  <section className="attr-sec">
                    <h4
                      data-testid="attr1-card"
                    >
                      {`Atk  ${card.attr1}`}
                    </h4>
                    <h4
                      data-testid="attr2-card"
                    >
                      {`Def  ${card.attr2}`}
                    </h4>
                    <h4
                      data-testid="attr3-card"
                    >
                      {`Overall  ${card.attr3}`}
                    </h4>
                  </section>
                  <section className="rare-trunfo">
                    {
                      card.cardTrunfo ? <h4 data-testid="/trunfo-card/i">Super Trunfo</h4>
                        : <h4>{' '}</h4>
                    }
                    {
                      card.rare === 'normal' && (
                        <p
                          data-testid="rare-card"
                          style={ { color: 'grey' } }
                        >
                          Normal
                        </p>)
                    }
                    {
                      card.rare === 'raro' && (
                        <p
                          data-testid="rare-card"
                          style={ { color: 'rgb(10, 88, 157)' } }
                        >
                          Raro
                        </p>)
                    }
                    {
                      card.rare === 'muito raro' && (
                        <p
                          data-testid="rare-card"
                          style={ { color: 'gold' } }
                        >
                          Muito Raro
                        </p>
                      )
                    }
                  </section>
                </div>
              </div>
            </div>
          ))
        }
      </fieldset>
    </div>
  );
}

export default Deck;
