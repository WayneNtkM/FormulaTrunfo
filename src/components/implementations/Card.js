import React from 'react';
import { useCardFormStore } from '../../zustand/store';

function Card() {
  const { form } = useCardFormStore((state) => state);
  return (
    <div className="card-out">
      <div className="card">
        <div className="card-in">
          <section className="name">
            <h2
              data-testid="name-card"
            >
              {form.cardName}
            </h2>
          </section>
          <section className="img-card">
            {
              form.imageSrc === '' ? <img
                data-testid="image-card"
                src="https://staticr1.blastingcdn.com/media/photogallery/2018/2/15/660x290/b_1200x675x75/il-nuovo-logo-ufficiale-della-formula-1_1833515.jpg"
                alt={ form.cardName }
              /> : <img
                data-testid="image-card"
                src={ form.imageSrc }
                alt={ form.cardName }
              />
            }

          </section>
          <section className="desc-sec">
            <p
              data-testid="description-card"
            >
              {form.description}
            </p>
          </section>
          <section className="attr-sec">
            <h4
              data-testid="attr1-card"
            >
              {`Atk  ${form.attr1}`}
            </h4>
            <h4
              data-testid="attr2-card"
            >
              {`Def  ${form.attr2}`}
            </h4>
            <h4
              data-testid="attr3-card"
            >
              {`Overall  ${form.attr3}`}
            </h4>
          </section>
          <section className="rare-trunfo">
            {
              form.cardTrunfo ? <h4 data-testid="/trunfo-card/i">Super Trunfo</h4>
                : <h4>{' '}</h4>
            }
            {/* {
              cardRare === 'normal' && (
                <p
                  data-testid="rare-card"
                  style={ { color: 'grey' } }
                >
                  Normal
                </p>)
            }
            {
              cardRare === 'raro' && (
                <p
                  data-testid="rare-card"
                  style={ { color: 'rgb(10, 88, 157)' } }
                >
                  Raro
                </p>)
            }
            {
              cardRare === 'muito raro' && (
                <p
                  data-testid="rare-card"
                  style={ { color: 'gold' } }
                >
                  Muito Raro
                </p>
              )
            } */}
            <p
              data-testid="rare-card"
            >
              {form.rare}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Card;
