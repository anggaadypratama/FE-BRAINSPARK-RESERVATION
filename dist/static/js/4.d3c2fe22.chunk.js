(this.webpackJsonpbrainspark=this.webpackJsonpbrainspark||[]).push([[4],{165:function(e,t,a){"use strict";a.r(t);var E=a(0),i=a.n(E),n=a(59),r=a.n(n),o=a(156),y=a(4),N=a(1),w=(a(5),a(57)),l=a(58),c=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function m(e,t){var a=1<arguments.length&&void 0!==t?t:1,t=parseFloat(e);return"".concat(t/a).concat(String(e).replace(String(t),"")||"px")}var n=E.forwardRef(function(e,t){var a=e.alignContent,n=void 0===a?"stretch":a,i=e.alignItems,r=void 0===i?"stretch":i,o=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,m=e.container,d=void 0!==m&&m,u=e.direction,g=void 0===u?"row":u,f=e.item,p=void 0!==f&&f,b=e.justify,h=e.justifyContent,v=void 0===h?"flex-start":h,x=e.lg,a=void 0!==x&&x,i=e.md,c=void 0!==i&&i,m=e.sm,u=void 0!==m&&m,f=e.spacing,h=void 0===f?0:f,x=e.wrap,i=void 0===x?"wrap":x,m=e.xl,f=void 0!==m&&m,x=e.xs,m=void 0!==x&&x,x=e.zeroMinWidth,x=void 0!==x&&x,e=Object(y.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),f=Object(w.a)(o.root,l,d&&[o.container,0!==h&&o["spacing-xs-".concat(String(h))]],p&&o.item,x&&o.zeroMinWidth,"row"!==g&&o["direction-xs-".concat(String(g))],"wrap"!==i&&o["wrap-xs-".concat(String(i))],"stretch"!==r&&o["align-items-xs-".concat(String(r))],"stretch"!==n&&o["align-content-xs-".concat(String(n))],"flex-start"!==(b||v)&&o["justify-content-xs-".concat(String(b||v))],!1!==m&&o["grid-xs-".concat(String(m))],!1!==u&&o["grid-sm-".concat(String(u))],!1!==c&&o["grid-md-".concat(String(c))],!1!==a&&o["grid-lg-".concat(String(a))],!1!==f&&o["grid-xl-".concat(String(f))]);return E.createElement(s,Object(N.a)({className:f,ref:t},e))}),d=Object(l.a)(function(o){return Object(N.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},(a=o,n="xs",i={},c.forEach(function(e){var t=a.spacing(e);0!==t&&(i["spacing-".concat(n,"-").concat(e)]={margin:"-".concat(m(t,2)),width:"calc(100% + ".concat(m(t),")"),"& > $item":{padding:m(t,2)}})}),i),o.breakpoints.keys.reduce(function(e,t){var a,n,i,r;return a=e,n=o,i=t,r={},s.forEach(function(e){var t="grid-".concat(i,"-").concat(e);!0!==e?"auto"!==e?(e="".concat(Math.round(e/12*1e8)/1e6,"%"),r[t]={flexBasis:e,flexGrow:0,maxWidth:e}):r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"}:r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===i?Object(N.a)(a,r):a[n.breakpoints.up(i)]=r,e},{}));var a,n,i},{name:"MuiGrid"})(n),u=a(146),g=a(71),f=a(24),n=a(143),p=a(23),b=Object(n.a)(function(){return{waveBackdrop:{width:"100%",backgroundPosition:"center center",backgroundImage:"cover",height:"125vh",background:"linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%)"},waveJumbotron:{position:"absolute",background:'url("'.concat(p.i,'")'),backgroundRepeat:"no-repeat",backgroundPosition:"bottom",height:"100vh",bottom:function(e){return e?"-25vh":"-30vh"},width:"100%"},titlePosition:{display:"flex",width:"100%",height:"100vh",alignItems:"center",justifyContent:"center"},title:{fontFamily:"raleway",fontWeight:700,color:"white"},content:{marginTop:100},filter:{display:"flex",alignItems:"center",justifyContent:"center"},totalItem:{marginRight:30}}});t.default=function(){var e=Object(f.a)({isMax:!0,size:768}),t=b(e),a=r()(t.waveBackdrop),n=r()(t.waveJumbotron);return i.a.createElement(i.a.Fragment,null,i.a.createElement(g.h,{color:"transparent"}),i.a.createElement("div",{className:a},i.a.createElement("div",{className:t.titlePosition},i.a.createElement(u.a,{variant:e?"h3":"h1",className:t.title},"BRAINSPARK")),i.a.createElement("div",{className:n})),i.a.createElement(o.a,{maxWidth:"lg",className:t.content},i.a.createElement("div",{className:t.filter},i.a.createElement("span",{className:t.totalItem},"Result : 4"),i.a.createElement(g.d,{data:["All Events","In This Month","In This Week"],onChange:function(e){return e}})),i.a.createElement("div",{className:t.content},i.a.createElement(d,{container:!0,spacing:4},i.a.createElement(d,{item:!0,md:4},i.a.createElement(g.b,{md:4})),i.a.createElement(d,{item:!0,md:4},i.a.createElement(g.b,null)),i.a.createElement(d,{item:!0,md:4},i.a.createElement(g.b,null)),i.a.createElement(d,{item:!0,md:4},i.a.createElement(g.b,{editable:!0}))))),i.a.createElement(g.e,null))}},71:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i}),a.d(t,"f",function(){return O}),a.d(t,"g",function(){return z}),a.d(t,"d",function(){return B}),a.d(t,"e",function(){return L}),a.d(t,"h",function(){return $}),a.d(t,"c",function(){return X});var g=a(10),f=a(79),o=a(0),p=a.n(o),b=a(145),n=a(59),h=a.n(n),t=a(143),v=Object(t.a)(function(e){return{root:{fontFamily:e.font.raleway,fontWeight:800},primary:{background:"linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%);",color:"white"},secondary:{backgroundColor:e.color.tequila,color:e.color.dustyOrange},fullWidth:{width:"100%"}}}),n=function(e){var t=e.className,a=e.children,n=e.variant,i=e.disableElevation,r=e.onClick,o=e.disabled,l=e.type,c=e.isFullWidth,s=e.size,m=v(),d=m.primary,u=m.secondary,e=m.fullWidth,m=m.root,u="primary"===l?d:"secondary"===l?u:"",c=h()(t,m,u,Object(f.a)({},"".concat(e),c)),s={variant:n,disableElevation:i,onClick:r,disabled:o,size:s};return p.a.createElement(b.a,Object(g.a)({className:c},s),a)};n.defaultProps={className:"",children:"",props:{},variant:"text",disableElevation:!1,onClick:function(){},disabled:!1,type:"",isFullWidth:!1,size:""};var s=n,m=a(149),d=a(151),x=a(146),u=a(152),E=a(148),y=a(147),N=a(25),n=a(87),w=a.n(n),n=a(80),I=a.n(n),n=a(85),k=a.n(n),n=a(86),C=a.n(n),W=Object(t.a)(function(e){var t=e.color,e=e.font;return{card:{background:"linear-gradient(3.55deg, #FEE8D0 37.62%, #FFF8F1 95.02%)",minHeight:"250px",borderRadius:30,padding:16,position:"relative"},cardAction:{borderRadius:40},imageNormal:{width:"100%",height:"inherit",borderRadius:25,backgroundSize:"cover"},contentWrapper:{display:"flex",position:"relative",flexDirection:"column",zIndex:2},content:{marginLeft:0,marginTop:16,display:"flex",flexDirection:"column",justifyContent:"space-between",padding:4,"&:last-child":{paddingBottom:0}},status:{textTransform:"uppercase",color:t.primary,fontFamily:e.raleway,fontWeight:700,lineHeight:"20px",fontSize:18},title:{marginTop:"6px",lineHeight:"21px",fontFamily:e.raleway,fontWeight:700,fontSize:18},textContent:{fontFamily:e.robotoCon,marginTop:"1rem",fontWeight:400,fontSize:"1.1rem",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":4,"-webkit-box-orient":"vertical"},CardStyle:{position:"absolute",right:0,bottom:0,height:250,borderBottomRightRadius:"40px",zIndex:0},brainspark:{position:"absolute",zIndex:0,right:20,bottom:"-2.3rem"},brainsparkText:{textTransform:"uppercase",fontSize:"6rem",fontWeight:800,fontFamily:e.raleway,color:"rgba(255, 255, 255, 0.4)"},item:{display:"flex",alignItems:"center",paddingBottom:5,paddingTop:5},itemSection:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10,padding:"10px 0"},itemContent:{marginLeft:8,fontSize:16,fontFamily:e.robotoCon,fontWeight:500},itemIcon:{fill:"white",height:15,width:15},itemIconWrapper:{height:"25px",width:"25px",background:t.red,borderRadius:"15px",display:"flex",justifyContent:"center",alignItems:"center"},editable:{display:"flex",width:"100%",padding:"8px 0"},buttonEditable:{width:"100%",padding:"10px 0"},buttonEditableText:{marginLeft:6}}}),n=function(e){function t(e){var t=e.children,e=e.content;return p.a.createElement("div",{className:o.item},p.a.createElement("div",{className:o.itemIconWrapper},t),p.a.createElement(x.a,{className:o.itemContent},e))}function a(){return p.a.createElement(p.a.Fragment,null,p.a.createElement(y.a,null),p.a.createElement(E.a,{className:o.editable},p.a.createElement(s,{className:o.buttonEditable},p.a.createElement(I.a,null),p.a.createElement("span",{className:o.buttonEditableText},"Edit")),p.a.createElement(s,{className:o.buttonEditable},p.a.createElement(k.a,null),p.a.createElement("span",{className:o.buttonEditableText},"Delete"))))}var n=e.className,i=(e.src,e.status,e.title,e.desc,e.time,e.cardButton),r=e.editable,e=Object(N.b)({isMax:!0,size:600}),o=W(),l=h()(o.card,n),c=h()(o.contentWrapper,e&&o.flexColumn),e=function(){return p.a.createElement(m.a,{className:l},p.a.createElement("img",{src:N.c,className:o.CardStyle,alt:"card style"}),p.a.createElement("div",{className:c},p.a.createElement("img",{src:N.a,className:o.imageNormal,alt:"ea"}),p.a.createElement(d.a,{className:o.content},p.a.createElement("div",null,p.a.createElement(x.a,{variant:"h6",className:o.status},"Coming Up"),p.a.createElement(x.a,{variant:"h6",className:o.title},"SOLID Rest API for Web Development"),p.a.createElement("div",{className:o.itemSection},p.a.createElement("div",{className:o.itemWrapper},p.a.createElement(t,{content:"Google Meets"},p.a.createElement(C.a,{className:o.itemIcon})),p.a.createElement(t,{content:"23 Jan 20, at 10:00 WIB"},p.a.createElement(w.a,{className:o.itemIcon}))),p.a.createElement("div",null,!i&&p.a.createElement(s,{type:"primary"},"View"))),!r&&p.a.createElement(a,null)))))};return p.a.createElement(p.a.Fragment,null,i?p.a.createElement(u.a,null,p.a.createElement(e,null)):p.a.createElement(e,null))};n.defaultProps={className:"",src:"",status:!1,title:"",desc:"",time:"",cardButton:!1,editable:!1};var i=n,r=a(153),l=a(169),j=a(154),c=a(88),S=Object(t.a)(function(){return{avatarImage:{height:"inherit",width:"inherit",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}}),O=function(){var e=S();return p.a.createElement(r.a,{avatar:p.a.createElement(l.a,{"aria-label":"recipe",className:e.avatar},p.a.createElement("div",{style:{backgroundImage:'url("'.concat("https://upload.wikimedia.org/wikipedia/commons/6/6b/Sundar_Pichai_WEF_2020.png",'")')},className:e.avatarImage})),action:p.a.createElement(j.a,{"aria-label":"settings"},p.a.createElement(c.a,null)),title:"Anggit Nourislam, S.T.",subheader:"Senior software engineer"})},T=a(24),F=Object(t.a)(function(e){var t=e.font.robotoCon;return{info:{maxWidth:"100%",marginLeft:function(e){return e.isMedium?0:20},display:"block"},infoMobile:{display:"flex",justifyContent:"center"},cardInfo:{position:function(e){return e.position?"sticky":"relative"},width:function(e){return e.isMedium?600:"100%"},top:20,maxWidth:"100%",boxShadow:"none",fontSize:"1.25rem"},textInfo:{fontFamily:t,fontWeight:400},titleInfo:{fontFamily:t,fontWeight:600,marginBottom:8,marginTop:20,"&>:nth-child(1)":{marginTop:0}},registerInfo:{margin:"20px 0",textAlign:"center",color:e.color.primary},registerTitle:{fontWeight:800,fontFamily:t},registerTextInfo:{fontFamily:t,marginTop:4,fontWeight:400},registerUntil:{marginTop:10},commonInfo:{maxWidth:200}}}),n=function(e){var t=e.position,e=Object(T.a)({isMax:!0,size:900}),t=F({isMedium:e,position:"sticky"===t}),e=h()(e?t.infoMobile:t.info);return p.a.createElement("aside",{className:e},p.a.createElement(m.a,{className:t.cardInfo},p.a.createElement("div",{className:t.commonInfo},p.a.createElement("div",null,p.a.createElement(x.a,{className:t.titleInfo},"Time and Date"),p.a.createElement(x.a,{className:t.textInfo},"Sun, 17 Mei 2021"),p.a.createElement(x.a,{className:t.textInfo},"15.30-17.30 WIB")),p.a.createElement("div",null,p.a.createElement(x.a,{className:t.titleInfo},"Location (Online)"),p.a.createElement(x.a,{className:t.textInfo},"Microsoft Teams and Youtube")),p.a.createElement("div",null,p.a.createElement(x.a,{className:t.titleInfo},"For"," ",p.a.createElement("span",{className:t.textInfo},"Mahasiswa")))),p.a.createElement(y.a,null),p.a.createElement("div",{className:t.registerInfo},p.a.createElement("div",null,p.a.createElement(x.a,{className:t.registerTitle},"Ticket"," ",p.a.createElement("span",{className:t.registerTextInfo},"0/100"))),p.a.createElement("div",{className:t.registerUntil},p.a.createElement(x.a,{className:t.registerTitle},"Registration Until"),p.a.createElement(x.a,{className:t.registerTextInfo},"17 Mei 2021"))),p.a.createElement(s,{type:"primary",isFullWidth:!0},"Register")))};n.defaultProps={position:""};var z=n,M=a(68),n=a(89),D=a.n(n),R=Object(t.a)(function(e){return{buttonAction:{margin:"0 11px",textTransform:"capitalize",color:e.color.darkSilver,fontWeight:500},buttonActionActive:{background:"linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%);",color:"white"},buttonName:{marginLeft:12}}}),B=function(e){var t=e.data,a=e.onChange,n=R(),e=Object(o.useState)(0),e=Object(M.a)(e,2),i=e[0],r=e[1],t=t.map(function(e){return{name:e,status:!1}});return p.a.createElement("div",{className:n.filter},t.map(function(e,t){return p.a.createElement(s,{variant:i===t?"contained":"outlined",onClick:function(){var e;r(e=t),a(e)},className:h()(n.buttonAction,i===t&&n.buttonActionActive)},i===t&&p.a.createElement(D.a,null),p.a.createElement("span",{className:n.buttonName,style:{marginLeft:i!==t&&0}},e.name))}))},P=a(23),A=Object(t.a)(function(e){var t=e.color,e=e.font;return{imgWave:{backgroundImage:'url("'.concat(P.b,'")'),height:464,width:"100%",position:"relative",bottom:"-5vh",marginTop:200,backgroundSize:"cover",backgroundPosition:"top",backgroundRepeat:"no-repeat"},bottomContent:{color:t.sandyBeach,display:"flex",flexDirection:"column",position:"absolute",alignItems:"center",bottom:"1em",right:0,left:0,fontFamily:e.raleway},titleInformation:{fontWeight:800,fontSize:"1.125rem",textAlign:"center"},copyright:{fontSize:"1rem",textAlign:"center"},contact:{},content:{marginBottom:"0.1em"}}}),L=function(){var e=A(),t=h()(e.contact,e.content),a=h()(e.titleInformation,e.content),n=h()(e.copyright,e.content);return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:e.imgWave,alt:"footer"},p.a.createElement("div",{className:e.bottomContent},p.a.createElement(x.a,{variant:"h6",className:a},"FOR MORE INFORMATION"),p.a.createElement("div",{className:t},p.a.createElement(j.a,null,p.a.createElement("img",{src:P.d,alt:"instagram"})),p.a.createElement(j.a,null,p.a.createElement("img",{src:P.e,alt:"instagram"}))),p.a.createElement(x.a,{className:n},"© 2019 RPLGDC Laboratory, All Right Reserved"))))},G=a(156),H=a(158),J=a(159),U=a(163),_=a(157),q=a(155),n=a(90),K=a.n(n),V=a(26),Y=Object(t.a)(function(e){var t=e.font.raleway;return{navText:{fontFamily:t,fontWeight:800,fontSize:"1.25rem",marginLeft:"8px",color:"white",letterSpacing:2,lineHeight:1.5,whiteSpace:"nowrap"},navbar:{height:103,display:"flex",justifyContent:"center"},toolbar:{display:"flex",justifyContent:"space-between"},content:{display:"flex",alignItems:"center"},button:{fontFamily:t,fontWeight:800,textTransform:"uppercase",padding:"0 16px",height:36},default:{color:"white","&:hover":{backgroundColor:"rgba(255,255,255, 0.1)"}},contained:{marginLeft:12,color:e.color.dustyOrange,display:"block",backgroundColor:"white"},mobileMenu:{color:"white"},menuButton:{marginLeft:6},antiWave:{background:"linear-gradient(68.21deg, #FC6D21 12.88%, #EE3B52 74.92%, #DD2476 98.79%)",position:"static"},dropdownMenu:{position:"absolute",zIndex:1,right:0,top:60},dropdownItem:{textTransform:"uppercase",minHeight:48,padding:"0 16px"}}}),n=function(e){var t=e.className,a=e.color,n=Object(T.a)({isMax:!0,size:959}),i=Object(T.a)({isMax:!0,size:400}),r=Y(),o=h()(t,r.navbar,0===a.length&&r.antiWave),l=h()(r.button,r.contained),c=h()(r.button,r.default),s=h()(r.menuButton,r.default),m=[{name:"home"},{name:"brainspark"},{name:"division"},{name:"product"},{name:"blog"},{name:"status"}],d=p.a.useState(null),e=Object(M.a)(d,2),t=e[0],u=e[1],d=Boolean(t),e=d?"simple-popover":void 0;return p.a.createElement(q.a,{elevation:0,color:a,position:"absolute",className:o},p.a.createElement(G.a,{maxWidth:"lg"},p.a.createElement(_.a,{className:r.toolbar},p.a.createElement("div",{className:r.content},p.a.createElement("img",{src:P.c,alt:"logo rpl-gdc"}),p.a.createElement(x.a,{variant:"h6",className:r.navText},"RPL-GDC")),p.a.createElement("div",{className:r.content},!n&&(null==m?void 0:m.filter(function(e){return"status"!==e.name}).map(function(e){e=e.name;return p.a.createElement(b.a,{key:Object(V.a)(),className:c},e)})),!i&&p.a.createElement(b.a,{className:l,variant:"contained",disableElevation:!0},"status"),n&&p.a.createElement(p.a.Fragment,null,p.a.createElement(j.a,{onClick:function(e){u(e.currentTarget)},className:s,color:"inherit","aria-label":"menu"},p.a.createElement(K.a,{className:r.mobileMenu})),p.a.createElement(U.a,{id:e,open:d,anchorEl:t,onClose:function(){u(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"}},p.a.createElement(H.a,{component:"nav"},null==m?void 0:m.filter(function(e){e=e.name;return i?e:"status"!==e}).map(function(e){e=e.name;return p.a.createElement(J.a,{key:Object(V.a)(),button:!0,className:r.dropdownItem},e)}))))))))};n.defaultProps={className:"",color:""};var $=n,Q=(a(170),a(160),Object(t.a)(function(e){return{containerContent:{marginTop:50,display:"flex",justifyContent:"space-evenly",width:"100%",flexDirection:function(e){return e.isMedium?"column":"row"}},content:{maxWidth:function(e){return e.isMedium?"100%":"70%"},padding:"24px 0",borderRadius:20},contentTitle:{fontFamily:e.font.raleway,fontWeight:700,padding:20,paddingTop:0},avatarImage:{height:"inherit",width:"inherit",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}})),t=function(e){var t=e.children,a=Object(N.b)({isMax:!0,size:900}),e=Object(N.b)({isMax:!0,size:400}),a=Q({isMedium:a,isPhone:e});return p.a.createElement(p.a.Fragment,null,p.a.createElement($,null),p.a.createElement(G.a,{maxWidth:"lg",className:a.containerContent},p.a.createElement(m.a,{elevation:0,className:a.content},p.a.createElement(x.a,{variant:e?"h5":"h4",className:a.contentTitle},"SOLID Rest API for Web Development"),p.a.createElement(O,null),p.a.createElement("div",null,t)),p.a.createElement(z,null)),p.a.createElement(L,null))};t.defaultProps={children:""};var X=t}}]);