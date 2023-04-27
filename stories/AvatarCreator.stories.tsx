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
    render : (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
    args: {
      subdomain: 'demo',
    }
};

export const HalfBody: Story = {
  render : (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'halfbody',
      clearCache: true,
    }
  }
};

export const LowQuality: Story = {
  render : (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'fullbody',
      clearCache: true,
    },
    avatarConfig: {
      quality: 'low',
    },
    viewerConfig: {
      loadingNode: 'Loading...',
      style: {
        backgroundColor: '#ddd',
      }
    }
  }
};

export const TPose: Story = {
  render : (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'fullbody',
      clearCache: true,
    },
    avatarConfig: {
      pose: 'T',
    },
    viewerConfig: {
      loadingNode: 'Loading...',
      style: {
        backgroundColor: '#ddd',
      }
    }
  }
};