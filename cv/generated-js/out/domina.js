goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__30154 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__30155 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__30156 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__30155,"caption":table_section_wrapper__30155,"optgroup":opt_wrapper__30154,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__30156,"thead":table_section_wrapper__30155,"th":cell_wrapper__30156,"option":opt_wrapper__30154,"tbody":table_section_wrapper__30155,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__30155});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK___30169 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__30173 = (((function (){var and__3941__auto____30170 = cljs.core._EQ_.call(null,tag_name,"table");
if(and__3941__auto____30170)
{return no_tbody_QMARK___30169;
} else
{return and__3941__auto____30170;
}
})())?(function (){var and__3941__auto____30171 = div.firstChild;
if(cljs.core.truth_(and__3941__auto____30171))
{return div.firstChild.childNodes;
} else
{return and__3941__auto____30171;
}
})():(((function (){var and__3941__auto____30172 = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__3941__auto____30172)
{return no_tbody_QMARK___30169;
} else
{return and__3941__auto____30172;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__30174__30175 = cljs.core.seq.call(null,tbody__30173);
if(G__30174__30175)
{var child__30176 = cljs.core.first.call(null,G__30174__30175);
var G__30174__30177 = G__30174__30175;
while(true){
if((function (){var and__3941__auto____30178 = cljs.core._EQ_.call(null,child__30176.nodeName,"tbody");
if(and__3941__auto____30178)
{return cljs.core._EQ_.call(null,child__30176.childNodes.length,0);
} else
{return and__3941__auto____30178;
}
})())
{child__30176.parentNode.removeChild(child__30176);
} else
{}
var temp__4092__auto____30179 = cljs.core.next.call(null,G__30174__30177);
if(temp__4092__auto____30179)
{var G__30174__30180 = temp__4092__auto____30179;
{
var G__30181 = cljs.core.first.call(null,G__30174__30180);
var G__30182 = G__30174__30180;
child__30176 = G__30181;
G__30174__30177 = G__30182;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__30196 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__30197 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__30196)))].join('').toLowerCase();
var vec__30195__30198 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__30197,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__30199 = cljs.core.nth.call(null,vec__30195__30198,0,null);
var start_wrap__30200 = cljs.core.nth.call(null,vec__30195__30198,1,null);
var end_wrap__30201 = cljs.core.nth.call(null,vec__30195__30198,2,null);
var div__30205 = (function (){var wrapper__30203 = (function (){var div__30202 = document.createElement("div");
div__30202.innerHTML = [cljs.core.str(start_wrap__30200),cljs.core.str(html__30196),cljs.core.str(end_wrap__30201)].join('');
return div__30202;
})();
var level__30204 = depth__30199;
while(true){
if((level__30204 > 0))
{{
var G__30207 = wrapper__30203.lastChild;
var G__30208 = (level__30204 - 1);
wrapper__30203 = G__30207;
level__30204 = G__30208;
continue;
}
} else
{return wrapper__30203;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__30205,html__30196,tag_name__30197,start_wrap__30200);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto____30206 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto____30206)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__30196);
} else
{return and__3941__auto____30206;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__30205,html__30196);
} else
{}
return div__30205.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto____30213 = content;
if(and__3941__auto____30213)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto____30213;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__19152__auto____30214 = (((content == null))?null:content);
return (function (){var or__3943__auto____30215 = (domina.nodes[goog.typeOf(x__19152__auto____30214)]);
if(or__3943__auto____30215)
{return or__3943__auto____30215;
} else
{var or__3943__auto____30216 = (domina.nodes["_"]);
if(or__3943__auto____30216)
{return or__3943__auto____30216;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto____30221 = nodeseq;
if(and__3941__auto____30221)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto____30221;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__19152__auto____30222 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto____30223 = (domina.single_node[goog.typeOf(x__19152__auto____30222)]);
if(or__3943__auto____30223)
{return or__3943__auto____30223;
} else
{var or__3943__auto____30224 = (domina.single_node["_"]);
if(or__3943__auto____30224)
{return or__3943__auto____30224;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto____30226 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto____30226))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto____30226;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__30227){
var mesg = cljs.core.seq(arglist__30227);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__30228){
var mesg = cljs.core.seq(arglist__30228);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t30236))
{
/**
* @constructor
*/
domina.t30236 = (function (class_name,by_class,meta30237){
this.class_name = class_name;
this.by_class = by_class;
this.meta30237 = meta30237;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t30236.cljs$lang$type = true;
domina.t30236.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"domina/t30236");
});
domina.t30236.prototype.domina$DomContent$ = true;
domina.t30236.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__30239 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__30239.class_name)));
});
domina.t30236.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__30240 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__30240.class_name)));
});
domina.t30236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30238){
var this__30241 = this;
return this__30241.meta30237;
});
domina.t30236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30238,meta30237){
var this__30242 = this;
return (new domina.t30236(this__30242.class_name,this__30242.by_class,meta30237));
});
domina.t30236;
} else
{}
return (new domina.t30236(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (goog.isDef(var_args)) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__30243){
var contents = cljs.core.seq(arglist__30243);;
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$lang$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__30244_SHARP_){
return p1__30244_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__30245_SHARP_,p2__30246_SHARP_){
return goog.dom.insertChildAt(p1__30245_SHARP_,p2__30246_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__30248_SHARP_,p2__30247_SHARP_){
return goog.dom.insertSiblingBefore(p2__30247_SHARP_,p1__30248_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__30250_SHARP_,p2__30249_SHARP_){
return goog.dom.insertSiblingAfter(p2__30249_SHARP_,p1__30250_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__30252_SHARP_,p2__30251_SHARP_){
return goog.dom.replaceNode(p2__30251_SHARP_,p1__30252_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__30254 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__30254)))
{return null;
} else
{return s__30254;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__30261__30262 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30261__30262)
{var n__30263 = cljs.core.first.call(null,G__30261__30262);
var G__30261__30264 = G__30261__30262;
while(true){
goog.style.setStyle(n__30263,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4092__auto____30265 = cljs.core.next.call(null,G__30261__30264);
if(temp__4092__auto____30265)
{var G__30261__30266 = temp__4092__auto____30265;
{
var G__30267 = cljs.core.first.call(null,G__30261__30266);
var G__30268 = G__30261__30266;
n__30263 = G__30267;
G__30261__30264 = G__30268;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30269){
var content = cljs.core.first(arglist__30269);
var name = cljs.core.first(cljs.core.next(arglist__30269));
var value = cljs.core.rest(cljs.core.next(arglist__30269));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__30276__30277 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30276__30277)
{var n__30278 = cljs.core.first.call(null,G__30276__30277);
var G__30276__30279 = G__30276__30277;
while(true){
n__30278.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4092__auto____30280 = cljs.core.next.call(null,G__30276__30279);
if(temp__4092__auto____30280)
{var G__30276__30281 = temp__4092__auto____30280;
{
var G__30282 = cljs.core.first.call(null,G__30276__30281);
var G__30283 = G__30276__30281;
n__30278 = G__30282;
G__30276__30279 = G__30283;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30284){
var content = cljs.core.first(arglist__30284);
var name = cljs.core.first(cljs.core.next(arglist__30284));
var value = cljs.core.rest(cljs.core.next(arglist__30284));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__30291__30292 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30291__30292)
{var n__30293 = cljs.core.first.call(null,G__30291__30292);
var G__30291__30294 = G__30291__30292;
while(true){
n__30293.removeAttribute(cljs.core.name.call(null,name));
var temp__4092__auto____30295 = cljs.core.next.call(null,G__30291__30294);
if(temp__4092__auto____30295)
{var G__30291__30296 = temp__4092__auto____30295;
{
var G__30297 = cljs.core.first.call(null,G__30291__30296);
var G__30298 = G__30291__30296;
n__30293 = G__30297;
G__30291__30294 = G__30298;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__30304__30305 = pair.split(/\s*:\s*/);
var k__30306 = cljs.core.nth.call(null,vec__30304__30305,0,null);
var v__30307 = cljs.core.nth.call(null,vec__30304__30305,1,null);
if(cljs.core.truth_((function (){var and__3941__auto____30308 = k__30306;
if(cljs.core.truth_(and__3941__auto____30308))
{return v__30307;
} else
{return and__3941__auto____30308;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__30306.toLowerCase()),v__30307);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__30311 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__30311))
{return domina.parse_style_attributes.call(null,style__30311);
} else
{if(cljs.core.truth_(style__30311.cssText))
{return domina.parse_style_attributes.call(null,style__30311.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__30317 = domina.single_node.call(null,content);
var attrs__30318 = node__30317.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__30309_SHARP_){
var attr__30319 = attrs__30318.item(p1__30309_SHARP_);
var value__30320 = attr__30319.nodeValue;
if((function (){var and__3941__auto____30321 = cljs.core.not_EQ_.call(null,null,value__30320);
if(and__3941__auto____30321)
{return cljs.core.not_EQ_.call(null,"",value__30320);
} else
{return and__3941__auto____30321;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__30319.nodeName.toLowerCase())],[attr__30319.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__30318.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__30341__30342 = cljs.core.seq.call(null,styles);
if(G__30341__30342)
{var G__30344__30346 = cljs.core.first.call(null,G__30341__30342);
var vec__30345__30347 = G__30344__30346;
var name__30348 = cljs.core.nth.call(null,vec__30345__30347,0,null);
var value__30349 = cljs.core.nth.call(null,vec__30345__30347,1,null);
var G__30341__30350 = G__30341__30342;
var G__30344__30351 = G__30344__30346;
var G__30341__30352 = G__30341__30350;
while(true){
var vec__30353__30354 = G__30344__30351;
var name__30355 = cljs.core.nth.call(null,vec__30353__30354,0,null);
var value__30356 = cljs.core.nth.call(null,vec__30353__30354,1,null);
var G__30341__30357 = G__30341__30352;
domina.set_style_BANG_.call(null,content,name__30355,value__30356);
var temp__4092__auto____30358 = cljs.core.next.call(null,G__30341__30357);
if(temp__4092__auto____30358)
{var G__30341__30359 = temp__4092__auto____30358;
{
var G__30360 = cljs.core.first.call(null,G__30341__30359);
var G__30361 = G__30341__30359;
G__30344__30351 = G__30360;
G__30341__30352 = G__30361;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__30381__30382 = cljs.core.seq.call(null,attrs);
if(G__30381__30382)
{var G__30384__30386 = cljs.core.first.call(null,G__30381__30382);
var vec__30385__30387 = G__30384__30386;
var name__30388 = cljs.core.nth.call(null,vec__30385__30387,0,null);
var value__30389 = cljs.core.nth.call(null,vec__30385__30387,1,null);
var G__30381__30390 = G__30381__30382;
var G__30384__30391 = G__30384__30386;
var G__30381__30392 = G__30381__30390;
while(true){
var vec__30393__30394 = G__30384__30391;
var name__30395 = cljs.core.nth.call(null,vec__30393__30394,0,null);
var value__30396 = cljs.core.nth.call(null,vec__30393__30394,1,null);
var G__30381__30397 = G__30381__30392;
domina.set_attr_BANG_.call(null,content,name__30395,value__30396);
var temp__4092__auto____30398 = cljs.core.next.call(null,G__30381__30397);
if(temp__4092__auto____30398)
{var G__30381__30399 = temp__4092__auto____30398;
{
var G__30400 = cljs.core.first.call(null,G__30381__30399);
var G__30401 = G__30381__30399;
G__30384__30391 = G__30400;
G__30381__30392 = G__30401;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__30408__30409 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30408__30409)
{var node__30410 = cljs.core.first.call(null,G__30408__30409);
var G__30408__30411 = G__30408__30409;
while(true){
goog.dom.classes.add(node__30410,class$);
var temp__4092__auto____30412 = cljs.core.next.call(null,G__30408__30411);
if(temp__4092__auto____30412)
{var G__30408__30413 = temp__4092__auto____30412;
{
var G__30414 = cljs.core.first.call(null,G__30408__30413);
var G__30415 = G__30408__30413;
node__30410 = G__30414;
G__30408__30411 = G__30415;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__30422__30423 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30422__30423)
{var node__30424 = cljs.core.first.call(null,G__30422__30423);
var G__30422__30425 = G__30422__30423;
while(true){
goog.dom.classes.remove(node__30424,class$);
var temp__4092__auto____30426 = cljs.core.next.call(null,G__30422__30425);
if(temp__4092__auto____30426)
{var G__30422__30427 = temp__4092__auto____30426;
{
var G__30428 = cljs.core.first.call(null,G__30422__30427);
var G__30429 = G__30422__30427;
node__30424 = G__30428;
G__30422__30425 = G__30429;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes__30437 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__30438__30439 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30438__30439)
{var node__30440 = cljs.core.first.call(null,G__30438__30439);
var G__30438__30441 = G__30438__30439;
while(true){
goog.dom.classes.set(node__30440,classes__30437);
var temp__4092__auto____30442 = cljs.core.next.call(null,G__30438__30441);
if(temp__4092__auto____30442)
{var G__30438__30443 = temp__4092__auto____30442;
{
var G__30444 = cljs.core.first.call(null,G__30438__30443);
var G__30445 = G__30438__30443;
node__30440 = G__30444;
G__30438__30441 = G__30445;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__30452__30453 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30452__30453)
{var node__30454 = cljs.core.first.call(null,G__30452__30453);
var G__30452__30455 = G__30452__30453;
while(true){
goog.dom.setTextContent(node__30454,value);
var temp__4092__auto____30456 = cljs.core.next.call(null,G__30452__30455);
if(temp__4092__auto____30456)
{var G__30452__30457 = temp__4092__auto____30456;
{
var G__30458 = cljs.core.first.call(null,G__30452__30457);
var G__30459 = G__30452__30457;
node__30454 = G__30458;
G__30452__30455 = G__30459;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__30466__30467 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30466__30467)
{var node__30468 = cljs.core.first.call(null,G__30466__30467);
var G__30466__30469 = G__30466__30467;
while(true){
goog.dom.forms.setValue(node__30468,value);
var temp__4092__auto____30470 = cljs.core.next.call(null,G__30466__30469);
if(temp__4092__auto____30470)
{var G__30466__30471 = temp__4092__auto____30470;
{
var G__30472 = cljs.core.first.call(null,G__30466__30471);
var G__30473 = G__30466__30471;
node__30468 = G__30472;
G__30466__30469 = G__30473;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___30490 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___30491 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__30492 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___30493 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__30492);
if(cljs.core.truth_((function (){var and__3941__auto____30494 = allows_inner_html_QMARK___30490;
if(and__3941__auto____30494)
{var and__3941__auto____30496 = (function (){var or__3943__auto____30495 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto____30495))
{return or__3943__auto____30495;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___30491);
}
})();
if(cljs.core.truth_(and__3941__auto____30496))
{return !(special_tag_QMARK___30493);
} else
{return and__3941__auto____30496;
}
} else
{return and__3941__auto____30494;
}
})()))
{var value__30497 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__30500__30501 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__30500__30501)
{var node__30502 = cljs.core.first.call(null,G__30500__30501);
var G__30500__30503 = G__30500__30501;
while(true){
goog.events.removeAll(node__30502);
node__30502.innerHTML = value__30497;
var temp__4092__auto____30504 = cljs.core.next.call(null,G__30500__30503);
if(temp__4092__auto____30504)
{var G__30500__30505 = temp__4092__auto____30504;
{
var G__30506 = cljs.core.first.call(null,G__30500__30505);
var G__30507 = G__30500__30505;
node__30502 = G__30506;
G__30500__30503 = G__30507;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e30498){if(cljs.core.instance_QMARK_.call(null,Error,e30498))
{var e__30499 = e30498;
domina.replace_children_BANG_.call(null,content,value__30497);
} else
{if("\uFDD0'else")
{throw e30498;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__30513 = domina.single_node.call(null,node).__domina_data;
var value__30514 = (cljs.core.truth_(m__30513)?cljs.core._lookup.call(null,m__30513,key,null):null);
if(cljs.core.truth_((function (){var and__3941__auto____30515 = bubble;
if(cljs.core.truth_(and__3941__auto____30515))
{return (value__30514 == null);
} else
{return and__3941__auto____30515;
}
})()))
{var temp__4092__auto____30516 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto____30516))
{var parent__30517 = temp__4092__auto____30516;
return get_data.call(null,parent__30517,key,true);
} else
{return null;
}
} else
{return value__30514;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__30523 = (function (){var or__3943__auto____30522 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto____30522))
{return or__3943__auto____30522;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__30523,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__30535 = domina.nodes.call(null,parent_content);
var children__30536 = domina.nodes.call(null,child_content);
var first_child__30544 = (function (){var frag__30537 = document.createDocumentFragment();
var G__30538__30539 = cljs.core.seq.call(null,children__30536);
if(G__30538__30539)
{var child__30540 = cljs.core.first.call(null,G__30538__30539);
var G__30538__30541 = G__30538__30539;
while(true){
frag__30537.appendChild(child__30540);
var temp__4092__auto____30542 = cljs.core.next.call(null,G__30538__30541);
if(temp__4092__auto____30542)
{var G__30538__30543 = temp__4092__auto____30542;
{
var G__30546 = cljs.core.first.call(null,G__30538__30543);
var G__30547 = G__30538__30543;
child__30540 = G__30546;
G__30538__30541 = G__30547;
continue;
}
} else
{}
break;
}
} else
{}
return frag__30537;
})();
var other_children__30545 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__30535) - 1),(function (){
return first_child__30544.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__30535))
{f.call(null,cljs.core.first.call(null,parents__30535),first_child__30544);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__30518_SHARP_,p2__30519_SHARP_){
return f.call(null,p1__30518_SHARP_,p2__30519_SHARP_);
}),cljs.core.rest.call(null,parents__30535),other_children__30545));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto____30549 = obj;
if(cljs.core.truth_(and__3941__auto____30549))
{return obj.length;
} else
{return and__3941__auto____30549;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30553__30554 = list_thing;
if(G__30553__30554)
{if((function (){var or__3943__auto____30555 = (G__30553__30554.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____30555)
{return or__3943__auto____30555;
} else
{return G__30553__30554.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__30553__30554.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__30553__30554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__30553__30554);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30556__30557 = content;
if(G__30556__30557)
{if((function (){var or__3943__auto____30558 = (G__30556__30557.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____30558)
{return or__3943__auto____30558;
} else
{return G__30556__30557.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__30556__30557.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__30556__30557);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__30556__30557);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__30559__30560 = content;
if(G__30559__30560)
{if((function (){var or__3943__auto____30561 = (G__30559__30560.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____30561)
{return or__3943__auto____30561;
} else
{return G__30559__30560.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__30559__30560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__30559__30560);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__30559__30560);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
