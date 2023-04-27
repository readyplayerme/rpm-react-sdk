import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AvatarViewer, AvatarViewerProps } from '../src/components/avatar-viewer';
import { Container } from './container';

const meta: Meta<AvatarViewerProps> = {
  title: 'Avatar Viewer',
  component: AvatarViewer,
};

export default meta;
type Story = StoryObj<AvatarViewerProps>;

export const Default: Story = {
    render : (args: AvatarViewerProps) => <Container><AvatarViewer {...args} /></Container>,
    args: {
        url: 'https://models.readyplayer.me/6442972e618cd3e6e8c1850f.glb',
        bodyType: 'fullbody',
        style: {
            backgroundColor: '#ddd',
        }
    }
};

export const HalfBody: Story = {
    render : (args: AvatarViewerProps) => <Container><AvatarViewer {...args} /></Container>,
    args: {
        url: 'https://models.readyplayer.me/60f815278099cfb7d82732db.glb',
        bodyType: 'halfbody',
        style: {
            backgroundColor: '#ddd',
        }
    }
};

export const CustomLoadingNode: Story = {
    render : (args: AvatarViewerProps) => <Container><AvatarViewer {...args} /></Container>,
    args: {
        url: 'https://models.readyplayer.me/6220b38d70f4fcd0780bd014.glb',
        bodyType: 'fullbody',
        style: {
            backgroundColor: '#ddd',
        },
        loadingNode: <div style={{backgroundColor: 'black', borderRadius: 8, padding: 8, fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: 24, color: 'wheat'}}>
            The Avatar is being Loaded
        </div>
    }
};

export const Animated: Story = {
    render : (args: AvatarViewerProps) => <Container><AvatarViewer {...args} /></Container>,
    args: {
        url: 'https://models.readyplayer.me/622e705bcc9780a069b31b22.glb',
        bodyType: 'fullbody',
        style: {
            backgroundColor: '#ddd',
        },
        animationUrl: './male-idle.glb'
    }
};