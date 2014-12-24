goog.provide('io.pedestal.app');
goog.require('cljs.core');
goog.require('io.pedestal.app.tree');
goog.require('io.pedestal.app.queue');
goog.require('io.pedestal.app.messages');
goog.require('io.pedestal.app.protocols');
/**
* Given an input map, return the keys of all inputs which have changed.
*/
io.pedestal.app.changed_inputs = (function changed_inputs(inputs){
return cljs.core.set.call(null,cljs.core.keep.call(null,(function (p__24115){
var vec__24116__24117 = p__24115;
var k__24118 = cljs.core.nth.call(null,vec__24116__24117,0,null);
var v__24119 = cljs.core.nth.call(null,vec__24116__24117,1,null);
if(cljs.core.not_EQ_.call(null,(new cljs.core.Keyword("\uFDD0'old")).call(null,v__24119),(new cljs.core.Keyword("\uFDD0'new")).call(null,v__24119)))
{} else
{}
return k__24118;
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
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,(function (p__24125){
var vec__24126__24127 = p__24125;
var k__24128 = cljs.core.nth.call(null,vec__24126__24127,0,null);
var v__24129 = cljs.core.nth.call(null,vec__24126__24127,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'node-create",cljs.core.PersistentVector.fromArray([k__24128], true),"\uFDD0'map"], true),cljs.core.PersistentVector.fromArray(["\uFDD0'value",cljs.core.PersistentVector.fromArray([k__24128], true),null,(new cljs.core.Keyword("\uFDD0'new")).call(null,v__24129)], true)], true);
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
var view_names__24141 = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__24136){
var vec__24137__24138 = p__24136;
var k__24139 = cljs.core.nth.call(null,vec__24137__24138,0,null);
var v__24140 = cljs.core.nth.call(null,vec__24137__24138,1,null);
return cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,v__24140),input_name);
}),views));
if(cljs.core.empty_QMARK_.call(null,view_names__24141))
{return cljs.core.PersistentHashSet.fromArray([io.pedestal.app.generate_kw.call(null,"view-",input_name)]);
} else
{return cljs.core.set.call(null,view_names__24141);
}
});
io.pedestal.app.emitters_for_input = (function emitters_for_input(emitters,input){
if((function (){var and__3941__auto____24148 = cljs.core.empty_QMARK_.call(null,emitters);
if(and__3941__auto____24148)
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'type")).call(null,input),"\uFDD0'view");
} else
{return and__3941__auto____24148;
}
})())
{return cljs.core.PersistentHashSet.fromArray(["\uFDD0'io.pedestal.app/default-emitter"]);
} else
{return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__24149){
var vec__24150__24151 = p__24149;
var k__24152 = cljs.core.nth.call(null,vec__24150__24151,0,null);
var v__24153 = cljs.core.nth.call(null,vec__24150__24151,1,null);
return cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,v__24153),(new cljs.core.Keyword("\uFDD0'k")).call(null,input));
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
var temp__4090__auto____24161 = cljs.core._lookup.call(null,existing,n,null);
if(cljs.core.truth_(temp__4090__auto____24161))
{var e__24162 = temp__4090__auto____24161;
return cljs.core.assoc.call(null,a,n,e__24162);
} else
{return cljs.core.assoc.call(null,a,n,cljs.core.ObjMap.fromObject(["\uFDD0'fn","\uFDD0'input"],{"\uFDD0'fn":default_fn,"\uFDD0'input":cljs.core.set.call(null,cljs.core.keep.call(null,(function (p__24163){
var vec__24164__24165 = p__24163;
var k__24166 = cljs.core.nth.call(null,vec__24164__24165,0,null);
var v__24167 = cljs.core.nth.call(null,vec__24164__24165,1,null);
if(cljs.core.contains_QMARK_.call(null,v__24167,n))
{return k__24166;
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
var map__24240__24241 = description;
var map__24240__24242 = ((cljs.core.seq_QMARK_.call(null,map__24240__24241))?cljs.core.apply.call(null,cljs.core.hash_map,map__24240__24241):map__24240__24241);
var emitters__24243 = cljs.core._lookup.call(null,map__24240__24242,"\uFDD0'emitters",null);
var feedback__24244 = cljs.core._lookup.call(null,map__24240__24242,"\uFDD0'feedback",null);
var views__24245 = cljs.core._lookup.call(null,map__24240__24242,"\uFDD0'views",null);
var output__24246 = cljs.core._lookup.call(null,map__24240__24242,"\uFDD0'output",null);
var models__24247 = cljs.core._lookup.call(null,map__24240__24242,"\uFDD0'models",null);
var input__GT_views__24248 = cljs.core.reduce.call(null,(function (a,k){
return cljs.core.assoc.call(null,a,k,io.pedestal.app.views_for_input.call(null,views__24245,k));
}),cljs.core.ObjMap.EMPTY,cljs.core.keys.call(null,models__24247));
var input__GT_views__24293 = cljs.core.reduce.call(null,(function (a,p__24249){
var vec__24250__24251 = p__24249;
var input__24252 = cljs.core.nth.call(null,vec__24250__24251,0,null);
var view_name__24253 = cljs.core.nth.call(null,vec__24250__24251,1,null);
if(cljs.core.contains_QMARK_.call(null,views__24245,input__24252))
{return cljs.core.update_in.call(null,a,cljs.core.PersistentVector.fromArray([input__24252], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),view_name__24253);
} else
{return a;
}
}),input__GT_views__24248,(function (){var iter__19251__auto____24292 = (function iter__24254(s__24255){
return (new cljs.core.LazySeq(null,false,(function (){
var s__24255__24275 = s__24255;
while(true){
var temp__4092__auto____24276 = cljs.core.seq.call(null,s__24255__24275);
if(temp__4092__auto____24276)
{var xs__4579__auto____24277 = temp__4092__auto____24276;
var vec__24278__24279 = cljs.core.first.call(null,xs__4579__auto____24277);
var k__24280 = cljs.core.nth.call(null,vec__24278__24279,0,null);
var v__24281 = cljs.core.nth.call(null,vec__24278__24279,1,null);
var iterys__19249__auto____24290 = ((function (s__24255__24275,vec__24278__24279,k__24280,v__24281,xs__4579__auto____24277,temp__4092__auto____24276){
return (function iter__24256(s__24257){
return (new cljs.core.LazySeq(null,false,((function (s__24255__24275,vec__24278__24279,k__24280,v__24281,xs__4579__auto____24277,temp__4092__auto____24276){
return (function (){
var s__24257__24286 = s__24257;
while(true){
var temp__4092__auto____24287 = cljs.core.seq.call(null,s__24257__24286);
if(temp__4092__auto____24287)
{var xs__4579__auto____24288 = temp__4092__auto____24287;
var i__24289 = cljs.core.first.call(null,xs__4579__auto____24288);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([i__24289,k__24280], true),iter__24256.call(null,cljs.core.rest.call(null,s__24257__24286)));
} else
{return null;
}
break;
}
});})(s__24255__24275,vec__24278__24279,k__24280,v__24281,xs__4579__auto____24277,temp__4092__auto____24276))
,null));
});})(s__24255__24275,vec__24278__24279,k__24280,v__24281,xs__4579__auto____24277,temp__4092__auto____24276))
;
var fs__19250__auto____24291 = cljs.core.seq.call(null,iterys__19249__auto____24290.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,v__24281)));
if(fs__19250__auto____24291)
{return cljs.core.concat.call(null,fs__19250__auto____24291,iter__24254.call(null,cljs.core.rest.call(null,s__24255__24275)));
} else
{{
var G__24312 = cljs.core.rest.call(null,s__24255__24275);
s__24255__24275 = G__24312;
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
return iter__19251__auto____24292.call(null,views__24245);
})());
var all_view_names__24294 = io.pedestal.app.add_generated_names.call(null,views__24245,input__GT_views__24293);
var input__GT_emitters__24296 = cljs.core.reduce.call(null,(function (a,input){
var ss__24295 = io.pedestal.app.emitters_for_input.call(null,emitters__24243,input);
if(cljs.core.empty_QMARK_.call(null,ss__24295))
{return a;
} else
{return cljs.core.assoc.call(null,a,(new cljs.core.Keyword("\uFDD0'k")).call(null,input),ss__24295);
}
}),cljs.core.ObjMap.EMPTY,cljs.core.concat.call(null,cljs.core.map.call(null,(function (x){
return cljs.core.ObjMap.fromObject(["\uFDD0'k","\uFDD0'type"],{"\uFDD0'k":x,"\uFDD0'type":"\uFDD0'view"});
}),all_view_names__24294),cljs.core.map.call(null,(function (x){
return cljs.core.ObjMap.fromObject(["\uFDD0'k","\uFDD0'type"],{"\uFDD0'k":x,"\uFDD0'type":"\uFDD0'model"});
}),cljs.core.keys.call(null,models__24247))));
var all_emitter_names__24297 = io.pedestal.app.add_generated_names.call(null,emitters__24243,input__GT_emitters__24296);
var default_emitter__24299 = (function (){var or__3943__auto____24298 = (new cljs.core.Keyword("\uFDD0'default-emitter")).call(null,description);
if(cljs.core.truth_(or__3943__auto____24298))
{return or__3943__auto____24298;
} else
{return cljs.core.first.call(null,all_emitter_names__24297);
}
})();
return cljs.core.ObjMap.fromObject(["\uFDD0'default-emitter","\uFDD0'models","\uFDD0'input->output","\uFDD0'input->views","\uFDD0'view->feedback","\uFDD0'input->emitters","\uFDD0'views","\uFDD0'emitters"],{"\uFDD0'default-emitter":default_emitter__24299,"\uFDD0'models":cljs.core.reduce.call(null,(function (a,p__24300){
var vec__24301__24302 = p__24300;
var k__24303 = cljs.core.nth.call(null,vec__24301__24302,0,null);
var v__24304 = cljs.core.nth.call(null,vec__24301__24302,1,null);
return cljs.core.assoc.call(null,a,k__24303,(new cljs.core.Keyword("\uFDD0'fn")).call(null,v__24304));
}),cljs.core.ObjMap.EMPTY,models__24247),"\uFDD0'input->output":cljs.core.reduce.call(null,(function (a,p__24305){
var vec__24306__24307 = p__24305;
var k__24308 = cljs.core.nth.call(null,vec__24306__24307,0,null);
var temp__4090__auto____24309 = cljs.core._lookup.call(null,output__24246,k__24308,null);
if(cljs.core.truth_(temp__4090__auto____24309))
{var o__24310 = temp__4090__auto____24309;
return cljs.core.assoc.call(null,a,k__24308,o__24310);
} else
{return a;
}
}),cljs.core.ObjMap.EMPTY,cljs.core.merge.call(null,models__24247,views__24245)),"\uFDD0'input->views":input__GT_views__24293,"\uFDD0'view->feedback":cljs.core.reduce.call(null,(function (a,v){
return cljs.core.assoc.call(null,a,v,(function (){var or__3943__auto____24311 = cljs.core._lookup.call(null,feedback__24244,v,null);
if(cljs.core.truth_(or__3943__auto____24311))
{return or__3943__auto____24311;
} else
{return io.pedestal.app.default_feedback_fn;
}
})());
}),cljs.core.ObjMap.EMPTY,all_view_names__24294),"\uFDD0'input->emitters":input__GT_emitters__24296,"\uFDD0'views":io.pedestal.app.add_defaults.call(null,io.pedestal.app.default_view_fn,views__24245,all_view_names__24294,input__GT_views__24293),"\uFDD0'emitters":io.pedestal.app.add_defaults.call(null,io.pedestal.app.default_emitter_fn,emitters__24243,all_emitter_names__24297,input__GT_emitters__24296)});
});
io.pedestal.app.model_or_view = (function model_or_view(state,k){
var or__3943__auto____24314 = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'models",k], true));
if(cljs.core.truth_(or__3943__auto____24314))
{return or__3943__auto____24314;
} else
{return cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'views",k], true));
}
});
io.pedestal.app.old_and_new = (function old_and_new(ks,o,n){
return cljs.core.reduce.call(null,(function (a,k){
return cljs.core.assoc.call(null,a,k,cljs.core.ObjMap.fromObject(["\uFDD0'old","\uFDD0'new"],{"\uFDD0'old":io.pedestal.app.model_or_view.call(null,o,k),"\uFDD0'new":io.pedestal.app.model_or_view.call(null,n,k)}));
}),cljs.core.ObjMap.EMPTY,ks);
});
io.pedestal.app.process_app_model_message = (function (){var method_table__19326__auto____24315 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var prefer_table__19327__auto____24316 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var method_cache__19328__auto____24317 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var cached_hierarchy__19329__auto____24318 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
var hierarchy__19330__auto____24319 = cljs.core._lookup.call(null,cljs.core.ObjMap.EMPTY,"\uFDD0'hierarchy",cljs.core.global_hierarchy);
return (new cljs.core.MultiFn("process-app-model-message",(function (state,flow,message){
return io.pedestal.app.messages.type.call(null,message);
}),"\uFDD0'default",hierarchy__19330__auto____24319,method_table__19326__auto____24315,prefer_table__19327__auto____24316,method_cache__19328__auto____24317,cached_hierarchy__19329__auto____24318));
})();
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'default",(function (state,flow,message){
return state;
}));
io.pedestal.app.refresh_emitters = (function refresh_emitters(state,flow){
return cljs.core.reduce.call(null,(function (deltas,p__24328){
var vec__24329__24330 = p__24328;
var emitter_name__24331 = cljs.core.nth.call(null,vec__24329__24330,0,null);
var emitter__24332 = cljs.core.nth.call(null,vec__24329__24330,1,null);
var view_map__24333 = io.pedestal.app.old_and_new.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,emitter__24332),state,state);
var emitter_fn__24334 = (new cljs.core.Keyword("\uFDD0'fn")).call(null,emitter__24332);
return cljs.core.into.call(null,deltas,emitter_fn__24334.call(null,view_map__24333));
}),cljs.core.PersistentVector.EMPTY,(new cljs.core.Keyword("\uFDD0'emitters")).call(null,flow));
});
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'navigate",(function (state,flow,message){
var deltas__24335 = io.pedestal.app.refresh_emitters.call(null,state,flow);
var paths__24336 = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'named-paths",(new cljs.core.Keyword("\uFDD0'name")).call(null,message)], true));
var old_paths__24337 = (new cljs.core.Keyword("\uFDD0'subscriptions")).call(null,state);
return cljs.core.assoc.call(null,state,"\uFDD0'subscriptions",paths__24336,"\uFDD0'deltas",cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p1__24320_SHARP_){
return cljs.core.vector.call(null,"\uFDD0'navigate-node-destroy",p1__24320_SHARP_);
}),old_paths__24337),deltas__24335));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'set-focus",(function (state,flow,message){
return io.pedestal.app.process_app_model_message.call(null,state,flow,cljs.core.assoc.call(null,message,io.pedestal.app.messages.type,"\uFDD0'navigate"));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'subscribe",(function (state,flow,message){
var deltas__24340 = io.pedestal.app.refresh_emitters.call(null,state,flow);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'subscriptions"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),(new cljs.core.Keyword("\uFDD0'paths")).call(null,message)),"\uFDD0'deltas",deltas__24340);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'unsubscribe",(function (state,flow,message){
var paths__24341 = cljs.core.set.call(null,(new cljs.core.Keyword("\uFDD0'paths")).call(null,message));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'subscriptions"], true),(function (s){
return cljs.core.remove.call(null,(function (p1__24338_SHARP_){
return cljs.core.contains_QMARK_.call(null,paths__24341,p1__24338_SHARP_);
}),s);
})),"\uFDD0'deltas",cljs.core.mapv.call(null,(function (p1__24339_SHARP_){
return cljs.core.vector.call(null,"\uFDD0'navigate-node-destroy",p1__24339_SHARP_);
}),paths__24341));
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'add-named-paths",(function (state,flow,message){
var map__24342__24343 = message;
var map__24342__24344 = ((cljs.core.seq_QMARK_.call(null,map__24342__24343))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342__24343):map__24342__24343);
var name__24345 = cljs.core._lookup.call(null,map__24342__24344,"\uFDD0'name",null);
var paths__24346 = cljs.core._lookup.call(null,map__24342__24344,"\uFDD0'paths",null);
return cljs.core.assoc_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'named-paths",name__24345], true),paths__24346);
}));
cljs.core._add_method.call(null,io.pedestal.app.process_app_model_message,"\uFDD0'remove-named-paths",(function (state,flow,message){
var map__24347__24348 = message;
var map__24347__24349 = ((cljs.core.seq_QMARK_.call(null,map__24347__24348))?cljs.core.apply.call(null,cljs.core.hash_map,map__24347__24348):map__24347__24348);
var name__24350 = cljs.core._lookup.call(null,map__24347__24349,"\uFDD0'name",null);
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'named-paths"], true),cljs.core.dissoc,name__24350);
}));
io.pedestal.app.get_receiver = (function get_receiver(message){
var to__24354 = io.pedestal.app.messages.topic.call(null,message);
if(cljs.core.keyword_QMARK_.call(null,to__24354))
{return to__24354;
} else
{var or__3943__auto____24355 = (new cljs.core.Keyword("\uFDD0'node")).call(null,to__24354);
if(cljs.core.truth_(or__3943__auto____24355))
{return or__3943__auto____24355;
} else
{var or__3943__auto____24356 = (new cljs.core.Keyword("\uFDD0'model")).call(null,to__24354);
if(cljs.core.truth_(or__3943__auto____24356))
{return or__3943__auto____24356;
} else
{return (new cljs.core.Keyword("\uFDD0'service")).call(null,to__24354);
}
}
}
});
io.pedestal.app.run_model = (function run_model(state,flow,model_name,message){
if(cljs.core.truth_(cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'models",model_name], true))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Model with name "),cljs.core.str(model_name),cljs.core.str(" does not exist. Message is "),cljs.core.str(message)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'get-in","\uFDD1'flow",cljs.core.vec(["\uFDD0'models","\uFDD1'model-name"])),cljs.core.hash_map("\uFDD0'line",223,"\uFDD0'column",11))))].join('')));
}
var model_fn__24358 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'models",model_name], true));
return cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'models",model_name], true),model_fn__24358,message);
});
io.pedestal.app.run_output = (function run_output(state,old_state,flow,input_name,message){
var output_fn__24364 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->output",input_name], true));
var old_model__24365 = io.pedestal.app.model_or_view.call(null,old_state,input_name);
var new_model__24366 = io.pedestal.app.model_or_view.call(null,state,input_name);
var out__24367 = (cljs.core.truth_(output_fn__24364)?output_fn__24364.call(null,message,old_model__24365,new_model__24366):null);
var out__24368 = ((cljs.core.vector_QMARK_.call(null,out__24367))?cljs.core.ObjMap.fromObject(["\uFDD0'output"],{"\uFDD0'output":out__24367}):out__24367);
if(cljs.core.truth_(out__24368))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,cljs.core.PersistentVector.fromArray(["\uFDD0'output"], true),cljs.core.into,(new cljs.core.Keyword("\uFDD0'output")).call(null,out__24368)),cljs.core.PersistentVector.fromArray(["\uFDD0'feedback"], true),cljs.core.into,(new cljs.core.Keyword("\uFDD0'feedback")).call(null,out__24368));
} else
{return state;
}
});
io.pedestal.app.run_outputs = (function run_outputs(state,old_state,flow,message,modified_inputs){
return cljs.core.reduce.call(null,(function (new_state,p__24373){
var vec__24374__24375 = p__24373;
var input_name__24376 = cljs.core.nth.call(null,vec__24374__24375,0,null);
if(cljs.core.truth_(cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->output",input_name__24376], true))))
{return io.pedestal.app.run_output.call(null,new_state,old_state,flow,input_name__24376,message);
} else
{return new_state;
}
}),state,modified_inputs);
});
io.pedestal.app.topo_sort = (function topo_sort(flow,view_names){
var c__24388 = (function (a,b){
var deps_a__24383 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->views",a], true));
var deps_b__24384 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->views",b], true));
var or__3943__auto____24385 = cljs.core.contains_QMARK_.call(null,deps_a__24383,b);
if(or__3943__auto____24385)
{return or__3943__auto____24385;
} else
{var or__3943__auto____24387 = (function (){var and__3941__auto____24386 = !((deps_a__24383 == null));
if(and__3941__auto____24386)
{return (deps_b__24384 == null);
} else
{return and__3941__auto____24386;
}
})();
if(cljs.core.truth_(or__3943__auto____24387))
{return or__3943__auto____24387;
} else
{return cljs.core._EQ_.call(null,deps_a__24383,deps_b__24384);
}
}
});
return cljs.core.sort.call(null,c__24388,view_names);
});
io.pedestal.app.run_all_views_for_input = (function run_all_views_for_input(state,old_state,flow,view_names){
return cljs.core.reduce.call(null,(function (new_state,view_name){
var view__24398 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'views",view_name], true));
var old_view__24399 = cljs.core.get_in.call(null,old_state,cljs.core.PersistentVector.fromArray(["\uFDD0'views",view_name], true));
var input_map__24400 = io.pedestal.app.old_and_new.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,view__24398),old_state,new_state);
var view_fn__24401 = (new cljs.core.Keyword("\uFDD0'fn")).call(null,view__24398);
var new_view__24406 = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,input_map__24400),1))?(function (){var vec__24402__24403 = cljs.core.first.call(null,input_map__24400);
var k__24404 = cljs.core.nth.call(null,vec__24402__24403,0,null);
var v__24405 = cljs.core.nth.call(null,vec__24402__24403,1,null);
return view_fn__24401.call(null,old_view__24399,k__24404,(new cljs.core.Keyword("\uFDD0'old")).call(null,v__24405),(new cljs.core.Keyword("\uFDD0'new")).call(null,v__24405));
})():view_fn__24401.call(null,old_view__24399,input_map__24400));
return cljs.core.assoc_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0'views",view_name], true),new_view__24406);
}),state,view_names);
});
io.pedestal.app.run_views = (function run_views(state,old_state,flow,input_name,state_key){
var view_names__24412 = io.pedestal.app.topo_sort.call(null,flow,cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'input->views",input_name], true)));
var old_in_state__24413 = cljs.core.get_in.call(null,old_state,cljs.core.PersistentVector.fromArray([state_key,input_name], true));
var new_in_state__24414 = cljs.core.get_in.call(null,state,cljs.core.PersistentVector.fromArray([state_key,input_name], true));
if(!((function (){var or__3943__auto____24415 = cljs.core.empty_QMARK_.call(null,view_names__24412);
if(or__3943__auto____24415)
{return or__3943__auto____24415;
} else
{return cljs.core._EQ_.call(null,old_in_state__24413,new_in_state__24414);
}
})()))
{var new_state__24416 = io.pedestal.app.run_all_views_for_input.call(null,state,old_state,flow,view_names__24412);
return cljs.core.reduce.call(null,(function (s,view_name){
return run_views.call(null,s,state,flow,view_name,"\uFDD0'views");
}),new_state__24416,view_names__24412);
} else
{return state;
}
});
io.pedestal.app.run_feedback = (function run_feedback(state,old_state,flow,modified_inputs){
return cljs.core.reduce.call(null,(function (s,p__24428){
var vec__24429__24431 = p__24428;
var view_name__24432 = cljs.core.nth.call(null,vec__24429__24431,0,null);
var map__24430__24433 = cljs.core.nth.call(null,vec__24429__24431,1,null);
var map__24430__24434 = ((cljs.core.seq_QMARK_.call(null,map__24430__24433))?cljs.core.apply.call(null,cljs.core.hash_map,map__24430__24433):map__24430__24433);
var new__24435 = cljs.core._lookup.call(null,map__24430__24434,"\uFDD0'new",null);
var old__24436 = cljs.core._lookup.call(null,map__24430__24434,"\uFDD0'old",null);
var feedback_fn__24437 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'view->feedback",view_name__24432], true));
var feedback__24438 = feedback_fn__24437.call(null,view_name__24432,old__24436,new__24435);
if(cljs.core.truth_(feedback__24438))
{return cljs.core.update_in.call(null,s,cljs.core.PersistentVector.fromArray(["\uFDD0'feedback"], true),cljs.core.into,feedback__24438);
} else
{return s;
}
}),state,modified_inputs);
});
io.pedestal.app.run_emitters = (function run_emitters(state,old_state,flow,modified_inputs){
var affected_emitters__24445 = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,cljs.core.select_keys.call(null,(new cljs.core.Keyword("\uFDD0'input->emitters")).call(null,flow),cljs.core.keys.call(null,modified_inputs)))));
return cljs.core.reduce.call(null,(function (new_state,emitter_key){
var emitter__24446 = cljs.core.get_in.call(null,flow,cljs.core.PersistentVector.fromArray(["\uFDD0'emitters",emitter_key], true));
var view_map__24447 = io.pedestal.app.old_and_new.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,emitter__24446),old_state,new_state);
var changed_inputs__24448 = cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.select_keys.call(null,modified_inputs,(new cljs.core.Keyword("\uFDD0'input")).call(null,emitter__24446))));
if(!(cljs.core.empty_QMARK_.call(null,changed_inputs__24448)))
{var emitter_fn__24449 = (new cljs.core.Keyword("\uFDD0'fn")).call(null,emitter__24446);
var deltas__24450 = emitter_fn__24449.call(null,view_map__24447,changed_inputs__24448);
return cljs.core.update_in.call(null,new_state,cljs.core.PersistentVector.fromArray(["\uFDD0'deltas"], true),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),deltas__24450);
} else
{return new_state;
}
}),state,affected_emitters__24445);
});
io.pedestal.app.find_modified_inputs = (function find_modified_inputs(type,o,n){
var n_views__24458 = cljs.core._lookup.call(null,n,type,null);
var o_views__24459 = cljs.core._lookup.call(null,o,type,null);
return cljs.core.reduce.call(null,(function (a,p__24460){
var vec__24461__24462 = p__24460;
var k__24463 = cljs.core.nth.call(null,vec__24461__24462,0,null);
var v__24464 = cljs.core.nth.call(null,vec__24461__24462,1,null);
if(cljs.core.not_EQ_.call(null,v__24464,cljs.core._lookup.call(null,o_views__24459,k__24463,null)))
{return cljs.core.assoc.call(null,a,k__24463,cljs.core.ObjMap.fromObject(["\uFDD0'old","\uFDD0'new"],{"\uFDD0'old":cljs.core._lookup.call(null,o_views__24459,k__24463,null),"\uFDD0'new":v__24464}));
} else
{return a;
}
}),cljs.core.ObjMap.EMPTY,n_views__24458);
});
/**
* Starting with the given input message, run the dataflow producing a
* new state.
*/
io.pedestal.app.run_dataflow = (function run_dataflow(state,flow,message){
var old_state__24471 = state;
var model_name__24472 = io.pedestal.app.get_receiver.call(null,message);
var new_state__24473 = io.pedestal.app.run_views.call(null,io.pedestal.app.run_model.call(null,state,flow,model_name__24472,message),old_state__24471,flow,model_name__24472,"\uFDD0'models");
var modified_views__24474 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'views",old_state__24471,new_state__24473);
var modified_models__24475 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'models",old_state__24471,new_state__24473);
var result__24476 = io.pedestal.app.run_emitters.call(null,io.pedestal.app.run_feedback.call(null,new_state__24473,old_state__24471,flow,modified_views__24474),old_state__24471,flow,cljs.core.merge.call(null,modified_views__24474,modified_models__24475));
if(!(cljs.core.empty_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'feedback")).call(null,result__24476))))
{return cljs.core.reduce.call(null,(function (s,message){
return run_dataflow.call(null,cljs.core.assoc.call(null,s,"\uFDD0'feedback",cljs.core.PersistentVector.EMPTY),flow,message);
}),result__24476,(new cljs.core.Keyword("\uFDD0'feedback")).call(null,result__24476));
} else
{return result__24476;
}
});
io.pedestal.app.path_starts_with_QMARK_ = (function path_starts_with_QMARK_(path,prefix){
return cljs.core._EQ_.call(null,cljs.core.take.call(null,cljs.core.count.call(null,prefix),path),prefix);
});
io.pedestal.app.special_ops = cljs.core.ObjMap.fromObject(["\uFDD0'navigate-node-destroy"],{"\uFDD0'navigate-node-destroy":"\uFDD0'node-destroy"});
io.pedestal.app.filter_deltas = (function filter_deltas(state,deltas){
var subscriptions__24490 = (new cljs.core.Keyword("\uFDD0'subscriptions")).call(null,state);
return cljs.core.mapv.call(null,(function (p__24491){
var vec__24492__24493 = p__24491;
var op__24494 = cljs.core.nth.call(null,vec__24492__24493,0,null);
var xs__24495 = cljs.core.nthnext.call(null,vec__24492__24493,1);
var delta__24496 = vec__24492__24493;
if(cljs.core.truth_(io.pedestal.app.special_ops.call(null,op__24494)))
{return cljs.core.apply.call(null,cljs.core.vector,io.pedestal.app.special_ops.call(null,op__24494),xs__24495);
} else
{return delta__24496;
}
}),cljs.core.filter.call(null,(function (p__24497){
var vec__24498__24499 = p__24497;
var op__24500 = cljs.core.nth.call(null,vec__24498__24499,0,null);
var path__24501 = cljs.core.nth.call(null,vec__24498__24499,1,null);
var or__3943__auto____24502 = io.pedestal.app.special_ops.call(null,op__24500);
if(cljs.core.truth_(or__3943__auto____24502))
{return or__3943__auto____24502;
} else
{return cljs.core.some.call(null,(function (s){
return io.pedestal.app.path_starts_with_QMARK_.call(null,path__24501,s);
}),subscriptions__24490);
}
}),cljs.core.mapcat.call(null,io.pedestal.app.tree.expand_map,deltas)));
});
/**
* Using the given flow, process the given message producing a new
* state.
*/
io.pedestal.app.process_message = (function process_message(state,flow,message){
var old_state__24509 = state;
var new_state__24510 = ((cljs.core._EQ_.call(null,io.pedestal.app.messages.topic.call(null,message),io.pedestal.app.messages.app_model))?io.pedestal.app.process_app_model_message.call(null,state,flow,message):io.pedestal.app.run_dataflow.call(null,state,flow,message));
var new_deltas__24511 = io.pedestal.app.filter_deltas.call(null,new_state__24510,(new cljs.core.Keyword("\uFDD0'deltas")).call(null,new_state__24510));
var modified_views__24512 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'views",old_state__24509,new_state__24510);
var modified_models__24513 = io.pedestal.app.find_modified_inputs.call(null,"\uFDD0'models",old_state__24509,new_state__24510);
var result__24514 = io.pedestal.app.run_outputs.call(null,new_state__24510,old_state__24509,flow,message,cljs.core.merge.call(null,modified_views__24512,modified_models__24513));
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,result__24514,"\uFDD0'emitter-deltas",new_deltas__24511),"\uFDD0'deltas");
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
return cljs.core.add_watch.call(null,app,"\uFDD0'output-watcher",(function (_24524,_24525,_,new_state){
var out__24526 = (new cljs.core.Keyword("\uFDD0'output")).call(null,new_state);
var G__24527__24528 = cljs.core.seq.call(null,out__24526);
if(G__24527__24528)
{var message__24529 = cljs.core.first.call(null,G__24527__24528);
var G__24527__24530 = G__24527__24528;
while(true){
io.pedestal.app.protocols.put_message.call(null,output_queue,message__24529);
var temp__4092__auto____24531 = cljs.core.next.call(null,G__24527__24530);
if(temp__4092__auto____24531)
{var G__24527__24532 = temp__4092__auto____24531;
{
var G__24533 = cljs.core.first.call(null,G__24527__24532);
var G__24534 = G__24527__24532;
message__24529 = G__24533;
G__24527__24530 = G__24534;
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
return cljs.core.add_watch.call(null,app,"\uFDD0'app-model-delta-watcher",(function (_24538,_,old_state,new_state){
var deltas__24539 = (new cljs.core.Keyword("\uFDD0'emitter-deltas")).call(null,new_state);
if(!((function (){var or__3943__auto____24540 = cljs.core.empty_QMARK_.call(null,deltas__24539);
if(or__3943__auto____24540)
{return or__3943__auto____24540;
} else
{return cljs.core._EQ_.call(null,(new cljs.core.Keyword("\uFDD0'emitter-deltas")).call(null,old_state),deltas__24539);
}
})()))
{return io.pedestal.app.protocols.put_message.call(null,app_model_queue,cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'deltas"],[io.pedestal.app.messages.app_model,"\uFDD0'deltas",deltas__24539]));
} else
{return null;
}
}));
});
io.pedestal.app.rekey_description = (function rekey_description(description){
var key_map__24549 = cljs.core.ObjMap.fromObject(["\uFDD0'transform","\uFDD0'combine","\uFDD0'emit","\uFDD0'treeify","\uFDD0'effect","\uFDD0'continue","\uFDD0'focus"],{"\uFDD0'transform":"\uFDD0'models","\uFDD0'combine":"\uFDD0'views","\uFDD0'emit":"\uFDD0'emitters","\uFDD0'treeify":"\uFDD0'emitters","\uFDD0'effect":"\uFDD0'output","\uFDD0'continue":"\uFDD0'feedback","\uFDD0'focus":"\uFDD0'navigation"});
var key_values__24550 = cljs.core.vals.call(null,key_map__24549);
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__24551){
var vec__24552__24553 = p__24551;
var k__24554 = cljs.core.nth.call(null,vec__24552__24553,0,null);
var v__24555 = cljs.core.nth.call(null,vec__24552__24553,1,null);
return cljs.core.PersistentVector.fromArray([(function (){var or__3943__auto____24556 = key_map__24549.call(null,k__24554);
if(cljs.core.truth_(or__3943__auto____24556))
{return or__3943__auto____24556;
} else
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([k__24554]),key_values__24550);
}
})(),v__24555], true);
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
var description__24563 = io.pedestal.app.rekey_description.call(null,description);
var app_atom__24564 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'output","\uFDD0'feedback"],{"\uFDD0'output":cljs.core.PersistentVector.EMPTY,"\uFDD0'feedback":cljs.core.PersistentVector.EMPTY}));
var flow__24565 = io.pedestal.app.make_flow.call(null,description__24563);
var input_queue__24566 = io.pedestal.app.queue.queue.call(null,"\uFDD0'input");
var output_queue__24567 = io.pedestal.app.queue.queue.call(null,"\uFDD0'output");
var app_model_queue__24568 = io.pedestal.app.queue.queue.call(null,"\uFDD0'app-model");
io.pedestal.app.receive_input_message.call(null,app_atom__24564,flow__24565,input_queue__24566);
io.pedestal.app.send_output.call(null,app_atom__24564,output_queue__24567);
io.pedestal.app.send_app_model_deltas.call(null,app_atom__24564,app_model_queue__24568);
return cljs.core.ObjMap.fromObject(["\uFDD0'state","\uFDD0'description","\uFDD0'flow","\uFDD0'default-emitter","\uFDD0'input","\uFDD0'output","\uFDD0'app-model"],{"\uFDD0'state":app_atom__24564,"\uFDD0'description":description__24563,"\uFDD0'flow":flow__24565,"\uFDD0'default-emitter":(new cljs.core.Keyword("\uFDD0'default-emitter")).call(null,flow__24565),"\uFDD0'input":input_queue__24566,"\uFDD0'output":output_queue__24567,"\uFDD0'app-model":app_model_queue__24568});
});
io.pedestal.app.create_start_messages = (function create_start_messages(navigation){
return cljs.core.into.call(null,cljs.core.mapv.call(null,(function (p__24581){
var vec__24582__24583 = p__24581;
var name__24584 = cljs.core.nth.call(null,vec__24582__24583,0,null);
var paths__24585 = cljs.core.nth.call(null,vec__24582__24583,1,null);
return cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'paths","\uFDD0'name"],[io.pedestal.app.messages.app_model,"\uFDD0'add-named-paths",paths__24585,name__24584]);
}),cljs.core.remove.call(null,(function (p__24586){
var vec__24587__24588 = p__24586;
var k__24589 = cljs.core.nth.call(null,vec__24587__24588,0,null);
var v__24590 = cljs.core.nth.call(null,vec__24587__24588,1,null);
return cljs.core._EQ_.call(null,k__24589,"\uFDD0'default");
}),navigation)),(function (){var temp__4092__auto____24591 = (new cljs.core.Keyword("\uFDD0'default")).call(null,navigation);
if(cljs.core.truth_(temp__4092__auto____24591))
{var n__24592 = temp__4092__auto____24591;
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'name"],[io.pedestal.app.messages.app_model,"\uFDD0'navigate",n__24592])], true);
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
var map__24611__24612 = app;
var map__24611__24613 = ((cljs.core.seq_QMARK_.call(null,map__24611__24612))?cljs.core.apply.call(null,cljs.core.hash_map,map__24611__24612):map__24611__24612);
var default_emitter__24614 = cljs.core._lookup.call(null,map__24611__24613,"\uFDD0'default-emitter",null);
var flow__24615 = cljs.core._lookup.call(null,map__24611__24613,"\uFDD0'flow",null);
var description__24616 = cljs.core._lookup.call(null,map__24611__24613,"\uFDD0'description",null);
var start_messages__24617 = (cljs.core.truth_(start_messages)?start_messages:(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'navigation")).call(null,description__24616))?io.pedestal.app.create_start_messages.call(null,(new cljs.core.Keyword("\uFDD0'navigation")).call(null,description__24616)):(("\uFDD0'else")?cljs.core.PersistentVector.fromArray([cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'paths"],[io.pedestal.app.messages.app_model,"\uFDD0'subscribe",cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.EMPTY], true)])], true):null)));
var init_messages__24628 = cljs.core.reduce.call(null,(function (a,p__24618){
var vec__24619__24620 = p__24618;
var model_name__24621 = cljs.core.nth.call(null,vec__24619__24620,0,null);
var init_value__24622 = cljs.core.nth.call(null,vec__24619__24620,1,null);
return cljs.core.conj.call(null,a,cljs.core.PersistentArrayMap.fromArrays([io.pedestal.app.messages.topic,io.pedestal.app.messages.type,"\uFDD0'value"],[model_name__24621,io.pedestal.app.messages.init,init_value__24622]));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__24623){
var vec__24624__24625 = p__24623;
var k__24626 = cljs.core.nth.call(null,vec__24624__24625,0,null);
var v__24627 = cljs.core.nth.call(null,vec__24624__24625,1,null);
return cljs.core.PersistentVector.fromArray([k__24626,(new cljs.core.Keyword("\uFDD0'init")).call(null,v__24627)], true);
}),(new cljs.core.Keyword("\uFDD0'models")).call(null,description__24616)));
cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'state")).call(null,app),io.pedestal.app.transact_many,flow__24615,init_messages__24628);
return cljs.core.swap_BANG_.call(null,(new cljs.core.Keyword("\uFDD0'state")).call(null,app),io.pedestal.app.transact_many,flow__24615,start_messages__24617);
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
if((function (){var or__3943__auto____24636 = cljs.core.vector_QMARK_.call(null,script);
if(or__3943__auto____24636)
{return or__3943__auto____24636;
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
var G__24637__24638 = cljs.core.seq.call(null,script);
if(G__24637__24638)
{var message__24639 = cljs.core.first.call(null,G__24637__24638);
var G__24637__24640 = G__24637__24638;
while(true){
io.pedestal.app.protocols.put_message.call(null,(new cljs.core.Keyword("\uFDD0'input")).call(null,app),message__24639);
var temp__4092__auto____24641 = cljs.core.next.call(null,G__24637__24640);
if(temp__4092__auto____24641)
{var G__24637__24642 = temp__4092__auto____24641;
{
var G__24643 = cljs.core.first.call(null,G__24637__24642);
var G__24644 = G__24637__24642;
message__24639 = G__24643;
G__24637__24640 = G__24644;
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
