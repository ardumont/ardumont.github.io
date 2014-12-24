goog.provide('io.pedestal.app.query');
goog.require('cljs.core');
goog.require('clojure.set');
io.pedestal.app.query.TupleSource = {};
io.pedestal.app.query.tuple_seq = (function tuple_seq(this$){
if((function (){var and__3941__auto____23121 = this$;
if(and__3941__auto____23121)
{return this$.io$pedestal$app$query$TupleSource$tuple_seq$arity$1;
} else
{return and__3941__auto____23121;
}
})())
{return this$.io$pedestal$app$query$TupleSource$tuple_seq$arity$1(this$);
} else
{var x__19152__auto____23122 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____23123 = (io.pedestal.app.query.tuple_seq[goog.typeOf(x__19152__auto____23122)]);
if(or__3943__auto____23123)
{return or__3943__auto____23123;
} else
{var or__3943__auto____23124 = (io.pedestal.app.query.tuple_seq["_"]);
if(or__3943__auto____23124)
{return or__3943__auto____23124;
} else
{throw cljs.core.missing_protocol.call(null,"TupleSource.tuple-seq",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.query.logic_variable_QMARK_ = (function logic_variable_QMARK_(x){
var and__3941__auto____23126 = cljs.core.symbol_QMARK_.call(null,x);
if(and__3941__auto____23126)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"?");
} else
{return and__3941__auto____23126;
}
});
io.pedestal.app.query.datasource_QMARK_ = (function datasource_QMARK_(x){
var and__3941__auto____23128 = cljs.core.symbol_QMARK_.call(null,x);
if(and__3941__auto____23128)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"$");
} else
{return and__3941__auto____23128;
}
});
io.pedestal.app.query.unifier = (function unifier(bindings,clause,fact){
return cljs.core.reduce.call(null,(function (a,p__23136){
var vec__23137__23138 = p__23136;
var c__23139 = cljs.core.nth.call(null,vec__23137__23138,0,null);
var t__23140 = cljs.core.nth.call(null,vec__23137__23138,1,null);
var c__23142 = (cljs.core.truth_((function (){var and__3941__auto____23141 = io.pedestal.app.query.logic_variable_QMARK_.call(null,c__23139);
if(cljs.core.truth_(and__3941__auto____23141))
{return cljs.core.contains_QMARK_.call(null,bindings,c__23139);
} else
{return and__3941__auto____23141;
}
})())?cljs.core._lookup.call(null,bindings,c__23139,null):c__23139);
if(cljs.core.truth_(a))
{if(cljs.core.truth_(io.pedestal.app.query.logic_variable_QMARK_.call(null,c__23142)))
{return cljs.core.assoc.call(null,a,c__23142,t__23140);
} else
{if(cljs.core._EQ_.call(null,c__23142,t__23140))
{return a;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
} else
{return null;
}
}),cljs.core.ObjMap.EMPTY,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,clause,fact)));
});
io.pedestal.app.query.unifiers_for_clause = (function unifiers_for_clause(bindings,clause,facts){
return cljs.core.keep.call(null,cljs.core.partial.call(null,io.pedestal.app.query.unifier,bindings,clause),facts);
});
io.pedestal.app.query.unifiers = (function unifiers(bindings,clauses,facts){
return cljs.core.reduce.call(null,(function (a,x){
return cljs.core.conj.call(null,a,io.pedestal.app.query.unifiers_for_clause.call(null,bindings,x,facts));
}),cljs.core.PersistentVector.EMPTY,clauses);
});
io.pedestal.app.query.combine_unifiers = (function combine_unifiers(head,tail){
var ks__23177 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,head))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,tail))));
if(cljs.core.empty_QMARK_.call(null,ks__23177))
{return tail;
} else
{var iter__19251__auto____23210 = (function iter__23178(s__23179){
return (new cljs.core.LazySeq(null,false,(function (){
var s__23179__23196 = s__23179;
while(true){
var temp__4092__auto____23197 = cljs.core.seq.call(null,s__23179__23196);
if(temp__4092__auto____23197)
{var xs__4579__auto____23198 = temp__4092__auto____23197;
var x__23199 = cljs.core.first.call(null,xs__4579__auto____23198);
var iterys__19249__auto____23208 = ((function (s__23179__23196,x__23199,xs__4579__auto____23198,temp__4092__auto____23197){
return (function iter__23180(s__23181){
return (new cljs.core.LazySeq(null,false,((function (s__23179__23196,x__23199,xs__4579__auto____23198,temp__4092__auto____23197){
return (function (){
var s__23181__23204 = s__23181;
while(true){
var temp__4092__auto____23205 = cljs.core.seq.call(null,s__23181__23204);
if(temp__4092__auto____23205)
{var xs__4579__auto____23206 = temp__4092__auto____23205;
var y__23207 = cljs.core.first.call(null,xs__4579__auto____23206);
if(cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,x__23199,ks__23177),cljs.core.select_keys.call(null,y__23207,ks__23177)))
{return cljs.core.cons.call(null,cljs.core.merge.call(null,x__23199,y__23207),iter__23180.call(null,cljs.core.rest.call(null,s__23181__23204)));
} else
{{
var G__23211 = cljs.core.rest.call(null,s__23181__23204);
s__23181__23204 = G__23211;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__23179__23196,x__23199,xs__4579__auto____23198,temp__4092__auto____23197))
,null));
});})(s__23179__23196,x__23199,xs__4579__auto____23198,temp__4092__auto____23197))
;
var fs__19250__auto____23209 = cljs.core.seq.call(null,iterys__19249__auto____23208.call(null,tail));
if(fs__19250__auto____23209)
{return cljs.core.concat.call(null,fs__19250__auto____23209,iter__23178.call(null,cljs.core.rest.call(null,s__23179__23196)));
} else
{{
var G__23212 = cljs.core.rest.call(null,s__23179__23196);
s__23179__23196 = G__23212;
continue;
}
}
} else
{return null;
}
break;
}
}),null));
});
return iter__19251__auto____23210.call(null,head);
}
});
io.pedestal.app.query.fold = (function fold(unifiers){
while(true){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.empty_QMARK_,unifiers)))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true);
} else
{if((cljs.core.count.call(null,unifiers) < 1))
{return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true);
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,unifiers),1))
{return unifiers;
} else
{if("\uFDD0'else")
{var head__23215 = cljs.core.first.call(null,unifiers);
var tail__23216 = cljs.core.rest.call(null,unifiers);
{
var G__23217 = cljs.core.reduce.call(null,((function (unifiers){
return (function (a,b){
return cljs.core.conj.call(null,a,io.pedestal.app.query.combine_unifiers.call(null,head__23215,b));
});})(unifiers))
,cljs.core.PersistentVector.EMPTY,tail__23216);
unifiers = G__23217;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
io.pedestal.app.query.__GT_tuples = (function __GT_tuples(data){
if(cljs.core.vector_QMARK_.call(null,data))
{return data;
} else
{if((function (){var G__23221__23222 = data;
if(G__23221__23222)
{if(cljs.core.truth_((function (){var or__3943__auto____23223 = null;
if(cljs.core.truth_(or__3943__auto____23223))
{return or__3943__auto____23223;
} else
{return G__23221__23222.io$pedestal$app$query$TupleSource$;
}
})()))
{return true;
} else
{if((!G__23221__23222.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,io.pedestal.app.query.TupleSource,G__23221__23222);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,io.pedestal.app.query.TupleSource,G__23221__23222);
}
})())
{return io.pedestal.app.query.tuple_seq.call(null,data);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.EMPTY;
} else
{return null;
}
}
}
});
io.pedestal.app.query.produce = (function produce(bindings,clauses,facts){
var unifiers__23225 = cljs.core.reduce.call(null,(function (a,k){
return cljs.core.concat.call(null,a,io.pedestal.app.query.unifiers.call(null,bindings,cljs.core._lookup.call(null,clauses,k,null),io.pedestal.app.query.__GT_tuples.call(null,cljs.core._lookup.call(null,facts,k,null))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,clauses));
return cljs.core.first.call(null,io.pedestal.app.query.fold.call(null,unifiers__23225));
});
io.pedestal.app.query.parse_query = (function parse_query(query){
return cljs.core.reduce.call(null,(function (a,x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'in","\uFDD0'where","\uFDD0'find"]),x))
{return cljs.core.assoc.call(null,a,"\uFDD0'on",x);
} else
{if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'on")).call(null,a),"\uFDD0'find"))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0'find"], true),cljs.core.conj,x);
} else
{if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'on")).call(null,a),"\uFDD0'in"))
{if(cljs.core._EQ_.call(null,x,"\uFDD1'$"))
{return a;
} else
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0'in"], true),cljs.core.conj,x);
}
} else
{if(cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'on")).call(null,a),"\uFDD0'where"))
{if(cljs.core.truth_(io.pedestal.app.query.datasource_QMARK_.call(null,cljs.core.first.call(null,x))))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0'clauses",cljs.core.first.call(null,x)], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec.call(null,cljs.core.rest.call(null,x)));
} else
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray(["\uFDD0'clauses","\uFDD1'$"], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
}
} else
{if("\uFDD0'else")
{return a;
} else
{return null;
}
}
}
}
}
}),cljs.core.ObjMap.fromObject(["\uFDD0'find","\uFDD0'in","\uFDD0'clauses"],{"\uFDD0'find":cljs.core.PersistentVector.EMPTY,"\uFDD0'in":cljs.core.PersistentVector.fromArray(["\uFDD1'$"], true),"\uFDD0'clauses":cljs.core.PersistentArrayMap.fromArrays(["\uFDD1'$"],[cljs.core.PersistentVector.EMPTY])}),query);
});
/**
* @param {...*} var_args
*/
io.pedestal.app.query.q = (function() { 
var q__delegate = function (query,sources){
var map__23237__23238 = io.pedestal.app.query.parse_query.call(null,query);
var map__23237__23239 = ((cljs.core.seq_QMARK_.call(null,map__23237__23238))?cljs.core.apply.call(null,cljs.core.hash_map,map__23237__23238):map__23237__23238);
var in__23240 = cljs.core._lookup.call(null,map__23237__23239,"\uFDD0'in",null);
var find__23241 = cljs.core._lookup.call(null,map__23237__23239,"\uFDD0'find",null);
var clauses__23242 = cljs.core._lookup.call(null,map__23237__23239,"\uFDD0'clauses",null);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sources),cljs.core.count.call(null,in__23240)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Datasource count does not match named input count."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'sources"),cljs.core.hash_map("\uFDD0'line",103,"\uFDD0'column",16)),cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'in"),cljs.core.hash_map("\uFDD0'line",103,"\uFDD0'column",32))),cljs.core.hash_map("\uFDD0'line",103,"\uFDD0'column",13))))].join('')));
}
var source_map__23243 = cljs.core.zipmap.call(null,in__23240,sources);
var parameters__23244 = cljs.core.remove.call(null,io.pedestal.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map__23243));
var data_sources__23245 = cljs.core.filter.call(null,io.pedestal.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map__23243));
var results__23246 = io.pedestal.app.query.produce.call(null,cljs.core.select_keys.call(null,source_map__23243,parameters__23244),clauses__23242,source_map__23243);
return cljs.core.reduce.call(null,(function (a,b){
return cljs.core.conj.call(null,a,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23226_SHARP_){
return cljs.core._lookup.call(null,b,p1__23226_SHARP_,null);
}),find__23241)));
}),cljs.core.PersistentVector.EMPTY,results__23246);
};
var q = function (query,var_args){
var sources = null;
if (goog.isDef(var_args)) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return q__delegate.call(this, query, sources);
};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__23247){
var query = cljs.core.first(arglist__23247);
var sources = cljs.core.rest(arglist__23247);
return q__delegate(query, sources);
});
q.cljs$lang$arity$variadic = q__delegate;
return q;
})()
;
