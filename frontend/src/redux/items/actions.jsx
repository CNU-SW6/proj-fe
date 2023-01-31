export const selectColor = ({ index, color }) => {
  return {
    type: 'SELECT_COLOR',
    index,
    color,
  };
};
