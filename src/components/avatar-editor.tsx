import React, { FC, useEffect, useRef } from 'react';
import { EventName, EditorConfig } from '../types';

export interface AvatarEditorProps {
  subdomain: string;
  editorConfig?: EditorConfig;
  onUserSet?: (id: string) => void;
  onAvatarExported?: (url: string) => void;
}

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
};

/**
 * AvatarEditor is a React component that allows you to create an avatar using Ready Player Me and receive avatar URL.
 * @param subdomain The subdomain of your Ready Player Me instance.
 * @param editorConfig The configuration for the AvatarEditor component.
 * @param onUserSet A callback that is called when a user is set.
 * @param onAvatarExported A callback that is called when an avatar is exported.
 * @returns A React component.
 */
export const AvatarEditor: FC<AvatarEditorProps> = ({ subdomain, editorConfig, onUserSet, onAvatarExported }) => {
  const frameRef = useRef<HTMLIFrameElement>(null);

  const buildSrc = () => {
    let src = `https://${subdomain || `demo`}.readyplayer.me`;

    if (editorConfig?.language) src += `/${editorConfig.language}`;
    src += `/avatar?frameApi`;
    if (editorConfig?.clearCache) src += '&clearCache';
    if (editorConfig?.quickStart) src += '&quickStart';
    if (editorConfig?.bodyType) src += `&bodyType=${editorConfig?.bodyType}`;

    return src;
  };

  const subscribe = (event: MessageEvent) => {
    const json = safeParse(event);

    if (json?.source !== 'readyplayerme') {
      return;
    }

    switch (json.eventName) {
      case EventName.FrameReady:
        frameRef.current?.contentWindow?.postMessage(JSON.stringify({ target: 'readyplayerme', type: 'subscribe', eventName: 'v1.**' }), '*');
        break;
      case EventName.UserSet:
        onUserSet?.(json.data.id);
        break;
      case EventName.AvatarExported:
        onAvatarExported?.(json.data.url);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('message', subscribe);

    return () => {
      window.removeEventListener('message', subscribe);
    };
  });

  function safeParse(event: MessageEvent) {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  }

  return <iframe title="Ready Player Me" ref={frameRef} src={buildSrc()} style={style} allow="camera *; clipboard-write" />;
};
