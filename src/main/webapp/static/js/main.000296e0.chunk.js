(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=(n(17),n(6)),i=n.n(s),u=n(7),l=n(1),h=n(2),m=n(5),p=n(3),f=n(4),d=(n(21),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("button",{className:"flex-itm",onClick:function(){return e.props.click(e.props.item)}},this.props.item)}}]),t}(c.a.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"flex"},this.props.menu.map(function(t){return c.a.createElement(d,{key:t,item:t,click:e.props.click})}))}}]),t}(c.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("button",{className:"flex-itm1",onClick:function(){return e.props.click(e.props.item)}},this.props.item)}}]),t}(c.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"flex1"},this.props.menu.map(function(t){return c.a.createElement(v,{key:t,item:t,click:e.props.click})}))}}]),t}(c.a.Component),O=n(8),j=N*N,y=[],w=function(e){return 0===e},g=j,E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={cellDisabled:!1},n.request=function(){var e=Object(u.a)(i.a.mark(function e(t,n){var a,c,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=(t-(a=t%N))/N,console.log(t,":",c,",",a),e.next=5,fetch("http://localhost:8080/move/".concat(N,"/").concat(g,"/").concat(n,"/").concat(c,"/").concat(a));case 5:return r=e.sent,e.next=8,r.json();case 8:o=e.sent,console.log(o);case 10:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n.moveClick=function(){var e=Object(u.a)(i.a.mark(function e(t){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.state.cellDisabled,!0,console.log("X>",t.target.id),n.setState({cellDisabled:!0}),t.target.innerText="X",n.move(t,0),y[t.target.id]=1,a=t.target.id,n.request(a,1),setTimeout(Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/check/".concat(g));case 2:return t=e.sent,e.next=5,t.json();case 5:1===e.sent.success&&(console.log("WIN!"),this.props.onSuccess()),this.setState({success:!0});case 8:case"end":return e.stop()}},e,this)})).bind(Object(O.a)(Object(O.a)(n))),3e3),y.some(w)||(n.request(0,0),console.log("GAME OVER",y),t.target.parentNode.style.background="RED");case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"move",value:function(e,t){if(!(t>j)){var n=Math.floor(Math.random()*j),a=e.target.parentNode.childNodes[n];if(a.innerText)return this.move(e,t+1);a.innerText="O",console.log("O<",a.id),y[a.id]=-1,this.request(a.id,-1)}}},{key:"render",value:function(){return c.a.createElement("button",{className:"flex-itm",onClick:this.moveClick,disabled:this.state.cellDisabled,id:this.props.item})}}]),t}(c.a.Component),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={table:[],round:0,success:!1},n.changeToSuccess=function(){console.log("YOU WIN!"),n.setState({success:!n.state.success})},n.dblClick=function(e){window.location="/"},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.reset(!0)}},{key:"reset",value:function(){j=N*N,g=Math.floor(999*Math.random())+1e3*N;for(var e=this.state.table,t=0;t<j;t++)e[t]=t,y[t]=0;this.setState(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"field",style:{maxWidth:this.props.maxWidth},id:"gameField",onDoubleClick:this.dblClick},this.state.table.map(function(t){return c.a.createElement(E,{onSuccess:e.changeToSuccess,key:t,item:t})}),c.a.createElement("button",{onClick:this.dblClick},"[",g,"] RESTART"),c.a.createElement("div",{className:"win",hidden:!this.state.success},"YOU WIN!"))}}]),t}(c.a.Component);function C(e){return c.a.createElement("h1",{hidden:!0},"Hello, ",e.name,"!")}var N=4,S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={rounds:[]},n.menuBarClick=function(e){window.location="/"+e},n.menuBarClick1=function(e){window.location="/round/"+e},n.state={rounds:[]},n.request=Object(u.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8080/results");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),n.setState({rounds:a});case 8:case"end":return e.stop()}},e,this)})),n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.request(!0)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,{menu:["3","4","5","6","7","8","9"],click:this.menuBarClick}),c.a.createElement(C,{name:"Kitty"}),c.a.createElement(x,{maxWidth:50*N,dimension:N}),c.a.createElement(k,{menu:this.state.rounds,click:this.menuBarClick1}))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.000296e0.chunk.js.map