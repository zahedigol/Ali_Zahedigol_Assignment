"use strict";(self.webpackChunkassignment=self.webpackChunkassignment||[]).push([[10],{6598:function(e,n,a){a.d(n,{SR:function(){return p},Vx:function(){return i},Zw:function(){return o},kS:function(){return s},rQ:function(){return c},v_:function(){return d}});var t=a(9669),r=a.n(t);r().defaults.baseURL="https://alizahedigolassignments.herokuapp.com";var o=function(e){var n=new FormData;return n.append("username",e.email),n.append("password",e.password),n.append("client_id","C8Qp0eQnhosJ9Z1DNd7UvQ5M9tiMT4pleqlWkqW3"),n.append("client_secret","b49eoIqNsMEtUhlGjymYabD14AbfCWx99Z0bcsO82AYweB9ZaZJJtZARmDx1f1QN3kjy7IpKYuuZzynUy7NDpeRVZcFPA8XaHR1pAXvVeBNMh9dxvZjqknSrqvwzDkRd"),n.append("grant_type","password"),r()({url:"/oauth/token/",method:"post",data:n,headers:{Accept:"application/json","content-type":"application/json"}})},s=function(e){var n=new Headers;n.append("Authorization","Bearer ".concat(e));var a=new FormData;return a.append("token",e),a.append("client_id","C8Qp0eQnhosJ9Z1DNd7UvQ5M9tiMT4pleqlWkqW3"),a.append("client_secret","b49eoIqNsMEtUhlGjymYabD14AbfCWx99Z0bcsO82AYweB9ZaZJJtZARmDx1f1QN3kjy7IpKYuuZzynUy7NDpeRVZcFPA8XaHR1pAXvVeBNMh9dxvZjqknSrqvwzDkRd"),r()({url:"/oauth/revoke_token/",method:"post",data:a,headers:n})},c=function(e,n){var a=new Headers;a.append("Authorization","Bearer ".concat(n));var t={method:"GET",headers:a,redirect:"follow"};return fetch("".concat("https://alizahedigolassignments.herokuapp.com").concat(e),t)},i=function(e,n,a){var t=new Headers,r={method:"PATCH",headers:t,body:e,redirect:"follow"};return t.append("Authorization","Bearer ".concat(a)),fetch("".concat("https://alizahedigolassignments.herokuapp.com").concat(n),r)},d=function(e,n,a){var t=new Headers,r={method:"POST",headers:t,body:e,redirect:"follow"};return t.append("Authorization","Bearer ".concat(a)),fetch("".concat("https://alizahedigolassignments.herokuapp.com").concat(n),r)},p=function(e,n){var a=new Headers,t={method:"DELETE",headers:a};return a.append("Authorization","Bearer ".concat(n)),fetch("".concat("https://alizahedigolassignments.herokuapp.com").concat(e),t)}},4010:function(e,n,a){a.r(n);var t,r,o,s=a(5861),c=a(9439),i=a(168),d=a(4687),p=a.n(d),l=a(7294),u=a(1230),h=a(5746),m=a(5026),f=a(7681),Z=a(5019),w=a(1577),x=a(8804),k=a(6974),g=a(6598),j=a(5893),y=(0,x.ZP)(u.Z)(t||(t=(0,i.Z)(["\n  background-color: #f6f6f6;\n  width: 100vw;\n  height: 100vh;\n"]))),v=(0,x.ZP)(h.Z)(r||(r=(0,i.Z)(["\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 8px;\n"]))),b=(0,x.ZP)(u.Z)(o||(o=(0,i.Z)(["\n  margin: 12px 0;\n  & .ant-form-item-label {\n    padding: 0;\n  }\n"])));n.default=function(){var e=(0,l.useState)(!1),n=(0,c.Z)(e,2),a=n[0],t=n[1],r=(0,k.s0)(),o=function(){var e=(0,s.Z)(p().mark((function e(n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.next=3,(0,g.Zw)(n).then((function(e){200===e.status&&(localStorage.setItem("token",e.data.access_token),t(!1),r("/",{replace:!0}))})).catch((function(){m.ZP.error("wrong email or password!"),t(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsx)(y,{justify:"center",align:"middle",children:(0,j.jsx)(v,{xs:14,md:10,children:(0,j.jsxs)(f.Z,{onFinish:o,requiredMark:"optional",children:[(0,j.jsx)(u.Z,{justify:"center",children:(0,j.jsx)("h1",{children:"Login"})}),(0,j.jsx)(b,{justify:"center",children:(0,j.jsx)(h.Z,{md:14,children:(0,j.jsx)(f.Z.Item,{name:"email",style:{margin:0},label:"email:",labelCol:{span:24},rules:[{required:!0,message:"please enter your email address"}],children:(0,j.jsx)(Z.Z,{type:"email",placeholder:"example@example.co",allowClear:!0})})})}),(0,j.jsx)(b,{justify:"center",children:(0,j.jsx)(h.Z,{md:14,children:(0,j.jsx)(f.Z.Item,{name:"password",style:{margin:0},label:"password : ",labelCol:{span:24},rules:[{required:!0,message:"please enter your password"}],children:(0,j.jsx)(Z.Z,{type:"password",placeholder:"********",allowClear:!0})})})}),(0,j.jsx)(b,{justify:"center",children:(0,j.jsx)(w.Z,{htmlType:"submit",type:"primary",loading:a,children:"click"})})]})})})}}}]);