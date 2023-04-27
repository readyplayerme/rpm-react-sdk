import React from 'react';
import { Meta } from '@storybook/react';
import { AvatarCreator, AvatarCreatorProps } from '../src/components/avatar-creator';

const meta: Meta = {
  title: 'Avatar Creator',
  component: AvatarCreator,
  argTypes: {
    
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args: AvatarCreatorProps) => <div style={{height: 800, borderRadius: 8, overflow: 'hidden'}}>
  <AvatarCreator {...args} />;
</div>

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
