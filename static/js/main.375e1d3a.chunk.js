(this["webpackJsonpbasic-react"]=this["webpackJsonpbasic-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),r=a.n(i),l=(a(13),a(1)),o=a(2),s=a(4),u=a(3),m=a(5);a(14);var h=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Halo Everybodies"),c.a.createElement("h3",null,"How are you ?"))},d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeLoadingState=function(){a.setState({isLoading:!a.state.isLoading})},a.getElementName=function(e,t){console.log("[".concat(e,"] ").concat(t)),a.setState({classMateName:t})},a.state={isLoading:!0,classMate:["Danu","Iqbal","Zakin","Latif","Ega","Iqbal","Baim","Bagus","Iman","Iqbal","Pak Sofyan","Dian"],classMateName:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.isLoading?c.a.createElement("button",{onClick:this.changeLoadingState},"Here is My Classmates"):c.a.createElement("div",{id:"fragment"},c.a.createElement("button",{onClick:this.changeLoadingState},this.state.isLoading?"Ini Beberapa  Classmate":"Close"),c.a.createElement("div",null,c.a.createElement("ul",null,this.state.classMate&&this.state.classMate.map((function(t,a){return c.a.createElement("li",{key:a,onClick:function(){return e.getElementName(a,t)}},t)})))))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.task;return c.a.createElement("button",{onClick:a}," ",t," ")}}]),t}(n.Component),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).incrementCount=function(){e.setState({count:e.state.count+1})},e.decrementCount=function(){e.setState({count:e.state.count-1})},e.state={count:0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.count;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(h,null),c.a.createElement("h3",null,"My name is ","Taufik Hidayat"),c.a.createElement("h3",null,"I am ",5," years old"),c.a.createElement("div",null,c.a.createElement("h3",null,"My Impact byte instructors are ","Auzan"," & ","Danu")),c.a.createElement(d,null)),c.a.createElement("div",null,c.a.createElement("h2",null,"Count:",e),c.a.createElement(b,{title:"+",task:this.incrementCount}),c.a.createElement(b,{title:"-",task:this.decrementCount})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.375e1d3a.chunk.js.map