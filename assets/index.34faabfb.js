import{S as n,P as o,W as t,T as e,M as i,a,b as s,A as r,c as d,B as w,d as c,e as p,f as l}from"./vendor.37082f73.js";const m=new n,g=new o(75,window.innerWidth/window.innerHeight,.1,1e3),u=new t({canvas:document.querySelector("#bg")});u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),g.position.setZ(30),g.position.setX(-3),u.render(m,g);const f=new e(10,3,16,100),y=new i({color:16737095}),x=new a(f,y);m.add(x);const z=new s(16777215);z.position.set(5,5,5);const b=new r(16777215);m.add(z,b),Array(200).fill().forEach((function(){const n=new p(.25,24,24),o=new i({color:16777215}),t=new a(n,o),[e,s,r]=Array(3).fill().map((()=>l.randFloatSpread(100)));t.position.set(e,s,r),m.add(t)}));const h=(new d).load("space.jpg");m.background=h;const j=(new d).load("magical.png"),A=new a(new w(3,3,3),new c({map:j}));m.add(A);const S=(new d).load("moon.jpg"),v=(new d).load("normal.jpg"),P=new a(new p(3,32,32),new i({map:S,normalMap:v}));function R(){const n=document.body.getBoundingClientRect().top;P.rotation.x+=.05,P.rotation.y+=.075,P.rotation.z+=.05,A.rotation.y+=.01,A.rotation.z+=.01,g.position.z=-.01*n,g.position.x=-2e-4*n,g.rotation.y=-2e-4*n}m.add(P),P.position.z=30,P.position.setX(-10),A.position.z=-5,A.position.x=2,document.body.onscroll=R,R(),function n(){requestAnimationFrame(n),x.rotation.x+=.01,x.rotation.y+=.005,x.rotation.z+=.01,P.rotation.x+=.005,u.render(m,g)}();
