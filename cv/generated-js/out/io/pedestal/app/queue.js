goog.provide('io.pedestal.app.queue');
goog.require('cljs.core');
goog.require('io.pedestal.app.protocols');
goog.require('io.pedestal.app.util.platform');
io.pedestal.app.queue.pop_message = (function pop_message(queue_state){
var map__12545__12546 = queue_state;
var map__12545__12547 = ((cljs.core.seq_QMARK_.call(null,map__12545__12546))?cljs.core.apply.call(null,cljs.core.hash_map,map__12545__12546):map__12545__12546);
var queue__12548 = cljs.core._lookup.call(null,map__12545__12547,"\uFDD0'queue",null);
if(cljs.core.seq.call(null,queue__12548))
{return cljs.core.assoc.call(null,queue_state,"\uFDD0'item",cljs.core.first.call(null,queue__12548),"\uFDD0'queue",cljs.core.vec.call(null,cljs.core.rest.call(null,queue__12548)));
} else
{return cljs.core.assoc.call(null,queue_state,"\uFDD0'item",null);
}
});
io.pedestal.app.queue.process_next_item = (function process_next_item(queue,f){
if(cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0'queue")).call(null,cljs.core.deref.call(null,queue))))
{var temp__4423__auto____12551 = (new cljs.core.Keyword("\uFDD0'item")).call(null,cljs.core.swap_BANG_.call(null,queue,io.pedestal.app.queue.pop_message));
if(cljs.core.truth_(temp__4423__auto____12551))
{var item__12552 = temp__4423__auto____12551;
return f.call(null,item__12552);
} else
{return io.pedestal.app.util.platform.create_timeout.call(null,10,(function (){
return process_next_item.call(null,queue,f);
}));
}
} else
{return io.pedestal.app.util.platform.create_timeout.call(null,10,(function (){
return process_next_item.call(null,queue,f);
}));
}
});

/**
* @constructor
* @param {*} state
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app.queue.AppMessageQueue = (function (state,__meta,__extmap){
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
this.cljs$lang$protocol_mask$partition1$ = 0;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8138__auto__,k__8139__auto__){
var this__12556 = this;
return this__8138__auto__.cljs$core$ILookup$_lookup$arity$3(this__8138__auto__,k__8139__auto__,null);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8140__auto__,k12554,else__8141__auto__){
var this__12557 = this;
if((k12554 === "\uFDD0'state"))
{return this__12557.state;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__12557.__extmap,k12554,else__8141__auto__);
} else
{return null;
}
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8136__auto__){
var this__12558 = this;
return this__12558.__meta;
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8142__auto__){
var this__12559 = this;
return (1 + cljs.core.count.call(null,this__12559.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8133__auto__){
var this__12560 = this;
var h__8007__auto____12561 = this__12560.__hash;
if(!((h__8007__auto____12561 == null)))
{return h__8007__auto____12561;
} else
{var h__8007__auto____12562 = cljs.core.hash_imap.call(null,this__8133__auto__);
this__12560.__hash = h__8007__auto____12562;
return h__8007__auto____12562;
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8134__auto__,other__8135__auto__){
var this__12563 = this;
if(cljs.core.truth_((function (){var and__4236__auto____12564 = other__8135__auto__;
if(cljs.core.truth_(and__4236__auto____12564))
{var and__4236__auto____12565 = (this__8134__auto__.constructor === other__8135__auto__.constructor);
if(and__4236__auto____12565)
{return cljs.core.equiv_map.call(null,this__8134__auto__,other__8135__auto__);
} else
{return and__4236__auto____12565;
}
} else
{return and__4236__auto____12564;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__8152__auto__,opts__8153__auto__){
var this__12566 = this;
var pr_pair__8154__auto____12567 = (function (keyval__8155__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__8153__auto__,keyval__8155__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__8154__auto____12567,[cljs.core.str("#"),cljs.core.str("AppMessageQueue"),cljs.core.str("{")].join(''),", ","}",opts__8153__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__12566.state)], true),this__12566.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$put_message$arity$2 = (function (this$,message){
var this__12568 = this;
var q__12569 = cljs.core.swap_BANG_.call(null,this__12568.state,cljs.core.update_in,cljs.core.PersistentVector.fromArray(["\uFDD0'queue"], true),cljs.core.conj,message);
return cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'queue")).call(null,q__12569));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8147__auto__,k__8148__auto__){
var this__12570 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'state"]),k__8148__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__8147__auto__),this__12570.__meta),k__8148__auto__);
} else
{return (new io.pedestal.app.queue.AppMessageQueue(this__12570.state,this__12570.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__12570.__extmap,k__8148__auto__)),null));
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8145__auto__,k__8146__auto__,G__12553){
var this__12571 = this;
var pred__12572__12575 = cljs.core.identical_QMARK_;
var expr__12573__12576 = k__8146__auto__;
if(pred__12572__12575.call(null,"\uFDD0'state",expr__12573__12576))
{return (new io.pedestal.app.queue.AppMessageQueue(G__12553,this__12571.__meta,this__12571.__extmap,null));
} else
{return (new io.pedestal.app.queue.AppMessageQueue(this__12571.state,this__12571.__meta,cljs.core.assoc.call(null,this__12571.__extmap,k__8146__auto__,G__12553),null));
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8150__auto__){
var this__12577 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__12577.state)], true),this__12577.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$take_message$arity$2 = (function (this$,f){
var this__12578 = this;
return io.pedestal.app.queue.process_next_item.call(null,this__12578.state,f);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8137__auto__,G__12553){
var this__12579 = this;
return (new io.pedestal.app.queue.AppMessageQueue(this__12579.state,G__12553,this__12579.__extmap,this__12579.__hash));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8143__auto__,entry__8144__auto__){
var this__12580 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8144__auto__))
{return this__8143__auto__.cljs$core$IAssociative$_assoc$arity$3(this__8143__auto__,cljs.core._nth.call(null,entry__8144__auto__,0),cljs.core._nth.call(null,entry__8144__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8143__auto__,entry__8144__auto__);
}
});
io.pedestal.app.queue.AppMessageQueue.cljs$lang$type = true;
io.pedestal.app.queue.AppMessageQueue.cljs$lang$ctorPrSeq = (function (this__8172__auto__){
return cljs.core.list.call(null,"io.pedestal.app.queue/AppMessageQueue");
});
io.pedestal.app.queue.__GT_AppMessageQueue = (function __GT_AppMessageQueue(state){
return (new io.pedestal.app.queue.AppMessageQueue(state));
});
io.pedestal.app.queue.map__GT_AppMessageQueue = (function map__GT_AppMessageQueue(G__12555){
return (new io.pedestal.app.queue.AppMessageQueue((new cljs.core.Keyword("\uFDD0'state")).call(null,G__12555),null,cljs.core.dissoc.call(null,G__12555,"\uFDD0'state")));
});
io.pedestal.app.queue.AppMessageQueue;
io.pedestal.app.queue.queue = (function queue(name){
return io.pedestal.app.queue.__GT_AppMessageQueue.call(null,cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'queue","\uFDD0'item","\uFDD0'name"],{"\uFDD0'queue":cljs.core.PersistentVector.EMPTY,"\uFDD0'item":null,"\uFDD0'name":name})));
});
