// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4284 = (function (f,meta4285){
this.f = f;
this.meta4285 = meta4285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4286,meta4285__$1){
var self__ = this;
var _4286__$1 = this;
return (new cljs.core.async.t_cljs$core$async4284(self__.f,meta4285__$1));
}));

(cljs.core.async.t_cljs$core$async4284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4286){
var self__ = this;
var _4286__$1 = this;
return self__.meta4285;
}));

(cljs.core.async.t_cljs$core$async4284.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async4284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async4284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta4285","meta4285",636643225,null)], null);
}));

(cljs.core.async.t_cljs$core$async4284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4284");

(cljs.core.async.t_cljs$core$async4284.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async4284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4284.
 */
cljs.core.async.__GT_t_cljs$core$async4284 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async4284(f__$1,meta4285){
return (new cljs.core.async.t_cljs$core$async4284(f__$1,meta4285));
});

}

return (new cljs.core.async.t_cljs$core$async4284(f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__4289 = arguments.length;
switch (G__4289) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__4292 = arguments.length;
switch (G__4292) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_4294 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_4294);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_4294);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__4296 = arguments.length;
switch (G__4296) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___4298 = n;
var x_4299 = (0);
while(true){
if((x_4299 < n__4613__auto___4298)){
(a[x_4299] = (0));

var G__4300 = (x_4299 + (1));
x_4299 = G__4300;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__4301 = (i + (1));
i = G__4301;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4302 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4302 = (function (flag,meta4303){
this.flag = flag;
this.meta4303 = meta4303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4304,meta4303__$1){
var self__ = this;
var _4304__$1 = this;
return (new cljs.core.async.t_cljs$core$async4302(self__.flag,meta4303__$1));
}));

(cljs.core.async.t_cljs$core$async4302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4304){
var self__ = this;
var _4304__$1 = this;
return self__.meta4303;
}));

(cljs.core.async.t_cljs$core$async4302.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async4302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async4302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta4303","meta4303",1308115442,null)], null);
}));

(cljs.core.async.t_cljs$core$async4302.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4302");

(cljs.core.async.t_cljs$core$async4302.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async4302");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4302.
 */
cljs.core.async.__GT_t_cljs$core$async4302 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async4302(flag__$1,meta4303){
return (new cljs.core.async.t_cljs$core$async4302(flag__$1,meta4303));
});

}

return (new cljs.core.async.t_cljs$core$async4302(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4305 = (function (flag,cb,meta4306){
this.flag = flag;
this.cb = cb;
this.meta4306 = meta4306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4307,meta4306__$1){
var self__ = this;
var _4307__$1 = this;
return (new cljs.core.async.t_cljs$core$async4305(self__.flag,self__.cb,meta4306__$1));
}));

(cljs.core.async.t_cljs$core$async4305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4307){
var self__ = this;
var _4307__$1 = this;
return self__.meta4306;
}));

(cljs.core.async.t_cljs$core$async4305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async4305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async4305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta4306","meta4306",882905307,null)], null);
}));

(cljs.core.async.t_cljs$core$async4305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4305");

(cljs.core.async.t_cljs$core$async4305.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async4305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4305.
 */
cljs.core.async.__GT_t_cljs$core$async4305 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async4305(flag__$1,cb__$1,meta4306){
return (new cljs.core.async.t_cljs$core$async4305(flag__$1,cb__$1,meta4306));
});

}

return (new cljs.core.async.t_cljs$core$async4305(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4308_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4308_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__4309_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__4309_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__4310 = (i + (1));
i = G__4310;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4316 = arguments.length;
var i__4737__auto___4317 = (0);
while(true){
if((i__4737__auto___4317 < len__4736__auto___4316)){
args__4742__auto__.push((arguments[i__4737__auto___4317]));

var G__4318 = (i__4737__auto___4317 + (1));
i__4737__auto___4317 = G__4318;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__4313){
var map__4314 = p__4313;
var map__4314__$1 = (((((!((map__4314 == null))))?(((((map__4314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4314):map__4314);
var opts = map__4314__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq4311){
var G__4312 = cljs.core.first.call(null,seq4311);
var seq4311__$1 = cljs.core.next.call(null,seq4311);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4312,seq4311__$1);
}));

/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__4320 = arguments.length;
switch (G__4320) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2173__auto___4366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4344){
var state_val_4345 = (state_4344[(1)]);
if((state_val_4345 === (7))){
var inst_4340 = (state_4344[(2)]);
var state_4344__$1 = state_4344;
var statearr_4346_4367 = state_4344__$1;
(statearr_4346_4367[(2)] = inst_4340);

(statearr_4346_4367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (1))){
var state_4344__$1 = state_4344;
var statearr_4347_4368 = state_4344__$1;
(statearr_4347_4368[(2)] = null);

(statearr_4347_4368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (4))){
var inst_4323 = (state_4344[(7)]);
var inst_4323__$1 = (state_4344[(2)]);
var inst_4324 = (inst_4323__$1 == null);
var state_4344__$1 = (function (){var statearr_4348 = state_4344;
(statearr_4348[(7)] = inst_4323__$1);

return statearr_4348;
})();
if(cljs.core.truth_(inst_4324)){
var statearr_4349_4369 = state_4344__$1;
(statearr_4349_4369[(1)] = (5));

} else {
var statearr_4350_4370 = state_4344__$1;
(statearr_4350_4370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (13))){
var state_4344__$1 = state_4344;
var statearr_4351_4371 = state_4344__$1;
(statearr_4351_4371[(2)] = null);

(statearr_4351_4371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (6))){
var inst_4323 = (state_4344[(7)]);
var state_4344__$1 = state_4344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4344__$1,(11),to,inst_4323);
} else {
if((state_val_4345 === (3))){
var inst_4342 = (state_4344[(2)]);
var state_4344__$1 = state_4344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4344__$1,inst_4342);
} else {
if((state_val_4345 === (12))){
var state_4344__$1 = state_4344;
var statearr_4352_4372 = state_4344__$1;
(statearr_4352_4372[(2)] = null);

(statearr_4352_4372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (2))){
var state_4344__$1 = state_4344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4344__$1,(4),from);
} else {
if((state_val_4345 === (11))){
var inst_4333 = (state_4344[(2)]);
var state_4344__$1 = state_4344;
if(cljs.core.truth_(inst_4333)){
var statearr_4353_4373 = state_4344__$1;
(statearr_4353_4373[(1)] = (12));

} else {
var statearr_4354_4374 = state_4344__$1;
(statearr_4354_4374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (9))){
var state_4344__$1 = state_4344;
var statearr_4355_4375 = state_4344__$1;
(statearr_4355_4375[(2)] = null);

(statearr_4355_4375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (5))){
var state_4344__$1 = state_4344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4356_4376 = state_4344__$1;
(statearr_4356_4376[(1)] = (8));

} else {
var statearr_4357_4377 = state_4344__$1;
(statearr_4357_4377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (14))){
var inst_4338 = (state_4344[(2)]);
var state_4344__$1 = state_4344;
var statearr_4358_4378 = state_4344__$1;
(statearr_4358_4378[(2)] = inst_4338);

(statearr_4358_4378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (10))){
var inst_4330 = (state_4344[(2)]);
var state_4344__$1 = state_4344;
var statearr_4359_4379 = state_4344__$1;
(statearr_4359_4379[(2)] = inst_4330);

(statearr_4359_4379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4345 === (8))){
var inst_4327 = cljs.core.async.close_BANG_.call(null,to);
var state_4344__$1 = state_4344;
var statearr_4360_4380 = state_4344__$1;
(statearr_4360_4380[(2)] = inst_4327);

(statearr_4360_4380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_4361 = [null,null,null,null,null,null,null,null];
(statearr_4361[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_4361[(1)] = (1));

return statearr_4361;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_4344){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4362){if((e4362 instanceof Object)){
var ex__2160__auto__ = e4362;
var statearr_4363_4381 = state_4344;
(statearr_4363_4381[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4382 = state_4344;
state_4344 = G__4382;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_4344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_4344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_4364 = f__2174__auto__.call(null);
(statearr_4364[(6)] = c__2173__auto___4366);

return statearr_4364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__4383){
var vec__4384 = p__4383;
var v = cljs.core.nth.call(null,vec__4384,(0),null);
var p = cljs.core.nth.call(null,vec__4384,(1),null);
var job = vec__4384;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2173__auto___4555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4391){
var state_val_4392 = (state_4391[(1)]);
if((state_val_4392 === (1))){
var state_4391__$1 = state_4391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4391__$1,(2),res,v);
} else {
if((state_val_4392 === (2))){
var inst_4388 = (state_4391[(2)]);
var inst_4389 = cljs.core.async.close_BANG_.call(null,res);
var state_4391__$1 = (function (){var statearr_4393 = state_4391;
(statearr_4393[(7)] = inst_4388);

return statearr_4393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4391__$1,inst_4389);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0 = (function (){
var statearr_4394 = [null,null,null,null,null,null,null,null];
(statearr_4394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__);

(statearr_4394[(1)] = (1));

return statearr_4394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1 = (function (state_4391){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4395){if((e4395 instanceof Object)){
var ex__2160__auto__ = e4395;
var statearr_4396_4556 = state_4391;
(statearr_4396_4556[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4557 = state_4391;
state_4391 = G__4557;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = function(state_4391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1.call(this,state_4391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_4397 = f__2174__auto__.call(null);
(statearr_4397[(6)] = c__2173__auto___4555);

return statearr_4397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__4398){
var vec__4399 = p__4398;
var v = cljs.core.nth.call(null,vec__4399,(0),null);
var p = cljs.core.nth.call(null,vec__4399,(1),null);
var job = vec__4399;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___4558 = n;
var __4559 = (0);
while(true){
if((__4559 < n__4613__auto___4558)){
var G__4402_4560 = type;
var G__4402_4561__$1 = (((G__4402_4560 instanceof cljs.core.Keyword))?G__4402_4560.fqn:null);
switch (G__4402_4561__$1) {
case "compute":
var c__2173__auto___4563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4559,c__2173__auto___4563,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async){
return (function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = ((function (__4559,c__2173__auto___4563,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async){
return (function (state_4415){
var state_val_4416 = (state_4415[(1)]);
if((state_val_4416 === (1))){
var state_4415__$1 = state_4415;
var statearr_4417_4564 = state_4415__$1;
(statearr_4417_4564[(2)] = null);

(statearr_4417_4564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4416 === (2))){
var state_4415__$1 = state_4415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4415__$1,(4),jobs);
} else {
if((state_val_4416 === (3))){
var inst_4413 = (state_4415[(2)]);
var state_4415__$1 = state_4415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4415__$1,inst_4413);
} else {
if((state_val_4416 === (4))){
var inst_4405 = (state_4415[(2)]);
var inst_4406 = process.call(null,inst_4405);
var state_4415__$1 = state_4415;
if(cljs.core.truth_(inst_4406)){
var statearr_4418_4565 = state_4415__$1;
(statearr_4418_4565[(1)] = (5));

} else {
var statearr_4419_4566 = state_4415__$1;
(statearr_4419_4566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4416 === (5))){
var state_4415__$1 = state_4415;
var statearr_4420_4567 = state_4415__$1;
(statearr_4420_4567[(2)] = null);

(statearr_4420_4567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4416 === (6))){
var state_4415__$1 = state_4415;
var statearr_4421_4568 = state_4415__$1;
(statearr_4421_4568[(2)] = null);

(statearr_4421_4568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4416 === (7))){
var inst_4411 = (state_4415[(2)]);
var state_4415__$1 = state_4415;
var statearr_4422_4569 = state_4415__$1;
(statearr_4422_4569[(2)] = inst_4411);

(statearr_4422_4569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4559,c__2173__auto___4563,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async))
;
return ((function (__4559,switch__2156__auto__,c__2173__auto___4563,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0 = (function (){
var statearr_4423 = [null,null,null,null,null,null,null];
(statearr_4423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__);

(statearr_4423[(1)] = (1));

return statearr_4423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1 = (function (state_4415){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4424){if((e4424 instanceof Object)){
var ex__2160__auto__ = e4424;
var statearr_4425_4570 = state_4415;
(statearr_4425_4570[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4571 = state_4415;
state_4415 = G__4571;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = function(state_4415){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1.call(this,state_4415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__;
})()
;})(__4559,switch__2156__auto__,c__2173__auto___4563,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async))
})();
var state__2175__auto__ = (function (){var statearr_4426 = f__2174__auto__.call(null);
(statearr_4426[(6)] = c__2173__auto___4563);

return statearr_4426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
});})(__4559,c__2173__auto___4563,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async))
);


break;
case "async":
var c__2173__auto___4572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4559,c__2173__auto___4572,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async){
return (function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = ((function (__4559,c__2173__auto___4572,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async){
return (function (state_4439){
var state_val_4440 = (state_4439[(1)]);
if((state_val_4440 === (1))){
var state_4439__$1 = state_4439;
var statearr_4441_4573 = state_4439__$1;
(statearr_4441_4573[(2)] = null);

(statearr_4441_4573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4440 === (2))){
var state_4439__$1 = state_4439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4439__$1,(4),jobs);
} else {
if((state_val_4440 === (3))){
var inst_4437 = (state_4439[(2)]);
var state_4439__$1 = state_4439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4439__$1,inst_4437);
} else {
if((state_val_4440 === (4))){
var inst_4429 = (state_4439[(2)]);
var inst_4430 = async.call(null,inst_4429);
var state_4439__$1 = state_4439;
if(cljs.core.truth_(inst_4430)){
var statearr_4442_4574 = state_4439__$1;
(statearr_4442_4574[(1)] = (5));

} else {
var statearr_4443_4575 = state_4439__$1;
(statearr_4443_4575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4440 === (5))){
var state_4439__$1 = state_4439;
var statearr_4444_4576 = state_4439__$1;
(statearr_4444_4576[(2)] = null);

(statearr_4444_4576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4440 === (6))){
var state_4439__$1 = state_4439;
var statearr_4445_4577 = state_4439__$1;
(statearr_4445_4577[(2)] = null);

(statearr_4445_4577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4440 === (7))){
var inst_4435 = (state_4439[(2)]);
var state_4439__$1 = state_4439;
var statearr_4446_4578 = state_4439__$1;
(statearr_4446_4578[(2)] = inst_4435);

(statearr_4446_4578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4559,c__2173__auto___4572,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async))
;
return ((function (__4559,switch__2156__auto__,c__2173__auto___4572,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0 = (function (){
var statearr_4447 = [null,null,null,null,null,null,null];
(statearr_4447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__);

(statearr_4447[(1)] = (1));

return statearr_4447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1 = (function (state_4439){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4448){if((e4448 instanceof Object)){
var ex__2160__auto__ = e4448;
var statearr_4449_4579 = state_4439;
(statearr_4449_4579[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4580 = state_4439;
state_4439 = G__4580;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = function(state_4439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1.call(this,state_4439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__;
})()
;})(__4559,switch__2156__auto__,c__2173__auto___4572,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async))
})();
var state__2175__auto__ = (function (){var statearr_4450 = f__2174__auto__.call(null);
(statearr_4450[(6)] = c__2173__auto___4572);

return statearr_4450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
});})(__4559,c__2173__auto___4572,G__4402_4560,G__4402_4561__$1,n__4613__auto___4558,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4402_4561__$1)].join('')));

}

var G__4581 = (__4559 + (1));
__4559 = G__4581;
continue;
} else {
}
break;
}

var c__2173__auto___4582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4472){
var state_val_4473 = (state_4472[(1)]);
if((state_val_4473 === (7))){
var inst_4468 = (state_4472[(2)]);
var state_4472__$1 = state_4472;
var statearr_4474_4583 = state_4472__$1;
(statearr_4474_4583[(2)] = inst_4468);

(statearr_4474_4583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4473 === (1))){
var state_4472__$1 = state_4472;
var statearr_4475_4584 = state_4472__$1;
(statearr_4475_4584[(2)] = null);

(statearr_4475_4584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4473 === (4))){
var inst_4453 = (state_4472[(7)]);
var inst_4453__$1 = (state_4472[(2)]);
var inst_4454 = (inst_4453__$1 == null);
var state_4472__$1 = (function (){var statearr_4476 = state_4472;
(statearr_4476[(7)] = inst_4453__$1);

return statearr_4476;
})();
if(cljs.core.truth_(inst_4454)){
var statearr_4477_4585 = state_4472__$1;
(statearr_4477_4585[(1)] = (5));

} else {
var statearr_4478_4586 = state_4472__$1;
(statearr_4478_4586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4473 === (6))){
var inst_4453 = (state_4472[(7)]);
var inst_4458 = (state_4472[(8)]);
var inst_4458__$1 = cljs.core.async.chan.call(null,(1));
var inst_4459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4460 = [inst_4453,inst_4458__$1];
var inst_4461 = (new cljs.core.PersistentVector(null,2,(5),inst_4459,inst_4460,null));
var state_4472__$1 = (function (){var statearr_4479 = state_4472;
(statearr_4479[(8)] = inst_4458__$1);

return statearr_4479;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4472__$1,(8),jobs,inst_4461);
} else {
if((state_val_4473 === (3))){
var inst_4470 = (state_4472[(2)]);
var state_4472__$1 = state_4472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4472__$1,inst_4470);
} else {
if((state_val_4473 === (2))){
var state_4472__$1 = state_4472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4472__$1,(4),from);
} else {
if((state_val_4473 === (9))){
var inst_4465 = (state_4472[(2)]);
var state_4472__$1 = (function (){var statearr_4480 = state_4472;
(statearr_4480[(9)] = inst_4465);

return statearr_4480;
})();
var statearr_4481_4587 = state_4472__$1;
(statearr_4481_4587[(2)] = null);

(statearr_4481_4587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4473 === (5))){
var inst_4456 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4472__$1 = state_4472;
var statearr_4482_4588 = state_4472__$1;
(statearr_4482_4588[(2)] = inst_4456);

(statearr_4482_4588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4473 === (8))){
var inst_4458 = (state_4472[(8)]);
var inst_4463 = (state_4472[(2)]);
var state_4472__$1 = (function (){var statearr_4483 = state_4472;
(statearr_4483[(10)] = inst_4463);

return statearr_4483;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4472__$1,(9),results,inst_4458);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0 = (function (){
var statearr_4484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__);

(statearr_4484[(1)] = (1));

return statearr_4484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1 = (function (state_4472){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4485){if((e4485 instanceof Object)){
var ex__2160__auto__ = e4485;
var statearr_4486_4589 = state_4472;
(statearr_4486_4589[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4590 = state_4472;
state_4472 = G__4590;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = function(state_4472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1.call(this,state_4472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_4487 = f__2174__auto__.call(null);
(statearr_4487[(6)] = c__2173__auto___4582);

return statearr_4487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


var c__2173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4525){
var state_val_4526 = (state_4525[(1)]);
if((state_val_4526 === (7))){
var inst_4521 = (state_4525[(2)]);
var state_4525__$1 = state_4525;
var statearr_4527_4591 = state_4525__$1;
(statearr_4527_4591[(2)] = inst_4521);

(statearr_4527_4591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (20))){
var state_4525__$1 = state_4525;
var statearr_4528_4592 = state_4525__$1;
(statearr_4528_4592[(2)] = null);

(statearr_4528_4592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (1))){
var state_4525__$1 = state_4525;
var statearr_4529_4593 = state_4525__$1;
(statearr_4529_4593[(2)] = null);

(statearr_4529_4593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (4))){
var inst_4490 = (state_4525[(7)]);
var inst_4490__$1 = (state_4525[(2)]);
var inst_4491 = (inst_4490__$1 == null);
var state_4525__$1 = (function (){var statearr_4530 = state_4525;
(statearr_4530[(7)] = inst_4490__$1);

return statearr_4530;
})();
if(cljs.core.truth_(inst_4491)){
var statearr_4531_4594 = state_4525__$1;
(statearr_4531_4594[(1)] = (5));

} else {
var statearr_4532_4595 = state_4525__$1;
(statearr_4532_4595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (15))){
var inst_4503 = (state_4525[(8)]);
var state_4525__$1 = state_4525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4525__$1,(18),to,inst_4503);
} else {
if((state_val_4526 === (21))){
var inst_4516 = (state_4525[(2)]);
var state_4525__$1 = state_4525;
var statearr_4533_4596 = state_4525__$1;
(statearr_4533_4596[(2)] = inst_4516);

(statearr_4533_4596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (13))){
var inst_4518 = (state_4525[(2)]);
var state_4525__$1 = (function (){var statearr_4534 = state_4525;
(statearr_4534[(9)] = inst_4518);

return statearr_4534;
})();
var statearr_4535_4597 = state_4525__$1;
(statearr_4535_4597[(2)] = null);

(statearr_4535_4597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (6))){
var inst_4490 = (state_4525[(7)]);
var state_4525__$1 = state_4525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4525__$1,(11),inst_4490);
} else {
if((state_val_4526 === (17))){
var inst_4511 = (state_4525[(2)]);
var state_4525__$1 = state_4525;
if(cljs.core.truth_(inst_4511)){
var statearr_4536_4598 = state_4525__$1;
(statearr_4536_4598[(1)] = (19));

} else {
var statearr_4537_4599 = state_4525__$1;
(statearr_4537_4599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (3))){
var inst_4523 = (state_4525[(2)]);
var state_4525__$1 = state_4525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4525__$1,inst_4523);
} else {
if((state_val_4526 === (12))){
var inst_4500 = (state_4525[(10)]);
var state_4525__$1 = state_4525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4525__$1,(14),inst_4500);
} else {
if((state_val_4526 === (2))){
var state_4525__$1 = state_4525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4525__$1,(4),results);
} else {
if((state_val_4526 === (19))){
var state_4525__$1 = state_4525;
var statearr_4538_4600 = state_4525__$1;
(statearr_4538_4600[(2)] = null);

(statearr_4538_4600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (11))){
var inst_4500 = (state_4525[(2)]);
var state_4525__$1 = (function (){var statearr_4539 = state_4525;
(statearr_4539[(10)] = inst_4500);

return statearr_4539;
})();
var statearr_4540_4601 = state_4525__$1;
(statearr_4540_4601[(2)] = null);

(statearr_4540_4601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (9))){
var state_4525__$1 = state_4525;
var statearr_4541_4602 = state_4525__$1;
(statearr_4541_4602[(2)] = null);

(statearr_4541_4602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (5))){
var state_4525__$1 = state_4525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4542_4603 = state_4525__$1;
(statearr_4542_4603[(1)] = (8));

} else {
var statearr_4543_4604 = state_4525__$1;
(statearr_4543_4604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (14))){
var inst_4503 = (state_4525[(8)]);
var inst_4503__$1 = (state_4525[(2)]);
var inst_4504 = (inst_4503__$1 == null);
var inst_4505 = cljs.core.not.call(null,inst_4504);
var state_4525__$1 = (function (){var statearr_4544 = state_4525;
(statearr_4544[(8)] = inst_4503__$1);

return statearr_4544;
})();
if(inst_4505){
var statearr_4545_4605 = state_4525__$1;
(statearr_4545_4605[(1)] = (15));

} else {
var statearr_4546_4606 = state_4525__$1;
(statearr_4546_4606[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (16))){
var state_4525__$1 = state_4525;
var statearr_4547_4607 = state_4525__$1;
(statearr_4547_4607[(2)] = false);

(statearr_4547_4607[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (10))){
var inst_4497 = (state_4525[(2)]);
var state_4525__$1 = state_4525;
var statearr_4548_4608 = state_4525__$1;
(statearr_4548_4608[(2)] = inst_4497);

(statearr_4548_4608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (18))){
var inst_4508 = (state_4525[(2)]);
var state_4525__$1 = state_4525;
var statearr_4549_4609 = state_4525__$1;
(statearr_4549_4609[(2)] = inst_4508);

(statearr_4549_4609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4526 === (8))){
var inst_4494 = cljs.core.async.close_BANG_.call(null,to);
var state_4525__$1 = state_4525;
var statearr_4550_4610 = state_4525__$1;
(statearr_4550_4610[(2)] = inst_4494);

(statearr_4550_4610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0 = (function (){
var statearr_4551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__);

(statearr_4551[(1)] = (1));

return statearr_4551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1 = (function (state_4525){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4552){if((e4552 instanceof Object)){
var ex__2160__auto__ = e4552;
var statearr_4553_4611 = state_4525;
(statearr_4553_4611[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4612 = state_4525;
state_4525 = G__4612;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__ = function(state_4525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1.call(this,state_4525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2157__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_4554 = f__2174__auto__.call(null);
(statearr_4554[(6)] = c__2173__auto__);

return statearr_4554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));

return c__2173__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__4614 = arguments.length;
switch (G__4614) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__4617 = arguments.length;
switch (G__4617) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__4620 = arguments.length;
switch (G__4620) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2173__auto___4669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4646){
var state_val_4647 = (state_4646[(1)]);
if((state_val_4647 === (7))){
var inst_4642 = (state_4646[(2)]);
var state_4646__$1 = state_4646;
var statearr_4648_4670 = state_4646__$1;
(statearr_4648_4670[(2)] = inst_4642);

(statearr_4648_4670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (1))){
var state_4646__$1 = state_4646;
var statearr_4649_4671 = state_4646__$1;
(statearr_4649_4671[(2)] = null);

(statearr_4649_4671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (4))){
var inst_4623 = (state_4646[(7)]);
var inst_4623__$1 = (state_4646[(2)]);
var inst_4624 = (inst_4623__$1 == null);
var state_4646__$1 = (function (){var statearr_4650 = state_4646;
(statearr_4650[(7)] = inst_4623__$1);

return statearr_4650;
})();
if(cljs.core.truth_(inst_4624)){
var statearr_4651_4672 = state_4646__$1;
(statearr_4651_4672[(1)] = (5));

} else {
var statearr_4652_4673 = state_4646__$1;
(statearr_4652_4673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (13))){
var state_4646__$1 = state_4646;
var statearr_4653_4674 = state_4646__$1;
(statearr_4653_4674[(2)] = null);

(statearr_4653_4674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (6))){
var inst_4623 = (state_4646[(7)]);
var inst_4629 = p.call(null,inst_4623);
var state_4646__$1 = state_4646;
if(cljs.core.truth_(inst_4629)){
var statearr_4654_4675 = state_4646__$1;
(statearr_4654_4675[(1)] = (9));

} else {
var statearr_4655_4676 = state_4646__$1;
(statearr_4655_4676[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (3))){
var inst_4644 = (state_4646[(2)]);
var state_4646__$1 = state_4646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4646__$1,inst_4644);
} else {
if((state_val_4647 === (12))){
var state_4646__$1 = state_4646;
var statearr_4656_4677 = state_4646__$1;
(statearr_4656_4677[(2)] = null);

(statearr_4656_4677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (2))){
var state_4646__$1 = state_4646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4646__$1,(4),ch);
} else {
if((state_val_4647 === (11))){
var inst_4623 = (state_4646[(7)]);
var inst_4633 = (state_4646[(2)]);
var state_4646__$1 = state_4646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4646__$1,(8),inst_4633,inst_4623);
} else {
if((state_val_4647 === (9))){
var state_4646__$1 = state_4646;
var statearr_4657_4678 = state_4646__$1;
(statearr_4657_4678[(2)] = tc);

(statearr_4657_4678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (5))){
var inst_4626 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4627 = cljs.core.async.close_BANG_.call(null,fc);
var state_4646__$1 = (function (){var statearr_4658 = state_4646;
(statearr_4658[(8)] = inst_4626);

return statearr_4658;
})();
var statearr_4659_4679 = state_4646__$1;
(statearr_4659_4679[(2)] = inst_4627);

(statearr_4659_4679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (14))){
var inst_4640 = (state_4646[(2)]);
var state_4646__$1 = state_4646;
var statearr_4660_4680 = state_4646__$1;
(statearr_4660_4680[(2)] = inst_4640);

(statearr_4660_4680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (10))){
var state_4646__$1 = state_4646;
var statearr_4661_4681 = state_4646__$1;
(statearr_4661_4681[(2)] = fc);

(statearr_4661_4681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4647 === (8))){
var inst_4635 = (state_4646[(2)]);
var state_4646__$1 = state_4646;
if(cljs.core.truth_(inst_4635)){
var statearr_4662_4682 = state_4646__$1;
(statearr_4662_4682[(1)] = (12));

} else {
var statearr_4663_4683 = state_4646__$1;
(statearr_4663_4683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_4664 = [null,null,null,null,null,null,null,null,null];
(statearr_4664[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_4664[(1)] = (1));

return statearr_4664;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_4646){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4665){if((e4665 instanceof Object)){
var ex__2160__auto__ = e4665;
var statearr_4666_4684 = state_4646;
(statearr_4666_4684[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4685 = state_4646;
state_4646 = G__4685;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_4646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_4646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_4667 = f__2174__auto__.call(null);
(statearr_4667[(6)] = c__2173__auto___4669);

return statearr_4667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__2173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4700){
var state_val_4701 = (state_4700[(1)]);
if((state_val_4701 === (1))){
var inst_4686 = init;
var state_4700__$1 = (function (){var statearr_4702 = state_4700;
(statearr_4702[(7)] = inst_4686);

return statearr_4702;
})();
var statearr_4703_4715 = state_4700__$1;
(statearr_4703_4715[(2)] = null);

(statearr_4703_4715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4701 === (2))){
var state_4700__$1 = state_4700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4700__$1,(4),ch);
} else {
if((state_val_4701 === (3))){
var inst_4698 = (state_4700[(2)]);
var state_4700__$1 = state_4700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4700__$1,inst_4698);
} else {
if((state_val_4701 === (4))){
var inst_4689 = (state_4700[(8)]);
var inst_4689__$1 = (state_4700[(2)]);
var inst_4690 = (inst_4689__$1 == null);
var state_4700__$1 = (function (){var statearr_4704 = state_4700;
(statearr_4704[(8)] = inst_4689__$1);

return statearr_4704;
})();
if(cljs.core.truth_(inst_4690)){
var statearr_4705_4716 = state_4700__$1;
(statearr_4705_4716[(1)] = (5));

} else {
var statearr_4706_4717 = state_4700__$1;
(statearr_4706_4717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4701 === (5))){
var inst_4686 = (state_4700[(7)]);
var state_4700__$1 = state_4700;
var statearr_4707_4718 = state_4700__$1;
(statearr_4707_4718[(2)] = inst_4686);

(statearr_4707_4718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4701 === (6))){
var inst_4686 = (state_4700[(7)]);
var inst_4689 = (state_4700[(8)]);
var inst_4693 = f.call(null,inst_4686,inst_4689);
var inst_4686__$1 = inst_4693;
var state_4700__$1 = (function (){var statearr_4708 = state_4700;
(statearr_4708[(7)] = inst_4686__$1);

return statearr_4708;
})();
var statearr_4709_4719 = state_4700__$1;
(statearr_4709_4719[(2)] = null);

(statearr_4709_4719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4701 === (7))){
var inst_4696 = (state_4700[(2)]);
var state_4700__$1 = state_4700;
var statearr_4710_4720 = state_4700__$1;
(statearr_4710_4720[(2)] = inst_4696);

(statearr_4710_4720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__2157__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2157__auto____0 = (function (){
var statearr_4711 = [null,null,null,null,null,null,null,null,null];
(statearr_4711[(0)] = cljs$core$async$reduce_$_state_machine__2157__auto__);

(statearr_4711[(1)] = (1));

return statearr_4711;
});
var cljs$core$async$reduce_$_state_machine__2157__auto____1 = (function (state_4700){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4712){if((e4712 instanceof Object)){
var ex__2160__auto__ = e4712;
var statearr_4713_4721 = state_4700;
(statearr_4713_4721[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4722 = state_4700;
state_4700 = G__4722;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2157__auto__ = function(state_4700){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2157__auto____1.call(this,state_4700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2157__auto____0;
cljs$core$async$reduce_$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2157__auto____1;
return cljs$core$async$reduce_$_state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_4714 = f__2174__auto__.call(null);
(statearr_4714[(6)] = c__2173__auto__);

return statearr_4714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));

return c__2173__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__4724 = arguments.length;
switch (G__4724) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4749){
var state_val_4750 = (state_4749[(1)]);
if((state_val_4750 === (7))){
var inst_4731 = (state_4749[(2)]);
var state_4749__$1 = state_4749;
var statearr_4751_4772 = state_4749__$1;
(statearr_4751_4772[(2)] = inst_4731);

(statearr_4751_4772[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (1))){
var inst_4725 = cljs.core.seq.call(null,coll);
var inst_4726 = inst_4725;
var state_4749__$1 = (function (){var statearr_4752 = state_4749;
(statearr_4752[(7)] = inst_4726);

return statearr_4752;
})();
var statearr_4753_4773 = state_4749__$1;
(statearr_4753_4773[(2)] = null);

(statearr_4753_4773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (4))){
var inst_4726 = (state_4749[(7)]);
var inst_4729 = cljs.core.first.call(null,inst_4726);
var state_4749__$1 = state_4749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4749__$1,(7),ch,inst_4729);
} else {
if((state_val_4750 === (13))){
var inst_4743 = (state_4749[(2)]);
var state_4749__$1 = state_4749;
var statearr_4754_4774 = state_4749__$1;
(statearr_4754_4774[(2)] = inst_4743);

(statearr_4754_4774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (6))){
var inst_4734 = (state_4749[(2)]);
var state_4749__$1 = state_4749;
if(cljs.core.truth_(inst_4734)){
var statearr_4755_4775 = state_4749__$1;
(statearr_4755_4775[(1)] = (8));

} else {
var statearr_4756_4776 = state_4749__$1;
(statearr_4756_4776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (3))){
var inst_4747 = (state_4749[(2)]);
var state_4749__$1 = state_4749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4749__$1,inst_4747);
} else {
if((state_val_4750 === (12))){
var state_4749__$1 = state_4749;
var statearr_4757_4777 = state_4749__$1;
(statearr_4757_4777[(2)] = null);

(statearr_4757_4777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (2))){
var inst_4726 = (state_4749[(7)]);
var state_4749__$1 = state_4749;
if(cljs.core.truth_(inst_4726)){
var statearr_4758_4778 = state_4749__$1;
(statearr_4758_4778[(1)] = (4));

} else {
var statearr_4759_4779 = state_4749__$1;
(statearr_4759_4779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (11))){
var inst_4740 = cljs.core.async.close_BANG_.call(null,ch);
var state_4749__$1 = state_4749;
var statearr_4760_4780 = state_4749__$1;
(statearr_4760_4780[(2)] = inst_4740);

(statearr_4760_4780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (9))){
var state_4749__$1 = state_4749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4761_4781 = state_4749__$1;
(statearr_4761_4781[(1)] = (11));

} else {
var statearr_4762_4782 = state_4749__$1;
(statearr_4762_4782[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (5))){
var inst_4726 = (state_4749[(7)]);
var state_4749__$1 = state_4749;
var statearr_4763_4783 = state_4749__$1;
(statearr_4763_4783[(2)] = inst_4726);

(statearr_4763_4783[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (10))){
var inst_4745 = (state_4749[(2)]);
var state_4749__$1 = state_4749;
var statearr_4764_4784 = state_4749__$1;
(statearr_4764_4784[(2)] = inst_4745);

(statearr_4764_4784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4750 === (8))){
var inst_4726 = (state_4749[(7)]);
var inst_4736 = cljs.core.next.call(null,inst_4726);
var inst_4726__$1 = inst_4736;
var state_4749__$1 = (function (){var statearr_4765 = state_4749;
(statearr_4765[(7)] = inst_4726__$1);

return statearr_4765;
})();
var statearr_4766_4785 = state_4749__$1;
(statearr_4766_4785[(2)] = null);

(statearr_4766_4785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_4767 = [null,null,null,null,null,null,null,null];
(statearr_4767[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_4767[(1)] = (1));

return statearr_4767;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_4749){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e4768){if((e4768 instanceof Object)){
var ex__2160__auto__ = e4768;
var statearr_4769_4786 = state_4749;
(statearr_4769_4786[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4787 = state_4749;
state_4749 = G__4787;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_4749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_4749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_4770 = f__2174__auto__.call(null);
(statearr_4770[(6)] = c__2173__auto__);

return statearr_4770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));

return c__2173__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_4788 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_4788.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_4789 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_4789.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_4790 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_4790.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_4791 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_4791.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4792 = (function (ch,cs,meta4793){
this.ch = ch;
this.cs = cs;
this.meta4793 = meta4793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4794,meta4793__$1){
var self__ = this;
var _4794__$1 = this;
return (new cljs.core.async.t_cljs$core$async4792(self__.ch,self__.cs,meta4793__$1));
}));

(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4794){
var self__ = this;
var _4794__$1 = this;
return self__.meta4793;
}));

(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async4792.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async4792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4793","meta4793",2042875164,null)], null);
}));

(cljs.core.async.t_cljs$core$async4792.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async4792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4792");

(cljs.core.async.t_cljs$core$async4792.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async4792");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4792.
 */
cljs.core.async.__GT_t_cljs$core$async4792 = (function cljs$core$async$mult_$___GT_t_cljs$core$async4792(ch__$1,cs__$1,meta4793){
return (new cljs.core.async.t_cljs$core$async4792(ch__$1,cs__$1,meta4793));
});

}

return (new cljs.core.async.t_cljs$core$async4792(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__2173__auto___5014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_4929){
var state_val_4930 = (state_4929[(1)]);
if((state_val_4930 === (7))){
var inst_4925 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4931_5015 = state_4929__$1;
(statearr_4931_5015[(2)] = inst_4925);

(statearr_4931_5015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (20))){
var inst_4828 = (state_4929[(7)]);
var inst_4840 = cljs.core.first.call(null,inst_4828);
var inst_4841 = cljs.core.nth.call(null,inst_4840,(0),null);
var inst_4842 = cljs.core.nth.call(null,inst_4840,(1),null);
var state_4929__$1 = (function (){var statearr_4932 = state_4929;
(statearr_4932[(8)] = inst_4841);

return statearr_4932;
})();
if(cljs.core.truth_(inst_4842)){
var statearr_4933_5016 = state_4929__$1;
(statearr_4933_5016[(1)] = (22));

} else {
var statearr_4934_5017 = state_4929__$1;
(statearr_4934_5017[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (27))){
var inst_4870 = (state_4929[(9)]);
var inst_4877 = (state_4929[(10)]);
var inst_4797 = (state_4929[(11)]);
var inst_4872 = (state_4929[(12)]);
var inst_4877__$1 = cljs.core._nth.call(null,inst_4870,inst_4872);
var inst_4878 = cljs.core.async.put_BANG_.call(null,inst_4877__$1,inst_4797,done);
var state_4929__$1 = (function (){var statearr_4935 = state_4929;
(statearr_4935[(10)] = inst_4877__$1);

return statearr_4935;
})();
if(cljs.core.truth_(inst_4878)){
var statearr_4936_5018 = state_4929__$1;
(statearr_4936_5018[(1)] = (30));

} else {
var statearr_4937_5019 = state_4929__$1;
(statearr_4937_5019[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (1))){
var state_4929__$1 = state_4929;
var statearr_4938_5020 = state_4929__$1;
(statearr_4938_5020[(2)] = null);

(statearr_4938_5020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (24))){
var inst_4828 = (state_4929[(7)]);
var inst_4847 = (state_4929[(2)]);
var inst_4848 = cljs.core.next.call(null,inst_4828);
var inst_4806 = inst_4848;
var inst_4807 = null;
var inst_4808 = (0);
var inst_4809 = (0);
var state_4929__$1 = (function (){var statearr_4939 = state_4929;
(statearr_4939[(13)] = inst_4808);

(statearr_4939[(14)] = inst_4806);

(statearr_4939[(15)] = inst_4847);

(statearr_4939[(16)] = inst_4809);

(statearr_4939[(17)] = inst_4807);

return statearr_4939;
})();
var statearr_4940_5021 = state_4929__$1;
(statearr_4940_5021[(2)] = null);

(statearr_4940_5021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (39))){
var state_4929__$1 = state_4929;
var statearr_4944_5022 = state_4929__$1;
(statearr_4944_5022[(2)] = null);

(statearr_4944_5022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (4))){
var inst_4797 = (state_4929[(11)]);
var inst_4797__$1 = (state_4929[(2)]);
var inst_4798 = (inst_4797__$1 == null);
var state_4929__$1 = (function (){var statearr_4945 = state_4929;
(statearr_4945[(11)] = inst_4797__$1);

return statearr_4945;
})();
if(cljs.core.truth_(inst_4798)){
var statearr_4946_5023 = state_4929__$1;
(statearr_4946_5023[(1)] = (5));

} else {
var statearr_4947_5024 = state_4929__$1;
(statearr_4947_5024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (15))){
var inst_4808 = (state_4929[(13)]);
var inst_4806 = (state_4929[(14)]);
var inst_4809 = (state_4929[(16)]);
var inst_4807 = (state_4929[(17)]);
var inst_4824 = (state_4929[(2)]);
var inst_4825 = (inst_4809 + (1));
var tmp4941 = inst_4808;
var tmp4942 = inst_4806;
var tmp4943 = inst_4807;
var inst_4806__$1 = tmp4942;
var inst_4807__$1 = tmp4943;
var inst_4808__$1 = tmp4941;
var inst_4809__$1 = inst_4825;
var state_4929__$1 = (function (){var statearr_4948 = state_4929;
(statearr_4948[(13)] = inst_4808__$1);

(statearr_4948[(14)] = inst_4806__$1);

(statearr_4948[(16)] = inst_4809__$1);

(statearr_4948[(17)] = inst_4807__$1);

(statearr_4948[(18)] = inst_4824);

return statearr_4948;
})();
var statearr_4949_5025 = state_4929__$1;
(statearr_4949_5025[(2)] = null);

(statearr_4949_5025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (21))){
var inst_4851 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4953_5026 = state_4929__$1;
(statearr_4953_5026[(2)] = inst_4851);

(statearr_4953_5026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (31))){
var inst_4877 = (state_4929[(10)]);
var inst_4881 = done.call(null,null);
var inst_4882 = cljs.core.async.untap_STAR_.call(null,m,inst_4877);
var state_4929__$1 = (function (){var statearr_4954 = state_4929;
(statearr_4954[(19)] = inst_4881);

return statearr_4954;
})();
var statearr_4955_5027 = state_4929__$1;
(statearr_4955_5027[(2)] = inst_4882);

(statearr_4955_5027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (32))){
var inst_4870 = (state_4929[(9)]);
var inst_4869 = (state_4929[(20)]);
var inst_4872 = (state_4929[(12)]);
var inst_4871 = (state_4929[(21)]);
var inst_4884 = (state_4929[(2)]);
var inst_4885 = (inst_4872 + (1));
var tmp4950 = inst_4870;
var tmp4951 = inst_4869;
var tmp4952 = inst_4871;
var inst_4869__$1 = tmp4951;
var inst_4870__$1 = tmp4950;
var inst_4871__$1 = tmp4952;
var inst_4872__$1 = inst_4885;
var state_4929__$1 = (function (){var statearr_4956 = state_4929;
(statearr_4956[(9)] = inst_4870__$1);

(statearr_4956[(20)] = inst_4869__$1);

(statearr_4956[(22)] = inst_4884);

(statearr_4956[(12)] = inst_4872__$1);

(statearr_4956[(21)] = inst_4871__$1);

return statearr_4956;
})();
var statearr_4957_5028 = state_4929__$1;
(statearr_4957_5028[(2)] = null);

(statearr_4957_5028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (40))){
var inst_4897 = (state_4929[(23)]);
var inst_4901 = done.call(null,null);
var inst_4902 = cljs.core.async.untap_STAR_.call(null,m,inst_4897);
var state_4929__$1 = (function (){var statearr_4958 = state_4929;
(statearr_4958[(24)] = inst_4901);

return statearr_4958;
})();
var statearr_4959_5029 = state_4929__$1;
(statearr_4959_5029[(2)] = inst_4902);

(statearr_4959_5029[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (33))){
var inst_4888 = (state_4929[(25)]);
var inst_4890 = cljs.core.chunked_seq_QMARK_.call(null,inst_4888);
var state_4929__$1 = state_4929;
if(inst_4890){
var statearr_4960_5030 = state_4929__$1;
(statearr_4960_5030[(1)] = (36));

} else {
var statearr_4961_5031 = state_4929__$1;
(statearr_4961_5031[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (13))){
var inst_4818 = (state_4929[(26)]);
var inst_4821 = cljs.core.async.close_BANG_.call(null,inst_4818);
var state_4929__$1 = state_4929;
var statearr_4962_5032 = state_4929__$1;
(statearr_4962_5032[(2)] = inst_4821);

(statearr_4962_5032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (22))){
var inst_4841 = (state_4929[(8)]);
var inst_4844 = cljs.core.async.close_BANG_.call(null,inst_4841);
var state_4929__$1 = state_4929;
var statearr_4963_5033 = state_4929__$1;
(statearr_4963_5033[(2)] = inst_4844);

(statearr_4963_5033[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (36))){
var inst_4888 = (state_4929[(25)]);
var inst_4892 = cljs.core.chunk_first.call(null,inst_4888);
var inst_4893 = cljs.core.chunk_rest.call(null,inst_4888);
var inst_4894 = cljs.core.count.call(null,inst_4892);
var inst_4869 = inst_4893;
var inst_4870 = inst_4892;
var inst_4871 = inst_4894;
var inst_4872 = (0);
var state_4929__$1 = (function (){var statearr_4964 = state_4929;
(statearr_4964[(9)] = inst_4870);

(statearr_4964[(20)] = inst_4869);

(statearr_4964[(12)] = inst_4872);

(statearr_4964[(21)] = inst_4871);

return statearr_4964;
})();
var statearr_4965_5034 = state_4929__$1;
(statearr_4965_5034[(2)] = null);

(statearr_4965_5034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (41))){
var inst_4888 = (state_4929[(25)]);
var inst_4904 = (state_4929[(2)]);
var inst_4905 = cljs.core.next.call(null,inst_4888);
var inst_4869 = inst_4905;
var inst_4870 = null;
var inst_4871 = (0);
var inst_4872 = (0);
var state_4929__$1 = (function (){var statearr_4966 = state_4929;
(statearr_4966[(9)] = inst_4870);

(statearr_4966[(20)] = inst_4869);

(statearr_4966[(27)] = inst_4904);

(statearr_4966[(12)] = inst_4872);

(statearr_4966[(21)] = inst_4871);

return statearr_4966;
})();
var statearr_4967_5035 = state_4929__$1;
(statearr_4967_5035[(2)] = null);

(statearr_4967_5035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (43))){
var state_4929__$1 = state_4929;
var statearr_4968_5036 = state_4929__$1;
(statearr_4968_5036[(2)] = null);

(statearr_4968_5036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (29))){
var inst_4913 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4969_5037 = state_4929__$1;
(statearr_4969_5037[(2)] = inst_4913);

(statearr_4969_5037[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (44))){
var inst_4922 = (state_4929[(2)]);
var state_4929__$1 = (function (){var statearr_4970 = state_4929;
(statearr_4970[(28)] = inst_4922);

return statearr_4970;
})();
var statearr_4971_5038 = state_4929__$1;
(statearr_4971_5038[(2)] = null);

(statearr_4971_5038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (6))){
var inst_4861 = (state_4929[(29)]);
var inst_4860 = cljs.core.deref.call(null,cs);
var inst_4861__$1 = cljs.core.keys.call(null,inst_4860);
var inst_4862 = cljs.core.count.call(null,inst_4861__$1);
var inst_4863 = cljs.core.reset_BANG_.call(null,dctr,inst_4862);
var inst_4868 = cljs.core.seq.call(null,inst_4861__$1);
var inst_4869 = inst_4868;
var inst_4870 = null;
var inst_4871 = (0);
var inst_4872 = (0);
var state_4929__$1 = (function (){var statearr_4972 = state_4929;
(statearr_4972[(29)] = inst_4861__$1);

(statearr_4972[(30)] = inst_4863);

(statearr_4972[(9)] = inst_4870);

(statearr_4972[(20)] = inst_4869);

(statearr_4972[(12)] = inst_4872);

(statearr_4972[(21)] = inst_4871);

return statearr_4972;
})();
var statearr_4973_5039 = state_4929__$1;
(statearr_4973_5039[(2)] = null);

(statearr_4973_5039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (28))){
var inst_4869 = (state_4929[(20)]);
var inst_4888 = (state_4929[(25)]);
var inst_4888__$1 = cljs.core.seq.call(null,inst_4869);
var state_4929__$1 = (function (){var statearr_4974 = state_4929;
(statearr_4974[(25)] = inst_4888__$1);

return statearr_4974;
})();
if(inst_4888__$1){
var statearr_4975_5040 = state_4929__$1;
(statearr_4975_5040[(1)] = (33));

} else {
var statearr_4976_5041 = state_4929__$1;
(statearr_4976_5041[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (25))){
var inst_4872 = (state_4929[(12)]);
var inst_4871 = (state_4929[(21)]);
var inst_4874 = (inst_4872 < inst_4871);
var inst_4875 = inst_4874;
var state_4929__$1 = state_4929;
if(cljs.core.truth_(inst_4875)){
var statearr_4977_5042 = state_4929__$1;
(statearr_4977_5042[(1)] = (27));

} else {
var statearr_4978_5043 = state_4929__$1;
(statearr_4978_5043[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (34))){
var state_4929__$1 = state_4929;
var statearr_4979_5044 = state_4929__$1;
(statearr_4979_5044[(2)] = null);

(statearr_4979_5044[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (17))){
var state_4929__$1 = state_4929;
var statearr_4980_5045 = state_4929__$1;
(statearr_4980_5045[(2)] = null);

(statearr_4980_5045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (3))){
var inst_4927 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4929__$1,inst_4927);
} else {
if((state_val_4930 === (12))){
var inst_4856 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4981_5046 = state_4929__$1;
(statearr_4981_5046[(2)] = inst_4856);

(statearr_4981_5046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (2))){
var state_4929__$1 = state_4929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4929__$1,(4),ch);
} else {
if((state_val_4930 === (23))){
var state_4929__$1 = state_4929;
var statearr_4982_5047 = state_4929__$1;
(statearr_4982_5047[(2)] = null);

(statearr_4982_5047[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (35))){
var inst_4911 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4983_5048 = state_4929__$1;
(statearr_4983_5048[(2)] = inst_4911);

(statearr_4983_5048[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (19))){
var inst_4828 = (state_4929[(7)]);
var inst_4832 = cljs.core.chunk_first.call(null,inst_4828);
var inst_4833 = cljs.core.chunk_rest.call(null,inst_4828);
var inst_4834 = cljs.core.count.call(null,inst_4832);
var inst_4806 = inst_4833;
var inst_4807 = inst_4832;
var inst_4808 = inst_4834;
var inst_4809 = (0);
var state_4929__$1 = (function (){var statearr_4984 = state_4929;
(statearr_4984[(13)] = inst_4808);

(statearr_4984[(14)] = inst_4806);

(statearr_4984[(16)] = inst_4809);

(statearr_4984[(17)] = inst_4807);

return statearr_4984;
})();
var statearr_4985_5049 = state_4929__$1;
(statearr_4985_5049[(2)] = null);

(statearr_4985_5049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (11))){
var inst_4806 = (state_4929[(14)]);
var inst_4828 = (state_4929[(7)]);
var inst_4828__$1 = cljs.core.seq.call(null,inst_4806);
var state_4929__$1 = (function (){var statearr_4986 = state_4929;
(statearr_4986[(7)] = inst_4828__$1);

return statearr_4986;
})();
if(inst_4828__$1){
var statearr_4987_5050 = state_4929__$1;
(statearr_4987_5050[(1)] = (16));

} else {
var statearr_4988_5051 = state_4929__$1;
(statearr_4988_5051[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (9))){
var inst_4858 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4989_5052 = state_4929__$1;
(statearr_4989_5052[(2)] = inst_4858);

(statearr_4989_5052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (5))){
var inst_4804 = cljs.core.deref.call(null,cs);
var inst_4805 = cljs.core.seq.call(null,inst_4804);
var inst_4806 = inst_4805;
var inst_4807 = null;
var inst_4808 = (0);
var inst_4809 = (0);
var state_4929__$1 = (function (){var statearr_4990 = state_4929;
(statearr_4990[(13)] = inst_4808);

(statearr_4990[(14)] = inst_4806);

(statearr_4990[(16)] = inst_4809);

(statearr_4990[(17)] = inst_4807);

return statearr_4990;
})();
var statearr_4991_5053 = state_4929__$1;
(statearr_4991_5053[(2)] = null);

(statearr_4991_5053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (14))){
var state_4929__$1 = state_4929;
var statearr_4992_5054 = state_4929__$1;
(statearr_4992_5054[(2)] = null);

(statearr_4992_5054[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (45))){
var inst_4919 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4993_5055 = state_4929__$1;
(statearr_4993_5055[(2)] = inst_4919);

(statearr_4993_5055[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (26))){
var inst_4861 = (state_4929[(29)]);
var inst_4915 = (state_4929[(2)]);
var inst_4916 = cljs.core.seq.call(null,inst_4861);
var state_4929__$1 = (function (){var statearr_4994 = state_4929;
(statearr_4994[(31)] = inst_4915);

return statearr_4994;
})();
if(inst_4916){
var statearr_4995_5056 = state_4929__$1;
(statearr_4995_5056[(1)] = (42));

} else {
var statearr_4996_5057 = state_4929__$1;
(statearr_4996_5057[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (16))){
var inst_4828 = (state_4929[(7)]);
var inst_4830 = cljs.core.chunked_seq_QMARK_.call(null,inst_4828);
var state_4929__$1 = state_4929;
if(inst_4830){
var statearr_4997_5058 = state_4929__$1;
(statearr_4997_5058[(1)] = (19));

} else {
var statearr_4998_5059 = state_4929__$1;
(statearr_4998_5059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (38))){
var inst_4908 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4999_5060 = state_4929__$1;
(statearr_4999_5060[(2)] = inst_4908);

(statearr_4999_5060[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (30))){
var state_4929__$1 = state_4929;
var statearr_5000_5061 = state_4929__$1;
(statearr_5000_5061[(2)] = null);

(statearr_5000_5061[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (10))){
var inst_4809 = (state_4929[(16)]);
var inst_4807 = (state_4929[(17)]);
var inst_4817 = cljs.core._nth.call(null,inst_4807,inst_4809);
var inst_4818 = cljs.core.nth.call(null,inst_4817,(0),null);
var inst_4819 = cljs.core.nth.call(null,inst_4817,(1),null);
var state_4929__$1 = (function (){var statearr_5001 = state_4929;
(statearr_5001[(26)] = inst_4818);

return statearr_5001;
})();
if(cljs.core.truth_(inst_4819)){
var statearr_5002_5062 = state_4929__$1;
(statearr_5002_5062[(1)] = (13));

} else {
var statearr_5003_5063 = state_4929__$1;
(statearr_5003_5063[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (18))){
var inst_4854 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_5004_5064 = state_4929__$1;
(statearr_5004_5064[(2)] = inst_4854);

(statearr_5004_5064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (42))){
var state_4929__$1 = state_4929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4929__$1,(45),dchan);
} else {
if((state_val_4930 === (37))){
var inst_4897 = (state_4929[(23)]);
var inst_4797 = (state_4929[(11)]);
var inst_4888 = (state_4929[(25)]);
var inst_4897__$1 = cljs.core.first.call(null,inst_4888);
var inst_4898 = cljs.core.async.put_BANG_.call(null,inst_4897__$1,inst_4797,done);
var state_4929__$1 = (function (){var statearr_5005 = state_4929;
(statearr_5005[(23)] = inst_4897__$1);

return statearr_5005;
})();
if(cljs.core.truth_(inst_4898)){
var statearr_5006_5065 = state_4929__$1;
(statearr_5006_5065[(1)] = (39));

} else {
var statearr_5007_5066 = state_4929__$1;
(statearr_5007_5066[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (8))){
var inst_4808 = (state_4929[(13)]);
var inst_4809 = (state_4929[(16)]);
var inst_4811 = (inst_4809 < inst_4808);
var inst_4812 = inst_4811;
var state_4929__$1 = state_4929;
if(cljs.core.truth_(inst_4812)){
var statearr_5008_5067 = state_4929__$1;
(statearr_5008_5067[(1)] = (10));

} else {
var statearr_5009_5068 = state_4929__$1;
(statearr_5009_5068[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__2157__auto__ = null;
var cljs$core$async$mult_$_state_machine__2157__auto____0 = (function (){
var statearr_5010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5010[(0)] = cljs$core$async$mult_$_state_machine__2157__auto__);

(statearr_5010[(1)] = (1));

return statearr_5010;
});
var cljs$core$async$mult_$_state_machine__2157__auto____1 = (function (state_4929){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_4929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5011){if((e5011 instanceof Object)){
var ex__2160__auto__ = e5011;
var statearr_5012_5069 = state_4929;
(statearr_5012_5069[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5070 = state_4929;
state_4929 = G__5070;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2157__auto__ = function(state_4929){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2157__auto____1.call(this,state_4929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2157__auto____0;
cljs$core$async$mult_$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2157__auto____1;
return cljs$core$async$mult_$_state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5013 = f__2174__auto__.call(null);
(statearr_5013[(6)] = c__2173__auto___5014);

return statearr_5013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__5072 = arguments.length;
switch (G__5072) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_5074 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_5074.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_5075 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_5075.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_5076 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_5076.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_5077 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_5077.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_5078 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_5078.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5089 = arguments.length;
var i__4737__auto___5090 = (0);
while(true){
if((i__4737__auto___5090 < len__4736__auto___5089)){
args__4742__auto__.push((arguments[i__4737__auto___5090]));

var G__5091 = (i__4737__auto___5090 + (1));
i__4737__auto___5090 = G__5091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__5083){
var map__5084 = p__5083;
var map__5084__$1 = (((((!((map__5084 == null))))?(((((map__5084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5084):map__5084);
var opts = map__5084__$1;
var statearr_5086_5092 = state;
(statearr_5086_5092[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_5087_5093 = state;
(statearr_5087_5093[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_5088_5094 = state;
(statearr_5088_5094[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq5079){
var G__5080 = cljs.core.first.call(null,seq5079);
var seq5079__$1 = cljs.core.next.call(null,seq5079);
var G__5081 = cljs.core.first.call(null,seq5079__$1);
var seq5079__$2 = cljs.core.next.call(null,seq5079__$1);
var G__5082 = cljs.core.first.call(null,seq5079__$2);
var seq5079__$3 = cljs.core.next.call(null,seq5079__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5080,G__5081,G__5082,seq5079__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5095 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5095 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5096){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta5096 = meta5096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5097,meta5096__$1){
var self__ = this;
var _5097__$1 = this;
return (new cljs.core.async.t_cljs$core$async5095(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5096__$1));
}));

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5097){
var self__ = this;
var _5097__$1 = this;
return self__.meta5096;
}));

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async5095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5096","meta5096",236096742,null)], null);
}));

(cljs.core.async.t_cljs$core$async5095.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5095");

(cljs.core.async.t_cljs$core$async5095.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async5095");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5095.
 */
cljs.core.async.__GT_t_cljs$core$async5095 = (function cljs$core$async$mix_$___GT_t_cljs$core$async5095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5096){
return (new cljs.core.async.t_cljs$core$async5095(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5096));
});

}

return (new cljs.core.async.t_cljs$core$async5095(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2173__auto___5259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5199){
var state_val_5200 = (state_5199[(1)]);
if((state_val_5200 === (7))){
var inst_5114 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
var statearr_5201_5260 = state_5199__$1;
(statearr_5201_5260[(2)] = inst_5114);

(statearr_5201_5260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (20))){
var inst_5126 = (state_5199[(7)]);
var state_5199__$1 = state_5199;
var statearr_5202_5261 = state_5199__$1;
(statearr_5202_5261[(2)] = inst_5126);

(statearr_5202_5261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (27))){
var state_5199__$1 = state_5199;
var statearr_5203_5262 = state_5199__$1;
(statearr_5203_5262[(2)] = null);

(statearr_5203_5262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (1))){
var inst_5101 = (state_5199[(8)]);
var inst_5101__$1 = calc_state.call(null);
var inst_5103 = (inst_5101__$1 == null);
var inst_5104 = cljs.core.not.call(null,inst_5103);
var state_5199__$1 = (function (){var statearr_5204 = state_5199;
(statearr_5204[(8)] = inst_5101__$1);

return statearr_5204;
})();
if(inst_5104){
var statearr_5205_5263 = state_5199__$1;
(statearr_5205_5263[(1)] = (2));

} else {
var statearr_5206_5264 = state_5199__$1;
(statearr_5206_5264[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (24))){
var inst_5173 = (state_5199[(9)]);
var inst_5159 = (state_5199[(10)]);
var inst_5150 = (state_5199[(11)]);
var inst_5173__$1 = inst_5150.call(null,inst_5159);
var state_5199__$1 = (function (){var statearr_5207 = state_5199;
(statearr_5207[(9)] = inst_5173__$1);

return statearr_5207;
})();
if(cljs.core.truth_(inst_5173__$1)){
var statearr_5208_5265 = state_5199__$1;
(statearr_5208_5265[(1)] = (29));

} else {
var statearr_5209_5266 = state_5199__$1;
(statearr_5209_5266[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (4))){
var inst_5117 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
if(cljs.core.truth_(inst_5117)){
var statearr_5210_5267 = state_5199__$1;
(statearr_5210_5267[(1)] = (8));

} else {
var statearr_5211_5268 = state_5199__$1;
(statearr_5211_5268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (15))){
var inst_5144 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
if(cljs.core.truth_(inst_5144)){
var statearr_5212_5269 = state_5199__$1;
(statearr_5212_5269[(1)] = (19));

} else {
var statearr_5213_5270 = state_5199__$1;
(statearr_5213_5270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (21))){
var inst_5149 = (state_5199[(12)]);
var inst_5149__$1 = (state_5199[(2)]);
var inst_5150 = cljs.core.get.call(null,inst_5149__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5151 = cljs.core.get.call(null,inst_5149__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5152 = cljs.core.get.call(null,inst_5149__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5199__$1 = (function (){var statearr_5214 = state_5199;
(statearr_5214[(13)] = inst_5151);

(statearr_5214[(12)] = inst_5149__$1);

(statearr_5214[(11)] = inst_5150);

return statearr_5214;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5199__$1,(22),inst_5152);
} else {
if((state_val_5200 === (31))){
var inst_5181 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
if(cljs.core.truth_(inst_5181)){
var statearr_5215_5271 = state_5199__$1;
(statearr_5215_5271[(1)] = (32));

} else {
var statearr_5216_5272 = state_5199__$1;
(statearr_5216_5272[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (32))){
var inst_5158 = (state_5199[(14)]);
var state_5199__$1 = state_5199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5199__$1,(35),out,inst_5158);
} else {
if((state_val_5200 === (33))){
var inst_5149 = (state_5199[(12)]);
var inst_5126 = inst_5149;
var state_5199__$1 = (function (){var statearr_5217 = state_5199;
(statearr_5217[(7)] = inst_5126);

return statearr_5217;
})();
var statearr_5218_5273 = state_5199__$1;
(statearr_5218_5273[(2)] = null);

(statearr_5218_5273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (13))){
var inst_5126 = (state_5199[(7)]);
var inst_5133 = inst_5126.cljs$lang$protocol_mask$partition0$;
var inst_5134 = (inst_5133 & (64));
var inst_5135 = inst_5126.cljs$core$ISeq$;
var inst_5136 = (cljs.core.PROTOCOL_SENTINEL === inst_5135);
var inst_5137 = ((inst_5134) || (inst_5136));
var state_5199__$1 = state_5199;
if(cljs.core.truth_(inst_5137)){
var statearr_5219_5274 = state_5199__$1;
(statearr_5219_5274[(1)] = (16));

} else {
var statearr_5220_5275 = state_5199__$1;
(statearr_5220_5275[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (22))){
var inst_5159 = (state_5199[(10)]);
var inst_5158 = (state_5199[(14)]);
var inst_5157 = (state_5199[(2)]);
var inst_5158__$1 = cljs.core.nth.call(null,inst_5157,(0),null);
var inst_5159__$1 = cljs.core.nth.call(null,inst_5157,(1),null);
var inst_5160 = (inst_5158__$1 == null);
var inst_5161 = cljs.core._EQ_.call(null,inst_5159__$1,change);
var inst_5162 = ((inst_5160) || (inst_5161));
var state_5199__$1 = (function (){var statearr_5221 = state_5199;
(statearr_5221[(10)] = inst_5159__$1);

(statearr_5221[(14)] = inst_5158__$1);

return statearr_5221;
})();
if(cljs.core.truth_(inst_5162)){
var statearr_5222_5276 = state_5199__$1;
(statearr_5222_5276[(1)] = (23));

} else {
var statearr_5223_5277 = state_5199__$1;
(statearr_5223_5277[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (36))){
var inst_5149 = (state_5199[(12)]);
var inst_5126 = inst_5149;
var state_5199__$1 = (function (){var statearr_5224 = state_5199;
(statearr_5224[(7)] = inst_5126);

return statearr_5224;
})();
var statearr_5225_5278 = state_5199__$1;
(statearr_5225_5278[(2)] = null);

(statearr_5225_5278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (29))){
var inst_5173 = (state_5199[(9)]);
var state_5199__$1 = state_5199;
var statearr_5226_5279 = state_5199__$1;
(statearr_5226_5279[(2)] = inst_5173);

(statearr_5226_5279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (6))){
var state_5199__$1 = state_5199;
var statearr_5227_5280 = state_5199__$1;
(statearr_5227_5280[(2)] = false);

(statearr_5227_5280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (28))){
var inst_5169 = (state_5199[(2)]);
var inst_5170 = calc_state.call(null);
var inst_5126 = inst_5170;
var state_5199__$1 = (function (){var statearr_5228 = state_5199;
(statearr_5228[(7)] = inst_5126);

(statearr_5228[(15)] = inst_5169);

return statearr_5228;
})();
var statearr_5229_5281 = state_5199__$1;
(statearr_5229_5281[(2)] = null);

(statearr_5229_5281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (25))){
var inst_5195 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
var statearr_5230_5282 = state_5199__$1;
(statearr_5230_5282[(2)] = inst_5195);

(statearr_5230_5282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (34))){
var inst_5193 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
var statearr_5231_5283 = state_5199__$1;
(statearr_5231_5283[(2)] = inst_5193);

(statearr_5231_5283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (17))){
var state_5199__$1 = state_5199;
var statearr_5232_5284 = state_5199__$1;
(statearr_5232_5284[(2)] = false);

(statearr_5232_5284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (3))){
var state_5199__$1 = state_5199;
var statearr_5233_5285 = state_5199__$1;
(statearr_5233_5285[(2)] = false);

(statearr_5233_5285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (12))){
var inst_5197 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5199__$1,inst_5197);
} else {
if((state_val_5200 === (2))){
var inst_5101 = (state_5199[(8)]);
var inst_5106 = inst_5101.cljs$lang$protocol_mask$partition0$;
var inst_5107 = (inst_5106 & (64));
var inst_5108 = inst_5101.cljs$core$ISeq$;
var inst_5109 = (cljs.core.PROTOCOL_SENTINEL === inst_5108);
var inst_5110 = ((inst_5107) || (inst_5109));
var state_5199__$1 = state_5199;
if(cljs.core.truth_(inst_5110)){
var statearr_5234_5286 = state_5199__$1;
(statearr_5234_5286[(1)] = (5));

} else {
var statearr_5235_5287 = state_5199__$1;
(statearr_5235_5287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (23))){
var inst_5158 = (state_5199[(14)]);
var inst_5164 = (inst_5158 == null);
var state_5199__$1 = state_5199;
if(cljs.core.truth_(inst_5164)){
var statearr_5236_5288 = state_5199__$1;
(statearr_5236_5288[(1)] = (26));

} else {
var statearr_5237_5289 = state_5199__$1;
(statearr_5237_5289[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (35))){
var inst_5184 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
if(cljs.core.truth_(inst_5184)){
var statearr_5238_5290 = state_5199__$1;
(statearr_5238_5290[(1)] = (36));

} else {
var statearr_5239_5291 = state_5199__$1;
(statearr_5239_5291[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (19))){
var inst_5126 = (state_5199[(7)]);
var inst_5146 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5126);
var state_5199__$1 = state_5199;
var statearr_5240_5292 = state_5199__$1;
(statearr_5240_5292[(2)] = inst_5146);

(statearr_5240_5292[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (11))){
var inst_5126 = (state_5199[(7)]);
var inst_5130 = (inst_5126 == null);
var inst_5131 = cljs.core.not.call(null,inst_5130);
var state_5199__$1 = state_5199;
if(inst_5131){
var statearr_5241_5293 = state_5199__$1;
(statearr_5241_5293[(1)] = (13));

} else {
var statearr_5242_5294 = state_5199__$1;
(statearr_5242_5294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (9))){
var inst_5101 = (state_5199[(8)]);
var state_5199__$1 = state_5199;
var statearr_5243_5295 = state_5199__$1;
(statearr_5243_5295[(2)] = inst_5101);

(statearr_5243_5295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (5))){
var state_5199__$1 = state_5199;
var statearr_5244_5296 = state_5199__$1;
(statearr_5244_5296[(2)] = true);

(statearr_5244_5296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (14))){
var state_5199__$1 = state_5199;
var statearr_5245_5297 = state_5199__$1;
(statearr_5245_5297[(2)] = false);

(statearr_5245_5297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (26))){
var inst_5159 = (state_5199[(10)]);
var inst_5166 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5159);
var state_5199__$1 = state_5199;
var statearr_5246_5298 = state_5199__$1;
(statearr_5246_5298[(2)] = inst_5166);

(statearr_5246_5298[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (16))){
var state_5199__$1 = state_5199;
var statearr_5247_5299 = state_5199__$1;
(statearr_5247_5299[(2)] = true);

(statearr_5247_5299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (38))){
var inst_5189 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
var statearr_5248_5300 = state_5199__$1;
(statearr_5248_5300[(2)] = inst_5189);

(statearr_5248_5300[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (30))){
var inst_5151 = (state_5199[(13)]);
var inst_5159 = (state_5199[(10)]);
var inst_5150 = (state_5199[(11)]);
var inst_5176 = cljs.core.empty_QMARK_.call(null,inst_5150);
var inst_5177 = inst_5151.call(null,inst_5159);
var inst_5178 = cljs.core.not.call(null,inst_5177);
var inst_5179 = ((inst_5176) && (inst_5178));
var state_5199__$1 = state_5199;
var statearr_5249_5301 = state_5199__$1;
(statearr_5249_5301[(2)] = inst_5179);

(statearr_5249_5301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (10))){
var inst_5101 = (state_5199[(8)]);
var inst_5122 = (state_5199[(2)]);
var inst_5123 = cljs.core.get.call(null,inst_5122,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5124 = cljs.core.get.call(null,inst_5122,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5125 = cljs.core.get.call(null,inst_5122,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5126 = inst_5101;
var state_5199__$1 = (function (){var statearr_5250 = state_5199;
(statearr_5250[(16)] = inst_5123);

(statearr_5250[(7)] = inst_5126);

(statearr_5250[(17)] = inst_5124);

(statearr_5250[(18)] = inst_5125);

return statearr_5250;
})();
var statearr_5251_5302 = state_5199__$1;
(statearr_5251_5302[(2)] = null);

(statearr_5251_5302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (18))){
var inst_5141 = (state_5199[(2)]);
var state_5199__$1 = state_5199;
var statearr_5252_5303 = state_5199__$1;
(statearr_5252_5303[(2)] = inst_5141);

(statearr_5252_5303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (37))){
var state_5199__$1 = state_5199;
var statearr_5253_5304 = state_5199__$1;
(statearr_5253_5304[(2)] = null);

(statearr_5253_5304[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5200 === (8))){
var inst_5101 = (state_5199[(8)]);
var inst_5119 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5101);
var state_5199__$1 = state_5199;
var statearr_5254_5305 = state_5199__$1;
(statearr_5254_5305[(2)] = inst_5119);

(statearr_5254_5305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__2157__auto__ = null;
var cljs$core$async$mix_$_state_machine__2157__auto____0 = (function (){
var statearr_5255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5255[(0)] = cljs$core$async$mix_$_state_machine__2157__auto__);

(statearr_5255[(1)] = (1));

return statearr_5255;
});
var cljs$core$async$mix_$_state_machine__2157__auto____1 = (function (state_5199){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5256){if((e5256 instanceof Object)){
var ex__2160__auto__ = e5256;
var statearr_5257_5306 = state_5199;
(statearr_5257_5306[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5307 = state_5199;
state_5199 = G__5307;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2157__auto__ = function(state_5199){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2157__auto____1.call(this,state_5199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2157__auto____0;
cljs$core$async$mix_$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2157__auto____1;
return cljs$core$async$mix_$_state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5258 = f__2174__auto__.call(null);
(statearr_5258[(6)] = c__2173__auto___5259);

return statearr_5258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_5310 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_5310.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_5311 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_5311.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_5312 = (function() {
var G__5313 = null;
var G__5313__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__5313__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__5313 = function(p,v){
switch(arguments.length){
case 1:
return G__5313__1.call(this,p);
case 2:
return G__5313__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5313.cljs$core$IFn$_invoke$arity$1 = G__5313__1;
G__5313.cljs$core$IFn$_invoke$arity$2 = G__5313__2;
return G__5313;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__5309 = arguments.length;
switch (G__5309) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_5312.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_5312.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__5317 = arguments.length;
switch (G__5317) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__5315_SHARP_){
if(cljs.core.truth_(p1__5315_SHARP_.call(null,topic))){
return p1__5315_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5315_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5318 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5319){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5319 = meta5319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5320,meta5319__$1){
var self__ = this;
var _5320__$1 = this;
return (new cljs.core.async.t_cljs$core$async5318(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5319__$1));
}));

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5320){
var self__ = this;
var _5320__$1 = this;
return self__.meta5319;
}));

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async5318.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async5318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5319","meta5319",1328524779,null)], null);
}));

(cljs.core.async.t_cljs$core$async5318.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5318");

(cljs.core.async.t_cljs$core$async5318.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async5318");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5318.
 */
cljs.core.async.__GT_t_cljs$core$async5318 = (function cljs$core$async$__GT_t_cljs$core$async5318(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5319){
return (new cljs.core.async.t_cljs$core$async5318(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5319));
});

}

return (new cljs.core.async.t_cljs$core$async5318(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2173__auto___5438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5392){
var state_val_5393 = (state_5392[(1)]);
if((state_val_5393 === (7))){
var inst_5388 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5394_5439 = state_5392__$1;
(statearr_5394_5439[(2)] = inst_5388);

(statearr_5394_5439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (20))){
var state_5392__$1 = state_5392;
var statearr_5395_5440 = state_5392__$1;
(statearr_5395_5440[(2)] = null);

(statearr_5395_5440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (1))){
var state_5392__$1 = state_5392;
var statearr_5396_5441 = state_5392__$1;
(statearr_5396_5441[(2)] = null);

(statearr_5396_5441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (24))){
var inst_5371 = (state_5392[(7)]);
var inst_5380 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5371);
var state_5392__$1 = state_5392;
var statearr_5397_5442 = state_5392__$1;
(statearr_5397_5442[(2)] = inst_5380);

(statearr_5397_5442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (4))){
var inst_5323 = (state_5392[(8)]);
var inst_5323__$1 = (state_5392[(2)]);
var inst_5324 = (inst_5323__$1 == null);
var state_5392__$1 = (function (){var statearr_5398 = state_5392;
(statearr_5398[(8)] = inst_5323__$1);

return statearr_5398;
})();
if(cljs.core.truth_(inst_5324)){
var statearr_5399_5443 = state_5392__$1;
(statearr_5399_5443[(1)] = (5));

} else {
var statearr_5400_5444 = state_5392__$1;
(statearr_5400_5444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (15))){
var inst_5365 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5401_5445 = state_5392__$1;
(statearr_5401_5445[(2)] = inst_5365);

(statearr_5401_5445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (21))){
var inst_5385 = (state_5392[(2)]);
var state_5392__$1 = (function (){var statearr_5402 = state_5392;
(statearr_5402[(9)] = inst_5385);

return statearr_5402;
})();
var statearr_5403_5446 = state_5392__$1;
(statearr_5403_5446[(2)] = null);

(statearr_5403_5446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (13))){
var inst_5347 = (state_5392[(10)]);
var inst_5349 = cljs.core.chunked_seq_QMARK_.call(null,inst_5347);
var state_5392__$1 = state_5392;
if(inst_5349){
var statearr_5404_5447 = state_5392__$1;
(statearr_5404_5447[(1)] = (16));

} else {
var statearr_5405_5448 = state_5392__$1;
(statearr_5405_5448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (22))){
var inst_5377 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
if(cljs.core.truth_(inst_5377)){
var statearr_5406_5449 = state_5392__$1;
(statearr_5406_5449[(1)] = (23));

} else {
var statearr_5407_5450 = state_5392__$1;
(statearr_5407_5450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (6))){
var inst_5371 = (state_5392[(7)]);
var inst_5323 = (state_5392[(8)]);
var inst_5373 = (state_5392[(11)]);
var inst_5371__$1 = topic_fn.call(null,inst_5323);
var inst_5372 = cljs.core.deref.call(null,mults);
var inst_5373__$1 = cljs.core.get.call(null,inst_5372,inst_5371__$1);
var state_5392__$1 = (function (){var statearr_5408 = state_5392;
(statearr_5408[(7)] = inst_5371__$1);

(statearr_5408[(11)] = inst_5373__$1);

return statearr_5408;
})();
if(cljs.core.truth_(inst_5373__$1)){
var statearr_5409_5451 = state_5392__$1;
(statearr_5409_5451[(1)] = (19));

} else {
var statearr_5410_5452 = state_5392__$1;
(statearr_5410_5452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (25))){
var inst_5382 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5411_5453 = state_5392__$1;
(statearr_5411_5453[(2)] = inst_5382);

(statearr_5411_5453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (17))){
var inst_5347 = (state_5392[(10)]);
var inst_5356 = cljs.core.first.call(null,inst_5347);
var inst_5357 = cljs.core.async.muxch_STAR_.call(null,inst_5356);
var inst_5358 = cljs.core.async.close_BANG_.call(null,inst_5357);
var inst_5359 = cljs.core.next.call(null,inst_5347);
var inst_5333 = inst_5359;
var inst_5334 = null;
var inst_5335 = (0);
var inst_5336 = (0);
var state_5392__$1 = (function (){var statearr_5412 = state_5392;
(statearr_5412[(12)] = inst_5333);

(statearr_5412[(13)] = inst_5336);

(statearr_5412[(14)] = inst_5335);

(statearr_5412[(15)] = inst_5334);

(statearr_5412[(16)] = inst_5358);

return statearr_5412;
})();
var statearr_5413_5454 = state_5392__$1;
(statearr_5413_5454[(2)] = null);

(statearr_5413_5454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (3))){
var inst_5390 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5392__$1,inst_5390);
} else {
if((state_val_5393 === (12))){
var inst_5367 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5414_5455 = state_5392__$1;
(statearr_5414_5455[(2)] = inst_5367);

(statearr_5414_5455[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (2))){
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5392__$1,(4),ch);
} else {
if((state_val_5393 === (23))){
var state_5392__$1 = state_5392;
var statearr_5415_5456 = state_5392__$1;
(statearr_5415_5456[(2)] = null);

(statearr_5415_5456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (19))){
var inst_5323 = (state_5392[(8)]);
var inst_5373 = (state_5392[(11)]);
var inst_5375 = cljs.core.async.muxch_STAR_.call(null,inst_5373);
var state_5392__$1 = state_5392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5392__$1,(22),inst_5375,inst_5323);
} else {
if((state_val_5393 === (11))){
var inst_5333 = (state_5392[(12)]);
var inst_5347 = (state_5392[(10)]);
var inst_5347__$1 = cljs.core.seq.call(null,inst_5333);
var state_5392__$1 = (function (){var statearr_5416 = state_5392;
(statearr_5416[(10)] = inst_5347__$1);

return statearr_5416;
})();
if(inst_5347__$1){
var statearr_5417_5457 = state_5392__$1;
(statearr_5417_5457[(1)] = (13));

} else {
var statearr_5418_5458 = state_5392__$1;
(statearr_5418_5458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (9))){
var inst_5369 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5419_5459 = state_5392__$1;
(statearr_5419_5459[(2)] = inst_5369);

(statearr_5419_5459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (5))){
var inst_5330 = cljs.core.deref.call(null,mults);
var inst_5331 = cljs.core.vals.call(null,inst_5330);
var inst_5332 = cljs.core.seq.call(null,inst_5331);
var inst_5333 = inst_5332;
var inst_5334 = null;
var inst_5335 = (0);
var inst_5336 = (0);
var state_5392__$1 = (function (){var statearr_5420 = state_5392;
(statearr_5420[(12)] = inst_5333);

(statearr_5420[(13)] = inst_5336);

(statearr_5420[(14)] = inst_5335);

(statearr_5420[(15)] = inst_5334);

return statearr_5420;
})();
var statearr_5421_5460 = state_5392__$1;
(statearr_5421_5460[(2)] = null);

(statearr_5421_5460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (14))){
var state_5392__$1 = state_5392;
var statearr_5425_5461 = state_5392__$1;
(statearr_5425_5461[(2)] = null);

(statearr_5425_5461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (16))){
var inst_5347 = (state_5392[(10)]);
var inst_5351 = cljs.core.chunk_first.call(null,inst_5347);
var inst_5352 = cljs.core.chunk_rest.call(null,inst_5347);
var inst_5353 = cljs.core.count.call(null,inst_5351);
var inst_5333 = inst_5352;
var inst_5334 = inst_5351;
var inst_5335 = inst_5353;
var inst_5336 = (0);
var state_5392__$1 = (function (){var statearr_5426 = state_5392;
(statearr_5426[(12)] = inst_5333);

(statearr_5426[(13)] = inst_5336);

(statearr_5426[(14)] = inst_5335);

(statearr_5426[(15)] = inst_5334);

return statearr_5426;
})();
var statearr_5427_5462 = state_5392__$1;
(statearr_5427_5462[(2)] = null);

(statearr_5427_5462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (10))){
var inst_5333 = (state_5392[(12)]);
var inst_5336 = (state_5392[(13)]);
var inst_5335 = (state_5392[(14)]);
var inst_5334 = (state_5392[(15)]);
var inst_5341 = cljs.core._nth.call(null,inst_5334,inst_5336);
var inst_5342 = cljs.core.async.muxch_STAR_.call(null,inst_5341);
var inst_5343 = cljs.core.async.close_BANG_.call(null,inst_5342);
var inst_5344 = (inst_5336 + (1));
var tmp5422 = inst_5333;
var tmp5423 = inst_5335;
var tmp5424 = inst_5334;
var inst_5333__$1 = tmp5422;
var inst_5334__$1 = tmp5424;
var inst_5335__$1 = tmp5423;
var inst_5336__$1 = inst_5344;
var state_5392__$1 = (function (){var statearr_5428 = state_5392;
(statearr_5428[(12)] = inst_5333__$1);

(statearr_5428[(13)] = inst_5336__$1);

(statearr_5428[(17)] = inst_5343);

(statearr_5428[(14)] = inst_5335__$1);

(statearr_5428[(15)] = inst_5334__$1);

return statearr_5428;
})();
var statearr_5429_5463 = state_5392__$1;
(statearr_5429_5463[(2)] = null);

(statearr_5429_5463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (18))){
var inst_5362 = (state_5392[(2)]);
var state_5392__$1 = state_5392;
var statearr_5430_5464 = state_5392__$1;
(statearr_5430_5464[(2)] = inst_5362);

(statearr_5430_5464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5393 === (8))){
var inst_5336 = (state_5392[(13)]);
var inst_5335 = (state_5392[(14)]);
var inst_5338 = (inst_5336 < inst_5335);
var inst_5339 = inst_5338;
var state_5392__$1 = state_5392;
if(cljs.core.truth_(inst_5339)){
var statearr_5431_5465 = state_5392__$1;
(statearr_5431_5465[(1)] = (10));

} else {
var statearr_5432_5466 = state_5392__$1;
(statearr_5432_5466[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_5433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5433[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_5433[(1)] = (1));

return statearr_5433;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_5392){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5434){if((e5434 instanceof Object)){
var ex__2160__auto__ = e5434;
var statearr_5435_5467 = state_5392;
(statearr_5435_5467[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5468 = state_5392;
state_5392 = G__5468;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_5392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_5392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5436 = f__2174__auto__.call(null);
(statearr_5436[(6)] = c__2173__auto___5438);

return statearr_5436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__5470 = arguments.length;
switch (G__5470) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__5473 = arguments.length;
switch (G__5473) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__5476 = arguments.length;
switch (G__5476) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__2173__auto___5543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5515){
var state_val_5516 = (state_5515[(1)]);
if((state_val_5516 === (7))){
var state_5515__$1 = state_5515;
var statearr_5517_5544 = state_5515__$1;
(statearr_5517_5544[(2)] = null);

(statearr_5517_5544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (1))){
var state_5515__$1 = state_5515;
var statearr_5518_5545 = state_5515__$1;
(statearr_5518_5545[(2)] = null);

(statearr_5518_5545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (4))){
var inst_5479 = (state_5515[(7)]);
var inst_5481 = (inst_5479 < cnt);
var state_5515__$1 = state_5515;
if(cljs.core.truth_(inst_5481)){
var statearr_5519_5546 = state_5515__$1;
(statearr_5519_5546[(1)] = (6));

} else {
var statearr_5520_5547 = state_5515__$1;
(statearr_5520_5547[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (15))){
var inst_5511 = (state_5515[(2)]);
var state_5515__$1 = state_5515;
var statearr_5521_5548 = state_5515__$1;
(statearr_5521_5548[(2)] = inst_5511);

(statearr_5521_5548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (13))){
var inst_5504 = cljs.core.async.close_BANG_.call(null,out);
var state_5515__$1 = state_5515;
var statearr_5522_5549 = state_5515__$1;
(statearr_5522_5549[(2)] = inst_5504);

(statearr_5522_5549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (6))){
var state_5515__$1 = state_5515;
var statearr_5523_5550 = state_5515__$1;
(statearr_5523_5550[(2)] = null);

(statearr_5523_5550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (3))){
var inst_5513 = (state_5515[(2)]);
var state_5515__$1 = state_5515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5515__$1,inst_5513);
} else {
if((state_val_5516 === (12))){
var inst_5501 = (state_5515[(8)]);
var inst_5501__$1 = (state_5515[(2)]);
var inst_5502 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5501__$1);
var state_5515__$1 = (function (){var statearr_5524 = state_5515;
(statearr_5524[(8)] = inst_5501__$1);

return statearr_5524;
})();
if(cljs.core.truth_(inst_5502)){
var statearr_5525_5551 = state_5515__$1;
(statearr_5525_5551[(1)] = (13));

} else {
var statearr_5526_5552 = state_5515__$1;
(statearr_5526_5552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (2))){
var inst_5478 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5479 = (0);
var state_5515__$1 = (function (){var statearr_5527 = state_5515;
(statearr_5527[(9)] = inst_5478);

(statearr_5527[(7)] = inst_5479);

return statearr_5527;
})();
var statearr_5528_5553 = state_5515__$1;
(statearr_5528_5553[(2)] = null);

(statearr_5528_5553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (11))){
var inst_5479 = (state_5515[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5515,(10),Object,null,(9));
var inst_5488 = chs__$1.call(null,inst_5479);
var inst_5489 = done.call(null,inst_5479);
var inst_5490 = cljs.core.async.take_BANG_.call(null,inst_5488,inst_5489);
var state_5515__$1 = state_5515;
var statearr_5529_5554 = state_5515__$1;
(statearr_5529_5554[(2)] = inst_5490);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (9))){
var inst_5479 = (state_5515[(7)]);
var inst_5492 = (state_5515[(2)]);
var inst_5493 = (inst_5479 + (1));
var inst_5479__$1 = inst_5493;
var state_5515__$1 = (function (){var statearr_5530 = state_5515;
(statearr_5530[(10)] = inst_5492);

(statearr_5530[(7)] = inst_5479__$1);

return statearr_5530;
})();
var statearr_5531_5555 = state_5515__$1;
(statearr_5531_5555[(2)] = null);

(statearr_5531_5555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (5))){
var inst_5499 = (state_5515[(2)]);
var state_5515__$1 = (function (){var statearr_5532 = state_5515;
(statearr_5532[(11)] = inst_5499);

return statearr_5532;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5515__$1,(12),dchan);
} else {
if((state_val_5516 === (14))){
var inst_5501 = (state_5515[(8)]);
var inst_5506 = cljs.core.apply.call(null,f,inst_5501);
var state_5515__$1 = state_5515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5515__$1,(16),out,inst_5506);
} else {
if((state_val_5516 === (16))){
var inst_5508 = (state_5515[(2)]);
var state_5515__$1 = (function (){var statearr_5533 = state_5515;
(statearr_5533[(12)] = inst_5508);

return statearr_5533;
})();
var statearr_5534_5556 = state_5515__$1;
(statearr_5534_5556[(2)] = null);

(statearr_5534_5556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (10))){
var inst_5483 = (state_5515[(2)]);
var inst_5484 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5515__$1 = (function (){var statearr_5535 = state_5515;
(statearr_5535[(13)] = inst_5483);

return statearr_5535;
})();
var statearr_5536_5557 = state_5515__$1;
(statearr_5536_5557[(2)] = inst_5484);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5516 === (8))){
var inst_5497 = (state_5515[(2)]);
var state_5515__$1 = state_5515;
var statearr_5537_5558 = state_5515__$1;
(statearr_5537_5558[(2)] = inst_5497);

(statearr_5537_5558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_5538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5538[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_5538[(1)] = (1));

return statearr_5538;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_5515){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5539){if((e5539 instanceof Object)){
var ex__2160__auto__ = e5539;
var statearr_5540_5559 = state_5515;
(statearr_5540_5559[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5560 = state_5515;
state_5515 = G__5560;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_5515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_5515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5541 = f__2174__auto__.call(null);
(statearr_5541[(6)] = c__2173__auto___5543);

return statearr_5541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__5563 = arguments.length;
switch (G__5563) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2173__auto___5617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5595){
var state_val_5596 = (state_5595[(1)]);
if((state_val_5596 === (7))){
var inst_5575 = (state_5595[(7)]);
var inst_5574 = (state_5595[(8)]);
var inst_5574__$1 = (state_5595[(2)]);
var inst_5575__$1 = cljs.core.nth.call(null,inst_5574__$1,(0),null);
var inst_5576 = cljs.core.nth.call(null,inst_5574__$1,(1),null);
var inst_5577 = (inst_5575__$1 == null);
var state_5595__$1 = (function (){var statearr_5597 = state_5595;
(statearr_5597[(9)] = inst_5576);

(statearr_5597[(7)] = inst_5575__$1);

(statearr_5597[(8)] = inst_5574__$1);

return statearr_5597;
})();
if(cljs.core.truth_(inst_5577)){
var statearr_5598_5618 = state_5595__$1;
(statearr_5598_5618[(1)] = (8));

} else {
var statearr_5599_5619 = state_5595__$1;
(statearr_5599_5619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5596 === (1))){
var inst_5564 = cljs.core.vec.call(null,chs);
var inst_5565 = inst_5564;
var state_5595__$1 = (function (){var statearr_5600 = state_5595;
(statearr_5600[(10)] = inst_5565);

return statearr_5600;
})();
var statearr_5601_5620 = state_5595__$1;
(statearr_5601_5620[(2)] = null);

(statearr_5601_5620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5596 === (4))){
var inst_5565 = (state_5595[(10)]);
var state_5595__$1 = state_5595;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5595__$1,(7),inst_5565);
} else {
if((state_val_5596 === (6))){
var inst_5591 = (state_5595[(2)]);
var state_5595__$1 = state_5595;
var statearr_5602_5621 = state_5595__$1;
(statearr_5602_5621[(2)] = inst_5591);

(statearr_5602_5621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5596 === (3))){
var inst_5593 = (state_5595[(2)]);
var state_5595__$1 = state_5595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5595__$1,inst_5593);
} else {
if((state_val_5596 === (2))){
var inst_5565 = (state_5595[(10)]);
var inst_5567 = cljs.core.count.call(null,inst_5565);
var inst_5568 = (inst_5567 > (0));
var state_5595__$1 = state_5595;
if(cljs.core.truth_(inst_5568)){
var statearr_5604_5622 = state_5595__$1;
(statearr_5604_5622[(1)] = (4));

} else {
var statearr_5605_5623 = state_5595__$1;
(statearr_5605_5623[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5596 === (11))){
var inst_5565 = (state_5595[(10)]);
var inst_5584 = (state_5595[(2)]);
var tmp5603 = inst_5565;
var inst_5565__$1 = tmp5603;
var state_5595__$1 = (function (){var statearr_5606 = state_5595;
(statearr_5606[(10)] = inst_5565__$1);

(statearr_5606[(11)] = inst_5584);

return statearr_5606;
})();
var statearr_5607_5624 = state_5595__$1;
(statearr_5607_5624[(2)] = null);

(statearr_5607_5624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5596 === (9))){
var inst_5575 = (state_5595[(7)]);
var state_5595__$1 = state_5595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5595__$1,(11),out,inst_5575);
} else {
if((state_val_5596 === (5))){
var inst_5589 = cljs.core.async.close_BANG_.call(null,out);
var state_5595__$1 = state_5595;
var statearr_5608_5625 = state_5595__$1;
(statearr_5608_5625[(2)] = inst_5589);

(statearr_5608_5625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5596 === (10))){
var inst_5587 = (state_5595[(2)]);
var state_5595__$1 = state_5595;
var statearr_5609_5626 = state_5595__$1;
(statearr_5609_5626[(2)] = inst_5587);

(statearr_5609_5626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5596 === (8))){
var inst_5576 = (state_5595[(9)]);
var inst_5575 = (state_5595[(7)]);
var inst_5574 = (state_5595[(8)]);
var inst_5565 = (state_5595[(10)]);
var inst_5579 = (function (){var cs = inst_5565;
var vec__5570 = inst_5574;
var v = inst_5575;
var c = inst_5576;
return (function (p1__5561_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5561_SHARP_);
});
})();
var inst_5580 = cljs.core.filterv.call(null,inst_5579,inst_5565);
var inst_5565__$1 = inst_5580;
var state_5595__$1 = (function (){var statearr_5610 = state_5595;
(statearr_5610[(10)] = inst_5565__$1);

return statearr_5610;
})();
var statearr_5611_5627 = state_5595__$1;
(statearr_5611_5627[(2)] = null);

(statearr_5611_5627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_5612 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5612[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_5612[(1)] = (1));

return statearr_5612;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_5595){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5613){if((e5613 instanceof Object)){
var ex__2160__auto__ = e5613;
var statearr_5614_5628 = state_5595;
(statearr_5614_5628[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5629 = state_5595;
state_5595 = G__5629;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_5595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_5595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5615 = f__2174__auto__.call(null);
(statearr_5615[(6)] = c__2173__auto___5617);

return statearr_5615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__5631 = arguments.length;
switch (G__5631) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2173__auto___5676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5655){
var state_val_5656 = (state_5655[(1)]);
if((state_val_5656 === (7))){
var inst_5637 = (state_5655[(7)]);
var inst_5637__$1 = (state_5655[(2)]);
var inst_5638 = (inst_5637__$1 == null);
var inst_5639 = cljs.core.not.call(null,inst_5638);
var state_5655__$1 = (function (){var statearr_5657 = state_5655;
(statearr_5657[(7)] = inst_5637__$1);

return statearr_5657;
})();
if(inst_5639){
var statearr_5658_5677 = state_5655__$1;
(statearr_5658_5677[(1)] = (8));

} else {
var statearr_5659_5678 = state_5655__$1;
(statearr_5659_5678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (1))){
var inst_5632 = (0);
var state_5655__$1 = (function (){var statearr_5660 = state_5655;
(statearr_5660[(8)] = inst_5632);

return statearr_5660;
})();
var statearr_5661_5679 = state_5655__$1;
(statearr_5661_5679[(2)] = null);

(statearr_5661_5679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (4))){
var state_5655__$1 = state_5655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5655__$1,(7),ch);
} else {
if((state_val_5656 === (6))){
var inst_5650 = (state_5655[(2)]);
var state_5655__$1 = state_5655;
var statearr_5662_5680 = state_5655__$1;
(statearr_5662_5680[(2)] = inst_5650);

(statearr_5662_5680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (3))){
var inst_5652 = (state_5655[(2)]);
var inst_5653 = cljs.core.async.close_BANG_.call(null,out);
var state_5655__$1 = (function (){var statearr_5663 = state_5655;
(statearr_5663[(9)] = inst_5652);

return statearr_5663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5655__$1,inst_5653);
} else {
if((state_val_5656 === (2))){
var inst_5632 = (state_5655[(8)]);
var inst_5634 = (inst_5632 < n);
var state_5655__$1 = state_5655;
if(cljs.core.truth_(inst_5634)){
var statearr_5664_5681 = state_5655__$1;
(statearr_5664_5681[(1)] = (4));

} else {
var statearr_5665_5682 = state_5655__$1;
(statearr_5665_5682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (11))){
var inst_5632 = (state_5655[(8)]);
var inst_5642 = (state_5655[(2)]);
var inst_5643 = (inst_5632 + (1));
var inst_5632__$1 = inst_5643;
var state_5655__$1 = (function (){var statearr_5666 = state_5655;
(statearr_5666[(8)] = inst_5632__$1);

(statearr_5666[(10)] = inst_5642);

return statearr_5666;
})();
var statearr_5667_5683 = state_5655__$1;
(statearr_5667_5683[(2)] = null);

(statearr_5667_5683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (9))){
var state_5655__$1 = state_5655;
var statearr_5668_5684 = state_5655__$1;
(statearr_5668_5684[(2)] = null);

(statearr_5668_5684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (5))){
var state_5655__$1 = state_5655;
var statearr_5669_5685 = state_5655__$1;
(statearr_5669_5685[(2)] = null);

(statearr_5669_5685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (10))){
var inst_5647 = (state_5655[(2)]);
var state_5655__$1 = state_5655;
var statearr_5670_5686 = state_5655__$1;
(statearr_5670_5686[(2)] = inst_5647);

(statearr_5670_5686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5656 === (8))){
var inst_5637 = (state_5655[(7)]);
var state_5655__$1 = state_5655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5655__$1,(11),out,inst_5637);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_5671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5671[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_5671[(1)] = (1));

return statearr_5671;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_5655){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5672){if((e5672 instanceof Object)){
var ex__2160__auto__ = e5672;
var statearr_5673_5687 = state_5655;
(statearr_5673_5687[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5688 = state_5655;
state_5655 = G__5688;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_5655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_5655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5674 = f__2174__auto__.call(null);
(statearr_5674[(6)] = c__2173__auto___5676);

return statearr_5674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5690 = (function (f,ch,meta5691){
this.f = f;
this.ch = ch;
this.meta5691 = meta5691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5692,meta5691__$1){
var self__ = this;
var _5692__$1 = this;
return (new cljs.core.async.t_cljs$core$async5690(self__.f,self__.ch,meta5691__$1));
}));

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5692){
var self__ = this;
var _5692__$1 = this;
return self__.meta5691;
}));

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5693 = (function (f,ch,meta5691,_,fn1,meta5694){
this.f = f;
this.ch = ch;
this.meta5691 = meta5691;
this._ = _;
this.fn1 = fn1;
this.meta5694 = meta5694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5695,meta5694__$1){
var self__ = this;
var _5695__$1 = this;
return (new cljs.core.async.t_cljs$core$async5693(self__.f,self__.ch,self__.meta5691,self__._,self__.fn1,meta5694__$1));
}));

(cljs.core.async.t_cljs$core$async5693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5695){
var self__ = this;
var _5695__$1 = this;
return self__.meta5694;
}));

(cljs.core.async.t_cljs$core$async5693.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async5693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__5689_SHARP_){
return f1.call(null,(((p1__5689_SHARP_ == null))?null:self__.f.call(null,p1__5689_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async5693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5691","meta5691",-1163941144,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async5690","cljs.core.async/t_cljs$core$async5690",1779498584,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5694","meta5694",-2021863200,null)], null);
}));

(cljs.core.async.t_cljs$core$async5693.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5693");

(cljs.core.async.t_cljs$core$async5693.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async5693");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5693.
 */
cljs.core.async.__GT_t_cljs$core$async5693 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5693(f__$1,ch__$1,meta5691__$1,___$2,fn1__$1,meta5694){
return (new cljs.core.async.t_cljs$core$async5693(f__$1,ch__$1,meta5691__$1,___$2,fn1__$1,meta5694));
});

}

return (new cljs.core.async.t_cljs$core$async5693(self__.f,self__.ch,self__.meta5691,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async5690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5691","meta5691",-1163941144,null)], null);
}));

(cljs.core.async.t_cljs$core$async5690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5690");

(cljs.core.async.t_cljs$core$async5690.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async5690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5690.
 */
cljs.core.async.__GT_t_cljs$core$async5690 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async5690(f__$1,ch__$1,meta5691){
return (new cljs.core.async.t_cljs$core$async5690(f__$1,ch__$1,meta5691));
});

}

return (new cljs.core.async.t_cljs$core$async5690(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5696 = (function (f,ch,meta5697){
this.f = f;
this.ch = ch;
this.meta5697 = meta5697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5698,meta5697__$1){
var self__ = this;
var _5698__$1 = this;
return (new cljs.core.async.t_cljs$core$async5696(self__.f,self__.ch,meta5697__$1));
}));

(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5698){
var self__ = this;
var _5698__$1 = this;
return self__.meta5697;
}));

(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async5696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5697","meta5697",2124721470,null)], null);
}));

(cljs.core.async.t_cljs$core$async5696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5696");

(cljs.core.async.t_cljs$core$async5696.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async5696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5696.
 */
cljs.core.async.__GT_t_cljs$core$async5696 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async5696(f__$1,ch__$1,meta5697){
return (new cljs.core.async.t_cljs$core$async5696(f__$1,ch__$1,meta5697));
});

}

return (new cljs.core.async.t_cljs$core$async5696(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async5699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async5699 = (function (p,ch,meta5700){
this.p = p;
this.ch = ch;
this.meta5700 = meta5700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5701,meta5700__$1){
var self__ = this;
var _5701__$1 = this;
return (new cljs.core.async.t_cljs$core$async5699(self__.p,self__.ch,meta5700__$1));
}));

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5701){
var self__ = this;
var _5701__$1 = this;
return self__.meta5700;
}));

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async5699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async5699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5700","meta5700",-122135130,null)], null);
}));

(cljs.core.async.t_cljs$core$async5699.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async5699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async5699");

(cljs.core.async.t_cljs$core$async5699.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async5699");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async5699.
 */
cljs.core.async.__GT_t_cljs$core$async5699 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async5699(p__$1,ch__$1,meta5700){
return (new cljs.core.async.t_cljs$core$async5699(p__$1,ch__$1,meta5700));
});

}

return (new cljs.core.async.t_cljs$core$async5699(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__5703 = arguments.length;
switch (G__5703) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2173__auto___5743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5724){
var state_val_5725 = (state_5724[(1)]);
if((state_val_5725 === (7))){
var inst_5720 = (state_5724[(2)]);
var state_5724__$1 = state_5724;
var statearr_5726_5744 = state_5724__$1;
(statearr_5726_5744[(2)] = inst_5720);

(statearr_5726_5744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (1))){
var state_5724__$1 = state_5724;
var statearr_5727_5745 = state_5724__$1;
(statearr_5727_5745[(2)] = null);

(statearr_5727_5745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (4))){
var inst_5706 = (state_5724[(7)]);
var inst_5706__$1 = (state_5724[(2)]);
var inst_5707 = (inst_5706__$1 == null);
var state_5724__$1 = (function (){var statearr_5728 = state_5724;
(statearr_5728[(7)] = inst_5706__$1);

return statearr_5728;
})();
if(cljs.core.truth_(inst_5707)){
var statearr_5729_5746 = state_5724__$1;
(statearr_5729_5746[(1)] = (5));

} else {
var statearr_5730_5747 = state_5724__$1;
(statearr_5730_5747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (6))){
var inst_5706 = (state_5724[(7)]);
var inst_5711 = p.call(null,inst_5706);
var state_5724__$1 = state_5724;
if(cljs.core.truth_(inst_5711)){
var statearr_5731_5748 = state_5724__$1;
(statearr_5731_5748[(1)] = (8));

} else {
var statearr_5732_5749 = state_5724__$1;
(statearr_5732_5749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (3))){
var inst_5722 = (state_5724[(2)]);
var state_5724__$1 = state_5724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5724__$1,inst_5722);
} else {
if((state_val_5725 === (2))){
var state_5724__$1 = state_5724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5724__$1,(4),ch);
} else {
if((state_val_5725 === (11))){
var inst_5714 = (state_5724[(2)]);
var state_5724__$1 = state_5724;
var statearr_5733_5750 = state_5724__$1;
(statearr_5733_5750[(2)] = inst_5714);

(statearr_5733_5750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (9))){
var state_5724__$1 = state_5724;
var statearr_5734_5751 = state_5724__$1;
(statearr_5734_5751[(2)] = null);

(statearr_5734_5751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (5))){
var inst_5709 = cljs.core.async.close_BANG_.call(null,out);
var state_5724__$1 = state_5724;
var statearr_5735_5752 = state_5724__$1;
(statearr_5735_5752[(2)] = inst_5709);

(statearr_5735_5752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (10))){
var inst_5717 = (state_5724[(2)]);
var state_5724__$1 = (function (){var statearr_5736 = state_5724;
(statearr_5736[(8)] = inst_5717);

return statearr_5736;
})();
var statearr_5737_5753 = state_5724__$1;
(statearr_5737_5753[(2)] = null);

(statearr_5737_5753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5725 === (8))){
var inst_5706 = (state_5724[(7)]);
var state_5724__$1 = state_5724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5724__$1,(11),out,inst_5706);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_5738 = [null,null,null,null,null,null,null,null,null];
(statearr_5738[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_5738[(1)] = (1));

return statearr_5738;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_5724){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5739){if((e5739 instanceof Object)){
var ex__2160__auto__ = e5739;
var statearr_5740_5754 = state_5724;
(statearr_5740_5754[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5755 = state_5724;
state_5724 = G__5755;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_5724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_5724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5741 = f__2174__auto__.call(null);
(statearr_5741[(6)] = c__2173__auto___5743);

return statearr_5741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__5757 = arguments.length;
switch (G__5757) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2173__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5820){
var state_val_5821 = (state_5820[(1)]);
if((state_val_5821 === (7))){
var inst_5816 = (state_5820[(2)]);
var state_5820__$1 = state_5820;
var statearr_5822_5860 = state_5820__$1;
(statearr_5822_5860[(2)] = inst_5816);

(statearr_5822_5860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (20))){
var inst_5786 = (state_5820[(7)]);
var inst_5797 = (state_5820[(2)]);
var inst_5798 = cljs.core.next.call(null,inst_5786);
var inst_5772 = inst_5798;
var inst_5773 = null;
var inst_5774 = (0);
var inst_5775 = (0);
var state_5820__$1 = (function (){var statearr_5823 = state_5820;
(statearr_5823[(8)] = inst_5773);

(statearr_5823[(9)] = inst_5797);

(statearr_5823[(10)] = inst_5774);

(statearr_5823[(11)] = inst_5775);

(statearr_5823[(12)] = inst_5772);

return statearr_5823;
})();
var statearr_5824_5861 = state_5820__$1;
(statearr_5824_5861[(2)] = null);

(statearr_5824_5861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (1))){
var state_5820__$1 = state_5820;
var statearr_5825_5862 = state_5820__$1;
(statearr_5825_5862[(2)] = null);

(statearr_5825_5862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (4))){
var inst_5761 = (state_5820[(13)]);
var inst_5761__$1 = (state_5820[(2)]);
var inst_5762 = (inst_5761__$1 == null);
var state_5820__$1 = (function (){var statearr_5826 = state_5820;
(statearr_5826[(13)] = inst_5761__$1);

return statearr_5826;
})();
if(cljs.core.truth_(inst_5762)){
var statearr_5827_5863 = state_5820__$1;
(statearr_5827_5863[(1)] = (5));

} else {
var statearr_5828_5864 = state_5820__$1;
(statearr_5828_5864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (15))){
var state_5820__$1 = state_5820;
var statearr_5832_5865 = state_5820__$1;
(statearr_5832_5865[(2)] = null);

(statearr_5832_5865[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (21))){
var state_5820__$1 = state_5820;
var statearr_5833_5866 = state_5820__$1;
(statearr_5833_5866[(2)] = null);

(statearr_5833_5866[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (13))){
var inst_5773 = (state_5820[(8)]);
var inst_5774 = (state_5820[(10)]);
var inst_5775 = (state_5820[(11)]);
var inst_5772 = (state_5820[(12)]);
var inst_5782 = (state_5820[(2)]);
var inst_5783 = (inst_5775 + (1));
var tmp5829 = inst_5773;
var tmp5830 = inst_5774;
var tmp5831 = inst_5772;
var inst_5772__$1 = tmp5831;
var inst_5773__$1 = tmp5829;
var inst_5774__$1 = tmp5830;
var inst_5775__$1 = inst_5783;
var state_5820__$1 = (function (){var statearr_5834 = state_5820;
(statearr_5834[(8)] = inst_5773__$1);

(statearr_5834[(14)] = inst_5782);

(statearr_5834[(10)] = inst_5774__$1);

(statearr_5834[(11)] = inst_5775__$1);

(statearr_5834[(12)] = inst_5772__$1);

return statearr_5834;
})();
var statearr_5835_5867 = state_5820__$1;
(statearr_5835_5867[(2)] = null);

(statearr_5835_5867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (22))){
var state_5820__$1 = state_5820;
var statearr_5836_5868 = state_5820__$1;
(statearr_5836_5868[(2)] = null);

(statearr_5836_5868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (6))){
var inst_5761 = (state_5820[(13)]);
var inst_5770 = f.call(null,inst_5761);
var inst_5771 = cljs.core.seq.call(null,inst_5770);
var inst_5772 = inst_5771;
var inst_5773 = null;
var inst_5774 = (0);
var inst_5775 = (0);
var state_5820__$1 = (function (){var statearr_5837 = state_5820;
(statearr_5837[(8)] = inst_5773);

(statearr_5837[(10)] = inst_5774);

(statearr_5837[(11)] = inst_5775);

(statearr_5837[(12)] = inst_5772);

return statearr_5837;
})();
var statearr_5838_5869 = state_5820__$1;
(statearr_5838_5869[(2)] = null);

(statearr_5838_5869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (17))){
var inst_5786 = (state_5820[(7)]);
var inst_5790 = cljs.core.chunk_first.call(null,inst_5786);
var inst_5791 = cljs.core.chunk_rest.call(null,inst_5786);
var inst_5792 = cljs.core.count.call(null,inst_5790);
var inst_5772 = inst_5791;
var inst_5773 = inst_5790;
var inst_5774 = inst_5792;
var inst_5775 = (0);
var state_5820__$1 = (function (){var statearr_5839 = state_5820;
(statearr_5839[(8)] = inst_5773);

(statearr_5839[(10)] = inst_5774);

(statearr_5839[(11)] = inst_5775);

(statearr_5839[(12)] = inst_5772);

return statearr_5839;
})();
var statearr_5840_5870 = state_5820__$1;
(statearr_5840_5870[(2)] = null);

(statearr_5840_5870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (3))){
var inst_5818 = (state_5820[(2)]);
var state_5820__$1 = state_5820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5820__$1,inst_5818);
} else {
if((state_val_5821 === (12))){
var inst_5806 = (state_5820[(2)]);
var state_5820__$1 = state_5820;
var statearr_5841_5871 = state_5820__$1;
(statearr_5841_5871[(2)] = inst_5806);

(statearr_5841_5871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (2))){
var state_5820__$1 = state_5820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5820__$1,(4),in$);
} else {
if((state_val_5821 === (23))){
var inst_5814 = (state_5820[(2)]);
var state_5820__$1 = state_5820;
var statearr_5842_5872 = state_5820__$1;
(statearr_5842_5872[(2)] = inst_5814);

(statearr_5842_5872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (19))){
var inst_5801 = (state_5820[(2)]);
var state_5820__$1 = state_5820;
var statearr_5843_5873 = state_5820__$1;
(statearr_5843_5873[(2)] = inst_5801);

(statearr_5843_5873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (11))){
var inst_5786 = (state_5820[(7)]);
var inst_5772 = (state_5820[(12)]);
var inst_5786__$1 = cljs.core.seq.call(null,inst_5772);
var state_5820__$1 = (function (){var statearr_5844 = state_5820;
(statearr_5844[(7)] = inst_5786__$1);

return statearr_5844;
})();
if(inst_5786__$1){
var statearr_5845_5874 = state_5820__$1;
(statearr_5845_5874[(1)] = (14));

} else {
var statearr_5846_5875 = state_5820__$1;
(statearr_5846_5875[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (9))){
var inst_5808 = (state_5820[(2)]);
var inst_5809 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5820__$1 = (function (){var statearr_5847 = state_5820;
(statearr_5847[(15)] = inst_5808);

return statearr_5847;
})();
if(cljs.core.truth_(inst_5809)){
var statearr_5848_5876 = state_5820__$1;
(statearr_5848_5876[(1)] = (21));

} else {
var statearr_5849_5877 = state_5820__$1;
(statearr_5849_5877[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (5))){
var inst_5764 = cljs.core.async.close_BANG_.call(null,out);
var state_5820__$1 = state_5820;
var statearr_5850_5878 = state_5820__$1;
(statearr_5850_5878[(2)] = inst_5764);

(statearr_5850_5878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (14))){
var inst_5786 = (state_5820[(7)]);
var inst_5788 = cljs.core.chunked_seq_QMARK_.call(null,inst_5786);
var state_5820__$1 = state_5820;
if(inst_5788){
var statearr_5851_5879 = state_5820__$1;
(statearr_5851_5879[(1)] = (17));

} else {
var statearr_5852_5880 = state_5820__$1;
(statearr_5852_5880[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (16))){
var inst_5804 = (state_5820[(2)]);
var state_5820__$1 = state_5820;
var statearr_5853_5881 = state_5820__$1;
(statearr_5853_5881[(2)] = inst_5804);

(statearr_5853_5881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5821 === (10))){
var inst_5773 = (state_5820[(8)]);
var inst_5775 = (state_5820[(11)]);
var inst_5780 = cljs.core._nth.call(null,inst_5773,inst_5775);
var state_5820__$1 = state_5820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5820__$1,(13),out,inst_5780);
} else {
if((state_val_5821 === (18))){
var inst_5786 = (state_5820[(7)]);
var inst_5795 = cljs.core.first.call(null,inst_5786);
var state_5820__$1 = state_5820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5820__$1,(20),out,inst_5795);
} else {
if((state_val_5821 === (8))){
var inst_5774 = (state_5820[(10)]);
var inst_5775 = (state_5820[(11)]);
var inst_5777 = (inst_5775 < inst_5774);
var inst_5778 = inst_5777;
var state_5820__$1 = state_5820;
if(cljs.core.truth_(inst_5778)){
var statearr_5854_5882 = state_5820__$1;
(statearr_5854_5882[(1)] = (10));

} else {
var statearr_5855_5883 = state_5820__$1;
(statearr_5855_5883[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2157__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2157__auto____0 = (function (){
var statearr_5856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5856[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2157__auto__);

(statearr_5856[(1)] = (1));

return statearr_5856;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2157__auto____1 = (function (state_5820){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5857){if((e5857 instanceof Object)){
var ex__2160__auto__ = e5857;
var statearr_5858_5884 = state_5820;
(statearr_5858_5884[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5885 = state_5820;
state_5820 = G__5885;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2157__auto__ = function(state_5820){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2157__auto____1.call(this,state_5820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2157__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2157__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5859 = f__2174__auto__.call(null);
(statearr_5859[(6)] = c__2173__auto__);

return statearr_5859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));

return c__2173__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5887 = arguments.length;
switch (G__5887) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__5890 = arguments.length;
switch (G__5890) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__5893 = arguments.length;
switch (G__5893) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2173__auto___5940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5917){
var state_val_5918 = (state_5917[(1)]);
if((state_val_5918 === (7))){
var inst_5912 = (state_5917[(2)]);
var state_5917__$1 = state_5917;
var statearr_5919_5941 = state_5917__$1;
(statearr_5919_5941[(2)] = inst_5912);

(statearr_5919_5941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5918 === (1))){
var inst_5894 = null;
var state_5917__$1 = (function (){var statearr_5920 = state_5917;
(statearr_5920[(7)] = inst_5894);

return statearr_5920;
})();
var statearr_5921_5942 = state_5917__$1;
(statearr_5921_5942[(2)] = null);

(statearr_5921_5942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5918 === (4))){
var inst_5897 = (state_5917[(8)]);
var inst_5897__$1 = (state_5917[(2)]);
var inst_5898 = (inst_5897__$1 == null);
var inst_5899 = cljs.core.not.call(null,inst_5898);
var state_5917__$1 = (function (){var statearr_5922 = state_5917;
(statearr_5922[(8)] = inst_5897__$1);

return statearr_5922;
})();
if(inst_5899){
var statearr_5923_5943 = state_5917__$1;
(statearr_5923_5943[(1)] = (5));

} else {
var statearr_5924_5944 = state_5917__$1;
(statearr_5924_5944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5918 === (6))){
var state_5917__$1 = state_5917;
var statearr_5925_5945 = state_5917__$1;
(statearr_5925_5945[(2)] = null);

(statearr_5925_5945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5918 === (3))){
var inst_5914 = (state_5917[(2)]);
var inst_5915 = cljs.core.async.close_BANG_.call(null,out);
var state_5917__$1 = (function (){var statearr_5926 = state_5917;
(statearr_5926[(9)] = inst_5914);

return statearr_5926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5917__$1,inst_5915);
} else {
if((state_val_5918 === (2))){
var state_5917__$1 = state_5917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5917__$1,(4),ch);
} else {
if((state_val_5918 === (11))){
var inst_5897 = (state_5917[(8)]);
var inst_5906 = (state_5917[(2)]);
var inst_5894 = inst_5897;
var state_5917__$1 = (function (){var statearr_5927 = state_5917;
(statearr_5927[(7)] = inst_5894);

(statearr_5927[(10)] = inst_5906);

return statearr_5927;
})();
var statearr_5928_5946 = state_5917__$1;
(statearr_5928_5946[(2)] = null);

(statearr_5928_5946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5918 === (9))){
var inst_5897 = (state_5917[(8)]);
var state_5917__$1 = state_5917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5917__$1,(11),out,inst_5897);
} else {
if((state_val_5918 === (5))){
var inst_5897 = (state_5917[(8)]);
var inst_5894 = (state_5917[(7)]);
var inst_5901 = cljs.core._EQ_.call(null,inst_5897,inst_5894);
var state_5917__$1 = state_5917;
if(inst_5901){
var statearr_5930_5947 = state_5917__$1;
(statearr_5930_5947[(1)] = (8));

} else {
var statearr_5931_5948 = state_5917__$1;
(statearr_5931_5948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5918 === (10))){
var inst_5909 = (state_5917[(2)]);
var state_5917__$1 = state_5917;
var statearr_5932_5949 = state_5917__$1;
(statearr_5932_5949[(2)] = inst_5909);

(statearr_5932_5949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5918 === (8))){
var inst_5894 = (state_5917[(7)]);
var tmp5929 = inst_5894;
var inst_5894__$1 = tmp5929;
var state_5917__$1 = (function (){var statearr_5933 = state_5917;
(statearr_5933[(7)] = inst_5894__$1);

return statearr_5933;
})();
var statearr_5934_5950 = state_5917__$1;
(statearr_5934_5950[(2)] = null);

(statearr_5934_5950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_5935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5935[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_5935[(1)] = (1));

return statearr_5935;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_5917){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e5936){if((e5936 instanceof Object)){
var ex__2160__auto__ = e5936;
var statearr_5937_5951 = state_5917;
(statearr_5937_5951[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5952 = state_5917;
state_5917 = G__5952;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_5917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_5917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_5938 = f__2174__auto__.call(null);
(statearr_5938[(6)] = c__2173__auto___5940);

return statearr_5938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5954 = arguments.length;
switch (G__5954) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2173__auto___6020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_5992){
var state_val_5993 = (state_5992[(1)]);
if((state_val_5993 === (7))){
var inst_5988 = (state_5992[(2)]);
var state_5992__$1 = state_5992;
var statearr_5994_6021 = state_5992__$1;
(statearr_5994_6021[(2)] = inst_5988);

(statearr_5994_6021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (1))){
var inst_5955 = (new Array(n));
var inst_5956 = inst_5955;
var inst_5957 = (0);
var state_5992__$1 = (function (){var statearr_5995 = state_5992;
(statearr_5995[(7)] = inst_5957);

(statearr_5995[(8)] = inst_5956);

return statearr_5995;
})();
var statearr_5996_6022 = state_5992__$1;
(statearr_5996_6022[(2)] = null);

(statearr_5996_6022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (4))){
var inst_5960 = (state_5992[(9)]);
var inst_5960__$1 = (state_5992[(2)]);
var inst_5961 = (inst_5960__$1 == null);
var inst_5962 = cljs.core.not.call(null,inst_5961);
var state_5992__$1 = (function (){var statearr_5997 = state_5992;
(statearr_5997[(9)] = inst_5960__$1);

return statearr_5997;
})();
if(inst_5962){
var statearr_5998_6023 = state_5992__$1;
(statearr_5998_6023[(1)] = (5));

} else {
var statearr_5999_6024 = state_5992__$1;
(statearr_5999_6024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (15))){
var inst_5982 = (state_5992[(2)]);
var state_5992__$1 = state_5992;
var statearr_6000_6025 = state_5992__$1;
(statearr_6000_6025[(2)] = inst_5982);

(statearr_6000_6025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (13))){
var state_5992__$1 = state_5992;
var statearr_6001_6026 = state_5992__$1;
(statearr_6001_6026[(2)] = null);

(statearr_6001_6026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (6))){
var inst_5957 = (state_5992[(7)]);
var inst_5978 = (inst_5957 > (0));
var state_5992__$1 = state_5992;
if(cljs.core.truth_(inst_5978)){
var statearr_6002_6027 = state_5992__$1;
(statearr_6002_6027[(1)] = (12));

} else {
var statearr_6003_6028 = state_5992__$1;
(statearr_6003_6028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (3))){
var inst_5990 = (state_5992[(2)]);
var state_5992__$1 = state_5992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5992__$1,inst_5990);
} else {
if((state_val_5993 === (12))){
var inst_5956 = (state_5992[(8)]);
var inst_5980 = cljs.core.vec.call(null,inst_5956);
var state_5992__$1 = state_5992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5992__$1,(15),out,inst_5980);
} else {
if((state_val_5993 === (2))){
var state_5992__$1 = state_5992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5992__$1,(4),ch);
} else {
if((state_val_5993 === (11))){
var inst_5972 = (state_5992[(2)]);
var inst_5973 = (new Array(n));
var inst_5956 = inst_5973;
var inst_5957 = (0);
var state_5992__$1 = (function (){var statearr_6004 = state_5992;
(statearr_6004[(7)] = inst_5957);

(statearr_6004[(8)] = inst_5956);

(statearr_6004[(10)] = inst_5972);

return statearr_6004;
})();
var statearr_6005_6029 = state_5992__$1;
(statearr_6005_6029[(2)] = null);

(statearr_6005_6029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (9))){
var inst_5956 = (state_5992[(8)]);
var inst_5970 = cljs.core.vec.call(null,inst_5956);
var state_5992__$1 = state_5992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5992__$1,(11),out,inst_5970);
} else {
if((state_val_5993 === (5))){
var inst_5960 = (state_5992[(9)]);
var inst_5957 = (state_5992[(7)]);
var inst_5956 = (state_5992[(8)]);
var inst_5965 = (state_5992[(11)]);
var inst_5964 = (inst_5956[inst_5957] = inst_5960);
var inst_5965__$1 = (inst_5957 + (1));
var inst_5966 = (inst_5965__$1 < n);
var state_5992__$1 = (function (){var statearr_6006 = state_5992;
(statearr_6006[(12)] = inst_5964);

(statearr_6006[(11)] = inst_5965__$1);

return statearr_6006;
})();
if(cljs.core.truth_(inst_5966)){
var statearr_6007_6030 = state_5992__$1;
(statearr_6007_6030[(1)] = (8));

} else {
var statearr_6008_6031 = state_5992__$1;
(statearr_6008_6031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (14))){
var inst_5985 = (state_5992[(2)]);
var inst_5986 = cljs.core.async.close_BANG_.call(null,out);
var state_5992__$1 = (function (){var statearr_6010 = state_5992;
(statearr_6010[(13)] = inst_5985);

return statearr_6010;
})();
var statearr_6011_6032 = state_5992__$1;
(statearr_6011_6032[(2)] = inst_5986);

(statearr_6011_6032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (10))){
var inst_5976 = (state_5992[(2)]);
var state_5992__$1 = state_5992;
var statearr_6012_6033 = state_5992__$1;
(statearr_6012_6033[(2)] = inst_5976);

(statearr_6012_6033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5993 === (8))){
var inst_5956 = (state_5992[(8)]);
var inst_5965 = (state_5992[(11)]);
var tmp6009 = inst_5956;
var inst_5956__$1 = tmp6009;
var inst_5957 = inst_5965;
var state_5992__$1 = (function (){var statearr_6013 = state_5992;
(statearr_6013[(7)] = inst_5957);

(statearr_6013[(8)] = inst_5956__$1);

return statearr_6013;
})();
var statearr_6014_6034 = state_5992__$1;
(statearr_6014_6034[(2)] = null);

(statearr_6014_6034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_6015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6015[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_6015[(1)] = (1));

return statearr_6015;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_5992){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_5992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e6016){if((e6016 instanceof Object)){
var ex__2160__auto__ = e6016;
var statearr_6017_6035 = state_5992;
(statearr_6017_6035[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6036 = state_5992;
state_5992 = G__6036;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_5992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_5992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_6018 = f__2174__auto__.call(null);
(statearr_6018[(6)] = c__2173__auto___6020);

return statearr_6018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__6038 = arguments.length;
switch (G__6038) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2173__auto___6108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2174__auto__ = (function (){var switch__2156__auto__ = (function (state_6080){
var state_val_6081 = (state_6080[(1)]);
if((state_val_6081 === (7))){
var inst_6076 = (state_6080[(2)]);
var state_6080__$1 = state_6080;
var statearr_6082_6109 = state_6080__$1;
(statearr_6082_6109[(2)] = inst_6076);

(statearr_6082_6109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (1))){
var inst_6039 = [];
var inst_6040 = inst_6039;
var inst_6041 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6080__$1 = (function (){var statearr_6083 = state_6080;
(statearr_6083[(7)] = inst_6040);

(statearr_6083[(8)] = inst_6041);

return statearr_6083;
})();
var statearr_6084_6110 = state_6080__$1;
(statearr_6084_6110[(2)] = null);

(statearr_6084_6110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (4))){
var inst_6044 = (state_6080[(9)]);
var inst_6044__$1 = (state_6080[(2)]);
var inst_6045 = (inst_6044__$1 == null);
var inst_6046 = cljs.core.not.call(null,inst_6045);
var state_6080__$1 = (function (){var statearr_6085 = state_6080;
(statearr_6085[(9)] = inst_6044__$1);

return statearr_6085;
})();
if(inst_6046){
var statearr_6086_6111 = state_6080__$1;
(statearr_6086_6111[(1)] = (5));

} else {
var statearr_6087_6112 = state_6080__$1;
(statearr_6087_6112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (15))){
var inst_6070 = (state_6080[(2)]);
var state_6080__$1 = state_6080;
var statearr_6088_6113 = state_6080__$1;
(statearr_6088_6113[(2)] = inst_6070);

(statearr_6088_6113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (13))){
var state_6080__$1 = state_6080;
var statearr_6089_6114 = state_6080__$1;
(statearr_6089_6114[(2)] = null);

(statearr_6089_6114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (6))){
var inst_6040 = (state_6080[(7)]);
var inst_6065 = inst_6040.length;
var inst_6066 = (inst_6065 > (0));
var state_6080__$1 = state_6080;
if(cljs.core.truth_(inst_6066)){
var statearr_6090_6115 = state_6080__$1;
(statearr_6090_6115[(1)] = (12));

} else {
var statearr_6091_6116 = state_6080__$1;
(statearr_6091_6116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (3))){
var inst_6078 = (state_6080[(2)]);
var state_6080__$1 = state_6080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6080__$1,inst_6078);
} else {
if((state_val_6081 === (12))){
var inst_6040 = (state_6080[(7)]);
var inst_6068 = cljs.core.vec.call(null,inst_6040);
var state_6080__$1 = state_6080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6080__$1,(15),out,inst_6068);
} else {
if((state_val_6081 === (2))){
var state_6080__$1 = state_6080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6080__$1,(4),ch);
} else {
if((state_val_6081 === (11))){
var inst_6048 = (state_6080[(10)]);
var inst_6044 = (state_6080[(9)]);
var inst_6058 = (state_6080[(2)]);
var inst_6059 = [];
var inst_6060 = inst_6059.push(inst_6044);
var inst_6040 = inst_6059;
var inst_6041 = inst_6048;
var state_6080__$1 = (function (){var statearr_6092 = state_6080;
(statearr_6092[(11)] = inst_6060);

(statearr_6092[(7)] = inst_6040);

(statearr_6092[(8)] = inst_6041);

(statearr_6092[(12)] = inst_6058);

return statearr_6092;
})();
var statearr_6093_6117 = state_6080__$1;
(statearr_6093_6117[(2)] = null);

(statearr_6093_6117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (9))){
var inst_6040 = (state_6080[(7)]);
var inst_6056 = cljs.core.vec.call(null,inst_6040);
var state_6080__$1 = state_6080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6080__$1,(11),out,inst_6056);
} else {
if((state_val_6081 === (5))){
var inst_6048 = (state_6080[(10)]);
var inst_6041 = (state_6080[(8)]);
var inst_6044 = (state_6080[(9)]);
var inst_6048__$1 = f.call(null,inst_6044);
var inst_6049 = cljs.core._EQ_.call(null,inst_6048__$1,inst_6041);
var inst_6050 = cljs.core.keyword_identical_QMARK_.call(null,inst_6041,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6051 = ((inst_6049) || (inst_6050));
var state_6080__$1 = (function (){var statearr_6094 = state_6080;
(statearr_6094[(10)] = inst_6048__$1);

return statearr_6094;
})();
if(cljs.core.truth_(inst_6051)){
var statearr_6095_6118 = state_6080__$1;
(statearr_6095_6118[(1)] = (8));

} else {
var statearr_6096_6119 = state_6080__$1;
(statearr_6096_6119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (14))){
var inst_6073 = (state_6080[(2)]);
var inst_6074 = cljs.core.async.close_BANG_.call(null,out);
var state_6080__$1 = (function (){var statearr_6098 = state_6080;
(statearr_6098[(13)] = inst_6073);

return statearr_6098;
})();
var statearr_6099_6120 = state_6080__$1;
(statearr_6099_6120[(2)] = inst_6074);

(statearr_6099_6120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (10))){
var inst_6063 = (state_6080[(2)]);
var state_6080__$1 = state_6080;
var statearr_6100_6121 = state_6080__$1;
(statearr_6100_6121[(2)] = inst_6063);

(statearr_6100_6121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6081 === (8))){
var inst_6048 = (state_6080[(10)]);
var inst_6040 = (state_6080[(7)]);
var inst_6044 = (state_6080[(9)]);
var inst_6053 = inst_6040.push(inst_6044);
var tmp6097 = inst_6040;
var inst_6040__$1 = tmp6097;
var inst_6041 = inst_6048;
var state_6080__$1 = (function (){var statearr_6101 = state_6080;
(statearr_6101[(7)] = inst_6040__$1);

(statearr_6101[(8)] = inst_6041);

(statearr_6101[(14)] = inst_6053);

return statearr_6101;
})();
var statearr_6102_6122 = state_6080__$1;
(statearr_6102_6122[(2)] = null);

(statearr_6102_6122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__2157__auto__ = null;
var cljs$core$async$state_machine__2157__auto____0 = (function (){
var statearr_6103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6103[(0)] = cljs$core$async$state_machine__2157__auto__);

(statearr_6103[(1)] = (1));

return statearr_6103;
});
var cljs$core$async$state_machine__2157__auto____1 = (function (state_6080){
while(true){
var ret_value__2158__auto__ = (function (){try{while(true){
var result__2159__auto__ = switch__2156__auto__.call(null,state_6080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2159__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2159__auto__;
}
break;
}
}catch (e6104){if((e6104 instanceof Object)){
var ex__2160__auto__ = e6104;
var statearr_6105_6123 = state_6080;
(statearr_6105_6123[(5)] = ex__2160__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6124 = state_6080;
state_6080 = G__6124;
continue;
} else {
return ret_value__2158__auto__;
}
break;
}
});
cljs$core$async$state_machine__2157__auto__ = function(state_6080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2157__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2157__auto____1.call(this,state_6080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2157__auto____0;
cljs$core$async$state_machine__2157__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2157__auto____1;
return cljs$core$async$state_machine__2157__auto__;
})()
})();
var state__2175__auto__ = (function (){var statearr_6106 = f__2174__auto__.call(null);
(statearr_6106[(6)] = c__2173__auto___6108);

return statearr_6106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2175__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
