!function(){function e(e,n,t){function a(){var a,i=e.get(),l=n.getTripTime();a=0==l?0:i/(l/1e3),a=18*a/5,a=t.fix(a),a=Math.min(999.99,a),d.nodeValue=String(Math.floor(a)),r.nodeValue=Math.floor(a%1*10)}var i="AverageSpeedPanel",d=b("0"),o=l(i+"-integerPart");o.appendChild(d);var r=b("0"),p=l(i+"-fractionalPart");p.appendChild(b(".")),p.appendChild(r);var h=b(t.speedLabel),c=l(i+"-unit");c.appendChild(h);var u=l(i+" BottomPanel-content");u.appendChild(o),u.appendChild(p),u.appendChild(c);var s=l(i+"-label");s.appendChild(b("AVERAGE SPEED"));var f=s.classList,v=l("BottomPanel");v.appendChild(s),v.appendChild(u);var C,m=v.classList;return{element:v,reset:a,update:a,highlight:function(){clearTimeout(C),m.add("highlight"),f.add("highlight"),C=setTimeout(function(){m.remove("highlight"),f.remove("highlight")},200)},setUnit:function(e){t=e,h.nodeValue=t.speedLabel,a()}}}function n(e){var n="AverageSpeedTab",t=l(n+"-content Tab-content");t.appendChild(b("AVERAGE")),t.appendChild(document.createElement("br")),t.appendChild(b("SPEED"));var a=l(n+" Tab Button");a.appendChild(l(n+"-aligner Tab-aligner")),a.appendChild(t);var i=a.classList,d=u(a,function(){e(),i.add("selected")});return d.enable(),{element:a,deselect:function(){i.remove("selected")}}}function t(){var e="ClockPanel",n=b("00"),t=l(e+"-hour");t.appendChild(n);var a=b("00"),i=l(e+"-minute");i.appendChild(a);var d=b("00"),o=l(e+"-second");o.appendChild(b(":")),o.appendChild(d);var r=l(e+" BottomPanel-content");r.appendChild(t),r.appendChild(b(":")),r.appendChild(i),r.appendChild(o);var p=l(e+"-label");p.appendChild(b("CLOCK"));var h=p.classList,c=l("BottomPanel");c.appendChild(p),c.appendChild(r);var u,s=c.classList;return{element:c,highlight:function(){clearTimeout(u),s.add("highlight"),h.add("highlight"),u=setTimeout(function(){s.remove("highlight"),h.remove("highlight")},200)},update:function(){var e=new Date;n.nodeValue=E(e.getHours()),a.nodeValue=E(e.getMinutes()),d.nodeValue=E(e.getSeconds())}}}function a(e){var n=l("Tab ClockTab Button");n.appendChild(b("CLOCK"));var t=n.classList,a=u(n,function(){e(),t.add("selected")});return a.enable(),{element:n,deselect:function(){t.remove("selected")}}}function i(){var e=null,n=0;return{add:function(t){e&&(n+=d(e,t)),e=t},get:function(){return n},reset:function(){e=null,n=0},start:function(){e=null}}}function d(e,n){function t(e){return e*Math.PI/180}var a=e.coords,i=n.coords,d=t(a.latitude),l=t(a.longitude),o=t(i.latitude),r=t(i.longitude),p=6371e3,h=o-d,c=r-l,u=Math.sin(h/2),s=Math.sin(c/2),f=u*u+Math.cos(d)*Math.cos(o)*s*s,v=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),C=p*v;return C}function l(e){var n=document.createElement("div");return n.className=e,n}function o(){return{distanceLabel:"M",speedLabel:"M/H",fix:function(e){return e}}}function r(){function n(e){P.setUnit(e),B.setUnit(e),V.setUnit(e),D.setUnit(e)}function a(){r(function(){setTimeout(function(){B.update(),I.update(),A.update(),D.update(),a()},50)})}function d(e){u&&v.add(e);var n=e.coords,t=n.speed;P.setSpeed(t),u&&V.setSpeed(t);var a=n.accuracy;U.setStatus(6>a?"SIGNAL GOOD":12>a?"SIGNAL OK":"SIGNAL WEAK")}var r=window.requestAnimationFrame,h=window.cancelAnimationFrame;r||(r=window.mozRequestAnimationFrame,h=window.mozCancelAnimationFrame);var u=!1,v=i(),b=o(),M=c(),P=C(M),E=T(function(){R.removeChild(R.firstChild),R.appendChild(I.element),I.highlight()},function(){R.removeChild(R.firstChild),R.appendChild(B.element),B.highlight()},function(){R.removeChild(R.firstChild),R.appendChild(A.element),A.highlight()},function(){R.removeChild(R.firstChild),R.appendChild(V.element),V.highlight()},function(){R.removeChild(R.firstChild),R.appendChild(D.element),D.highlight()},function(){R.removeChild(R.firstChild),R.appendChild(w.element),w.highlight()}),I=S(),B=L(v,M),A=t(),V=p(M),D=e(v,I,M),w=f(function(){n(b)},function(){n(M)});n(M);var N="MainPanel",R=l(N+"-panel");R.appendChild(B.element);var F=s(function(){v.reset(),I.reset(),B.reset(),V.reset(),D.reset()}),O=m(function(){u=!0,I.start(),v.start()},function(){u=!1,I.stop()}),U=g(),G=l(N+"-content");G.appendChild(P.element),G.appendChild(R),G.appendChild(E.element),G.appendChild(F),G.appendChild(O.element),G.appendChild(U.element);var x=l(N);return x.appendChild(G),navigator.geolocation.watchPosition(d,function(e){var n=e.code;U.setStatus(n==e.PERMISSION_DENIED?"PERMISSION DENIED":n==e.POSITION_UNAVAILABLE?"POSITION UNAVAILABLE":"TIMEOUT")},{enableHighAccuracy:!0}),a(),navigator.requestWakeLock&&navigator.requestWakeLock("screen"),{element:x,resize:function(e,n){var t=e/320;452*t>n&&(t=n/452),x.style.transform="scale("+t+")"}}}function p(e){function n(e){m=e,t()}function t(){speed=18*m/5,speed=e.fix(speed),speed=Math.min(999.99,speed),i.nodeValue=String(Math.floor(speed)),o.nodeValue=Math.floor(speed%1*10)}var a="MaxSpeedPanel",i=b("0"),d=l(a+"-integerPart");d.appendChild(i);var o=b("0"),r=l(a+"-fractionalPart");r.appendChild(b(".")),r.appendChild(o);var p=b(e.speedLabel),h=l(a+"-unit");h.appendChild(p);var c=l(a+" BottomPanel-content");c.appendChild(d),c.appendChild(r),c.appendChild(h);var u=l(a+"-label");u.appendChild(b("MAX SPEED"));var s=u.classList,f=l("BottomPanel");f.appendChild(u),f.appendChild(c);var v,C=f.classList,m=0;return{element:f,highlight:function(){clearTimeout(v),C.add("highlight"),s.add("highlight"),v=setTimeout(function(){C.remove("highlight"),s.remove("highlight")},200)},reset:function(){n(0)},setSpeed:function(e){isFinite(e)||(e=0),e>m&&n(e)},setUnit:function(n){e=n,p.nodeValue=e.speedLabel,t()}}}function h(e){var n="MaxSpeedTab",t=l(n+"-content Tab-content");t.appendChild(b("MAX")),t.appendChild(document.createElement("br")),t.appendChild(b("SPEED"));var a=l(n+" Tab Button");a.appendChild(l(n+"-aligner Tab-aligner")),a.appendChild(t);var i=a.classList,d=u(a,function(){e(),i.add("selected")});return d.enable(),{element:a,deselect:function(){i.remove("selected")}}}function c(){return{distanceLabel:"KM",speedLabel:"KM/H",fix:function(e){return 1.609344*e}}}function u(e,n){function t(){l.add("active"),clearTimeout(d),d=setTimeout(function(){n(),d=setTimeout(function(){l.remove("active")},150)},100)}function a(e){0===e.button&&(e.preventDefault(),o?o=!1:t())}function i(e){e.preventDefault(),o=!0,t()}var d,l=e.classList,o=!1;return{disable:function(){e.removeEventListener("touchstart",i),e.removeEventListener("mousedown",a)},enable:function(){e.addEventListener("mousedown",a),e.addEventListener("touchstart",i)}}}function s(e){var n=l("ResetButton Button");n.appendChild(b("RESET"));var t=u(n,e);return t.enable(),n}function f(e,n){var t="SettingsPanel",a=l(t+"-button Button");a.appendChild(b("IMPERIAL"));var i=u(a,function(){d.classList.remove("selected"),a.classList.add("selected"),e()});i.enable();var d=l(t+"-metricButton "+t+"-button Button selected");d.appendChild(b("METRIC"));var o=u(d,function(){a.classList.remove("selected"),d.classList.add("selected"),n()});o.enable();var r=l(t+"-fieldLabel");r.appendChild(b("UNITS:"));var p=l(t+" BottomPanel-content");p.appendChild(r),p.appendChild(a),p.appendChild(d);var h=l(t+"-label");h.appendChild(b("SETTINGS"));var c=h.classList,s=l("BottomPanel");s.appendChild(h),s.appendChild(p);var f,v=s.classList;return{element:s,highlight:function(){clearTimeout(f),v.add("highlight"),c.add("highlight"),f=setTimeout(function(){v.remove("highlight"),c.remove("highlight")},200)}}}function v(e){var n=l("Tab SettingsTab Button");n.appendChild(b("SETTINGS"));var t=n.classList,a=u(n,function(){e(),t.add("selected")});return a.enable(),{element:n,deselect:function(){t.remove("selected")}}}function C(e){function n(){speed=18*s/5,speed=e.fix(speed),speed=Math.min(999.99,speed),a.nodeValue=Math.floor(speed),d.nodeValue=Math.floor(speed%1*10)}var t="SpeedLabel",a=b("0"),i=l(t+"-integerPart");i.appendChild(a);var d=b("0"),o=l(t+"-fractionalPart");o.appendChild(b(".")),o.appendChild(d);var r=b(e.speedLabel),p=l(t+"-unit");p.appendChild(r);var h=l(t+"-label");h.appendChild(b("SPEED"));var c=l(t+"-content");c.appendChild(i),c.appendChild(o),c.appendChild(p);var u=l(t);u.appendChild(h),u.appendChild(c);var s=0;return{element:u,setSpeed:function(e){isFinite(e)||(e=0),s=e,n()},setUnit:function(t){e=t,r.nodeValue=e.speedLabel,n()}}}function m(e,n){var t=!1,a=b("START"),i=l("StartStopButton Button");i.appendChild(a);var d=u(i,function(){t?(t=!1,a.nodeValue="START",n()):(t=!0,a.nodeValue="STOP",e())});return d.enable(),{element:i}}function g(){var e=b("INITIALIZING"),n=l("StatusPanel");n.appendChild(b("GPS: ")),n.appendChild(e);var t,a=n.classList;return{element:n,setStatus:function(n){n!=e.nodeValue&&(e.nodeValue=n,clearTimeout(t),a.add("highlight"),t=setTimeout(function(){a.remove("highlight")},200))}}}function T(e,t,i,d,o,r){var p=M(function(){c.deselect(),u.deselect(),s.deselect(),f.deselect(),C.deselect(),t()}),c=P(function(){p.deselect(),u.deselect(),s.deselect(),f.deselect(),C.deselect(),e()}),u=a(function(){p.deselect(),c.deselect(),s.deselect(),f.deselect(),C.deselect(),i()}),s=h(function(){p.deselect(),c.deselect(),u.deselect(),f.deselect(),C.deselect(),d()}),f=n(function(){p.deselect(),c.deselect(),u.deselect(),s.deselect(),C.deselect(),o()}),C=v(function(){p.deselect(),c.deselect(),u.deselect(),s.deselect(),f.deselect(),r()}),m="Tabs",g=l(m+"-row1");g.appendChild(p.element),g.appendChild(c.element),g.appendChild(u.element);var T=l(m+"-row2");T.appendChild(s.element),T.appendChild(f.element),T.appendChild(C.element);var b=l(m);return b.appendChild(g),b.appendChild(T),{element:b}}function b(e){return document.createTextNode(e)}function L(e,n){function t(){var t=e.get();t=n.fix(t),t=Math.min(999999,Math.floor(t));var a=String(t%1e3);1==a.length?a="00"+a:2==a.length&&(a="0"+a),o.nodeValue=a,i.nodeValue=Math.floor(t/1e3)}var a="TripDistancePanel",i=b("0"),d=l(a+"-integerPart");d.appendChild(i);var o=b("000"),r=l(a+"-fractionalPart");r.appendChild(b(".")),r.appendChild(o);var p=b(n.distanceLabel),h=l(a+"-unit");h.appendChild(p);var c=l(a+" BottomPanel-content");c.appendChild(d),c.appendChild(r),c.appendChild(h);var u=l(a+"-label");u.appendChild(b("TRIP DISTANCE"));var s=u.classList,f=l("BottomPanel");f.appendChild(u),f.appendChild(c);var v,C=f.classList;return{element:f,reset:t,update:t,highlight:function(){clearTimeout(v),C.add("highlight"),s.add("highlight"),v=setTimeout(function(){C.remove("highlight"),s.remove("highlight")},200)},setUnit:function(e){n=e,p.nodeValue=n.distanceLabel,t()}}}function M(e){var n="TripDistanceTab",t=l(n+"-content Tab-content");t.appendChild(b("TRIP")),t.appendChild(document.createElement("br")),t.appendChild(b("DISTANCE"));var a=l(n+" Tab Button");a.appendChild(l(n+"-aligner Tab-aligner")),a.appendChild(t);var i=a.classList;i.add("selected");var d=u(a,function(){e(),i.add("selected")});return d.enable(),{element:a,deselect:function(){i.remove("selected")}}}function S(){var e="TripTimePanel",n=b("00"),t=l(e+"-hour");t.appendChild(n);var a=b("00"),i=l(e+"-minute");i.appendChild(a);var d=b("00"),o=l(e+"-second");o.appendChild(b(":")),o.appendChild(d);var r=l(e+" BottomPanel-content");r.appendChild(t),r.appendChild(b(":")),r.appendChild(i),r.appendChild(o);var p=l(e+"-label");p.appendChild(b("TRIP TIME"));var h=p.classList,c=l("BottomPanel");c.appendChild(p),c.appendChild(r);var u,s=c.classList,f=0,v=null,C=359999e3;return{element:c,getTripTime:function(){return f},highlight:function(){clearTimeout(u),s.add("highlight"),h.add("highlight"),u=setTimeout(function(){s.remove("highlight"),h.remove("highlight")},200)},reset:function(){f=0,null!==v&&(v=Date.now())},start:function(){v=Date.now()},stop:function(){f+=Date.now()-v,f=Math.min(f,C),v=null},update:function(){if(null!==v){var e=Date.now();f+=e-v,v=e}f=Math.min(f,C);var t=f/1e3;d.nodeValue=E(Math.floor(t%60));var i=t/60;a.nodeValue=E(Math.floor(i%60));var l=i/60;n.nodeValue=E(Math.floor(l))}}}function P(e){var n="TripTimeTab",t=l(n+"-content Tab-content");t.appendChild(b("TRIP")),t.appendChild(document.createElement("br")),t.appendChild(b("TIME"));var a=l(n+" Tab Button");a.appendChild(l(n+"-aligner Tab-aligner")),a.appendChild(t);var i=a.classList,d=u(a,function(){e(),i.add("selected")});return d.enable(),{element:a,deselect:function(){i.remove("selected")}}}function E(e){return e=String(e),1==e.length&&(e="0"+e),e}!function(){function e(){n.resize(innerWidth,innerHeight)}!function(){var e=document.createElement("style");e.innerHTML='@font-face {font-family: FreeMono;src: url(fonts/FreeMono.ttf);src: local("FreeMono"), url(fonts/FreeMono.ttf);font-weight: normal;}@font-face {font-family: FreeMono;src: url(fonts/FreeMonoBold.ttf);src: local("FreeMono Bold"), url(fonts/FreeMonoBold.ttf);font-weight: bold;}',document.head.appendChild(e)}();var n=r();document.body.appendChild(n.element),addEventListener("resize",e),e()}()}();