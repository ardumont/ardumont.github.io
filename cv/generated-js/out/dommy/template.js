goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){
if((function (){var and__3941__auto____29738 = this$;
if(and__3941__auto____29738)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3941__auto____29738;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__19152__auto____29739 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____29740 = (dommy.template._elem[goog.typeOf(x__19152__auto____29739)]);
if(or__3943__auto____29740)
{return or__3943__auto____29740;
} else
{var or__3943__auto____29741 = (dommy.template._elem["_"]);
if(or__3943__auto____29741)
{return or__3943__auto____29741;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx__29745 = s.indexOf("#",start_idx);
var class_idx__29746 = s.indexOf(".",start_idx);
var idx__29747 = Math.min(id_idx__29745,class_idx__29746);
if((idx__29747 < 0))
{return Math.max(id_idx__29745,class_idx__29746);
} else
{return idx__29747;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str__29757 = cljs.core.name.call(null,node_key);
var base_idx__29758 = dommy.template.next_css_index.call(null,node_str__29757,0);
var tag__29759 = (((base_idx__29758 > 0))?node_str__29757.substring(0,base_idx__29758):(((base_idx__29758 === 0))?"div":(("\uFDD0'else")?node_str__29757:null)));
var node__29760 = document.createElement(tag__29759);
if((base_idx__29758 >= 0))
{var str__29761 = node_str__29757.substring(base_idx__29758);
while(true){
var next_idx__29762 = dommy.template.next_css_index.call(null,str__29761,1);
var frag__29763 = (((next_idx__29762 >= 0))?str__29761.substring(0,next_idx__29762):str__29761);
var G__29764__29765 = frag__29763.charAt(0);
if(cljs.core._EQ_.call(null,"#",G__29764__29765))
{node__29760.setAttribute("id",frag__29763.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__29764__29765))
{dommy.attrs.add_class_BANG_.call(null,node__29760,frag__29763.substring(1));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag__29763.charAt(0))].join('')));
} else
{}
}
}
if((next_idx__29762 >= 0))
{{
var G__29766 = str__29761.substring(next_idx__29762);
str__29761 = G__29766;
continue;
}
} else
{}
break;
}
} else
{}
return node__29760;
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
if((function (){var G__29776__29777 = data;
if(G__29776__29777)
{if(cljs.core.truth_((function (){var or__3943__auto____29778 = null;
if(cljs.core.truth_(or__3943__auto____29778))
{return or__3943__auto____29778;
} else
{return G__29776__29777.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29776__29777.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29776__29777);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29776__29777);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var G__29779__29780 = cljs.core.seq.call(null,data);
if(G__29779__29780)
{var child__29781 = cljs.core.first.call(null,G__29779__29780);
var G__29779__29782 = G__29779__29780;
while(true){
__GT_document_fragment.call(null,result_frag,child__29781);
var temp__4092__auto____29783 = cljs.core.next.call(null,G__29779__29782);
if(temp__4092__auto____29783)
{var G__29779__29784 = temp__4092__auto____29783;
{
var G__29785 = cljs.core.first.call(null,G__29779__29784);
var G__29786 = G__29779__29784;
child__29781 = G__29785;
G__29779__29782 = G__29786;
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
if((function (){var G__29790__29791 = data;
if(G__29790__29791)
{if(cljs.core.truth_((function (){var or__3943__auto____29792 = null;
if(cljs.core.truth_(or__3943__auto____29792))
{return or__3943__auto____29792;
} else
{return G__29790__29791.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29790__29791.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29790__29791);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29790__29791);
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
dommy.template.compound_element = (function compound_element(p__29793){
var vec__29833__29834 = p__29793;
var tag_name__29835 = cljs.core.nth.call(null,vec__29833__29834,0,null);
var maybe_attrs__29836 = cljs.core.nth.call(null,vec__29833__29834,1,null);
var children__29837 = cljs.core.nthnext.call(null,vec__29833__29834,2);
var n__29838 = dommy.template.base_element.call(null,tag_name__29835);
var attrs__29843 = (((function (){var and__3941__auto____29839 = cljs.core.map_QMARK_.call(null,maybe_attrs__29836);
if(and__3941__auto____29839)
{return !((function (){var G__29840__29841 = maybe_attrs__29836;
if(G__29840__29841)
{if(cljs.core.truth_((function (){var or__3943__auto____29842 = null;
if(cljs.core.truth_(or__3943__auto____29842))
{return or__3943__auto____29842;
} else
{return G__29840__29841.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29840__29841.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29840__29841);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29840__29841);
}
})());
} else
{return and__3941__auto____29839;
}
})())?maybe_attrs__29836:null);
var children__29844 = (cljs.core.truth_(attrs__29843)?children__29837:cljs.core.cons.call(null,maybe_attrs__29836,children__29837));
var G__29845__29846 = cljs.core.seq.call(null,attrs__29843);
if(G__29845__29846)
{var G__29848__29850 = cljs.core.first.call(null,G__29845__29846);
var vec__29849__29851 = G__29848__29850;
var k__29852 = cljs.core.nth.call(null,vec__29849__29851,0,null);
var v__29853 = cljs.core.nth.call(null,vec__29849__29851,1,null);
var G__29845__29854 = G__29845__29846;
var G__29848__29855 = G__29848__29850;
var G__29845__29856 = G__29845__29854;
while(true){
var vec__29857__29858 = G__29848__29855;
var k__29859 = cljs.core.nth.call(null,vec__29857__29858,0,null);
var v__29860 = cljs.core.nth.call(null,vec__29857__29858,1,null);
var G__29845__29861 = G__29845__29856;
var G__29862__29863 = k__29859;
if(cljs.core._EQ_.call(null,"\uFDD0'classes",G__29862__29863))
{var G__29864__29865 = cljs.core.seq.call(null,v__29860);
if(G__29864__29865)
{var c__29866 = cljs.core.first.call(null,G__29864__29865);
var G__29864__29867 = G__29864__29865;
while(true){
dommy.attrs.add_class_BANG_.call(null,n__29838,c__29866);
var temp__4092__auto____29868 = cljs.core.next.call(null,G__29864__29867);
if(temp__4092__auto____29868)
{var G__29864__29869 = temp__4092__auto____29868;
{
var G__29872 = cljs.core.first.call(null,G__29864__29869);
var G__29873 = G__29864__29869;
c__29866 = G__29872;
G__29864__29867 = G__29873;
continue;
}
} else
{}
break;
}
} else
{}
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'class",G__29862__29863))
{dommy.attrs.add_class_BANG_.call(null,n__29838,v__29860);
} else
{if("\uFDD0'else")
{dommy.attrs.set_attr_BANG_.call(null,n__29838,k__29859,v__29860);
} else
{}
}
}
var temp__4092__auto____29870 = cljs.core.next.call(null,G__29845__29861);
if(temp__4092__auto____29870)
{var G__29845__29871 = temp__4092__auto____29870;
{
var G__29874 = cljs.core.first.call(null,G__29845__29871);
var G__29875 = G__29845__29871;
G__29848__29855 = G__29874;
G__29845__29856 = G__29875;
continue;
}
} else
{}
break;
}
} else
{}
n__29838.appendChild(dommy.template.__GT_node_like.call(null,children__29844));
return n__29838;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){
if(cljs.core.keyword_QMARK_.call(null,this$))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return dommy.template.compound_element.call(null,this$);
});
Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
return this$;
});
dommy.template.node = (function node(data){
if((function (){var G__29879__29880 = data;
if(G__29879__29880)
{if(cljs.core.truth_((function (){var or__3943__auto____29881 = null;
if(cljs.core.truth_(or__3943__auto____29881))
{return or__3943__auto____29881;
} else
{return G__29879__29880.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29879__29880.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29879__29880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,dommy.template.PElement,G__29879__29880);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent__29883 = document.createElement("div");
parent__29883.insertAdjacentHTML("beforeend",html);
return Array.prototype.slice.call(parent__29883.childNodes);
});
