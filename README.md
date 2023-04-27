# Ready Player Me Web SDK

 React components for implementing Ready Player Me on web.

## Avatar Editor

Avatar Editor component helps you load Ready Player Me in an iframe where you can edit your avatar and receive your avatar URL as a post message once your avatar is exported.

```tsx
    <AvatarEditor subdomain="demo"/>
```

You can pass an Editor Config to Avatar Creator component to change your user experience. Read more about thes options [here](https://docs.readyplayer.me/ready-player-me/integration-guides/web-and-native-integration/avatar-creator-integration#configuration-1).

```tsx
const config: EditorConfig  = {
    clearCache: true;
    bodyType: 'halfbody';
    quickStart: 'false';
    language: 'tr';
}

<AvatarEditor subdomain="demo" editorConfig={config}/>
```

You can also receive notifications when user avatar is exported and user id is set.

```tsx
const handleOnUserSet = (userId: string) => {
    console.log(`User ID is: ${userId}`)
}

const handleOnAvatarExported = (userId: string) => {
    console.log(`User ID is: ${userId}`)
}

<AvatarEditor subdomain="demo" onUserSet={handleOnUserSet} onAvatarExported={handleOnAvatarExported}/>
```

## Avatar Viewer

Avatar Viewer is a wrapper on top of [Ready Player Me Visage](https://www.npmjs.com/package/@readyplayerme/visage) for simplifying the use of the component in Avatar Creator. If you need more customzied user experience in 3D canvas please check Visage out.

## Avatar Creator

Avatar Creator is the combination of Avatar Editor and Avatar Viewer components that helps you use Ready Player Me avatar creator and load the generated avatar with the given configurations into a 3D canvas where you can display it.

Addition to the Editor Config, Avatar Creator takes Viewer Config and Avatar Config parameters to modify the viewer visuals and result avatar quality.

```tsx
const avatarConfig: AvatarConfig = {
  meshLod: 2,
  textureAtlas: 512,
  morphTargets: 'ARKit',
  pose: 'T',
};

const viewerConfig: ViewerConfig = {
  animationUrl: "...",
  loadingNode: <div>Loading your avatar</div>,
  style: {backgroundColor: "#ddd"}
};

<AvatarCreator subdomain="demo" avatarConfig={avatarConfig} viewerConfig={viewerConfig}/>
```

You can find all the avatar configuration options [here](https://docs.readyplayer.me/ready-player-me/api-reference/avatar-rest-api/get-3d-avatars).