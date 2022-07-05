"use strict";(self.webpackChunkservices_reseaux=self.webpackChunkservices_reseaux||[]).push([[3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,s={unversionedId:"Services basiques/Service-DHCP",id:"Services basiques/Service-DHCP",title:"Service-DHCP",description:"Dynamic Host Configuration Protocol est un protocole r\xe9seau charg\xe9 de la configuration des adresses IP d\u2019un r\xe9seau informatique. Il \xe9vite ainsi \xe0 l\u2019utilisateur qui se connecte pour la premi\xe8re fois, d\u2019avoir \xe0 configurer la pile IP de son \xe9quipement.",source:"@site/docs/Services basiques/Service-DHCP.md",sourceDirName:"Services basiques",slug:"/Services basiques/Service-DHCP",permalink:"/Services basiques/Service-DHCP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Services basiques/Service-DHCP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Service-RTC",permalink:"/Services Avanc\xe9s/Service-RTC"},next:{title:"Service-DNS",permalink:"/Services basiques/Service-DNS"}},u={},l=[{value:"installation et configuration d&#39;un serveur DHCP sous ubuntu(20.04)",id:"installation-et-configuration-dun-serveur-dhcp-sous-ubuntu2004",level:3},{value:"Installation des paquets",id:"installation-des-paquets",level:4},{value:"Configuration basique",id:"configuration-basique",level:4}],c={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dynamic Host Configuration Protocol est un protocole r\xe9seau charg\xe9 de la configuration des adresses IP d\u2019un r\xe9seau informatique. Il \xe9vite ainsi \xe0 l\u2019utilisateur qui se connecte pour la premi\xe8re fois, d\u2019avoir \xe0 configurer la pile IP de son \xe9quipement."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"photo",src:r(9577).Z,width:"841",height:"357"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DHCP DISCOVER")," : Requ\xeate de localisation  des serveurs DHCP disponibles.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DHCP OFFER"),"  : R\xe9ponse du serveur \xe0 un paquet DHCPDISCOVER, contenant les premiers param\xe8tres DHCP.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DHCP REQUEST"),"  : Requ\xeate du client pour annoncer qu\u2019il \xe0 accept\xe9 une offre ou pour prolonger son bail.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DHCP PACK"),"  : R\xe9ponse du serveur pour signaler au client que son bail est expir\xe9 ou si le client annonce une mauvaise configuration r\xe9seau.  ")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"installation-et-configuration-dun-serveur-dhcp-sous-ubuntu2004"},"installation et configuration d'un serveur DHCP sous ubuntu(20.04)"),(0,a.kt)("h4",{id:"installation-des-paquets"},"Installation des paquets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get install isc-dhcp-server\n")),(0,a.kt)("h4",{id:"configuration-basique"},"Configuration basique"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Etapes de la configurations"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Dire dans quel r\xe9seau mettre les clients"),(0,a.kt)("li",{parentName:"ol"},"La plage d'adresse"),(0,a.kt)("li",{parentName:"ol"},"Les options que l'on veut activer"),(0,a.kt)("li",{parentName:"ol"},"La passerelle \xe0 donner aux clients"),(0,a.kt)("li",{parentName:"ol"},"Le DNS que l'on veut donner aux clients ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"subnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.20 192.168.1.20; \n  option routers 192.168.1.1;\n  option domain-name-servers 192.168.1.130;\n}\n")))}p.isMDXComponent=!0},9577:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dhcp1-245ff5f29624610570b39e5e9fc58037.png"}}]);