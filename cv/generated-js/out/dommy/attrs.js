goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__4236__auto____19298 = (function (){var or__4238__auto____19297 = (idx === 0);
if(or__4238__auto____19297)
{return or__4238__auto____19297;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();
if(cljs.core.truth_(and__4236__auto____19298))
{var total_len__19299 = class_name.length;
var stop__19300 = (idx + class$.length);
if((stop__19300 <= total_len__19299))
{var or__4238__auto____19301 = (stop__19300 === total_len__19299);
if(or__4238__auto____19301)
{return or__4238__auto____19301;
} else
{return (" " === class_name.charAt(stop__19300));
}
} else
{return null;
}
} else
{return and__4236__auto____19298;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from__19304 = 0;
while(true){
var i__19305 = class_name.indexOf(class$,start_from__19304);
if((i__19305 >= 0))
{if(cljs.core.truth_(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i__19305)))
{return i__19305;
} else
{{
var G__19306 = (i__19305 + class$.length);
start_from__19304 = G__19306;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){
var elem__19314 = dommy.template.__GT_node_like.call(null,elem);
var temp__4423__auto____19315 = elem__19314.classList;
if(cljs.core.truth_(temp__4423__auto____19315))
{var class_list__19316 = temp__4423__auto____19315;
return class_list__19316.contains(class$);
} else
{var temp__4425__auto____19317 = elem__19314.className;
if(cljs.core.truth_(temp__4425__auto____19317))
{var class_name__19318 = temp__4425__auto____19317;
var temp__4425__auto____19319 = dommy.attrs.class_index.call(null,class_name__19318,class$);
if(cljs.core.truth_(temp__4425__auto____19319))
{var i__19320 = temp__4425__auto____19319;
return (i__19320 >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
*/
dommy.attrs.add_class_BANG_ = (function add_class_BANG_(elem,classes){
var elem__19338 = dommy.template.__GT_node_like.call(null,elem);
var classes__19339 = clojure.string.trim.call(null,classes);
if(cljs.core.seq.call(null,classes__19339))
{var temp__4423__auto____19340 = elem__19338.classList;
if(cljs.core.truth_(temp__4423__auto____19340))
{var class_list__19341 = temp__4423__auto____19340;
var G__19342__19343 = cljs.core.seq.call(null,classes__19339.split(/\s+/));
if(G__19342__19343)
{var class__19344 = cljs.core.first.call(null,G__19342__19343);
var G__19342__19345 = G__19342__19343;
while(true){
class_list__19341.add(class__19344);
var temp__4425__auto____19346 = cljs.core.next.call(null,G__19342__19345);
if(temp__4425__auto____19346)
{var G__19342__19347 = temp__4425__auto____19346;
{
var G__19355 = cljs.core.first.call(null,G__19342__19347);
var G__19356 = G__19342__19347;
class__19344 = G__19355;
G__19342__19345 = G__19356;
continue;
}
} else
{}
break;
}
} else
{}
} else
{var class_name__19348 = elem__19338.className;
var G__19349__19350 = cljs.core.seq.call(null,classes__19339.split(/\s+/));
if(G__19349__19350)
{var class__19351 = cljs.core.first.call(null,G__19349__19350);
var G__19349__19352 = G__19349__19350;
while(true){
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name__19348,class__19351)))
{} else
{elem__19338.className = (((class_name__19348 === ""))?class__19351:[cljs.core.str(class_name__19348),cljs.core.str(" "),cljs.core.str(class__19351)].join(''));
}
var temp__4425__auto____19353 = cljs.core.next.call(null,G__19349__19352);
if(temp__4425__auto____19353)
{var G__19349__19354 = temp__4425__auto____19353;
{
var G__19357 = cljs.core.first.call(null,G__19349__19354);
var G__19358 = G__19349__19354;
class__19351 = G__19357;
G__19349__19352 = G__19358;
continue;
}
} else
{}
break;
}
} else
{}
}
} else
{}
return elem__19338;
});
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name__19364 = init_class_name;
while(true){
var class_len__19365 = class_name__19364.length;
var temp__4423__auto____19366 = dommy.attrs.class_index.call(null,class_name__19364,class$);
if(cljs.core.truth_(temp__4423__auto____19366))
{var i__19367 = temp__4423__auto____19366;
{
var G__19369 = (function (){var end__19368 = (i__19367 + class$.length);
return [cljs.core.str((((end__19368 < class_len__19365))?[cljs.core.str(class_name__19364.substring(0,i__19367)),cljs.core.str(class_name__19364.substr((end__19368 + 1)))].join(''):class_name__19364.substring(0,(i__19367 - 1))))].join('');
})();
class_name__19364 = G__19369;
continue;
}
} else
{return class_name__19364;
}
break;
}
});
/**
* remove class from and returns `elem`
*/
dommy.attrs.remove_class_BANG_ = (function remove_class_BANG_(elem,class$){
var elem__19375 = dommy.template.__GT_node_like.call(null,elem);
var temp__4423__auto____19376 = elem__19375.classList;
if(cljs.core.truth_(temp__4423__auto____19376))
{var class_list__19377 = temp__4423__auto____19376;
class_list__19377.remove(class$);
} else
{var class_name__19378 = elem__19375.className;
var new_class_name__19379 = dommy.attrs.remove_class_str.call(null,class_name__19378,cljs.core.name.call(null,class$));
if((class_name__19378 === new_class_name__19379))
{} else
{elem__19375.className = new_class_name__19379;
}
}
return elem__19375;
});
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){
var elem__19384 = dommy.template.__GT_node_like.call(null,elem);
var temp__4423__auto____19385 = elem__19384.classList;
if(cljs.core.truth_(temp__4423__auto____19385))
{var class_list__19386 = temp__4423__auto____19385;
class_list__19386.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__19384,class$,cljs.core.not.call(null,dommy.attrs.has_class_QMARK_.call(null,elem__19384,class$)));
}
return elem__19384;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__19387 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(add_QMARK_))
{dommy.attrs.add_class_BANG_.call(null,elem__19387,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__19387,class$);
}
return elem__19387;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
toggle_class_BANG_.cljs$lang$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$lang$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(m){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__19393){
var vec__19394__19395 = p__19393;
var k__19396 = cljs.core.nth.call(null,vec__19394__19395,0,null);
var v__19397 = cljs.core.nth.call(null,vec__19394__19395,1,null);
return [cljs.core.str(cljs.core.name.call(null,k__19396)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v__19397)),cljs.core.str(";")].join('');
}),m));
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'even?",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'kvs"),cljs.core.hash_map("\uFDD0'line",107,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",107,"\uFDD0'column",11))))].join('')));
}
var elem__19419 = dommy.template.__GT_node_like.call(null,elem);
var style__19420 = elem__19419.style;
var G__19421__19422 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
if(G__19421__19422)
{var G__19424__19426 = cljs.core.first.call(null,G__19421__19422);
var vec__19425__19427 = G__19424__19426;
var k__19428 = cljs.core.nth.call(null,vec__19425__19427,0,null);
var v__19429 = cljs.core.nth.call(null,vec__19425__19427,1,null);
var G__19421__19430 = G__19421__19422;
var G__19424__19431 = G__19424__19426;
var G__19421__19432 = G__19421__19430;
while(true){
var vec__19433__19434 = G__19424__19431;
var k__19435 = cljs.core.nth.call(null,vec__19433__19434,0,null);
var v__19436 = cljs.core.nth.call(null,vec__19433__19434,1,null);
var G__19421__19437 = G__19421__19432;
(style__19420[cljs.core.name.call(null,k__19435)] = v__19436);
var temp__4425__auto____19438 = cljs.core.next.call(null,G__19421__19437);
if(temp__4425__auto____19438)
{var G__19421__19439 = temp__4425__auto____19438;
{
var G__19440 = cljs.core.first.call(null,G__19421__19439);
var G__19441 = G__19421__19439;
G__19424__19431 = G__19440;
G__19421__19432 = G__19441;
continue;
}
} else
{}
break;
}
} else
{}
return elem__19419;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this, elem, kvs);
};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19442){
var elem = cljs.core.first(arglist__19442);
var kvs = cljs.core.rest(arglist__19442);
return set_style_BANG___delegate(elem, kvs);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){
if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,"\uFDD1'k"))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'even?",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'kvs"),cljs.core.hash_map("\uFDD0'line",119,"\uFDD0'column",18))),cljs.core.hash_map("\uFDD0'line",119,"\uFDD0'column",11))))].join('')));
}
var elem__19463 = dommy.template.__GT_node_like.call(null,elem);
var G__19464__19465 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
if(G__19464__19465)
{var G__19467__19469 = cljs.core.first.call(null,G__19464__19465);
var vec__19468__19470 = G__19467__19469;
var k__19471 = cljs.core.nth.call(null,vec__19468__19470,0,null);
var v__19472 = cljs.core.nth.call(null,vec__19468__19470,1,null);
var G__19464__19473 = G__19464__19465;
var G__19467__19474 = G__19467__19469;
var G__19464__19475 = G__19464__19473;
while(true){
var vec__19476__19477 = G__19467__19474;
var k__19478 = cljs.core.nth.call(null,vec__19476__19477,0,null);
var v__19479 = cljs.core.nth.call(null,vec__19476__19477,1,null);
var G__19464__19480 = G__19464__19475;
dommy.attrs.set_style_BANG_.call(null,elem__19463,k__19478,[cljs.core.str(v__19479),cljs.core.str("px")].join(''));
var temp__4425__auto____19481 = cljs.core.next.call(null,G__19464__19480);
if(temp__4425__auto____19481)
{var G__19464__19482 = temp__4425__auto____19481;
{
var G__19483 = cljs.core.first.call(null,G__19464__19482);
var G__19484 = G__19464__19482;
G__19467__19474 = G__19483;
G__19464__19475 = G__19484;
continue;
}
} else
{}
break;
}
} else
{}
return elem__19463;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this, elem, kvs);
};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__19485){
var elem = cljs.core.first(arglist__19485);
var kvs = cljs.core.rest(arglist__19485);
return set_px_BANG___delegate(elem, kvs);
});
set_px_BANG_.cljs$lang$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels__19487 = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels__19487))
{return parseInt(pixels__19487);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){
return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){
if(cljs.core.truth_(v))
{var G__19510__19511 = dommy.template.__GT_node_like.call(null,elem);
G__19510__19511.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0'style"))?dommy.attrs.style_str.call(null,v):v));
return G__19510__19511;
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__19532__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'even?",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'kvs"),cljs.core.hash_map("\uFDD0'line",150,"\uFDD0'column",19))),cljs.core.hash_map("\uFDD0'line",150,"\uFDD0'column",12))))].join('')));
}
var elem__19512 = dommy.template.__GT_node_like.call(null,elem);
var G__19513__19514 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
if(G__19513__19514)
{var G__19516__19518 = cljs.core.first.call(null,G__19513__19514);
var vec__19517__19519 = G__19516__19518;
var k__19520 = cljs.core.nth.call(null,vec__19517__19519,0,null);
var v__19521 = cljs.core.nth.call(null,vec__19517__19519,1,null);
var G__19513__19522 = G__19513__19514;
var G__19516__19523 = G__19516__19518;
var G__19513__19524 = G__19513__19522;
while(true){
var vec__19525__19526 = G__19516__19523;
var k__19527 = cljs.core.nth.call(null,vec__19525__19526,0,null);
var v__19528 = cljs.core.nth.call(null,vec__19525__19526,1,null);
var G__19513__19529 = G__19513__19524;
set_attr_BANG_.call(null,elem__19512,k__19527,v__19528);
var temp__4425__auto____19530 = cljs.core.next.call(null,G__19513__19529);
if(temp__4425__auto____19530)
{var G__19513__19531 = temp__4425__auto____19530;
{
var G__19533 = cljs.core.first.call(null,G__19513__19531);
var G__19534 = G__19513__19531;
G__19516__19523 = G__19533;
G__19513__19524 = G__19534;
continue;
}
} else
{}
break;
}
} else
{}
return elem__19512;
};
var G__19532 = function (elem,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19532__delegate.call(this, elem, k, v, kvs);
};
G__19532.cljs$lang$maxFixedArity = 3;
G__19532.cljs$lang$applyTo = (function (arglist__19535){
var elem = cljs.core.first(arglist__19535);
var k = cljs.core.first(cljs.core.next(arglist__19535));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19535)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19535)));
return G__19532__delegate(elem, k, v, kvs);
});
G__19532.cljs$lang$arity$variadic = G__19532__delegate;
return G__19532;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$lang$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$lang$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$lang$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___4.cljs$lang$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){
var elem__19544 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["\uFDD0'class","\uFDD0'classes"]).call(null,k)))
{elem__19544.className = "";
} else
{elem__19544.removeAttribute(cljs.core.name.call(null,k));
}
return elem__19544;
});
var remove_attr_BANG___3 = (function() { 
var G__19552__delegate = function (elem,k,ks){
var elem__19545 = dommy.template.__GT_node_like.call(null,elem);
var G__19546__19547 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
if(G__19546__19547)
{var k__19548 = cljs.core.first.call(null,G__19546__19547);
var G__19546__19549 = G__19546__19547;
while(true){
remove_attr_BANG_.call(null,elem__19545,k__19548);
var temp__4425__auto____19550 = cljs.core.next.call(null,G__19546__19549);
if(temp__4425__auto____19550)
{var G__19546__19551 = temp__4425__auto____19550;
{
var G__19553 = cljs.core.first.call(null,G__19546__19551);
var G__19554 = G__19546__19551;
k__19548 = G__19553;
G__19546__19549 = G__19554;
continue;
}
} else
{}
break;
}
} else
{}
return elem__19545;
};
var G__19552 = function (elem,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19552__delegate.call(this, elem, k, ks);
};
G__19552.cljs$lang$maxFixedArity = 2;
G__19552.cljs$lang$applyTo = (function (arglist__19555){
var elem = cljs.core.first(arglist__19555);
var k = cljs.core.first(cljs.core.next(arglist__19555));
var ks = cljs.core.rest(cljs.core.next(arglist__19555));
return G__19552__delegate(elem, k, ks);
});
G__19552.cljs$lang$arity$variadic = G__19552__delegate;
return G__19552;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$lang$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$lang$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$lang$arity$variadic = remove_attr_BANG___3.cljs$lang$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){
if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){
return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){
var elem__19561 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__19561,dommy.attrs.hidden_QMARK_.call(null,elem__19561));
return elem__19561;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__19559__19560 = dommy.template.__GT_node_like.call(null,elem);
G__19559__19560.style.display = (cljs.core.truth_(show_QMARK_)?"":"none");
return G__19559__19560;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
toggle_BANG_.cljs$lang$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$lang$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
