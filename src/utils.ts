import { AvatarConfig, EditorConfig } from './types';

/**
 * Builds the source URL for Ready Player Me iframe.
 * @param subdomain The subdomain to use for the iframe.
 * @param editorConfig The editor configuration.
 * @returns The source URL for the iframe.
 */
export function buildIframeUrl(subdomain: string, editorConfig: EditorConfig | undefined) {
  let url = `https://${subdomain || `demo`}.readyplayer.me`;

  if (editorConfig?.language) url += `/${editorConfig.language}`;
  url += `/avatar?frameApi`;
  if (editorConfig?.clearCache) url += '&clearCache';
  if (editorConfig?.quickStart) url += '&quickStart';
  if (editorConfig?.bodyType) url += `&bodyType=${editorConfig?.bodyType}`;

  return url;
}

/**
 * Builds avatar URL from the given base URL and avatar configuration. Optimizations are applied to the URL.
 * @param base The base URL.
 * @param avatarConfig The avatar configuration.
 * @returns The avatar URL.
 */
export const buildAvatarUrl = (base: string, avatarConfig: AvatarConfig | undefined) => {
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

  const query = queryParams.join('&');
  return `${base}${query ? `?${query}` : ''}`;
};

/**
 * Safely parses the JSON data from the message event.
 * @param event The message event.
 * @returns The parsed JSON data or null if the data is not valid JSON.
 */
export function safeParseJSON(event: MessageEvent) {
  try {
    return JSON.parse(event.data);
  } catch (error) {
    return null;
  }
}
