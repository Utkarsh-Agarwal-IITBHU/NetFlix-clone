(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},60:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(18),o=n.n(a),r=(n(28),n(4)),s=n.n(r),l=n(6),d=n(5),u=n(19),v=n(22),h=n.n(v).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(n(60),n(23)),b=n.n(f),j=n(0);var p=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,a=Object(c.useState)([]),o=Object(d.a)(a,2),r=o[0],v=o[1],f=Object(c.useState)(""),p=Object(d.a)(f,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)("div",{className:"row__container",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)("div",{className:"row__postirs",children:r.map((function(e){return Object(j.jsx)("img",{onClick:function(){return function(e){m?g(!1):b()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poste ".concat(i&&"Originals"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path)},e.id)}))}),m&&Object(j.jsx)(u.a,{videoId:m,opts:{height:"390",width:"640",playerVars:{autoplay:1}}})]})},m=(n(70),"5d830b498c43c1d1dcd8da0a0dec9f04"),g={fetchTrending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchMystery:"/discover/movie?api_key=".concat(m,"&with_genres=9648"),fetchSciFi:"/discover/movie?api_key=".concat(m,"&with_genres=878"),fetchWestern:"/discover/movie?api_key=".concat(m,"&with_genres=37"),fetchAnimation:"/discover/movie?api_key=".concat(m,"&with_genres=16"),fetchTV:"/discover/movie?api_key=".concat(m,"&with_genres=10770")};n(71);var _=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],a=g.fetchTrending;return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(a);case 2:return t=e.sent,n=Math.floor(Math.random()*(t.data.results.length-1)),i(t.data.results[n]),e.abrupt("return",0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),Object(j.jsx)("div",{className:"banner_container",children:Object(j.jsxs)("div",{className:"banner_image",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(j.jsxs)("div",{className:"banner_contents",children:[Object(j.jsx)("h1",{className:"banner_title",children:(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)}),Object(j.jsxs)("div",{className:"banner_buttons",children:[Object(j.jsx)("button",{className:"banner_button",children:"Play"}),Object(j.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(j.jsx)("div",{className:"banner_description",children:null===n||void 0===n?void 0:n.overview})]}),Object(j.jsx)("div",{className:"coloriser"})]})})};n(72);var O=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];function a(e){window.scrollY>100?i(!0):i(!1)}return Object(c.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[]),Object(j.jsxs)("div",{className:"Nav ".concat(n&&"nav__black"),children:[Object(j.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}),Object(j.jsx)("img",{className:"nav__user",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})]})};var x=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{}),Object(j.jsx)(_,{}),Object(j.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:g.fetchMystery,isLargeRow:!0}),Object(j.jsx)(p,{title:"Trending Now",fetchUrl:g.fetchTrending}),Object(j.jsx)(p,{title:"Top Rated",fetchUrl:g.fetchTopRated}),Object(j.jsx)(p,{title:"Romance Movies",fetchUrl:g.fetchRomanceMovies}),Object(j.jsx)(p,{title:"Comedy Movies",fetchUrl:g.fetchComedyMovies}),Object(j.jsx)(p,{title:"Horror Movies",fetchUrl:g.fetchHorrorMovies}),Object(j.jsx)(p,{title:"Documentaries",fetchUrl:g.fetchSciFi}),Object(j.jsx)(p,{title:"Action Movies",fetchUrl:g.fetchActionMovies})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),w()}},[[73,1,2]]]);
//# sourceMappingURL=main.ad63b3d0.chunk.js.map