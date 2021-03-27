// Compiled by ClojureScript 1.10.764 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
(cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
}));
(goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
}));
(goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
}));
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__6567_6571 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__6568_6572 = null;
var count__6569_6573 = (0);
var i__6570_6574 = (0);
while(true){
if((i__6570_6574 < count__6569_6573)){
var k_6575 = cljs.core._nth.call(null,chunk__6568_6572,i__6570_6574);
var v_6576 = (b[k_6575]);
(a[k_6575] = v_6576);


var G__6577 = seq__6567_6571;
var G__6578 = chunk__6568_6572;
var G__6579 = count__6569_6573;
var G__6580 = (i__6570_6574 + (1));
seq__6567_6571 = G__6577;
chunk__6568_6572 = G__6578;
count__6569_6573 = G__6579;
i__6570_6574 = G__6580;
continue;
} else {
var temp__5720__auto___6581 = cljs.core.seq.call(null,seq__6567_6571);
if(temp__5720__auto___6581){
var seq__6567_6582__$1 = temp__5720__auto___6581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6567_6582__$1)){
var c__4556__auto___6583 = cljs.core.chunk_first.call(null,seq__6567_6582__$1);
var G__6584 = cljs.core.chunk_rest.call(null,seq__6567_6582__$1);
var G__6585 = c__4556__auto___6583;
var G__6586 = cljs.core.count.call(null,c__4556__auto___6583);
var G__6587 = (0);
seq__6567_6571 = G__6584;
chunk__6568_6572 = G__6585;
count__6569_6573 = G__6586;
i__6570_6574 = G__6587;
continue;
} else {
var k_6588 = cljs.core.first.call(null,seq__6567_6582__$1);
var v_6589 = (b[k_6588]);
(a[k_6588] = v_6589);


var G__6590 = cljs.core.next.call(null,seq__6567_6582__$1);
var G__6591 = null;
var G__6592 = (0);
var G__6593 = (0);
seq__6567_6571 = G__6590;
chunk__6568_6572 = G__6591;
count__6569_6573 = G__6592;
i__6570_6574 = G__6593;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
});
(cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
}));

(cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
}));

(cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
}));

(cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapBuilder.cljs$lang$type = true);

(cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder");

(cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/MapBuilder");
}));

/**
 * Positional factory function for cognitect.transit/MapBuilder.
 */
cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
});
(cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
}));

(cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
}));

(cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
}));

(cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
}));

(cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorBuilder.cljs$lang$type = true);

(cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder");

(cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/VectorBuilder");
}));

/**
 * Positional factory function for cognitect.transit/VectorBuilder.
 */
cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var G__6595 = arguments.length;
switch (G__6595) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
}));

(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__6597 = (i + (2));
var G__6598 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__6597;
ret = G__6598;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.reader.cljs$lang$maxFixedArity = 2);

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
});
(cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
}));

(cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
}));

(cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.KeywordHandler.cljs$lang$type = true);

(cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler");

(cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/KeywordHandler");
}));

/**
 * Positional factory function for cognitect.transit/KeywordHandler.
 */
cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
});
(cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
}));

(cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
}));

(cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SymbolHandler.cljs$lang$type = true);

(cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler");

(cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/SymbolHandler");
}));

/**
 * Positional factory function for cognitect.transit/SymbolHandler.
 */
cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
});
(cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
}));

(cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6599_6603 = cljs.core.seq.call(null,v);
var chunk__6600_6604 = null;
var count__6601_6605 = (0);
var i__6602_6606 = (0);
while(true){
if((i__6602_6606 < count__6601_6605)){
var x_6607 = cljs.core._nth.call(null,chunk__6600_6604,i__6602_6606);
ret.push(x_6607);


var G__6608 = seq__6599_6603;
var G__6609 = chunk__6600_6604;
var G__6610 = count__6601_6605;
var G__6611 = (i__6602_6606 + (1));
seq__6599_6603 = G__6608;
chunk__6600_6604 = G__6609;
count__6601_6605 = G__6610;
i__6602_6606 = G__6611;
continue;
} else {
var temp__5720__auto___6612 = cljs.core.seq.call(null,seq__6599_6603);
if(temp__5720__auto___6612){
var seq__6599_6613__$1 = temp__5720__auto___6612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6599_6613__$1)){
var c__4556__auto___6614 = cljs.core.chunk_first.call(null,seq__6599_6613__$1);
var G__6615 = cljs.core.chunk_rest.call(null,seq__6599_6613__$1);
var G__6616 = c__4556__auto___6614;
var G__6617 = cljs.core.count.call(null,c__4556__auto___6614);
var G__6618 = (0);
seq__6599_6603 = G__6615;
chunk__6600_6604 = G__6616;
count__6601_6605 = G__6617;
i__6602_6606 = G__6618;
continue;
} else {
var x_6619 = cljs.core.first.call(null,seq__6599_6613__$1);
ret.push(x_6619);


var G__6620 = cljs.core.next.call(null,seq__6599_6613__$1);
var G__6621 = null;
var G__6622 = (0);
var G__6623 = (0);
seq__6599_6603 = G__6620;
chunk__6600_6604 = G__6621;
count__6601_6605 = G__6622;
i__6602_6606 = G__6623;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.ListHandler.cljs$lang$type = true);

(cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler");

(cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/ListHandler");
}));

/**
 * Positional factory function for cognitect.transit/ListHandler.
 */
cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
});
(cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
}));

(cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
}));

(cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.MapHandler.cljs$lang$type = true);

(cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler");

(cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/MapHandler");
}));

/**
 * Positional factory function for cognitect.transit/MapHandler.
 */
cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
});
(cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
}));

(cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6624_6628 = cljs.core.seq.call(null,v);
var chunk__6625_6629 = null;
var count__6626_6630 = (0);
var i__6627_6631 = (0);
while(true){
if((i__6627_6631 < count__6626_6630)){
var x_6632 = cljs.core._nth.call(null,chunk__6625_6629,i__6627_6631);
ret.push(x_6632);


var G__6633 = seq__6624_6628;
var G__6634 = chunk__6625_6629;
var G__6635 = count__6626_6630;
var G__6636 = (i__6627_6631 + (1));
seq__6624_6628 = G__6633;
chunk__6625_6629 = G__6634;
count__6626_6630 = G__6635;
i__6627_6631 = G__6636;
continue;
} else {
var temp__5720__auto___6637 = cljs.core.seq.call(null,seq__6624_6628);
if(temp__5720__auto___6637){
var seq__6624_6638__$1 = temp__5720__auto___6637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6624_6638__$1)){
var c__4556__auto___6639 = cljs.core.chunk_first.call(null,seq__6624_6638__$1);
var G__6640 = cljs.core.chunk_rest.call(null,seq__6624_6638__$1);
var G__6641 = c__4556__auto___6639;
var G__6642 = cljs.core.count.call(null,c__4556__auto___6639);
var G__6643 = (0);
seq__6624_6628 = G__6640;
chunk__6625_6629 = G__6641;
count__6626_6630 = G__6642;
i__6627_6631 = G__6643;
continue;
} else {
var x_6644 = cljs.core.first.call(null,seq__6624_6638__$1);
ret.push(x_6644);


var G__6645 = cljs.core.next.call(null,seq__6624_6638__$1);
var G__6646 = null;
var G__6647 = (0);
var G__6648 = (0);
seq__6624_6628 = G__6645;
chunk__6625_6629 = G__6646;
count__6626_6630 = G__6647;
i__6627_6631 = G__6648;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
}));

(cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
}));

(cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.SetHandler.cljs$lang$type = true);

(cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler");

(cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/SetHandler");
}));

/**
 * Positional factory function for cognitect.transit/SetHandler.
 */
cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
});
(cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
}));

(cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__6649_6653 = cljs.core.seq.call(null,v);
var chunk__6650_6654 = null;
var count__6651_6655 = (0);
var i__6652_6656 = (0);
while(true){
if((i__6652_6656 < count__6651_6655)){
var x_6657 = cljs.core._nth.call(null,chunk__6650_6654,i__6652_6656);
ret.push(x_6657);


var G__6658 = seq__6649_6653;
var G__6659 = chunk__6650_6654;
var G__6660 = count__6651_6655;
var G__6661 = (i__6652_6656 + (1));
seq__6649_6653 = G__6658;
chunk__6650_6654 = G__6659;
count__6651_6655 = G__6660;
i__6652_6656 = G__6661;
continue;
} else {
var temp__5720__auto___6662 = cljs.core.seq.call(null,seq__6649_6653);
if(temp__5720__auto___6662){
var seq__6649_6663__$1 = temp__5720__auto___6662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6649_6663__$1)){
var c__4556__auto___6664 = cljs.core.chunk_first.call(null,seq__6649_6663__$1);
var G__6665 = cljs.core.chunk_rest.call(null,seq__6649_6663__$1);
var G__6666 = c__4556__auto___6664;
var G__6667 = cljs.core.count.call(null,c__4556__auto___6664);
var G__6668 = (0);
seq__6649_6653 = G__6665;
chunk__6650_6654 = G__6666;
count__6651_6655 = G__6667;
i__6652_6656 = G__6668;
continue;
} else {
var x_6669 = cljs.core.first.call(null,seq__6649_6663__$1);
ret.push(x_6669);


var G__6670 = cljs.core.next.call(null,seq__6649_6663__$1);
var G__6671 = null;
var G__6672 = (0);
var G__6673 = (0);
seq__6649_6653 = G__6670;
chunk__6650_6654 = G__6671;
count__6651_6655 = G__6672;
i__6652_6656 = G__6673;
continue;
}
} else {
}
}
break;
}

return ret;
}));

(cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
}));

(cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.VectorHandler.cljs$lang$type = true);

(cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler");

(cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/VectorHandler");
}));

/**
 * Positional factory function for cognitect.transit/VectorHandler.
 */
cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
});
(cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
}));

(cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
}));

(cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
}));

(cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cognitect.transit.UUIDHandler.cljs$lang$type = true);

(cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler");

(cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/UUIDHandler");
}));

/**
 * Positional factory function for cognitect.transit/UUIDHandler.
 */
cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a JavaScript
 * array of interleaved type constructors and handler instances for those 
 * type constructors.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var G__6675 = arguments.length;
switch (G__6675) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
}));

(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,(function (obj,k,v){
var G__6676 = obj;
G__6676.push(kfn.call(null,k),vfn.call(null,v));

return G__6676;
}),["^ "],m);
}), "handlers": (function (){var x6677 = cljs.core.clone.call(null,handlers);
(x6677.forEach = (function (f){
var coll = this;
var seq__6678 = cljs.core.seq.call(null,coll);
var chunk__6679 = null;
var count__6680 = (0);
var i__6681 = (0);
while(true){
if((i__6681 < count__6680)){
var vec__6688 = cljs.core._nth.call(null,chunk__6679,i__6681);
var k = cljs.core.nth.call(null,vec__6688,(0),null);
var v = cljs.core.nth.call(null,vec__6688,(1),null);
f.call(null,v,k);


var G__6695 = seq__6678;
var G__6696 = chunk__6679;
var G__6697 = count__6680;
var G__6698 = (i__6681 + (1));
seq__6678 = G__6695;
chunk__6679 = G__6696;
count__6680 = G__6697;
i__6681 = G__6698;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__6678);
if(temp__5720__auto__){
var seq__6678__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6678__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6678__$1);
var G__6699 = cljs.core.chunk_rest.call(null,seq__6678__$1);
var G__6700 = c__4556__auto__;
var G__6701 = cljs.core.count.call(null,c__4556__auto__);
var G__6702 = (0);
seq__6678 = G__6699;
chunk__6679 = G__6700;
count__6680 = G__6701;
i__6681 = G__6702;
continue;
} else {
var vec__6691 = cljs.core.first.call(null,seq__6678__$1);
var k = cljs.core.nth.call(null,vec__6691,(0),null);
var v = cljs.core.nth.call(null,vec__6691,(1),null);
f.call(null,v,k);


var G__6703 = cljs.core.next.call(null,seq__6678__$1);
var G__6704 = null;
var G__6705 = (0);
var G__6706 = (0);
seq__6678 = G__6703;
chunk__6679 = G__6704;
count__6680 = G__6705;
i__6681 = G__6706;
continue;
}
} else {
return null;
}
}
break;
}
}));

return x6677;
})(), "unpack": (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
})}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
}));

(cognitect.transit.writer.cljs$lang$maxFixedArity = 2);

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var G__6708 = arguments.length;
switch (G__6708) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
}));

(cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof cognitect !== 'undefined') && (typeof cognitect.transit !== 'undefined') && (typeof cognitect.transit.t_cognitect$transit6709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit6709 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta6710){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta6710 = meta6710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cognitect.transit.t_cognitect$transit6709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6711,meta6710__$1){
var self__ = this;
var _6711__$1 = this;
return (new cognitect.transit.t_cognitect$transit6709(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta6710__$1));
}));

(cognitect.transit.t_cognitect$transit6709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6711){
var self__ = this;
var _6711__$1 = this;
return self__.meta6710;
}));

(cognitect.transit.t_cognitect$transit6709.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
}));

(cognitect.transit.t_cognitect$transit6709.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
}));

(cognitect.transit.t_cognitect$transit6709.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit6709.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
}));

(cognitect.transit.t_cognitect$transit6709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta6710","meta6710",2050424550,null)], null);
}));

(cognitect.transit.t_cognitect$transit6709.cljs$lang$type = true);

(cognitect.transit.t_cognitect$transit6709.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit6709");

(cognitect.transit.t_cognitect$transit6709.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cognitect.transit/t_cognitect$transit6709");
}));

/**
 * Positional factory function for cognitect.transit/t_cognitect$transit6709.
 */
cognitect.transit.__GT_t_cognitect$transit6709 = (function cognitect$transit$__GT_t_cognitect$transit6709(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta6710){
return (new cognitect.transit.t_cognitect$transit6709(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta6710));
});

}

return (new cognitect.transit.t_cognitect$transit6709(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4);

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID(x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});

//# sourceMappingURL=transit.js.map
