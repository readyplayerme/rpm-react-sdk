export type BodyType = 'halfbody' | 'fullbody';

export type Language = 'en' | 'en-IE' | 'de' | 'fr' | 'es' | 'es-MX' | 'it' | 'pt' | 'pt-BR' | 'tr' | 'ja' | 'kr' | 'ch';

export enum EventName {
    FrameReady = 'v1.frame.ready',
    SubscriptionCreated = 'v1.subscription.created',
    SubscriptionDeleted ='v1.subscription.deleted',
    AvatarExported = 'v1.avatar.exported',
    UserSet = 'v1.user.set',
    UserUpdated = 'v1.user.updated',
    UserLogout = 'v1.user.logout'
}

export type CreatorConfig = {
    clearCache?: boolean;
    bodyType?: BodyType;
    quickStart?: boolean;
    language?: Language;
}

export type AvatarConfig = {
    quality?: 'low' | 'medium' | 'high';
    meshLod?: 0 | 1 | 2;
    textureSizeLimit?: number;
    textureAtlas?: 'none' | 256 | 512 | 1024;
    textureChannels?: TextureChannel[];
    morphTargets?: string[];
    useDracoCompression?: boolean;
    useMeshOptCompression?: boolean;
    pose?: 'A' | 'T';
    useHands?: boolean;
}

export enum TextureChannel {
    None = 'none',
    BaseColor = 'baseColor',
    Normal = 'normal',
    MetallicRoughness = 'metallicRoughness',
    Emissive = 'emissive',
    Occlusion = 'occlusion'
}
