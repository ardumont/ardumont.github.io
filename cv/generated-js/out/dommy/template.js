goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.attrs');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__4236__auto____19146 = this$;
if(and__4236__auto____19146)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__4236__auto____19146;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8178__auto____19147 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____19148 = (dommy.template._elem[goog.typeOf(x__8178__auto____19147)]);
if(or__4238__auto____19148)
{return or__4238__auto____19148;
} else
{var or__4238__auto____19149 = (dommy.template._elem["_"]);
if(or__4238__auto____19149)
{return or__4238__auto____19149;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx__19153 = s.indexOf("#",start_idx);
var class_idx__19154 = s.indexOf(".",start_idx);
var idx__19155 = Math.min(id_idx__19153,class_idx__19154);
if((idx__19155 < 0))
{return Math.max(id_idx__19153,class_idx__19154);
} else
{return idx__19155;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str__19165 = cljs.core.name.call(null,node_key);
var base_idx__19166 = dommy.template.next_css_index.call(null,node_str__19165,0);
var tag__19167 = (((base_idx__19166 > 0))?node_str__19165.substring(0,base_idx__19166):(((base_idx__19166 === 0))?"div":(("\uFDD0'else")?node_str__19165:null)));
var node__19168 = document.createElement(tag__19167);
if((base_idx__19166 >= 0))
{var str__19169 = node_str__19165.substring(base_idx__19166);
while(true){
var next_idx__19170 = dommy.template.next_css_index.call(null,str__19169,1);
var frag__19171 = (((next_idx__19170 >= 0))?str__19169.substring(0,next_idx__19170):str__19169);
var G__19172__19173 = frag__19171.charAt(0);
if(cljs.core._EQ_.call(null,".",G__19172__19173))
{dommy.attrs.add_class_BANG_.call(null,node__19168,frag__19171.substring(1));
} else
{if(cljs.core._EQ_.call(null,"#",G__19172__19173))
{node__19168.setAttribute("id",frag__19171.substring(1));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag__19171.charAt(0))].join('')));
} else
{}
}
}
if((next_idx__19170 >= 0))
{{
var G__19174 = str__19169.substring(next_idx__19170);
str__19169 = G__19174;
continue;
}
} else
{}
break;
}
} else
{}
return node__19168;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__19184__19185 = data;
if(G__19184__19185)
{if(cljs.core.truth_((function (){var or__4238__auto____19186 = null;
if(cljs.core.truth_(or__4238__auto____19186))
{return or__4238__auto____19186;
} else
{return G__19184__19185.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19184__19185.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19184__19185);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19184__19185);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var G__19187__19188 = cljs.core.seq.call(null,data);
if(G__19187__19188)
{var child__19189 = cljs.core.first.call(null,G__19187__19188);
var G__19187__19190 = G__19187__19188;
while(true){
__GT_document_fragment.call(null,result_frag,child__19189);
var temp__4425__auto____19191 = cljs.core.next.call(null,G__19187__19190);
if(temp__4425__auto____19191)
{var G__19187__19192 = temp__4425__auto____19191;
{
var G__19193 = cljs.core.first.call(null,G__19187__19192);
var G__19194 = G__19187__19192;
child__19189 = G__19193;
G__19187__19190 = G__19194;
continue;
}
} else
{}
break;
}
} else
{}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if("\uFDD0'else")
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw('Invalid arity: ' + arguments.length);
};
__GT_document_fragment.cljs$lang$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$lang$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__19198__19199 = data;
if(G__19198__19199)
{if(cljs.core.truth_((function (){var or__4238__auto____19200 = null;
if(cljs.core.truth_(or__4238__auto____19200))
{return or__4238__auto____19200;
} else
{return G__19198__19199.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19198__19199.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19198__19199);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19198__19199);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__19201){
var vec__19241__19242 = p__19201;
var tag_name__19243 = cljs.core.nth.call(null,vec__19241__19242,0,null);
var maybe_attrs__19244 = cljs.core.nth.call(null,vec__19241__19242,1,null);
var children__19245 = cljs.core.nthnext.call(null,vec__19241__19242,2);
var n__19246 = dommy.template.base_element.call(null,tag_name__19243);
var attrs__19251 = (((function (){var and__4236__auto____19247 = cljs.core.map_QMARK_.call(null,maybe_attrs__19244);
if(and__4236__auto____19247)
{return !((function (){var G__19248__19249 = maybe_attrs__19244;
if(G__19248__19249)
{if(cljs.core.truth_((function (){var or__4238__auto____19250 = null;
if(cljs.core.truth_(or__4238__auto____19250))
{return or__4238__auto____19250;
} else
{return G__19248__19249.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19248__19249.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19248__19249);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19248__19249);
}
})());
} else
{return and__4236__auto____19247;
}
})())?maybe_attrs__19244:null);
var children__19252 = (cljs.core.truth_(attrs__19251)?children__19245:cljs.core.cons.call(null,maybe_attrs__19244,children__19245));
var G__19253__19254 = cljs.core.seq.call(null,attrs__19251);
if(G__19253__19254)
{var G__19256__19258 = cljs.core.first.call(null,G__19253__19254);
var vec__19257__19259 = G__19256__19258;
var k__19260 = cljs.core.nth.call(null,vec__19257__19259,0,null);
var v__19261 = cljs.core.nth.call(null,vec__19257__19259,1,null);
var G__19253__19262 = G__19253__19254;
var G__19256__19263 = G__19256__19258;
var G__19253__19264 = G__19253__19262;
while(true){
var vec__19265__19266 = G__19256__19263;
var k__19267 = cljs.core.nth.call(null,vec__19265__19266,0,null);
var v__19268 = cljs.core.nth.call(null,vec__19265__19266,1,null);
var G__19253__19269 = G__19253__19264;
var G__19270__19271 = k__19267;
if(cljs.core._EQ_.call(null,"\uFDD0'class",G__19270__19271))
{dommy.attrs.add_class_BANG_.call(null,n__19246,v__19268);
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'classes",G__19270__19271))
{var G__19272__19273 = cljs.core.seq.call(null,v__19268);
if(G__19272__19273)
{var c__19274 = cljs.core.first.call(null,G__19272__19273);
var G__19272__19275 = G__19272__19273;
while(true){
dommy.attrs.add_class_BANG_.call(null,n__19246,c__19274);
var temp__4425__auto____19276 = cljs.core.next.call(null,G__19272__19275);
if(temp__4425__auto____19276)
{var G__19272__19277 = temp__4425__auto____19276;
{
var G__19280 = cljs.core.first.call(null,G__19272__19277);
var G__19281 = G__19272__19277;
c__19274 = G__19280;
G__19272__19275 = G__19281;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if("\uFDD0'else")
{dommy.attrs.set_attr_BANG_.call(null,n__19246,k__19267,v__19268);
} else
{}
}
}
var temp__4425__auto____19278 = cljs.core.next.call(null,G__19253__19269);
if(temp__4425__auto____19278)
{var G__19253__19279 = temp__4425__auto____19278;
{
var G__19282 = cljs.core.first.call(null,G__19253__19279);
var G__19283 = G__19253__19279;
G__19256__19263 = G__19282;
G__19253__19264 = G__19283;
continue;
}
} else
{}
break;
}
} else
{}
n__19246.appendChild(dommy.template.__GT_node_like.call(null,children__19252));
return n__19246;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
dommy.template.node = (function node(data){
if((function (){var G__19287__19288 = data;
if(G__19287__19288)
{if(cljs.core.truth_((function (){var or__4238__auto____19289 = null;
if(cljs.core.truth_(or__4238__auto____19289))
{return or__4238__auto____19289;
} else
{return G__19287__19288.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19287__19288.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19287__19288);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__19287__19288);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent__19291 = document.createElement("div");
parent__19291.insertAdjacentHTML("beforeend",html);
return Array.prototype.slice.call(parent__19291.childNodes);
});
