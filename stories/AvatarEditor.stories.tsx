import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AvatarEditor, AvatarEditorProps } from '../src/components/avatar-editor';
import { Container } from './container';

const meta: Meta<AvatarEditorProps> = {
  title: 'Avatar Editor',
  component: AvatarEditor,
};

export default meta;
type Story = StoryObj<AvatarEditorProps>;

export const Default: Story = {
    render : (args: AvatarEditorProps) => <Container><AvatarEditor {...args} /></Container>,
    args: {
      subdomain: 'demo',
      editorConfig: {
        clearCache: true,
        language: 'en',
      }
    }
};

export const Halfbody: Story = {
  render : (args: AvatarEditorProps) => <Container><AvatarEditor {...args} /></Container>,
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
  render : (args: AvatarEditorProps) => <Container><AvatarEditor {...args} /></Container>,
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
  render : (args: AvatarEditorProps) => <Container><AvatarEditor {...args} /></Container>,
  args: {
    subdomain: 'demo',
    editorConfig: {
      language: 'de',
      clearCache: true,
    }
  }
};
