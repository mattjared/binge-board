(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,n){e.exports=n(20)},15:function(e,a,n){},20:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),i=n(9),r=n.n(i),c=(n(15),n(3)),l=n(4),u=n(6),s=n(5),p=n(7),m=[{name:"Hellooooooo",audio:"./sounds/hellooooooo.mp3"},{name:"Tough look for my guy",audio:"./sounds/cardinal.mp3"},{name:"DIDJA PUTYA",audio:"./sounds/cardinal.mp3"}],d=n(1),h=n(2),b=n.n(h),w=function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(u.a)(this,Object(s.a)(a).call(this,e))).playAudio=n.playAudio.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(a,e),Object(l.a)(a,[{key:"playAudio",value:function(){new Audio(this.props.audio).play(),b.a.event({category:"".concat(this.props.name," Click"),action:this.props.name})}},{key:"render",value:function(){return o.a.createElement("button",{className:"button",onClick:this.playAudio},this.props.name)}}]),a}(t.Component);b.a.initialize("UA-127457647-1"),b.a.pageview("/homepage");var f=function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=(new Date).getFullYear();return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,"BINGE ",o.a.createElement("span",{role:"img","aria-label":"Lightning Bolt"},"\u26a1"),"\ufe0f BOARD"),o.a.createElement("div",{className:"App-wrapper"},m.map(function(a,n){return o.a.createElement(w,{onButtonClick:e.playAudio,key:n,name:a.name,audio:a.audio})})),o.a.createElement("div",{className:"App-footer"},o.a.createElement("p",null,"Copyright \xa9 ",a,". Have feedback or want to add a new clip? ",o.a.createElement("a",{href:"https://github.com/mattjared/binge-board/issues/new",target:"_blank",rel:"noopener noreferrer"},"Fill out an issue on Github!"))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.d25d7fcd.chunk.js.map