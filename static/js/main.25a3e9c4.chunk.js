(this["webpackJsonpsonic-clock"]=this["webpackJsonpsonic-clock"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(1),s=i.n(n),a=i(7),c=i.n(a),o=(i(12),i(13),i(2)),r=i(3),u=i(5),l=i(4),m=(i(14),i(0)),d=function(t){Object(u.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){var t=this.props,e=t.min,i=t.sec;return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"timer-numbers",children:e>=10?"".concat(e,":"):"0".concat(e,":")}),Object(m.jsx)("span",{className:"timer-numbers",children:i>=10?i:"0".concat(i)})]})}}]),i}(n.Component),b=(i(16),i.p+"static/media/sonic-waiting.7637f4fc.gif"),p=i.p+"static/media/sonic-running.ec074dfa.gif",h=i.p+"static/media/tails-waiting.cd74ec78.gif",j=i.p+"static/media/tails-running.f0489e6b.gif",g=i.p+"static/media/mario-waiting.818fd17b.gif",f=i.p+"static/media/mario-running.b27e97fd.gif",S=i.p+"static/media/green_hill.ecc9dd2e.mp3",v=i.p+"static/media/marble_zone.9d4f3866.mp3",O=i.p+"static/media/Spring_Yard_Zone.75ac0492.mp3",x=i.p+"static/media/Labyrinth_Zone.beb2fb32.mp3",N=i.p+"static/media/Star_Light_Zone.82c7a947.mp3",T=i.p+"static/media/Scrap_Brain_Zone.c6919242.mp3",I=i.p+"static/media/Final_Zone.ad4c9982.mp3",k=i.p+"static/media/Boss_Theme.c2a898e1.mp3",C=i.p+"static/media/Special_Stage.079e0cef.mp3",w=i.p+"static/media/Staff_Roll.df058707.mp3",y=i.p+"static/media/sonic-rings-drop.04fe971c.mp3",M=i.p+"static/media/youre-too-slow.2099b245.mp3",A=i.p+"static/media/sonic-jump.60549342.mp3",_=i.p+"static/media/sonic-ring.ac0c09fc.mp3",Z=i.p+"static/media/sonic-boing.c3f5b32e.mp3",B=i.p+"static/media/sonic-spindash.9d9d3dcb.mp3",F=i.p+"static/media/tails-sound.4f414bc9.mp3",D=i.p+"static/media/mario-sound.71f05786.mp3",R=function(t){Object(u.a)(i,t);var e=Object(l.a)(i);function i(){var t;Object(o.a)(this,i),(t=e.call(this)).checkTimer=function(){t.state.sec>=60&&t.setState((function(t){return{min:t.min+1,sec:0}}))},t.addMin=function(e){var i=e.target.value;t.setState((function(t){return{min:t.min+Number(i)}})),"5"===i&&t.sonicSpin.play(),"1"===i&&t.sonicJump.play()},t.addSec=function(){t.setState((function(t){return{sec:t.sec+30}}),(function(){t.checkTimer()})),t.sonicRing.play()},t.count=function(){var e=t.state,i=e.min,n=e.sec;t.setState((function(t){return{sec:t.sec-1}}),(function(){0===i&&0===n?t.stopTimer():0===n&&t.setState((function(t){return{min:t.min-1,sec:59}}))})),t.checkTimer()},t.resetTimer=function(){t.setState({min:0,sec:0})},t.startTimer=function(){var e=t.state.character,i=setInterval(t.count,1e3);t.setState({intervalId:i}),"sonic"===e&&t.setState({gifImage:p}),"tails"===e&&t.setState({gifImage:j}),"secret"===e&&t.setState({gifImage:f});var n=t.state.song;t.startMusic=new Audio(n),t.startMusic.loop=!0,t.startMusic.play(),t.setState({buttonDisable:!0})},t.pauseTimer=function(){var e=t.state,i=e.intervalId,n=e.character;clearInterval(i),"sonic"===n&&t.setState({gifImage:b}),"tails"===n&&t.setState({gifImage:h}),"secret"===n&&t.setState({gifImage:g}),t.startMusic.pause(),t.sonicBoing.play(),t.setState({buttonDisable:!1})},t.stopTimer=function(){var e=t.state,i=e.intervalId,n=e.character;clearInterval(i),"sonic"===n&&t.setState({gifImage:b}),"tails"===n&&t.setState({gifImage:h}),"secret"===n&&t.setState({gifImage:g}),t.startMusic.pause(),t.startMusic.currentTime=0,t.sonicRingsFalling.play(),t.resetTimer(),t.setState({buttonDisable:!1})},t.muteSong=function(){t.startMusic.muted=!0},t.unmuteSong=function(){t.startMusic.muted=!1},t.changeSong=function(e){var i=e.target.value;t.setState({song:i})},t.changeCharacter=function(){t.setState({character:"tails",gifImage:h}),t.tailsSound.play()},t.secretSoungEG=function(){setTimeout((function(){t.tooSlow.play()}),4e3)},t.secretCharacter=function(){t.setState({character:"secret",gifImage:g}),t.marioSound.play()},t.state={song:S,character:"sonic",gifImage:b,min:0,sec:0,buttonDisable:!1};var n=t.state.song;return t.startMusic=new Audio(n),t.startMusic.muted=!1,t.tooSlow=new Audio(M),t.sonicRingsFalling=new Audio(y),t.sonicJump=new Audio(A),t.sonicRing=new Audio(_),t.sonicBoing=new Audio(Z),t.sonicSpin=new Audio(B),t.tailsSound=new Audio(F),t.marioSound=new Audio(D),t}return Object(r.a)(i,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.state,e=t.gifImage,i=t.min,n=t.sec,s=t.character,a=t.buttonDisable;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"timer-title",children:"Sonic Timer"}),Object(m.jsx)(d,{min:i,sec:n}),Object(m.jsx)("img",{className:"sonic-gif",src:e,alt:s}),Object(m.jsxs)("section",{className:"buttons-panel",children:[Object(m.jsx)("div",{className:"section-select-theme",children:Object(m.jsxs)("select",{className:"select-theme",onChange:this.changeSong,children:[Object(m.jsx)("option",{value:S,children:"Green Hill Zone"}),Object(m.jsx)("option",{value:v,children:"Marble Zone"}),Object(m.jsx)("option",{value:O,children:"Spring Yard Zone"}),Object(m.jsx)("option",{value:x,children:"Labirynth Zone"}),Object(m.jsx)("option",{value:N,children:"Star Light Zone"}),Object(m.jsx)("option",{value:T,children:"Scrap Brain Zone"}),Object(m.jsx)("option",{value:I,children:"Final Zone"}),Object(m.jsx)("option",{value:k,children:"Boss Theme"}),Object(m.jsx)("option",{value:C,children:"Special Stage"}),Object(m.jsx)("option",{value:w,children:"Staff Roll"})]})}),Object(m.jsxs)("div",{className:"section-add-time-buttons",children:[Object(m.jsx)("button",{className:"add-time-buttons",value:5,onClick:this.addMin,children:"+5min"}),Object(m.jsx)("button",{className:"add-time-buttons",value:1,onClick:this.addMin,children:"+1min"}),Object(m.jsx)("button",{className:"add-time-buttons",onClick:this.addSec,children:"+30sec"})]}),Object(m.jsxs)("div",{className:"section-start-stop-buttons",children:[Object(m.jsx)("button",{className:"start-stop-buttons",disabled:a,onClick:this.startTimer,children:"START!"}),Object(m.jsx)("button",{className:"start-stop-buttons",onClick:this.pauseTimer,children:"PAUSE!"}),Object(m.jsx)("button",{className:"start-stop-buttons",onClick:this.stopTimer,children:"STOP!"})]}),Object(m.jsxs)("div",{className:"section-start-stop-buttons",children:[Object(m.jsx)("button",{className:"mute-button",onClick:this.unmuteSong,children:Object(m.jsx)("i",{class:"fas fa-volume-up"})}),Object(m.jsx)("button",{className:"mute-button",onClick:this.muteSong,children:Object(m.jsx)("i",{class:"fas fa-volume-mute"})})]}),Object(m.jsxs)("div",{className:"section-start-stop-buttons",children:[Object(m.jsx)("button",{className:"eg-button",disabled:a,onClick:this.changeCharacter,children:"Easter egg, shhhh"}),Object(m.jsx)("button",{className:"eg-secret-button",disabled:a,onClick:this.secretCharacter,children:"Easter egg, nintendo don't sue me plz"})]})]})]})}}]),i}(n.Component);var L=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(R,{})})},E=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(e){var i=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;i(t),n(t),s(t),a(t),c(t)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),E()}],[[17,1,2]]]);
//# sourceMappingURL=main.25a3e9c4.chunk.js.map