// Compiled by ClojureScript 1.10.764 {}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.json');
goog.require('goog.object');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.WebSocket');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.Uri');
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__522){
var vec__523 = p__522;
var k = cljs.core.nth.call(null,vec__523,(0),null);
var v = cljs.core.nth.call(null,vec__523,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));

/**
 * @interface
 */
clojure.browser.net.IConnection = function(){};

var clojure$browser$net$IConnection$connect$dyn_530 = (function() {
var G__531 = null;
var G__531__1 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.connect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
var G__531__2 = (function (this$,opt1){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.connect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt1);
} else {
var m__4426__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt1);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
var G__531__3 = (function (this$,opt1,opt2){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.connect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt1,opt2);
} else {
var m__4426__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt1,opt2);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
var G__531__4 = (function (this$,opt1,opt2,opt3){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.connect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt1,opt2,opt3);
} else {
var m__4426__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt1,opt2,opt3);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
});
G__531 = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return G__531__1.call(this,this$);
case 2:
return G__531__2.call(this,this$,opt1);
case 3:
return G__531__3.call(this,this$,opt1,opt2);
case 4:
return G__531__4.call(this,this$,opt1,opt2,opt3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__531.cljs$core$IFn$_invoke$arity$1 = G__531__1;
G__531.cljs$core$IFn$_invoke$arity$2 = G__531__2;
G__531.cljs$core$IFn$_invoke$arity$3 = G__531__3;
G__531.cljs$core$IFn$_invoke$arity$4 = G__531__4;
return G__531;
})()
;
clojure.browser.net.connect = (function clojure$browser$net$connect(var_args){
var G__527 = arguments.length;
switch (G__527) {
case 1:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$1 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
return clojure$browser$net$IConnection$connect$dyn_530.call(null,this$);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt1){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$2 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
return clojure$browser$net$IConnection$connect$dyn_530.call(null,this$,opt1);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt1,opt2){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$3 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
return clojure$browser$net$IConnection$connect$dyn_530.call(null,this$,opt1,opt2);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt1,opt2,opt3){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$4 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
return clojure$browser$net$IConnection$connect$dyn_530.call(null,this$,opt1,opt2,opt3);
}
}));

(clojure.browser.net.connect.cljs$lang$maxFixedArity = 4);


var clojure$browser$net$IConnection$transmit$dyn_533 = (function() {
var G__534 = null;
var G__534__2 = (function (this$,opt){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt);
} else {
var m__4426__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__534__3 = (function (this$,opt,opt2){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt,opt2);
} else {
var m__4426__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt,opt2);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__534__4 = (function (this$,opt,opt2,opt3){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt,opt2,opt3);
} else {
var m__4426__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt,opt2,opt3);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__534__5 = (function (this$,opt,opt2,opt3,opt4){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt,opt2,opt3,opt4);
} else {
var m__4426__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt,opt2,opt3,opt4);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
var G__534__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5);
} else {
var m__4426__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
});
G__534 = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return G__534__2.call(this,this$,opt);
case 3:
return G__534__3.call(this,this$,opt,opt2);
case 4:
return G__534__4.call(this,this$,opt,opt2,opt3);
case 5:
return G__534__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return G__534__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__534.cljs$core$IFn$_invoke$arity$2 = G__534__2;
G__534.cljs$core$IFn$_invoke$arity$3 = G__534__3;
G__534.cljs$core$IFn$_invoke$arity$4 = G__534__4;
G__534.cljs$core$IFn$_invoke$arity$5 = G__534__5;
G__534.cljs$core$IFn$_invoke$arity$6 = G__534__6;
return G__534;
})()
;
clojure.browser.net.transmit = (function clojure$browser$net$transmit(var_args){
var G__529 = arguments.length;
switch (G__529) {
case 2:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$2 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
return clojure$browser$net$IConnection$transmit$dyn_533.call(null,this$,opt);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt,opt2){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$3 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
return clojure$browser$net$IConnection$transmit$dyn_533.call(null,this$,opt,opt2);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt,opt2,opt3){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$4 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
return clojure$browser$net$IConnection$transmit$dyn_533.call(null,this$,opt,opt2,opt3);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5 = (function (this$,opt,opt2,opt3,opt4){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$5 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
return clojure$browser$net$IConnection$transmit$dyn_533.call(null,this$,opt,opt2,opt3,opt4);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$6 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
return clojure$browser$net$IConnection$transmit$dyn_533.call(null,this$,opt,opt2,opt3,opt4,opt5);
}
}));

(clojure.browser.net.transmit.cljs$lang$maxFixedArity = 6);


var clojure$browser$net$IConnection$close$dyn_536 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.close[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (clojure.browser.net.close["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
});
clojure.browser.net.close = (function clojure$browser$net$close(this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$close$arity$1 == null)))))){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
return clojure$browser$net$IConnection$close$dyn_536.call(null,this$);
}
});

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.call(null,this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
}));

(goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__537){
var vec__538 = p__537;
var k = cljs.core.nth.call(null,vec__538,(0),null);
var v = cljs.core.nth.call(null,vec__538,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
}));
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__541){
var vec__542 = p__541;
var k = cljs.core.nth.call(null,vec__542,(0),null);
var v = cljs.core.nth.call(null,vec__542,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
 * Returns an XhrIo connection
 */
clojure.browser.net.xhr_connection = (function clojure$browser$net$xhr_connection(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
clojure.browser.net.ICrossPageChannel = function(){};

var clojure$browser$net$ICrossPageChannel$register_service$dyn_547 = (function() {
var G__548 = null;
var G__548__3 = (function (this$,service_name,fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,service_name,fn);
} else {
var m__4426__auto__ = (clojure.browser.net.register_service["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,service_name,fn);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
});
var G__548__4 = (function (this$,service_name,fn,encode_json_QMARK_){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,service_name,fn,encode_json_QMARK_);
} else {
var m__4426__auto__ = (clojure.browser.net.register_service["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,service_name,fn,encode_json_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
});
G__548 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return G__548__3.call(this,this$,service_name,fn);
case 4:
return G__548__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__548.cljs$core$IFn$_invoke$arity$3 = G__548__3;
G__548.cljs$core$IFn$_invoke$arity$4 = G__548__4;
return G__548;
})()
;
clojure.browser.net.register_service = (function clojure$browser$net$register_service(var_args){
var G__546 = arguments.length;
switch (G__546) {
case 3:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3 = (function (this$,service_name,fn){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3 == null)))))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
return clojure$browser$net$ICrossPageChannel$register_service$dyn_547.call(null,this$,service_name,fn);
}
}));

(clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4 == null)))))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
return clojure$browser$net$ICrossPageChannel$register_service$dyn_547.call(null,this$,service_name,fn,encode_json_QMARK_);
}
}));

(clojure.browser.net.register_service.cljs$lang$maxFixedArity = 4);


(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.call(null,this$__$1,service_name,fn,false);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,null);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,on_connect_fn,config_iframe_fn,document.body);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name.call(null,service_name),payload);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
}));
/**
 * When passed with a config hash-map, returns a parent
 *   CrossPageChannel object. Keys in the config hash map are downcased
 *   versions of the goog.net.xpc.CfgFields enum keys,
 *   e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
 *   hash.
 * 
 *   When passed with no args, creates a child CrossPageChannel object,
 *   and the config is automatically taken from the URL param 'xpc', as
 *   per the CrossPageChannel API.
 */
clojure.browser.net.xpc_connection = (function clojure$browser$net$xpc_connection(var_args){
var G__551 = arguments.length;
switch (G__551) {
case 0:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5720__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__5720__auto__)){
var config = temp__5720__auto__;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config)));
} else {
return null;
}
}));

(clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__552){
var vec__553 = p__552;
var k = cljs.core.nth.call(null,vec__553,(0),null);
var v = cljs.core.nth.call(null,vec__553,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__5718__auto__)){
var field = temp__5718__auto__;
var G__556 = sum;
goog.object.set(G__556,field,v);

return G__556;
} else {
return sum;
}
}),({}),config)));
}));

(clojure.browser.net.xpc_connection.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
clojure.browser.net.IWebSocket = function(){};

var clojure$browser$net$IWebSocket$open_QMARK_$dyn_560 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (clojure.browser.net.open_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$);
} else {
var m__4426__auto__ = (clojure.browser.net.open_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWebSocket.open?",this$);
}
}
});
clojure.browser.net.open_QMARK_ = (function clojure$browser$net$open_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 == null)))))){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1(this$);
} else {
return clojure$browser$net$IWebSocket$open_QMARK_$dyn_560.call(null,this$);
}
});

(goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,url,null);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
}));

(goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__561){
var vec__562 = p__561;
var k = cljs.core.nth.call(null,vec__562,(0),null);
var v = cljs.core.nth.call(null,vec__562,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.WebSocket.EventType))));
}));
clojure.browser.net.websocket_connection = (function clojure$browser$net$websocket_connection(var_args){
var G__566 = arguments.length;
switch (G__566) {
case 0:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.browser.net.websocket_connection.call(null,null,null);
}));

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return clojure.browser.net.websocket_connection.call(null,auto_reconnect_QMARK_,null);
}));

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
}));

(clojure.browser.net.websocket_connection.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=net.js.map
