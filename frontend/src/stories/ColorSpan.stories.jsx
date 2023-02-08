import React from 'react';
import ColorSpan from '../components/Color/ColorSpan';

export default {
  title: 'Component/ColorSpan',
  component: ColorSpan,
  argTypes: {
    color: { defaultValue: 'white', control: 'color' },
  },
};

export const Default = (args) => <ColorSpan {...args} />;
