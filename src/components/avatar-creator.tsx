import { FC, useState } from "react"
import { AvatarViewer } from "./avatar-viewer"
import { AvatarEditor } from "./avatar-editor"
import { AvatarConfig, EditorConfig, ViewerConfig } from "../types";

export interface AvatarCreatorProps {
  subdomain: string;
  editorConfig?: EditorConfig;
  avatarConfig?: AvatarConfig;
  viewerConfig?: ViewerConfig;  
  onUserSet?: (id: string) => void;
  onAvatarExported?: (url: string) => void;
  onAvatarLoaded?: () => void;
}

export const AvatarCreator : FC<AvatarCreatorProps> = ({subdomain, editorConfig, viewerConfig, avatarConfig, onUserSet, onAvatarExported, onAvatarLoaded}) => {
  const [url, setUrl] = useState("")

  const handleOnAvatarExported = (url: string) => {
    const avatarUrl = buildAvatarUrl(url);
    setUrl(avatarUrl);
    onAvatarExported && onAvatarExported(avatarUrl);
  }

  const buildAvatarUrl = (base: string) => {
    const queryParams: string[] = [];

    if (avatarConfig?.quality) queryParams.push(`quality=${avatarConfig.quality}`);
    if (avatarConfig?.meshLod) queryParams.push(`meshLod=${avatarConfig.meshLod}`);
    if (avatarConfig?.textureSizeLimit) queryParams.push(`textureSizeLimit=${avatarConfig.textureSizeLimit}`);
    if (avatarConfig?.textureAtlas) queryParams.push(`textureAtlas=${avatarConfig.textureAtlas}`);
    if (avatarConfig?.morphTargets) queryParams.push(`morphTargets=${avatarConfig.morphTargets.join(',')}`);

    if (avatarConfig?.pose) queryParams.push(`pose=${avatarConfig.pose}`);
    if (avatarConfig?.useHands) queryParams.push(`useHands=${avatarConfig.useHands}`);
    if (avatarConfig?.textureChannels) queryParams.push(`textureChannels=${avatarConfig.textureChannels.join(',')}`);

    if (avatarConfig?.useDracoCompression) queryParams.push(`useDracoCompression=${avatarConfig.useDracoCompression}`);
    if (avatarConfig?.useMeshOptCompression) queryParams.push(`useMeshOptCompression=${avatarConfig.useMeshOptCompression}`);

    const query = queryParams.join("&");
    return `${base}${query ? `?${query}` : ""}`;
  }

  return  url == "" ? 
    <AvatarEditor subdomain={subdomain} editorConfig={editorConfig} onUserSet={onUserSet} onAvatarExported={handleOnAvatarExported}/> :
    <AvatarViewer url={url} bodyType={editorConfig?.bodyType} animationUrl={viewerConfig?.animationUrl} onLoaded={onAvatarLoaded} style={viewerConfig?.style} className={viewerConfig?.className}/>
}
