(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=(n(16),n(6)),s=n.n(i),u=n(7),l=n(1),m=n(2),p=n(4),h=n(3),d=n(5),f=(n(20),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"flex-itm",onClick:function(){return e.props.click(e.props.item)}},this.props.item)}}]),t}(r.a.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flex"},this.props.menu.map(function(t){return r.a.createElement(f,{key:t,item:t,click:e.props.click})}))}}]),t}(r.a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"flex-itm1",onClick:function(){return e.props.click(e.props.item)}},this.props.item)}}]),t}(r.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flex1"},this.props.menu.map(function(t){return r.a.createElement(b,{key:t,item:t,click:e.props.click})}))}}]),t}(r.a.Component),k=1,j=-1,w=[],y=["<","0",">"],g=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"flex-itm",id:this.props.item,onClick:this.props.clickMove})}}]),t}(r.a.Component),E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={gameover:!1},n.message="GAME OVER!",n.size=0,n.changeBanner=function(e){console.log("WIN:",e),e===k&&(n.message="YOU WIN!"),e===j&&(n.message="YOU LOOSE!"),n.setState({gameover:!0})},n.checkWinner=function(){var e=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/check/".concat(n.props.round,"/").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:e.sent.success&&n.changeBanner(t),w.some(function(e){return 0===e})||(n.changeBanner(0),n.requestMove(0,0));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.requestMove=function(){var e=Object(u.a)(s.a.mark(function e(t,a){var r,c,o,i,u,l,m;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("MOVE:",y[t+1],a),r=n.props,c=r.dimension,o=r.round,u=(a-(i=a%c))/c,e.next=6,fetch("http://localhost:8080/move/".concat(c,"/").concat(o,"/").concat(t,"/").concat(u,"/").concat(i));case 6:return l=e.sent,e.next=9,l.json();case 9:return m=e.sent,e.abrupt("return",m.success);case 11:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n.clickMove=function(e){var t=e.target;n.requestMove(w[t.id]=k,+t.id)&&(t.innerText="X",t.disabled=!0,n.checkWinner(k),n.computerMove(e,0),n.checkWinner(j),console.log(w))},n.computerMove=function(e,t){if(!(t>n.size)){var a=Math.floor(Math.random()*n.size);if(w[a])return n.computerMove(e,t+1);w[a]=j,n.requestMove(j,a);var r=e.target.parentNode.childNodes[a];r.innerText="O",r.disabled=!0}},n.dblClick=function(e){window.location="/"+n.props.dimension},n.createTable=function(e){n.size=e*e;var t=[];w=[];for(var a=0;a<n.size;a++)w[a]=0;for(var c=0;c<n.size;c++)t.push(r.a.createElement(g,{key:c,item:c,clickMove:n.clickMove}));return t},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"field",style:{maxWidth:50*this.props.dimension},id:"gameField",onDoubleClick:this.dblClick},this.createTable(this.props.dimension),r.a.createElement("button",{onClick:this.dblClick},"[",this.props.round,"] RESTART"),r.a.createElement("div",{className:"win",id:"win",hidden:!this.state.gameover},this.message))}}]),t}(r.a.Component);function x(e){return r.a.createElement("h1",{hidden:!0},"Hello, ",e.name,"!")}var M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={rounds:[],dimension:0,round:0},n.menuReSize=function(e){n.setState({dimension:e}),n.setState({round:Math.floor(999*Math.random())+1e3*e})},n.menuRounds=function(e){window.location="/round/"+e},n.getRounds=Object(u.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/results");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n.setState({rounds:a});case 7:case"end":return e.stop()}},e,this)})),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getRounds(!0),this.menuReSize(3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{menu:["3","4","5","6","7","8","9"],click:this.menuReSize}),r.a.createElement(x,{name:"Kitty"}),r.a.createElement(E,{dimension:this.state.dimension,round:this.state.round}),r.a.createElement(O,{menu:this.state.rounds,click:this.menuRounds}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.09ca05ed.chunk.js.map