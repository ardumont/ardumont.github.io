goog.provide('io.pedestal.app');
goog.require('cljs.core');
goog.require('io.pedestal.app.protocols');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.queue');
goog.require('io.pedestal.app.tree');
/**
* Given an input map, return the keys of all inputs which have changed.
*/
io.pedestal.app.changed_inputs = (function changed_inputs(inputs){
return cljs.core.set.call(null,cljs.core.keep.call(null,(function (p__13141){
var vec__13142__13143 = p__13141;
var k__13144 = cljs.core.nth.call(null,vec__13142__13143,0,null);
var v__13145 = cljs.core.nth.call(null,vec__13142__13143,1,null);
if(cljs.core.not_EQ_.call(null,(new cljs.core.Keyword("\uFDD0'old")).call(null,v__13145),(new cljs.core.Keyword("\uFDD0'new")).call(null,v__13145)))
{} else
{}
return k__13144;
}),inputs));
});
io.pedestal.app.default_output_fn = (function default_output_fn(message,old_model,new_model){
return null;
});
io.pedestal.app.default_view_fn = (function default_view_fn(state,input_name,old,new$){
return new$;
});
io.pedestal.app.default_feedback_fn = (function default_feedback_fn(view_name,old_view,new_view){
return null;
});
io.pedestal.app.default_emitter_fn = (function() {
var default_emitter_fn = null;
var default_emitter_fn__1 = (function (inputs){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p__13151){
var vec__13152__13153 = p__13151;
var k__13154 = cljs.core.nth.call(null,vec__13152__13153,0,null);
var v__13155 = cljs.core.nth.call(null,vec__13152__13153,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",cljs.core.PersistentVector.fromArray([k__13154], true),"\uFDD0'map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0'value",cljs.core.PersistentVector.fromArray([k__13154], true),null,(new cljs.core.Keyword("\uFDD0'new")).call(null,v__13155)], true)], true);
}),inputs));
});
var default_emitter_fn__2 = (function (inputs,changed_inputs){
return cljs.core.mapv.call(null,(function (changed_input){
return cljs.core.PersistentVector.fromArray(["\uFDD0'value",cljs.core.PersistentVector.fromArray([changed_input], true),(new cljs.core.Keyword("\uFDD0'new")).call(null,cljs.core._lookup.call(null,inputs,changed_input,null))], true);
}),changed_inputs);
});
default_emitter_fn = function(inputs,changed_inputs){
switch(arguments.length){
case 1:
return default_emitter_fn__1.call(this,inputs);
case 2:
return default_emitter_fn__2.call(this,inputs,changed_inputs);
}
throw('Invalid arity: ' + arguments.length);
};
default_emitter_fn.cljs$lang$arity$1 = default_emitter_fn__1;
default_emitter_fn.cljs$lang$arity$2 = default_emitter_fn__2;
return default_emitter_fn;
})()
;
/**
* Generate a namespace qualified keyword for a view or emitter which
* does not exist.
*/
io.pedestal.app.generate_kw = (function generate_kw(prefix,k){
return cljs.core.keyword.call(null,[cljs.core.str("io.pedestal.app/"),cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,k))].join(''));
});
/**
* Return a set of all views names that will be updated when the given input changes.
*/
io.pedestal.app.views_for_input = (function views_for_input(views,input_name){
var view_names__13167 = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__13162){
var vec__13163__13164 = p__13162;
var k__13165 = cljs.core.nth.call(null,vec__13163__13164,0,null);
var v__13166 = cljs.core.nth.call(null,vec__13163__13164,1,null);
return cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,v__13166),input_name);
}),views));
if(cljs.core.empty_QMARK_.call(null,view_names__13167))
{return cljs.core.PersistentHashSet.fromArray([io.pedestal.app.generate_kw.call(null,"view-",input_name)]);
} else
{return cljs.core.set.call(null,view_names__13167);
}
});
io.pedestal.app.emitters_for_input = (function emitters_for_input(emitters,input){
if((function (){var and__4236__auto____13174 = cljs.core.empty_QMARK_.call(null,emitters);
if(and__4236__auto____13174)
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,input),"\uFDD0'view");
} else
{return and__4236__auto____13174;
}
})())
{return cljs.core.PersistentHashSet.fromArray(["\uFDD0'io.pedestal.app/default-emitter"]);
} else
{return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__13175){
var vec__13176__13177 = p__13175;
var k__13178 = cljs.core.nth.call(null,vec__13176__13177,0,null);
var v__13179 = cljs.core.nth.call(null,vec__13176__13177,1,null);
return cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,v__13179),(new cljs.core.Keyword("\uFDD0'k")).call(null,input));
}),emitters)));
}
});
/**
* Return a set of the keys in coll plus all the keys in each value of
* m.
*/
io.pedestal.app.add_generated_names = (function add_generated_names(coll,m){
return cljs.core.set.call(null,cljs.core.into.call(null,cljs.core.keys.call(null,coll),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,m))));
});
/**
* Return a map of view/emitter names to fuctions and inputs. If a view
* or emitter does not appear in the provided system description then
* use the provided default function.
*/
io.pedestal.app.add_defaults = (function add_defaults(default_fn,existing,all_names,input_map){
return cljs.core.reduce.call(null,(function (a,n){
var temp__4423__auto____13187 = cljs.core._lookup.call(null,existing,n,null);
if(cljs.core.truth_(temp__4423__auto____13187))
{var e__13188 = temp__4423__auto____13187;
return cljs.core.assoc.call(null,a,n,e__13188);
} else
{return cljs.core.assoc.call(null,a,n,cljs.core.ObjMap.fromObject(["\uFDD0'fn","\uFDD0'input"],{"\uFDD0'fn":default_fn,"\uFDD0'input":cljs.core.set.call(null,cljs.core.keep.call(null,(function (p__13189){
var vec__13190__13191 = p__13189;
var k__13192 = cljs.core.nth.call(null,vec__13190__13191,0,null);
var v__13193 = cljs.core.nth.call(null,vec__13190__13191,1,null);
if(cljs.core.contains_QMARK_.call(null,v__13193,n))
{return k__13192;
} else
{return null;
}
}),input_map))}));
}
}),cljs.core.ObjMap.EMPTY,all_names);
});
/**
* Given a description of the relationships between functions in an application,
* generate a data structure which describes how data flows through the
* system.
* 
* This data structure will be used to drive each transaction.
*/
io.pedestal.app.make_flow = (function make_flow(description){
var map__13266__13267 = description;
var map__13266__13268 = ((cljs.core.seq_QMARK_.call(null,map__13266__13267))?cljs.core.apply.call(null,cljs.core.hash_map,map__13266__13267):map__13266__13267);
var models__13269 = cljs.core._lookup.call(null,map__13266__13268,"\uFDD0'models",null);
var output__13270 = cljs.core._lookup.call(null,map__13266__13268,"\uFDD0'output",null);
var views__13271 = cljs.core._lookup.call(null,map__13266__13268,"\uFDD0'views",null);
var feedback__13272 = cljs.core._lookup.call(null,map__13266__13268,"\uFDD0'feedback",null);
var emitters__13273 = cljs.core._lookup.call(null,map__13266__13268,"\uFDD0'emitters",null);
var input__GT_views__13274 = cljs.core.reduce.call(null,(function (a,k){
return cljs.core.assoc.call(null,a,k,io.pedestal.app.views_for_input.call(null,views__13271,k));
}),cljs.core.ObjMap.EMPTY,cljs.core.keys.call(null,models__13269));
var input__GT_views__13319 = cljs.core.reduce.call(null,(function (a,p__13275){
var vec__13276__13277 = p__13275;
var input__13278 = cljs.core.nth.call(null,vec__13276__13277,0,null);
var view_name__13279 = cljs.core.nth.call(null,vec__13276__13277,1,null);
if(cljs.core.contains_QMARK_.call(null,views__13271,input__13278))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([input__13278], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),view_name__13279);
} else
{return a;
}
}),input__GT_views__13274,(function (){var iter__8277__auto____13318 = (function iter__13280(s__13281){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13281__13301 = s__13281;
while(true){
var temp__4425__auto____13302 = cljs.core.seq.call(null,s__13281__13301);
if(temp__4425__auto____13302)
{var xs__4977__auto____13303 = temp__4425__auto____13302;
var vec__13304__13305 = cljs.core.first.call(null,xs__4977__auto____13303);
var k__13306 = cljs.core.nth.call(null,vec__13304__13305,0,null);
var v__13307 = cljs.core.nth.call(null,vec__13304__13305,1,null);
var iterys__8275__auto____13316 = ((function (s__13281__13301,vec__13304__13305,k__13306,v__13307,xs__4977__auto____13303,temp__4425__auto____13302){
return (function iter__13282(s__13283){
return (new cljs.core.LazySeq(null,false,((function (s__13281__13301,vec__13304__13305,k__13306,v__13307,xs__4977__auto____13303,temp__4425__auto____13302){
return (function (){
var s__13283__13312 = s__13283;
while(true){
var temp__4425__auto____13313 = cljs.core.seq.call(null,s__13283__13312);
if(temp__4425__auto____13313)
{var xs__4977__auto____13314 = temp__4425__auto____13313;
var i__13315 = cljs.core.first.call(null,xs__4977__auto____13314);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([i__13315,k__13306], true),iter__13282.call(null,cljs.core.rest.call(null,s__13283__13312)));
} else
{return null;
}
break;
}
});})(s__13281__13301,vec__13304__13305,k__13306,v__13307,xs__4977__auto____13303,temp__4425__auto____13302))
,null));
});})(s__13281__13301,vec__13304__13305,k__13306,v__13307,xs__4977__auto____13303,temp__4425__auto____13302))
;
var fs__8276__auto____13317 = cljs.core.seq.call(null,iterys__8275__auto____13316.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,v__13307)));
if(fs__8276__auto____13317)
{return cljs.core.concat.call(null,fs__8276__auto____13317,iter__13280.call(null,cljs.core.rest.call(null,s__13281__13301)));
} else
{{
var G__13338 = cljs.core.rest.call(null,s__13281__13301);
s__13281__13301 = G__13338;
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
return iter__8277__auto____13318.call(null,views__13271);
})());
var all_view_names__13320 = io.pedestal.app.add_generated_names.call(null,views__13271,input__GT_views__13319);
var input__GT_emitters__13322 = cljs.core.reduce.call(null,(function (a,input){
var ss__13321 = io.pedestal.app.emitters_for_input.call(null,emitters__13273,input);
if(cljs.core.empty_QMARK_.call(null,ss__13321))
{return a;
} else
{return cljs.core.assoc.call(null,a,(new cljs.core.Keyword("\uFDD0'k")).call(null,input),ss__13321);
}
}),cljs.core.ObjMap.EMPTY,cljs.core.concat.call(null,cljs.core.map.call(null,(function (x){
return cljs.core.ObjMap.fromObject(["\uFDD0'k","\uFDD0'type"],{"\uFDD0'k":x,"\uFDD0'type":"\uFDD0'view"});
}),all_view_names__13320),cljs.core.map.call(null,(function (x){
return cljs.core.ObjMap.fromObject(["\uFDD0'k","\uFDD0'type"],{"\uFDD0'k":x,"\uFDD0'type":"\uFDD0'model"});
}),cljs.core.keys.call(null,models__13269))));
var all_emitter_names__13323 = io.pedestal.app.add_generated_names.call(null,emitters__13273,input__GT_emitters__13322);
var default_emitter__13325 = (function (){var or__4238__auto____13324 = (new cljs.core.Keyword("\uFDD0'default-emitter")).call(null,description);
if(cljs.core.truth_(or__4238__auto____13324))
{return or__4238__auto____13324;
} else
{return cljs.core.first.call(null,all_emitter_names__13323);
}
})();
return cljs.core.ObjMap.fromObject(["\uFDD0'default-emitter","\uFDD0'models","\uFDD0'input->output","\uFDD0'input->views","\uFDD0'view->feedback","\uFDD0'input->emitters","\uFDD0'views","\uFDD0'emitters"],{"\uFDD0'default-emitter":default_emitter__13325,"\uFDD0'models":cljs.core.reduce.call(null,(function (a,p__13326){
var vec__13327__13328 = p__13326;
var k__13329 = cljs.core.nth.call(null,vec__13327__13328,0,null);
var v__13330 = cljs.core.nth.call(null,vec__13327__13328,1,null);
return cljs.core.assoc.call(null,a,k__13329,(new cljs.core.Keyword("\uFDD0'fn")).call(null,v__13330));
}),cljs.core.ObjMap.EMPTY,models__13269),"\uFDD0'input->output":cljs.core.reduce.call(null,(function (a,p__13331){
var vec__13332__13333 = p__13331;
var k__13334 = cljs.core.nth.call(null,vec__13332__13333,0,null);
var temp__4423__auto____13335 = cljs.core._lookup.call(null,output__13270,k__13334,null);
if(cljs.core.truth_(temp__4423__auto____13335))
{var o__13336 = temp__4423__auto____13335;
return cljs.core.assoc.call(null,a,k__13334,o__13336);
} else
{return a;
}
}),cljs.core.ObjMap.EMPTY,cljs.core.merge.call(null,models__13269,views__13271)),"\uFDD0'input->views":input__GT_views__13319,"\uFDD0'view->feedback":cljs.core.reduce.call(null,(function (a,v){
return cljs.core.assoc.call(null,a,v,(function (){var or__4238__auto____13337 = cljs.core._lookup.call(null,feedback__13272,v,null);
if(cljs.core.truth_(or__4238__auto____13337))
{return or__4238__auto____13337;
} else
{return io.pedestal.app.default_feedback_fn;
}
})());
}),cljs.core.ObjMap.EMPTY,all_view_names__13320),"\uFDD0'input->emitters":input__GT_emitters__13322,"\uFDD0'views":io.pedestal.app.add_defaults.call(null,io.pedestal.app.default_view_fn,views__13271,all_view_names__13320,input__GT_views__13319),"\uFDD0'emitters":io.pedestal.app.add_defaults.call(null,io.pedestal.app.default_emitter_fn,emitters__13273,all_emitter_names__13323,input__GT_emitters__13322)});
});
io.pedestal.app.model_or_view = (function model_or_view(state,k){
var or__4238__auto____13340 = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'models",k], true));
if(cljs.core.truth_(or__4238__auto____13340))
{return or__4238__auto____13340;
} else
{return cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'views",k], true));
}
});
io.pedestal.app.old_and_new = (function old_and_new(ks,o,n){
return cljs.core.reduce.call(null,(function (a,k){
return cljs.core.assoc.call(null,a,k,cljs.core.ObjMap.fromObject(["\uFDD0'old","\uFDD0'new"],{"\uFDD0'old":io.pedestal.app.model_or_view.call(null,o,k),"\uFDD0'new":io.pedestal.app.model_or_view.call(null,n,k)}));
}),cljs.core.ObjMap.EMPTY,ks);
});
io.pedestal.app.process_app_model_message = (function (){var method_table__8352__auto____13341 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__8353__auto____13342 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__8354__auto____13343 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__8355__auto____13344 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__8356__auto____13345 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("process-app-model-message",(function (state,flow,message){
return io.pedestal.app.messages.type.call(null,message);
}),"\uFDD0'default",hierarchy__8356__auto____13345,method_table__8352__auto____13341,prefer_table__8353__auto____13342,method_cache__8354__auto____13343,cached_hierarchy__8355__auto____13344));
})();
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'default",(function (state,flow,message){
return state;
}));
io.pedestal.app.refresh_emitters = (function refresh_emitters(state,flow){
return cljs.core.reduce.call(null,(function (deltas,p__13354){
var vec__13355__13356 = p__13354;
var emitter_name__13357 = cljs.core.nth.call(null,vec__13355__13356,0,null);
var emitter__13358 = cljs.core.nth.call(null,vec__13355__13356,1,null);
var view_map__13359 = io.pedestal.app.old_and_new.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,emitter__13358),state,state);
var emitter_fn__13360 = (new cljs.core.Keyword("\uFDD0'fn")).call(null,emitter__13358);
return cljs.core.into.call(null,deltas,emitter_fn__13360.call(null,view_map__13359));
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0'emitters")).call(null,flow));
});
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'navigate",(function (state,flow,message){
var deltas__13361 = io.pedestal.app.refresh_emitters.call(null,state,flow);
var paths__13362 = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'named-paths",(new cljs.core.Keyword("\uFDD0'name")).call(null,message)], true));
var old_paths__13363 = (new cljs.core.Keyword("\uFDD0'subscriptions")).call(null,state);
return cljs.core.assoc.call(null,state,"\uFDD0'subscriptions",paths__13362,"\uFDD0'deltas",cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p1__13346_SHARP_){
return cljs.core.vector.call(null,"\uFDD0'navigate-node-destroy",p1__13346_SHARP_);
}),old_paths__13363),deltas__13361));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'set-focus",(function (state,flow,message){
return io.pedestal.app.process_app_model_message.call(null,state,flow,cljs.core.assoc.call(null,message,io.pedestal.app.messages.type,"\uFDD0'navigate"));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'subscribe",(function (state,flow,message){
var deltas__13366 = io.pedestal.app.refresh_emitters.call(null,state,flow);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'subscriptions"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),(new cljs.core.Keyword("\uFDD0'paths")).call(null,message)),"\uFDD0'deltas",deltas__13366);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'unsubscribe",(function (state,flow,message){
var paths__13367 = cljs.core.set.call(null,(new cljs.core.Keyword("\uFDD0'paths")).call(null,message));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'subscriptions"], true),(function (s){
return cljs.core.remove.call(null,(function (p1__13364_SHARP_){
return cljs.core.contains_QMARK_.call(null,paths__13367,p1__13364_SHARP_);
}),s);
})),"\uFDD0'deltas",cljs.core.mapv.call(null,(function (p1__13365_SHARP_){
return cljs.core.vector.call(null,"\uFDD0'navigate-node-destroy",p1__13365_SHARP_);
}),paths__13367));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'add-named-paths",(function (state,flow,message){
var map__13368__13369 = message;
var map__13368__13370 = ((cljs.core.seq_QMARK_.call(null,map__13368__13369))?cljs.core.apply.call(null,cljs.core.hash_map,map__13368__13369):map__13368__13369);
var paths__13371 = cljs.core._lookup.call(null,map__13368__13370,"\uFDD0'paths",null);
var name__13372 = cljs.core._lookup.call(null,map__13368__13370,"\uFDD0'name",null);
return cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'named-paths",name__13372], true),paths__13371);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'remove-named-paths",(function (state,flow,message){
var map__13373__13374 = message;
var map__13373__13375 = ((cljs.core.seq_QMARK_.call(null,map__13373__13374))?cljs.core.apply.call(null,cljs.core.hash_map,map__13373__13374):map__13373__13374);
var name__13376 = cljs.core._lookup.call(null,map__13373__13375,"\uFDD0'name",null);
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'named-paths"], true),cljs.core.dissoc,name__13376);
}));
io.pedestal.app.get_receiver = (function get_receiver(message){
var to__13380 = io.pedestal.app.messages.topic.call(null,message);
if(cljs.core.keyword_QMARK_.call(null,to__13380))
{return to__13380;
} else
{var or__4238__auto____13381 = (new cljs.core.Keyword("\uFDD0'node")).call(null,to__13380);
if(cljs.core.truth_(or__4238__auto____13381))
{return or__4238__auto____13381;
} else
{var or__4238__auto____13382 = (new cljs.core.Keyword("\uFDD0'model")).call(null,to__13380);
if(cljs.core.truth_(or__4238__auto____13382))
{return or__4238__auto____13382;
} else
{return (new cljs.core.Keyword("\uFDD0'service")).call(null,to__13380);
}
}
}
});
io.pedestal.app.run_model = (function run_model(state,flow,model_name,message){
if(cljs.core.truth_(cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'models",model_name], true))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Model with name "),cljs.core.str(model_name),cljs.core.str(" does not exist. Message is "),cljs.core.str(message)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'get-in","\uFDD1'flow",cljs.core.vec(["\uFDD0'models","\uFDD1'model-name"])),cljs.core.hash_map("\uFDD0'line",223,"\uFDD0'column",11))))].join('')));
}
var model_fn__13384 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'models",model_name], true));
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'models",model_name], true),model_fn__13384,message);
});
io.pedestal.app.run_output = (function run_output(state,old_state,flow,input_name,message){
var output_fn__13390 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->output",input_name], true));
var old_model__13391 = io.pedestal.app.model_or_view.call(null,old_state,input_name);
var new_model__13392 = io.pedestal.app.model_or_view.call(null,state,input_name);
var out__13393 = (cljs.core.truth_(output_fn__13390)?output_fn__13390.call(null,message,old_model__13391,new_model__13392):null);
var out__13394 = ((cljs.core.vector_QMARK_.call(null,out__13393))?cljs.core.ObjMap.fromObject(["\uFDD0'output"],{"\uFDD0'output":out__13393}):out__13393);
if(cljs.core.truth_(out__13394))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'output"], true),cljs.core.into,(new cljs.core.Keyword("\uFDD0'output")).call(null,out__13394)),cljs.core.PersistentVector.fromArray(["\uFDD0'feedback"], true),cljs.core.into,(new cljs.core.Keyword("\uFDD0'feedback")).call(null,out__13394));
} else
{return state;
}
});
io.pedestal.app.run_outputs = (function run_outputs(state,old_state,flow,message,modified_inputs){
return cljs.core.reduce.call(null,(function (new_state,p__13399){
var vec__13400__13401 = p__13399;
var input_name__13402 = cljs.core.nth.call(null,vec__13400__13401,0,null);
if(cljs.core.truth_(cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->output",input_name__13402], true))))
{return io.pedestal.app.run_output.call(null,new_state,old_state,flow,input_name__13402,message);
} else
{return new_state;
}
}),state,modified_inputs);
});
io.pedestal.app.topo_sort = (function topo_sort(flow,view_names){
var c__13414 = (function (a,b){
var deps_a__13409 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->views",a], true));
var deps_b__13410 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->views",b], true));
var or__4238__auto____13411 = cljs.core.contains_QMARK_.call(null,deps_a__13409,b);
if(or__4238__auto____13411)
{return or__4238__auto____13411;
} else
{var or__4238__auto____13413 = (function (){var and__4236__auto____13412 = !((deps_a__13409 == null));
if(and__4236__auto____13412)
{return (deps_b__13410 == null);
} else
{return and__4236__auto____13412;
}
})();
if(cljs.core.truth_(or__4238__auto____13413))
{return or__4238__auto____13413;
} else
{return cljs.core._EQ_.call(null,deps_a__13409,deps_b__13410);
}
}
});
return cljs.core.sort.call(null,c__13414,view_names);
});
io.pedestal.app.run_all_views_for_input = (function run_all_views_for_input(state,old_state,flow,view_names){
return cljs.core.reduce.call(null,(function (new_state,view_name){
var view__13424 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'views",view_name], true));
var old_view__13425 = cljs.core.get_in.call(null,old_state,cljs.core.PersistentVector.fromArray(["\uFDD0'views",view_name], true));
var input_map__13426 = io.pedestal.app.old_and_new.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,view__13424),old_state,new_state);
var view_fn__13427 = (new cljs.core.Keyword("\uFDD0'fn")).call(null,view__13424);
var new_view__13432 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,input_map__13426),1))?(function (){var vec__13428__13429 = cljs.core.first.call(null,input_map__13426);
var k__13430 = cljs.core.nth.call(null,vec__13428__13429,0,null);
var v__13431 = cljs.core.nth.call(null,vec__13428__13429,1,null);
return view_fn__13427.call(null,old_view__13425,k__13430,(new cljs.core.Keyword("\uFDD0'old")).call(null,v__13431),(new cljs.core.Keyword("\uFDD0'new")).call(null,v__13431));
})():view_fn__13427.call(null,old_view__13425,input_map__13426));
return cljs.core.assoc_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0'views",view_name], true),new_view__13432);
}),state,view_names);
});
io.pedestal.app.run_views = (function run_views(state,old_state,flow,input_name,state_key){
var view_names__13438 = io.pedestal.app.topo_sort.call(null,flow,cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->views",input_name], true)));
var old_in_state__13439 = cljs.core.get_in.call(null,old_state,cljs.core.PersistentVector.fromArray([state_key,input_name], true));
var new_in_state__13440 = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray([state_key,input_name], true));
if(!((function (){var or__4238__auto____13441 = cljs.core.empty_QMARK_.call(null,view_names__13438);
if(or__4238__auto____13441)
{return or__4238__auto____13441;
} else
{return cljs.core._EQ_.call(null,old_in_state__13439,new_in_state__13440);
}
})()))
{var new_state__13442 = io.pedestal.app.run_all_views_for_input.call(null,state,old_state,flow,view_names__13438);
return cljs.core.reduce.call(null,(function (s,view_name){
return run_views.call(null,s,state,flow,view_name,"\uFDD0'views");
}),new_state__13442,view_names__13438);
} else
{return state;
}
});
io.pedestal.app.run_feedback = (function run_feedback(state,old_state,flow,modified_inputs){
return cljs.core.reduce.call(null,(function (s,p__13454){
var vec__13455__13457 = p__13454;
var view_name__13458 = cljs.core.nth.call(null,vec__13455__13457,0,null);
var map__13456__13459 = cljs.core.nth.call(null,vec__13455__13457,1,null);
var map__13456__13460 = ((cljs.core.seq_QMARK_.call(null,map__13456__13459))?cljs.core.apply.call(null,cljs.core.hash_map,map__13456__13459):map__13456__13459);
var old__13461 = cljs.core._lookup.call(null,map__13456__13460,"\uFDD0'old",null);
var new__13462 = cljs.core._lookup.call(null,map__13456__13460,"\uFDD0'new",null);
var feedback_fn__13463 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'view->feedback",view_name__13458], true));
var feedback__13464 = feedback_fn__13463.call(null,view_name__13458,old__13461,new__13462);
if(cljs.core.truth_(feedback__13464))
{return cljs.core.update_in.call(null,s,cljs.core.PersistentVector.fromArray(["\uFDD0'feedback"], true),cljs.core.into,feedback__13464);
} else
{return s;
}
}),state,modified_inputs);
});
io.pedestal.app.run_emitters = (function run_emitters(state,old_state,flow,modified_inputs){
var affected_emitters__13471 = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.select_keys.call(null,(new cljs.core.Keyword("\uFDD0'input->emitters")).call(null,flow),cljs.core.keys.call(null,modified_inputs)))));
return cljs.core.reduce.call(null,(function (new_state,emitter_key){
var emitter__13472 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'emitters",emitter_key], true));
var view_map__13473 = io.pedestal.app.old_and_new.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,emitter__13472),old_state,new_state);
var changed_inputs__13474 = cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.select_keys.call(null,modified_inputs,(new cljs.core.Keyword("\uFDD0'input")).call(null,emitter__13472))));
if(!(cljs.core.empty_QMARK_.call(null,changed_inputs__13474)))
{var emitter_fn__13475 = (new cljs.core.Keyword("\uFDD0'fn")).call(null,emitter__13472);
var deltas__13476 = emitter_fn__13475.call(null,view_map__13473,changed_inputs__13474);
return cljs.core.update_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0'deltas"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),deltas__13476);
} else
{return new_state;
}
}),state,affected_emitters__13471);
});
io.pedestal.app.find_modified_inputs = (function find_modified_inputs(type,o,n){
var n_views__13484 = cljs.core._lookup.call(null,n,type,null);
var o_views__13485 = cljs.core._lookup.call(null,o,type,null);
return cljs.core.reduce.call(null,(function (a,p__13486){
var vec__13487__13488 = p__13486;
var k__13489 = cljs.core.nth.call(null,vec__13487__13488,0,null);
var v__13490 = cljs.core.nth.call(null,vec__13487__13488,1,null);
if(cljs.core.not_EQ_.call(null,v__13490,cljs.core._lookup.call(null,o_views__13485,k__13489,null)))
{return cljs.core.assoc.call(null,a,k__13489,cljs.core.ObjMap.fromObject(["\uFDD0'old","\uFDD0'new"],{"\uFDD0'old":cljs.core._lookup.call(null,o_views__13485,k__13489,null),"\uFDD0'new":v__13490}));
} else
{return a;
}
}),cljs.core.ObjMap.EMPTY,n_views__13484);
});
/**
* Starting with the given input message, run the dataflow producing a
* new state.
*/
io.pedestal.app.run_dataflow = (function run_dataflow(state,flow,message){
var old_state__13497 = state;
var model_name__13498 = io.pedestal.app.get_receiver.call(null,message);
var new_state__13499 = io.pedestal.app.run_views.call(null,io.pedestal.app.run_model.call(null,state,flow,model_name__13498,message),old_state__13497,flow,model_name__13498,"\uFDD0'models");
var modified_views__13500 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'views",old_state__13497,new_state__13499);
var modified_models__13501 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'models",old_state__13497,new_state__13499);
var result__13502 = io.pedestal.app.run_emitters.call(null,io.pedestal.app.run_feedback.call(null,new_state__13499,old_state__13497,flow,modified_views__13500),old_state__13497,flow,cljs.core.merge.call(null,modified_views__13500,modified_models__13501));
if(!(cljs.core.empty_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'feedback")).call(null,result__13502))))
{return cljs.core.reduce.call(null,(function (s,message){
return run_dataflow.call(null,cljs.core.assoc.call(null,s,"\uFDD0'feedback",cljs.core.PersistentVector.EMPTY),flow,message);
}),result__13502,(new cljs.core.Keyword("\uFDD0'feedback")).call(null,result__13502));
} else
{return result__13502;
}
});
io.pedestal.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){
return cljs.core._EQ_.call(null,cljs.core.take.call(null,cljs.core.count.call(null,prefix),path),prefix);
});
io.pedestal.app.special_ops = cljs.core.ObjMap.fromObject(["\uFDD0'navigate-node-destroy"],{"\uFDD0'navigate-node-destroy":"\uFDD0'node-destroy"});
io.pedestal.app.filter_deltas = (function filter_deltas(state,deltas){
var subscriptions__13516 = (new cljs.core.Keyword("\uFDD0'subscriptions")).call(null,state);
return cljs.core.mapv.call(null,(function (p__13517){
var vec__13518__13519 = p__13517;
var op__13520 = cljs.core.nth.call(null,vec__13518__13519,0,null);
var xs__13521 = cljs.core.nthnext.call(null,vec__13518__13519,1);
var delta__13522 = vec__13518__13519;
if(cljs.core.truth_(io.pedestal.app.special_ops.call(null,op__13520)))
{return cljs.core.apply.call(null,cljs.core.vector,io.pedestal.app.special_ops.call(null,op__13520),xs__13521);
} else
{return delta__13522;
}
}),cljs.core.filter.call(null,(function (p__13523){
var vec__13524__13525 = p__13523;
var op__13526 = cljs.core.nth.call(null,vec__13524__13525,0,null);
var path__13527 = cljs.core.nth.call(null,vec__13524__13525,1,null);
var or__4238__auto____13528 = io.pedestal.app.special_ops.call(null,op__13526);
if(cljs.core.truth_(or__4238__auto____13528))
{return or__4238__auto____13528;
} else
{return cljs.core.some.call(null,(function (s){
return io.pedestal.app.path_starts_with_QMARK_.call(null,path__13527,s);
}),subscriptions__13516);
}
}),cljs.core.mapcat.call(null,io.pedestal.app.tree.expand_map,deltas)));
});
/**
* Using the given flow, process the given message producing a new
* state.
*/
io.pedestal.app.process_message = (function process_message(state,flow,message){
var old_state__13535 = state;
var new_state__13536 = ((cljs.core._EQ_.call(null,io.pedestal.app.messages.topic.call(null,message),io.pedestal.app.messages.app_model))?io.pedestal.app.process_app_model_message.call(null,state,flow,message):io.pedestal.app.run_dataflow.call(null,state,flow,message));
var new_deltas__13537 = io.pedestal.app.filter_deltas.call(null,new_state__13536,(new cljs.core.Keyword("\uFDD0'deltas")).call(null,new_state__13536));
var modified_views__13538 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'views",old_state__13535,new_state__13536);
var modified_models__13539 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'models",old_state__13535,new_state__13536);
var result__13540 = io.pedestal.app.run_outputs.call(null,new_state__13536,old_state__13535,flow,message,cljs.core.merge.call(null,modified_views__13538,modified_models__13539));
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,result__13540,"\uFDD0'emitter-deltas",new_deltas__13537),"\uFDD0'deltas");
});
io.pedestal.app.pre_tx_state = (function pre_tx_state(state){
return cljs.core.assoc.call(null,state,"\uFDD0'output",cljs.core.PersistentVector.EMPTY,"\uFDD0'feedback",cljs.core.PersistentVector.EMPTY);
});
io.pedestal.app.transact_one = (function transact_one(state,flow,message){
return io.pedestal.app.process_message.call(null,cljs.core.assoc.call(null,io.pedestal.app.pre_tx_state.call(null,state),"\uFDD0'input",message),flow,message);
});
io.pedestal.app.transact_many = (function transact_many(state,flow,messages){
return cljs.core.reduce.call(null,(function (a,message){
return io.pedestal.app.process_message.call(null,cljs.core.assoc.call(null,a,"\uFDD0'input",message),flow,message);
}),io.pedestal.app.pre_tx_state.call(null,state),messages);
});
io.pedestal.app.receive_input_message = (function receive_input_message(state,flow,input_queue){
return io.pedestal.app.protocols.take_message.call(null,input_queue,(function (message){
cljs.core.swap_BANG_.call(null,state,io.pedestal.app.transact_one,flow,message);
return receive_input_message.call(null,state,flow,input_queue);
}));
});
io.pedestal.app.send_output = (function send_output(app,output_queue){
return cljs.core.add_watch.call(null,app,"\uFDD0'output-watcher",(function (_13550,_13551,_,new_state){
var out__13552 = (new cljs.core.Keyword("\uFDD0'output")).call(null,new_state);
var G__13553__13554 = cljs.core.seq.call(null,out__13552);
if(G__13553__13554)
{var message__13555 = cljs.core.first.call(null,G__13553__13554);
var G__13553__13556 = G__13553__13554;
while(true){
io.pedestal.app.protocols.put_message.call(null,output_queue,message__13555);
var temp__4425__auto____13557 = cljs.core.next.call(null,G__13553__13556);
if(temp__4425__auto____13557)
{var G__13553__13558 = temp__4425__auto____13557;
{
var G__13559 = cljs.core.first.call(null,G__13553__13558);
var G__13560 = G__13553__13558;
message__13555 = G__13559;
G__13553__13556 = G__13560;
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
}));
});
io.pedestal.app.send_app_model_deltas = (function send_app_model_deltas(app,app_model_queue){
return cljs.core.add_watch.call(null,app,"\uFDD0'app-model-delta-watcher",(function (_13564,_,old_state,new_state){
var deltas__13565 = (new cljs.core.Keyword("\uFDD0'emitter-deltas")).call(null,new_state);
if(!((function (){var or__4238__auto____13566 = cljs.core.empty_QMARK_.call(null,deltas__13565);
if(or__4238__auto____13566)
{return or__4238__auto____13566;
} else
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'emitter-deltas")).call(null,old_state),deltas__13565);
}
})()))
{return io.pedestal.app.protocols.put_message.call(null,app_model_queue,cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'deltas"],[io.pedestal.app.messages.app_model,"\uFDD0'deltas",deltas__13565]));
} else
{return null;
}
}));
});
io.pedestal.app.rekey_description = (function rekey_description(description){
var key_map__13575 = cljs.core.ObjMap.fromObject(["\uFDD0'transform","\uFDD0'combine","\uFDD0'emit","\uFDD0'treeify","\uFDD0'effect","\uFDD0'continue","\uFDD0'focus"],{"\uFDD0'transform":"\uFDD0'models","\uFDD0'combine":"\uFDD0'views","\uFDD0'emit":"\uFDD0'emitters","\uFDD0'treeify":"\uFDD0'emitters","\uFDD0'effect":"\uFDD0'output","\uFDD0'continue":"\uFDD0'feedback","\uFDD0'focus":"\uFDD0'navigation"});
var key_values__13576 = cljs.core.vals.call(null,key_map__13575);
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__13577){
var vec__13578__13579 = p__13577;
var k__13580 = cljs.core.nth.call(null,vec__13578__13579,0,null);
var v__13581 = cljs.core.nth.call(null,vec__13578__13579,1,null);
return cljs.core.PersistentVector.fromArray([(function (){var or__4238__auto____13582 = key_map__13575.call(null,k__13580);
if(cljs.core.truth_(or__4238__auto____13582))
{return or__4238__auto____13582;
} else
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([k__13580]),key_values__13576);
}
})(),v__13581], true);
}),description));
});
/**
* Given a map which describes the application and a renderer, return
* a new application. The returned application map contains input and
* output queues for sending and receiving messages.
* 
* The description map contains a subset of the keys:
* :models, :output, :views, :feedback, :emitters and :navigation.
*/
io.pedestal.app.build = (function build(description){
var description__13589 = io.pedestal.app.rekey_description.call(null,description);
var app_atom__13590 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'output","\uFDD0'feedback"],{"\uFDD0'output":cljs.core.PersistentVector.EMPTY,"\uFDD0'feedback":cljs.core.PersistentVector.EMPTY}));
var flow__13591 = io.pedestal.app.make_flow.call(null,description__13589);
var input_queue__13592 = io.pedestal.app.queue.queue.call(null,"\uFDD0'input");
var output_queue__13593 = io.pedestal.app.queue.queue.call(null,"\uFDD0'output");
var app_model_queue__13594 = io.pedestal.app.queue.queue.call(null,"\uFDD0'app-model");
io.pedestal.app.receive_input_message.call(null,app_atom__13590,flow__13591,input_queue__13592);
io.pedestal.app.send_output.call(null,app_atom__13590,output_queue__13593);
io.pedestal.app.send_app_model_deltas.call(null,app_atom__13590,app_model_queue__13594);
return cljs.core.ObjMap.fromObject(["\uFDD0'state","\uFDD0'description","\uFDD0'flow","\uFDD0'default-emitter","\uFDD0'input","\uFDD0'output","\uFDD0'app-model"],{"\uFDD0'state":app_atom__13590,"\uFDD0'description":description__13589,"\uFDD0'flow":flow__13591,"\uFDD0'default-emitter":(new cljs.core.Keyword("\uFDD0'default-emitter")).call(null,flow__13591),"\uFDD0'input":input_queue__13592,"\uFDD0'output":output_queue__13593,"\uFDD0'app-model":app_model_queue__13594});
});
io.pedestal.app.create_start_messages = (function create_start_messages(navigation){
return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__13607){
var vec__13608__13609 = p__13607;
var name__13610 = cljs.core.nth.call(null,vec__13608__13609,0,null);
var paths__13611 = cljs.core.nth.call(null,vec__13608__13609,1,null);
return cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'paths","\uFDD0'name"],[io.pedestal.app.messages.app_model,"\uFDD0'add-named-paths",paths__13611,name__13610]);
}),cljs.core.remove.call(null,(function (p__13612){
var vec__13613__13614 = p__13612;
var k__13615 = cljs.core.nth.call(null,vec__13613__13614,0,null);
var v__13616 = cljs.core.nth.call(null,vec__13613__13614,1,null);
return cljs.core._EQ_.call(null,k__13615,"\uFDD0'default");
}),navigation)),(function (){var temp__4425__auto____13617 = (new cljs.core.Keyword("\uFDD0'default")).call(null,navigation);
if(cljs.core.truth_(temp__4425__auto____13617))
{var n__13618 = temp__4425__auto____13617;
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'name"],[io.pedestal.app.messages.app_model,"\uFDD0'navigate",n__13618])], true);
} else
{return null;
}
})());
});
io.pedestal.app.begin = (function() {
var begin = null;
var begin__1 = (function (app){
return begin.call(null,app,null);
});
var begin__2 = (function (app,start_messages){
var map__13637__13638 = app;
var map__13637__13639 = ((cljs.core.seq_QMARK_.call(null,map__13637__13638))?cljs.core.apply.call(null,cljs.core.hash_map,map__13637__13638):map__13637__13638);
var description__13640 = cljs.core._lookup.call(null,map__13637__13639,"\uFDD0'description",null);
var flow__13641 = cljs.core._lookup.call(null,map__13637__13639,"\uFDD0'flow",null);
var default_emitter__13642 = cljs.core._lookup.call(null,map__13637__13639,"\uFDD0'default-emitter",null);
var start_messages__13643 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'navigation")).call(null,description__13640))?io.pedestal.app.create_start_messages.call(null,(new cljs.core.Keyword("\uFDD0'navigation")).call(null,description__13640)):(("\uFDD0'else")?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'paths"],[io.pedestal.app.messages.app_model,"\uFDD0'subscribe",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)])], true):null)));
var init_messages__13654 = cljs.core.reduce.call(null,(function (a,p__13644){
var vec__13645__13646 = p__13644;
var model_name__13647 = cljs.core.nth.call(null,vec__13645__13646,0,null);
var init_value__13648 = cljs.core.nth.call(null,vec__13645__13646,1,null);
return cljs.core.conj.call(null,a,cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'value"],[model_name__13647,io.pedestal.app.messages.init,init_value__13648]));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__13649){
var vec__13650__13651 = p__13649;
var k__13652 = cljs.core.nth.call(null,vec__13650__13651,0,null);
var v__13653 = cljs.core.nth.call(null,vec__13650__13651,1,null);
return cljs.core.PersistentVector.fromArray([k__13652,(new cljs.core.Keyword("\uFDD0'init")).call(null,v__13653)], true);
}),(new cljs.core.Keyword("\uFDD0'models")).call(null,description__13640)));
cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'state")).call(null,app),io.pedestal.app.transact_many,flow__13641,init_messages__13654);
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'state")).call(null,app),io.pedestal.app.transact_many,flow__13641,start_messages__13643);
});
begin = function(app,start_messages){
switch(arguments.length){
case 1:
return begin__1.call(this,app);
case 2:
return begin__2.call(this,app,start_messages);
}
throw('Invalid arity: ' + arguments.length);
};
begin.cljs$lang$arity$1 = begin__1;
begin.cljs$lang$arity$2 = begin__2;
return begin;
})()
;
io.pedestal.app.run_BANG_ = (function run_BANG_(app,script){
if((function (){var or__4238__auto____13662 = cljs.core.vector_QMARK_.call(null,script);
if(or__4238__auto____13662)
{return or__4238__auto____13662;
} else
{return cljs.core.list_QMARK_.call(null,script);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("The passed script must be a vector or list"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'or",cljs.core.with_meta(cljs.core.list("\uFDD1'vector?","\uFDD1'script"),cljs.core.hash_map("\uFDD0'line",498,"\uFDD0'column",15)),cljs.core.with_meta(cljs.core.list("\uFDD1'list?","\uFDD1'script"),cljs.core.hash_map("\uFDD0'line",498,"\uFDD0'column",32))),cljs.core.hash_map("\uFDD0'line",498,"\uFDD0'column",11))))].join('')));
}
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,script))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Each element of the passed script must be a map"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'every?","\uFDD1'map?","\uFDD1'script"),cljs.core.hash_map("\uFDD0'line",499,"\uFDD0'column",11))))].join('')));
}
var G__13663__13664 = cljs.core.seq.call(null,script);
if(G__13663__13664)
{var message__13665 = cljs.core.first.call(null,G__13663__13664);
var G__13663__13666 = G__13663__13664;
while(true){
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,app),message__13665);
var temp__4425__auto____13667 = cljs.core.next.call(null,G__13663__13666);
if(temp__4425__auto____13667)
{var G__13663__13668 = temp__4425__auto____13667;
{
var G__13669 = cljs.core.first.call(null,G__13663__13668);
var G__13670 = G__13663__13668;
message__13665 = G__13669;
G__13663__13666 = G__13670;
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
io.pedestal.app.consume_output_queue = (function consume_output_queue(out_queue,in_queue,services_fn){
return io.pedestal.app.protocols.take_message.call(null,out_queue,(function (message){
services_fn.call(null,message,in_queue);
return consume_output_queue.call(null,out_queue,in_queue,services_fn);
}));
});
io.pedestal.app.consume_output = (function consume_output(app,services_fn){
return io.pedestal.app.consume_output_queue.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,app),(new cljs.core.Keyword("\uFDD0'input")).call(null,app),services_fn);
});
io.pedestal.app.consume_effects = (function consume_effects(app,services_fn){
return io.pedestal.app.consume_output.call(null,app,services_fn);
});
