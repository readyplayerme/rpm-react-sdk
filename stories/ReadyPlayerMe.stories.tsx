import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReadyPlayerMe, Props } from '../src/index';

const meta: Meta = {
  title: 'Welcome',
  component: ReadyPlayerMe,
  argTypes: {
    subdomain: {
      name: 'subdomain',
      type: { name: 'string', required: true },
      defaultValue: 'demo',
      description: 'Partner subdomain.',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'demo' },
      },
    },
    clearCache: {
      name: 'clearCache',
      type: { name: 'boolean', required: false },
      description: 'Do not save avatar data for next visit.',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    bodyType: {
      name: 'bodyType',
      type: { name: 'string', required: false },
      description: 'Display or skip body type selection step.',
      control: {
        type: 'select',
      },
      options: ['halfbody', 'fullbody'],
      table: {
        type: { summary: 'BodyType' },
      },
    },
    language: {
      name: 'language',
      type: { name: 'string', required: false },
      description: 'Interface language.',
      control: {
        type: 'select',
      },
      options: ['en', 'en-IE', 'de', 'fr', 'es', 'es-MX', 'it', 'pt', 'pt-BR', 'tr', 'ja', 'kr', 'ch'],
      table: {
        type: { summary: 'Language' },
      },
    },
    quickStart: {
      name: 'quickStart',
      type: { name: 'boolean', required: false },
      description: 'Use avatar carousel to continue with premade avatar.',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
      },
    },
    onAvatarExported: {
      name: 'onAvatarExported',
      type: { name: 'function', required: false },
      description: 'Callback function called when avatar is exported.',
      control: {
        type: 'function',
      },
      table: {
        type: { summary: 'function' },
      },
    },
    onUserSet: {
      name: 'onUserSet',
      type: { name: 'function', required: false },
      description: 'Callback function called when user is set.',
      control: {
        type: 'function',
      },
      table: {
        type: { summary: 'function' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ReadyPlayerMe {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
