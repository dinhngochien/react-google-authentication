(this["webpackJsonpmy-react-google-login"]=this["webpackJsonpmy-react-google-login"]||[]).push([[0],{11:function(e,n,o){},12:function(e,n,o){},14:function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),c=o(4),s=o.n(c),l=(o(11),o(12),o(1)),r=o(2),i=o.n(r),u=o(5),g=function(e){var n=1e3*(e.tokenObj.expires_in||3300),o=function(){var t=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.reloadAuthResponse();case 2:a=t.sent,n=1e3*(a.expires_in||3300),console.log("newAuthRes:",a),localStorage.setItem("authToken",a.id_token),setTimeout(o,n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();setTimeout(o,n)};var m=function(){return a.a.createElement("div",null,a.a.createElement(l.GoogleLogin,{clientId:"707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){console.log("Login Success: currentUser:",e.profileObj),g(e)},onFailure:function(e){console.log("Login failed: res:",e)},cookiePolicy:"single_host_origin",style:{marginTop:"100px"},isSignedIn:!0}))};var p=function(){return a.a.createElement("div",null,a.a.createElement(l.GoogleLogout,{clientId:"707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){console.log("Logout made successfully")}}),";")};var f=function(){var e=Object(l.useGoogleLogin)({onSuccess:function(e){console.log("Login Success: currentUser:",e.profileObj),g(e)},clientId:"707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com",isSignedIn:!0,accessType:"offline"}).signIn;return a.a.createElement("button",{onClick:e,className:"button"},a.a.createElement("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),a.a.createElement("span",{className:"buttonText"},"Sign in with Google"))};var h=function(){var e=Object(l.useGoogleLogout)({clientId:"707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com",onLogoutSuccess:function(e){console.log("Logged out Success")},onFailure:function(){console.log("Handle failure cases")}}).signOut;return a.a.createElement("button",{onClick:e,className:"button"},a.a.createElement("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),a.a.createElement("span",{className:"buttonText"},"Sign out"))};var d=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h2",null,"The Components way"),a.a.createElement(m,null),a.a.createElement(p,null),a.a.createElement("h2",null,"The Hooks way"),a.a.createElement(f,null),a.a.createElement(h,null),a.a.createElement("a",{href:"https://github.com/Sivanesh-S/react-google-authentication"},"Github Repo"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,n,o){e.exports=o(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.185bee72.chunk.js.map