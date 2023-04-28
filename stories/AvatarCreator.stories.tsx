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
  }
};

export const HalfBody: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      bodyType: 'halfbody',
      clearCache: true,
      language: 'en',
    },
  }
};

export const LowQuality: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
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
      loadingNode: 'Loading...',
      style: {
        backgroundColor: '#ddd',
      }
    }
  }
};

export const TPose: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
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
      loadingNode: 'Loading...',
      style: {
        backgroundColor: '#ddd',
      }
    }
  }
};

export const Animated: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      clearCache: true,
      bodyType: 'fullbody',
      language: 'en',
    },
    viewerConfig: {
      animationUrl: './male-idle.glb',
      loadingNode: 'LOADING...',
      style: {
        backgroundColor: '#ddd',
      }
    }
  }
};

const CustomLoadingNodeComponent = <div style={{ color: 'orange', backgroundColor: 'black', height: '100%', width: '100%' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
        CUSTOM LOADING NODE
      </div>
    </div>
  </div>
</div>

export const CustomLoadingNode: Story = {
  render: (args: AvatarCreatorProps) => <Container><AvatarCreator {...args} /></Container>,
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
      loadingNode: CustomLoadingNodeComponent,
      style: {
        backgroundColor: '#ddd',
      }
    }
  }
};
