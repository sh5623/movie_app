(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{48:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var r=s(3),a=s.n(r),i=s(16),n=s.n(i),c=s(7),o=s.n(c),m=s(17),l=s(18),u=s(19),d=s(22),j=s(21),v=s(20),p=s.n(v),b=s(2),h=s.n(b),g=(s(48),s(0));function y(e){var t=e.year,s=e.title,r=e.summary,a=e.poster,i=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:a,alt:s,title:s}),Object(g.jsxs)("div",{className:"movie_data",children:[Object(g.jsx)("h3",{className:"movie_title",children:s}),Object(g.jsx)("h5",{className:"movie_year",children:t}),Object(g.jsx)("ul",{className:"movie_genre",children:i.map((function(e,t){return Object(g.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(g.jsxs)("p",{className:"movie_sumarry",children:[r.slice(0,140)," ..."]})]})]})}y.prototype={id:h.a.number.isRequired,year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var O=y,x=(s(50),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoding:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,r=s.data.data.movies,e.setState({movies:r,isLoding:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,s=e.movies;return Object(g.jsx)("section",{className:"container",children:t?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(g.jsx)("div",{className:"movies",children:s.map((function(e){return Object(g.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component)),f=x;n.a.render(Object(g.jsx)(f,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.4a077145.chunk.js.map