import React, { FC, useEffect, useRef } from "react";
import { EventName, EditorConfig, AvatarConfig } from "../types";

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

export const AvatarEditor: FC<AvatarEditorProps> = ({subdomain, editorConfig, onUserSet, onAvatarExported}) => 
{ 
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    window.addEventListener('message', subscribe);

    return () => {
      window.removeEventListener('message', subscribe);
    }
  }, []);


  const buildSrc = () => {
    let src = `https://${subdomain || `demo`}.readyplayer.me`;

    if (editorConfig?.language) src += `/${editorConfig.language}`;
    src += `/avatar?frameApi`;
    if (editorConfig?.clearCache) src += '&clearCache';
    if (editorConfig?.quickStart) src += '&quickStart';
    if (editorConfig?.bodyType) src += `&bodyType=${editorConfig?.bodyType}`;

    return src;
  }

  const subscribe = (event: MessageEvent) => {
    const json = safeParse(event);

    if (json?.source !== 'readyplayerme') {
      return;
    }

    switch (json.eventName)  {
      case EventName.FrameReady:
        frameRef.current?.contentWindow?.postMessage(JSON.stringify({ target: 'readyplayerme', type: 'subscribe', eventName: 'v1.**'}), '*');
        break;
      case EventName.UserSet:
        onUserSet?.(json.data.id);
        break;
      case EventName.AvatarExported:
        onAvatarExported?.(json.data.url);
        break;
    }
  }

  function safeParse(event: MessageEvent) {
    try {
      return JSON.parse(event.data);
    } catch (error) {
      return null;
    }
  }

  return <iframe ref={frameRef} src={buildSrc()} style={style} allow="camera *; clipboard-write" />
};
