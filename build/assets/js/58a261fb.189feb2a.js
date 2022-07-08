"use strict";(self.webpackChunkservices_reseaux=self.webpackChunkservices_reseaux||[]).push([[529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,s={unversionedId:"Services basiques/Service-TFTP",id:"Services basiques/Service-TFTP",title:"Service-TFTP",description:"TFTP (Trivial File Transfer Protocol) est un protocole qui fonctionne en UDP sur le port 69. Il permet de transf\xe9rer des fichiers, comme une image IOS, de mani\xe8re simple et rapide via une connexion r\xe9seau.",source:"@site/docs/Services basiques/Service-TFTP.md",sourceDirName:"Services basiques",slug:"/Services basiques/Service-TFTP",permalink:"/Services basiques/Service-TFTP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Services basiques/Service-TFTP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service-DNS",permalink:"/Services basiques/Service-DNS"}},u={},l=[{value:"installation et configuration d&#39;un serveur TFTP sous ubuntu(20.04)",id:"installation-et-configuration-dun-serveur-tftp-sous-ubuntu2004",level:3},{value:"Installation des paquets",id:"installation-des-paquets",level:4},{value:"Configuration (serveur primaire)",id:"configuration-serveur-primaire",level:4}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TFTP (",(0,a.kt)("strong",{parentName:"p"},"Trivial File Transfer Protocol"),") est un protocole qui fonctionne en UDP sur le port 69. Il permet de transf\xe9rer des fichiers, comme une image IOS, de mani\xe8re simple et rapide via une connexion r\xe9seau."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"installation-et-configuration-dun-serveur-tftp-sous-ubuntu2004"},"installation et configuration d'un serveur TFTP sous ubuntu(20.04)"),(0,a.kt)("h4",{id:"installation-des-paquets"},"Installation des paquets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get install tftpd-hpa tftp-hpa\n")),(0,a.kt)("h4",{id:"configuration-serveur-primaire"},"Configuration (serveur primaire)"),(0,a.kt)("p",null,"editer le fichier tftpd-hpa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nano /etc/default/tftpd-hpa\n")),(0,a.kt)("p",null,"ajouter l'option -c pour donner le droit d'\xe9criture "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# /etc/default/tftpd-hpa\n\nTFTP_USERNAME="tftp"\nTFTP_DIRECTORY="/srv/tftp"\nTFTP_ADDRESS=":69"\nTFTP_OPTIONS="--secure -c"\n')),(0,a.kt)("p",null,"changer le propri\xe9taire du r\xe9pertoire par l\u2019utilisateur tftp avec la commande chown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"chown -R tftp /srv/tftp\n")))}p.isMDXComponent=!0}}]);