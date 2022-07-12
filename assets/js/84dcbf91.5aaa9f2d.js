"use strict";(self.webpackChunkservices_reseaux=self.webpackChunkservices_reseaux||[]).push([[878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const s={},l=void 0,i={unversionedId:"Services Avanc\xe9s/Freeradius+LDAP",id:"Services Avanc\xe9s/Freeradius+LDAP",title:"Freeradius+LDAP",description:"FreeRADIUS",source:"@site/docs\\Services Avanc\xe9s\\Freeradius+LDAP.md",sourceDirName:"Services Avanc\xe9s",slug:"/Services Avanc\xe9s/Freeradius+LDAP",permalink:"/Services Avanc\xe9s/Freeradius+LDAP",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Services Avanc\xe9s/Freeradius+LDAP.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro - Services R\xe9seaux",permalink:"/"},next:{title:"Gitlab+LDAP",permalink:"/Services Avanc\xe9s/Gitlab+LDAP"}},o={},u=[{value:"FreeRADIUS",id:"freeradius",level:3},{value:"Installation et configuration d&#39;un serveur RADIUS avec un annuaire LDAP sous ubuntu(20.04)",id:"installation-et-configuration-dun-serveur-radius-avec-un-annuaire-ldap-sous-ubuntu2004",level:3},{value:"Installation des paquets",id:"installation-des-paquets",level:4},{value:"Configuration",id:"configuration",level:4}],p={toc:u};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"freeradius"},"FreeRADIUS"),(0,r.kt)("p",null,"FreeRADIUS est un serveur RADIUS libre. Il offre une alternative aux autres serveurs d'entreprise RADIUS, et est un des serveurs RADIUS les plus modulaires et riches en fonctionnalit\xe9s disponibles aujourd'hui.  "),(0,r.kt)("p",null,"Le protocole Radius permet \xe0 la fois l\u2019authentification des administrateurs sur les \xe9quipements r\xe9seau actifs, et pour les acc\xe8s en tant qu\u2019utilisateur sur les diff\xe9rents services r\xe9seau.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bas\xe9 sur le mod\xe9le de s\xe9curit\xe9 AAA")," (Authentication Authorization Accounting)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cas d'utilisations"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Contr\xf4ler l'acc\xe9s \xe0 un r\xe9seau wifi"),(0,r.kt)("li",{parentName:"ol"},"Contr\xf4ler l'acc\xe9s \xe0 un switch"),(0,r.kt)("li",{parentName:"ol"},"Contr\xf4ler l'acc\xe9s \xe0 un MSAN"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entit\xe9s"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Supplicant ou terminal de l'utilisateur"),(0,r.kt)("li",{parentName:"ol"},"Client RADIUS appel\xe9 NAS (Serveur d'Acc\xe9s R\xe9seau)"),(0,r.kt)("li",{parentName:"ol"},"Serveur RADIUS")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Le fonctionnement de RADIUS est bas\xe9 sur un sc\xe9nario proche de celui-ci")," :",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Un utilisateur envoie une requ\xeate au NAS afin d'autoriser une connexion \xe0 distance ;  "),(0,r.kt)("li",{parentName:"ol"},"Le NAS achemine la demande au serveur RADIUS ;  "),(0,r.kt)("li",{parentName:"ol"},"Le serveur RADIUS consulte la base de donn\xe9es d'identification afin de conna\xeetre le type de sc\xe9nario d'identification demand\xe9 pour l'utilisateur. Soit le sc\xe9nario actuel convient, soit une autre m\xe9thodes d'identification est demand\xe9e \xe0 l'utilisateur.",(0,r.kt)("br",{parentName:"li"}),"Le serveur RADIUS retourne ainsi une des quatre r\xe9ponses suivantes :",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("strong",{parentName:"li"},"ACCEPT")," : l'identification a r\xe9ussi ;",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("strong",{parentName:"li"},"REJECT")," : l'identification a \xe9chou\xe9 ;",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("strong",{parentName:"li"},"CHALLENGE")," : le serveur RADIUS souhaite des informations suppl\xe9mentaires de la part de l'utilisateur et propose un \xab d\xe9fi \xbb (en anglais \xab challenge \xbb) ;",(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("strong",{parentName:"li"},"CHANGE PASSWORD")," : le serveur RADIUS demande \xe0 l'utilisateur un nouveau mot de passe.   "))))),(0,r.kt)("p",null,"Suite \xe0 cette phase dit d'authentification, d\xe9bute une phase d'autorisation o\xf9 le serveur retourne les autorisations de l'utilisateur. "),(0,r.kt)("p",null,"Sch\xe9ma r\xe9caputilatif:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"photo",src:a(8921).Z,width:"569",height:"398"})),(0,r.kt)("p",null,"Coupl\xe9 \xe0 un annuaire LDAP, qui sert de base d\u2019utilisateurs, il devient possible d\u2019utiliser une base d\u2019utilisateurs uniques pour les applications \xe9galement. Les protocoles RADIUS et LDAP sont des standards d\xe9finis par l\u2019IEEE, et la plupart des applications sont aujourd\u2019hui compatibles avec ces protocoles. Il devient ainsi plus simple de d\xe9ployer de nouvelles applications au sein de votre infrastructure. Avec ce syst\xe8me, vos utilisateurs effectuent une r\xe9-authentification unique valable pour tous les \xe9quipements lors de la r\xe9initialisation ou du changement de leur mot de passe."),(0,r.kt)("h3",{id:"installation-et-configuration-dun-serveur-radius-avec-un-annuaire-ldap-sous-ubuntu2004"},"Installation et configuration d'un serveur RADIUS avec un annuaire LDAP sous ubuntu(20.04)"),(0,r.kt)("p",null,"NB: On suppose qu'on a d\xe9ja install\xe9 et configur\xe9 notre serveur LDAP"),(0,r.kt)("h4",{id:"installation-des-paquets"},"Installation des paquets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt update\nsudo apt install freeradius freeradius-utils freeradius-ldap \n")),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cr\xe9er un compte pour le client (un modem dans notre cas)",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  sudo nano /etc/freeradius/3.0/clients.conf\n")),(0,r.kt)("p",{parentName:"blockquote"},"  ajouter l'adresse du modem et le secret"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"client 192.168.0.50 {\n        secret = passer123\n}\n")))),(0,r.kt)("li",{parentName:"ul"},"Configurer la prise en charge de LDAP:",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  sudo nano /etc/freeradius/3.0/sites-available/default \n")),(0,r.kt)("p",{parentName:"blockquote"},'  Enlever le "-" devant "ldap"'),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"        #\n        #  The ldap module reads passwords from the LDAP database.\n        ldap\n")))),(0,r.kt)("li",{parentName:"ul"},"Activer l'Authentification avec LDAP",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"toujours dans le m\xeame fichier dans la section authenticate"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#  LDAP servers do not.\n      #\n      Auth-Type LDAP {\n              ldap\n      }\n")),(0,r.kt)("p",{parentName:"blockquote"}," dans la section post-auth d\xe9commenter ldap"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#  Un-comment the following if you want to modify the user's object\n      #  in LDAP after a successful login.\n      #\n      ldap\n")))),(0,r.kt)("li",{parentName:"ul"},"Donner les param\xe8tres de connexion",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"   sudo nano /etc/freeradius/3.0/mods-available/ldap\n")),(0,r.kt)("p",{parentName:"blockquote"},"  L'adresse ip et le port"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    #  - ldaps:// (LDAP over SSL)\n    #  - ldapi:// (LDAP over Unix socket)\n    #  - ldapc:// (Connectionless LDAP)\n    server = 'localhost'\n#       server = 'ldap.rrdns.example.org'\n#       server = 'ldap.rrdns.example.org'\n    #  Port to connect on, defaults to 389, will be ignored for LDAP URIs.\n    port = 389\n")),(0,r.kt)("p",{parentName:"blockquote"},"  Le dn et le mot de passe de l'administrateur"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#  Administrator account for searching and possibly modifying.\n#  If using SASL + KRB5 these should be commented out.\nidentity = 'cn=admin,dc=esp,dc=sn'\npassword = passer\n")),(0,r.kt)("p",{parentName:"blockquote"},"  La base pour les recherches"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#  Unless overridden in another section, the dn from which all\n#  searches will start from.\nbase_dn = 'dc=esp,dc=sn'\n")),(0,r.kt)("p",{parentName:"blockquote"},"  Faire le mapping des attributs: "),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"mot de passe",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"update {\n               control:Password-With-Header    += 'userPassword'\n               control:Cleartext-Password      += 'userPassword'\n#               control:NT-Password             := 'ntPassword'\n#               reply:Reply-Message             := 'radiusReplyMessage'\n#               reply:Tunnel-Type               := 'radiusTunnelType'\n#               reply:Tunnel-Medium-Type        := 'radiusTunnelMediumType'\n#               reply:Tunnel-Private-Group-ID   := 'radiusTunnelPrivategroupId'\n               #  Where only a list is specified as the RADIUS attribute,\n               #  the value of the LDAP attribute is parsed as a valuepair\n               #  in the same format as the 'valuepair_attribute' (above).\n               control:                        += 'radiusControlAttribute'\n               request:                        += 'radiusRequestAttribute'\n               reply:                          += 'radiusReplyAttribute'\n       }\n"))),(0,r.kt)("li",{parentName:"ol"},"login",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'user {\n            #  Where to start searching in the tree for users\n            base_dn = "${..base_dn}"\n            #  Filter for user objects, should be specific enough\n            #  to identify a single user object.\n            #\n            #  For Active Directory, you should use\n            #  "samaccountname=" instead of "uid="\n            #\n            filter = "(uid=%{%{Stripped-User-Name}:-%{User-Name}})"\n            #  SASL parameters to use for user binds\n            #\n            #  When we\'re prompted by the SASL library, these control\n            ...\n')))))),(0,r.kt)("li",{parentName:"ul"},"Activer le module ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  ln -s /etc/freeradius/3.0/mods-available/ldap /etc/freeradius/3.0/mods-enabled/\n"))))))}c.isMDXComponent=!0},8921:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/radius1-74e4343c62fd0953ffdd66c76e336dc9.png"}}]);