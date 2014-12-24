goog.provide('io.pedestal.app.queue');
goog.require('cljs.core');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.protocols');
io.pedestal.app.queue.pop_message = (function pop_message(queue_state){
var map__23519__23520 = queue_state;
var map__23519__23521 = ((cljs.core.seq_QMARK_.call(null,map__23519__23520))?cljs.core.apply.call(null,cljs.core.hash_map,map__23519__23520):map__23519__23520);
var queue__23522 = cljs.core._lookup.call(null,map__23519__23521,"\uFDD0'queue",null);
if(cljs.core.seq.call(null,queue__23522))
{return cljs.core.assoc.call(null,queue_state,"\uFDD0'item",cljs.core.first.call(null,queue__23522),"\uFDD0'queue",cljs.core.vec.call(null,cljs.core.rest.call(null,queue__23522)));
} else
{return cljs.core.assoc.call(null,queue_state,"\uFDD0'item",null);
}
});
io.pedestal.app.queue.process_next_item = (function process_next_item(queue,f){
if(cljs.core.seq.call(null,(new cljs.core.Keyword("\uFDD0'queue")).call(null,cljs.core.deref.call(null,queue))))
{var temp__4090__auto____23525 = (new cljs.core.Keyword("\uFDD0'item")).call(null,cljs.core.swap_BANG_.call(null,queue,io.pedestal.app.queue.pop_message));
if(cljs.core.truth_(temp__4090__auto____23525))
{var item__23526 = temp__4090__auto____23525;
return f.call(null,item__23526);
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
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19107__auto__){
var this__23530 = this;
var h__18981__auto____23531 = this__23530.__hash;
if(!((h__18981__auto____23531 == null)))
{return h__18981__auto____23531;
} else
{var h__18981__auto____23532 = cljs.core.hash_imap.call(null,this__19107__auto__);
this__23530.__hash = h__18981__auto____23532;
return h__18981__auto____23532;
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$TakeMessage$take_message$arity$2 = (function (this$,f){
var this__23533 = this;
return io.pedestal.app.queue.process_next_item.call(null,this__23533.state,f);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19112__auto__,k__19113__auto__){
var this__23534 = this;
return this__19112__auto__.cljs$core$ILookup$_lookup$arity$3(this__19112__auto__,k__19113__auto__,null);
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19114__auto__,k23528,else__19115__auto__){
var this__23535 = this;
if((k23528 === "\uFDD0'state"))
{return this__23535.state;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__23535.__extmap,k23528,else__19115__auto__);
} else
{return null;
}
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19119__auto__,k__19120__auto__,G__23527){
var this__23536 = this;
var pred__23537__23540 = cljs.core.identical_QMARK_;
var expr__23538__23541 = k__19120__auto__;
if(pred__23537__23540.call(null,"\uFDD0'state",expr__23538__23541))
{return (new io.pedestal.app.queue.AppMessageQueue(G__23527,this__23536.__meta,this__23536.__extmap,null));
} else
{return (new io.pedestal.app.queue.AppMessageQueue(this__23536.state,this__23536.__meta,cljs.core.assoc.call(null,this__23536.__extmap,k__19120__auto__,G__23527),null));
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19117__auto__,entry__19118__auto__){
var this__23542 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19118__auto__))
{return this__19117__auto__.cljs$core$IAssociative$_assoc$arity$3(this__19117__auto__,cljs.core._nth.call(null,entry__19118__auto__,0),cljs.core._nth.call(null,entry__19118__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__19117__auto__,entry__19118__auto__);
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19124__auto__){
var this__23543 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__23543.state)], true),this__23543.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__19126__auto__,opts__19127__auto__){
var this__23544 = this;
var pr_pair__19128__auto____23545 = (function (keyval__19129__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__19127__auto__,keyval__19129__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__19128__auto____23545,[cljs.core.str("#"),cljs.core.str("AppMessageQueue"),cljs.core.str("{")].join(''),", ","}",opts__19127__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__23544.state)], true),this__23544.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19116__auto__){
var this__23546 = this;
return (1 + cljs.core.count.call(null,this__23546.__extmap));
});
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$ = true;
io.pedestal.app.queue.AppMessageQueue.prototype.io$pedestal$app$protocols$PutMessage$put_message$arity$2 = (function (this$,message){
var this__23547 = this;
var q__23548 = cljs.core.swap_BANG_.call(null,this__23547.state,cljs.core.update_in,cljs.core.PersistentVector.fromArray(["\uFDD0'queue"], true),cljs.core.conj,message);
return cljs.core.count.call(null,(new cljs.core.Keyword("\uFDD0'queue")).call(null,q__23548));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19108__auto__,other__19109__auto__){
var this__23549 = this;
if(cljs.core.truth_((function (){var and__3941__auto____23550 = other__19109__auto__;
if(cljs.core.truth_(and__3941__auto____23550))
{var and__3941__auto____23551 = (this__19108__auto__.constructor === other__19109__auto__.constructor);
if(and__3941__auto____23551)
{return cljs.core.equiv_map.call(null,this__19108__auto__,other__19109__auto__);
} else
{return and__3941__auto____23551;
}
} else
{return and__3941__auto____23550;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19111__auto__,G__23527){
var this__23552 = this;
return (new io.pedestal.app.queue.AppMessageQueue(this__23552.state,G__23527,this__23552.__extmap,this__23552.__hash));
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19110__auto__){
var this__23553 = this;
return this__23553.__meta;
});
io.pedestal.app.queue.AppMessageQueue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19121__auto__,k__19122__auto__){
var this__23554 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'state"]),k__19122__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__19121__auto__),this__23554.__meta),k__19122__auto__);
} else
{return (new io.pedestal.app.queue.AppMessageQueue(this__23554.state,this__23554.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__23554.__extmap,k__19122__auto__)),null));
}
});
io.pedestal.app.queue.AppMessageQueue.cljs$lang$type = true;
io.pedestal.app.queue.AppMessageQueue.cljs$lang$ctorPrSeq = (function (this__19146__auto__){
return cljs.core.list.call(null,"io.pedestal.app.queue/AppMessageQueue");
});
io.pedestal.app.queue.__GT_AppMessageQueue = (function __GT_AppMessageQueue(state){
return (new io.pedestal.app.queue.AppMessageQueue(state));
});
io.pedestal.app.queue.map__GT_AppMessageQueue = (function map__GT_AppMessageQueue(G__23529){
return (new io.pedestal.app.queue.AppMessageQueue((new cljs.core.Keyword("\uFDD0'state")).call(null,G__23529),null,cljs.core.dissoc.call(null,G__23529,"\uFDD0'state")));
});
io.pedestal.app.queue.AppMessageQueue;
io.pedestal.app.queue.queue = (function queue(name){
return io.pedestal.app.queue.__GT_AppMessageQueue.call(null,cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'queue","\uFDD0'item","\uFDD0'name"],{"\uFDD0'queue":cljs.core.PersistentVector.EMPTY,"\uFDD0'item":null,"\uFDD0'name":name})));
});
