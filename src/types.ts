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
