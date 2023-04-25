import { FC, useEffect, useRef } from "react";
import { BodyType, EventName, Language } from "./types";

export interface Props {
  subdomain: string;
  clearCache?: boolean;
  bodyType?: BodyType;
  quickStart?: boolean;
  language?: Language;
  style?: React.CSSProperties;
  className?: string;
  onUserSet?: (id: string) => void;
  onAvatarExported?: (url: string) => void;
}

const defaultStyle: React.CSSProperties = {
  width: '100%',
  height: '800px',
  border: 'none',
  display: 'block',
  overflow: 'hidden',
  borderRadius: '8px',
};

export const ReadyPlayerMe: FC<Props> = ({subdomain, clearCache, bodyType, quickStart, language, style, className, onUserSet, onAvatarExported}) => 
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

    if (language) src += `/${language}`;
    src += `/avatar?frameApi`;
    if (clearCache) src += '&clearCache';
    if (quickStart) src += '&quickStart';
    if (bodyType) src += `&bodyType=${bodyType}`;

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
        console.log(`User ID: ${json.data.id}`);
        break;
      case EventName.AvatarExported:
        onAvatarExported?.(json.data.url);
        console.log(`Avatar URL: ${json.data.url}`);
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

  return  <iframe ref={frameRef} src={buildSrc()} className={className} style={style || defaultStyle} allow="camera *; clipboard-write" />
};
