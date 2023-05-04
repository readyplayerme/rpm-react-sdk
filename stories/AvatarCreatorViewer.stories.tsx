import React from 'react';
import { Container } from './container';
import { CustomLoadingNode } from './custom-loading-node';
import { Meta, StoryObj } from '@storybook/react';
import { AvatarCreatorViewer, AvatarCreatorViewerProps } from '../src/components/avatar-creator-viewer';

const meta: Meta<AvatarCreatorViewerProps> = {
  title: 'Avatar Creator Viewer',
  component: AvatarCreatorViewer,
};

export default meta;
type Story = StoryObj<AvatarCreatorViewerProps>;

export const Default: Story = {
  render: (args: AvatarCreatorViewerProps) => <Container><AvatarCreatorViewer {...args} /></Container>,
  args: {
    subdomain: 'demo',
  }
};

export const HalfBody: Story = {
  render: (args: AvatarCreatorViewerProps) => <Container><AvatarCreatorViewer {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'halfbody',
      clearCache: true,
      language: 'en',
    },
    viewerConfig: {
      halfBody: true,
      cameraTarget: 0.6,
    },
    avatarConfig: {
      useHands: false,
    },
  }
};

export const LowQuality: Story = {
  render: (args: AvatarCreatorViewerProps) => <Container><AvatarCreatorViewer {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'fullbody',
      clearCache: true,
      language: 'en',
    },
    avatarConfig: {
      quality: 'low',
    },
    viewerConfig: {
      style: {
        backgroundColor: '#ddd',
      }
    },
    loadingNode: 'Loading...',
  }
};

export const TPose: Story = {
  render: (args: AvatarCreatorViewerProps) => <Container><AvatarCreatorViewer {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'fullbody',
      clearCache: true,
      language: 'en',
    },
    avatarConfig: {
      pose: 'T',
    },
    viewerConfig: {
      style: {
        backgroundColor: '#ddd',
      }
    },
    loadingNode: 'Loading...',
  }
};

export const Animated: Story = {
  render: (args: AvatarCreatorViewerProps) => <Container><AvatarCreatorViewer {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      clearCache: true,
      bodyType: 'fullbody',
      language: 'en',
    },
    viewerConfig: {
      animationSrc: './male-idle.glb',
      style: {
        backgroundColor: '#ddd',
      }
    },
    loadingNode: 'Loading...',
  }
};

export const WithCustomLoadingNode: Story = {
  render: (args: AvatarCreatorViewerProps) => <Container><AvatarCreatorViewer {...args} /></Container>,
  args: {
    subdomain: 'demo',
    avatarConfig: {
      quality: 'low',
    },
    editorConfig: {
      clearCache: true,
      bodyType: 'fullbody',
      language: 'en',
    },
    viewerConfig: {
      style: {
        backgroundColor: '#ddd',
      }
    },
    loadingNode: <CustomLoadingNode />,
  }
};
