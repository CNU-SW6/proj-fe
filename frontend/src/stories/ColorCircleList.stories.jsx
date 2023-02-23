import React from 'react';
import ColorCircleList from '../components/Modal/ColorCircleList';
export default {
  title: 'Component/ColorCircleList',
  component: ColorCircleList,
};

const Template = (args) => <ColorCircleList {...args} />;
export const Default = Template.bind({});
Default.args = {
  colorList: ['#000000', '#888888', '#ff0000', '#00ffff'],
};
