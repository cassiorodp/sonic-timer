(this["webpackJsonpsonic-clock"]=this["webpackJsonpsonic-clock"]||[]).push([[0],[,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){"use strict";e.r(n);var c=e(1),i=e.n(c),s=e(7),a=e.n(s),o=(e(12),e(13),e(2)),r=e(3),u=e(5),m=e(4),l=(e(14),e(0)),d=function(t){Object(u.a)(e,t);var n=Object(m.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){var t=this.props,n=t.min,e=t.sec;return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"timer-numbers",children:n>=10?"".concat(n,":"):"0".concat(n,":")}),Object(l.jsx)("span",{className:"timer-numbers",children:e>=10?e:"0".concat(e)})]})}}]),e}(c.Component),j=(e(16),e.p+"static/media/sonic-waiting.7637f4fc.gif"),b=e.p+"static/media/sonic-running.ec074dfa.gif",p=e.p+"static/media/sonic_music.ecc9dd2e.mp3",f=e.p+"static/media/sonic-rings-drop.04fe971c.mp3",h=e.p+"static/media/sonic-jump.60549342.mp3",O=e.p+"static/media/sonic-ring.ac0c09fc.mp3",v=function(t){Object(u.a)(e,t);var n=Object(m.a)(e);function e(){var t;return Object(o.a)(this,e),(t=n.call(this)).checkTimer=function(){60===t.state.sec&&t.setState((function(t){return{min:t.min+1,sec:0}}))},t.addMin=function(){t.setState((function(t){return{min:t.min+1}})),t.sonicJump.play()},t.addSec=function(){t.setState((function(t){return{sec:t.sec+30}}),(function(){t.checkTimer()})),t.sonicRing.play()},t.count=function(){var n=t.state,e=n.min,c=n.sec;t.setState((function(t){return{sec:t.sec-1}}),(function(){0===e&&0===c?t.stopTimer():0===c&&t.setState((function(t){return{min:t.min-1,sec:59}}))}))},t.resetTimer=function(){t.setState({min:0,sec:0})},t.startTimer=function(){var n=setInterval(t.count,1e3);t.setState({intervalId:n,sonicGif:b}),t.startMusic.loop=!0,t.startMusic.play()},t.stopTimer=function(){var n=t.state.intervalId;clearInterval(n),t.setState({sonicGif:j}),t.startMusic.pause(),t.sonicRingsFalling.play(),t.resetTimer()},t.state={sonicGif:j,min:0,sec:0},t.startMusic=new Audio(p),t.sonicRingsFalling=new Audio(f),t.sonicJump=new Audio(h),t.sonicRing=new Audio(O),t}return Object(r.a)(e,[{key:"render",value:function(){var t=this.state,n=t.sonicGif,e=t.min,c=t.sec;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"timer-title",children:"Sonic Timer"}),Object(l.jsx)(d,{min:e,sec:c}),Object(l.jsx)("img",{className:"sonic-gif",src:n,alt:"sonic"}),Object(l.jsxs)("section",{className:"buttons-panel",children:[Object(l.jsxs)("div",{className:"section-add-time-buttons",children:[Object(l.jsx)("button",{className:"add-time-buttons",onClick:this.addMin,children:"+1min"}),Object(l.jsx)("button",{className:"add-time-buttons",onClick:this.addSec,children:"+30sec"})]}),Object(l.jsxs)("div",{className:"section-start-stop-buttons",children:[Object(l.jsx)("button",{className:"start-stop-buttons",onClick:this.startTimer,children:"START!"}),Object(l.jsx)("button",{className:"start-stop-buttons",onClick:this.stopTimer,children:"STOP!"})]})]})]})}}]),e}(c.Component);var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(v,{})})},x=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,a=n.getTTFB;e(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),x()}],[[17,1,2]]]);
//# sourceMappingURL=main.2daf83af.chunk.js.map