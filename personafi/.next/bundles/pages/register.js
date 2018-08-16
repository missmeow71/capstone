module.exports=__NEXT_REGISTER_PAGE("/register",function(){return{page:webpackJsonp([3],{692:function(e,t,n){e.exports=n(693)},693:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return y});var r=n(36),a=n.n(r),o=n(0),l=n.n(o),u=n(204),i=n.n(u),c=n(42),s=n(91),f=n(78);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){function t(){var e,n,r,o,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return b(r,(n=r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),Object.defineProperty(d(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{name:"",email:"",password:"",loading:!1}}),Object.defineProperty(d(r),"_handleSubmit",{configurable:!0,enumerable:!0,writable:!0,value:(o=a.a.mark(function e(t){var n,o,l,u,c,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,o=n.name,l=n.email,u=n.password,r.setState({loading:!0}),e.prev=3,e.next=6,Object(f.h)({name:o,email:l,password:u});case 6:c=e.sent,s=c.token,localStorage.setItem("customerToken",s),i.a.push("/myaccount"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),r.setState({loading:!1});case 16:case"end":return e.stop()}},e,this,[[3,12]])}),l=function(){var e=this,t=arguments;return new Promise(function(n,r){var a=o.apply(e,t);function l(e,t){try{var o=a[e](t),l=o.value}catch(e){return void r(e)}o.done?n(l):Promise.resolve(l).then(u,i)}function u(e){l("next",e)}function i(e){l("throw",e)}u()})},function(e){return l.apply(this,arguments)})}),Object.defineProperty(d(r),"_handleChange",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target,n=t.name,a=t.value;return r.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,a))}}),n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.state.loading;return l.a.createElement(s.a,{title:"Register"},l.a.createElement(c.e,{as:"h1"},"Create an account"),l.a.createElement(c.d,{onSubmit:this._handleSubmit,loading:t},l.a.createElement(c.m,null,l.a.createElement(c.d.Field,null,l.a.createElement("label",null,"Name"),l.a.createElement(c.g,{fluid:!0,name:"name",autoFocus:!0,onChange:function(t){return e._handleChange(t)}})),l.a.createElement(c.d.Field,null,l.a.createElement("label",null,"Email"),l.a.createElement(c.g,{fluid:!0,name:"email",type:"email",onChange:function(t){return e._handleChange(t)}})),l.a.createElement(c.d.Field,null,l.a.createElement("label",null,"Password"),l.a.createElement(c.g,{fluid:!0,name:"password",type:"password",onChange:function(t){return e._handleChange(t)}})),l.a.createElement(c.a,{type:"submit",color:"orange"},"Register"))))}}])&&m(n.prototype,r),o&&m(n,o),t}()}},[692]).default}});