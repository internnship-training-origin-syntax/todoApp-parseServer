(function(t){function e(e){for(var o,a,c=e[0],s=e[1],d=e[2],u=0,p=[];u<c.length;u++)a=c[u],i[a]&&p.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-todo/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),i=n.n(o);i.a},1586:function(t,e,n){"use strict";var o=n("a5ca"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("p",{staticClass:"title"},[t._v("Vue.js Todo List")]),o("todo-list")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticStyle:{flex:"1"}},[n("div",{staticClass:"input__div"},[n("div",{staticClass:"input__wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],attrs:{type:"text",placeholder:"Things needs to be done."},domProps:{value:t.newTodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),n("div",{staticClass:"border"})]),n("div",{staticClass:"todo-list"},t._l(t.todos,function(e){return n("div",{key:e.id,staticClass:"list"},[n("label",{staticClass:"material-checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(n){var o=e.completed,i=n.target,r=!!i.checked;if(Array.isArray(o)){var a=null,c=t._i(o,a);i.checked?c<0&&t.$set(e,"completed",o.concat([a])):c>-1&&t.$set(e,"completed",o.slice(0,c).concat(o.slice(c+1)))}else t.$set(e,"completed",r)}}}),n("span")]),e.editing?n("div",{staticClass:"input__div"},[n("div",{staticClass:"input__wrapper"},[n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:e.text,expression:"todo.text"}],attrs:{type:"text"},domProps:{value:e.text},on:{keyup:[function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;t.editTodo(e)},function(n){if(!("button"in n)&&t._k(n.keyCode,"esc",27,n.key,"Escape"))return null;t.cancelEdit(e)}],blur:function(n){t.cancelEdit(e)},input:function(n){n.target.composing||t.$set(e,"text",n.target.value)}}})]),n("div",{staticClass:"border"})]):n("div",{staticClass:"text",class:{completed:e.completed},on:{dblclick:function(n){e.editing=!0,t.editTodoCache=e.text}}},[t._v(t._s(e.text))])])}))]),n("footer",[n("span",[t._v(t._s(t.remaining)+" items left.")])])])},c=[],s={name:"TodoList",data:function(){return{last_id:2,newTodo:"",editTodoCache:"",todos:[{id:1,text:"Learn Vue.js",completed:!1,editing:!1},{id:2,text:"Build a project with vue.js",completed:!1,editing:!1}]}},computed:{remaining:function(){return this.todos.filter(function(t){return!t.completed}).length}},methods:{addTodo:function(){if(""!=this.newTodo.trim()){var t={id:++this.last_id,text:this.newTodo,components:!1,editing:!1};this.todos.push(t),this.newTodo=""}},editTodo:function(t){""==t.text.trim()&&(t.text=this.editTodoCache),t.editing=!1},cancelEdit:function(t){t.text=this.editTodoCache,t.editing=!1}},directives:{focus:{inserted:function(t){t.focus()}}}},d=s,l=(n("1586"),n("2877")),u=Object(l["a"])(d,a,c,!1,null,"2be653a3",null);u.options.__file="TodoList.vue";var p=u.exports,f={name:"app",components:{TodoList:p}},v=f,m=(n("034f"),Object(l["a"])(v,i,r,!1,null,null,null));m.options.__file="App.vue";var h=m.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(h)}}).$mount("#app")},a5ca:function(t,e,n){},c21b:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8cee52ae.js.map