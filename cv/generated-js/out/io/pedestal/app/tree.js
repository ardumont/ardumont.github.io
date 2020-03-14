goog.provide('io.pedestal.app.tree');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('io.pedestal.app.util.log');
goog.require('io.pedestal.app.query');
io.pedestal.app.tree._STAR_gc_deltas_STAR_ = true;
io.pedestal.app.tree.inverse = (function (){var method_table__8352__auto____12777 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__8353__auto____12778 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__8354__auto____12779 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__8355__auto____12780 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__8356__auto____12781 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("inverse",(function (delta){
return cljs.core.first.call(null,delta);
}),"\uFDD0'default",hierarchy__8356__auto____12781,method_table__8352__auto____12777,prefer_table__8353__auto____12778,method_cache__8354__auto____12779,cached_hierarchy__8355__auto____12780));
})();
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'node-create",(function (p__12782){
var vec__12783__12784 = p__12782;
var op__12785 = cljs.core.nth.call(null,vec__12783__12784,0,null);
var path__12786 = cljs.core.nth.call(null,vec__12783__12784,1,null);
var type__12787 = cljs.core.nth.call(null,vec__12783__12784,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'node-destroy",path__12786,type__12787], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'node-destroy",(function (p__12788){
var vec__12789__12790 = p__12788;
var op__12791 = cljs.core.nth.call(null,vec__12789__12790,0,null);
var path__12792 = cljs.core.nth.call(null,vec__12789__12790,1,null);
var type__12793 = cljs.core.nth.call(null,vec__12789__12790,2,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",path__12792,type__12793], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'value",(function (p__12794){
var vec__12795__12796 = p__12794;
var op__12797 = cljs.core.nth.call(null,vec__12795__12796,0,null);
var path__12798 = cljs.core.nth.call(null,vec__12795__12796,1,null);
var o__12799 = cljs.core.nth.call(null,vec__12795__12796,2,null);
var n__12800 = cljs.core.nth.call(null,vec__12795__12796,3,null);
return cljs.core.PersistentVector.fromArray([op__12797,path__12798,n__12800,o__12799], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'attr",(function (p__12801){
var vec__12802__12803 = p__12801;
var op__12804 = cljs.core.nth.call(null,vec__12802__12803,0,null);
var path__12805 = cljs.core.nth.call(null,vec__12802__12803,1,null);
var k__12806 = cljs.core.nth.call(null,vec__12802__12803,2,null);
var o__12807 = cljs.core.nth.call(null,vec__12802__12803,3,null);
var n__12808 = cljs.core.nth.call(null,vec__12802__12803,4,null);
return cljs.core.PersistentVector.fromArray([op__12804,path__12805,k__12806,n__12808,o__12807], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'transform-enable",(function (p__12809){
var vec__12810__12811 = p__12809;
var op__12812 = cljs.core.nth.call(null,vec__12810__12811,0,null);
var path__12813 = cljs.core.nth.call(null,vec__12810__12811,1,null);
var transform_name__12814 = cljs.core.nth.call(null,vec__12810__12811,2,null);
var msgs__12815 = cljs.core.nth.call(null,vec__12810__12811,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-disable",path__12813,transform_name__12814,msgs__12815], true);
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.inverse,"\uFDD0'transform-disable",(function (p__12816){
var vec__12817__12818 = p__12816;
var op__12819 = cljs.core.nth.call(null,vec__12817__12818,0,null);
var path__12820 = cljs.core.nth.call(null,vec__12817__12818,1,null);
var transform_name__12821 = cljs.core.nth.call(null,vec__12817__12818,2,null);
var msgs__12822 = cljs.core.nth.call(null,vec__12817__12818,3,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-enable",path__12820,transform_name__12821,msgs__12822], true);
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
var temp__4423__auto____12825 = cljs.core.get_in.call(null,tree,r_path);
if(cljs.core.truth_(temp__4423__auto____12825))
{var node__12826 = temp__4423__auto____12825;
return cljs.core._EQ_.call(null,io.pedestal.app.tree.node_type.call(null,(new cljs.core.Keyword("\uFDD0'children")).call(null,node__12826)),type);
} else
{return true;
}
});
io.pedestal.app.tree.parent_exists_QMARK_ = (function parent_exists_QMARK_(tree,path){
if(cljs.core._EQ_.call(null,path,cljs.core.PersistentVector.EMPTY))
{return true;
} else
{var r_path__12828 = io.pedestal.app.tree.real_path.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,path)));
return cljs.core.get_in.call(null,tree,r_path__12828);
}
});
io.pedestal.app.tree.apply_to_tree_dispatch = (function apply_to_tree_dispatch(_,delta){
if(cljs.core.fn_QMARK_.call(null,delta))
{return "\uFDD0'function";
} else
{return cljs.core.first.call(null,delta);
}
});
io.pedestal.app.tree.apply_to_tree = (function (){var method_table__8352__auto____12829 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__8353__auto____12830 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__8354__auto____12831 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__8355__auto____12832 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__8356__auto____12833 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("apply-to-tree",io.pedestal.app.tree.apply_to_tree_dispatch,"\uFDD0'default",hierarchy__8356__auto____12833,method_table__8352__auto____12829,prefer_table__8353__auto____12830,method_cache__8354__auto____12831,cached_hierarchy__8355__auto____12832));
})();
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'default",(function (tree,_){
return tree;
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'node-create",(function (tree,delta){
var vec__12834__12835 = delta;
var ___12836 = cljs.core.nth.call(null,vec__12834__12835,0,null);
var path__12837 = cljs.core.nth.call(null,vec__12834__12835,1,null);
var type__12838 = cljs.core.nth.call(null,vec__12834__12835,2,null);
if(cljs.core.map_QMARK_.call(null,type__12838))
{return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree,io.pedestal.app.tree.map__GT_deltas.call(null,type__12838,path__12837));
} else
{var type__12840 = (function (){var or__4238__auto____12839 = type__12838;
if(cljs.core.truth_(or__4238__auto____12839))
{return or__4238__auto____12839;
} else
{return "\uFDD0'map";
}
})();
var delta__12841 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",path__12837,type__12840], true):delta);
var r_path__12842 = io.pedestal.app.tree.real_path.call(null,path__12837);
var children__12848 = (function (){var pred__12843__12846 = cljs.core._EQ_;
var expr__12844__12847 = type__12840;
if(pred__12843__12846.call(null,"\uFDD0'vector",expr__12844__12847))
{return cljs.core.PersistentVector.EMPTY;
} else
{if(pred__12843__12846.call(null,"\uFDD0'map",expr__12844__12847))
{return cljs.core.ObjMap.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12844__12847)].join('')));
}
}
})();
var tree__12850 = (cljs.core.truth_(io.pedestal.app.tree.parent_exists_QMARK_.call(null,tree,path__12837))?tree:(function (){var children_type__12849 = ((cljs.core.keyword_QMARK_.call(null,cljs.core.last.call(null,path__12837)))?"\uFDD0'map":"\uFDD0'vector");
return io.pedestal.app.tree.apply_to_tree.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",cljs.core.vec.call(null,cljs.core.butlast.call(null,path__12837)),children_type__12849], true));
})());
if(cljs.core.truth_(io.pedestal.app.tree.parent_exists_QMARK_.call(null,tree__12850,path__12837)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The parent of "),cljs.core.str(path__12837),cljs.core.str(" does not exist.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'parent-exists?","\uFDD1'tree","\uFDD1'path"),cljs.core.hash_map("\uFDD0'line",107,"\uFDD0'column",17))))].join('')));
}
if(cljs.core.truth_(io.pedestal.app.tree.existing_node_has_same_type_QMARK_.call(null,tree__12850,r_path__12842,type__12840)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The node at "),cljs.core.str(path__12837),cljs.core.str(" exists and is not the same type as the requested node.\n"),cljs.core.str("node:\n"),cljs.core.str(cljs.core.get_in.call(null,tree__12850,r_path__12842)),cljs.core.str("\n"),cljs.core.str("delta:\n"),cljs.core.str(delta__12841)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'existing-node-has-same-type?","\uFDD1'tree","\uFDD1'r-path","\uFDD1'type"),cljs.core.hash_map("\uFDD0'line",109,"\uFDD0'column",17))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree__12850,r_path__12842)))
{return tree__12850;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree__12850,r_path__12842,io.pedestal.app.tree.new_node.call(null,children__12848)),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,delta__12841);
}
}
}));
io.pedestal.app.tree.remove_index_from_vector = (function remove_index_from_vector(vector,index){
var vec__12855__12856 = cljs.core.split_at.call(null,index,vector);
var begin__12857 = cljs.core.nth.call(null,vec__12855__12856,0,null);
var end__12858 = cljs.core.nth.call(null,vec__12855__12856,1,null);
return cljs.core.into.call(null,cljs.core.vec.call(null,begin__12857),cljs.core.rest.call(null,end__12858));
});
io.pedestal.app.tree.child_keys = (function child_keys(children){
var pred__12864__12867 = cljs.core._EQ_;
var expr__12865__12868 = io.pedestal.app.tree.node_type.call(null,children);
if(pred__12864__12867.call(null,"\uFDD0'map",expr__12865__12868))
{return cljs.core.keys.call(null,children);
} else
{if(pred__12864__12867.call(null,"\uFDD0'vector",expr__12865__12868))
{return cljs.core.reverse.call(null,cljs.core.range.call(null,cljs.core.count.call(null,children)));
} else
{if(pred__12864__12867.call(null,"\uFDD0'else",expr__12865__12868))
{return cljs.core.PersistentVector.EMPTY;
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12865__12868)].join('')));
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
var vec__12869__12870 = delta;
var ___12871 = cljs.core.nth.call(null,vec__12869__12870,0,null);
var path__12872 = cljs.core.nth.call(null,vec__12869__12870,1,null);
var type__12873 = cljs.core.nth.call(null,vec__12869__12870,2,null);
var r_path__12874 = io.pedestal.app.tree.real_path.call(null,path__12872);
var containing_path__12875 = cljs.core.butlast.call(null,r_path__12874);
var node_to_remove__12876 = cljs.core.get_in.call(null,tree,r_path__12874);
var children__12877 = (new cljs.core.Keyword("\uFDD0'children")).call(null,node_to_remove__12876);
var type__12879 = (function (){var or__4238__auto____12878 = type__12873;
if(cljs.core.truth_(or__4238__auto____12878))
{return or__4238__auto____12878;
} else
{return io.pedestal.app.tree.node_type.call(null,children__12877);
}
})();
var delta__12880 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),2))?cljs.core.conj.call(null,delta,type__12879):delta);
if(cljs.core.not.call(null,node_to_remove__12876))
{return tree;
} else
{if(cljs.core._EQ_.call(null,io.pedestal.app.tree.node_type.call(null,children__12877),type__12879))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The given child node type does not match the actual type: "),cljs.core.str(cljs.core.pr_str.call(null,delta__12880))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.with_meta(cljs.core.list("\uFDD1'node-type","\uFDD1'children"),cljs.core.hash_map("\uFDD0'line",145,"\uFDD0'column",22)),"\uFDD1'type"),cljs.core.hash_map("\uFDD0'line",145,"\uFDD0'column",19))))].join('')));
}
var tree__12881 = ((!(cljs.core.empty_QMARK_.call(null,children__12877)))?io.pedestal.app.tree.remove_children.call(null,tree,path__12872,children__12877):tree);
var tree__12882 = (cljs.core.truth_((new cljs.core.Keyword("\uFDD0'value")).call(null,node_to_remove__12876))?io.pedestal.app.tree.apply_to_tree.call(null,tree__12881,cljs.core.PersistentVector.fromArray(["\uFDD0'value",path__12872,(new cljs.core.Keyword("\uFDD0'value")).call(null,node_to_remove__12876),null], true)):tree__12881);
var tree__12890 = (function (){var temp__4423__auto____12883 = (new cljs.core.Keyword("\uFDD0'transforms")).call(null,node_to_remove__12876);
if(cljs.core.truth_(temp__4423__auto____12883))
{var ks__12884 = temp__4423__auto____12883;
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree__12882,cljs.core.map.call(null,(function (p__12885){
var vec__12886__12887 = p__12885;
var k__12888 = cljs.core.nth.call(null,vec__12886__12887,0,null);
var v__12889 = cljs.core.nth.call(null,vec__12886__12887,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-disable",path__12872,k__12888], true);
}),ks__12884));
} else
{return tree__12882;
}
})();
var tree__12898 = (function (){var temp__4423__auto____12891 = (new cljs.core.Keyword("\uFDD0'attrs")).call(null,node_to_remove__12876);
if(cljs.core.truth_(temp__4423__auto____12891))
{var ks__12892 = temp__4423__auto____12891;
return cljs.core.reduce.call(null,io.pedestal.app.tree.apply_to_tree,tree__12890,cljs.core.map.call(null,(function (p__12893){
var vec__12894__12895 = p__12893;
var k__12896 = cljs.core.nth.call(null,vec__12894__12895,0,null);
var v__12897 = cljs.core.nth.call(null,vec__12894__12895,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'attr",path__12872,k__12896,v__12897,null], true);
}),ks__12892));
} else
{return tree__12890;
}
})();
var new_tree__12901 = (((containing_path__12875 == null))?cljs.core.assoc.call(null,tree__12898,"\uFDD0'tree",null):(function (){var last_path__12899 = cljs.core.last.call(null,r_path__12874);
var container__12900 = cljs.core.get_in.call(null,tree__12898,containing_path__12875);
if(cljs.core.map_QMARK_.call(null,container__12900))
{return cljs.core.update_in.call(null,tree__12898,containing_path__12875,cljs.core.dissoc,last_path__12899);
} else
{return cljs.core.update_in.call(null,tree__12898,containing_path__12875,io.pedestal.app.tree.remove_index_from_vector,last_path__12899);
}
})());
return cljs.core.update_in.call(null,new_tree__12901,cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,delta__12880);
}
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'children-exit",(function (tree,delta){
var vec__12902__12903 = delta;
var ___12904 = cljs.core.nth.call(null,vec__12902__12903,0,null);
var path__12905 = cljs.core.nth.call(null,vec__12902__12903,1,null);
var r_path__12906 = io.pedestal.app.tree.real_path.call(null,path__12905);
var c_path__12907 = cljs.core.conj.call(null,r_path__12906,"\uFDD0'children");
var children__12908 = cljs.core.get_in.call(null,tree,c_path__12907);
if(!(cljs.core.empty_QMARK_.call(null,children__12908)))
{return io.pedestal.app.tree.remove_children.call(null,tree,path__12905,children__12908);
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
var vec__12909__12911 = delta;
var op__12912 = cljs.core.nth.call(null,vec__12909__12911,0,null);
var path__12913 = cljs.core.nth.call(null,vec__12909__12911,1,null);
var o__12914 = cljs.core.nth.call(null,vec__12909__12911,2,null);
var n__12915 = cljs.core.nth.call(null,vec__12909__12911,3,null);
var r_path__12916 = io.pedestal.app.tree.real_path.call(null,path__12913);
var v_path__12917 = cljs.core.conj.call(null,r_path__12916,"\uFDD0'value");
var old_value__12918 = cljs.core.get_in.call(null,tree,v_path__12917);
var vec__12910__12919 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),4))?cljs.core.PersistentVector.fromArray([o__12914,n__12915], true):cljs.core.PersistentVector.fromArray([old_value__12918,o__12914], true));
var o__12920 = cljs.core.nth.call(null,vec__12910__12919,0,null);
var n__12921 = cljs.core.nth.call(null,vec__12910__12919,1,null);
if(cljs.core._EQ_.call(null,o__12920,old_value__12918))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("The old value at path "),cljs.core.str(path__12913),cljs.core.str(" is "),cljs.core.str(old_value__12918),cljs.core.str(" but was expected to be "),cljs.core.str(o__12920),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=","\uFDD1'o","\uFDD1'old-value"),cljs.core.hash_map("\uFDD0'line",192,"\uFDD0'column",13))))].join('')));
}
if(cljs.core._EQ_.call(null,o__12920,n__12921))
{return tree;
} else
{return cljs.core.update_in.call(null,io.pedestal.app.tree.update_or_remove.call(null,tree,v_path__12917,n__12921),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op__12912,path__12913,o__12920,n__12921], true));
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
var vec__12922__12924 = delta;
var op__12925 = cljs.core.nth.call(null,vec__12922__12924,0,null);
var path__12926 = cljs.core.nth.call(null,vec__12922__12924,1,null);
var k__12927 = cljs.core.nth.call(null,vec__12922__12924,2,null);
var o__12928 = cljs.core.nth.call(null,vec__12922__12924,3,null);
var n__12929 = cljs.core.nth.call(null,vec__12922__12924,4,null);
var r_path__12930 = io.pedestal.app.tree.real_path.call(null,path__12926);
var a_path__12931 = cljs.core.conj.call(null,r_path__12930,"\uFDD0'attrs",k__12927);
var old_value__12932 = cljs.core.get_in.call(null,tree,a_path__12931);
var vec__12923__12933 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,delta),5))?cljs.core.PersistentVector.fromArray([o__12928,n__12929], true):cljs.core.PersistentVector.fromArray([old_value__12932,o__12928], true));
var o__12934 = cljs.core.nth.call(null,vec__12923__12933,0,null);
var n__12935 = cljs.core.nth.call(null,vec__12923__12933,1,null);
if(cljs.core._EQ_.call(null,o__12934,old_value__12932))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Error:"),cljs.core.str(cljs.core.pr_str.call(null,delta)),cljs.core.str("\n"),cljs.core.str("The old attribute value for "),cljs.core.str(k__12927),cljs.core.str(" is "),cljs.core.str(old_value__12932),cljs.core.str(" but was expected to be "),cljs.core.str(o__12934),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'=","\uFDD1'o","\uFDD1'old-value"),cljs.core.hash_map("\uFDD0'line",212,"\uFDD0'column",13))))].join('')));
}
if(cljs.core._EQ_.call(null,o__12934,n__12935))
{return tree;
} else
{return cljs.core.update_in.call(null,io.pedestal.app.tree.remove_empty.call(null,io.pedestal.app.tree.update_or_remove.call(null,tree,a_path__12931,n__12935),cljs.core.conj.call(null,r_path__12930,"\uFDD0'attrs")),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,cljs.core.PersistentVector.fromArray([op__12925,path__12926,k__12927,o__12934,n__12935], true));
}
}));
io.pedestal.app.tree.same_transform_QMARK_ = (function same_transform_QMARK_(tree,path,msgs){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,tree,path),msgs);
});
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'transform-enable",(function (tree,delta){
var vec__12936__12937 = delta;
var ___12938 = cljs.core.nth.call(null,vec__12936__12937,0,null);
var path__12939 = cljs.core.nth.call(null,vec__12936__12937,1,null);
var k__12940 = cljs.core.nth.call(null,vec__12936__12937,2,null);
var msgs__12941 = cljs.core.nth.call(null,vec__12936__12937,3,null);
var r_path__12942 = io.pedestal.app.tree.real_path.call(null,path__12939);
var e_path__12943 = cljs.core.conj.call(null,r_path__12942,"\uFDD0'transforms",k__12940);
if(cljs.core.truth_((function (){var or__4238__auto____12944 = cljs.core.not.call(null,cljs.core.get_in.call(null,tree,e_path__12943));
if(or__4238__auto____12944)
{return or__4238__auto____12944;
} else
{return io.pedestal.app.tree.same_transform_QMARK_.call(null,tree,e_path__12943,msgs__12941);
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("A different transform "),cljs.core.str(k__12940),cljs.core.str(" at path "),cljs.core.str(path__12939),cljs.core.str(" already exists.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'or",cljs.core.with_meta(cljs.core.list("\uFDD1'not",cljs.core.with_meta(cljs.core.list("\uFDD1'get-in","\uFDD1'tree","\uFDD1'e-path"),cljs.core.hash_map("\uFDD0'line",231,"\uFDD0'column",22))),cljs.core.hash_map("\uFDD0'line",231,"\uFDD0'column",17)),cljs.core.with_meta(cljs.core.list("\uFDD1'same-transform?","\uFDD1'tree","\uFDD1'e-path","\uFDD1'msgs"),cljs.core.hash_map("\uFDD0'line",232,"\uFDD0'column",17))),cljs.core.hash_map("\uFDD0'line",231,"\uFDD0'column",13))))].join('')));
}
if(cljs.core.truth_(cljs.core.get_in.call(null,tree,e_path__12943)))
{return tree;
} else
{return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,tree,e_path__12943,msgs__12941),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,delta);
}
}));
cljs.core._add_method.call(null,io.pedestal.app.tree.apply_to_tree,"\uFDD0'transform-disable",(function (tree,delta){
var vec__12945__12946 = delta;
var ___12947 = cljs.core.nth.call(null,vec__12945__12946,0,null);
var path__12948 = cljs.core.nth.call(null,vec__12945__12946,1,null);
var k__12949 = cljs.core.nth.call(null,vec__12945__12946,2,null);
var r_path__12950 = io.pedestal.app.tree.real_path.call(null,path__12948);
var transforms_path__12951 = cljs.core.conj.call(null,r_path__12950,"\uFDD0'transforms");
var e_path__12952 = cljs.core.conj.call(null,transforms_path__12951,k__12949);
if(cljs.core.truth_(cljs.core.get_in.call(null,tree,e_path__12952)))
{return io.pedestal.app.tree.remove_empty.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.conj,cljs.core.conj.call(null,delta,cljs.core.get_in.call(null,tree,e_path__12952))),transforms_path__12951,cljs.core.dissoc,k__12949),transforms_path__12951);
} else
{return tree;
}
}));
io.pedestal.app.tree.node_deltas = (function node_deltas(p__12953,path){
var map__12970__12971 = p__12953;
var map__12970__12972 = ((cljs.core.seq_QMARK_.call(null,map__12970__12971))?cljs.core.apply.call(null,cljs.core.hash_map,map__12970__12971):map__12970__12971);
var value__12973 = cljs.core._lookup.call(null,map__12970__12972,"\uFDD0'value",null);
var transforms__12974 = cljs.core._lookup.call(null,map__12970__12972,"\uFDD0'transforms",null);
var attrs__12975 = cljs.core._lookup.call(null,map__12970__12972,"\uFDD0'attrs",null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(value__12973)?cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'value",path,value__12973], true)], true):null),(cljs.core.truth_(attrs__12975)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__12976){
var vec__12977__12978 = p__12976;
var k__12979 = cljs.core.nth.call(null,vec__12977__12978,0,null);
var v__12980 = cljs.core.nth.call(null,vec__12977__12978,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'attr",path,k__12979,v__12980], true);
}),attrs__12975)):null),(cljs.core.truth_(transforms__12974)?cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__12981){
var vec__12982__12983 = p__12981;
var k__12984 = cljs.core.nth.call(null,vec__12982__12983,0,null);
var v__12985 = cljs.core.nth.call(null,vec__12982__12983,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'transform-enable",path,k__12984,v__12985], true);
}),transforms__12974)):null));
});
io.pedestal.app.tree.map__GT_deltas = (function map__GT_deltas(tree,path){
var node_keys__12993 = cljs.core.PersistentHashSet.fromArray(["\uFDD0'children","\uFDD0'value","\uFDD0'transforms","\uFDD0'attrs"]);
var node_QMARK___12995 = (function (){var and__4236__auto____12994 = cljs.core.map_QMARK_.call(null,tree);
if(and__4236__auto____12994)
{return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,tree)),node_keys__12993)));
} else
{return and__4236__auto____12994;
}
})();
var children__12997 = (cljs.core.truth_(node_QMARK___12995)?(function (){var or__4238__auto____12996 = (new cljs.core.Keyword("\uFDD0'children")).call(null,tree);
if(cljs.core.truth_(or__4238__auto____12996))
{return or__4238__auto____12996;
} else
{return cljs.core.ObjMap.EMPTY;
}
})():tree);
var children_type__12998 = io.pedestal.app.tree.node_type.call(null,children__12997);
var node_deltas__12999 = (cljs.core.truth_(node_QMARK___12995)?io.pedestal.app.tree.node_deltas.call(null,tree,path):null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",path,children_type__12998], true)], true),node_deltas__12999,cljs.core.mapcat.call(null,(function (k){
return map__GT_deltas.call(null,cljs.core.get_in.call(null,tree,(cljs.core.truth_(node_QMARK___12995)?cljs.core.PersistentVector.fromArray(["\uFDD0'children",k], true):cljs.core.PersistentVector.fromArray([k], true))),cljs.core.conj.call(null,path,k));
}),((cljs.core._EQ_.call(null,children_type__12998,"\uFDD0'map"))?cljs.core.keys.call(null,children__12997):((cljs.core._EQ_.call(null,children_type__12998,"\uFDD0'vector"))?cljs.core.range.call(null,cljs.core.count.call(null,children__12997)):(("\uFDD0'else")?cljs.core.PersistentVector.EMPTY:null)))));
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
var deltas__13000 = f.call(null,tree);
return io.pedestal.app.tree.update_tree.call(null,tree,deltas__13000);
}));
io.pedestal.app.tree.next_eid_atom = cljs.core.atom.call(null,0);
io.pedestal.app.tree.next_eid = (function next_eid(){
return cljs.core.swap_BANG_.call(null,io.pedestal.app.tree.next_eid_atom,cljs.core.inc);
});
io.pedestal.app.tree.transform__GT_entities = (function transform__GT_entities(transform_name,msgs,node_id){
var transform_id__13002 = io.pedestal.app.tree.next_eid.call(null);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0't/id","\uFDD0't/transform-name","\uFDD0't/node","\uFDD0't/type"],{"\uFDD0't/id":transform_id__13002,"\uFDD0't/transform-name":transform_name,"\uFDD0't/node":node_id,"\uFDD0't/type":"\uFDD0't/transform"})], true),cljs.core.map.call(null,(function (m){
return cljs.core.merge.call(null,m,cljs.core.ObjMap.fromObject(["\uFDD0't/id","\uFDD0't/transform","\uFDD0't/type"],{"\uFDD0't/id":io.pedestal.app.tree.next_eid.call(null),"\uFDD0't/transform":transform_id__13002,"\uFDD0't/type":"\uFDD0't/message"}));
}),msgs));
});
io.pedestal.app.tree.transforms__GT_entities = (function transforms__GT_entities(transforms,node_id){
return cljs.core.reduce.call(null,(function (acc,p__13008){
var vec__13009__13010 = p__13008;
var transform_name__13011 = cljs.core.nth.call(null,vec__13009__13010,0,null);
var msgs__13012 = cljs.core.nth.call(null,vec__13009__13010,1,null);
return cljs.core.concat.call(null,acc,io.pedestal.app.tree.transform__GT_entities.call(null,transform_name__13011,msgs__13012,node_id));
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
var map__13024__13025 = node;
var map__13024__13026 = ((cljs.core.seq_QMARK_.call(null,map__13024__13025))?cljs.core.apply.call(null,cljs.core.hash_map,map__13024__13025):map__13024__13025);
var value__13027 = cljs.core._lookup.call(null,map__13024__13026,"\uFDD0'value",null);
var attrs__13028 = cljs.core._lookup.call(null,map__13024__13026,"\uFDD0'attrs",null);
var transforms__13029 = cljs.core._lookup.call(null,map__13024__13026,"\uFDD0'transforms",null);
var node_e__13030 = cljs.core.ObjMap.fromObject(["\uFDD0't/id","\uFDD0't/path","\uFDD0't/type","\uFDD0't/segment"],{"\uFDD0't/id":node_id,"\uFDD0't/path":path,"\uFDD0't/type":"\uFDD0't/node","\uFDD0't/segment":cljs.core.last.call(null,path)});
var node_e__13031 = (cljs.core.truth_(parent_id)?cljs.core.assoc.call(null,node_e__13030,"\uFDD0't/parent",parent_id):node_e__13030);
var node_e__13032 = (cljs.core.truth_(value__13027)?cljs.core.assoc.call(null,node_e__13031,"\uFDD0't/value",value__13027):node_e__13031);
var attrs_es__13033 = io.pedestal.app.tree.attrs__GT_entities.call(null,attrs__13028,node_id);
var transform_es__13034 = io.pedestal.app.tree.transforms__GT_entities.call(null,transforms__13029,node_id);
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([node_e__13032], true),attrs_es__13033,transform_es__13034);
});
io.pedestal.app.tree.tree__GT_entities = (function tree__GT_entities(tree,path,parent_id){
var map__13042__13043 = tree;
var map__13042__13044 = ((cljs.core.seq_QMARK_.call(null,map__13042__13043))?cljs.core.apply.call(null,cljs.core.hash_map,map__13042__13043):map__13042__13043);
var children__13045 = cljs.core._lookup.call(null,map__13042__13044,"\uFDD0'children",null);
var ks__13046 = io.pedestal.app.tree.child_keys.call(null,children__13045);
var node_id__13047 = io.pedestal.app.tree.next_eid.call(null);
var node_tuples__13048 = io.pedestal.app.tree.node__GT_entities.call(null,tree,path,parent_id,node_id__13047);
return cljs.core.concat.call(null,node_tuples__13048,cljs.core.mapcat.call(null,(function (k){
return tree__GT_entities.call(null,cljs.core.get_in.call(null,tree,cljs.core.PersistentVector.fromArray(["\uFDD0'children",k], true)),cljs.core.conj.call(null,path,k),node_id__13047);
}),ks__13046));
});
io.pedestal.app.tree.entity__GT_tuples = (function entity__GT_tuples(e){
var id__13055 = (new cljs.core.Keyword("\uFDD0't/id")).call(null,e);
return cljs.core.map.call(null,(function (p__13056){
var vec__13057__13058 = p__13056;
var k__13059 = cljs.core.nth.call(null,vec__13057__13058,0,null);
var v__13060 = cljs.core.nth.call(null,vec__13057__13058,1,null);
return cljs.core.PersistentVector.fromArray([id__13055,k__13059,v__13060], true);
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
this.cljs$lang$protocol_mask$partition0$ = 619054858;
this.cljs$lang$protocol_mask$partition1$ = 0;
if(arguments.length>0){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8138__auto__,k__8139__auto__){
var this__13064 = this;
return this__8138__auto__.cljs$core$ILookup$_lookup$arity$3(this__8138__auto__,k__8139__auto__,null);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8140__auto__,k13062,else__8141__auto__){
var this__13065 = this;
if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__13065.__extmap,k13062,else__8141__auto__);
} else
{return null;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8136__auto__){
var this__13066 = this;
return this__13066.__meta;
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8142__auto__){
var this__13067 = this;
return (0 + cljs.core.count.call(null,this__13067.__extmap));
});
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$ = true;
io.pedestal.app.tree.Tree.prototype.io$pedestal$app$query$TupleSource$tuple_seq$arity$1 = (function (this$){
var this__13068 = this;
return io.pedestal.app.tree.tree__GT_tuples.call(null,this$);
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8133__auto__){
var this__13069 = this;
var h__8007__auto____13070 = this__13069.__hash;
if(!((h__8007__auto____13070 == null)))
{return h__8007__auto____13070;
} else
{var h__8007__auto____13071 = cljs.core.hash_imap.call(null,this__8133__auto__);
this__13069.__hash = h__8007__auto____13071;
return h__8007__auto____13071;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8134__auto__,other__8135__auto__){
var this__13072 = this;
if(cljs.core.truth_((function (){var and__4236__auto____13073 = other__8135__auto__;
if(cljs.core.truth_(and__4236__auto____13073))
{var and__4236__auto____13074 = (this__8134__auto__.constructor === other__8135__auto__.constructor);
if(and__4236__auto____13074)
{return cljs.core.equiv_map.call(null,this__8134__auto__,other__8135__auto__);
} else
{return and__4236__auto____13074;
}
} else
{return and__4236__auto____13073;
}
})()))
{return true;
} else
{return false;
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__8152__auto__,opts__8153__auto__){
var this__13075 = this;
var pr_pair__8154__auto____13076 = (function (keyval__8155__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__8153__auto__,keyval__8155__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__8154__auto____13076,[cljs.core.str("#"),cljs.core.str("Tree"),cljs.core.str("{")].join(''),", ","}",opts__8153__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,this__13075.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8147__auto__,k__8148__auto__){
var this__13077 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__8148__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__8147__auto__),this__13077.__meta),k__8148__auto__);
} else
{return (new io.pedestal.app.tree.Tree(this__13077.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__13077.__extmap,k__8148__auto__)),null));
}
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8145__auto__,k__8146__auto__,G__13061){
var this__13078 = this;
var pred__13079__13082 = cljs.core.identical_QMARK_;
var expr__13080__13083 = k__8146__auto__;
return (new io.pedestal.app.tree.Tree(this__13078.__meta,cljs.core.assoc.call(null,this__13078.__extmap,k__8146__auto__,G__13061),null));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8150__auto__){
var this__13084 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,this__13084.__extmap));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8137__auto__,G__13061){
var this__13085 = this;
return (new io.pedestal.app.tree.Tree(G__13061,this__13085.__extmap,this__13085.__hash));
});
io.pedestal.app.tree.Tree.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8143__auto__,entry__8144__auto__){
var this__13086 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8144__auto__))
{return this__8143__auto__.cljs$core$IAssociative$_assoc$arity$3(this__8143__auto__,cljs.core._nth.call(null,entry__8144__auto__,0),cljs.core._nth.call(null,entry__8144__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__8143__auto__,entry__8144__auto__);
}
});
io.pedestal.app.tree.Tree.cljs$lang$type = true;
io.pedestal.app.tree.Tree.cljs$lang$ctorPrSeq = (function (this__8172__auto__){
return cljs.core.list.call(null,"io.pedestal.app.tree/Tree");
});
io.pedestal.app.tree.__GT_Tree = (function __GT_Tree(){
return (new io.pedestal.app.tree.Tree());
});
io.pedestal.app.tree.map__GT_Tree = (function map__GT_Tree(G__13063){
return (new io.pedestal.app.tree.Tree(null,cljs.core.dissoc.call(null,G__13063)));
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
var t__13089 = (new cljs.core.Keyword("\uFDD0't")).call(null,state);
var delete_t__13090 = (t__13089 - 2);
io.pedestal.app.util.log.debug.call(null,"\uFDD0'gc",[cljs.core.str("GC: Deleting t < "),cljs.core.str(delete_t__13090)].join(''));
io.pedestal.app.util.log.debug.call(null,"\uFDD0'gc",[cljs.core.str("GC: There are currently "),cljs.core.str(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,(new cljs.core.Keyword("\uFDD0'deltas")).call(null,state))))),cljs.core.str(" deltas.")].join(''));
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'deltas"], true),cljs.core.partial.call(null,io.pedestal.app.tree.delete_deltas,delete_t__13090));
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
var map__13103__13105 = old;
var map__13103__13106 = ((cljs.core.seq_QMARK_.call(null,map__13103__13105))?cljs.core.apply.call(null,cljs.core.hash_map,map__13103__13105):map__13103__13105);
var seq__13107 = cljs.core._lookup.call(null,map__13103__13106,"\uFDD0'seq",null);
var t__13108 = cljs.core._lookup.call(null,map__13103__13106,"\uFDD0't",null);
var deltas__13109 = io.pedestal.app.tree.expand_maps.call(null,deltas);
var map__13104__13110 = io.pedestal.app.tree.update_tree.call(null,old,deltas__13109);
var map__13104__13111 = ((cljs.core.seq_QMARK_.call(null,map__13104__13110))?cljs.core.apply.call(null,cljs.core.hash_map,map__13104__13110):map__13104__13110);
var tree__13112 = cljs.core._lookup.call(null,map__13104__13111,"\uFDD0'tree",null);
var this_tx__13113 = cljs.core._lookup.call(null,map__13104__13111,"\uFDD0'this-tx",null);
var deltas__13114 = cljs.core.map.call(null,(function (d,s){
return cljs.core.ObjMap.fromObject(["\uFDD0'delta","\uFDD0't","\uFDD0'seq"],{"\uFDD0'delta":d,"\uFDD0't":t__13108,"\uFDD0'seq":s});
}),this_tx__13113,cljs.core.iterate.call(null,cljs.core.inc,seq__13107));
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,old,cljs.core.PersistentVector.fromArray(["\uFDD0'deltas",t__13108], true),deltas__13114),cljs.core.PersistentVector.fromArray(["\uFDD0'this-tx"], true),cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.fromArray(["\uFDD0'seq"], true),cljs.core._PLUS_,cljs.core.count.call(null,deltas__13114)),cljs.core.PersistentVector.fromArray(["\uFDD0'tree"], true),tree__13112),cljs.core.PersistentVector.fromArray(["\uFDD0't"], true),cljs.core.inc);
});
io.pedestal.app.tree.value = (function value(tree,path){
var r_path__13116 = io.pedestal.app.tree.real_path.call(null,path);
return cljs.core.get_in.call(null,tree,cljs.core.conj.call(null,r_path__13116,"\uFDD0'value"));
});
io.pedestal.app.tree.node_exists_QMARK_ = (function node_exists_QMARK_(tree,path){
var r_path__13118 = io.pedestal.app.tree.real_path.call(null,path);
return cljs.core.get_in.call(null,tree,r_path__13118);
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
var ts__13121 = cljs.core.range.call(null,t,(new cljs.core.Keyword("\uFDD0't")).call(null,tree));
return cljs.core.vec.call(null,cljs.core.map.call(null,"\uFDD0'delta",cljs.core.mapcat.call(null,(function (p1__13119_SHARP_){
return cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'deltas")).call(null,tree),p1__13119_SHARP_,null);
}),ts__13121)));
});
