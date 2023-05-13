import{r as n}from"./index-ebeaab24.js";var R={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=n,j=Symbol.for("react.element"),I=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,U=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function $(s,e,r){var t,l={},p=null,c=null;r!==void 0&&(p=""+r),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(c=e.ref);for(t in e)T.call(e,t)&&!P.hasOwnProperty(t)&&(l[t]=e[t]);if(s&&s.defaultProps)for(t in e=s.defaultProps,e)l[t]===void 0&&(l[t]=e[t]);return{$$typeof:j,type:s,key:p,ref:c,props:l,_owner:U.current}}m.Fragment=I;m.jsx=$;m.jsxs=$;R.exports=m;var w=R.exports;const q=w.jsx,F=w.jsxs;var d=(s=>(s.FrameReady="v1.frame.ready",s.SubscriptionCreated="v1.subscription.created",s.SubscriptionDeleted="v1.subscription.deleted",s.AvatarExported="v1.avatar.exported",s.UserSet="v1.user.set",s.UserUpdated="v1.user.updated",s.UserLogout="v1.user.logout",s.UserAuthorized="v1.user.authorized",s.AssetUnlock="v1.asset.unlock",s))(d||{});function V(s,e){let r=`https://${s||"demo"}.readyplayer.me`;return e!=null&&e.language&&(r+=`/${e.language}`),r+="/avatar?frameApi",e!=null&&e.clearCache&&(r+="&clearCache"),e!=null&&e.quickStart&&(r+="&quickStart"),e!=null&&e.bodyType&&(r+=`&bodyType=${e==null?void 0:e.bodyType}`),r}const D=(s,e)=>{const r=[];e!=null&&e.quality&&r.push(`quality=${e.quality}`),e!=null&&e.meshLod&&r.push(`meshLod=${e.meshLod}`),e!=null&&e.textureSizeLimit&&r.push(`textureSizeLimit=${e.textureSizeLimit}`),e!=null&&e.textureAtlas&&r.push(`textureAtlas=${e.textureAtlas}`),e!=null&&e.morphTargets&&r.push(`morphTargets=${e.morphTargets.join(",")}`),e!=null&&e.pose&&r.push(`pose=${e.pose}`),e!=null&&e.useHands&&r.push(`useHands=${e.useHands}`),e!=null&&e.textureChannels&&r.push(`textureChannels=${e.textureChannels.join(",")}`),e!=null&&e.useDracoCompression&&r.push(`useDracoCompression=${e.useDracoCompression}`),e!=null&&e.useMeshOptCompression&&r.push(`useMeshOptCompression=${e.useMeshOptCompression}`);const t=r.join("&");return`${s}${t?`?${t}`:""}`};function M(s){try{return JSON.parse(s.data)}catch{return null}}const E={width:"100%",height:"100%",border:"none"},_="message",a="readyplayerme",b=({subdomain:s,editorConfig:e,avatarConfig:r,onUserSet:t,onAvatarExported:l,onUserAuthorized:p,onAssetUnlock:c})=>{const y=n.useRef(null),h=L=>{var o,i;const u=M(L);if((u==null?void 0:u.source)===a)switch(u.eventName){case d.FrameReady:(i=(o=y.current)==null?void 0:o.contentWindow)==null||i.postMessage(JSON.stringify({target:a,type:"subscribe",eventName:"v1.**"}),"*");break;case d.UserSet:t==null||t(u.data.id);break;case d.AvatarExported:const O=D(u.data.url,r);l==null||l(O);break;case d.UserAuthorized:p==null||p(u.data.id);break;case d.AssetUnlock:const k={userId:u.data.userId,assetId:u.data.assetId};c==null||c(k);break}},S=V(s,e);return n.useEffect(()=>(window.addEventListener(_,h),()=>{window.removeEventListener(_,h)})),q("iframe",{title:"Ready Player Me",ref:y,src:S,style:E,allow:"camera *; clipboard-write"})};try{b.displayName="AvatarCreator",b.__docgenInfo={description:"AvatarCreator is a React component that allows you to create an avatar using Ready Player Me and receive avatar URL.",displayName:"AvatarCreator",props:{subdomain:{defaultValue:null,description:"",name:"subdomain",required:!0,type:{name:"string"}},editorConfig:{defaultValue:null,description:"",name:"editorConfig",required:!1,type:{name:"EditorConfig"}},avatarConfig:{defaultValue:null,description:"",name:"avatarConfig",required:!1,type:{name:"AvatarConfig"}},onUserSet:{defaultValue:null,description:"",name:"onUserSet",required:!1,type:{name:"((id: string) => void)"}},onAvatarExported:{defaultValue:null,description:"",name:"onAvatarExported",required:!1,type:{name:"((url: string) => void)"}},onUserAuthorized:{defaultValue:null,description:"",name:"onUserAuthorized",required:!1,type:{name:"((url: string) => void)"}},onAssetUnlock:{defaultValue:null,description:"",name:"onAssetUnlock",required:!1,type:{name:"((assetRecord: AssetRecord) => void)"}}}}}catch{}const x=({children:s})=>q("div",{style:{height:700,width:900,marginLeft:"auto",marginRight:"auto",borderRadius:8,overflow:"hidden"},children:s});try{x.displayName="Container",x.__docgenInfo={description:"",displayName:"Container",props:{}}}catch{}export{b as A,x as C,F as a,D as b,q as j};
//# sourceMappingURL=container-16aaa5eb.js.map