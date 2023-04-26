import React, { FC, useEffect, useRef, useState } from "react";
import { EventName, CreatorConfig, AvatarConfig, Language } from "./types";
import { Avatar } from "@readyplayerme/visage";

export interface Props {
  subdomain: string;
  language?: Language;
  creatorConfig?: CreatorConfig;
  avatarConfig?: AvatarConfig;
  style?: React.CSSProperties;
  className?: string;
  onUserSet?: (id: string) => void;
  onAvatarExported?: (url: string) => void;
}

const defaultStyle: React.CSSProperties = {
  width: '100%',
  height: '800px',
  display: 'block',
  overflow: 'hidden',
  borderRadius: '8px',
};

const iframeStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
};

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
}

export const ReadyPlayerMe: FC<Props> = ({subdomain, creatorConfig, avatarConfig, style, className, onUserSet, onAvatarExported}) => 
{ 
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('message', subscribe);

    return () => {
      window.removeEventListener('message', subscribe);
    }
  }, [url]);

  const buildAvatarUrl = (base: string) => {
    const queryParams: string[] = [];

    if (avatarConfig?.quality) {
      queryParams.push(`quality=${avatarConfig.quality}`);
    }
    else {
      if (avatarConfig?.meshLod) queryParams.push(`meshLod=${avatarConfig.meshLod}`);
      if (avatarConfig?.textureSizeLimit) queryParams.push(`textureSizeLimit=${avatarConfig.textureSizeLimit}`);
      if (avatarConfig?.textureAtlas) queryParams.push(`textureAtlas=${avatarConfig.textureAtlas}`);
      if (avatarConfig?.morphTargets) queryParams.push(`morphTargets=${avatarConfig.morphTargets.join(',')}`);
    }

    if (avatarConfig?.pose) queryParams.push(`pose=${avatarConfig.pose}`);
    if (avatarConfig?.useHands) queryParams.push(`useHands=${avatarConfig.useHands}`);
    if (avatarConfig?.textureChannels) queryParams.push(`textureChannels=${avatarConfig.textureChannels.join(',')}`);

    if (avatarConfig?.useDracoCompression) queryParams.push(`useDracoCompression=${avatarConfig.useDracoCompression}`);
    if (avatarConfig?.useMeshOptCompression) queryParams.push(`useMeshOptCompression=${avatarConfig.useMeshOptCompression}`);

    const query = queryParams.join("&");
    return `${base}${query ? `?${query}` : ""}`;
  }

  const buildSrc = () => {
    let src = `https://${subdomain || `demo`}.readyplayer.me`;

    if (creatorConfig?.language) src += `/${creatorConfig.language}`;
    src += `/avatar?frameApi`;
    if (creatorConfig?.clearCache) src += '&clearCache';
    if (creatorConfig?.quickStart) src += '&quickStart';
    if (creatorConfig?.bodyType) src += `&bodyType=${creatorConfig?.bodyType}`;

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
        const avatarUrl = buildAvatarUrl(json.data.url);
        setUrl(avatarUrl + `?${Date.now()}`);
        setLoading(true);
        onAvatarExported?.(avatarUrl);
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

  return <div className={className} style={style || defaultStyle} >
    {url == "" ? 
      <iframe ref={frameRef} src={buildSrc()} style={iframeStyle} allow="camera *; clipboard-write" /> :
      <div style={containerStyle}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: 18, fontWeight: 'bold', fontFamily: 'sans-serif', position: 'absolute'}}>Loading...</div>
        <Avatar modelSrc={url} onLoaded={() => setLoading(false)} style={{position: 'absolute'}}/>
      </div>
    }
  </div>
};
