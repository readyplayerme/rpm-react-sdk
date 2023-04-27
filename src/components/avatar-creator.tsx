import React, { FC, useEffect, useRef } from "react";
import { EventName, CreatorConfig, AvatarConfig } from "../types";

export interface AvatarCreatorProps {
  subdomain: string;
  creatorConfig?: CreatorConfig;
  avatarConfig?: AvatarConfig;
  onUserSet?: (id: string) => void;
  onAvatarExported?: (url: string) => void;
}

const style: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
};

export const AvatarCreator: FC<AvatarCreatorProps> = ({subdomain, creatorConfig, avatarConfig, onUserSet, onAvatarExported}) => 
{ 
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    window.addEventListener('message', subscribe);

    return () => {
      window.removeEventListener('message', subscribe);
    }
  }, []);

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

  return <iframe ref={frameRef} src={buildSrc()} style={style} allow="camera *; clipboard-write" />
};
