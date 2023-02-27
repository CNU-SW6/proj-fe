import { Clothes } from '../../assets/ImageList';
import { SELECT_COLOR } from './types';
const initItems = [
  {
    id: 'cap',
    item: '모자',
    img: Clothes[0],
    color: '',
  },
  {
    id: 'top',
    item: '상의',
    img: Clothes[1],
    color: '',
  },
  {
    id: 'bottom',
    item: '하의',
    img: Clothes[2],
    color: '',
  },
  {
    id: 'shoes',
    item: '신발',
    img: Clothes[3],
    color: '',
  },
];

const colorReducer = (state = initItems, action) => {
  switch (action.type) {
    case SELECT_COLOR: {
      const updatedTask = action.payload;
      return state.map((oldTask) =>
        oldTask.id === updatedTask.id ? { ...oldTask, color: updatedTask.color } : oldTask,
      );
    }
    default: {
      return state;
    }
  }
};

export default colorReducer;
