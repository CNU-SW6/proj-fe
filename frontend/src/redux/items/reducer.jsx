import { Clothes } from '../../assets/ImageList';
const initItems = [
  {
    id: 'cap',
    img: Clothes[0],
    color: '#ffffff',
  },
  {
    id: 'top',
    img: Clothes[1],
    color: '#ffffff',
  },
  {
    id: 'bottom',
    img: Clothes[2],
    color: '#ffffff',
  },
  {
    id: 'shoes',
    img: Clothes[3],
    color: '#ffffff',
  },
];

const Reducer = (state, action) => {
  const { items } = state;

  switch (action.type) {
    case 'SELECT_COLOR':
      return {
        items: [
          ...items.slice(0, action.index),
          {
            ...items[action.index],
            color: action.color,
          },
          ...items.slice(items.index + 1, items.length),
        ],
      };
    default:
      return state;
  }
};

Reducer.defaultProps = {
  state: initItems,
};
