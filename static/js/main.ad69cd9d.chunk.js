(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,n){e.exports=n(35)},22:function(e,a,n){},35:function(e,a,n){"use strict";n.r(a);var o=n(0),t=n.n(o),i=n(4),s=n.n(i),u=(n(22),n(5)),r=n(6),m=n(10),d=n(7),l=n(9),p=n(1),c=n(8),h=n.n(c),g=h.a.shuffle([{name:"\ud83d\udc4b",audio:"./sounds/hellooooooo.mp3"},{name:"\ud83e\udd26\u200d\u2642\ufe0f",audio:"./sounds/toughlook.mp3"},{name:"\ud83d\udc6a",audio:"./sounds/seamus.mp3"},{name:"\ud83c\udf7a",audio:"./sounds/ohwow.mp3"},{name:"\ud83c\udfc6",audio:"./sounds/mcgalleon.mp3"},{name:"\ud83d\udea8",audio:"./sounds/warning.mp3"},{name:"\ud83d\udcbb",audio:"./sounds/whatagreatwebsite.mp3"},{name:"\ud83d\udc76",audio:"./sounds/fluer4.mp3"},{name:"\ud83e\udd89",audio:"./sounds/protecthedwig.mp3"},{name:"\ud83d\udcb0",audio:"./sounds/ludoliteral.mp3"},{name:"\ud83c\uddeb\ud83c\uddf7",audio:"./sounds/beauxbatons.mp3"},{name:"\ud83c\udf46",audio:"./sounds/vik.mp3"},{name:"\ud83d\udc6c ",audio:"./sounds/mygoodfriendtom.mp3"},{name:"\ud83c\udff0 ",audio:"./sounds/nosaferplace.mp3"},{name:"\ud83d\ude3d",audio:"./sounds/supfiggy.mp3"},{name:"\ud83d\udd2e",audio:"./sounds/deep.mp3"},{name:"\ud83c\udfb6",audio:"./sounds/music.mp3"}]),b=h.a.shuffle([{name:"\ud83d\udcaa",audio:"./sounds/hizdar.mp3"},{name:"\ud83c\udf1a",audio:"./sounds/grayscale.mp3"},{name:"\ud83d\udd14",audio:"./sounds/bells.mp3"},{name:"\u26a0\ufe0f",audio:"./sounds/george.mp3"},{name:"\ud83d\udecc",audio:"./sounds/tired.mp3"},{name:"\ud83d\ude45",audio:"./sounds/nothing.mp3"},{name:"\ud83c\udfad",audio:"./sounds/pentos.mp3"},{name:"\u231b\ufe0f",audio:"./sounds/urgent.mp3"},{name:"\ud83c\udf77",audio:"./sounds/wine.mp3"},{name:"\ud83d\udc09",audio:"./sounds/dragon.mp3"},{name:"\u26d3",audio:"./sounds/pycell.mp3"},{name:"\ud83d\udde1",audio:"./sounds/stabbing.mp3"}]),f=n(3),w=n.n(f),y=function(e){function a(e){var n;return Object(u.a)(this,a),(n=Object(m.a)(this,Object(d.a)(a).call(this,e))).playAudio=n.playAudio.bind(Object(p.a)(Object(p.a)(n))),n}return Object(l.a)(a,e),Object(r.a)(a,[{key:"playAudio",value:function(){new Audio(this.props.audio).play(),w.a.event({category:"Button Click",action:this.props.name})}},{key:"render",value:function(){return t.a.createElement("button",{className:"btn",onClick:this.playAudio},this.props.name)}}]),a}(o.Component),k=n(11);w.a.initialize("UA-127457647-1"),w.a.pageview("/homepage");var E=function(e){function a(e){var n;return Object(u.a)(this,a),(n=Object(m.a)(this,Object(d.a)(a).call(this,e))).changeBoard=n.changeBoard.bind(Object(p.a)(Object(p.a)(n))),n.state={boardType:!1},n}return Object(l.a)(a,e),Object(r.a)(a,[{key:"changeBoard",value:function(){this.setState({boardType:!this.state.boardType})}},{key:"render",value:function(){var e,a,n=this,o=(new Date).getFullYear();return this.state.boardType?(e="\u26a1",a=g):(e="\ud83d\udc51",a=b),t.a.createElement("div",{className:"App"},t.a.createElement("h2",{onClick:this.changeBoard},"BINGE ",t.a.createElement("span",{role:"img","aria-label":"Lightning Bolt"},e),"\ufe0f BOARD"),t.a.createElement("p",null,t.a.createElement("span",{role:"img","aria-label":"Speaker"},"\ud83d\udd08")," Sound on ",t.a.createElement("span",{role:"img","aria-label":"Speaker"},"\ud83d\udd08")),t.a.createElement(k.TransitionGroup,{className:"App-wrapper"},a.map(function(e,a){return t.a.createElement(k.CSSTransition,{timeout:300,classNames:"btn",unmountOnExit:!0,key:e.name+a},t.a.createElement(y,{onButtonClick:n.playAudio,name:e.name,audio:e.audio,key:e.name+a}))})),t.a.createElement("div",{className:"App-footer"},t.a.createElement("p",null,"Source: The Ringer's ",t.a.createElement("a",{href:"https://www.theringer.com/binge-mode",target:"blank"},"Binge Mode")," podcast. Copyright \xa9 ",o,". Enjoy using the Binge Board? ",t.a.createElement("a",{href:"https://buymeacoff.ee/mattjared",target:"_blank",rel:"noopener noreferrer"},"Buy me a coffee!")," P.S. Click the Binge Board headline to toggle between Thrones and Potter.")))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.ad69cd9d.chunk.js.map