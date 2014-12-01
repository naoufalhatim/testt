!function(){function e(e,n,t){function a(){var a,i=n.getTripTime();a=0==i?0:e.get()/(i/1e3),a=t.fix(18*a/5),a=Math.min(999.99,a),l.nodeValue=Math.floor(a),r.nodeValue=Math.floor(a%1*10)}var i="SpeedPanel",l=L("0"),o=d(i+"-integerPart");o.appendChild(l);var r=L("0"),c=d(i+"-fractionalPart");c.appendChild(L(".")),c.appendChild(r);var u=L(t.speedLabel),p=d(i+"-unit");p.appendChild(u);var s=d("BottomPanel-label");s.appendChild(L("AVERAGE SPEED"));var h=s.classList,f=d("BottomPanel");f.appendChild(s),f.appendChild(o),f.appendChild(c),f.appendChild(p);var m,v=f.classList,C="highlight";return{element:f,reset:a,update:a,highlight:function(){clearTimeout(m),v.add(C),h.add(C),m=setTimeout(function(){v.remove(C),h.remove(C)},200)},setUnit:function(e){t=e,u.nodeValue=t.speedLabel,a()}}}function n(e){var n="AverageSpeedTab",t=d(n+"-content Tab-content");t.appendChild(L("AVERAGE")),t.appendChild(document.createElement("br")),t.appendChild(L("SPEED"));var a=d(n+" Tab Button");a.appendChild(d(n+"-aligner Tab-aligner")),a.appendChild(t),p(a,function(){e(),i.add(l)});var i=a.classList,l="selected";return{element:a,deselect:function(){i.remove(l)}}}function t(){var e="ClockPanel",n=L("00"),t=L("00"),a=L("00"),i=d(e+"-second");i.appendChild(L(":")),i.appendChild(a);var l=d(e+"-content BottomPanel-content");l.appendChild(n),l.appendChild(L(":")),l.appendChild(t),l.appendChild(i);var o=d("BottomPanel-label");o.appendChild(L("CLOCK"));var r=o.classList,c=d(e+" BottomPanel");c.appendChild(o),c.appendChild(l);var u,p=c.classList,s="highlight";return{element:c,highlight:function(){clearTimeout(u),p.add(s),r.add(s),u=setTimeout(function(){p.remove(s),r.remove(s)},200)},update:function(){var e=new Date;n.nodeValue=I(e.getHours()),t.nodeValue=I(e.getMinutes()),a.nodeValue=I(e.getSeconds())}}}function a(e){var n=d("Tab ClockTab Button");n.appendChild(L("CLOCK")),p(n,function(){e(),t.add(a)});var t=n.classList,a="selected";return{element:n,deselect:function(){t.remove(a)}}}function i(e,n){function t(e){return e*Math.PI/180}var a=e.coords,i=n.coords,d=t(a.latitude),l=t(a.longitude),o=t(i.latitude),r=t(i.longitude),c=6371e3,u=o-d,p=r-l,s=Math.sin(u/2),h=Math.sin(p/2),f=s*s+Math.cos(d)*Math.cos(o)*h*h,m=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),v=c*m;return v}function d(e){var n=document.createElement("div");return n.className=e,n}function l(){return{key:"imperial",distanceLabel:"M",speedLabel:"M/H",fix:function(e){return e}}}function o(){function n(e){O.removeChild(O.firstChild),O.appendChild(e.element),e.highlight()}function a(e){B.setSpeed(e),L&&N.setSpeed(e)}function i(e){B.setUnit(e),D.setUnit(e),N.setUnit(e),R.setUnit(e),y.unit=e.key,y.save()}function o(){var e=Date.now();p(function(){V.update(),w.update(),R.update(),setTimeout(o,Math.max(0,e+1e3-Date.now()))})}function c(e){L&&(S.add(e),D.update());var n=e.coords;a(n.speed);var t=n.accuracy;k.setStatus(6>t?"SIGNAL GOOD":12>t?"SIGNAL OK":"SIGNAL WEAK")}var p=window.requestAnimationFrame,m=window.cancelAnimationFrame;p||(p=window.mozRequestAnimationFrame,m=window.mozCancelAnimationFrame);var L=!1,S=b(),E=l(),I=u(),B=v(I),A=g(function(){n(V)},function(){n(D)},function(){n(w)},function(){n(N)},function(){n(R)},function(){n(x)}),V=P(),D=M(S,I),w=t(),N=r(I),R=e(S,V,I),y=h(),x=f(y,function(){i(E)},function(){i(I)});i("imperial"==y.unit?E:I);var F="MainPanel",O=d(F+"-panel");O.appendChild(D.element);var U=s(function(){S.reset(),D.update(),V.reset(),N.reset(),R.reset()}),G=C(function(){L=!0,V.start(),S.start()},function(){L=!1,V.stop()}),k=T(),q=d(F+"-content");q.appendChild(B.element),q.appendChild(O),q.appendChild(k.element),q.appendChild(A.element),q.appendChild(U),q.appendChild(G.element);var H=d(F);return H.appendChild(q),navigator.geolocation.watchPosition(c,function(e){var n=e.code;k.setStatus(n==e.PERMISSION_DENIED?"PERMISSION DENIED":n==e.POSITION_UNAVAILABLE?"POSITION UNAVAILABLE":"TIMEOUT, RETRYING"),a(0)},{enableHighAccuracy:!0,maximumAge:3e4,timeout:3e4}),o(),navigator.requestWakeLock&&navigator.requestWakeLock("screen"),{element:H,resize:function(e,n){var t=320,a=480;if(e>n){var i=t;t=a,a=i}q.style.width=t+"px",q.style.height=a+"px",q.style.top=-a/2+"px",q.style.left=-t/2+"px";var d=e/t;d*a>n&&(d=n/a),H.style.transform="scale("+d+")"}}}function r(e){function n(e){v=e,t()}function t(){var n=e.fix(18*v/5);n=Math.min(999.99,n),i.nodeValue=Math.floor(n),o.nodeValue=Math.floor(n%1*10)}var a="SpeedPanel",i=L("0"),l=d(a+"-integerPart");l.appendChild(i);var o=L("0"),r=d(a+"-fractionalPart");r.appendChild(L(".")),r.appendChild(o);var c=L(e.speedLabel),u=d(a+"-unit");u.appendChild(c);var p=d("BottomPanel-label");p.appendChild(L("MAX SPEED"));var s=p.classList,h=d("BottomPanel");h.appendChild(p),h.appendChild(l),h.appendChild(r),h.appendChild(u);var f,m=h.classList,v=0,C="highlight";return{element:h,highlight:function(){clearTimeout(f),m.add(C),s.add(C),f=setTimeout(function(){m.remove(C),s.remove(C)},200)},reset:function(){n(0)},setSpeed:function(e){isFinite(e)||(e=0),e>v&&n(e)},setUnit:function(n){e=n,c.nodeValue=e.speedLabel,t()}}}function c(e){var n="MaxSpeedTab",t=d(n+"-content Tab-content");t.appendChild(L("MAX")),t.appendChild(document.createElement("br")),t.appendChild(L("SPEED"));var a=d(n+" Tab Button");a.appendChild(d(n+"-aligner Tab-aligner")),a.appendChild(t),p(a,function(){e(),i.add(l)});var i=a.classList,l="selected";return{element:a,deselect:function(){i.remove(l)}}}function u(){return{key:"metric",distanceLabel:"KM",speedLabel:"KM/H",fix:function(e){return 1.609344*e}}}function p(e,n){function t(){i.add("active"),clearTimeout(a),a=setTimeout(function(){n(),a=setTimeout(function(){i.remove("active")},150)},100)}var a,i=e.classList,d=!1;e.addEventListener("mousedown",function(e){0===e.button&&(e.preventDefault(),d?d=!1:t())}),e.addEventListener("touchstart",function(e){e.preventDefault(),d=!0,t()})}function s(e){var n=d("ResetButton Button");return n.appendChild(L("RESET")),p(n,e),n}function h(){var e;try{e=localStorage.unit}catch(n){}var t={unit:e,save:function(){try{localStorage.unit=t.unit}catch(e){}}};return t}function f(e,n,t){var a="SettingsPanel",i="selected",l=d(a+"-imperialButton "+a+"-button Button");l.appendChild(L("IMPERIAL")),p(l,function(){o.classList.remove(i),l.classList.add(i),n()});var o=d(a+"-metricButton "+a+"-button Button");o.appendChild(L("METRIC")),p(o,function(){l.classList.remove(i),o.classList.add(i),t()}),"imperial"==e.unit?l.classList.add(i):o.classList.add(i);var r=d(a+"-fieldLabel");r.appendChild(L("UNITS:"));var c=d("BottomPanel-label");c.appendChild(L("SETTINGS"));var u=c.classList,s=d("BottomPanel");s.appendChild(c),s.appendChild(r),s.appendChild(l),s.appendChild(o);var h,f=s.classList,m="highlight";return{element:s,highlight:function(){clearTimeout(h),f.add(m),u.add(m),h=setTimeout(function(){f.remove(m),u.remove(m)},200)}}}function m(e){var n=d("Tab SettingsTab Button");n.appendChild(L("SETTINGS")),p(n,function(){e(),t.add(a)});var t=n.classList,a="selected";return{element:n,deselect:function(){t.remove(a)}}}function v(e){function n(){var n=e.fix(18*v/5);n=Math.min(999.99,n),a.nodeValue=Math.floor(n),l.nodeValue=Math.floor(n%1*10);var t="";t=g?T?"":"↑":T?"↓":"",p.nodeValue=t}var t="SpeedLabel",a=L("0"),i=d(t+"-integerPart");i.appendChild(a);var l=L("0"),o=d(t+"-fractionalPart");o.appendChild(L(".")),o.appendChild(l);var r=L(e.speedLabel),c=d(t+"-unit");c.appendChild(r);var u=d(t+"-label");u.appendChild(L("SPEED"));var p=L("↕"),s=d(t+"-arrow");s.appendChild(p);var h=d(t);h.appendChild(u),h.appendChild(s),h.appendChild(i),h.appendChild(o),h.appendChild(c);var f,m,v=0,C=0,T=0,g=0,b=.02;return{element:h,setSpeed:function(e){isFinite(e)||(e=0),e>C+b?(g=!0,clearTimeout(m),m=setTimeout(function(){g=!1},3e3)):C-b>e&&(T=!0,clearTimeout(f),f=setTimeout(function(){T=!1},3e3)),C=v,v=e,n()},setUnit:function(t){e=t,r.nodeValue=e.speedLabel,n()}}}function C(e,n){var t=!1,a=L("START"),i=d("StartStopButton Button");return i.appendChild(a),p(i,function(){t?(t=!1,a.nodeValue="START",n()):(t=!0,a.nodeValue="STOP",e())}),{element:i}}function T(){var e=L("ACQUIRING"),n=d("StatusPanel");n.appendChild(L("GPS: ")),n.appendChild(e);var t,a=n.classList,i="highlight";return{element:n,setStatus:function(n){n!=e.nodeValue&&(e.nodeValue=n,clearTimeout(t),a.add(i),t=setTimeout(function(){a.remove(i)},200))}}}function g(e,t,i,l,o,r){var u=S(function(){p.deselect(),s.deselect(),h.deselect(),f.deselect(),v.deselect(),t()}),p=E(function(){u.deselect(),s.deselect(),h.deselect(),f.deselect(),v.deselect(),e()}),s=a(function(){u.deselect(),p.deselect(),h.deselect(),f.deselect(),v.deselect(),i()}),h=c(function(){u.deselect(),p.deselect(),s.deselect(),f.deselect(),v.deselect(),l()}),f=n(function(){u.deselect(),p.deselect(),s.deselect(),h.deselect(),v.deselect(),o()}),v=m(function(){u.deselect(),p.deselect(),s.deselect(),h.deselect(),f.deselect(),r()}),C="Tabs",T=d(C);return T.appendChild(u.element),T.appendChild(p.element),T.appendChild(s.element),T.appendChild(h.element),T.appendChild(f.element),T.appendChild(v.element),{element:T}}function L(e){return document.createTextNode(e)}function b(){var e=null,n=0;return{add:function(t){e&&(n+=i(e,t)),e=t},get:function(){return n},reset:function(){e=null,n=0},start:function(){e=null}}}function M(e,n){function t(){var t=n.fix(e.get());t=Math.min(999999,Math.floor(t));var a=String(t%1e3);1==a.length?a="00"+a:2==a.length&&(a="0"+a),o.nodeValue=a,i.nodeValue=Math.floor(t/1e3)}var a="TripDistancePanel",i=L("0"),l=d(a+"-integerPart");l.appendChild(i);var o=L("000"),r=d(a+"-fractionalPart");r.appendChild(L(".")),r.appendChild(o);var c=L(n.distanceLabel),u=d(a+"-unit");u.appendChild(c);var p=d("BottomPanel-label");p.appendChild(L("TRIP DISTANCE"));var s=p.classList,h=d("BottomPanel");h.appendChild(p),h.appendChild(l),h.appendChild(r),h.appendChild(u);var f,m=h.classList,v="highlight";return{element:h,update:t,highlight:function(){clearTimeout(f),m.add(v),s.add(v),f=setTimeout(function(){m.remove(v),s.remove(v)},200)},setUnit:function(e){n=e,c.nodeValue=n.distanceLabel,t()}}}function S(e){var n="TripDistanceTab",t=d(n+"-content Tab-content");t.appendChild(L("TRIP")),t.appendChild(document.createElement("br")),t.appendChild(L("DISTANCE"));var a=d(n+" Tab Button");a.appendChild(d(n+"-aligner Tab-aligner")),a.appendChild(t),p(a,function(){e(),l.add(i)});var i="selected",l=a.classList;return l.add(i),{element:a,deselect:function(){l.remove(i)}}}function P(){var e="ClockPanel",n=L("00"),t=L("00"),a=L("00"),i=d(e+"-second");i.appendChild(L(":")),i.appendChild(a);var l=d("BottomPanel-label");l.appendChild(L("TRIP TIME"));var o=l.classList,r=d(e+"-content");r.appendChild(n),r.appendChild(L(":")),r.appendChild(t),r.appendChild(i);var c=d(e+" BottomPanel");c.appendChild(l),c.appendChild(r);var u,p=c.classList,s=0,h=null,f=359999e3,m="highlight";return{element:c,getTripTime:function(){return s},highlight:function(){clearTimeout(u),p.add(m),o.add(m),u=setTimeout(function(){p.remove(m),o.remove(m)},200)},reset:function(){s=0,null!==h&&(h=Date.now())},start:function(){h=Date.now()},stop:function(){s+=Date.now()-h,s=Math.min(s,f),h=null},update:function(){if(null!==h){var e=Date.now();s+=e-h,h=e}s=Math.min(s,f);var i=s/1e3;a.nodeValue=I(Math.floor(i%60));var d=i/60;t.nodeValue=I(Math.floor(d%60));var l=d/60;n.nodeValue=I(Math.floor(l))}}}function E(e){var n="TripTimeTab",t=d(n+"-content Tab-content");t.appendChild(L("TRIP")),t.appendChild(document.createElement("br")),t.appendChild(L("TIME"));var a=d(n+" Tab Button");a.appendChild(d(n+"-aligner Tab-aligner")),a.appendChild(t),p(a,function(){e(),i.add(l)});var i=a.classList,l="selected";return{element:a,deselect:function(){i.remove(l)}}}function I(e){return e=String(e),1==e.length&&(e="0"+e),e}!function(){function e(){n.resize(innerWidth,innerHeight)}!function(){var e=document.createElement("style");e.innerHTML='@font-face {font-family: FreeMono;src: url(fonts/FreeMono.ttf);src: local("FreeMono"), url(fonts/FreeMono.ttf);font-weight: normal;}@font-face {font-family: FreeMono;src: url(fonts/FreeMonoBold.ttf);src: local("FreeMono Bold"), url(fonts/FreeMonoBold.ttf);font-weight: bold;}',document.head.appendChild(e)}();var n=o();document.body.appendChild(n.element),addEventListener("resize",e),e()}()}();