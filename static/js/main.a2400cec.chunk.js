(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),s=n(5),i=n(4),l=n(1),u=n.n(l),d=(n(12),n(0)),m=0,h=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;m=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(t,e){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(m)}},{key:"render",value:function(){var t=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function v(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var p=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:v()})}),3300),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})}))}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),e&&Object(d.jsx)(h,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a2400cec.chunk.js.map