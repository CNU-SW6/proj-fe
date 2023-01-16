import React from 'react';
import { Header } from '../components/Header';

export default {
  title: 'Component/Header',
  component: Header,
  argTypes: {
    color: { control: 'color' },
  },
};

export const Default = args => <Header {...args} />;
