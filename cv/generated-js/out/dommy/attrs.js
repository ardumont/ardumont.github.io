goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){
var and__3941__auto____29890 = (function (){var or__3943__auto____29889 = (idx === 0);
if(or__3943__auto____29889)
{return or__3943__auto____29889;
} else
{return (" " === class_name.charAt((idx - 1)));
}
})();
if(cljs.core.truth_(and__3941__auto____29890))
{var total_len__29891 = class_name.length;
var stop__29892 = (idx + class$.length);
if((stop__29892 <= total_len__29891))
{var or__3943__auto____29893 = (stop__29892 === total_len__29891);
if(or__3943__auto____29893)
{return or__3943__auto____29893;
} else
{return (" " === class_name.charAt(stop__29892));
}
} else
{return null;
}
} else
{return and__3941__auto____29890;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){
var start_from__29896 = 0;
while(true){
var i__29897 = class_name.indexOf(class$,start_from__29896);
if((i__29897 >= 0))
{if(cljs.core.truth_(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i__29897)))
{return i__29897;
} else
{{
var G__29898 = (i__29897 + class$.length);
start_from__29896 = G__29898;
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
var elem__29906 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto____29907 = elem__29906.classList;
if(cljs.core.truth_(temp__4090__auto____29907))
{var class_list__29908 = temp__4090__auto____29907;
return class_list__29908.contains(class$);
} else
{var temp__4092__auto____29909 = elem__29906.className;
if(cljs.core.truth_(temp__4092__auto____29909))
{var class_name__29910 = temp__4092__auto____29909;
var temp__4092__auto____29911 = dommy.attrs.class_index.call(null,class_name__29910,class$);
if(cljs.core.truth_(temp__4092__auto____29911))
{var i__29912 = temp__4092__auto____29911;
return (i__29912 >= 0);
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
var elem__29930 = dommy.template.__GT_node_like.call(null,elem);
var classes__29931 = clojure.string.trim.call(null,classes);
if(cljs.core.seq.call(null,classes__29931))
{var temp__4090__auto____29932 = elem__29930.classList;
if(cljs.core.truth_(temp__4090__auto____29932))
{var class_list__29933 = temp__4090__auto____29932;
var G__29934__29935 = cljs.core.seq.call(null,classes__29931.split(/\s+/));
if(G__29934__29935)
{var class__29936 = cljs.core.first.call(null,G__29934__29935);
var G__29934__29937 = G__29934__29935;
while(true){
class_list__29933.add(class__29936);
var temp__4092__auto____29938 = cljs.core.next.call(null,G__29934__29937);
if(temp__4092__auto____29938)
{var G__29934__29939 = temp__4092__auto____29938;
{
var G__29947 = cljs.core.first.call(null,G__29934__29939);
var G__29948 = G__29934__29939;
class__29936 = G__29947;
G__29934__29937 = G__29948;
continue;
}
} else
{}
break;
}
} else
{}
} else
{var class_name__29940 = elem__29930.className;
var G__29941__29942 = cljs.core.seq.call(null,classes__29931.split(/\s+/));
if(G__29941__29942)
{var class__29943 = cljs.core.first.call(null,G__29941__29942);
var G__29941__29944 = G__29941__29942;
while(true){
if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name__29940,class__29943)))
{} else
{elem__29930.className = (((class_name__29940 === ""))?class__29943:[cljs.core.str(class_name__29940),cljs.core.str(" "),cljs.core.str(class__29943)].join(''));
}
var temp__4092__auto____29945 = cljs.core.next.call(null,G__29941__29944);
if(temp__4092__auto____29945)
{var G__29941__29946 = temp__4092__auto____29945;
{
var G__29949 = cljs.core.first.call(null,G__29941__29946);
var G__29950 = G__29941__29946;
class__29943 = G__29949;
G__29941__29944 = G__29950;
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
return elem__29930;
});
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){
var class_name__29956 = init_class_name;
while(true){
var class_len__29957 = class_name__29956.length;
var temp__4090__auto____29958 = dommy.attrs.class_index.call(null,class_name__29956,class$);
if(cljs.core.truth_(temp__4090__auto____29958))
{var i__29959 = temp__4090__auto____29958;
{
var G__29961 = (function (){var end__29960 = (i__29959 + class$.length);
return [cljs.core.str((((end__29960 < class_len__29957))?[cljs.core.str(class_name__29956.substring(0,i__29959)),cljs.core.str(class_name__29956.substr((end__29960 + 1)))].join(''):class_name__29956.substring(0,(i__29959 - 1))))].join('');
})();
class_name__29956 = G__29961;
continue;
}
} else
{return class_name__29956;
}
break;
}
});
/**
* remove class from and returns `elem`
*/
dommy.attrs.remove_class_BANG_ = (function remove_class_BANG_(elem,class$){
var elem__29967 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto____29968 = elem__29967.classList;
if(cljs.core.truth_(temp__4090__auto____29968))
{var class_list__29969 = temp__4090__auto____29968;
class_list__29969.remove(class$);
} else
{var class_name__29970 = elem__29967.className;
var new_class_name__29971 = dommy.attrs.remove_class_str.call(null,class_name__29970,cljs.core.name.call(null,class$));
if((class_name__29970 === new_class_name__29971))
{} else
{elem__29967.className = new_class_name__29971;
}
}
return elem__29967;
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
var elem__29976 = dommy.template.__GT_node_like.call(null,elem);
var temp__4090__auto____29977 = elem__29976.classList;
if(cljs.core.truth_(temp__4090__auto____29977))
{var class_list__29978 = temp__4090__auto____29977;
class_list__29978.toggle(class$);
} else
{toggle_class_BANG_.call(null,elem__29976,class$,cljs.core.not.call(null,dommy.attrs.has_class_QMARK_.call(null,elem__29976,class$)));
}
return elem__29976;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){
var elem__29979 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(add_QMARK_))
{dommy.attrs.add_class_BANG_.call(null,elem__29979,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__29979,class$);
}
return elem__29979;
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
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__29985){
var vec__29986__29987 = p__29985;
var k__29988 = cljs.core.nth.call(null,vec__29986__29987,0,null);
var v__29989 = cljs.core.nth.call(null,vec__29986__29987,1,null);
return [cljs.core.str(cljs.core.name.call(null,k__29988)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v__29989)),cljs.core.str(";")].join('');
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
var elem__30011 = dommy.template.__GT_node_like.call(null,elem);
var style__30012 = elem__30011.style;
var G__30013__30014 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
if(G__30013__30014)
{var G__30016__30018 = cljs.core.first.call(null,G__30013__30014);
var vec__30017__30019 = G__30016__30018;
var k__30020 = cljs.core.nth.call(null,vec__30017__30019,0,null);
var v__30021 = cljs.core.nth.call(null,vec__30017__30019,1,null);
var G__30013__30022 = G__30013__30014;
var G__30016__30023 = G__30016__30018;
var G__30013__30024 = G__30013__30022;
while(true){
var vec__30025__30026 = G__30016__30023;
var k__30027 = cljs.core.nth.call(null,vec__30025__30026,0,null);
var v__30028 = cljs.core.nth.call(null,vec__30025__30026,1,null);
var G__30013__30029 = G__30013__30024;
(style__30012[cljs.core.name.call(null,k__30027)] = v__30028);
var temp__4092__auto____30030 = cljs.core.next.call(null,G__30013__30029);
if(temp__4092__auto____30030)
{var G__30013__30031 = temp__4092__auto____30030;
{
var G__30032 = cljs.core.first.call(null,G__30013__30031);
var G__30033 = G__30013__30031;
G__30016__30023 = G__30032;
G__30013__30024 = G__30033;
continue;
}
} else
{}
break;
}
} else
{}
return elem__30011;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_style_BANG___delegate.call(this, elem, kvs);
};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30034){
var elem = cljs.core.first(arglist__30034);
var kvs = cljs.core.rest(arglist__30034);
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
var elem__30055 = dommy.template.__GT_node_like.call(null,elem);
var G__30056__30057 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));
if(G__30056__30057)
{var G__30059__30061 = cljs.core.first.call(null,G__30056__30057);
var vec__30060__30062 = G__30059__30061;
var k__30063 = cljs.core.nth.call(null,vec__30060__30062,0,null);
var v__30064 = cljs.core.nth.call(null,vec__30060__30062,1,null);
var G__30056__30065 = G__30056__30057;
var G__30059__30066 = G__30059__30061;
var G__30056__30067 = G__30056__30065;
while(true){
var vec__30068__30069 = G__30059__30066;
var k__30070 = cljs.core.nth.call(null,vec__30068__30069,0,null);
var v__30071 = cljs.core.nth.call(null,vec__30068__30069,1,null);
var G__30056__30072 = G__30056__30067;
dommy.attrs.set_style_BANG_.call(null,elem__30055,k__30070,[cljs.core.str(v__30071),cljs.core.str("px")].join(''));
var temp__4092__auto____30073 = cljs.core.next.call(null,G__30056__30072);
if(temp__4092__auto____30073)
{var G__30056__30074 = temp__4092__auto____30073;
{
var G__30075 = cljs.core.first.call(null,G__30056__30074);
var G__30076 = G__30056__30074;
G__30059__30066 = G__30075;
G__30056__30067 = G__30076;
continue;
}
} else
{}
break;
}
} else
{}
return elem__30055;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return set_px_BANG___delegate.call(this, elem, kvs);
};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__30077){
var elem = cljs.core.first(arglist__30077);
var kvs = cljs.core.rest(arglist__30077);
return set_px_BANG___delegate(elem, kvs);
});
set_px_BANG_.cljs$lang$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){
var pixels__30079 = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);
if(cljs.core.seq.call(null,pixels__30079))
{return parseInt(pixels__30079);
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
{var G__30102__30103 = dommy.template.__GT_node_like.call(null,elem);
G__30102__30103.setAttribute(cljs.core.name.call(null,k),(((k === "\uFDD0'style"))?dommy.attrs.style_str.call(null,v):v));
return G__30102__30103;
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__30124__delegate = function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'even?",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'kvs"),cljs.core.hash_map("\uFDD0'line",150,"\uFDD0'column",19))),cljs.core.hash_map("\uFDD0'line",150,"\uFDD0'column",12))))].join('')));
}
var elem__30104 = dommy.template.__GT_node_like.call(null,elem);
var G__30105__30106 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));
if(G__30105__30106)
{var G__30108__30110 = cljs.core.first.call(null,G__30105__30106);
var vec__30109__30111 = G__30108__30110;
var k__30112 = cljs.core.nth.call(null,vec__30109__30111,0,null);
var v__30113 = cljs.core.nth.call(null,vec__30109__30111,1,null);
var G__30105__30114 = G__30105__30106;
var G__30108__30115 = G__30108__30110;
var G__30105__30116 = G__30105__30114;
while(true){
var vec__30117__30118 = G__30108__30115;
var k__30119 = cljs.core.nth.call(null,vec__30117__30118,0,null);
var v__30120 = cljs.core.nth.call(null,vec__30117__30118,1,null);
var G__30105__30121 = G__30105__30116;
set_attr_BANG_.call(null,elem__30104,k__30119,v__30120);
var temp__4092__auto____30122 = cljs.core.next.call(null,G__30105__30121);
if(temp__4092__auto____30122)
{var G__30105__30123 = temp__4092__auto____30122;
{
var G__30125 = cljs.core.first.call(null,G__30105__30123);
var G__30126 = G__30105__30123;
G__30108__30115 = G__30125;
G__30105__30116 = G__30126;
continue;
}
} else
{}
break;
}
} else
{}
return elem__30104;
};
var G__30124 = function (elem,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__30124__delegate.call(this, elem, k, v, kvs);
};
G__30124.cljs$lang$maxFixedArity = 3;
G__30124.cljs$lang$applyTo = (function (arglist__30127){
var elem = cljs.core.first(arglist__30127);
var k = cljs.core.first(cljs.core.next(arglist__30127));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30127)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30127)));
return G__30124__delegate(elem, k, v, kvs);
});
G__30124.cljs$lang$arity$variadic = G__30124__delegate;
return G__30124;
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
var elem__30136 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray(["\uFDD0'class","\uFDD0'classes"]).call(null,k)))
{elem__30136.className = "";
} else
{elem__30136.removeAttribute(cljs.core.name.call(null,k));
}
return elem__30136;
});
var remove_attr_BANG___3 = (function() { 
var G__30144__delegate = function (elem,k,ks){
var elem__30137 = dommy.template.__GT_node_like.call(null,elem);
var G__30138__30139 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
if(G__30138__30139)
{var k__30140 = cljs.core.first.call(null,G__30138__30139);
var G__30138__30141 = G__30138__30139;
while(true){
remove_attr_BANG_.call(null,elem__30137,k__30140);
var temp__4092__auto____30142 = cljs.core.next.call(null,G__30138__30141);
if(temp__4092__auto____30142)
{var G__30138__30143 = temp__4092__auto____30142;
{
var G__30145 = cljs.core.first.call(null,G__30138__30143);
var G__30146 = G__30138__30143;
k__30140 = G__30145;
G__30138__30141 = G__30146;
continue;
}
} else
{}
break;
}
} else
{}
return elem__30137;
};
var G__30144 = function (elem,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30144__delegate.call(this, elem, k, ks);
};
G__30144.cljs$lang$maxFixedArity = 2;
G__30144.cljs$lang$applyTo = (function (arglist__30147){
var elem = cljs.core.first(arglist__30147);
var k = cljs.core.first(cljs.core.next(arglist__30147));
var ks = cljs.core.rest(cljs.core.next(arglist__30147));
return G__30144__delegate(elem, k, ks);
});
G__30144.cljs$lang$arity$variadic = G__30144__delegate;
return G__30144;
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
var elem__30153 = dommy.template.__GT_node_like.call(null,elem);
toggle_BANG_.call(null,elem__30153,dommy.attrs.hidden_QMARK_.call(null,elem__30153));
return elem__30153;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){
var G__30151__30152 = dommy.template.__GT_node_like.call(null,elem);
G__30151__30152.style.display = (cljs.core.truth_(show_QMARK_)?"":"none");
return G__30151__30152;
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
