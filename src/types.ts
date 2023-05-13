export type BodyType = 'halfbody' | 'fullbody';

export type Language = 'en' | 'en-IE' | 'de' | 'fr' | 'es' | 'es-MX' | 'it' | 'pt' | 'pt-BR' | 'tr' | 'ja' | 'kr' | 'ch';

export type EditorConfig = {
  clearCache?: boolean;
  bodyType?: BodyType;
  quickStart?: boolean;
  language?: Language;
};

export type ViewerConfig = {
  poseSrc?: string | Blob;
  animationSrc?: string | Blob;
  className?: string;
  style?: React.CSSProperties;
  halfBody?: boolean;
  shadows?: boolean;
  scale?: number;
  cameraTarget?: number;
  cameraInitialDistance?: number;
  idleRotation?: boolean;
  headMovement?: boolean;
};

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
};

export enum EventName {
  FrameReady = 'v1.frame.ready',
  SubscriptionCreated = 'v1.subscription.created',
  SubscriptionDeleted = 'v1.subscription.deleted',
  AvatarExported = 'v1.avatar.exported',
  UserSet = 'v1.user.set',
  UserUpdated = 'v1.user.updated',
  UserLogout = 'v1.user.logout',
  UserAuthorized = 'v1.user.authorized',
  AssetUnlock = "v1.asset.unlock"
}

export type AssetRecord = {
  userId: string;
  assetId: string;
}

export enum TextureChannel {
  None = 'none',
  BaseColor = 'baseColor',
  Normal = 'normal',
  MetallicRoughness = 'metallicRoughness',
  Emissive = 'emissive',
  Occlusion = 'occlusion',
}

export enum MorphTargets {
  None = 'none',
  OculusVisemes = 'Oculus Visemes',
  ARKit = 'ARKit',

  // Visemes
  Viseme_aa = 'viseme_aa',
  Viseme_E = 'viseme_E',
  Viseme_I = 'viseme_I',
  Viseme_O = 'viseme_O',
  Viseme_U = 'viseme_U',
  Viseme_CH = 'viseme_CH',
  Viseme_DD = 'viseme_DD',
  Viseme_FF = 'viseme_FF',
  Viseme_kk = 'viseme_kk',
  Viseme_nn = 'viseme_nn',
  Viseme_PP = 'viseme_PP',
  Viseme_RR = 'viseme_RR',
  Viseme_sil = 'viseme_sil',
  Viseme_SS = 'viseme_SS',
  Viseme_TH = 'viseme_TH',

  // ARKit
  BrowDownLeft = 'browDownLeft',
  BrowDownRight = 'browDownRight',
  BrowInnerUp = 'browInnerUp',
  BrowOuterUpLeft = 'browOuterUpLeft',
  BrowOuterUpRight = 'browOuterUpRight',
  EyesClosed = 'eyesClosed',
  EyeBlinkLeft = 'eyeBlinkLeft',
  EyeBlinkRight = 'eyeBlinkRight',
  EyeSquintLeft = 'eyeSquintLeft',
  EyeSquintRight = 'eyeSquintRight',
  EyeWideLeft = 'eyeWideLeft',
  EyeWideRight = 'eyeWideRight',
  EyesLookUp = 'eyesLookUp',
  EyesLookDown = 'eyesLookDown',
  EyeLookDownLeft = 'eyeLookDownLeft',
  EyeLookDownRight = 'eyeLookDownRight',
  EyeLookUpLeft = 'eyeLookUpLeft',
  EyeLookUpRight = 'eyeLookUpRight',
  EyeLookInLeft = 'eyeLookInLeft',
  EyeLookInRight = 'eyeLookInRight',
  EyeLookOutLeft = 'eyeLookOutLeft',
  EyeLookOutRight = 'eyeLookOutRight',
  JawOpen = 'jawOpen',
  JawForward = 'jawForward',
  JawLeft = 'jawLeft',
  JawRight = 'jawRight',
  NoseSneerLeft = 'noseSneerLeft',
  NoseSneerRight = 'noseSneerRight',
  CheekPuff = 'cheekPuff',
  CheekSquintLeft = 'cheekSquintLeft',
  CheekSquintRight = 'cheekSquintRight',
  MouthSmileLeft = 'mouthSmileLeft',
  MouthSmileRight = 'mouthSmileRight',
  MouthOpen = 'mouthOpen',
  MouthSmile = 'mouthSmile',
  MouthLeft = 'mouthLeft',
  MouthRight = 'mouthRight',
  MouthClose = 'mouthClose',
  MouthFunnel = 'mouthFunnel',
  MouthPucker = 'mouthPucker',
  MouthShrugLower = 'mouthShrugLower',
  MouthShrugUpper = 'mouthShrugUpper',
  MouthRollUpper = 'mouthRollUpper',
  MouthRollLower = 'mouthRollLower',
  MouthLowerDownLeft = 'mouthLowerDownLeft',
  MouthLowerDownRight = 'mouthLowerDownRight',
  MouthUpperUpLeft = 'mouthUpperUpLeft',
  MouthUpperUpRight = 'mouthUpperUpRight',
  MouthDimpleLeft = 'mouthDimpleLeft',
  MouthDimpleRight = 'mouthDimpleRight',
  MouthStretchLeft = 'mouthStretchLeft',
  MouthStretchRight = 'mouthStretchRight',
  MouthPressLeft = 'mouthPressLeft',
  MouthPressRight = 'mouthPressRight',
  MouthFrownLeft = 'mouthFrownLeft',
  MouthFrownRight = 'mouthFrownRight',
  TongueOut = 'tongueOut',
}
