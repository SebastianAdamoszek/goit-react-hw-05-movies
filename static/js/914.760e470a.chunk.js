"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914],{25:(e,s,i)=>{i.d(s,{Hg:()=>t,TP:()=>o,tx:()=>l,z1:()=>c,zv:()=>n});var a=i(294);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";const r="e8ab892b2ac2cd96b9f442270f7b9c45",t=async()=>{try{const e=await a.Z.get("trending/all/day?api_key=".concat(r));return new Promise((s=>{setTimeout((()=>{s(e.data.results)}),500)}))}catch(e){console.log("getTrending error:",e)}},c=async e=>{try{const s=await a.Z.get("search/movie?api_key=".concat(r,"&query=").concat(e));return new Promise((e=>{setTimeout((()=>{e(s.data.results)}),500)}))}catch(s){console.log("searchMovies error:",s)}},o=async e=>{try{const s=await a.Z.get("movie/".concat(e,"?api_key=").concat(r));return new Promise((e=>{setTimeout((()=>{e(s.data)}),1e3)}))}catch(s){console.error("getMovieDetails error:",s)}},n=async e=>{try{const s=await a.Z.get("movie/".concat(e,"/credits?api_key=").concat(r));return new Promise((e=>{setTimeout((()=>{e(s.data.cast)}),500)}))}catch(s){console.error("getMovieCredits error:",s)}},l=async e=>{try{const s=await a.Z.get("movie/".concat(e,"/reviews?api_key=").concat(r));return new Promise((e=>{setTimeout((()=>{e(s.data.results)}),500)}))}catch(s){console.error("getMovieReviews error:",s)}}},914:(e,s,i)=>{i.r(s),i.d(s,{default:()=>p});var a=i(791),r=i(689),t=i(87),c=i(25),o=i(793);const n="MovieDetails_Wrapper__1xf4e",l="MovieDetails_Image__V6K1r",d="MovieDetails_ErrorHeading__RvzFd",v="MovieDetails_Heading__xwOnf",h="MovieDetails_Description__DW17q",m="MovieDetails_Overview__+e3uD",_="MovieDetails_GenresList__V+NBJ",u="MovieDetails_MoreInfo__1wKlZ",x="MovieDetails_List__whW3w",j="MovieDetails_Link__HT1W6",g="MovieDetails_prevLink__vPIZy";var w=i(184);const p=()=>{var e,s;const{movieId:i}=(0,r.UO)(),[p,y]=(0,a.useState)(!0),[M,D]=(0,a.useState)(null),N=null!==(e=null===(s=(0,r.TH)().state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/movies";return(0,a.useEffect)((()=>{(async()=>{try{const e=await(0,c.TP)(i);D(e)}catch(e){console.error("FetchingMovieData error:",e)}finally{y(!1)}})()}),[i]),M?(0,w.jsxs)("main",{children:[(0,w.jsx)("div",{children:p?(0,w.jsx)(o.Z,{}):(0,w.jsxs)("div",{className:n,children:[(0,w.jsx)("div",{children:(0,w.jsxs)(t.rU,{to:N,className:g,children:["Prievious"," "]})}),(0,w.jsx)("div",{children:(0,w.jsx)("img",{className:l,src:M.poster_path?"https://image.tmdb.org/t/p/w500".concat(M.poster_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:M.title})}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsxs)("h1",{className:v,children:[M.title," (",M.release_date.split("-")[0],")"]}),(0,w.jsxs)("p",{children:["User Score: ",Math.round(M.vote_average/10*100),"%"]}),M.overview&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{className:m,children:M.overview})]}),M.genres&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("ul",{className:_,children:M.genres.map((e=>(0,w.jsx)("li",{children:e.name},e.id)))})]})]})]})}),(0,w.jsxs)("div",{className:u,children:[(0,w.jsx)("h2",{children:"More informations"}),(0,w.jsxs)("ul",{className:x,children:[(0,w.jsx)("li",{children:(0,w.jsx)(t.rU,{to:"cast",className:j,children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(t.rU,{to:"reviews",className:j,children:"Reviews"})})]}),(0,w.jsx)(r.j3,{})]})]}):(0,w.jsx)("main",{children:(0,w.jsx)("div",{children:p?(0,w.jsx)(o.Z,{}):(0,w.jsxs)("div",{className:n,children:[(0,w.jsx)(t.rU,{to:N,className:g,children:"Prievious"}),(0,w.jsx)("h1",{className:d,children:"Information unavailable"})]})})})}}}]);
//# sourceMappingURL=914.760e470a.chunk.js.map