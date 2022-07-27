import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style/style.css';
import './style/card.css';
import Button from './components/Button';
import Select from './components/Select';

class App extends React.Component {
  constructor() {
    super();
    // const storage = JSON.parse(localStorage.getItem('cards'));
    this.state = {
      nameInpt: '',
      description: '',
      imageSrc: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: 'normal',
      cardTrunfo: false,
      allCards: [],
      filter: '',
      filterRare: 'todas',
    };
  }

  handleChange = ({ target }) => {
    const { name, value, type } = target;
    if (type === 'checkbox') {
      this.setState((prevState) => {
        if (!prevState) return { cardTrunfo: prevState.cardTrunfo };
        return { cardTrunfo: !prevState.cardTrunfo };
      });
    }
    this.setState({ [name]: value });
  }

  isdisabled = () => {
    const {
      nameInpt,
      description,
      imageSrc,
      rare,
      attr1,
      attr2,
      attr3,
    } = this.state;

    const attr1ToNum = Number(attr1);
    const attr2ToNum = Number(attr2);
    const attr3ToNum = Number(attr3);

    const sum = attr1ToNum + attr2ToNum + attr3ToNum;
    const maxSum = 210;
    const maxAttrNumber = 90;

    if (!nameInpt || !description || !imageSrc || !rare) return true;
    if (sum > maxSum) return true;
    if (attr1ToNum > maxAttrNumber || attr1ToNum < 0) return true;
    if (attr2ToNum > maxAttrNumber || attr2ToNum < 0) return true;
    if (attr3ToNum > maxAttrNumber || attr3ToNum < 0) return true;
    return false;
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      nameInpt,
      description,
      imageSrc,
      attr1,
      attr2,
      attr3,
      rare,
      cardTrunfo,
    } = this.state;

    this.setState((prevState) => ({
      allCards: [...prevState.allCards, { name: nameInpt,
        desc: description,
        image: imageSrc,
        at1: attr1,
        at2: attr2,
        at3: attr3,
        rarity: rare,
        trunfo: cardTrunfo },
      ],
      nameInpt: '',
      description: '',
      imageSrc: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: 'normal',
      cardTrunfo: false,
    }), () => {
      const { allCards } = this.state;
      localStorage.setItem('cards', JSON.stringify(allCards));
    });
    // this.setState((prevState) => ({
    //   deleteButton: prevState.allCards.length > 0 }));
  }

  hasTrunfo = () => {
    const { allCards } = this.state;
    const trunfo = allCards.map(({ cardTrunfo }) => cardTrunfo);
    if (trunfo.length === 0) return false;
    if (trunfo) return true;
    return false;
  }

  deleteCard = (cardName) => {
    this.setState((prevState) => ({
      allCards: prevState.allCards.filter(({ name }) => name !== cardName) }));
  }

  // filterCardsName = ({ target }) => {
  //   this.setState({ filter: target.value });
  // }

  filterCards = ({ target }) => {
    const { name, value } = target;
    if (name === 'text') return this.setState({ filter: value });
    if (name === 'rare') return this.setState({ filterRare: value });
    // console.log(typeof (value, name));
  }

  render() {
    const {
      nameInpt,
      description,
      imageSrc,
      attr1,
      attr2,
      attr3,
      rare,
      cardTrunfo,
      allCards,
      filter,
      filterRare,
    } = this.state;
    const cardsFiltered = allCards.filter(({ name, rarity }) => (name.includes(filter)
    && filterRare === 'todas'
      ? true : rarity === filterRare));

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
            <Form
              cardName={ nameInpt }
              cardDescription={ description }
              cardImage={ imageSrc }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardRare={ rare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ this.hasTrunfo() }
              allCards={ allCards }
              onInputChange={ this.handleChange }
              isSaveButtonDisabled={ this.isdisabled() }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="card-sec">
            <h2>Prévia da Carta</h2>
            <Card
              cardName={ nameInpt }
              cardDescription={ description }
              cardImage={ imageSrc }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardRare={ rare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ this.hasTrunfo() }
              onInputChange={ this.handleChange }
            />
          </section>
        </div>
        <div className="cards-list">
          <fieldset className="fieldset">
            <legend className="legend">
              <h1>Deck de Cartas</h1>
            </legend>
            <section>
              <input
                data-testid="name-filter"
                type="text"
                name="text"
                onChange={ this.filterCards }
              />
              <Select filterCards={ this.filterCards } />
            </section>
            {
              cardsFiltered.map(({
                name,
                desc,
                image,
                at1,
                at2,
                at3,
                rarity,
                trunfo,
              }) => (
                <section className="cards-deck" key={ name }>
                  <Card
                    cardName={ name }
                    cardDescription={ desc }
                    cardImage={ image }
                    cardAttr1={ at1 }
                    cardAttr2={ at2 }
                    cardAttr3={ at3 }
                    cardRare={ rarity }
                    cardTrunfo={ trunfo }
                    deleteCard={ () => this.deleteCard(name) }
                  />
                  <Button deleteCard={ () => this.deleteCard(name) } />
                </section>
              ))
            }
          </fieldset>
        </div>
      </div>
    );
  }
}

export default App;
