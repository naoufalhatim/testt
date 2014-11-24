!function(){function e(){var e="ClockPanel",n=h("00"),t=d(e+"-hour");t.appendChild(n);var a=h("00"),i=d(e+"-minute");i.appendChild(a);var l=h("00"),o=d(e+"-second");o.appendChild(h(":")),o.appendChild(l);var r=d(e+" BottomPanel-content");r.appendChild(t),r.appendChild(h(":")),r.appendChild(i),r.appendChild(o);var p=d(e+"-label");p.appendChild(h("CLOCK"));var u=d("BottomPanel");return u.appendChild(p),u.appendChild(r),{element:u,update:function(){var e=new Date;n.nodeValue=m(e.getHours()),a.nodeValue=m(e.getMinutes()),l.nodeValue=m(e.getSeconds())}}}function n(e){var n=d("Tab ClockTab Button");n.appendChild(h("CLOCK"));var t=n.classList,a=l(n,function(){e(),t.add("selected")});return a.enable(),{element:n,deselect:function(){t.remove("selected")}}}function t(){var e,n=0;return{add:function(t){e&&(n+=a(e,t)),e=t},get:function(){return n},reset:function(){positions.splice(0)}}}function a(e,n){function t(e){return e*Math.PI/180}var a=e.coords,d=n.coords,i=t(a.latitude),l=t(a.longitude),o=t(d.latitude),r=t(d.longitude),p=6371e3,u=o-i,c=r-l,h=Math.sin(u/2),s=Math.sin(c/2),f=h*h+Math.cos(i)*Math.cos(o)*s*s,C=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),v=p*C;return v}function d(e){var n=document.createElement("div");return n.className=e,n}function i(){function n(){i(function(){setTimeout(function(){M.update(),T.update(),g.update(),n()},50)})}function a(e){h&&f.add(e);var n=e.coords;v.setSpeed(n.speed);var t=n.accuracy;E.setStatus(6>t?"SIGNAL GOOD":12>=t?"SIGNAL OK":"SIGNAL WEAK")}var i=window.requestAnimationFrame,l=window.cancelAnimationFrame;i||(i=window.mozRequestAnimationFrame,l=window.mozCancelAnimationFrame);var h=!1,f=t(),v=r(),m=c(function(){S.removeChild(S.firstChild),S.appendChild(T.element)},function(){S.removeChild(S.firstChild),S.appendChild(M.element)},function(){S.removeChild(S.firstChild),S.appendChild(g.element)}),T=C(),M=s(f),g=e(),I="MainPanel",S=d(I+"-panel");S.appendChild(M.element);var b=o(function(){T.reset(),M.reset(),f.reset()}),P=p(function(){h=!0,T.start()},function(){h=!1,T.stop()}),E=u(),L=d(I+"-content");L.appendChild(v.element),L.appendChild(S),L.appendChild(m.element),L.appendChild(b),L.appendChild(P.element),L.appendChild(E.element);var A=d(I);A.appendChild(L),navigator.geolocation.watchPosition(a,function(e){var n=e.code;E.setStatus(n==e.PERMISSION_DENIED?"PERMISSION DENIED":n==e.POSITION_UNAVAILABLE?"POSITION UNAVAILABLE":"TIMEOUT")},{enableHighAccuracy:!0}),n();var w=navigator.requestWakeLock;return w&&w("screen"),{element:A,resize:function(e,n){var t=e/320;400*t>n&&(t=n/400),A.style.transform="scale("+t+")"}}}function l(e,n){function t(){l.add("active"),clearTimeout(i),i=setTimeout(function(){n(),i=setTimeout(function(){l.remove("active")},150)},100)}function a(e){0===e.button&&(e.preventDefault(),o?o=!1:t())}function d(e){e.preventDefault(),o=!0,t()}var i,l=e.classList,o=!1;return{disable:function(){e.removeEventListener("touchstart",d),e.removeEventListener("mousedown",a)},enable:function(){e.addEventListener("mousedown",a),e.addEventListener("touchstart",d)}}}function o(e){var n=d("ResetButton Button");n.appendChild(h("RESET"));var t=l(n,e);return t.enable(),n}function r(){var e="SpeedLabel",n=h("00"),t=d(e+"-grey");t.appendChild(n);var a=h("-"),i=d(e+"-integerPart");i.appendChild(a);var l=h("-"),o=d(e+"-fractionalPart");o.appendChild(h(".")),o.appendChild(l);var r=d(e+"-unit");r.appendChild(h("KM/H"));var p=d(e+"-label");p.appendChild(h("SPEED"));var u=d(e+"-content");u.appendChild(t),u.appendChild(i),u.appendChild(o),u.appendChild(r);var c=d(e);return c.appendChild(p),c.appendChild(u),{element:c,setSpeed:function(e){var t,d,i;if(isFinite(e)){e=18*e/5,e=Math.min(999.99,e),t=String(Math.floor(e)),d=Math.floor(e%1*10);var o=t.length;i=3==o?"":2==o?"0":"00"}else t="-",d="-",i="--";a.nodeValue=t,l.nodeValue=d,n.nodeValue=i}}}function p(e,n){var t=!1,a=h("START"),i=d("StartStopButton Button");i.appendChild(a);var o=l(i,function(){t?(t=!1,a.nodeValue="START",n()):(t=!0,a.nodeValue="STOP",e())});return o.enable(),{element:i}}function u(){var e=h("INITIALIZING"),n=d("StatusPanel");return n.appendChild(h("GPS: ")),n.appendChild(e),{element:n,setStatus:function(n){e.nodeValue=n}}}function c(e,t,a){var i=f(function(){l.deselect(),o.deselect(),t()}),l=v(function(){i.deselect(),o.deselect(),e()}),o=n(function(){i.deselect(),l.deselect(),a()}),r=d("Tabs");return r.appendChild(i.element),r.appendChild(l.element),r.appendChild(o.element),{element:r}}function h(e){return document.createTextNode(e)}function s(e){function n(){var n=e.get();n=Math.min(999999,Math.floor(n));var t=String(n%1e3);1==t.length?t="00"+t:2==t.length&&(t="0"+t),r.nodeValue=t,l.nodeValue=Math.floor(n/1e3);var d,i=l.nodeValue.length;d=3==i?"":2==i?"0":"00",a.nodeValue=d}var t="TripDistancePanel",a=h("00"),i=d(t+"-grey");i.appendChild(a);var l=h("0"),o=d(t+"-integerPart");o.appendChild(i),o.appendChild(l);var r=h("000"),p=d(t+"-fractionalPart");p.appendChild(h(".")),p.appendChild(r);var u=d(t+"-unit");u.appendChild(h("KM"));var c=d(t+" BottomPanel-content");c.appendChild(o),c.appendChild(p),c.appendChild(u);var s=d(t+"-label");s.appendChild(h("TRIP DISTANCE"));var f=d("BottomPanel");return f.appendChild(s),f.appendChild(c),{element:f,reset:n,update:n}}function f(e){var n="TripDistanceTab",t=d(n+"-content Tab-content");t.appendChild(h("TRIP")),t.appendChild(document.createElement("br")),t.appendChild(h("DISTANCE"));var a=d(n+" Tab Button");a.appendChild(d(n+"-aligner Tab-aligner")),a.appendChild(t);var i=a.classList;i.add("selected");var o=l(a,function(){e(),i.add("selected")});return o.enable(),{element:a,deselect:function(){i.remove("selected")}}}function C(){var e="TripTimePanel",n=h("00"),t=d(e+"-hour");t.appendChild(n);var a=h("00"),i=d(e+"-minute");i.appendChild(a);var l=h("00"),o=d(e+"-second");o.appendChild(h(":")),o.appendChild(l);var r=d(e+" BottomPanel-content");r.appendChild(t),r.appendChild(h(":")),r.appendChild(i),r.appendChild(o);var p=d(e+"-label");p.appendChild(h("TRIP TIME"));var u=d("BottomPanel");u.appendChild(p),u.appendChild(r);var c=0,s=null,f=359999e3;return{element:u,reset:function(){c=0,null!==s&&(s=Date.now())},start:function(){s=Date.now()},stop:function(){c+=Date.now()-s,c=Math.min(c,f),s=null},update:function(){if(null!==s){var e=Date.now();c+=e-s,s=e}c=Math.min(c,f);var t=c/1e3;l.nodeValue=m(Math.floor(t%60));var d=t/60;a.nodeValue=m(Math.floor(d%60));var i=d/60;n.nodeValue=m(Math.floor(i))}}}function v(e){var n="TripTimeTab",t=d(n+"-content Tab-content");t.appendChild(h("TRIP")),t.appendChild(document.createElement("br")),t.appendChild(h("TIME"));var a=d(n+" Tab Button");a.appendChild(d(n+"-aligner Tab-aligner")),a.appendChild(t);var i=a.classList,o=l(a,function(){e(),i.add("selected")});return o.enable(),{element:a,deselect:function(){i.remove("selected")}}}function m(e){return e=String(e),1==e.length&&(e="0"+e),e}!function(){function e(){n.resize(innerWidth,innerHeight)}!function(){var e=document.createElement("style");e.innerHTML='@font-face {font-family: FreeMono;src: url(fonts/FreeMono.ttf);src: local("FreeMono"), url(fonts/FreeMono.ttf);font-weight: normal;}@font-face {font-family: FreeMono;src: url(fonts/FreeMonoBold.ttf);src: local("FreeMono Bold"), url(fonts/FreeMonoBold.ttf);font-weight: bold;}',document.head.appendChild(e)}();var n=i();document.body.appendChild(n.element),addEventListener("resize",e),e()}()}();