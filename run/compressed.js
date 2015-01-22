!function(){function e(e,n,i,a){function l(){var t,n;if(null===P)n="···",t="·";else{var i=h(P,e);n=i.fractionalPart,t=i.integerPart}r.nodeValue=t,s.nodeValue=n}var o="AltitudePanel",r=y("0"),d=u(o+"-integerPart");d.appendChild(r);var s=y("000"),c=u(o+"-fractionalPart");c.appendChild(y(".")),c.appendChild(s);var p=y(e.distanceLabel),f=u(o+"-unit");f.appendChild(p);var m=f.classList,T=u("BottomPanel-label");T.appendChild(y("ALTITUDE"));var v=T.classList,g=t(e,n,i),C=u("BottomPanel");C.appendChild(T),C.appendChild(d),C.appendChild(c),C.appendChild(f),C.appendChild(g.element);var L,b=C.classList,P=null,M=[],D="highlight";return{element:C,reset:g.reset,start:g.start,stop:g.stop,enableTransition:function(){a(b),a(v)},highlight:function(){b.add(D),v.add(D),clearTimeout(L),L=setTimeout(function(){b.remove(D),v.remove(D)},200)},setAltitude:function(e){if("number"==typeof e&&isFinite(e)){M.push(e),M.length>3&&M.shift();var t=0;M.forEach(function(e){t+=e}),t/=M.length,P=t}else P=null,M.splice(0);g.setAltitude(P),l()},setDarkTheme:function(){n(b),n(v),n(m),g.setDarkTheme()},setLightTheme:function(){i(b),i(v),i(m),g.setLightTheme()},setUnit:function(t){e=t,p.nodeValue=e.distanceLabel,l(),g.setUnit(e)}}}function t(e,t,n){function i(t,n){var i=h(n,e);t.setValue(i.integerPart,i.fractionalPart)}function a(){null!==c&&(null===p?p=f=c:(p=Math.min(p,c),f=Math.max(f,c)),i(o,p),i(r,f))}var l="AltitudeStatPanel",o=B("MIN",t,n),r=B("MAX",t,n),d=u(l);d.appendChild(o.element),d.appendChild(r.element);var s=!1,c=null,p=null,f=null;return{element:d,reset:function(){p=f=null,o.reset(),r.reset(),s&&a()},setAltitude:function(e){c=e,s&&a()},setDarkTheme:function(){o.setDarkTheme(),r.setDarkTheme()},setLightTheme:function(){o.setLightTheme(),r.setLightTheme()},setUnit:function(t){e=t,s&&a()},start:function(){s=!0,a()},stop:function(){s=!1}}}function n(e,t,n,i){return L("ALTITUDE","AltitudeTab",e,t,n,i)}function i(e){var t={latitude:0,longitude:0};return e.forEach(function(e){t.latitude+=e.coords.latitude,t.longitude+=e.coords.longitude}),t.latitude/=e.length,t.longitude/=e.length,{coords:t}}function a(e,t,n,i,a,l){function o(){var i,a=t.getTripTime();i=0==a?0:e.get()/(a/1e3),i=n.fix(18*i/5),i=Math.min(999.99,i),d.nodeValue=Math.floor(i),h.nodeValue=Math.floor(i%1*10)}var r="SpeedPanel",d=y("0"),s=u(r+"-integerPart");s.appendChild(d);var h=y("0"),c=u(r+"-fractionalPart");c.appendChild(y(".")),c.appendChild(h);var p=y(n.speedLabel),f=u(r+"-unit");f.appendChild(p);var m=f.classList,T=u("BottomPanel-label");T.appendChild(y("AVERAGE SPEED"));var v=T.classList,g=u("BottomPanel");g.appendChild(T),g.appendChild(s),g.appendChild(c),g.appendChild(f);var C,L=g.classList,b="highlight";return{element:g,reset:o,update:o,enableTransition:function(){l(L),l(v)},highlight:function(){L.add(b),v.add(b),clearTimeout(C),C=setTimeout(function(){L.remove(b),v.remove(b)},200)},setDarkTheme:function(){i(L),i(v),i(m)},setLightTheme:function(){a(L),a(v),a(m)},setUnit:function(e){n=e,p.nodeValue=n.speedLabel,o()}}}function l(e,t,n,i){return G("AVERAGE","SPEED","AverageSpeedTab",e,t,n,i)}function o(e,t,n){var i="ClockPanel",a=y("00"),l=y("00"),o=y("00"),r=u(i+"-second");r.appendChild(y(":")),r.appendChild(o);var d=u(i+"-content BottomPanel-content");d.appendChild(a),d.appendChild(y(":")),d.appendChild(l),d.appendChild(r);var s=u("BottomPanel-label");s.appendChild(y("CLOCK"));var h=s.classList,c=u(i+" BottomPanel");c.appendChild(s),c.appendChild(d);var p,f=c.classList,m="highlight";return{element:c,enableTransition:function(){n(f),n(h)},highlight:function(){f.add(m),h.add(m),clearTimeout(p),p=setTimeout(function(){f.remove(m),h.remove(m)},200)},setDarkTheme:function(){e(f),e(h)},setLightTheme:function(){t(f),t(h)},update:function(){var e=new Date;a.nodeValue=F(e.getHours()),l.nodeValue=F(e.getMinutes()),o.nodeValue=F(e.getSeconds())}}}function r(e,t,n,i){return L("CLOCK","ClockTab",e,t,n,i)}function d(){function e(){var e;if(e=null===u?0:u*Math.PI/180,s.clearRect(0,0,r,r),s.save(),s.translate(d,d),s.rotate(-e),null!==u){var o=.01*r;s.save(),s.lineWidth=o,s.beginPath(),s.moveTo(0,0),s.rotate(-Math.PI/2),s.arc(0,0,d-o,0,e),s.closePath(),s.fillStyle=l,s.fill(),s.lineJoin="round",s.strokeStyle=a,s.stroke(),s.restore()}s.save();for(var h=0;60>h;h++){if(s.beginPath(),h%5||null===u){var o=.01*r;s.lineWidth=o,s.moveTo(0,.98*d),s.lineTo(0,.95*d),s.strokeStyle=i}else s.lineWidth=.03*r,s.moveTo(0,.98*d),s.lineTo(0,.92*d),s.strokeStyle=n;s.stroke(),s.rotate(Math.PI/30)}if(s.restore(),null!==u){var c=.92*-d;s.save(),s.font="bold "+.25*r+"px FreeMono, monospace",s.textAlign="center",s.textBaseline="top",s.fillStyle="#f00",s.fillText("N",0,c),s.fillStyle=t,s.rotate(Math.PI/2),s.fillText("E",0,c),s.rotate(Math.PI/2),s.fillText("S",0,c),s.rotate(Math.PI/2),s.fillText("W",0,c),s.restore()}s.save(),s.rotate(e),s.beginPath(),s.lineJoin="round",s.lineWidth=.05*d,s.moveTo(0,.3*d),s.lineTo(0,.3*-d),s.moveTo(.15*-d,.15*-d),s.lineTo(0,.3*-d),s.lineTo(.15*d,.15*-d),s.strokeStyle=n,s.stroke(),s.restore(),s.restore()}var t,n,i,a,l,o=document.createElement("canvas");o.className="CompassPanel";var r,d,s=o.getContext("2d"),u=null;return{element:o,resize:function(t){r=116*t*devicePixelRatio,d=r/2,o.width=o.height=r,e()},setDarkTheme:function(){a="#999",l="#444",t="#999",n="#fff",i="#999",e()},setHeading:function(t){u=t,e()},setLightTheme:function(){a="#666",l="#bbb",t="#666",n="#000",i="#666",e()}}}function s(e,t){function n(e){return e*Math.PI/180}var i=e.coords,a=t.coords,l=n(i.latitude),o=n(i.longitude),r=n(a.latitude),d=n(a.longitude),s=6371e3,u=r-l,h=d-o,c=Math.sin(u/2),p=Math.sin(h/2),f=c*c+Math.cos(l)*Math.cos(r)*p*p,m=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),T=s*m;return T}function u(e){var t=document.createElement("div");return t.className=e,t}function h(e,t){var n=Math.floor(t.fix(e));n=Math.min(999999,Math.max(-99999,n));var i=String(Math.abs(n)%1e3);return 1==i.length?i="00"+i:2==i.length&&(i="0"+i),integerPart=Math.floor(Math.abs(n)/1e3),0>n&&(integerPart="-"+integerPart),{fractionalPart:i,integerPart:integerPart}}function c(e,t,n){function i(){var e;e=null===g?"·":Math.round(g),r.nodeValue=e}var a="HeadingPanel",l=u(a+"-unit");l.appendChild(y("°"));var o=l.classList,r=y("·"),s=u(a+"-value");s.appendChild(r),s.appendChild(l);var h=u("BottomPanel-label");h.appendChild(y("HEADING"));var c=h.classList,p=d(),f=u("BottomPanel");f.appendChild(h),f.appendChild(s),f.appendChild(p.element);var m,T=f.classList,v="highlight",g=null,C=null,L=[];return{element:f,resize:p.resize,enableTransition:function(){n(T),n(c)},highlight:function(){T.add(v),c.add(v),clearTimeout(m),m=setTimeout(function(){T.remove(v),c.remove(v)},200)},setDarkTheme:function(){e(T),e(c),e(o),p.setDarkTheme()},setHeading:function(e){if("number"==typeof e&&isFinite(e)){null!=C&&(e-C>180?e-=360:-180>e-C&&(e+=360)),C=e,L.push(e),L.length>3&&L.shift();var t=0;L.forEach(function(e){t+=e}),t/=L.length,g=(t%360+360)%360}else g=null,C=null,L.splice(0);p.setHeading(g),i()},setLightTheme:function(){t(T),t(c),t(o),p.setLightTheme()}}}function p(e,t,n,i){return L("HEADING","HeadingTab",e,t,n,i)}function f(){return{key:"imperial",distanceLabel:"MI",speedLabel:"MI/H",fix:function(e){return e/1.609344}}}function m(t){function n(){H.setDarkTheme(),G.setDarkTheme(),W.setDarkTheme(),q.setDarkTheme(),O.setDarkTheme(),z.setDarkTheme(),K.setDarkTheme(),J.setDarkTheme(),Z.setDarkTheme(),U.setDarkTheme(),F.setDarkTheme(),j.setDarkTheme(),Y.setDarkTheme(),i(tt),X.theme="dark",X.save()}function i(e){e.remove(b),e.add(L)}function l(){m(y)}function r(){H.setLightTheme(),G.setLightTheme(),W.setLightTheme(),q.setLightTheme(),O.setLightTheme(),z.setLightTheme(),K.setLightTheme(),J.setLightTheme(),Z.setLightTheme(),U.setLightTheme(),F.setLightTheme(),j.setLightTheme(),Y.setLightTheme(),d(tt),X.theme="light",X.save()}function d(e){e.remove(L),e.add(b)}function s(){m(w)}function h(e){Q.removeChild(Q.firstChild),Q.appendChild(e.element),e.highlight()}function p(e){U.setSpeed(e),S&&W.setSpeed(U.getSpeed())}function m(e){U.setUnit(e),H.setUnit(e),W.setUnit(e),q.setUnit(e),O.setUnit(e),X.unit=e.key,X.save()}function v(){var e=Date.now();P(function(){G.update(),K.update(),q.update(),setTimeout(v,Math.max(0,e+1e3-Date.now()))})}function C(e){S&&(B.add(e),H.update());var t=e.coords;p(t.speed);var n=t.accuracy;Z.setStatus(8>n?"SIGNAL GOOD":16>n?"SIGNAL OK":"SIGNAL WEAK"),nt(t.altitude),it(t.heading),Z.hideError()}var L="darkTheme",b="lightTheme",P=window.requestAnimationFrame;P||(P=window.mozRequestAnimationFrame);var S=!1,B=x(),y=f(),w=g(),U=k(w,i,d,t),F=V(function(){h(G)},function(){h(H)},function(){h(K)},function(){h(W)},function(){h(q)},function(){h(J)},function(){h(O)},function(){h(z)},i,d,t),G=R(i,d,t),H=N(B,w,i,d,t),O=e(w,i,d,t),z=c(i,d,t),K=o(i,d,t),W=T(w,i,d,t),q=a(B,G,w,i,d,t),X=D(),J=E(X,n,r,l,s,i,d,t),_="MainPanel",Q=u(_+"-panel");Q.appendChild(H.element);var Y=M(function(){B.reset(),H.update(),G.reset(),W.reset(),q.reset(),O.reset()},i,d,t),j=I(function(){S=!0,G.start(),B.start(),O.start()},function(){S=!1,G.stop(),O.stop()},i,d,t),Z=A(i,d,t),$=u(_+"-content");$.appendChild(U.element),$.appendChild(Q),$.appendChild(Z.element),$.appendChild(F.element),$.appendChild(Y.element),$.appendChild(j.element);var et=u(_);et.appendChild($);var tt=document.body.classList,nt=O.setAltitude,it=z.setHeading;return"light"==X.theme?r():n(),"imperial"==X.unit?l():s(),navigator.geolocation.watchPosition(C,function(e){var t=e.code;Z.setStatus(t==e.PERMISSION_DENIED?"PERMISSION DENIED":t==e.POSITION_UNAVAILABLE?"POSITION UNAVAILABLE":"TIMEOUT, RETRYING"),p(null),nt(null),it(null),Z.showError()},{enableHighAccuracy:!0,maximumAge:3e4,timeout:3e4}),v(),{element:et,enableTransition:function(){Z.enableTransition(),U.enableTransition(),Y.enableTransition(),j.enableTransition(),F.enableTransition(),H.enableTransition(),G.enableTransition(),W.enableTransition(),q.enableTransition(),O.enableTransition(),z.enableTransition(),K.enableTransition(),J.enableTransition()},resize:function(e,t){var n=320,i=480;if(e>t){var a=n;n=i,i=a}$.style.width=n+"px",$.style.height=i+"px",$.style.top=-i/2+"px",$.style.left=-n/2+"px";var l=e/n;l*i>t&&(l=t/i),et.style.transform="scale("+l+")",z.resize(l)}}}function T(e,t,n,i){function a(e){L=e,l()}function l(){var t=e.fix(18*L/5);t=Math.min(999.99,t),r.nodeValue=Math.floor(t),s.nodeValue=Math.floor(t%1*10)}var o="SpeedPanel",r=y("0"),d=u(o+"-integerPart");d.appendChild(r);var s=y("0"),h=u(o+"-fractionalPart");h.appendChild(y(".")),h.appendChild(s);var c=y(e.speedLabel),p=u(o+"-unit");p.appendChild(c);var f=p.classList,m=u("BottomPanel-label");m.appendChild(y("MAX SPEED"));var T=m.classList,v=u("BottomPanel");v.appendChild(m),v.appendChild(d),v.appendChild(h),v.appendChild(p);var g,C=v.classList,L=0,b="highlight";return{element:v,enableTransition:function(){i(C),i(T)},highlight:function(){C.add(b),T.add(b),clearTimeout(g),g=setTimeout(function(){C.remove(b),T.remove(b)},200)},reset:function(){a(0)},setDarkTheme:function(){t(C),t(T),t(f)},setLightTheme:function(){n(C),n(T),n(f)},setSpeed:function(e){isFinite(e)||(e=0),e>L&&a(e)},setUnit:function(t){e=t,c.nodeValue=e.speedLabel,l()}}}function v(e,t,n,i){return G("MAX","SPEED","MaxSpeedTab",e,t,n,i)}function g(){return{key:"metric",distanceLabel:"KM",speedLabel:"KM/H",fix:function(e){return e}}}function C(e,t){function n(){a.add("active"),clearTimeout(i),i=setTimeout(function(){t(),i=setTimeout(function(){a.remove("active")},150)},100)}var i,a=e.classList,l=!1;e.addEventListener("mousedown",function(e){0===e.button&&(e.preventDefault(),l?l=!1:n())}),e.addEventListener("touchstart",function(e){e.preventDefault(),l=!0,n()})}function L(e,t,n,i,a,l){var o=u("Tab-highlight");o.appendChild(y(e));var r=o.classList,d=u("Button-content");d.appendChild(o),C(d,n);var s=d.classList,h=u(t+" OneLineTab Tab Button");h.appendChild(d);var c,p=h.classList,f=!1,m="selected",T="highlight";return{element:h,deselect:function(){f=!1,s.remove(m),r.remove(m)},enableTransition:function(){l(p),l(r)},highlight:function(){r.add(T),clearTimeout(c),c=setTimeout(function(){r.remove(T)},200)},select:function(){f=!0,s.add(m),r.add(m)},setDarkTheme:function(){i(p),i(s),i(r)},setLightTheme:function(){a(p),a(s),a(r)}}}function b(e,t,n,i){return L("PAGE 1","Page1Tab",e,t,n,i)}function P(e,t,n,i){return L("PAGE 2","Page2Tab",e,t,n,i)}function M(e,t,n,i){var a=u("Button-content");a.appendChild(y("RESET")),C(a,e);var l=a.classList,o=u("ResetButton Button");o.appendChild(a);var r=o.classList;return{element:o,enableTransition:function(){i(r)},setDarkTheme:function(){t(r),t(l)},setLightTheme:function(){n(r),n(l)}}}function D(){var e,t;try{e=localStorage.theme,t=localStorage.unit}catch(n){}var i={theme:e,unit:t,save:function(){try{localStorage.theme=i.theme,localStorage.unit=i.unit}catch(e){}}};return i}function E(e,t,n,i,a,l,o,r){var d="SettingsPanel",s="selected",h=u("Button-content");h.appendChild(y("LIGHT")),C(h,function(){T.remove(s),c.add(s),n()});var c=h.classList,p=u(d+"-lightButton "+d+"-button Button");p.appendChild(h);var f=p.classList,m=u("Button-content");m.appendChild(y("DARK")),C(m,function(){c.remove(s),T.add(s),t()});var T=m.classList,v=u(d+"-darkButton "+d+"-button Button");v.appendChild(m);var g=v.classList,L=u("Button-content");L.appendChild(y("IMPERIAL")),C(L,function(){E.remove(s),b.add(s),i()});var b=L.classList,P=u(d+"-imperialButton "+d+"-button Button");P.appendChild(L);var M=P.classList,D=u("Button-content");D.appendChild(y("METRIC")),C(D,function(){b.remove(s),E.add(s),a()});var E=D.classList,S=u(d+"-metricButton "+d+"-button Button");S.appendChild(D);var k=S.classList;"imperial"==e.unit?b.add(s):E.add(s),"light"==e.theme?c.add(s):T.add(s);var I=u(d+"-fieldLabel units");I.appendChild(y("UNITS:"));var B=u(d+"-fieldLabel theme");B.appendChild(y("THEME:"));var A=u("BottomPanel-label");A.appendChild(y("SETTINGS"));var V=A.classList,x=u("BottomPanel");x.appendChild(A),x.appendChild(B),x.appendChild(p),x.appendChild(v),x.appendChild(I),x.appendChild(P),x.appendChild(S);var N,w=x.classList,R="highlight";return{element:x,enableTransition:function(){r(w),r(V),r(f),r(g),r(M),r(k),r(B.classList),r(I.classList)},highlight:function(){w.add(R),V.add(R),clearTimeout(N),N=setTimeout(function(){w.remove(R),V.remove(R)},200)},setDarkTheme:function(){l(w),l(V),l(f),l(c),l(g),l(T),l(M),l(b),l(k),l(E)},setLightTheme:function(){o(w),o(V),o(f),o(c),o(g),o(T),o(M),o(b),o(k),o(E)}}}function S(e,t,n,i){return L("SETTINGS","SettingsTab",e,t,n,i)}function k(e,t,n,i){function a(){var t,n,i;if(null===P)i="",t="·",n="·";else{var a=e.fix(18*P/5);a=Math.min(999.99,a),t=Math.floor(a),n=Math.floor(a%1*10),i=E?D?"":"↑":D?"↓":""}o.nodeValue=t,d.nodeValue=n,T.nodeValue=i}var l="SpeedLabel",o=y("·"),r=u(l+"-integerPart");r.appendChild(o);var d=y("·"),s=u(l+"-fractionalPart");s.appendChild(y(".")),s.appendChild(d);var h=y(e.speedLabel),c=u(l+"-unit");c.appendChild(h);var p=c.classList,f=u(l+"-label");f.appendChild(y("SPEED"));var m=f.classList,T=y("↕"),v=u(l+"-arrow");v.appendChild(T);var g=u(l);g.appendChild(f),g.appendChild(v),g.appendChild(r),g.appendChild(s),g.appendChild(c);var C,L,b=g.classList,P=null,M=null,D=!1,E=!1,S=.02,k=[];return{element:g,enableTransition:function(){i(b),i(m),i(r.classList),i(s.classList),i(p)},getSpeed:function(){return P},setDarkTheme:function(){t(b),t(m),t(p)},setLightTheme:function(){n(b),n(m),n(p)},setSpeed:function(e){if("number"==typeof e&&isFinite(e)){k.push(e),k.length>3&&k.shift();var t=0;k.forEach(function(e){t+=e}),t/=k.length,null!==M&&(t>M+S?(E=!0,clearTimeout(L),L=setTimeout(function(){E=!1,a()},2500)):M-S>t&&(D=!0,clearTimeout(C),C=setTimeout(function(){D=!1,a()},2500))),M=P,P=t}else P=null,M=null,k.splice(0),D=E=!1,clearTimeout(C),clearTimeout(L);a()},setUnit:function(t){e=t,h.nodeValue=e.speedLabel,a()}}}function I(e,t,n,i,a){var l=!1,o=y("START"),r=u("Button-content");r.appendChild(o),C(r,function(){l?(l=!1,o.nodeValue="START",t()):(l=!0,o.nodeValue="STOP",e())});var d=r.classList,s=u("StartStopButton Button");s.appendChild(r);var h=s.classList;return{element:s,enableTransition:function(){a(h)},setDarkTheme:function(){n(h),n(d)},setLightTheme:function(){i(h),i(d)}}}function B(e,t,n){var i="StatField",a=u(i+"-label");a.appendChild(y(e));var l=a.classList,o=y("·"),r=u(i+"-integerPart");r.appendChild(o);var d=y("·"),s=u(i+"-fractionalPart");s.appendChild(y(".")),s.appendChild(d);var h=u(i+"-value");h.appendChild(r),h.appendChild(s);var c=u(i);return c.appendChild(a),c.appendChild(h),{element:c,reset:function(){o.nodeValue=d.nodeValue="·"},setDarkTheme:function(){t(l)},setLightTheme:function(){n(l)},setValue:function(e,t){o.nodeValue=e,d.nodeValue=t}}}function A(e,t,n){function i(){h.add(f),clearTimeout(s),s=setTimeout(function(){h.remove(f)},200)}var a="StatusPanel",l=y("ACQUIRING"),o=u(a+"-value");o.appendChild(l);var r=o.classList,d=u(a);d.appendChild(y("GPS")),d.appendChild(o);var s,h=d.classList,c=!1,p="error",f="highlight";return{element:d,enableTransition:function(){n(h),n(r)},hideError:function(){c&&(c=!1,r.remove(p),i())},setDarkTheme:function(){e(h),e(r)},setLightTheme:function(){t(h),t(r)},setStatus:function(e){l.nodeValue=e},showError:function(){c||(c=!0,r.add(p),i())}}}function V(e,t,i,a,o,d,s,h,c,f,m){function T(e){y.forEach(function(t){e!=t&&t.deselect()}),e.select()}var g=1,C=w(function(){T(C),t()},c,f,m),L=U(function(){T(L),e()},c,f,m),M=v(function(){T(M),a()},c,f,m),D=l(function(){T(D),o()},c,f,m),E=n(function(){T(E),s()},c,f,m),k=p(function(){T(k),h()},c,f,m),I=r(function(){T(I),i()},c,f,m),B=S(function(){T(B),d()},c,f,m),A=b(function(){1!=g&&(g=1,V.deselect(),N.removeChild(E.element),N.removeChild(k.element),N.removeChild(B.element),N.removeChild(I.element),N.appendChild(C.element),N.appendChild(L.element),N.appendChild(M.element),N.appendChild(D.element)),C.highlight(),L.highlight(),M.highlight(),D.highlight()},c,f,m),V=P(function(){2!=g&&(g=2,A.deselect(),N.removeChild(C.element),N.removeChild(L.element),N.removeChild(M.element),N.removeChild(D.element),N.appendChild(E.element),N.appendChild(k.element),N.appendChild(B.element),N.appendChild(I.element)),E.highlight(),k.highlight(),B.highlight(),I.highlight()},c,f,m),y=[C,L,M,D,E,k,I,B],x="Tabs",N=u(x);return N.appendChild(C.element),N.appendChild(L.element),N.appendChild(M.element),N.appendChild(D.element),N.appendChild(A.element),N.appendChild(V.element),{element:N,enableTransition:function(){y.forEach(function(e){e.enableTransition()}),A.enableTransition(),V.enableTransition()},setDarkTheme:function(){y.forEach(function(e){e.setDarkTheme()}),A.setDarkTheme(),V.setDarkTheme()},setLightTheme:function(){y.forEach(function(e){e.setLightTheme()}),A.setLightTheme(),V.setLightTheme()}}}function y(e){return document.createTextNode(e)}function x(){var e=0,t=[];return{add:function(n){var a;if(t.length&&(a=i(t)),t.push(n),t.length>3&&t.shift(),a){var l=i(t);e+=s(a,l)}},get:function(){return e},reset:function(){t.splice(0),e=0},start:function(){t.splice(0)}}}function N(e,t,n,i,a){function l(){var n=t.fix(e.get());n=Math.min(999999,Math.floor(n));var i=String(n%1e3);1==i.length?i="00"+i:2==i.length&&(i="0"+i),s.nodeValue=i,r.nodeValue=Math.floor(n/1e3)}var o="TripDistancePanel",r=y("0"),d=u(o+"-integerPart");d.appendChild(r);var s=y("000"),h=u(o+"-fractionalPart");h.appendChild(y(".")),h.appendChild(s);var c=y(t.distanceLabel),p=u(o+"-unit");p.appendChild(c);var f=p.classList,m=u("BottomPanel-label");m.appendChild(y("TRIP DISTANCE"));var T=m.classList,v=u("BottomPanel");v.appendChild(m),v.appendChild(d),v.appendChild(h),v.appendChild(p);var g,C=v.classList,L="highlight";return{element:v,update:l,enableTransition:function(){a(C),a(T)},highlight:function(){C.add(L),T.add(L),clearTimeout(g),g=setTimeout(function(){C.remove(L),T.remove(L)},200)},setDarkTheme:function(){n(C),n(T),n(f)},setLightTheme:function(){i(C),i(T),i(f)},setUnit:function(e){t=e,c.nodeValue=t.distanceLabel,l()}}}function w(e,t,n,i){var a=G("TRIP","DISTANCE","TripDistanceTab",e,t,n,i);return a.select(),a}function R(e,t,n){var i="ClockPanel",a=y("00"),l=y("00"),o=y("00"),r=u(i+"-second");r.appendChild(y(":")),r.appendChild(o);var d=u("BottomPanel-label");d.appendChild(y("TRIP TIME"));var s=d.classList,h=u(i+"-content");h.appendChild(a),h.appendChild(y(":")),h.appendChild(l),h.appendChild(r);var c=u(i+" BottomPanel");c.appendChild(d),c.appendChild(h);var p,f=c.classList,m=0,T=null,v=359999e3,g="highlight";return{element:c,enableTransition:function(){n(f),n(s)},getTripTime:function(){return m},highlight:function(){f.add(g),s.add(g),clearTimeout(p),p=setTimeout(function(){f.remove(g),s.remove(g)},200)},reset:function(){m=0,null!==T&&(T=Date.now())},setDarkTheme:function(){e(f),e(s)},setLightTheme:function(){t(f),t(s)},start:function(){T=Date.now()},stop:function(){m+=Date.now()-T,m=Math.min(m,v),T=null},update:function(){if(null!==T){var e=Date.now();m+=e-T,T=e}m=Math.min(m,v);var t=m/1e3;o.nodeValue=F(Math.floor(t%60));var n=t/60;l.nodeValue=F(Math.floor(n%60));var i=n/60;a.nodeValue=F(Math.floor(i))}}}function U(e,t,n,i){return G("TRIP","TIME","TripTimeTab",e,t,n,i)}function F(e){return e=String(e),1==e.length&&(e="0"+e),e}function G(e,t,n,i,a,l,o){var r="TwoLineTab "+n,d=u(r+"-content Tab-content");d.appendChild(y(e)),d.appendChild(document.createElement("br")),d.appendChild(y(t));var s=u("Tab-highlight");s.appendChild(u(r+"-aligner Tab-aligner")),s.appendChild(d);var h=s.classList,c=u("Button-content");c.appendChild(s),C(c,i);var p=c.classList,f=u(r+" Tab Button");f.appendChild(c);var m,T=f.classList,v=!1,g="selected",L="highlight";return{element:f,deselect:function(){v=!1,p.remove(g),h.remove(g)},enableTransition:function(){o(T),o(h)},highlight:function(){h.add(L),clearTimeout(m),m=setTimeout(function(){h.remove(L)},200)},select:function(){v=!0,p.add(g),h.add(g)},setDarkTheme:function(){a(T),a(p),a(h)},setLightTheme:function(){l(T),l(p),l(h)}}}!function(){function e(e){e.add("enableTransition")}function t(){n.resize(innerWidth,innerHeight)}!function(){var e=document.createElement("style");e.innerHTML='@font-face {font-family: FreeMono;src: url(fonts/FreeMono.ttf);src: local("FreeMono"), url(fonts/FreeMono.ttf);font-weight: normal;}@font-face {font-family: FreeMono;src: url(fonts/FreeMonoBold.ttf);src: local("FreeMono Bold"), url(fonts/FreeMonoBold.ttf);font-weight: bold;}',document.head.appendChild(e)}();var n=m(e),i=document.body;i.appendChild(n.element),addEventListener("resize",t),t(),setTimeout(function(){e(i.classList),n.enableTransition()},200)}()}();