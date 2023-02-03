import React from 'react';
import MenuBar from '../components/MenuBar';
const menuList = ['홈 화면', '마이페이지', '공유페이지', '컨설팅'];

export default {
  title: 'Component/MenuBar',
  component: MenuBar,
  argTypes: {
    menuList: {
      defaultValue: menuList,
    },
    menuBarColor: {
      defaultValue: '#B0B0B0',
      control: 'color',
    },
    menuColor: {
      defaultValue: '#D9D9D9',
      control: 'color',
    },
    fontSize: {
      defaultValue: 12,
      control: { type: 'range', min: 10, max: 30 },
    },
  },
};

export const Default = (args) => <MenuBar {...args} />;
