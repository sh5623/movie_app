(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{39:function(e,t,n){},62:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(30),i=n.n(r),c=n(9),o=n(2),l=(n(39),n(1));var u=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about_container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},j=n(19),m=n.n(j),d=n(31),b=n(13),p=n(14),h=n(16),v=n(15),O=n(32),x=n.n(O),f=n(6),g=n.n(f);n(62);function y(e){var t=e.id,n=e.year,s=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:r,genres:i}},children:[Object(l.jsx)("img",{src:r,alt:s,title:s}),Object(l.jsxs)("div",{className:"movie_data",children:[Object(l.jsx)("h3",{className:"movie_title",children:s}),Object(l.jsx)("h5",{className:"movie_year",children:n}),Object(l.jsx)("ul",{className:"movie_genre",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie_sumarry",children:[a.slice(0,140)," ..."]})]})]})})}y.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired};var _=y,N=(n(66),function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoding:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoding:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component)),w=N,k=function(e){Object(h.a)(n,e);var t=Object(v.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(a.a.Component),q=k;n(67);var R=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/about",children:"About"})]})};n(68);var L=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(R,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:w}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/movie/:id",component:q})]})};i.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.386dbe02.chunk.js.map