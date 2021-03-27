// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs_http.util');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('goog.userAgent');
goog.require('no.en.core');
/**
 * Returns the value of the HTTP basic authentication header for
 *   `credentials`.
 */
cljs_http.util.basic_auth = (function cljs_http$util$basic_auth(credentials){
if(cljs.core.truth_(credentials)){
var vec__6715 = ((cljs.core.map_QMARK_.call(null,credentials))?cljs.core.map.call(null,credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)], null)):credentials);
var username = cljs.core.nth.call(null,vec__6715,(0),null);
var password = cljs.core.nth.call(null,vec__6715,(1),null);
return ["Basic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.base64_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('')))].join('');
} else {
return null;
}
});
/**
 * Build the url from the request map.
 */
cljs_http.util.build_url = (function cljs_http$util$build_url(p__6718){
var map__6719 = p__6718;
var map__6719__$1 = (((((!((map__6719 == null))))?(((((map__6719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6719):map__6719);
var scheme = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613));
var server_name = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"server-name","server-name",-1012104295));
var server_port = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"server-port","server-port",663745648));
var uri = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var query_string = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__6722 = (new goog.Uri());
G__6722.setScheme(cljs.core.name.call(null,(function (){var or__4126__auto__ = scheme;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
})()));

G__6722.setDomain(server_name);

G__6722.setPort(server_port);

G__6722.setPath(uri);

G__6722.setQuery(query_string,true);

return G__6722;
})());
});
/**
 * Returns dash separeted string `s` in camel case.
 */
cljs_http.util.camelize = (function cljs_http$util$camelize(s){
return clojure.string.join.call(null,"-",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/-/)));
});
/**
 * Build the headers from the map.
 */
cljs_http.util.build_headers = (function cljs_http$util$build_headers(m){
return cljs.core.clj__GT_js.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,m)),cljs.core.vals.call(null,m)));
});
/**
 * Returns the user agent.
 */
cljs_http.util.user_agent = (function cljs_http$util$user_agent(){
return goog.userAgent.getUserAgentString();
});
/**
 * Returns true if the user agent is an Android client.
 */
cljs_http.util.android_QMARK_ = (function cljs_http$util$android_QMARK_(){
return cljs.core.re_matches.call(null,/.*android.*/i,cljs_http.util.user_agent.call(null));
});
/**
 * Transit decode an object from `s`.
 */
cljs_http.util.transit_decode = (function cljs_http$util$transit_decode(s,type,opts){
var rdr = cognitect.transit.reader.call(null,type,opts);
return cognitect.transit.read.call(null,rdr,s);
});
/**
 * Transit encode `x` into a String.
 */
cljs_http.util.transit_encode = (function cljs_http$util$transit_encode(x,type,opts){
var wrtr = cognitect.transit.writer.call(null,type,opts);
return cognitect.transit.write.call(null,wrtr,x);
});
/**
 * JSON decode an object from `s`.
 */
cljs_http.util.json_decode = (function cljs_http$util$json_decode(s){
var temp__5718__auto__ = JSON.parse(s);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
return cljs.core.js__GT_clj.call(null,v,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
} else {
return null;
}
});
/**
 * JSON encode `x` into a String.
 */
cljs_http.util.json_encode = (function cljs_http$util$json_encode(x){
return JSON.stringify(cljs.core.clj__GT_js.call(null,x));
});
cljs_http.util.parse_headers = (function cljs_http$util$parse_headers(headers){
return cljs.core.reduce.call(null,(function (p1__6724_SHARP_,p2__6723_SHARP_){
var vec__6725 = clojure.string.split.call(null,p2__6723_SHARP_,/:\s+/);
var k = cljs.core.nth.call(null,vec__6725,(0),null);
var v = cljs.core.nth.call(null,vec__6725,(1),null);
if(((clojure.string.blank_QMARK_.call(null,k)) || (clojure.string.blank_QMARK_.call(null,v)))){
return p1__6724_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__6724_SHARP_,clojure.string.lower_case.call(null,k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(function (){var or__4126__auto__ = headers;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});

//# sourceMappingURL=util.js.map
