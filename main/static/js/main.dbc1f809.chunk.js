(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(5),o=n.n(i),s=(n(18),n.p,n(19),n(2)),r=(n(21),n(22),n(9)),l=n(10),j=n(6),d=n(12),u=n(11),h=n(4),b=[],O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={value:"coconut"},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){m(e.target.value),this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return Object(s.jsx)("form",{onSubmit:this.handleSubmit,children:Object(s.jsxs)("label",{children:["\u041a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u0430\u0436 \u043f\u043e :",Object(s.jsxs)("select",{value:this.state.value,onChange:this.handleChange,id:"select",children:[Object(s.jsx)("option",{value:"months",children:"\u043c\u0435\u0441\u044f\u0446\u0430\u043c"}),Object(s.jsx)("option",{value:"days",children:"\u0434\u043d\u044f\u043c"}),Object(s.jsx)("option",{value:"weeks",children:"\u043d\u0435\u0434\u0435\u043b\u044f\u043c"})]})]})})}}]),n}(c.a.Component),x=[{name:"\u043c\u0435\u0441\u044f\u0446",data:[400,358,418,425],color:"#D97706"}],m=function(e){if("days"===e){b=[];var t=fetch("http://127.0.0.1:8000/main/getData/",{method:"GET"}).then((function(e){console.log(e.text())}));console.log(t),t=parseInt(t);for(var n=0;n<t;n++)b.push(n);f=b.map((function(e){return e*e})),x[0].data=f,console.log(f,t),o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},f=b.map((function(e){return e*e}));x[0].data=f;var v=function(e){return Object(s.jsxs)(h.a,{pannable:!0,zoomable:!0,style:{height:350},children:[Object(s.jsx)(h.g,{text:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u043a\u0430"}),Object(s.jsx)(h.d,{position:"top",orientation:"horizontal"}),Object(s.jsx)(h.h,{children:Object(s.jsx)(h.i,{title:{text:"\u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u044b"},min:0,max:500})}),Object(s.jsx)(h.b,{children:Object(s.jsx)(h.c,{categories:b})}),Object(s.jsx)(h.e,{children:x.map((function(e,t){return Object(s.jsx)(h.f,{type:"line",tooltip:{visible:!0},data:e.data,name:e.name},t)}))})]})};var p=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"section",children:[Object(s.jsx)("div",{className:"react-form",children:Object(s.jsx)(O,{})}),Object(s.jsx)(v,{})]})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),g()}},[[25,1,2]]]);
//# sourceMappingURL=main.dbc1f809.chunk.js.map