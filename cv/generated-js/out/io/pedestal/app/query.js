goog.provide('io.pedestal.app.query');
goog.require('cljs.core');
goog.require('clojure.set');
io.pedestal.app.query.TupleSource = {};
io.pedestal.app.query.tuple_seq = (function tuple_seq(this$){
if((function (){var and__4236__auto____12147 = this$;
if(and__4236__auto____12147)
{return this$.io$pedestal$app$query$TupleSource$tuple_seq$arity$1;
} else
{return and__4236__auto____12147;
}
})())
{return this$.io$pedestal$app$query$TupleSource$tuple_seq$arity$1(this$);
} else
{var x__8178__auto____12148 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12149 = (io.pedestal.app.query.tuple_seq[goog.typeOf(x__8178__auto____12148)]);
if(or__4238__auto____12149)
{return or__4238__auto____12149;
} else
{var or__4238__auto____12150 = (io.pedestal.app.query.tuple_seq["_"]);
if(or__4238__auto____12150)
{return or__4238__auto____12150;
} else
{throw cljs.core.missing_protocol.call(null,"TupleSource.tuple-seq",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.query.logic_variable_QMARK_ = (function logic_variable_QMARK_(x){
var and__4236__auto____12152 = cljs.core.symbol_QMARK_.call(null,x);
if(and__4236__auto____12152)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"?");
} else
{return and__4236__auto____12152;
}
});
io.pedestal.app.query.datasource_QMARK_ = (function datasource_QMARK_(x){
var and__4236__auto____12154 = cljs.core.symbol_QMARK_.call(null,x);
if(and__4236__auto____12154)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,x)),"$");
} else
{return and__4236__auto____12154;
}
});
io.pedestal.app.query.unifier = (function unifier(bindings,clause,fact){
return cljs.core.reduce.call(null,(function (a,p__12162){
var vec__12163__12164 = p__12162;
var c__12165 = cljs.core.nth.call(null,vec__12163__12164,0,null);
var t__12166 = cljs.core.nth.call(null,vec__12163__12164,1,null);
var c__12168 = (cljs.core.truth_((function (){var and__4236__auto____12167 = io.pedestal.app.query.logic_variable_QMARK_.call(null,c__12165);
if(cljs.core.truth_(and__4236__auto____12167))
{return cljs.core.contains_QMARK_.call(null,bindings,c__12165);
} else
{return and__4236__auto____12167;
}
})())?cljs.core._lookup.call(null,bindings,c__12165,null):c__12165);
if(cljs.core.truth_(a))
{if(cljs.core.truth_(io.pedestal.app.query.logic_variable_QMARK_.call(null,c__12168)))
{return cljs.core.assoc.call(null,a,c__12168,t__12166);
} else
{if(cljs.core._EQ_.call(null,c__12168,t__12166))
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
var ks__12203 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,head))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,tail))));
if(cljs.core.empty_QMARK_.call(null,ks__12203))
{return tail;
} else
{var iter__8277__auto____12236 = (function iter__12204(s__12205){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12205__12222 = s__12205;
while(true){
var temp__4425__auto____12223 = cljs.core.seq.call(null,s__12205__12222);
if(temp__4425__auto____12223)
{var xs__4977__auto____12224 = temp__4425__auto____12223;
var x__12225 = cljs.core.first.call(null,xs__4977__auto____12224);
var iterys__8275__auto____12234 = ((function (s__12205__12222,x__12225,xs__4977__auto____12224,temp__4425__auto____12223){
return (function iter__12206(s__12207){
return (new cljs.core.LazySeq(null,false,((function (s__12205__12222,x__12225,xs__4977__auto____12224,temp__4425__auto____12223){
return (function (){
var s__12207__12230 = s__12207;
while(true){
var temp__4425__auto____12231 = cljs.core.seq.call(null,s__12207__12230);
if(temp__4425__auto____12231)
{var xs__4977__auto____12232 = temp__4425__auto____12231;
var y__12233 = cljs.core.first.call(null,xs__4977__auto____12232);
if(cljs.core._EQ_.call(null,cljs.core.select_keys.call(null,x__12225,ks__12203),cljs.core.select_keys.call(null,y__12233,ks__12203)))
{return cljs.core.cons.call(null,cljs.core.merge.call(null,x__12225,y__12233),iter__12206.call(null,cljs.core.rest.call(null,s__12207__12230)));
} else
{{
var G__12237 = cljs.core.rest.call(null,s__12207__12230);
s__12207__12230 = G__12237;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__12205__12222,x__12225,xs__4977__auto____12224,temp__4425__auto____12223))
,null));
});})(s__12205__12222,x__12225,xs__4977__auto____12224,temp__4425__auto____12223))
;
var fs__8276__auto____12235 = cljs.core.seq.call(null,iterys__8275__auto____12234.call(null,tail));
if(fs__8276__auto____12235)
{return cljs.core.concat.call(null,fs__8276__auto____12235,iter__12204.call(null,cljs.core.rest.call(null,s__12205__12222)));
} else
{{
var G__12238 = cljs.core.rest.call(null,s__12205__12222);
s__12205__12222 = G__12238;
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
return iter__8277__auto____12236.call(null,head);
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
{var head__12241 = cljs.core.first.call(null,unifiers);
var tail__12242 = cljs.core.rest.call(null,unifiers);
{
var G__12243 = cljs.core.reduce.call(null,((function (unifiers){
return (function (a,b){
return cljs.core.conj.call(null,a,io.pedestal.app.query.combine_unifiers.call(null,head__12241,b));
});})(unifiers))
,cljs.core.PersistentVector.EMPTY,tail__12242);
unifiers = G__12243;
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
{if((function (){var G__12247__12248 = data;
if(G__12247__12248)
{if(cljs.core.truth_((function (){var or__4238__auto____12249 = null;
if(cljs.core.truth_(or__4238__auto____12249))
{return or__4238__auto____12249;
} else
{return G__12247__12248.io$pedestal$app$query$TupleSource$;
}
})()))
{return true;
} else
{if((!G__12247__12248.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,io.pedestal.app.query.TupleSource,G__12247__12248);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,io.pedestal.app.query.TupleSource,G__12247__12248);
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
var unifiers__12251 = cljs.core.reduce.call(null,(function (a,k){
return cljs.core.concat.call(null,a,io.pedestal.app.query.unifiers.call(null,bindings,cljs.core._lookup.call(null,clauses,k,null),io.pedestal.app.query.__GT_tuples.call(null,cljs.core._lookup.call(null,facts,k,null))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,clauses));
return cljs.core.first.call(null,io.pedestal.app.query.fold.call(null,unifiers__12251));
});
io.pedestal.app.query.parse_query = (function parse_query(query){
return cljs.core.reduce.call(null,(function (a,x){
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'find","\uFDD0'where","\uFDD0'in"]),x))
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
var map__12263__12264 = io.pedestal.app.query.parse_query.call(null,query);
var map__12263__12265 = ((cljs.core.seq_QMARK_.call(null,map__12263__12264))?cljs.core.apply.call(null,cljs.core.hash_map,map__12263__12264):map__12263__12264);
var clauses__12266 = cljs.core._lookup.call(null,map__12263__12265,"\uFDD0'clauses",null);
var find__12267 = cljs.core._lookup.call(null,map__12263__12265,"\uFDD0'find",null);
var in__12268 = cljs.core._lookup.call(null,map__12263__12265,"\uFDD0'in",null);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sources),cljs.core.count.call(null,in__12268)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Datasource count does not match named input count."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'sources"),cljs.core.hash_map("\uFDD0'line",103,"\uFDD0'column",16)),cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'in"),cljs.core.hash_map("\uFDD0'line",103,"\uFDD0'column",32))),cljs.core.hash_map("\uFDD0'line",103,"\uFDD0'column",13))))].join('')));
}
var source_map__12269 = cljs.core.zipmap.call(null,in__12268,sources);
var parameters__12270 = cljs.core.remove.call(null,io.pedestal.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map__12269));
var data_sources__12271 = cljs.core.filter.call(null,io.pedestal.app.query.datasource_QMARK_,cljs.core.keys.call(null,source_map__12269));
var results__12272 = io.pedestal.app.query.produce.call(null,cljs.core.select_keys.call(null,source_map__12269,parameters__12270),clauses__12266,source_map__12269);
return cljs.core.reduce.call(null,(function (a,b){
return cljs.core.conj.call(null,a,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__12252_SHARP_){
return cljs.core._lookup.call(null,b,p1__12252_SHARP_,null);
}),find__12267)));
}),cljs.core.PersistentVector.EMPTY,results__12272);
};
var q = function (query,var_args){
var sources = null;
if (goog.isDef(var_args)) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return q__delegate.call(this, query, sources);
};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__12273){
var query = cljs.core.first(arglist__12273);
var sources = cljs.core.rest(arglist__12273);
return q__delegate(query, sources);
});
q.cljs$lang$arity$variadic = q__delegate;
return q;
})()
;
