import React from 'react';
import ColorModal from '../components/Modal/ColorModal';

export default {
  title: 'Component/ColorModal',
  component: ColorModal,
};

const Template = (args) => <ColorModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      item: '모자',
      color: 'black',
    },
    {
      item: '상의',
      color: 'brown',
    },
    {
      item: '하의',
      color: 'navy',
    },
    {
      item: '신발',
      color: 'green',
    },
  ],
};
