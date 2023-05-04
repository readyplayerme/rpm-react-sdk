# Ready Player Me React SDK

**Ready Player Me React SDK** is a set of components and helper methods to help implementing Ready Player Me into React projects. With this SDK you can display Ready Player Me editor in your React project, create, edit and display avatars.

You can visit SDK Storybook and test the components here: https://readyplayerme.github.io/rpm-react-sdk

Codesandbox examples are available here: https://codesandbox.io/s/rpm-react-sdk-yii76z

## Installation
Ready Player Me React SDK is available as an [npm package](https://www.npmjs.com/package/@readyplayerme/rpm-react-sdk).

```bash
npm i @readyplayerme/rpm-react-sdk
```

## Usage

```tsx
import { AvatarCreator } from '@readyplayerme/rpm-react-sdk';

export default function App() {
  return (
    <div>
      <AvatarCreator subdomain="demo"/>
    </div>
  );
}
```


https://user-images.githubusercontent.com/3163281/235168912-a9dacd91-af3a-4b35-81c3-b025e12e333a.mp4

---

# Components

## Editor Iframe

Editor Iframe component helps you load Ready Player Me in an iframe where you can edit your avatar and receive your avatar URL as a post message once your avatar is exported.

### Parameters

**subdomain** *[required]*: string 
- Your Ready Player Me subdomain. You can get one from [Ready Player Me Studio](https://studio.readyplayer.me/).

**editorConfig** *[optional]*: EditorConfig
- Editor Configurations. Read more about these options in [Ready Player Me documentations](https://docs.readyplayer.me/ready-player-me/integration-guides/web-and-native-integration/avatar-creator-integration#configuration-1).

**onAvatarExported** *[required]*: (url: string) => void
- Callback function that is called when avatar is exported.

**onUserSet** *[optional]*: (userId: string) => void
- Callback function that is called when user id is set.

### Example

```tsx
const config: EditorConfig  = {
  clearCache: true;
  bodyType: 'halfbody';
  quickStart: 'false';
  language: 'tr';
}

const handleOnUserSet = (userId: string) => {
  console.log(`User ID is: ${userId}`)
}

const handleOnAvatarExported = (url;: string) => {
  console.log(`Avatar URL is: ${url}`)
}

<AvatarEditor subdomain="demo" editorConfig={config} onUserSet={handleOnUserSet} onAvatarExported={handleOnAvatarExported}/>
```

## Avatar Creator

Avatar Creator component is the combination of Editor Iframe component and [Ready Player Me Visage](https://github.com/readyplayerme/visage) components that helps load the generated avatar with the given configurations into a 3D canvas where you can display it.

### Parameters

**subdomain** *[required]*: string
- Your Ready Player Me subdomain. You can get one from [Ready Player Me Studio](https://studio.readyplayer.me).

**editorConfig** *[optional]*: EditorConfig
- Editor Configurations where you can set url properties of Ready Player Me editor. Read more about these options in [Ready Player Me documentations](https://docs.readyplayer.me/ready-player-me/integration-guides/web-and-native-integration/avatar-creator-integration#configuration-1).

**avatarConfig** *[optional]*: AvatarConfig
- Avatar Configurations that changes the optimization properties of the generated GLB avatar model. Read more about these options in [Ready Player Me documentations](https://docs.readyplayer.me/ready-player-me/api-reference/avatar-rest-api/get-3d-avatars).

**viewerConfig** *[optional]*: ViewerConfig
- Viewer Configurations that changes the properties of the 3D canvas where the avatar is displayed.

**loadingNode** *[optional]*: JSX.Element | string
- Loading node that is displayed while avatar is loading.

**onUserSet** *[optional]*: (id: string) => void
- Callback function that is called when user id is set.

**onAvatarLoaded** *[optional]*: () => void
- Callback function that is called when avatar is loaded.

**onAvatarExported** *[optional]*: (url: string) => void
- Callback function that is called when avatar is exported.

### Example

```tsx
const editorConfig: EditorConfig  = {
  clearCache: true;
  bodyType: 'halfbody';
  quickStart: 'false';
  language: 'tr';
};

const avatarConfig: AvatarConfig = {
  meshLod: 2,
  textureAtlas: 512,
  morphTargets: 'ARKit',
  pose: 'T',
};

const viewerConfig: ViewerConfig = {
  animationUrl: "...",
  style: {backgroundColor: "#ddd"}
};

const handleOnUserSet = (id: string) => {
  console.log(`User ID is: ${id}`)
}

const handleOnAvatarExported = (url: string) => {
  console.log(`Avatar URL is: ${url}`)
}

const handleOnAvatarLoaded = () => {
  console.log(`Avatar is loaded`)
}

<AvatarCreator subdomain="demo" 
  editorConfig={editorConfig} avatarConfig={avatarConfig} viewerConfig={viewerConfig} 
  handleOnUserSet={handleOnUserSet} handleOnAvatarExported={handleOnAvatarExported} handleOnAvatarLoaded={handleOnAvatarLoaded}/>
```

## Using Editor Iframe with Visage

If you would like to use Visage with it's full capability to edit camera and light properties of the scene and more, you can use Editor Iframe component and Visage components together.

```tsx
import { Avatar } from '@readyplayerme/visage';
import { AvatarEditor, AvatarViewer } from '@readyplayerme/rpm-react-sdk';

const subdomain = 'demo';

const editorConfig: EditorConfig  = {
  clearCache: true;
  bodyType: 'fullbody';
  quickStart: 'false';
  language: 'tr';
};

export const YourCustomComponent = () => {
  const [url, setUrl] = useState<string | undefined>(undefined);

  const handleOnAvatarExported = (url: string) => {
    setUrl(url);
  }

  return <div>
    <EditorIframe subdomain={subdomain} editorConnfig={editorConfig} onAvatarExported={handleOnAvatarExported} />
    <Avatar modelSrc={url} />
  </div>
}
```
