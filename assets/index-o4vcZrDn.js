import{r as h,j as n,L as D}from"./index-C37BWA0C.js";import{H as G,F as L,I as l}from"./index-0keM3HLs.js";const $=({item:s})=>{var c,o,d,u,e,r,a,x,j,p,i,f,v,b,_,y,N,g,k,C,F,E,P,q,A;return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"plan",children:[n.jsx("h2",{className:"plan-name",children:s==null?void 0:s.name}),n.jsxs("h3",{className:"plan-amount",children:[(c=s==null?void 0:s.price)==null?void 0:c.amount," ",(o=s==null?void 0:s.price)==null?void 0:o.currency]}),n.jsxs("div",{className:"plan-duration",children:[(d=s==null?void 0:s.duration)==null?void 0:d.value," ",(u=s==null?void 0:s.duration)==null?void 0:u.unit]}),n.jsxs("div",{className:"plan-features",children:[n.jsx("h3",{children:"Caractéristiques"}),n.jsxs("ul",{children:[((e=s==null?void 0:s.features)==null?void 0:e.video_quality)&&n.jsxs("li",{children:["• Qualité Vidéo: ",(r=s==null?void 0:s.features)==null?void 0:r.video_quality]}),((a=s==null?void 0:s.features)==null?void 0:a.resolution)&&n.jsxs("li",{children:["• Résolution: ",(x=s==null?void 0:s.features)==null?void 0:x.resolution]}),((j=s==null?void 0:s.features)==null?void 0:j.audio_quality)&&n.jsxs("li",{children:["• Qualité Audio: ",(p=s==null?void 0:s.features)==null?void 0:p.audio_quality]}),((i=s==null?void 0:s.features)==null?void 0:i.bitrate)&&n.jsxs("li",{children:["• Débit: ",(f=s==null?void 0:s.features)==null?void 0:f.bitrate]}),((v=s==null?void 0:s.features)==null?void 0:v.device_limits)&&n.jsxs("li",{children:["• Appareils autorisés: ",(_=(b=s==null?void 0:s.features)==null?void 0:b.device_limits)==null?void 0:_.max_devices]}),((y=s==null?void 0:s.features)==null?void 0:y.device_limits)&&n.jsxs("li",{children:["• Flux simultanés: ",(g=(N=s==null?void 0:s.features)==null?void 0:N.device_limits)==null?void 0:g.simultaneous_streams]}),n.jsxs("li",{children:["• Téléchargements hors ligne: ",(k=s==null?void 0:s.features)!=null&&k.offline_downloads?n.jsx(l.FcCheckmark,{}):n.jsx(l.FcCancel,{})]}),n.jsxs("li",{children:["• Publicités incluses: ",(C=s==null?void 0:s.features)!=null&&C.ads_included?n.jsx(l.FcCheckmark,{}):n.jsx(l.FcCancel,{})]}),n.jsxs("li",{children:["• Contenu exclusif: ",(F=s==null?void 0:s.features)!=null&&F.exclusive_content?n.jsx(l.FcCheckmark,{}):n.jsx(l.FcCancel,{})]})]})]}),((E=s==null?void 0:s.trial_period)==null?void 0:E.availability)&&n.jsxs("div",{className:"plan-trial-period",children:[n.jsx("h3",{children:"Période d'Essai"}),n.jsxs("p",{children:["Durée: ",(P=s==null?void 0:s.trial_period)==null?void 0:P.duration.value," ",(q=s==null?void 0:s.trial_period)==null?void 0:q.duration.unit]})]}),n.jsxs("div",{className:"plaan-availability",children:[n.jsx("h3",{children:"Disponibilité"}),n.jsxs("p",{children:["Plateformes: ",(A=s==null?void 0:s.availability)==null?void 0:A.platforms.join(", ")]})]}),(s==null?void 0:s.terms_and_conditions)&&n.jsx("p",{children:n.jsx("a",{href:s==null?void 0:s.terms_and_conditions,target:"_blank",rel:"noopener noreferrer",children:"Conditions Générales"})}),n.jsxs("div",{className:"actions",children:[n.jsxs(D,{to:"",className:"button-primary",children:["Acheter   ",n.jsx(l.BiMoney,{})]}),n.jsxs(D,{to:`/co-abonnement/${s==null?void 0:s.id}`,className:"button-primary",children:[n.jsx("span",{children:"Co-abonnement"}),"   ",n.jsx(l.BiGroup,{})]})]})]})})},H=()=>{var o,d,u,e;h.useEffect(()=>{document.title="Epizyplus - Abonnements"},[]);const[s,c]=h.useState(void 0);return h.useEffect(()=>{fetch("/data/subscription-plans.json",{method:"GET"}).then(r=>r.json()).then(r=>{var a,x;c(r),(a=r==null?void 0:r.service)!=null&&a.name&&(document.title=`Epizyplus - ${(x=r==null?void 0:r.service)==null?void 0:x.name}`)}).catch(r=>{console.error(r),c(null)})},[]),n.jsxs("main",{children:[n.jsx(G,{}),n.jsxs("section",{className:"subscription-plans",children:[s&&n.jsxs("h3",{children:["Plan",((o=s==null?void 0:s.plans)==null?void 0:o.length)>1&&"s"," d'Abonnement de ",(d=s==null?void 0:s.service)==null?void 0:d.name]}),n.jsx("div",{className:"container",children:s?(u=s==null?void 0:s.plans)==null?void 0:u.map((r,a)=>n.jsx($,{item:r},a)):n.jsx("div",{children:"Loading"})}),n.jsx("div",{className:"background",style:{background:`linear-gradient(135deg, #00b4dbaa, #0083b0aa), url(${(e=s==null?void 0:s.service)==null?void 0:e.image}) no-repeat center / cover fixed`}})]}),n.jsx(L,{})]})};export{H as default};
