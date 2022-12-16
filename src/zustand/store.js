import create from 'zustand';

const cardFormInitialState = {
  cardName: '',
  description: '',
  imageSrc: '',
  attr1: '',
  attr2: '',
  attr3: '',
  rare: 'normal',
  cardTrunfo: false,
};

export const useCardFormStore = create((set) => ({
  form: {
    ...cardFormInitialState,
  },
  setCardForm: (param) => set((state) => ({ form: { ...state.form, ...param } })),
  restoreForm: () => set(() => ({ form: { ...cardFormInitialState } })),
}));

export const useCardStore = create((set) => ({
  allCards: [],
  hasTrunfo: false,
  checkTrunfo: () => set((state) => ({
    hasTrunfo: state.allCards
      .some(({ cardTrunfo }) => cardTrunfo === true),
  })),
  setCard: (card) => set((state) => ({ allCards: [...state.allCards, card] })),
}));
