import React, { FC } from 'react';
import { AvatarCreator } from './avatar-creator';
import { AvatarConfig, EditorConfig, ViewerConfig } from '../types';
import { buildAvatarUrl } from '../utils';
import { Avatar } from '@readyplayerme/visage';

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
  position: 'relative',
};

const loadingNodeStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  fontSize: '1.5rem',
  alignItems: 'center',
  position: 'absolute',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
};

export interface AvatarCreatorViewerProps {
  subdomain: string;
  editorConfig?: EditorConfig;
  avatarConfig?: AvatarConfig;
  viewerConfig?: ViewerConfig;
  loadingNode?: JSX.Element | string;
  onUserSet?: (id: string) => void;
  onAvatarExported?: (url: string) => void;
  onAvatarLoaded?: () => void;
}

/**
 * AvatarCreatorViewer is a React component that allows you to create an avatar using Ready Player Me and display it in a 3D canvas.
 * @param subdomain The subdomain of your Ready Player Me instance.
 * @param editorConfig The configuration for the AvatarEditor component.
 * @param avatarConfig The configuration for the Avatar GLB file.
 * @param viewerConfig The configuration for the AvatarViewer component.
 * @param loadingNode A React node that is displayed while the avatar is loading.
 * @param onUserSet A callback that is called when a user is set.
 * @param onAvatarExported A callback that is called when an avatar is exported.
 * @param onAvatarLoaded A callback that is called when an avatar is loaded.
 * @returns A React component.
 */
export const AvatarCreatorViewer: FC<AvatarCreatorViewerProps> = ({ subdomain, editorConfig, viewerConfig, avatarConfig, loadingNode, onUserSet, onAvatarExported, onAvatarLoaded }) => {
  const [url, setUrl] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const handleOnAvatarExported = (url: string) => {
    const avatarUrl = buildAvatarUrl(url, avatarConfig);
    setUrl(avatarUrl);
    onAvatarExported?.(avatarUrl);
  };

  const handleOnLoaded = () => {
    setLoading(false);
    onAvatarLoaded?.();
  };

  // prettier-ignore
  return url === '' ?
    <AvatarCreator subdomain={subdomain} editorConfig={editorConfig} onUserSet={onUserSet} onAvatarExported={handleOnAvatarExported} /> :
    <div style={containerStyle}>
      <Avatar {...viewerConfig} modelSrc={url} onLoaded={handleOnLoaded} style={{ ...viewerConfig?.style, position: 'absolute' }} />
      {loading && <div style={loadingNodeStyle}>{loadingNode || 'Loading...'}</div>}
    </div>
};
