import { SELECT_COLOR } from './types';

export const selectColor = (id, color) => {
  return {
    type: SELECT_COLOR,
    payload: {
      id,
      color,
    },
  };
};
