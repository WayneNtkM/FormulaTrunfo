import { React, Component } from 'react/cjs/react.production.min';
import { string, bool } from 'prop-types';

export default class Card extends Component {
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
      // hasTrunfo,
    } = this.props;

    return (
      <div className="card-out">
        <div className="card">
          <div className="card-in">
            <section className="name">
              <h2
                data-testid="name-card"
              >
                {cardName}
              </h2>
            </section>
            <section className="img-card">
              {
                cardImage === '' ? <img
                  data-testid="image-card"
                  src="https://staticr1.blastingcdn.com/media/photogallery/2018/2/15/660x290/b_1200x675x75/il-nuovo-logo-ufficiale-della-formula-1_1833515.jpg"
                  alt={ cardName }
                /> : <img
                  data-testid="image-card"
                  src={ cardImage }
                  alt={ cardName }
                />
              }

            </section>
            <section className="desc-sec">
              <p
                data-testid="description-card"
              >
                {cardDescription}
              </p>
            </section>
            <section className="attr-sec">
              <h4
                data-testid="attr1-card"
              >
                {`Atk  ${cardAttr1}`}
              </h4>
              <h4
                data-testid="attr2-card"
              >
                {`Def  ${cardAttr2}`}
              </h4>
              <h4
                data-testid="attr3-card"
              >
                {`Overall  ${cardAttr3}`}
              </h4>
            </section>
            <section className="rare-trunfo">
              {
                cardTrunfo ? <h4 data-testid="/trunfo-card/i">Super Trunfo</h4>
                  : <h4>{' '}</h4>
              }
              <p
                data-testid="rare-card"
              >
                {cardRare}
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: string.isRequired,
  cardDescription: string.isRequired,
  cardAttr1: string.isRequired,
  cardAttr2: string.isRequired,
  cardAttr3: string.isRequired,
  cardImage: string,
  cardRare: string.isRequired,
  cardTrunfo: bool.isRequired,
};

Card.defaultProps = {
  cardImage: 'aa',
};
