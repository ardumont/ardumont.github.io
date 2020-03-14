goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__18763 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max__18763,cljs.core.remove.call(null,(function (p1__18761_SHARP_){
return (max__18763 === p1__18761_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2)))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__18767__delegate = function (s1,s2,sets){
var bubbled_sets__18766 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__18766),cljs.core.rest.call(null,bubbled_sets__18766));
};
var G__18767 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18767__delegate.call(this, s1, s2, sets);
};
G__18767.cljs$lang$maxFixedArity = 2;
G__18767.cljs$lang$applyTo = (function (arglist__18768){
var s1 = cljs.core.first(arglist__18768);
var s2 = cljs.core.first(cljs.core.next(arglist__18768));
var sets = cljs.core.rest(cljs.core.next(arglist__18768));
return G__18767__delegate(s1, s2, sets);
});
G__18767.cljs$lang$arity$variadic = G__18767__delegate;
return G__18767;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
return union__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$lang$arity$0 = union__0;
union.cljs$lang$arity$1 = union__1;
union.cljs$lang$arity$2 = union__2;
union.cljs$lang$arity$variadic = union__3.cljs$lang$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1)))
{{
var G__18771 = s2;
var G__18772 = s1;
s1 = G__18771;
s2 = G__18772;
continue;
}
} else
{return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item))
{return result;
} else
{return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__18773__delegate = function (s1,s2,sets){
var bubbled_sets__18770 = clojure.set.bubble_max_key.call(null,(function (p1__18764_SHARP_){
return (- cljs.core.count.call(null,p1__18764_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__18770),cljs.core.rest.call(null,bubbled_sets__18770));
};
var G__18773 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18773__delegate.call(this, s1, s2, sets);
};
G__18773.cljs$lang$maxFixedArity = 2;
G__18773.cljs$lang$applyTo = (function (arglist__18774){
var s1 = cljs.core.first(arglist__18774);
var s2 = cljs.core.first(cljs.core.next(arglist__18774));
var sets = cljs.core.rest(cljs.core.next(arglist__18774));
return G__18773__delegate(s1, s2, sets);
});
G__18773.cljs$lang$arity$variadic = G__18773__delegate;
return G__18773;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
return intersection__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$lang$arity$1 = intersection__1;
intersection.cljs$lang$arity$2 = intersection__2;
intersection.cljs$lang$arity$variadic = intersection__3.cljs$lang$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2)))
{return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item))
{return cljs.core.disj.call(null,result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__18775__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__18775 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__18775__delegate.call(this, s1, s2, sets);
};
G__18775.cljs$lang$maxFixedArity = 2;
G__18775.cljs$lang$applyTo = (function (arglist__18776){
var s1 = cljs.core.first(arglist__18776);
var s2 = cljs.core.first(cljs.core.next(arglist__18776));
var sets = cljs.core.rest(cljs.core.next(arglist__18776));
return G__18775__delegate(s1, s2, sets);
});
G__18775.cljs$lang$arity$variadic = G__18775__delegate;
return G__18775;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
return difference__3.cljs$lang$arity$variadic(s1,s2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$lang$arity$1 = difference__1;
difference.cljs$lang$arity$2 = difference__2;
difference.cljs$lang$arity$variadic = difference__3.cljs$lang$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k)))
{return s;
} else
{return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__18777_SHARP_){
return cljs.core.select_keys.call(null,p1__18777_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__18785){
var vec__18786__18787 = p__18785;
var old__18788 = cljs.core.nth.call(null,vec__18786__18787,0,null);
var new__18789 = cljs.core.nth.call(null,vec__18786__18787,1,null);
if((function (){var and__4236__auto____18790 = cljs.core.not_EQ_.call(null,old__18788,new__18789);
if(and__4236__auto____18790)
{return cljs.core.contains_QMARK_.call(null,m,old__18788);
} else
{return and__4236__auto____18790;
}
})())
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new__18789,cljs.core._lookup.call(null,m,old__18788,null)),old__18788);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__18778_SHARP_){
return clojure.set.rename_keys.call(null,p1__18778_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__18792 = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik__18792,cljs.core.conj.call(null,cljs.core._lookup.call(null,m,ik__18792,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__18802){
var vec__18803__18804 = p__18802;
var k__18805 = cljs.core.nth.call(null,vec__18803__18804,0,null);
var v__18806 = cljs.core.nth.call(null,vec__18803__18804,1,null);
return cljs.core.assoc.call(null,m,v__18806,k__18805);
}),cljs.core.ObjMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((function (){var and__4236__auto____18823 = cljs.core.seq.call(null,xrel);
if(and__4236__auto____18823)
{return cljs.core.seq.call(null,yrel);
} else
{return and__4236__auto____18823;
}
})())
{var ks__18825 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__18824__18826 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel], true):cljs.core.PersistentVector.fromArray([yrel,xrel], true));
var r__18827 = cljs.core.nth.call(null,vec__18824__18826,0,null);
var s__18828 = cljs.core.nth.call(null,vec__18824__18826,1,null);
var idx__18829 = clojure.set.index.call(null,r__18827,ks__18825);
return cljs.core.reduce.call(null,(function (ret,x){
var found__18830 = idx__18829.call(null,cljs.core.select_keys.call(null,x,ks__18825));
if(cljs.core.truth_(found__18830))
{return cljs.core.reduce.call(null,(function (p1__18793_SHARP_,p2__18794_SHARP_){
return cljs.core.conj.call(null,p1__18793_SHARP_,cljs.core.merge.call(null,p2__18794_SHARP_,x));
}),ret,found__18830);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s__18828);
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__18831__18832 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.PersistentVector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)], true):cljs.core.PersistentVector.fromArray([yrel,xrel,km], true));
var r__18833 = cljs.core.nth.call(null,vec__18831__18832,0,null);
var s__18834 = cljs.core.nth.call(null,vec__18831__18832,1,null);
var k__18835 = cljs.core.nth.call(null,vec__18831__18832,2,null);
var idx__18836 = clojure.set.index.call(null,r__18833,cljs.core.vals.call(null,k__18835));
return cljs.core.reduce.call(null,(function (ret,x){
var found__18837 = idx__18836.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__18835)),k__18835));
if(cljs.core.truth_(found__18837))
{return cljs.core.reduce.call(null,(function (p1__18795_SHARP_,p2__18796_SHARP_){
return cljs.core.conj.call(null,p1__18795_SHARP_,cljs.core.merge.call(null,p2__18796_SHARP_,x));
}),ret,found__18837);
} else
{return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,s__18834);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$2 = join__2;
join.cljs$lang$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__4236__auto____18840 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));
if(and__4236__auto____18840)
{return cljs.core.every_QMARK_.call(null,(function (p1__18807_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__18807_SHARP_);
}),set1);
} else
{return and__4236__auto____18840;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__4236__auto____18842 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));
if(and__4236__auto____18842)
{return cljs.core.every_QMARK_.call(null,(function (p1__18838_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__18838_SHARP_);
}),set2);
} else
{return and__4236__auto____18842;
}
});
