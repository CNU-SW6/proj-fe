import React from 'react';
import MenuIcon from '../assets/MenuIcon';
export default {
  title: 'Component/MenuIcon',
  component: MenuIcon,
  argTypes: {
    size: { defaultValue: 16, control: { type: 'range', min: 16, max: 80 } },
    strokeWidth: {
      defaultValue: 2,
      control: { type: 'range', min: 2, max: 6 },
    },
    rotate: { defaultValue: 0, control: { type: 'range', min: 0, max: 360 } },
    color: {
      defaultValue: '#222',
      control: 'color',
    },
  },
};

export const Default = (args) => {
  return <MenuIcon {...args} />;
};
