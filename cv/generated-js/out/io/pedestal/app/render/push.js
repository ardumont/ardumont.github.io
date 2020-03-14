goog.provide('io.pedestal.app.render.push');
goog.require('cljs.core');
goog.require('io.pedestal.app.protocols');
goog.require('io.pedestal.app.util.platform');
goog.require('io.pedestal.app.util.log');
goog.require('io.pedestal.app.tree');
io.pedestal.app.render.push.search_ops = cljs.core.ObjMap.fromObject(["\uFDD0'node-create","\uFDD0'node-destroy","\uFDD0'value","\uFDD0'attr","\uFDD0'transform-enable","\uFDD0'transform-disable"],{"\uFDD0'node-create":cljs.core.PersistentHashSet.fromArray(["\uFDD0'*","\uFDD0'node-*"]),"\uFDD0'node-destroy":cljs.core.PersistentHashSet.fromArray(["\uFDD0'*","\uFDD0'node-*"]),"\uFDD0'value":cljs.core.PersistentHashSet.fromArray(["\uFDD0'*","\uFDD0'value"]),"\uFDD0'attr":cljs.core.PersistentHashSet.fromArray(["\uFDD0'*","\uFDD0'attr"]),"\uFDD0'transform-enable":cljs.core.PersistentHashSet.fromArray(["\uFDD0'*","\uFDD0'transform-*"]),"\uFDD0'transform-disable":cljs.core.PersistentHashSet.fromArray(["\uFDD0'*","\uFDD0'transform-*"])});
io.pedestal.app.render.push.real_path = (function real_path(op,path){
return cljs.core.cons.call(null,op,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.repeat.call(null,"\uFDD0'children"),path)),"\uFDD0'handler"));
});
io.pedestal.app.render.push.add_handler = (function add_handler(handlers,op,path,f){
return cljs.core.assoc_in.call(null,handlers,io.pedestal.app.render.push.real_path.call(null,op,path),f);
});
io.pedestal.app.render.push.add_handlers = (function() {
var add_handlers = null;
var add_handlers__1 = (function (hs){
return add_handlers.call(null,cljs.core.ObjMap.EMPTY,hs);
});
var add_handlers__2 = (function (m,hs){
return cljs.core.reduce.call(null,(function (acc,p__12587){
var vec__12588__12589 = p__12587;
var op__12590 = cljs.core.nth.call(null,vec__12588__12589,0,null);
var path__12591 = cljs.core.nth.call(null,vec__12588__12589,1,null);
var f__12592 = cljs.core.nth.call(null,vec__12588__12589,2,null);
return io.pedestal.app.render.push.add_handler.call(null,acc,op__12590,path__12591,f__12592);
}),m,hs);
});
add_handlers = function(m,hs){
switch(arguments.length){
case 1:
return add_handlers__1.call(this,m);
case 2:
return add_handlers__2.call(this,m,hs);
}
throw('Invalid arity: ' + arguments.length);
};
add_handlers.cljs$lang$arity$1 = add_handlers__1;
add_handlers.cljs$lang$arity$2 = add_handlers__2;
return add_handlers;
})()
;
io.pedestal.app.render.push.matching_keys = (function matching_keys(ks,p){
return cljs.core.filter.call(null,(function (k){
var or__4238__auto____12597 = cljs.core._EQ_.call(null,k,p);
if(or__4238__auto____12597)
{return or__4238__auto____12597;
} else
{var or__4238__auto____12598 = cljs.core._EQ_.call(null,k,"\uFDD0'*");
if(or__4238__auto____12598)
{return or__4238__auto____12598;
} else
{var or__4238__auto____12599 = cljs.core._EQ_.call(null,k,"\uFDD0'**");
if(or__4238__auto____12599)
{return or__4238__auto____12599;
} else
{if(cljs.core.contains_QMARK_.call(null,io.pedestal.app.render.push.search_ops,p))
{return cljs.core.contains_QMARK_.call(null,p.call(null,io.pedestal.app.render.push.search_ops),k);
} else
{return null;
}
}
}
}
}),ks);
});
io.pedestal.app.render.push.sort_keys = (function sort_keys(ks){
var sorted_keys__12601 = cljs.core.remove.call(null,(function (p1__12593_SHARP_){
return cljs.core._EQ_.call(null,p1__12593_SHARP_,"\uFDD0'**");
}),cljs.core.sort.call(null,ks));
return cljs.core.reverse.call(null,(((cljs.core.count.call(null,ks) > cljs.core.count.call(null,sorted_keys__12601)))?cljs.core.conj.call(null,sorted_keys__12601,"\uFDD0'**"):sorted_keys__12601));
});
io.pedestal.app.render.push.select_matches = (function select_matches(handlers,p){
var keys__12603 = io.pedestal.app.render.push.matching_keys.call(null,cljs.core.keys.call(null,handlers),p);
return cljs.core.map.call(null,(function (k){
return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,handlers,k,null)], true);
}),io.pedestal.app.render.push.sort_keys.call(null,keys__12603));
});
io.pedestal.app.render.push.find_handler_STAR_ = (function find_handler_STAR_(handlers,path){
if(cljs.core.empty_QMARK_.call(null,path))
{return (new cljs.core.Keyword("\uFDD0'handler")).call(null,handlers);
} else
{return cljs.core.some.call(null,(function (p__12611){
var vec__12612__12613 = p__12611;
var k__12614 = cljs.core.nth.call(null,vec__12612__12613,0,null);
var v__12615 = cljs.core.nth.call(null,vec__12612__12613,1,null);
var temp__4423__auto____12616 = find_handler_STAR_.call(null,v__12615,cljs.core.rest.call(null,path));
if(cljs.core.truth_(temp__4423__auto____12616))
{var handler__12617 = temp__4423__auto____12616;
return handler__12617;
} else
{if(cljs.core._EQ_.call(null,k__12614,"\uFDD0'**"))
{return (new cljs.core.Keyword("\uFDD0'handler")).call(null,v__12615);
} else
{return null;
}
}
}),io.pedestal.app.render.push.select_matches.call(null,(new cljs.core.Keyword("\uFDD0'children")).call(null,handlers),cljs.core.first.call(null,path)));
}
});
io.pedestal.app.render.push.find_handler = (function find_handler(handlers,op,path){
return io.pedestal.app.render.push.find_handler_STAR_.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":handlers}),cljs.core.vec.call(null,cljs.core.cons.call(null,op,path)));
});
io.pedestal.app.render.push.DomMapper = {};
io.pedestal.app.render.push.get_id = (function get_id(this$,path){
if((function (){var and__4236__auto____12623 = this$;
if(and__4236__auto____12623)
{return this$.io$pedestal$app$render$push$DomMapper$get_id$arity$2;
} else
{return and__4236__auto____12623;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$get_id$arity$2(this$,path);
} else
{var x__8178__auto____12624 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12625 = (io.pedestal.app.render.push.get_id[goog.typeOf(x__8178__auto____12624)]);
if(or__4238__auto____12625)
{return or__4238__auto____12625;
} else
{var or__4238__auto____12626 = (io.pedestal.app.render.push.get_id["_"]);
if(or__4238__auto____12626)
{return or__4238__auto____12626;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-id",this$);
}
}
})().call(null,this$,path);
}
});
io.pedestal.app.render.push.get_parent_id = (function get_parent_id(this$,path){
if((function (){var and__4236__auto____12631 = this$;
if(and__4236__auto____12631)
{return this$.io$pedestal$app$render$push$DomMapper$get_parent_id$arity$2;
} else
{return and__4236__auto____12631;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$get_parent_id$arity$2(this$,path);
} else
{var x__8178__auto____12632 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12633 = (io.pedestal.app.render.push.get_parent_id[goog.typeOf(x__8178__auto____12632)]);
if(or__4238__auto____12633)
{return or__4238__auto____12633;
} else
{var or__4238__auto____12634 = (io.pedestal.app.render.push.get_parent_id["_"]);
if(or__4238__auto____12634)
{return or__4238__auto____12634;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-parent-id",this$);
}
}
})().call(null,this$,path);
}
});
io.pedestal.app.render.push.new_id_BANG_ = (function() {
var new_id_BANG_ = null;
var new_id_BANG___2 = (function (this$,path){
if((function (){var and__4236__auto____12643 = this$;
if(and__4236__auto____12643)
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$2;
} else
{return and__4236__auto____12643;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$2(this$,path);
} else
{var x__8178__auto____12644 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12645 = (io.pedestal.app.render.push.new_id_BANG_[goog.typeOf(x__8178__auto____12644)]);
if(or__4238__auto____12645)
{return or__4238__auto____12645;
} else
{var or__4238__auto____12646 = (io.pedestal.app.render.push.new_id_BANG_["_"]);
if(or__4238__auto____12646)
{return or__4238__auto____12646;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path);
}
});
var new_id_BANG___3 = (function (this$,path,v){
if((function (){var and__4236__auto____12647 = this$;
if(and__4236__auto____12647)
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3;
} else
{return and__4236__auto____12647;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3(this$,path,v);
} else
{var x__8178__auto____12648 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12649 = (io.pedestal.app.render.push.new_id_BANG_[goog.typeOf(x__8178__auto____12648)]);
if(or__4238__auto____12649)
{return or__4238__auto____12649;
} else
{var or__4238__auto____12650 = (io.pedestal.app.render.push.new_id_BANG_["_"]);
if(or__4238__auto____12650)
{return or__4238__auto____12650;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.new-id!",this$);
}
}
})().call(null,this$,path,v);
}
});
new_id_BANG_ = function(this$,path,v){
switch(arguments.length){
case 2:
return new_id_BANG___2.call(this,this$,path);
case 3:
return new_id_BANG___3.call(this,this$,path,v);
}
throw('Invalid arity: ' + arguments.length);
};
new_id_BANG_.cljs$lang$arity$2 = new_id_BANG___2;
new_id_BANG_.cljs$lang$arity$3 = new_id_BANG___3;
return new_id_BANG_;
})()
;
io.pedestal.app.render.push.delete_id_BANG_ = (function delete_id_BANG_(this$,path){
if((function (){var and__4236__auto____12655 = this$;
if(and__4236__auto____12655)
{return this$.io$pedestal$app$render$push$DomMapper$delete_id_BANG_$arity$2;
} else
{return and__4236__auto____12655;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$delete_id_BANG_$arity$2(this$,path);
} else
{var x__8178__auto____12656 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12657 = (io.pedestal.app.render.push.delete_id_BANG_[goog.typeOf(x__8178__auto____12656)]);
if(or__4238__auto____12657)
{return or__4238__auto____12657;
} else
{var or__4238__auto____12658 = (io.pedestal.app.render.push.delete_id_BANG_["_"]);
if(or__4238__auto____12658)
{return or__4238__auto____12658;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.delete-id!",this$);
}
}
})().call(null,this$,path);
}
});
io.pedestal.app.render.push.on_destroy_BANG_ = (function on_destroy_BANG_(this$,path,f){
if((function (){var and__4236__auto____12663 = this$;
if(and__4236__auto____12663)
{return this$.io$pedestal$app$render$push$DomMapper$on_destroy_BANG_$arity$3;
} else
{return and__4236__auto____12663;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$on_destroy_BANG_$arity$3(this$,path,f);
} else
{var x__8178__auto____12664 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12665 = (io.pedestal.app.render.push.on_destroy_BANG_[goog.typeOf(x__8178__auto____12664)]);
if(or__4238__auto____12665)
{return or__4238__auto____12665;
} else
{var or__4238__auto____12666 = (io.pedestal.app.render.push.on_destroy_BANG_["_"]);
if(or__4238__auto____12666)
{return or__4238__auto____12666;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.on-destroy!",this$);
}
}
})().call(null,this$,path,f);
}
});
io.pedestal.app.render.push.set_data_BANG_ = (function set_data_BANG_(this$,ks,d){
if((function (){var and__4236__auto____12671 = this$;
if(and__4236__auto____12671)
{return this$.io$pedestal$app$render$push$DomMapper$set_data_BANG_$arity$3;
} else
{return and__4236__auto____12671;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$set_data_BANG_$arity$3(this$,ks,d);
} else
{var x__8178__auto____12672 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12673 = (io.pedestal.app.render.push.set_data_BANG_[goog.typeOf(x__8178__auto____12672)]);
if(or__4238__auto____12673)
{return or__4238__auto____12673;
} else
{var or__4238__auto____12674 = (io.pedestal.app.render.push.set_data_BANG_["_"]);
if(or__4238__auto____12674)
{return or__4238__auto____12674;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.set-data!",this$);
}
}
})().call(null,this$,ks,d);
}
});
io.pedestal.app.render.push.drop_data_BANG_ = (function drop_data_BANG_(this$,ks){
if((function (){var and__4236__auto____12679 = this$;
if(and__4236__auto____12679)
{return this$.io$pedestal$app$render$push$DomMapper$drop_data_BANG_$arity$2;
} else
{return and__4236__auto____12679;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$drop_data_BANG_$arity$2(this$,ks);
} else
{var x__8178__auto____12680 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12681 = (io.pedestal.app.render.push.drop_data_BANG_[goog.typeOf(x__8178__auto____12680)]);
if(or__4238__auto____12681)
{return or__4238__auto____12681;
} else
{var or__4238__auto____12682 = (io.pedestal.app.render.push.drop_data_BANG_["_"]);
if(or__4238__auto____12682)
{return or__4238__auto____12682;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.drop-data!",this$);
}
}
})().call(null,this$,ks);
}
});
io.pedestal.app.render.push.get_data = (function get_data(this$,ks){
if((function (){var and__4236__auto____12687 = this$;
if(and__4236__auto____12687)
{return this$.io$pedestal$app$render$push$DomMapper$get_data$arity$2;
} else
{return and__4236__auto____12687;
}
})())
{return this$.io$pedestal$app$render$push$DomMapper$get_data$arity$2(this$,ks);
} else
{var x__8178__auto____12688 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12689 = (io.pedestal.app.render.push.get_data[goog.typeOf(x__8178__auto____12688)]);
if(or__4238__auto____12689)
{return or__4238__auto____12689;
} else
{var or__4238__auto____12690 = (io.pedestal.app.render.push.get_data["_"]);
if(or__4238__auto____12690)
{return or__4238__auto____12690;
} else
{throw cljs.core.missing_protocol.call(null,"DomMapper.get-data",this$);
}
}
})().call(null,this$,ks);
}
});
/**
* Given a node in the environement which is going to be deleted, run all on-destroy
* functions in the tree.
*/
io.pedestal.app.render.push.run_on_destroy_BANG_ = (function run_on_destroy_BANG_(env){
var nodes__12698 = cljs.core.tree_seq.call(null,cljs.core.constantly.call(null,true),(function (n){
return cljs.core.map.call(null,(function (p1__12618_SHARP_){
return cljs.core._lookup.call(null,n,p1__12618_SHARP_,null);
}),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'_data","\uFDD0'on-destroy","\uFDD0'id"]),cljs.core.keys.call(null,n)));
}),env);
var G__12699__12700 = cljs.core.seq.call(null,cljs.core.mapcat.call(null,"\uFDD0'on-destroy",nodes__12698));
if(G__12699__12700)
{var f__12701 = cljs.core.first.call(null,G__12699__12700);
var G__12699__12702 = G__12699__12700;
while(true){
f__12701.call(null);
var temp__4425__auto____12703 = cljs.core.next.call(null,G__12699__12702);
if(temp__4425__auto____12703)
{var G__12699__12704 = temp__4425__auto____12703;
{
var G__12705 = cljs.core.first.call(null,G__12699__12704);
var G__12706 = G__12699__12704;
f__12701 = G__12705;
G__12699__12702 = G__12706;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});

/**
* @constructor
* @param {*} env
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app.render.push.DomRenderer = (function (env,__meta,__extmap){
this.env = env;
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
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8138__auto__,k__8139__auto__){
var this__12710 = this;
return this__8138__auto__.cljs$core$ILookup$_lookup$arity$3(this__8138__auto__,k__8139__auto__,null);
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8140__auto__,k12708,else__8141__auto__){
var this__12711 = this;
if((k12708 === "\uFDD0'env"))
{return this__12711.env;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__12711.__extmap,k12708,else__8141__auto__);
} else
{return null;
}
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8136__auto__){
var this__12712 = this;
return this__12712.__meta;
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8142__auto__){
var this__12713 = this;
return (1 + cljs.core.count.call(null,this__12713.__extmap));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8133__auto__){
var this__12714 = this;
var h__8007__auto____12715 = this__12714.__hash;
if(!((h__8007__auto____12715 == null)))
{return h__8007__auto____12715;
} else
{var h__8007__auto____12716 = cljs.core.hash_imap.call(null,this__8133__auto__);
this__12714.__hash = h__8007__auto____12716;
return h__8007__auto____12716;
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8134__auto__,other__8135__auto__){
var this__12717 = this;
if(cljs.core.truth_((function (){var and__4236__auto____12718 = other__8135__auto__;
if(cljs.core.truth_(and__4236__auto____12718))
{var and__4236__auto____12719 = (this__8134__auto__.constructor === other__8135__auto__.constructor);
if(and__4236__auto____12719)
{return cljs.core.equiv_map.call(null,this__8134__auto__,other__8135__auto__);
} else
{return and__4236__auto____12719;
}
} else
{return and__4236__auto____12718;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__8152__auto__,opts__8153__auto__){
var this__12720 = this;
var pr_pair__8154__auto____12721 = (function (keyval__8155__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__8153__auto__,keyval__8155__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__8154__auto____12721,[cljs.core.str("#"),cljs.core.str("DomRenderer"),cljs.core.str("{")].join(''),", ","}",opts__8153__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'env",this__12720.env)], true),this__12720.__extmap));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8147__auto__,k__8148__auto__){
var this__12722 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'env"]),k__8148__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__8147__auto__),this__12722.__meta),k__8148__auto__);
} else
{return (new io.pedestal.app.render.push.DomRenderer(this__12722.env,this__12722.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__12722.__extmap,k__8148__auto__)),null));
}
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8145__auto__,k__8146__auto__,G__12707){
var this__12723 = this;
var pred__12724__12727 = cljs.core.identical_QMARK_;
var expr__12725__12728 = k__8146__auto__;
if(pred__12724__12727.call(null,"\uFDD0'env",expr__12725__12728))
{return (new io.pedestal.app.render.push.DomRenderer(G__12707,this__12723.__meta,this__12723.__extmap,null));
} else
{return (new io.pedestal.app.render.push.DomRenderer(this__12723.env,this__12723.__meta,cljs.core.assoc.call(null,this__12723.__extmap,k__8146__auto__,G__12707),null));
}
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$ = true;
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$get_id$arity$2 = (function (this$,path){
var this__12729 = this;
if(cljs.core.seq.call(null,path))
{return cljs.core.get_in.call(null,cljs.core.deref.call(null,this__12729.env),cljs.core.conj.call(null,path,"\uFDD0'id"));
} else
{return (new cljs.core.Keyword("\uFDD0'id")).call(null,cljs.core.deref.call(null,this__12729.env));
}
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$get_parent_id$arity$2 = (function (this$,path){
var this__12730 = this;
if(cljs.core.seq.call(null,path))
{return this$.io$pedestal$app$render$push$DomMapper$get_id$arity$2(this$,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
} else
{return null;
}
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$2 = (function (this$,path){
var this__12731 = this;
return this$.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3(this$,path,cljs.core.gensym.call(null));
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$new_id_BANG_$arity$3 = (function (this$,path,v){
var this__12732 = this;
io.pedestal.app.util.log.info.call(null,"\uFDD0'in","\uFDD0'new-id!","\uFDD0'msg",[cljs.core.str("creating new id "),cljs.core.str(v),cljs.core.str(" at path "),cljs.core.str(path)].join(''));
cljs.core.swap_BANG_.call(null,this__12732.env,cljs.core.assoc_in,cljs.core.conj.call(null,path,"\uFDD0'id"),v);
return v;
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$delete_id_BANG_$arity$2 = (function (this$,path){
var this__12733 = this;
io.pedestal.app.render.push.run_on_destroy_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,this__12733.env),path));
return cljs.core.swap_BANG_.call(null,this__12733.env,cljs.core.assoc_in,path,null);
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$on_destroy_BANG_$arity$3 = (function (this$,path,f){
var this__12734 = this;
return cljs.core.swap_BANG_.call(null,this__12734.env,cljs.core.update_in,cljs.core.conj.call(null,path,"\uFDD0'on-destroy"),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$set_data_BANG_$arity$3 = (function (this$,ks,d){
var this__12735 = this;
return cljs.core.swap_BANG_.call(null,this__12735.env,cljs.core.assoc_in,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'_data"], true),ks),d);
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$drop_data_BANG_$arity$2 = (function (this$,ks){
var this__12736 = this;
return cljs.core.swap_BANG_.call(null,this__12736.env,cljs.core.update_in,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'_data"], true),cljs.core.butlast.call(null,ks)),cljs.core.dissoc,cljs.core.last.call(null,ks));
});
io.pedestal.app.render.push.DomRenderer.prototype.io$pedestal$app$render$push$DomMapper$get_data$arity$2 = (function (this$,ks){
var this__12737 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,this__12737.env),cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'_data"], true),ks));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8150__auto__){
var this__12738 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'env",this__12738.env)], true),this__12738.__extmap));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8137__auto__,G__12707){
var this__12739 = this;
return (new io.pedestal.app.render.push.DomRenderer(this__12739.env,G__12707,this__12739.__extmap,this__12739.__hash));
});
io.pedestal.app.render.push.DomRenderer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8143__auto__,entry__8144__auto__){
var this__12740 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8144__auto__))
{return this__8143__auto__.cljs$core$IAssociative$_assoc$arity$3(this__8143__auto__,cljs.core._nth.call(null,entry__8144__auto__,0),cljs.core._nth.call(null,entry__8144__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8143__auto__,entry__8144__auto__);
}
});
io.pedestal.app.render.push.DomRenderer.cljs$lang$type = true;
io.pedestal.app.render.push.DomRenderer.cljs$lang$ctorPrSeq = (function (this__8172__auto__){
return cljs.core.list.call(null,"io.pedestal.app.render.push/DomRenderer");
});
io.pedestal.app.render.push.__GT_DomRenderer = (function __GT_DomRenderer(env){
return (new io.pedestal.app.render.push.DomRenderer(env));
});
io.pedestal.app.render.push.map__GT_DomRenderer = (function map__GT_DomRenderer(G__12709){
return (new io.pedestal.app.render.push.DomRenderer((new cljs.core.Keyword("\uFDD0'env")).call(null,G__12709),null,cljs.core.dissoc.call(null,G__12709,"\uFDD0'env")));
});
io.pedestal.app.render.push.DomRenderer;
io.pedestal.app.render.push.renderer = (function() {
var renderer = null;
var renderer__2 = (function (root_id,handlers){
return renderer.call(null,root_id,handlers,cljs.core.identity);
});
var renderer__3 = (function (root_id,handlers,log_fn){
var handlers__12754 = ((cljs.core.vector_QMARK_.call(null,handlers))?io.pedestal.app.render.push.add_handlers.call(null,handlers):handlers);
var renderer__12755 = io.pedestal.app.render.push.__GT_DomRenderer.call(null,cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'id"],{"\uFDD0'id":root_id})));
return (function (deltas,input_queue){
log_fn.call(null,deltas);
var G__12756__12757 = cljs.core.seq.call(null,deltas);
if(G__12756__12757)
{var d__12758 = cljs.core.first.call(null,G__12756__12757);
var G__12756__12759 = G__12756__12757;
while(true){
var vec__12760__12761 = d__12758;
var op__12762 = cljs.core.nth.call(null,vec__12760__12761,0,null);
var path__12763 = cljs.core.nth.call(null,vec__12760__12761,1,null);
var handler__12764 = io.pedestal.app.render.push.find_handler.call(null,handlers__12754,op__12762,path__12763);
if(cljs.core.truth_(handler__12764))
{handler__12764.call(null,renderer__12755,d__12758,input_queue);
} else
{}
var temp__4425__auto____12765 = cljs.core.next.call(null,G__12756__12759);
if(temp__4425__auto____12765)
{var G__12756__12766 = temp__4425__auto____12765;
{
var G__12767 = cljs.core.first.call(null,G__12756__12766);
var G__12768 = G__12756__12766;
d__12758 = G__12767;
G__12756__12759 = G__12768;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
});
renderer = function(root_id,handlers,log_fn){
switch(arguments.length){
case 2:
return renderer__2.call(this,root_id,handlers);
case 3:
return renderer__3.call(this,root_id,handlers,log_fn);
}
throw('Invalid arity: ' + arguments.length);
};
renderer.cljs$lang$arity$2 = renderer__2;
renderer.cljs$lang$arity$3 = renderer__3;
return renderer;
})()
;
