(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(t,e,n){t.exports=n(33)},25:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(15),c=n.n(r),i=(n(25),n(16)),l=n(5),u=n(6),s=n(8),d=n(7),p=n(9),D=n(2),m=n(18),h=n.n(m),f=n(1),b=function(t){return{type:"ADD_TODO_LIST",payload:t}},O=function(t){return{type:"DELETE_TODO_LIST",payload:t}},v=(n(31),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).handleDelete=function(t){console.log(t),n.props.deleteToDoList(t)},n.handleDone=function(t){console.log(t)},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this,e=this.props.id;return a.a.createElement("li",null,this.props.toDo,a.a.createElement("button",{onClick:function(){return t.handleDone(e)}},"Mark As Done"),a.a.createElement("button",{onClick:function(){return t.handleDelete(e)}},"Delete"))}}]),e}(a.a.Component)),E=Object(D.b)(null,function(t){return Object(f.a)({deleteToDoList:O},t)})(v),L=Object(D.b)(function(t){return{toDoListReducer:t.toDoListReducer}})(function(t){return a.a.createElement("ul",null,t.toDoListReducer.toDoList.map(function(t,e){return a.a.createElement(E,{id:e,key:e,toDo:t})}))}),j=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={toDo:""},n.handleInput=function(t){var e=t.target,o=e.name,a=e.value;n.setState(Object(i.a)({},o,a))},n.handleSubmit=function(t){t.preventDefault(),n.props.addToDoList(n.state.toDo),n.setState({toDo:""})},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),a.a.createElement("h1",null,"To Do List"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("input",{name:"toDo",value:this.state.toDo,onChange:this.handleInput}),a.a.createElement("button",{type:"submit"},"Submit")),a.a.createElement(L,null)))}}]),e}(o.Component),g=Object(D.b)(null,function(t){return Object(f.a)({addToDoList:b},t)})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(19),w={toDoList:[]},T=Object(f.b)({toDoListReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO_LIST":return{toDoList:Object(y.a)(t.toDoList).concat([e.payload])};case"DELETE_TODO_LIST":return{toDoList:t.toDoList.filter(function(t,n){return n!=e.payload})};default:return t}}}),k=Object(f.c)(T);c.a.render(a.a.createElement(D.a,{store:k},a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.db70fa13.chunk.js.map