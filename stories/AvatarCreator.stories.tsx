import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AvatarCreator, AvatarCreatorProps } from '../src/components/avatar-creator';
import { Container } from './container';

const meta: Meta<AvatarCreatorProps> = {
  title: 'Avatar Creator',
  component: AvatarCreator,
};

export default meta;
type Story = StoryObj<AvatarCreatorProps>;

export const Default: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      clearCache: true,
      language: 'en',
    }
  }
};

export const Halfbody: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'halfbody',
      clearCache: true,
      language: 'en',
    }
  }
};

export const QuickStart: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      quickStart: true,
      clearCache: true,
      language: 'en',
    }
  }
};

export const LanguageGerman: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      language: 'de',
      clearCache: true,
    }
  }
};
