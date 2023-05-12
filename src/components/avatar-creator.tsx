import React, { FC, useEffect, useRef } from 'react';
import { EventName, EditorConfig } from '../types';
import { buildIframeUrl, safeParseJSON } from '../utils';

export interface AvatarCreatorProps {
  subdomain: string;
  editorConfig?: EditorConfig;
  onUserSet?: (id: string) => void;
  onAvatarExported?: (url: string) => void;
  onUserAuthorized?: (url: string) => void;
  onAssetUnlock?: (assetRecord: AssetRecord) => void;
}

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
};

/**
 * AvatarCreator is a React component that allows you to create an avatar using Ready Player Me and receive avatar URL.
 * @param subdomain The subdomain of your Ready Player Me instance.
 * @param editorConfig The configuration for the AvatarCreator component.
 * @param onUserSet A callback that is called when a user is set.
 * @param onAvatarExported A callback that is called when an avatar is exported.
 * @returns A React component.
 */
export const AvatarCreator: FC<AvatarCreatorProps> = ({ subdomain, editorConfig, onUserSet, onAvatarExported, onUserAuthorized, onAssetUnlock }) => {
  const frameRef = useRef<HTMLIFrameElement>(null);

  const subscribe = (event: MessageEvent) => {
    const json = safeParseJSON(event);

    if (json?.source !== 'readyplayerme') {
      return;
    }

    switch (json.eventName) {
      case EventName.FrameReady:
        // Subscribe to all events
        frameRef.current?.contentWindow?.postMessage(JSON.stringify({ target: 'readyplayerme', type: 'subscribe', eventName: 'v1.**' }), '*');
        break;
      case EventName.UserSet:
        onUserSet?.(json.data.id);
        break;
      case EventName.AvatarExported:
        onAvatarExported?.(json.data.url);
        break;
      case EventName.UserAuthorized:
        onUserAuthorized?.(json.data.id);
        break;
      case EventName.AssetUnlock:
        const assetRecord: AssetRecord = { userId: json.data.userId, assetId: json.data.assetId };
        onAssetUnlock?.(assetRecord);
        break;
    }
  };

  const url = buildIframeUrl(subdomain, editorConfig);

  useEffect(() => {
    window.addEventListener('message', subscribe);

    return () => {
      window.removeEventListener('message', subscribe);
    };
  });

  return <iframe title="Ready Player Me" ref={frameRef} src={url} style={style} allow="camera *; clipboard-write" />;
};
