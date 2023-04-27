import { FC, useState } from 'react';
import { Avatar } from '@readyplayerme/visage';
import { BodyType } from '../types';

export interface AvatarViewerProps {
  url: string;
  animationUrl?: string;
  bodyType?: BodyType;
  style?: React.CSSProperties;
  className?: string;
  loadingNode?: React.ReactNode;
  onLoaded?: () => void;
}

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  border: 'none',
  position: 'relative',
};

export const AvatarViewer: FC<AvatarViewerProps> = ({ url, animationUrl, style, className, bodyType, loadingNode, onLoaded }) => {
  const [loading, setLoading] = useState(true);

  const handleOnLoaded = () => {
    if (onLoaded) onLoaded();
    setLoading(false);
  };

  const isHalfBody = bodyType === 'halfbody';
  const cameraTarget = isHalfBody ? 0.6 : 0;
  const cameraInitialDistance = isHalfBody ? 0.5 : 2.5;

  return (
    <div style={containerStyle}>
      <Avatar modelSrc={url} animationSrc={animationUrl} halfBody={isHalfBody} shadows headMovement idleRotation onLoaded={handleOnLoaded} cameraTarget={cameraTarget} cameraInitialDistance={cameraInitialDistance} style={{ position: 'absolute', ...style }} className={className} />
      {loading && <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'absolute' }}>{loadingNode || 'Loading...'}</div>}
    </div>
  );
};
