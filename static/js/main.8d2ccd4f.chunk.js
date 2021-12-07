(this["webpackJsonpassignment-3"]=this["webpackJsonpassignment-3"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('{"settings":{"Stopwatch":{"startTime":0,"stopTime":5},"Countdown":{"startTime":3,"stopTime":0},"XY":{"startTime":5,"totalRounds":2},"Tabata":{"startTime":5,"restStartTime":2,"totalRounds":1}},"configurations":{"persistence":false,"time":{"min":0,"max":86400},"duration":{"min":0,"max":86400},"rounds":{"min":1,"max":10}},"schema":{"Stopwatch":[{"id":"startTime","label":"Start Time (seconds)","placeholder":"Start the timer at this time","type":"time"},{"id":"stopTime","label":"Stop Time (seconds)","placeholder":"Stop the timer at this time","type":"time"}],"Countdown":[{"id":"startTime","label":"Start Time (seconds)","placeholder":"Start the timer at this time","type":"time"},{"id":"stopTime","label":"Stop Time (seconds)","placeholder":"Stop the timer at this time","type":"time"}],"Tabata":[{"id":"startTime","label":"Work duration (seconds)","placeholder":"Work for that long","type":"time"},{"id":"restStartTime","label":"Rest duration (seconds)","placeholder":"Rest for that long","type":"time"},{"id":"totalRounds","label":"Rounds","placeholder":"Stops after that many rounds","type":"rounds"}],"XY":[{"id":"startTime","label":"Start Time (seconds)","placeholder":"Start the timer at this time","type":"time"},{"id":"totalRounds","label":"Rounds","placeholder":"Stops after that many rounds","type":"rounds"}]}}')},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var i,o,c,r,a,s,l=n(1),u=n.n(l),d=n(25),b=n.n(d),j=(n(36),n(6)),p=n(2),m=n(26),f=function(e){var t="0".concat(e%60).slice(-2),n="".concat(Math.floor(e/60)),i="0".concat(n%60).slice(-2),o="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(o,":").concat(i,":").concat(t)},h="Stopwatch",O="Countdown",x="Tabata",v="XY",g="Work",y="Rest",T=m,k=n(31),C=n(7),N=(n(37),n(8)),S=n.n(N),I=n(0),W=Object(l.memo)((function(e){var t=e.side,n=void 0===t?"front":t,i=e.children,o=[Object(C.a)({},"panel_face_".concat(n),!!n)];return Object(I.jsx)("div",{className:S()(o),children:i})})),w=(n(39),Object(l.memo)((function(){var e,t=Object(l.useContext)(G),n=t.counter,i=t.timerCounting,o=t.statusMessage,c=t.setStatusMessage,r=t.messenger,a=t.isComplete,s=t.setCounter,u=t.startTime,d=t.selectedTimer,b=[(e={},Object(C.a)(e,"".concat(d.toLowerCase()),!a),Object(C.a)(e,"success",a),e)];return Object(l.useEffect)((function(){s(u)}),[s,u]),Object(l.useEffect)((function(){c(r())}),[c,r]),Object(I.jsxs)("div",{className:"display_circular",children:[Object(I.jsxs)("div",{className:"marker",children:[o&&Object(I.jsx)("p",{className:S()("header",b),children:o}),!a&&Object(I.jsx)("p",{className:S()("value neonText",b),children:f(n)}),a&&Object(I.jsx)("p",{className:S()("value neonText",b),children:"Nice!"})]}),!!i&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"display_circular_back-1"}),Object(I.jsx)("div",{className:"display_circular_back-2"})]})]})}))),D=n(18),_=(n(40),["label","placeholder"]),V=Object(l.memo)((function(e){var t=e.label,n=e.placeholder,i=Object(D.a)(e,_),o=Object(l.useState)(i.value),c=Object(p.a)(o,2),r=c[0],a=c[1];Object(l.useEffect)((function(){a(e.value)}),[a,e.value]);return Object(I.jsx)(I.Fragment,{children:t&&Object(I.jsxs)("fieldset",{children:[Object(I.jsx)("label",{className:"settings-label",children:t}),Object(I.jsx)("input",Object(j.a)(Object(j.a)({},i),{},{value:r,placeholder:n,onChange:function(t){a(t.target.value),e.onChange&&e.onChange(t)}}))]})})})),R=(n(41),["buttonTheme"]),B=["id","value","isIconButton","iconName","classifiers","iconVisible","children"],M=Object(l.memo)((function(e){var t,n=e.buttonTheme,i=void 0===n?h:n,o=Object(D.a)(e,R),c=o.id,r=o.value,a=void 0===r?"":r,s=o.isIconButton,l=void 0!==s&&s,u=o.iconName,d=void 0===u?"":u,b=o.classifiers,p=void 0===b?"btn_primary":b,m=o.iconVisible,f=void 0===m||m,O=o.children,x=Object(D.a)(o,B),v=[(t={icon_btn:l},Object(C.a)(t,"icon_btn_".concat(i.toLowerCase()),!0),Object(C.a)(t,"btn",!l),Object(C.a)(t,"btn_primary_".concat(i.toLowerCase()),!0),t)],g=[{show:f,hide:!f}];return Object(I.jsxs)("div",Object(j.a)(Object(j.a)({id:c,value:a,className:S()(v,p)},x),{},{children:[l&&Object(I.jsx)("ion-icon",{value:a,class:S()(g),name:d}),!l&&O]}))})),A=T.configurations,L=function(){var e=Object(l.useContext)(G),t=Object.assign({},e),n=t.timerCounting,i=t.toggleCounting,o=t.toggleSide,c=t.selectedTimer,r=t.isComplete,a=t.setSettings,s=t.resetWorkout,u=t.resetTimer,d=t.getWorkout,b=t.updateWorkout,j=t.currentWorkout,p=t.deleteCurrentWorkout,m=t.completeTimer,f=T.schema[c],h=[{primary:!0,disabled:r}],O=function(){o();var e=document.querySelector("#timer_panel");e&&e.classList.toggle("is-flipped")};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(W,{side:"front",children:[Object(I.jsx)(w,{}),Object(I.jsxs)("div",{className:"btn_bar",children:[n?Object(I.jsx)(M,{id:"pause_btn",value:"pause",classifiers:"primary",isIconButton:!0,onClick:i,iconName:"pause",buttonTheme:c}):Object(I.jsx)(M,{id:"start_btn",value:"start",classifiers:S()(h),isIconButton:!0,onClick:i,iconName:"play",buttonTheme:c}),n?Object(I.jsx)(M,{id:"complete",value:"complete",classifiers:"primary",isIconButton:!0,onClick:m,iconName:"play-forward-outline",buttonTheme:c}):Object(I.jsx)(M,{id:"reset_btn",value:"reset",classifiers:"primary",isIconButton:!0,onClick:function(){u(),s()},iconName:"refresh-outline",buttonTheme:c}),f&&Object(I.jsx)(M,{id:"settings_btn",value:"settings",classifiers:"secondary",isIconButton:!0,onClick:O,iconName:"settings",buttonTheme:c})]})]}),Object(I.jsxs)(W,{side:"back",children:[Object(I.jsx)("h1",{children:"Settings"}),f&&Object(I.jsx)("div",{className:"settings-form",id:"inputs",children:f.map((function(e,n){var i,o;return Object(I.jsx)(V,{label:e.label,type:"number",placeholder:"Between ".concat(null===(i=A[e.type])||void 0===i?void 0:i.min," and ").concat(null===(o=A[e.type])||void 0===o?void 0:o.max),value:t[e.id],id:e.id},n)}))}),Object(I.jsxs)("div",{className:"btn_bar",children:[Object(I.jsx)(M,{id:"back_btn",value:"back",isIconButton:!0,onClick:O,iconName:"arrow-back-outline",buttonTheme:c}),Object(I.jsx)(M,{onClick:function(){var e={};f.forEach((function(t){var n,i=null===(n=document.querySelector("#".concat(t.id)))||void 0===n?void 0:n.value;e[t.id]=parseInt(i)||0})),a(e);var t=d(j);t&&(t.settings=e,b(t)),O()},buttonTheme:c,children:"Save"}),Object(I.jsx)(M,{id:"delete_btn",value:"delete",isIconButton:!0,onClick:function(){p(),O()},iconName:"trash-outline",buttonTheme:c})]})]})]})},E=function(e){var t=Object(l.useContext)(G),n=Object.assign({},t),i=n.selectedTimer,o=e.settings,c=Object(l.useState)(function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return!1}}(i)||o||T.settings[i]);!function(e,t,n){var i=t.setSettings,o=t.exitTimer;Object(l.useEffect)((function(){return i(e),function(){return o()}}),[i,o,e])}(Object(p.a)(c,1)[0],n),function(e){var t=e.timerCounting,n=e.startTimer,i=e.isTimerOver,o=e.pauseTimer,c=e.completeTimer,r=e.nextWorkout,a=e.setTimerCounting,s=e.hasNext,u=Object(l.useRef)(),d=Object(l.useRef)();Object(l.useEffect)((function(){return t&&!i()?u.current=n():i()?d.current=setTimeout(s()?r:c(u.current),1e3):o(u.current),function(){o(u.current),clearTimeout(d.current)}}),[t,n,i,o,c,a,r,s]),u.current}(n)},F=function(e){return E(e),Object(I.jsx)(L,{})},P=function(e){return E(e),Object(I.jsx)(L,{})},q=function(e){return E(e),Object(I.jsx)(L,{})},z=function(e){return E(e),Object(I.jsx)(L,{})},J=u.a.createContext({}),Y=function(e){var t=e.children,n=Object(l.useState)([]),i=Object(p.a)(n,2),o=i[0],c=i[1],r=Object(l.useState)(0),a=Object(p.a)(r,2),s=a[0],u=a[1],d=Object(l.useState)(!1),b=Object(p.a)(d,2),m=b[0],f=b[1],h=function(e){var t=e.id,n=o.filter((function(e){return e.id!==t}));c(n)},g=function(e,t){return C()?null:o[e][t]},y=function(){return g(s,"id")},T=function(e,t,n){switch(t){case O:return Object(I.jsx)(P,{settings:n},e);case v:return Object(I.jsx)(q,{settings:n},e);case x:return Object(I.jsx)(z,{settings:n},e);default:return Object(I.jsx)(F,{settings:n},e)}},C=function(){return 0===o.length},N=function(){return s<o.length},S=function(){return s===o.length},W=function(){u(0)};return Object(I.jsx)(J.Provider,{value:{workouts:o,setWorkouts:c,hasNext:N,isEmpty:C,currentWorkout:s,setCurrentWorkout:u,nextWorkout:function(){N()&&u(s+1)},isWorkoutComplete:m,setWorkoutComplete:f,isLastWorkout:S,resetWorkout:W,calculateTotalWorkout:function(){return C()?0:o.reduce((function(e,t){var n=t.settings,i=n.startTime,o=void 0===i?0:i,c=n.stopTime,r=void 0===c?0:c,a=n.totalRounds,s=void 0===a?1:a,l=n.restStartTime,u=void 0===l?0:l;return e+Math.abs(o-r+u)*s}),0)},isCurrentWorkout:function(e){return s===e},scrollToCurrentWorkout:function(){var e=document.querySelector("#element".concat(s))||null;e&&e.scrollIntoView()},createWorkout:function(e,t,n){var i=o.length;return c([].concat(Object(k.a)(o),[{id:i,title:e,type:t,settings:n,C:T(i,t,n)}])),i},retrieveWorkout:function(e){var t=e.id;return o.find((function(e){return"".concat(e.id)==="".concat(t)}))},updateWorkout:function(e){var t=T(e.id,e.type,e.settings),n=Object(j.a)(Object(j.a)({},e),{},{C:t}),i=o.map((function(t){return t.id===e.id?n:t}));c(i)},deleteWorkout:h,deleteCurrentWorkout:function(){var e=S()?o.length-1:y();h({id:e}),W()},componentizeWorkout:T,getWorkout:function(e){return!C()&&N()?o[e]:null},getWorkoutPosition:function(e){var t=e.id;return o.findIndex((function(e){return"".concat(e.id)==="".concat(t)}))},getWorkoutProperty:g,currentWorkoutId:y},children:t})},H=u.a.createContext({}),X=function(e){var t,n=e.children,i=Object(l.useContext)(J),o=Object.assign({},i),c=o.workouts,r=Object(l.useState)((null===(t=c[0])||void 0===t?void 0:t.type)||h),a=Object(p.a)(r,2),s=a[0],u=a[1],d=Object(l.useState)(0),b=Object(p.a)(d,2),m=b[0],f=b[1],x=Object(l.useState)(0),v=Object(p.a)(x,2),g=v[0],y=v[1],k=Object(l.useState)(0),C=Object(p.a)(k,2),N=C[0],S=C[1],W=Object(l.useState)(0),w=Object(p.a)(W,2),D=w[0],_=w[1],V=Object(l.useCallback)((function(e){var t,n,i=e.startTime;(s===h&&e.startTime>e.stopTime||s===O&&e.startTime<e.stopTime)&&(i=e.startTime,e.startTime=e.stopTime,e.stopTime=i),B()&&(t=s,n=e,localStorage.setItem(t,JSON.stringify(n))),f(e.startTime&&R(e.startTime)?parseInt(e.startTime):0),y(e.stopTime&&R(e.stopTime)?parseInt(e.stopTime):0),S(e.totalRounds&&R(e.totalRounds,"rounds")?parseInt(e.totalRounds):1),_(e.restStartTime&&R(e.restStartTime)?parseInt(e.restStartTime):0)}),[s]),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"time";return e&&!isNaN(e)&&e<=T.configurations[t].max&&e>=T.configurations[t].min},B=function(){return T.configurations.persistence};return Object(I.jsx)(H.Provider,{value:Object(j.a)({selectedTimer:s,setSelectedTimer:u,startTime:m,setStartTime:f,stopTime:g,setStopTime:y,totalRounds:N,setTotalRounds:S,restStartTime:D,setRestStartTime:_,getSettings:function(){return 0===m&&0===g&&0===N&&0===D?null:{startTime:m,stopTime:g,totalRounds:N,restStartTime:D}},setSettings:V,isPersistent:B},o),children:n})},G=u.a.createContext({}),K=function(e){var t=e.children,n=Object(l.useContext)(H),i=Object.assign({},n),o=i.selectedTimer,c=i.startTime,r=i.stopTime,a=i.restStartTime,s=i.totalRounds,u=i.setSettings,d=i.hasNext,b=i.setWorkoutComplete,m=i.nextWorkout,T=Object(l.useState)(""),k=Object(p.a)(T,2),C=k[0],N=k[1],S=Object(l.useState)(!1),W=Object(p.a)(S,2),w=W[0],D=W[1],_=Object(l.useState)(c),V=Object(p.a)(_,2),R=V[0],B=V[1],M=Object(l.useState)(1),A=Object(p.a)(M,2),L=A[0],E=A[1],F=Object(l.useState)(g),P=Object(p.a)(F,2),q=P[0],z=P[1],J=Object(l.useState)(!0),Y=Object(p.a)(J,2),X=Y[0],K=Y[1],Q=Object(l.useState)(!1),U=Object(p.a)(Q,2),Z=U[0],$=U[1],ee=Object(l.useState)(0),te=Object(p.a)(ee,2),ne=te[0],ie=te[1],oe=function(){switch(o){case h:B((function(e){return e+1}));break;case x:B((function(e){return e-1})),0===R&&q===y?(z(g),B(c),E(L+1)):0===R&&q===g&&(z(y),B(a),ie(ne+1));break;default:B((function(e){return e-1})),0===R&&(ce(!1),E((function(e){return e+1})))}},ce=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];B(q===g?c:a),e&&($(!1),D(!1),E(1),ie(0))},re=Object(l.useCallback)((function(){z(g),$(!1),E(1),ie(0)}),[]),ae=function(){D(!w)};return Object(I.jsx)(G.Provider,{value:Object(j.a)({currentRound:L,setCurrentRound:E,mode:q,setMode:z,statusMessage:C,setStatusMessage:N,timerCounting:w,toggleCounting:ae,setTimerCounting:D,counter:R,setCounter:B,isFrontSide:X,toggleSide:function(){X||ce(),K(!X)},isComplete:Z,setToComplete:$,isTimerOver:function(){return c>=r?w&&R<=r&&L===s&&(o!==x||ne===s):w&&R>=r&&L===s},startTimer:function(){return $(!1),setInterval((function(){oe()}),1e3)},pauseTimer:function(e){clearInterval(e)},resetTimer:ce,initializeTimer:function(e){u(e),B(q===g?c:a),o!==x&&(B(q===g?c:a),z(g),$(!1),D(!1),E(1),ie(0))},exitTimer:re,completeTimer:function(e){return clearInterval(e),d()?m():(ae(),b(!0)),B(r),E(s),ie(s),z(g),$(!0),!0},messenger:function(){var e=q===g?Math.abs(c-r):Math.abs(a-r),t=q===g?c:a,n=0!==e?Math.abs(R-t)/e:1;return q!==y||R!==c+1&&R!==c-1?q!==g||R!==c+1&&R!==c-1?Z?"You made it! Again?":w||R===c||R===r?q===y&&ne===s&&e>=5&&n>=.8?"Almost done!":q===y&&e>=5&&n>=.8?"We're about to start again":q===y&&e>=5&&n>=.6?"Take a deep breath":e>=10&&n>=.8?"Your goal is near...":e>=10&&n>=.6?"Keep moving":o===v?"Round ".concat(L," of ").concat(s):[h,O].includes(o)?"Counting to ".concat(f(r)):o===x?"".concat(q," -  Round ").concat(L," of ").concat(s):void 0:"Let's take a breath...":"Let's move that body!":"Breathe..."}},i),children:t})},Q=n(14),U=n(3),Z=(n(42),Object(l.memo)((function(e){var t=e.children;return Object(I.jsx)("div",{className:"container",children:t})}))),$=n(11),ee=n(12),te=ee.a.div(i||(i=Object($.a)(["\n  width: 90%;\n  margin: 2rem;\n  min-width: 35rem;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  margin-bottom: 10rem;\n\n"]))),ne=ee.a.div(o||(o=Object($.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 3rem;\n  box-shadow: 0.8rem 0.8rem 1.4rem var(--bgLight-2), -0.2rem -0.2rem 1.8rem var(--tint);\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  padding: 2rem;\n"]))),ie=ee.a.div(c||(c=Object($.a)(["\n  display: flex;\n  justify-content: center;\n  font-size: 2rem;\n"]))),oe=ee.a.div(r||(r=Object($.a)(["\n  margin: 4rem 0;\n"]))),ce=ee.a.table(a||(a=Object($.a)([""]))),re=function(e){var t=e.title,n=e.component,i=e.propDocs;return Object(I.jsxs)(te,{children:[Object(I.jsx)(ie,{children:t}),Object(I.jsx)(oe,{children:n}),Object(I.jsx)(ne,{children:Object(I.jsx)(ce,{children:Object(I.jsxs)("tbody",{children:[Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"Prop"}),Object(I.jsx)("th",{children:"Description"}),Object(I.jsx)("th",{children:"Type"}),Object(I.jsx)("th",{children:"Default value"})]},1),i.map((function(e,t){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:e.prop}),Object(I.jsx)("td",{children:e.description}),Object(I.jsx)("td",{children:e.type}),Object(I.jsx)("td",{children:Object(I.jsx)("code",{children:e.defaultValue})})]},t)}))]})})})]})},ae=(n(47),Object(l.memo)((function(e){var t=e.tabItems,n=Object(l.useContext)(G),i=n.selectedTimer,o=n.setSelectedTimer,c=n.setTimerCounting,r=t.includes(i)?i:t[0],a=[Object(C.a)({},"".concat(r.toLowerCase()),!0)],s=function(e){var t=e.target.value||r;o(t),c(!1)};return Object(I.jsx)("div",{className:"btn_bar",children:Object(I.jsxs)("div",{className:"tab_control",children:[t.length<=4&&t.map((function(e,t){return Object(I.jsxs)(l.Fragment,{children:[Object(I.jsx)("input",{type:"radio",name:"radio"+(t+1),value:e,id:"tab-"+(t+1),checked:r===e,onChange:s}),Object(I.jsx)("label",{htmlFor:"tab-"+(t+1),className:S()(a,"tab_control_"+(t+1)),children:Object(I.jsx)("p",{children:e})})]},t)})),Object(I.jsx)("div",{className:"tab_control_color"})]})})}))),se=(n(48),Object(l.memo)((function(e){var t=e.id,n=void 0===t?"":t,i=e.children;return Object(I.jsx)("div",{className:"panel",children:Object(I.jsx)("div",{className:"panel_inner",id:n,children:i})})}))),le=ee.a.div(s||(s=Object($.a)(["\n  font-size: 2rem;\n"]))),ue=function(){var e=function(){var e=document.querySelector("#testcard");e&&e.classList.toggle("is-flipped")};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(le,{children:"Documentation"}),Object(I.jsx)(re,{title:"Circular Display ",component:Object(I.jsx)(w,{}),propDocs:[{prop:"timerCounting",description:"Animates the circular display",type:"bool",defaultValue:"Registered in context. Optional. Default: false "},{prop:"counter",description:"Value to be displayed",type:"string",defaultValue:"Registered in context. Optional. Default: 00:00:00"},{prop:"statusMessage",description:"Status message that can be used for rounds/rest",type:"string",defaultValue:"Registered in context. Optional. Default: None"}]}),Object(I.jsx)(re,{title:"Button ",component:Object(I.jsx)(M,{onClick:function(){return console.log("test")},children:"Text Button"}),propDocs:[{prop:"id",description:"Identifier for the button",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Identifier for the action useful to identify the event",type:"string",defaultValue:"Optional. Default: None"},{prop:"isIconButton",description:"Creates an icon button",type:"boolean",defaultValue:"Optional. Default: false"},{prop:"iconName",description:"Name of the icon taken from ion icons. Applicable only when isIconButton is true",type:"string",defaultValue:"Optional. Default: None"},{prop:"iconVisible",description:"Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",type:"bool",defaultValue:"Optional. Default: true"},{prop:"classifiers",description:"CSS classes to append additional styles",type:"string",defaultValue:"Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"},{prop:"onClick",description:"Event handler for clicking on a button",type:"function",defaultValue:"Required. Default: None"}]}),Object(I.jsx)(re,{title:"Button (with Icon configuration)",component:Object(I.jsx)(M,{id:"settings_btn",value:"settings",classifiers:"secondary",isIconButton:!0,onClick:function(){return console.log("icon button")},iconName:"settings"}),propDocs:[{prop:"id",description:"Identifier for the button",type:"string",defaultValue:"Optional. Default: None"},{prop:"value",description:"Identifier for the action useful to identify the event",type:"string",defaultValue:"Optional. Default: None"},{prop:"isIconButton",description:"Creates an icon button",type:"boolean",defaultValue:"Optional. Default: false"},{prop:"iconName",description:"Name of the icon taken from ion icons. Applicable only when isIconButton is true",type:"string",defaultValue:"Optional. Default: None"},{prop:"iconVisible",description:"Sets the visibility of the icon in an Icon Button. Applicable only when isIconButton is true",type:"bool",defaultValue:"Optional. Default: true"},{prop:"classifiers",description:"CSS classes to append additional styles",type:"string",defaultValue:"Optional. Default: 'btn_primary' for text buttons. Possible values for icon buttons: 'primary', 'secondary'"},{prop:"onClick",description:"Event handler for clicking on a button",type:"function",defaultValue:"Required. Default: None"}]}),Object(I.jsx)(re,{title:"Input ",component:Object(I.jsx)(V,{label:"Test Label",value:""}),propDocs:[{prop:"label",description:"Label of the input field",type:"String",defaultValue:"Optional. Default: None"},{prop:"value",description:"Initial value passed to the input",type:"String, Number or Date",defaultValue:"Registered in context. Optional. Default: None"},{prop:"placeholder",description:"Input placeholder text",type:"String",defaultValue:"Optional. Default: None"},{prop:"onChange",description:"Event handler for capturing keyboard inputs",type:"function",defaultValue:"Optional. Default: None"},{prop:"Other",description:"All other HTML input attributes are supported"}]}),Object(I.jsx)(re,{title:"Tabs ",component:Object(I.jsx)(ae,{tabItems:[h,O,v,x]}),propDocs:[{prop:"tabItems",description:"Array of tab labels. Max 4 tabs. If more, the control will not render",type:"Array of strings",defaultValue:"Optional. Default: []"},{prop:"selectedTimer",description:"Selected tab is registered in context",type:"string",defaultValue:"Registered in context. Optional. Default: None"}]}),Object(I.jsx)(re,{title:"Card ",component:Object(I.jsxs)(se,{id:"testcard",children:[Object(I.jsxs)(W,{side:"front",children:["front side",Object(I.jsx)(M,{onClick:e,children:"Flip"})]}),Object(I.jsxs)(W,{side:"back",children:["back side",Object(I.jsx)(M,{onClick:e,children:"Flip Again"})]})]}),propDocs:[{prop:"side",description:"Card container that flips using css. \n            Two Cards (front and back) need to be defined in order for flipping to work",type:"string",defaultValue:"Optional. Default: 'front'. Possible values: 'front' |  'back'"},{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes. \n            An event within a child element of the card could trigger the flipping.\n            The event handler should query the id of Panel container and apply toggle('is-flipped') to\n            the queried element",type:"node",defaultValue:"Optional. Default: None"}]}),Object(I.jsx)(re,{title:"Panel ",component:Object(I.jsx)(se,{children:"Content goes here"}),propDocs:[{prop:"id",description:"Identifier for the panel that will allow flipping the cards",type:"string",defaultValue:"Optional. Default: None"},{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes",type:"node",defaultValue:"Optional. Default: None"}]}),Object(I.jsx)(re,{title:"Container ",component:"Generic Empty Container",propDocs:[{prop:"Children Nodes",description:"Accepts any React and HTML valid nodes",type:"node",defaultValue:"Optional. Default: None"}]})]})},de=(n(49),Object(l.memo)((function(e){var t=e.id,n=void 0===t?"":t,i=e.children;return Object(I.jsx)("div",{className:"dashboard",children:Object(I.jsx)("div",{className:"dashboard_inner",id:n,children:i})})}))),be=function(){var e=Object(l.useContext)(G),t=e.workouts,n=e.selectedTimer,i=e.setSelectedTimer,o=e.currentWorkout,c=e.hasNext,r=e.isEmpty,a=e.calculateTotalWorkout,s=e.getWorkoutProperty,u=e.deleteCurrentWorkout,d=e.deleteWorkout,b=e.isCurrentWorkout,j=e.scrollToCurrentWorkout,p=Object(U.f)();Object(l.useEffect)((function(){c()&&(i(t[o].type),j())}),[o,t,c,i,j]);var m=function(e){var t=parseInt(e.target.attributes.value.value)||null;t&&d({id:t})};return Object(I.jsxs)("div",{className:"horizontal_inline",children:[!r()&&Object(I.jsxs)("div",{className:"vertical_inline",children:[Object(I.jsxs)(de,{children:[Object(I.jsx)("h1",{children:"My Workout"}),Object(I.jsxs)("div",{children:[t.length," set(s) for a total of ",a()," seconds "]}),Object(I.jsx)("div",{className:"scrollable",children:t.map((function(e,t){return Object(I.jsx)(l.Fragment,{children:Object(I.jsxs)("div",{id:"element".concat(t),className:"horizontal_inline",children:[Object(I.jsx)("div",{tabIndex:t,className:b(t)?"".concat(e.type.toLowerCase()," selected"):"",autoFocus:b(t),children:Object(I.jsxs)("div",{className:"list_item",children:[Object(I.jsx)("div",{className:"primary_text",children:s(t,"title")}),Object(I.jsx)("div",{className:"secondary_text",children:s(t,"type")})]})}),Object(I.jsx)(M,{id:"delete_btn",value:s(t,"id"),isIconButton:!0,onClick:e.id===o?u:m,iconName:"trash-outline",buttonTheme:n})]})},t)}))})]}),!r()&&Object(I.jsx)("div",{className:"spacer-6"})]}),Object(I.jsxs)("div",{className:"vertical_inline",children:[Object(I.jsx)(se,{id:"timer_panel",children:r()?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("img",{src:"/assignment-3-DoryAzar/fitness.png",alt:"No Workouts found"}),Object(I.jsx)("p",{className:"conversation",children:"Go ahead and start creating your workout by adding sets"}),Object(I.jsx)("div",{className:"spacer-6"})]}):c()?t[o].C:t[o-1].C}),Object(I.jsx)(M,{onClick:function(){p.push("/add")},buttonTheme:n,children:"Add sets"})]})]})},je=T.configurations,pe=function(){var e=Object(l.useContext)(G),t=Object.assign({},e),n=t.selectedTimer,i=t.workouts,o=t.createWorkout,c=t.resetWorkout,r=T.schema[n],a=T.settings[n],s=Object(U.f)(),u=function(){var e;c();var t={},i=null===(e=document.querySelector("#title"))||void 0===e?void 0:e.value;r.forEach((function(e){var n,i=null===(n=document.querySelector("#".concat(e.id)))||void 0===n?void 0:n.value;t[e.id]=parseInt(i)||0})),o(i,n,t)};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"spacer-10"}),Object(I.jsx)("h1",{children:"What type of workout set timer?"}),Object(I.jsx)("div",{className:"spacer-4"}),Object(I.jsx)(ae,{tabItems:[h,O,v,x]}),Object(I.jsx)("div",{className:"spacer-6"}),Object(I.jsx)("h1",{children:"Settings"}),Object(I.jsx)(se,{children:Object(I.jsxs)(W,{side:"front",children:[Object(I.jsx)("div",{className:"spacer-4"}),r&&Object(I.jsxs)("div",{className:"settings-form",id:"inputs",children:[Object(I.jsx)(V,{label:"Workout set name",type:"text",placeholder:"Name for this workout set",value:"".concat(n," ").concat(i.length),id:"title",maxLength:20},"title"),r.map((function(e,t){var n,i;return Object(I.jsx)(V,{label:e.label,type:"number",placeholder:"Between ".concat(null===(n=je[e.type])||void 0===n?void 0:n.min," and ").concat(null===(i=je[e.type])||void 0===i?void 0:i.max),value:a[e.id],id:e.id},t)}))]})]})}),Object(I.jsxs)("div",{className:"btn_bar",children:[Object(I.jsx)(M,{id:"back_btn",value:"back",isIconButton:!0,onClick:s.goBack,iconName:"arrow-back-outline",buttonTheme:n}),Object(I.jsx)(M,{"data-test":"redirect",onClick:function(){u(),s.push("/")},buttonTheme:n,children:"Add and go"}),Object(I.jsx)("div",{className:"horizontal-spacer-4"}),Object(I.jsx)(M,{onClick:u,buttonTheme:n,children:"Keep adding"})]})]})},me=function(){return Object(I.jsx)(Q.a,{children:Object(I.jsx)(Y,{children:Object(I.jsx)(X,{children:Object(I.jsxs)(K,{children:[Object(I.jsx)("nav",{className:"navigation",children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{children:Object(I.jsx)(Q.b,{to:"/",children:"My Workout"})},1),Object(I.jsx)("li",{children:Object(I.jsx)(Q.b,{to:"/docs",children:"Documentation"})},2)]})}),Object(I.jsx)("br",{}),Object(I.jsx)(Z,{children:Object(I.jsxs)(U.c,{children:[Object(I.jsx)(U.a,{path:"/docs",children:Object(I.jsx)(ue,{})}),Object(I.jsx)(U.a,{path:"/add",children:Object(I.jsx)(pe,{})}),Object(I.jsx)(U.a,{path:"/",children:Object(I.jsx)(be,{})})]})})]})})})})};b.a.render(Object(I.jsx)(u.a.StrictMode,{children:Object(I.jsx)(me,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.8d2ccd4f.chunk.js.map