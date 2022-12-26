import React from 'react';
import Card from './components/implementations/Card';
import FormTest from './components/implementations/Form';
import './style/style.css';
import './style/card.css';
import Deck from './components/implementations/Deck';

export default function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     cardName: '',
  //     description: '',
  //     imageSrc: '',
  //     attr1: '0',
  //     attr2: '0',
  //     attr3: '0',
  //     rare: 'normal',
  //     cardTrunfo: false,
  //     allCards: [],
  //     allCardsFiltered: [],
  //     filter: '',
  //     filterRare: 'todas',
  //     disabled: false,
  //   };
  // }

  // handleChange = ({ target }) => {
  //   const { name, value, type } = target;
  //   if (type === 'checkbox') {
  //     this.setState((prevState) => {
  //       if (!prevState) return { cardTrunfo: prevState.cardTrunfo };
  //       return { cardTrunfo: !prevState.cardTrunfo };
  //     });
  //   }
  //   this.setState({ [name]: value });
  // }

  // isdisabled = () => {
  //   const {
  //     cardName, description, imageSrc, rare, attr1, attr2, attr3,
  //   } = this.state;

  //   const attr1ToNum = Number(attr1);
  //   const attr2ToNum = Number(attr2);
  //   const attr3ToNum = Number(attr3);

  //   const sum = attr1ToNum + attr2ToNum + attr3ToNum;
  //   const maxSum = 210;
  //   const maxAttrNumber = 90;

  //   if (!cardName || !description || !imageSrc || !rare) return true;
  //   if (sum > maxSum) return true;
  //   if (attr1ToNum > maxAttrNumber || attr1ToNum < 0) return true;
  //   if (attr2ToNum > maxAttrNumber || attr2ToNum < 0) return true;
  //   if (attr3ToNum > maxAttrNumber || attr3ToNum < 0) return true;
  //   return false;
  // }

  // onSaveButtonClick = (event) => {
  //   event.preventDefault();
  //   const {
  //     cardName, description, imageSrc, attr1, attr2, attr3, rare, cardTrunfo, allCards,
  //   } = this.state;

  //   const card = {
  //     cardName,
  //     description,
  //     imageSrc,
  //     attr1,
  //     attr2,
  //     attr3,
  //     rare,
  //     cardTrunfo,
  //   };

  //   this.setState({ allCards: [...allCards, card],
  //     allCardsFiltered: [...allCards, card] }, () => {
  //     this.setState({
  //       cardName: '',
  //       description: '',
  //       imageSrc: '',
  //       attr1: '0',
  //       attr2: '0',
  //       attr3: '0',
  //       rare: 'normal',
  //       cardTrunfo: false,
  //     });
  //     this.hasTrunfo();
  //   });
  // }

  // hasTrunfo = () => {
  //   const { allCardsFiltered } = this.state;
  //   const lookForTrunfo = allCardsFiltered.map(({ cardTrunfo }) => cardTrunfo)
  //     .some((e) => e === true);
  //   if (lookForTrunfo) return true;
  //   return false;
  // }

  // deleteCard = (param) => {
  //   this.setState((prevState) => ({
  //     allCards: prevState.allCards
  //       .filter(({ cardName }) => cardName !== param) }));
  //   this.setState((prevState) => ({
  //     allCardsFiltered: prevState.allCardsFiltered
  //       .filter(({ cardName }) => cardName !== param) }));
  // }

  // filterName = ({ target }) => {
  //   const { value, name } = target;
  //   const { allCards } = this.state;
  //   this.setState(({ [name]: value }), () => {
  //     let allCardsFiltered = allCards.filter((card) => card.cardName.includes(value));
  //     if (value === '') {
  //       allCardsFiltered = allCards;
  //     }
  //     this.setState({ allCardsFiltered });
  //   });
  // }

  // filterRare = ({ target }) => {
  //   const { value, name } = target;
  //   const { allCards } = this.state;
  //   this.setState(({ [name]: value }), () => {
  //     let allCardsFiltered = allCards.filter((card) => card.rare === value);
  //     if (value === 'todas') {
  //       allCardsFiltered = allCards;
  //     }
  //     this.setState({ allCardsFiltered });
  //   });
  // }

  // filterTrunfo = ({ target }) => {
  //   const { allCards } = this.state;
  //   this.setState({ disabled: target.checked });
  //   if (target.checked) {
  //     return this.setState({
  //       allCardsFiltered: allCards
  //         .filter(({ cardTrunfo }) => cardTrunfo === true),
  //       filter: '',
  //       filterRare: 'todas',
  //     });
  //   }
  //   return this.setState({
  //     allCardsFiltered: allCards,
  //     filter: '',
  //     filterRare: 'todas',
  //   });
  // }
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
          alt="f1 logo"
        />
        <h1>Formula Trunfo</h1>
      </header>
      <div className="form-card-div">
        <section className="form-sec">
          <FormTest />
        </section>
        <section className="card-sec">
          <h2>Prévia da Carta</h2>
          <Card />
        </section>
      </div>
      <div className="cards-list">
        <Deck />
      </div>
    </div>
  );
}
