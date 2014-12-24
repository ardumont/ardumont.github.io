goog.provide('io.pedestal.app.tree');
goog.require('cljs.core');
goog.require('io.pedestal.app.query');
goog.require('io.pedestal.app.util.log');
goog.require('clojure.set');
io.pedestal.app.tree._STAR_gc_deltas_STAR_ = true;
io.pedestal.app.tree.inverse = (function (){var method_table__19326__auto____23751 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__19327__auto____23752 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__19328__auto____23753 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__19329__auto____23754 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__19330__auto____23755 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("inverse",(function (delta){
return cljs.core.first.call(null,delta);
}),"\uFDD0'default",hierarchy__19330__auto____23755,method_table__19326__auto____23751,prefer_table__19327__auto____23752,method_cache__19328__auto____23753,cached_hierarchy__19329__auto____23754));
})();
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'node-create",(function (p__23756){
var vec__23757__23758 = p__23756;
var op__23759 = cljs.core.nth.call(null,vec__23757__23758,0,null);
var path__23760 = cljs.core.nth.call(null,vec__23757__23758,1,null);
var type__23761 = cljs.core.nth.call(null,vec__23757__23758,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'node-destroy",path__23760,type__23761], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'node-destroy",(function (p__23762){
var vec__23763__23764 = p__23762;
var op__23765 = cljs.core.nth.call(null,vec__23763__23764,0,null);
var path__23766 = cljs.core.nth.call(null,vec__23763__23764,1,null);
var type__23767 = cljs.core.nth.call(null,vec__23763__23764,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",path__23766,type__23767], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'value",(function (p__23768){
var vec__23769__23770 = p__23768;
var op__23771 = cljs.core.nth.call(null,vec__23769__23770,0,null);
var path__23772 = cljs.core.nth.call(null,vec__23769__23770,1,null);
var o__23773 = cljs.core.nth.call(null,vec__23769__23770,2,null);
var n__23774 = cljs.core.nth.call(null,vec__23769__23770,3,null);
return cljs.core.PersistentVector.fromArray([op__23771,path__23772,n__23774,o__23773], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'attr",(function (p__23775){
var vec__23776__23777 = p__23775;
var op__23778 = cljs.core.nth.call(null,vec__23776__23777,0,null);
var path__23779 = cljs.core.nth.call(null,vec__23776__23777,1,null);
var k__23780 = cljs.core.nth.call(null,vec__23776__23777,2,null);
var o__23781 = cljs.core.nth.call(null,vec__23776__23777,3,null);
var n__23782 = cljs.core.nth.call(null,vec__23776__23777,4,null);
return cljs.core.PersistentVector.fromArray([op__23778,path__23779,k__23780,n__23782,o__23781], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'transform-enable",(function (p__23783){
var vec__23784__23785 = p__23783;
var op__23786 = cljs.core.nth.call(null,vec__23784__23785,0,null);
var path__23787 = cljs.core.nth.call(null,vec__23784__23785,1,null);
var transform_name__23788 = cljs.core.nth.call(null,vec__23784__23785,2,null);
var msgs__23789 = cljs.core.nth.call(null,vec__23784__23785,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-disable",path__23787,transform_name__23788,msgs__23789], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'transform-disable",(function (p__23790){
var vec__23791__23792 = p__23790;
var op__23793 = cljs.core.nth.call(null,vec__23791__23792,0,null);
var path__23794 = cljs.core.nth.call(null,vec__23791__23792,1,null);
var transform_name__23795 = cljs.core.nth.call(null,vec__23791__23792,2,null);
var msgs__23796 = cljs.core.nth.call(null,vec__23791__23792,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-enable",path__23794,transform_name__23795,msgs__23796], true);
}));
io.pedestal.app.tree.invert = (function invert(deltas){
return cljs.core.mapv.call(null,io.pedestal.app.tree.inverse,cljs.core.reverse.call(null,deltas));
});
io.pedestal.app.tree.real_path = (function real_path(path){
return cljs.core.vec.call(null,cljs.core.interpose.call(null,"\uFDD0'children",cljs.core.into.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tree"], true),path)));
});
io.pedestal.app.tree.new_node = (function new_node(children){
return cljs.core.ObjMap.fromObject(["\uFDD0'children"],{"\uFDD0'children":children});
});
io.pedestal.app.tree.node_type = (function node_type(x){
if(cljs.core.map_QMARK_.call(null,x))
{return "\uFDD0'map";
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return "\uFDD0'vector";
} else
{if("\uFDD0'else")
{return "\uFDD0'unknown";
} else
{return null;
}
}
}
});
io.pedestal.app.tree.existing_node_has_same_type_QMARK_ = (function existing_node_has_same_type_QMARK_(tree,r_path,type){
var temp__4090__auto____23799 = cljs.core.get_in.call(null,tree,r_path);
if(cljs.core.truth_(temp__4090__auto____23799))
{var node__23800 = temp__4090__auto____23799;
return cljs.core._EQ_.call(null,io.pedestal.app.tree.node_type.call(null,(new cljs.core.Keyword("\uFDD0'children")).call(null,node__23800)),type);
} else
{return true;
}
});
io.pedestal.app.tree.parent_exists_QMARK_ = (function parent_exists_QMARK_(tree,path){
if(cljs.core._EQ_.call(null,path,cljs.core.PersistentVector.EMPTY))
{return true;
} else
{var r_path__23802 = io.pedestal.app.tree.real_path.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
return cljs.core.get_in.call(null,tree,r_path__23802);
}
});
io.pedestal.app.tree.apply_to_tree_dispatch = (function apply_to_tree_dispatch(_,delta){
if(cljs.core.fn_QMARK_.call(null,delta))
{return "\uFDD0'function";
} else
{return cljs.core.first.call(null,delta);
}
});
io.pedestal.app.tree.apply_to_tree = (function (){var method_table__19326__auto____23803 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__19327__auto____23804 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__19328__auto____23805 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__19329__auto____23806 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__19330__auto____23807 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("apply-to-tree",io.pedestal.app.tree.apply_to_tree_dispatch,"\uFDD0'default",hierarchy__19330__auto____23807,method_table__19326__auto____23803,prefer_table__19327__auto____23804,method_cache__19328__auto____23805,cached_hierarchy__19329__auto____23806));
})();
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'default",(function (tree,_){
return tree;
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'node-create",(function (tree,delta){
var vec__23808__23809 = delta;
var ___23810 = cljs.core.nth.call(null,vec__23808__23809,0,null);
var path__23811 = cljs.core.nth.call(null,vec__23808__23809,1,null);
var type__23812 = cljs.core.nth.call(null,vec__23808__23809,2,null);
if(cljs.core.map_QMARK_.call(null,type__23812))
{return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree,io.pedestal.app.tree.map__GT_deltas.call(null,type__23812,path__23811));
} else
{var type__23814 = (function (){var or__3943__auto____23813 = type__23812;
if(cljs.core.truth_(or__3943__auto____23813))
{return or__3943__auto____23813;
} else
{return "\uFDD0'map";
}
})();
var delta__23815 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",path__23811,type__23814], true):delta);
var r_path__23816 = io.pedestal.app.tree.real_path.call(null,path__23811);
var children__23822 = (function (){var pred__23817__23820 = cljs.core._EQ_;
var expr__23818__23821 = type__23814;
if(pred__23817__23820.call(null,"\uFDD0'vector",expr__23818__23821))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(pred__23817__23820.call(null,"\uFDD0'map",expr__23818__23821))
{return cljs.core.ObjMap.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23818__23821)].join('')));
}
}
})();
var tree__23824 = (cljs.core.truth_(io.pedestal.app.tree.parent_exists_QMARK_.call(null,tree,path__23811))?tree:(function (){var children_type__23823 = ((cljs.core.keyword_QMARK_.call(null,cljs.core.last.call(null,path__23811)))?"\uFDD0'map":"\uFDD0'vector");
return io.pedestal.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",cljs.core.vec.call(null,cljs.core.butlast.call(null,path__23811)),children_type__23823], true));
})());
if(cljs.core.truth_(io.pedestal.app.tree.parent_exists_QMARK_.call(null,tree__23824,path__23811)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The parent of "),cljs.core.str(path__23811),cljs.core.str(" does not exist.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'parent-exists?","\uFDD1'tree","\uFDD1'path"),cljs.core.hash_map("\uFDD0'line",107,"\uFDD0'column",17))))].join('')));
}
if(cljs.core.truth_(io.pedestal.app.tree.existing_node_has_same_type_QMARK_.call(null,tree__23824,r_path__23816,type__23814)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The node at "),cljs.core.str(path__23811),cljs.core.str(" exists and is not the same type as the requested node.\n"),cljs.core.str("node:\n"),cljs.core.str(cljs.core.get_in.call(null,tree__23824,r_path__23816)),cljs.core.str("\n"),cljs.core.str("delta:\n"),cljs.core.str(delta__23815)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'existing-node-has-same-type?","\uFDD1'tree","\uFDD1'r-path","\uFDD1'type"),cljs.core.hash_map("\uFDD0'line",109,"\uFDD0'column",17))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__23824,r_path__23816)))
{return tree__23824;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__23824,r_path__23816,io.pedestal.app.tree.new_node.call(null,children__23822)),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,delta__23815);
}
}
}));
io.pedestal.app.tree.remove_index_from_vector = (function remove_index_from_vector(vector,index){
var vec__23829__23830 = cljs.core.split_at.call(null,index,vector);
var begin__23831 = cljs.core.nth.call(null,vec__23829__23830,0,null);
var end__23832 = cljs.core.nth.call(null,vec__23829__23830,1,null);
return cljs.core.into.call(null,cljs.core.vec.call(null,begin__23831),cljs.core.rest.call(null,end__23832));
});
io.pedestal.app.tree.child_keys = (function child_keys(children){
var pred__23838__23841 = cljs.core._EQ_;
var expr__23839__23842 = io.pedestal.app.tree.node_type.call(null,children);
if(pred__23838__23841.call(null,"\uFDD0'map",expr__23839__23842))
{return cljs.core.keys.call(null,children);
} else
{if(pred__23838__23841.call(null,"\uFDD0'vector",expr__23839__23842))
{return cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,children)));
} else
{if(pred__23838__23841.call(null,"\uFDD0'else",expr__23839__23842))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23839__23842)].join('')));
}
}
}
});
io.pedestal.app.tree.remove_children = (function remove_children(tree,path,children){
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree,cljs.core.map.call(null,(function (k){
return cljs.core.PersistentVector.fromArray(["\uFDD0'node-destroy",cljs.core.conj.call(null,path,k)], true);
}),io.pedestal.app.tree.child_keys.call(null,children)));
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'node-destroy",(function (tree,delta){
var vec__23843__23844 = delta;
var ___23845 = cljs.core.nth.call(null,vec__23843__23844,0,null);
var path__23846 = cljs.core.nth.call(null,vec__23843__23844,1,null);
var type__23847 = cljs.core.nth.call(null,vec__23843__23844,2,null);
var r_path__23848 = io.pedestal.app.tree.real_path.call(null,path__23846);
var containing_path__23849 = cljs.core.butlast.call(null,r_path__23848);
var node_to_remove__23850 = cljs.core.get_in.call(null,tree,r_path__23848);
var children__23851 = (new cljs.core.Keyword("\uFDD0'children")).call(null,node_to_remove__23850);
var type__23853 = (function (){var or__3943__auto____23852 = type__23847;
if(cljs.core.truth_(or__3943__auto____23852))
{return or__3943__auto____23852;
} else
{return io.pedestal.app.tree.node_type.call(null,children__23851);
}
})();
var delta__23854 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.conj.call(null,delta,type__23853):delta);
if(cljs.core.not.call(null,node_to_remove__23850))
{return tree;
} else
{if(cljs.core._EQ_.call(null,io.pedestal.app.tree.node_type.call(null,children__23851),type__23853))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The given child node type does not match the actual type: "),cljs.core.str(cljs.core.pr_str.call(null,delta__23854))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.with_meta(cljs.core.list("\uFDD1'node-type","\uFDD1'children"),cljs.core.hash_map("\uFDD0'line",145,"\uFDD0'column",22)),"\uFDD1'type"),cljs.core.hash_map("\uFDD0'line",145,"\uFDD0'column",19))))].join('')));
}
var tree__23855 = ((!(cljs.core.empty_QMARK_.call(null,children__23851)))?io.pedestal.app.tree.remove_children.call(null,tree,path__23846,children__23851):tree);
var tree__23856 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0'value")).call(null,node_to_remove__23850))?io.pedestal.app.tree.apply_to_tree.call(null,tree__23855,cljs.core.PersistentVector.fromArray(["\uFDD0'value",path__23846,(new cljs.core.Keyword("\uFDD0'value")).call(null,node_to_remove__23850),null], true)):tree__23855);
var tree__23864 = (function (){var temp__4090__auto____23857 = (new cljs.core.Keyword("\uFDD0'transforms")).call(null,node_to_remove__23850);
if(cljs.core.truth_(temp__4090__auto____23857))
{var ks__23858 = temp__4090__auto____23857;
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree__23856,cljs.core.map.call(null,(function (p__23859){
var vec__23860__23861 = p__23859;
var k__23862 = cljs.core.nth.call(null,vec__23860__23861,0,null);
var v__23863 = cljs.core.nth.call(null,vec__23860__23861,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-disable",path__23846,k__23862], true);
}),ks__23858));
} else
{return tree__23856;
}
})();
var tree__23872 = (function (){var temp__4090__auto____23865 = (new cljs.core.Keyword("\uFDD0'attrs")).call(null,node_to_remove__23850);
if(cljs.core.truth_(temp__4090__auto____23865))
{var ks__23866 = temp__4090__auto____23865;
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree__23864,cljs.core.map.call(null,(function (p__23867){
var vec__23868__23869 = p__23867;
var k__23870 = cljs.core.nth.call(null,vec__23868__23869,0,null);
var v__23871 = cljs.core.nth.call(null,vec__23868__23869,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'attr",path__23846,k__23870,v__23871,null], true);
}),ks__23866));
} else
{return tree__23864;
}
})();
var new_tree__23875 = (((containing_path__23849 == null))?cljs.core.assoc.call(null,tree__23872,"\uFDD0'tree",null):(function (){var last_path__23873 = cljs.core.last.call(null,r_path__23848);
var container__23874 = cljs.core.get_in.call(null,tree__23872,containing_path__23849);
if(cljs.core.map_QMARK_.call(null,container__23874))
{return cljs.core.update_in.call(null,tree__23872,containing_path__23849,cljs.core.dissoc,last_path__23873);
} else
{return cljs.core.update_in.call(null,tree__23872,containing_path__23849,io.pedestal.app.tree.remove_index_from_vector,last_path__23873);
}
})());
return cljs.core.update_in.call(null,new_tree__23875,cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,delta__23854);
}
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'children-exit",(function (tree,delta){
var vec__23876__23877 = delta;
var ___23878 = cljs.core.nth.call(null,vec__23876__23877,0,null);
var path__23879 = cljs.core.nth.call(null,vec__23876__23877,1,null);
var r_path__23880 = io.pedestal.app.tree.real_path.call(null,path__23879);
var c_path__23881 = cljs.core.conj.call(null,r_path__23880,"\uFDD0'children");
var children__23882 = cljs.core.get_in.call(null,tree,c_path__23881);
if(!(cljs.core.empty_QMARK_.call(null,children__23882)))
{return io.pedestal.app.tree.remove_children.call(null,tree,path__23879,children__23882);
} else
{return tree;
}
}));
io.pedestal.app.tree.same_value_QMARK_ = (function same_value_QMARK_(tree,path,v){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),v);
});
io.pedestal.app.tree.update_or_remove = (function update_or_remove(tree,path,v){
if((v == null))
{return cljs.core.update_in.call(null,tree,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
} else
{return cljs.core.assoc_in.call(null,tree,path,v);
}
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'value",(function (tree,delta){
var vec__23883__23885 = delta;
var op__23886 = cljs.core.nth.call(null,vec__23883__23885,0,null);
var path__23887 = cljs.core.nth.call(null,vec__23883__23885,1,null);
var o__23888 = cljs.core.nth.call(null,vec__23883__23885,2,null);
var n__23889 = cljs.core.nth.call(null,vec__23883__23885,3,null);
var r_path__23890 = io.pedestal.app.tree.real_path.call(null,path__23887);
var v_path__23891 = cljs.core.conj.call(null,r_path__23890,"\uFDD0'value");
var old_value__23892 = cljs.core.get_in.call(null,tree,v_path__23891);
var vec__23884__23893 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),4))?cljs.core.PersistentVector.fromArray([o__23888,n__23889], true):cljs.core.PersistentVector.fromArray([old_value__23892,o__23888], true));
var o__23894 = cljs.core.nth.call(null,vec__23884__23893,0,null);
var n__23895 = cljs.core.nth.call(null,vec__23884__23893,1,null);
if(cljs.core._EQ_.call(null,o__23894,old_value__23892))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The old value at path "),cljs.core.str(path__23887),cljs.core.str(" is "),cljs.core.str(old_value__23892),cljs.core.str(" but was expected to be "),cljs.core.str(o__23894),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=","\uFDD1'o","\uFDD1'old-value"),cljs.core.hash_map("\uFDD0'line",192,"\uFDD0'column",13))))].join('')));
}
if(cljs.core._EQ_.call(null,o__23894,n__23895))
{return tree;
} else
{return cljs.core.update_in.call(null,io.pedestal.app.tree.update_or_remove.call(null,tree,v_path__23891,n__23895),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op__23886,path__23887,o__23894,n__23895], true));
}
}));
io.pedestal.app.tree.remove_empty = (function remove_empty(tree,path){
if(cljs.core.seq.call(null,cljs.core.get_in.call(null,tree,path)))
{return tree;
} else
{return cljs.core.update_in.call(null,tree,cljs.core.butlast.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
}
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'attr",(function (tree,delta){
var vec__23896__23898 = delta;
var op__23899 = cljs.core.nth.call(null,vec__23896__23898,0,null);
var path__23900 = cljs.core.nth.call(null,vec__23896__23898,1,null);
var k__23901 = cljs.core.nth.call(null,vec__23896__23898,2,null);
var o__23902 = cljs.core.nth.call(null,vec__23896__23898,3,null);
var n__23903 = cljs.core.nth.call(null,vec__23896__23898,4,null);
var r_path__23904 = io.pedestal.app.tree.real_path.call(null,path__23900);
var a_path__23905 = cljs.core.conj.call(null,r_path__23904,"\uFDD0'attrs",k__23901);
var old_value__23906 = cljs.core.get_in.call(null,tree,a_path__23905);
var vec__23897__23907 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),5))?cljs.core.PersistentVector.fromArray([o__23902,n__23903], true):cljs.core.PersistentVector.fromArray([old_value__23906,o__23902], true));
var o__23908 = cljs.core.nth.call(null,vec__23897__23907,0,null);
var n__23909 = cljs.core.nth.call(null,vec__23897__23907,1,null);
if(cljs.core._EQ_.call(null,o__23908,old_value__23906))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Error:"),cljs.core.str(cljs.core.pr_str.call(null,delta)),cljs.core.str("\n"),cljs.core.str("The old attribute value for "),cljs.core.str(k__23901),cljs.core.str(" is "),cljs.core.str(old_value__23906),cljs.core.str(" but was expected to be "),cljs.core.str(o__23908),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=","\uFDD1'o","\uFDD1'old-value"),cljs.core.hash_map("\uFDD0'line",212,"\uFDD0'column",13))))].join('')));
}
if(cljs.core._EQ_.call(null,o__23908,n__23909))
{return tree;
} else
{return cljs.core.update_in.call(null,io.pedestal.app.tree.remove_empty.call(null,io.pedestal.app.tree.update_or_remove.call(null,tree,a_path__23905,n__23909),cljs.core.conj.call(null,r_path__23904,"\uFDD0'attrs")),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op__23899,path__23900,k__23901,o__23908,n__23909], true));
}
}));
io.pedestal.app.tree.same_transform_QMARK_ = (function same_transform_QMARK_(tree,path,msgs){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),msgs);
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'transform-enable",(function (tree,delta){
var vec__23910__23911 = delta;
var ___23912 = cljs.core.nth.call(null,vec__23910__23911,0,null);
var path__23913 = cljs.core.nth.call(null,vec__23910__23911,1,null);
var k__23914 = cljs.core.nth.call(null,vec__23910__23911,2,null);
var msgs__23915 = cljs.core.nth.call(null,vec__23910__23911,3,null);
var r_path__23916 = io.pedestal.app.tree.real_path.call(null,path__23913);
var e_path__23917 = cljs.core.conj.call(null,r_path__23916,"\uFDD0'transforms",k__23914);
if(cljs.core.truth_((function (){var or__3943__auto____23918 = cljs.core.not.call(null,cljs.core.get_in.call(null,tree,e_path__23917));
if(or__3943__auto____23918)
{return or__3943__auto____23918;
} else
{return io.pedestal.app.tree.same_transform_QMARK_.call(null,tree,e_path__23917,msgs__23915);
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A different transform "),cljs.core.str(k__23914),cljs.core.str(" at path "),cljs.core.str(path__23913),cljs.core.str(" already exists.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'or",cljs.core.with_meta(cljs.core.list("\uFDD1'not",cljs.core.with_meta(cljs.core.list("\uFDD1'get-in","\uFDD1'tree","\uFDD1'e-path"),cljs.core.hash_map("\uFDD0'line",231,"\uFDD0'column",22))),cljs.core.hash_map("\uFDD0'line",231,"\uFDD0'column",17)),cljs.core.with_meta(cljs.core.list("\uFDD1'same-transform?","\uFDD1'tree","\uFDD1'e-path","\uFDD1'msgs"),cljs.core.hash_map("\uFDD0'line",232,"\uFDD0'column",17))),cljs.core.hash_map("\uFDD0'line",231,"\uFDD0'column",13))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree,e_path__23917)))
{return tree;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree,e_path__23917,msgs__23915),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,delta);
}
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'transform-disable",(function (tree,delta){
var vec__23919__23920 = delta;
var ___23921 = cljs.core.nth.call(null,vec__23919__23920,0,null);
var path__23922 = cljs.core.nth.call(null,vec__23919__23920,1,null);
var k__23923 = cljs.core.nth.call(null,vec__23919__23920,2,null);
var r_path__23924 = io.pedestal.app.tree.real_path.call(null,path__23922);
var transforms_path__23925 = cljs.core.conj.call(null,r_path__23924,"\uFDD0'transforms");
var e_path__23926 = cljs.core.conj.call(null,transforms_path__23925,k__23923);
if(cljs.core.truth_(cljs.core.get_in.call(null,tree,e_path__23926)))
{return io.pedestal.app.tree.remove_empty.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,cljs.core.conj.call(null,delta,cljs.core.get_in.call(null,tree,e_path__23926))),transforms_path__23925,cljs.core.dissoc,k__23923),transforms_path__23925);
} else
{return tree;
}
}));
io.pedestal.app.tree.node_deltas = (function node_deltas(p__23927,path){
var map__23944__23945 = p__23927;
var map__23944__23946 = ((cljs.core.seq_QMARK_.call(null,map__23944__23945))?cljs.core.apply.call(null,cljs.core.hash_map,map__23944__23945):map__23944__23945);
var attrs__23947 = cljs.core._lookup.call(null,map__23944__23946,"\uFDD0'attrs",null);
var transforms__23948 = cljs.core._lookup.call(null,map__23944__23946,"\uFDD0'transforms",null);
var value__23949 = cljs.core._lookup.call(null,map__23944__23946,"\uFDD0'value",null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(value__23949)?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'value",path,value__23949], true)], true):null),(cljs.core.truth_(attrs__23947)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__23950){
var vec__23951__23952 = p__23950;
var k__23953 = cljs.core.nth.call(null,vec__23951__23952,0,null);
var v__23954 = cljs.core.nth.call(null,vec__23951__23952,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'attr",path,k__23953,v__23954], true);
}),attrs__23947)):null),(cljs.core.truth_(transforms__23948)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__23955){
var vec__23956__23957 = p__23955;
var k__23958 = cljs.core.nth.call(null,vec__23956__23957,0,null);
var v__23959 = cljs.core.nth.call(null,vec__23956__23957,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-enable",path,k__23958,v__23959], true);
}),transforms__23948)):null));
});
io.pedestal.app.tree.map__GT_deltas = (function map__GT_deltas(tree,path){
var node_keys__23967 = cljs.core.PersistentHashSet.fromArray(["\uFDD0'children","\uFDD0'transforms","\uFDD0'attrs","\uFDD0'value"]);
var node_QMARK___23969 = (function (){var and__3941__auto____23968 = cljs.core.map_QMARK_.call(null,tree);
if(and__3941__auto____23968)
{return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,tree)),node_keys__23967)));
} else
{return and__3941__auto____23968;
}
})();
var children__23971 = (cljs.core.truth_(node_QMARK___23969)?(function (){var or__3943__auto____23970 = (new cljs.core.Keyword("\uFDD0'children")).call(null,tree);
if(cljs.core.truth_(or__3943__auto____23970))
{return or__3943__auto____23970;
} else
{return cljs.core.ObjMap.EMPTY;
}
})():tree);
var children_type__23972 = io.pedestal.app.tree.node_type.call(null,children__23971);
var node_deltas__23973 = (cljs.core.truth_(node_QMARK___23969)?io.pedestal.app.tree.node_deltas.call(null,tree,path):null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",path,children_type__23972], true)], true),node_deltas__23973,cljs.core.mapcat.call(null,(function (k){
return map__GT_deltas.call(null,cljs.core.get_in.call(null,tree,(cljs.core.truth_(node_QMARK___23969)?cljs.core.PersistentVector.fromArray(["\uFDD0'children",k], true):cljs.core.PersistentVector.fromArray([k], true))),cljs.core.conj.call(null,path,k));
}),((cljs.core._EQ_.call(null,children_type__23972,"\uFDD0'map"))?cljs.core.keys.call(null,children__23971):((cljs.core._EQ_.call(null,children_type__23972,"\uFDD0'vector"))?cljs.core.range.call(null,cljs.core.count.call(null,children__23971)):(("\uFDD0'else")?cljs.core.PersistentVector.EMPTY:null)))));
});
io.pedestal.app.tree.expand_map = (function expand_map(delta){
if(cljs.core.map_QMARK_.call(null,delta))
{return io.pedestal.app.tree.map__GT_deltas.call(null,delta,cljs.core.PersistentVector.EMPTY);
} else
{return cljs.core.PersistentVector.fromArray([delta], true);
}
});
io.pedestal.app.tree.expand_maps = (function expand_maps(deltas){
return cljs.core.mapcat.call(null,io.pedestal.app.tree.expand_map,deltas);
});
/**
* Update the tree and return the actual deltas which were used to
* update the tree. A single delta can be expanded into multiple
* deltas.
*/
io.pedestal.app.tree.update_tree = (function update_tree(tree,deltas){
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree,deltas);
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'function",(function (tree,f){
var deltas__23974 = f.call(null,tree);
return io.pedestal.app.tree.update_tree.call(null,tree,deltas__23974);
}));
io.pedestal.app.tree.next_eid_atom = cljs.core.atom.call(null,0);
io.pedestal.app.tree.next_eid = (function next_eid(){
return cljs.core.swap_BANG_.call(null,io.pedestal.app.tree.next_eid_atom,cljs.core.inc);
});
io.pedestal.app.tree.transform__GT_entities = (function transform__GT_entities(transform_name,msgs,node_id){
var transform_id__23976 = io.pedestal.app.tree.next_eid.call(null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0't/id","\uFDD0't/transform-name","\uFDD0't/node","\uFDD0't/type"],{"\uFDD0't/id":transform_id__23976,"\uFDD0't/transform-name":transform_name,"\uFDD0't/node":node_id,"\uFDD0't/type":"\uFDD0't/transform"})], true),cljs.core.map.call(null,(function (m){
return cljs.core.merge.call(null,m,cljs.core.ObjMap.fromObject(["\uFDD0't/id","\uFDD0't/transform","\uFDD0't/type"],{"\uFDD0't/id":io.pedestal.app.tree.next_eid.call(null),"\uFDD0't/transform":transform_id__23976,"\uFDD0't/type":"\uFDD0't/message"}));
}),msgs));
});
io.pedestal.app.tree.transforms__GT_entities = (function transforms__GT_entities(transforms,node_id){
return cljs.core.reduce.call(null,(function (acc,p__23982){
var vec__23983__23984 = p__23982;
var transform_name__23985 = cljs.core.nth.call(null,vec__23983__23984,0,null);
var msgs__23986 = cljs.core.nth.call(null,vec__23983__23984,1,null);
return cljs.core.concat.call(null,acc,io.pedestal.app.tree.transform__GT_entities.call(null,transform_name__23985,msgs__23986,node_id));
}),cljs.core.PersistentVector.EMPTY,transforms);
});
io.pedestal.app.tree.attrs__GT_entities = (function attrs__GT_entities(attrs,node_id){
if(!(cljs.core.empty_QMARK_.call(null,attrs)))
{return cljs.core.PersistentVector.fromArray([cljs.core.merge.call(null,attrs,cljs.core.ObjMap.fromObject(["\uFDD0't/id","\uFDD0't/node","\uFDD0't/type"],{"\uFDD0't/id":io.pedestal.app.tree.next_eid.call(null),"\uFDD0't/node":node_id,"\uFDD0't/type":"\uFDD0't/attrs"}))], true);
} else
{return null;
}
});
io.pedestal.app.tree.node__GT_entities = (function node__GT_entities(node,path,parent_id,node_id){
var map__23998__23999 = node;
var map__23998__24000 = ((cljs.core.seq_QMARK_.call(null,map__23998__23999))?cljs.core.apply.call(null,cljs.core.hash_map,map__23998__23999):map__23998__23999);
var transforms__24001 = cljs.core._lookup.call(null,map__23998__24000,"\uFDD0'transforms",null);
var attrs__24002 = cljs.core._lookup.call(null,map__23998__24000,"\uFDD0'attrs",null);
var value__24003 = cljs.core._lookup.call(null,map__23998__24000,"\uFDD0'value",null);
var node_e__24004 = cljs.core.ObjMap.fromObject(["\uFDD0't/id","\uFDD0't/path","\uFDD0't/type","\uFDD0't/segment"],{"\uFDD0't/id":node_id,"\uFDD0't/path":path,"\uFDD0't/type":"\uFDD0't/node","\uFDD0't/segment":cljs.core.last.call(null,path)});
var node_e__24005 = (cljs.core.truth_(parent_id)?cljs.core.assoc.call(null,node_e__24004,"\uFDD0't/parent",parent_id):node_e__24004);
var node_e__24006 = (cljs.core.truth_(value__24003)?cljs.core.assoc.call(null,node_e__24005,"\uFDD0't/value",value__24003):node_e__24005);
var attrs_es__24007 = io.pedestal.app.tree.attrs__GT_entities.call(null,attrs__24002,node_id);
var transform_es__24008 = io.pedestal.app.tree.transforms__GT_entities.call(null,transforms__24001,node_id);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([node_e__24006], true),attrs_es__24007,transform_es__24008);
});
io.pedestal.app.tree.tree__GT_entities = (function tree__GT_entities(tree,path,parent_id){
var map__24016__24017 = tree;
var map__24016__24018 = ((cljs.core.seq_QMARK_.call(null,map__24016__24017))?cljs.core.apply.call(null,cljs.core.hash_map,map__24016__24017):map__24016__24017);
var children__24019 = cljs.core._lookup.call(null,map__24016__24018,"\uFDD0'children",null);
var ks__24020 = io.pedestal.app.tree.child_keys.call(null,children__24019);
var node_id__24021 = io.pedestal.app.tree.next_eid.call(null);
var node_tuples__24022 = io.pedestal.app.tree.node__GT_entities.call(null,tree,path,parent_id,node_id__24021);
return cljs.core.concat.call(null,node_tuples__24022,cljs.core.mapcat.call(null,(function (k){
return tree__GT_entities.call(null,cljs.core.get_in.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0'children",k], true)),cljs.core.conj.call(null,path,k),node_id__24021);
}),ks__24020));
});
io.pedestal.app.tree.entity__GT_tuples = (function entity__GT_tuples(e){
var id__24029 = (new cljs.core.Keyword("\uFDD0't/id")).call(null,e);
return cljs.core.map.call(null,(function (p__24030){
var vec__24031__24032 = p__24030;
var k__24033 = cljs.core.nth.call(null,vec__24031__24032,0,null);
var v__24034 = cljs.core.nth.call(null,vec__24031__24032,1,null);
return cljs.core.PersistentVector.fromArray([id__24029,k__24033,v__24034], true);
}),cljs.core.dissoc.call(null,e,"\uFDD0't/id"));
});
io.pedestal.app.tree.entities__GT_tuples = (function entities__GT_tuples(entities){
return cljs.core.mapcat.call(null,io.pedestal.app.tree.entity__GT_tuples,entities);
});
io.pedestal.app.tree.tree__GT_tuples = (function tree__GT_tuples(tree){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'tree")).call(null,tree)))
{return io.pedestal.app.tree.entities__GT_tuples.call(null,io.pedestal.app.tree.tree__GT_entities.call(null,(new cljs.core.Keyword("\uFDD0'tree")).call(null,tree),cljs.core.PersistentVector.EMPTY,null));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});

/**
* @constructor
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
io.pedestal.app.tree.Tree = (function (__meta,__extmap){
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.tree.Tree.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19107__auto__){
var this__24038 = this;
var h__18981__auto____24039 = this__24038.__hash;
if(!((h__18981__auto____24039 == null)))
{return h__18981__auto____24039;
} else
{var h__18981__auto____24040 = cljs.core.hash_imap.call(null,this__19107__auto__);
this__24038.__hash = h__18981__auto____24040;
return h__18981__auto____24040;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19112__auto__,k__19113__auto__){
var this__24041 = this;
return this__19112__auto__.cljs$core$ILookup$_lookup$arity$3(this__19112__auto__,k__19113__auto__,null);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19114__auto__,k24036,else__19115__auto__){
var this__24042 = this;
if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__24042.__extmap,k24036,else__19115__auto__);
} else
{return null;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19119__auto__,k__19120__auto__,G__24035){
var this__24043 = this;
var pred__24044__24047 = cljs.core.identical_QMARK_;
var expr__24045__24048 = k__19120__auto__;
return (new io.pedestal.app.tree.Tree(this__24043.__meta,cljs.core.assoc.call(null,this__24043.__extmap,k__19120__auto__,G__24035),null));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19117__auto__,entry__19118__auto__){
var this__24049 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19118__auto__))
{return this__19117__auto__.cljs$core$IAssociative$_assoc$arity$3(this__19117__auto__,cljs.core._nth.call(null,entry__19118__auto__,0),cljs.core._nth.call(null,entry__19118__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__19117__auto__,entry__19118__auto__);
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19124__auto__){
var this__24050 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,this__24050.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__19126__auto__,opts__19127__auto__){
var this__24051 = this;
var pr_pair__19128__auto____24052 = (function (keyval__19129__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__19127__auto__,keyval__19129__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__19128__auto____24052,[cljs.core.str("#"),cljs.core.str("Tree"),cljs.core.str("{")].join(''),", ","}",opts__19127__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,this__24051.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19116__auto__){
var this__24053 = this;
return (0 + cljs.core.count.call(null,this__24053.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19108__auto__,other__19109__auto__){
var this__24054 = this;
if(cljs.core.truth_((function (){var and__3941__auto____24055 = other__19109__auto__;
if(cljs.core.truth_(and__3941__auto____24055))
{var and__3941__auto____24056 = (this__19108__auto__.constructor === other__19109__auto__.constructor);
if(and__3941__auto____24056)
{return cljs.core.equiv_map.call(null,this__19108__auto__,other__19109__auto__);
} else
{return and__3941__auto____24056;
}
} else
{return and__3941__auto____24055;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19111__auto__,G__24035){
var this__24057 = this;
return (new io.pedestal.app.tree.Tree(G__24035,this__24057.__extmap,this__24057.__hash));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19110__auto__){
var this__24058 = this;
return this__24058.__meta;
});
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$ = true;
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$tuple_seq$arity$1 = (function (this$){
var this__24059 = this;
return io.pedestal.app.tree.tree__GT_tuples.call(null,this$);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19121__auto__,k__19122__auto__){
var this__24060 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__19122__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__19121__auto__),this__24060.__meta),k__19122__auto__);
} else
{return (new io.pedestal.app.tree.Tree(this__24060.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__24060.__extmap,k__19122__auto__)),null));
}
});
io.pedestal.app.tree.Tree.cljs$lang$type = true;
io.pedestal.app.tree.Tree.cljs$lang$ctorPrSeq = (function (this__19146__auto__){
return cljs.core.list.call(null,"io.pedestal.app.tree/Tree");
});
io.pedestal.app.tree.__GT_Tree = (function __GT_Tree(){
return (new io.pedestal.app.tree.Tree());
});
io.pedestal.app.tree.map__GT_Tree = (function map__GT_Tree(G__24037){
return (new io.pedestal.app.tree.Tree(null,cljs.core.dissoc.call(null,G__24037)));
});
io.pedestal.app.tree.Tree;
io.pedestal.app.tree.delete_deltas = (function delete_deltas(t,deltas){
return cljs.core.reduce.call(null,(function (d,k){
if((k < t))
{io.pedestal.app.util.log.debug.call(null,"\uFDD0'gc",[cljs.core.str("GC: Deleting "),cljs.core.str(cljs.core.count.call(null,cljs.core._lookup.call(null,d,k,null))),cljs.core.str(" deltas at time "),cljs.core.str(k)].join(''));
return cljs.core.dissoc.call(null,d,k);
} else
{return d;
}
}),deltas,cljs.core.keys.call(null,deltas));
});
io.pedestal.app.tree.gc = (function gc(state){
if(cljs.core.truth_(io.pedestal.app.tree._STAR_gc_deltas_STAR_))
{io.pedestal.app.util.log.debug.call(null,"\uFDD0'gc","GC: Running...");
var t__24063 = (new cljs.core.Keyword("\uFDD0't")).call(null,state);
var delete_t__24064 = (t__24063 - 2);
io.pedestal.app.util.log.debug.call(null,"\uFDD0'gc",[cljs.core.str("GC: Deleting t < "),cljs.core.str(delete_t__24064)].join(''));
io.pedestal.app.util.log.debug.call(null,"\uFDD0'gc",[cljs.core.str("GC: There are currently "),cljs.core.str(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0'deltas")).call(null,state))))),cljs.core.str(" deltas.")].join(''));
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'deltas"], true),cljs.core.partial.call(null,io.pedestal.app.tree.delete_deltas,delete_t__24064));
} else
{io.pedestal.app.util.log.debug.call(null,"\uFDD0'gc",[cljs.core.str("GC is turned off. There are "),cljs.core.str(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0'deltas")).call(null,state))))),cljs.core.str(" accumulated deltas")].join(''));
return state;
}
});
/**
* Given an old tree and a sequence of deltas, return an updated tree.
* The deltas can be a sequence of tuples or a map which can be
* expanded into a sequence of tuples.
* 
* The keyword :commit can be inserted into the stream of deltas to force
* a commit at a specific point.
*/
io.pedestal.app.tree.apply_deltas = (function apply_deltas(old,deltas){
var map__24077__24079 = old;
var map__24077__24080 = ((cljs.core.seq_QMARK_.call(null,map__24077__24079))?cljs.core.apply.call(null,cljs.core.hash_map,map__24077__24079):map__24077__24079);
var t__24081 = cljs.core._lookup.call(null,map__24077__24080,"\uFDD0't",null);
var seq__24082 = cljs.core._lookup.call(null,map__24077__24080,"\uFDD0'seq",null);
var deltas__24083 = io.pedestal.app.tree.expand_maps.call(null,deltas);
var map__24078__24084 = io.pedestal.app.tree.update_tree.call(null,old,deltas__24083);
var map__24078__24085 = ((cljs.core.seq_QMARK_.call(null,map__24078__24084))?cljs.core.apply.call(null,cljs.core.hash_map,map__24078__24084):map__24078__24084);
var this_tx__24086 = cljs.core._lookup.call(null,map__24078__24085,"\uFDD0'this-tx",null);
var tree__24087 = cljs.core._lookup.call(null,map__24078__24085,"\uFDD0'tree",null);
var deltas__24088 = cljs.core.map.call(null,(function (d,s){
return cljs.core.ObjMap.fromObject(["\uFDD0'delta","\uFDD0't","\uFDD0'seq"],{"\uFDD0'delta":d,"\uFDD0't":t__24081,"\uFDD0'seq":s});
}),this_tx__24086,cljs.core.iterate.call(null,cljs.core.inc,seq__24082));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,old,cljs.core.PersistentVector.fromArray(["\uFDD0'deltas",t__24081], true),deltas__24088),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.fromArray(["\uFDD0'seq"], true),cljs.core._PLUS_,cljs.core.count.call(null,deltas__24088)),cljs.core.PersistentVector.fromArray(["\uFDD0'tree"], true),tree__24087),cljs.core.PersistentVector.fromArray(["\uFDD0't"], true),cljs.core.inc);
});
io.pedestal.app.tree.value = (function value(tree,path){
var r_path__24090 = io.pedestal.app.tree.real_path.call(null,path);
return cljs.core.get_in.call(null,tree,cljs.core.conj.call(null,r_path__24090,"\uFDD0'value"));
});
io.pedestal.app.tree.node_exists_QMARK_ = (function node_exists_QMARK_(tree,path){
var r_path__24092 = io.pedestal.app.tree.real_path.call(null,path);
return cljs.core.get_in.call(null,tree,r_path__24092);
});
io.pedestal.app.tree.new_app_model = io.pedestal.app.tree.map__GT_Tree.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'deltas","\uFDD0'this-tx","\uFDD0'tree","\uFDD0'seq","\uFDD0't"],{"\uFDD0'deltas":cljs.core.ObjMap.EMPTY,"\uFDD0'this-tx":cljs.core.PersistentVector.EMPTY,"\uFDD0'tree":null,"\uFDD0'seq":0,"\uFDD0't":0}));
/**
* Get the current tree time value.
*/
io.pedestal.app.tree.t = (function t(tree){
return (new cljs.core.Keyword("\uFDD0't")).call(null,tree);
});
/**
* Get all deltas since time t, inclusive.
*/
io.pedestal.app.tree.since_t = (function since_t(tree,t){
var ts__24095 = cljs.core.range.call(null,t,(new cljs.core.Keyword("\uFDD0't")).call(null,tree));
return cljs.core.vec.call(null,cljs.core.map.call(null,"\uFDD0'delta",cljs.core.mapcat.call(null,(function (p1__24093_SHARP_){
return cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'deltas")).call(null,tree),p1__24093_SHARP_,null);
}),ts__24095)));
});
