import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { EditorIframe, EditorIframeProps } from '../src/components/editor-iframe';
import { Container } from './container';

const meta: Meta<EditorIframeProps> = {
  title: 'Editor Iframe',
  component: EditorIframe,
};

export default meta;
type Story = StoryObj<EditorIframeProps>;

export const Default: Story = {
  render: (args: EditorIframeProps) => <Container><EditorIframe {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      clearCache: true,
      language: 'en',
    }
  }
};

export const Halfbody: Story = {
  render: (args: EditorIframeProps) => <Container><EditorIframe {...args} /></Container>,
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
  render: (args: EditorIframeProps) => <Container><EditorIframe {...args} /></Container>,
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
  render: (args: EditorIframeProps) => <Container><EditorIframe {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      language: 'de',
      clearCache: true,
    }
  }
};
