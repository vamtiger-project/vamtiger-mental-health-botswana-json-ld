!function(){"use strict";var t,e;!function(t){t.jsonLd="application/ld+json",t.json="application/json"}(t||(t={})),function(t){t.svgCaption="https://unpkg.com/vamtiger-arting-health-logo-json-ld@latest"}(e||(e={}));var n="https://cdn.jsdelivr.net/npm/vamtiger-mental-health-botswana-json-ld@latest/build/vamtiger-mental-health-botswana-2018-json-ld.js",a=[{"@context":"http://schema.org","@type":"VisualArtwork",name:"Infers Group - Arting Health",description:"Mental Health - Depression",datePublished:"05 June 2019",about:{"@context":"http://schema.org","@type":"Thing",name:"Infers Group - Arting Health: Science Communication and Public Engagement Project on Mental Health",description:"A collaborative science communication and public engagement project on depression between artists, scientists and community members by Infers Group"},image:"https://unpkg.com/vamtiger-mental-health-botswana-json-ld@latest/vamtiger-mental-health-botswana-2018-json-ld.jpg",producer:!0,creator:!0,funder:!0,keywords:"Infers Group, Arting Health, Art Health, Health Art, Sciart, Scientific Art, Science Art, Art Science, Science Communication, Public Engagement, Social Entrepreneurship"}],i=["https://vamtiger-project.github.io/vamtiger-organization-infers-group-json-ld/build/vamtiger-organization-infers-group-json-ld.js","https://vamtiger-project.github.io/vamtiger-person-abraham-mamela-json-ld/build/vamtiger-person-abraham-mamela-json-ld.js"],o={svgCaption:e.svgCaption,jsonLd:[{index:0,fields:{producer:i,creator:i.slice(),funder:["https://vamtiger-project.github.io/vamtiger-organization-welcome-json-ld/build/vamtiger-organization-welcome-json-ld.js"]}}]},r=JSON.stringify;var s=a.map(function(e){return{url:n,type:t.jsonLd,data:e}}),c={url:n,type:t.json,data:o};s.concat([c]).forEach(function(t){var e=t.type,n=t.url,a=t.data,i=document.head,o=document.createElement("script"),s=Object.keys(a).length&&a;o.type=e,o.dataset.jsonLd=n,s&&(o.innerHTML=r(s).trim()),o.innerHTML&&i.appendChild(o)})}();
//# sourceMappingURL=vamtiger-mental-health-botswana-2018-json-ld.js.map
