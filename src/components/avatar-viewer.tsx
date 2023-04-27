import React, { FC, useEffect, useRef, useState } from "react";
import { Avatar } from "@readyplayerme/visage";
import { AvatarCreator, AvatarCreatorProps } from "./avatar-creator";

export interface Props {
    subdomain: string;
    creatorConfig?: AvatarCreatorProps;
}

const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'relative',
  }

  
const defaultStyle: React.CSSProperties = {
    width: '100%',
    height: '800px',
    display: 'block',
    overflow: 'hidden',
    borderRadius: '8px',
  };
  
export const AvatarViewer: FC<Props> = ({subdomain, creatorConfig}) => 
{ 
    const [url, setUrl] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    return <div>
        { url == "" ? 
            <AvatarCreator subdomain={subdomain} { ...creatorConfig } /> :
            <div style={containerStyle}>
                { loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: 18, fontWeight: 'bold', fontFamily: 'sans-serif', position: 'absolute'}}>Loading...</div>}
                <Avatar modelSrc={url} onLoaded={() => setLoading(false)} style={{position: 'absolute'}}/>
            </div>
        }
    </div>
}

/**
            <div style={containerStyle}>
            { loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', fontSize: 18, fontWeight: 'bold', fontFamily: 'sans-serif', position: 'absolute'}}>Loading...</div>}
            <Avatar modelSrc={url} onLoaded={() => setLoading(false)} style={{position: 'absolute'}}/> */