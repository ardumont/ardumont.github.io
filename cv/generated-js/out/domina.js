goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__19562 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__19563 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__19564 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["td","optgroup","tfoot","tr","area","\uFDD0'default","option","legend","thead","col","caption","th","colgroup","tbody"],{"td":cell_wrapper__19564,"optgroup":opt_wrapper__19562,"tfoot":table_section_wrapper__19563,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"option":opt_wrapper__19562,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"thead":table_section_wrapper__19563,"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"caption":table_section_wrapper__19563,"th":cell_wrapper__19564,"colgroup":table_section_wrapper__19563,"tbody":table_section_wrapper__19563});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK___19577 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__19581 = (((function (){var and__4236__auto____19578 = cljs.core._EQ_.call(null,tag_name,"table");
if(and__4236__auto____19578)
{return no_tbody_QMARK___19577;
} else
{return and__4236__auto____19578;
}
})())?(function (){var and__4236__auto____19579 = div.firstChild;
if(cljs.core.truth_(and__4236__auto____19579))
{return div.firstChild.childNodes;
} else
{return and__4236__auto____19579;
}
})():(((function (){var and__4236__auto____19580 = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__4236__auto____19580)
{return no_tbody_QMARK___19577;
} else
{return and__4236__auto____19580;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__19582__19583 = cljs.core.seq.call(null,tbody__19581);
if(G__19582__19583)
{var child__19584 = cljs.core.first.call(null,G__19582__19583);
var G__19582__19585 = G__19582__19583;
while(true){
if((function (){var and__4236__auto____19586 = cljs.core._EQ_.call(null,child__19584.nodeName,"tbody");
if(and__4236__auto____19586)
{return cljs.core._EQ_.call(null,child__19584.childNodes.length,0);
} else
{return and__4236__auto____19586;
}
})())
{child__19584.parentNode.removeChild(child__19584);
} else
{}
var temp__4425__auto____19587 = cljs.core.next.call(null,G__19582__19585);
if(temp__4425__auto____19587)
{var G__19582__19588 = temp__4425__auto____19587;
{
var G__19589 = cljs.core.first.call(null,G__19582__19588);
var G__19590 = G__19582__19588;
child__19584 = G__19589;
G__19582__19585 = G__19590;
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
var html__19604 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__19605 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__19604)))].join('').toLowerCase();
var vec__19603__19606 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__19605,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__19607 = cljs.core.nth.call(null,vec__19603__19606,0,null);
var start_wrap__19608 = cljs.core.nth.call(null,vec__19603__19606,1,null);
var end_wrap__19609 = cljs.core.nth.call(null,vec__19603__19606,2,null);
var div__19613 = (function (){var wrapper__19611 = (function (){var div__19610 = document.createElement("div");
div__19610.innerHTML = [cljs.core.str(start_wrap__19608),cljs.core.str(html__19604),cljs.core.str(end_wrap__19609)].join('');
return div__19610;
})();
var level__19612 = depth__19607;
while(true){
if((level__19612 > 0))
{{
var G__19615 = wrapper__19611.lastChild;
var G__19616 = (level__19612 - 1);
wrapper__19611 = G__19615;
level__19612 = G__19616;
continue;
}
} else
{return wrapper__19611;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__19613,html__19604,tag_name__19605,start_wrap__19608);
} else
{}
if(cljs.core.truth_((function (){var and__4236__auto____19614 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__4236__auto____19614)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__19604);
} else
{return and__4236__auto____19614;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__19613,html__19604);
} else
{}
return div__19613.childNodes;
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
if((function (){var and__4236__auto____19621 = content;
if(and__4236__auto____19621)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__4236__auto____19621;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8178__auto____19622 = (((content == null))?null:content);
return (function (){var or__4238__auto____19623 = (domina.nodes[goog.typeOf(x__8178__auto____19622)]);
if(or__4238__auto____19623)
{return or__4238__auto____19623;
} else
{var or__4238__auto____19624 = (domina.nodes["_"]);
if(or__4238__auto____19624)
{return or__4238__auto____19624;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__4236__auto____19629 = nodeseq;
if(and__4236__auto____19629)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__4236__auto____19629;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8178__auto____19630 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__4238__auto____19631 = (domina.single_node[goog.typeOf(x__8178__auto____19630)]);
if(or__4238__auto____19631)
{return or__4238__auto____19631;
} else
{var or__4238__auto____19632 = (domina.single_node["_"]);
if(or__4238__auto____19632)
{return or__4238__auto____19632;
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
if(cljs.core.truth_((function (){var and__4236__auto____19634 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__4236__auto____19634))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__4236__auto____19634;
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
log_debug.cljs$lang$applyTo = (function (arglist__19635){
var mesg = cljs.core.seq(arglist__19635);;
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
log.cljs$lang$applyTo = (function (arglist__19636){
var mesg = cljs.core.seq(arglist__19636);;
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
if((void 0 === domina.t19644))
{
/**
* @constructor
*/
domina.t19644 = (function (by_class,class_name,meta19645){
this.by_class = by_class;
this.class_name = class_name;
this.meta19645 = meta19645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.t19644.cljs$lang$type = true;
domina.t19644.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"domina/t19644");
});
domina.t19644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19646,meta19645){
var this__19647 = this;
return (new domina.t19644(this__19647.by_class,this__19647.class_name,meta19645));
});
domina.t19644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19646){
var this__19648 = this;
return this__19648.meta19645;
});
domina.t19644.prototype.domina$DomContent$ = true;
domina.t19644.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__19649 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__19649.class_name)));
});
domina.t19644.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__19650 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__19650.class_name)));
});
domina.t19644;
} else
{}
return (new domina.t19644(by_class,class_name,null));
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19651){
var contents = cljs.core.seq(arglist__19651);;
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
return cljs.core.map.call(null,(function (p1__19652_SHARP_){
return p1__19652_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__19653_SHARP_,p2__19654_SHARP_){
return goog.dom.insertChildAt(p1__19653_SHARP_,p2__19654_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__19656_SHARP_,p2__19655_SHARP_){
return goog.dom.insertSiblingBefore(p2__19655_SHARP_,p1__19656_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19658_SHARP_,p2__19657_SHARP_){
return goog.dom.insertSiblingAfter(p2__19657_SHARP_,p1__19658_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__19660_SHARP_,p2__19659_SHARP_){
return goog.dom.replaceNode(p2__19659_SHARP_,p1__19660_SHARP_);
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
var s__19662 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__19662)))
{return null;
} else
{return s__19662;
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
var G__19669__19670 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19669__19670)
{var n__19671 = cljs.core.first.call(null,G__19669__19670);
var G__19669__19672 = G__19669__19670;
while(true){
goog.style.setStyle(n__19671,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4425__auto____19673 = cljs.core.next.call(null,G__19669__19672);
if(temp__4425__auto____19673)
{var G__19669__19674 = temp__4425__auto____19673;
{
var G__19675 = cljs.core.first.call(null,G__19669__19674);
var G__19676 = G__19669__19674;
n__19671 = G__19675;
G__19669__19672 = G__19676;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19677){
var content = cljs.core.first(arglist__19677);
var name = cljs.core.first(cljs.core.next(arglist__19677));
var value = cljs.core.rest(cljs.core.next(arglist__19677));
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
var G__19684__19685 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19684__19685)
{var n__19686 = cljs.core.first.call(null,G__19684__19685);
var G__19684__19687 = G__19684__19685;
while(true){
n__19686.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4425__auto____19688 = cljs.core.next.call(null,G__19684__19687);
if(temp__4425__auto____19688)
{var G__19684__19689 = temp__4425__auto____19688;
{
var G__19690 = cljs.core.first.call(null,G__19684__19689);
var G__19691 = G__19684__19689;
n__19686 = G__19690;
G__19684__19687 = G__19691;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19692){
var content = cljs.core.first(arglist__19692);
var name = cljs.core.first(cljs.core.next(arglist__19692));
var value = cljs.core.rest(cljs.core.next(arglist__19692));
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
var G__19699__19700 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19699__19700)
{var n__19701 = cljs.core.first.call(null,G__19699__19700);
var G__19699__19702 = G__19699__19700;
while(true){
n__19701.removeAttribute(cljs.core.name.call(null,name));
var temp__4425__auto____19703 = cljs.core.next.call(null,G__19699__19702);
if(temp__4425__auto____19703)
{var G__19699__19704 = temp__4425__auto____19703;
{
var G__19705 = cljs.core.first.call(null,G__19699__19704);
var G__19706 = G__19699__19704;
n__19701 = G__19705;
G__19699__19702 = G__19706;
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
var vec__19712__19713 = pair.split(/\s*:\s*/);
var k__19714 = cljs.core.nth.call(null,vec__19712__19713,0,null);
var v__19715 = cljs.core.nth.call(null,vec__19712__19713,1,null);
if(cljs.core.truth_((function (){var and__4236__auto____19716 = k__19714;
if(cljs.core.truth_(and__4236__auto____19716))
{return v__19715;
} else
{return and__4236__auto____19716;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__19714.toLowerCase()),v__19715);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__19719 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__19719))
{return domina.parse_style_attributes.call(null,style__19719);
} else
{if(cljs.core.truth_(style__19719.cssText))
{return domina.parse_style_attributes.call(null,style__19719.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__19725 = domina.single_node.call(null,content);
var attrs__19726 = node__19725.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__19717_SHARP_){
var attr__19727 = attrs__19726.item(p1__19717_SHARP_);
var value__19728 = attr__19727.nodeValue;
if((function (){var and__4236__auto____19729 = cljs.core.not_EQ_.call(null,null,value__19728);
if(and__4236__auto____19729)
{return cljs.core.not_EQ_.call(null,"",value__19728);
} else
{return and__4236__auto____19729;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__19727.nodeName.toLowerCase())],[attr__19727.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__19726.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__19749__19750 = cljs.core.seq.call(null,styles);
if(G__19749__19750)
{var G__19752__19754 = cljs.core.first.call(null,G__19749__19750);
var vec__19753__19755 = G__19752__19754;
var name__19756 = cljs.core.nth.call(null,vec__19753__19755,0,null);
var value__19757 = cljs.core.nth.call(null,vec__19753__19755,1,null);
var G__19749__19758 = G__19749__19750;
var G__19752__19759 = G__19752__19754;
var G__19749__19760 = G__19749__19758;
while(true){
var vec__19761__19762 = G__19752__19759;
var name__19763 = cljs.core.nth.call(null,vec__19761__19762,0,null);
var value__19764 = cljs.core.nth.call(null,vec__19761__19762,1,null);
var G__19749__19765 = G__19749__19760;
domina.set_style_BANG_.call(null,content,name__19763,value__19764);
var temp__4425__auto____19766 = cljs.core.next.call(null,G__19749__19765);
if(temp__4425__auto____19766)
{var G__19749__19767 = temp__4425__auto____19766;
{
var G__19768 = cljs.core.first.call(null,G__19749__19767);
var G__19769 = G__19749__19767;
G__19752__19759 = G__19768;
G__19749__19760 = G__19769;
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
var G__19789__19790 = cljs.core.seq.call(null,attrs);
if(G__19789__19790)
{var G__19792__19794 = cljs.core.first.call(null,G__19789__19790);
var vec__19793__19795 = G__19792__19794;
var name__19796 = cljs.core.nth.call(null,vec__19793__19795,0,null);
var value__19797 = cljs.core.nth.call(null,vec__19793__19795,1,null);
var G__19789__19798 = G__19789__19790;
var G__19792__19799 = G__19792__19794;
var G__19789__19800 = G__19789__19798;
while(true){
var vec__19801__19802 = G__19792__19799;
var name__19803 = cljs.core.nth.call(null,vec__19801__19802,0,null);
var value__19804 = cljs.core.nth.call(null,vec__19801__19802,1,null);
var G__19789__19805 = G__19789__19800;
domina.set_attr_BANG_.call(null,content,name__19803,value__19804);
var temp__4425__auto____19806 = cljs.core.next.call(null,G__19789__19805);
if(temp__4425__auto____19806)
{var G__19789__19807 = temp__4425__auto____19806;
{
var G__19808 = cljs.core.first.call(null,G__19789__19807);
var G__19809 = G__19789__19807;
G__19792__19799 = G__19808;
G__19789__19800 = G__19809;
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
var G__19816__19817 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19816__19817)
{var node__19818 = cljs.core.first.call(null,G__19816__19817);
var G__19816__19819 = G__19816__19817;
while(true){
goog.dom.classes.add(node__19818,class$);
var temp__4425__auto____19820 = cljs.core.next.call(null,G__19816__19819);
if(temp__4425__auto____19820)
{var G__19816__19821 = temp__4425__auto____19820;
{
var G__19822 = cljs.core.first.call(null,G__19816__19821);
var G__19823 = G__19816__19821;
node__19818 = G__19822;
G__19816__19819 = G__19823;
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
var G__19830__19831 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19830__19831)
{var node__19832 = cljs.core.first.call(null,G__19830__19831);
var G__19830__19833 = G__19830__19831;
while(true){
goog.dom.classes.remove(node__19832,class$);
var temp__4425__auto____19834 = cljs.core.next.call(null,G__19830__19833);
if(temp__4425__auto____19834)
{var G__19830__19835 = temp__4425__auto____19834;
{
var G__19836 = cljs.core.first.call(null,G__19830__19835);
var G__19837 = G__19830__19835;
node__19832 = G__19836;
G__19830__19833 = G__19837;
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
var classes__19845 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__19846__19847 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19846__19847)
{var node__19848 = cljs.core.first.call(null,G__19846__19847);
var G__19846__19849 = G__19846__19847;
while(true){
goog.dom.classes.set(node__19848,classes__19845);
var temp__4425__auto____19850 = cljs.core.next.call(null,G__19846__19849);
if(temp__4425__auto____19850)
{var G__19846__19851 = temp__4425__auto____19850;
{
var G__19852 = cljs.core.first.call(null,G__19846__19851);
var G__19853 = G__19846__19851;
node__19848 = G__19852;
G__19846__19849 = G__19853;
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
var G__19860__19861 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19860__19861)
{var node__19862 = cljs.core.first.call(null,G__19860__19861);
var G__19860__19863 = G__19860__19861;
while(true){
goog.dom.setTextContent(node__19862,value);
var temp__4425__auto____19864 = cljs.core.next.call(null,G__19860__19863);
if(temp__4425__auto____19864)
{var G__19860__19865 = temp__4425__auto____19864;
{
var G__19866 = cljs.core.first.call(null,G__19860__19865);
var G__19867 = G__19860__19865;
node__19862 = G__19866;
G__19860__19863 = G__19867;
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
var G__19874__19875 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19874__19875)
{var node__19876 = cljs.core.first.call(null,G__19874__19875);
var G__19874__19877 = G__19874__19875;
while(true){
goog.dom.forms.setValue(node__19876,value);
var temp__4425__auto____19878 = cljs.core.next.call(null,G__19874__19877);
if(temp__4425__auto____19878)
{var G__19874__19879 = temp__4425__auto____19878;
{
var G__19880 = cljs.core.first.call(null,G__19874__19879);
var G__19881 = G__19874__19879;
node__19876 = G__19880;
G__19874__19877 = G__19881;
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
var allows_inner_html_QMARK___19898 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___19899 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__19900 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___19901 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__19900);
if(cljs.core.truth_((function (){var and__4236__auto____19902 = allows_inner_html_QMARK___19898;
if(and__4236__auto____19902)
{var and__4236__auto____19904 = (function (){var or__4238__auto____19903 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__4238__auto____19903))
{return or__4238__auto____19903;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___19899);
}
})();
if(cljs.core.truth_(and__4236__auto____19904))
{return !(special_tag_QMARK___19901);
} else
{return and__4236__auto____19904;
}
} else
{return and__4236__auto____19902;
}
})()))
{var value__19905 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__19908__19909 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__19908__19909)
{var node__19910 = cljs.core.first.call(null,G__19908__19909);
var G__19908__19911 = G__19908__19909;
while(true){
goog.events.removeAll(node__19910);
node__19910.innerHTML = value__19905;
var temp__4425__auto____19912 = cljs.core.next.call(null,G__19908__19911);
if(temp__4425__auto____19912)
{var G__19908__19913 = temp__4425__auto____19912;
{
var G__19914 = cljs.core.first.call(null,G__19908__19913);
var G__19915 = G__19908__19913;
node__19910 = G__19914;
G__19908__19911 = G__19915;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e19906){if(cljs.core.instance_QMARK_.call(null,Error,e19906))
{var e__19907 = e19906;
domina.replace_children_BANG_.call(null,content,value__19905);
} else
{if("\uFDD0'else")
{throw e19906;
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
var m__19921 = domina.single_node.call(null,node).__domina_data;
var value__19922 = (cljs.core.truth_(m__19921)?cljs.core._lookup.call(null,m__19921,key,null):null);
if(cljs.core.truth_((function (){var and__4236__auto____19923 = bubble;
if(cljs.core.truth_(and__4236__auto____19923))
{return (value__19922 == null);
} else
{return and__4236__auto____19923;
}
})()))
{var temp__4425__auto____19924 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto____19924))
{var parent__19925 = temp__4425__auto____19924;
return get_data.call(null,parent__19925,key,true);
} else
{return null;
}
} else
{return value__19922;
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
var m__19931 = (function (){var or__4238__auto____19930 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4238__auto____19930))
{return or__4238__auto____19930;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__19931,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__19943 = domina.nodes.call(null,parent_content);
var children__19944 = domina.nodes.call(null,child_content);
var first_child__19952 = (function (){var frag__19945 = document.createDocumentFragment();
var G__19946__19947 = cljs.core.seq.call(null,children__19944);
if(G__19946__19947)
{var child__19948 = cljs.core.first.call(null,G__19946__19947);
var G__19946__19949 = G__19946__19947;
while(true){
frag__19945.appendChild(child__19948);
var temp__4425__auto____19950 = cljs.core.next.call(null,G__19946__19949);
if(temp__4425__auto____19950)
{var G__19946__19951 = temp__4425__auto____19950;
{
var G__19954 = cljs.core.first.call(null,G__19946__19951);
var G__19955 = G__19946__19951;
child__19948 = G__19954;
G__19946__19949 = G__19955;
continue;
}
} else
{}
break;
}
} else
{}
return frag__19945;
})();
var other_children__19953 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__19943) - 1),(function (){
return first_child__19952.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__19943))
{f.call(null,cljs.core.first.call(null,parents__19943),first_child__19952);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__19926_SHARP_,p2__19927_SHARP_){
return f.call(null,p1__19926_SHARP_,p2__19927_SHARP_);
}),cljs.core.rest.call(null,parents__19943),other_children__19953));
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
var and__4236__auto____19957 = obj;
if(cljs.core.truth_(and__4236__auto____19957))
{return obj.length;
} else
{return and__4236__auto____19957;
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
{if((function (){var G__19961__19962 = list_thing;
if(G__19961__19962)
{if((function (){var or__4238__auto____19963 = (G__19961__19962.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__4238__auto____19963)
{return or__4238__auto____19963;
} else
{return G__19961__19962.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__19961__19962.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__19961__19962);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__19961__19962);
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
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19964__19965 = content;
if(G__19964__19965)
{if((function (){var or__4238__auto____19966 = (G__19964__19965.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__4238__auto____19966)
{return or__4238__auto____19966;
} else
{return G__19964__19965.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__19964__19965.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__19964__19965);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__19964__19965);
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
{if((function (){var G__19967__19968 = content;
if(G__19967__19968)
{if((function (){var or__4238__auto____19969 = (G__19967__19968.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__4238__auto____19969)
{return or__4238__auto____19969;
} else
{return G__19967__19968.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__19967__19968.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__19967__19968);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__19967__19968);
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
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
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
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
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
StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
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
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
} else
{}
