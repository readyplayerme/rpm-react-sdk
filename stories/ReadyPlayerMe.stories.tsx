import React from 'react';
import { Meta } from '@storybook/react';
import { ReadyPlayerMe } from '../src/index';

const meta: Meta = {
  title: 'Welcome',
  component: ReadyPlayerMe,
  argTypes: {

  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <ReadyPlayerMe {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
