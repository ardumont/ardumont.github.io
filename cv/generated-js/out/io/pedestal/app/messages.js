goog.provide('io.pedestal.app.messages');
goog.require('cljs.core');
goog.require('clojure.set');
/**
* A keyword used as a key in a message to indicate that message's topic.
* 
* Example Message:
* {msg/topic :todo, msg/type :clear-completed}
*/
io.pedestal.app.messages.topic = "\uFDD0'io.pedestal.app.messages/topic";
/**
* A keyword used as a key in a message to indicate that message's type.
* 
* Example Message:
* {msg/topic :todo, msg/type :clear-completed}
*/
io.pedestal.app.messages.type = "\uFDD0'io.pedestal.app.messages/type";
/**
* A special message type set when initializing a model. Whenever the
* type is init, a :value key will also be present and will contain
* the :init value from that topic in your app's dataflow.
* 
* Example Message:
* {msg/topic :todo, msg/type msg/init, :value {}}
*/
io.pedestal.app.messages.init = "\uFDD0'io.pedestal.app.messages/init";
io.pedestal.app.messages.app_model = "\uFDD0'io.pedestal.app.messages/app-model";
/**
* A namespace used as the namespace of message params.
*/
io.pedestal.app.messages.param_ns = (function (){var dummy_kw__12006 = "\uFDD0'io.pedestal.app.messages/dummy";
return [cljs.core.str(cljs.core.namespace.call(null,dummy_kw__12006)),cljs.core.str(".param")].join('');
})();
/**
* Return a keyword with name `kw` which can be used mark a missing
* value in a message.
* 
* Example:
* (param :age)
* ; -> :io.pedestal.app.messages.param/age
*/
io.pedestal.app.messages.param = (function param(kw){
return cljs.core.keyword.call(null,io.pedestal.app.messages.param_ns,cljs.core.name.call(null,kw));
});
/**
* Assoc message-type as type in a message, unless a type key is already present.
*/
io.pedestal.app.messages.add_message_type = (function add_message_type(message_type,message){
if(cljs.core.truth_(io.pedestal.app.messages.type.call(null,message)))
{return message;
} else
{return cljs.core.assoc.call(null,message,io.pedestal.app.messages.type,message_type);
}
});
/**
* Return if a key is both a symbol and is namespaced with param-namespace.
*/
io.pedestal.app.messages.param_keyword_present_QMARK_ = (function param_keyword_present_QMARK_(key){
var and__4236__auto____12008 = cljs.core.keyword_QMARK_.call(null,key);
if(and__4236__auto____12008)
{return cljs.core._EQ_.call(null,io.pedestal.app.messages.param_ns,cljs.core.namespace.call(null,key));
} else
{return and__4236__auto____12008;
}
});
/**
* Strip the namespace from keyword kw.
*/
io.pedestal.app.messages.strip_ns = (function strip_ns(kw){
return cljs.core.keyword.call(null,cljs.core.name.call(null,kw));
});
/**
* Assert every key of param-map is a param namespaced key.
*/
io.pedestal.app.messages.assert_only_param_keys = (function assert_only_param_keys(param_map){
var keys__12010 = cljs.core.keys.call(null,param_map);
if(cljs.core.every_QMARK_.call(null,(function (key){
return io.pedestal.app.messages.param_keyword_present_QMARK_.call(null,key);
}),keys__12010))
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Every key of param-map must be a namespaced param keyword (see io.pedestal.app.messages/param). These keys are invalid: "),cljs.core.str(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (key){
return cljs.core.not.call(null,io.pedestal.app.messages.param_keyword_present_QMARK_.call(null,key));
}),keys__12010)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'every?",cljs.core.with_meta(cljs.core.list("\uFDD1'fn",cljs.core.vec(["\uFDD1'key"]),cljs.core.with_meta(cljs.core.list("\uFDD1'param-keyword-present?","\uFDD1'key"),cljs.core.hash_map("\uFDD0'line",81,"\uFDD0'column",24))),cljs.core.hash_map("\uFDD0'line",81,"\uFDD0'column",14)),"\uFDD1'keys"),cljs.core.hash_map("\uFDD0'line",81,"\uFDD0'column",6))))].join('')));
}
});
/**
* Replace parameter key-value pairs in a message with the appropriate values fromm param-map.
*/
io.pedestal.app.messages.fill_params_msg = (function fill_params_msg(param_map,msg){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__12019){
var vec__12020__12021 = p__12019;
var k__12022 = cljs.core.nth.call(null,vec__12020__12021,0,null);
var v__12023 = cljs.core.nth.call(null,vec__12020__12021,1,null);
var original_pair__12024 = vec__12020__12021;
var temp__4423__auto____12025 = k__12022.call(null,param_map);
if(cljs.core.truth_(temp__4423__auto____12025))
{var param_val__12026 = temp__4423__auto____12025;
return cljs.core.PersistentVector.fromArray([io.pedestal.app.messages.strip_ns.call(null,k__12022),param_val__12026], true);
} else
{return original_pair__12024;
}
}),msg));
});
/**
* Replace parameter key-value pairs in messages with the appropriate values from param-map.
* 
* Note: asserts that every key in param-map is a namespaced param key (see
* io.pedestal.app.messages/param).
* 
* Example:
* (fill-params {(msg/param :foo) :bar} [{msg/topic :some-model (msg/param :foo) {}}])
* ; -> [{msg/topic :some-model :foo :bar}]
*/
io.pedestal.app.messages.fill_params = (function fill_params(param_map,messages){
io.pedestal.app.messages.assert_only_param_keys.call(null,param_map);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.fill_params_msg,param_map),messages);
});
/**
* Return all distinct params present as keys in messages.
* 
* Example:
* (message-params [{(msg/param :name) "John", (msg/param :age) 42}, {(msg/param :name) "Joe"}])
* ; -> ((msg/param :name) (msg/param :age))
*/
io.pedestal.app.messages.message_params = (function message_params(msgs){
return cljs.core.distinct.call(null,(function (){var iter__8277__auto____12092 = (function iter__12060(s__12061){
return (new cljs.core.LazySeq(null,false,(function (){
var s__12061__12078 = s__12061;
while(true){
var temp__4425__auto____12079 = cljs.core.seq.call(null,s__12061__12078);
if(temp__4425__auto____12079)
{var xs__4977__auto____12080 = temp__4425__auto____12079;
var msg__12081 = cljs.core.first.call(null,xs__4977__auto____12080);
var iterys__8275__auto____12090 = ((function (s__12061__12078,msg__12081,xs__4977__auto____12080,temp__4425__auto____12079){
return (function iter__12062(s__12063){
return (new cljs.core.LazySeq(null,false,((function (s__12061__12078,msg__12081,xs__4977__auto____12080,temp__4425__auto____12079){
return (function (){
var s__12063__12086 = s__12063;
while(true){
var temp__4425__auto____12087 = cljs.core.seq.call(null,s__12063__12086);
if(temp__4425__auto____12087)
{var xs__4977__auto____12088 = temp__4425__auto____12087;
var key__12089 = cljs.core.first.call(null,xs__4977__auto____12088);
if(cljs.core.truth_(io.pedestal.app.messages.param_keyword_present_QMARK_.call(null,key__12089)))
{return cljs.core.cons.call(null,key__12089,iter__12062.call(null,cljs.core.rest.call(null,s__12063__12086)));
} else
{{
var G__12093 = cljs.core.rest.call(null,s__12063__12086);
s__12063__12086 = G__12093;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__12061__12078,msg__12081,xs__4977__auto____12080,temp__4425__auto____12079))
,null));
});})(s__12061__12078,msg__12081,xs__4977__auto____12080,temp__4425__auto____12079))
;
var fs__8276__auto____12091 = cljs.core.seq.call(null,iterys__8275__auto____12090.call(null,cljs.core.keys.call(null,msg__12081)));
if(fs__8276__auto____12091)
{return cljs.core.concat.call(null,fs__8276__auto____12091,iter__12060.call(null,cljs.core.rest.call(null,s__12061__12078)));
} else
{{
var G__12094 = cljs.core.rest.call(null,s__12061__12078);
s__12061__12078 = G__12094;
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
return iter__8277__auto____12092.call(null,msgs);
})());
});
/**
* Return mp where every key has been turned into a param.
* 
* Example:
* (keys-to-param-keys {:age 42, :name "John"})
* ; -> {(msg/param :age) 42, (msg/param :name) "John")
*/
io.pedestal.app.messages.keys_to_param_keys = (function keys_to_param_keys(mp){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__12100){
var vec__12101__12102 = p__12100;
var k__12103 = cljs.core.nth.call(null,vec__12101__12102,0,null);
var v__12104 = cljs.core.nth.call(null,vec__12101__12102,1,null);
return cljs.core.PersistentVector.fromArray([io.pedestal.app.messages.param.call(null,k__12103),v__12104], true);
}),mp));
});
/**
* Populate each message in messages with the appropriate message-type and
* parameters from input-map (if provided).
* 
* Note: asserts that input-map contains an entry for every param
* keyword in messages.
* 
* Example:
* (fill :set-age
* [{msg/topic :person, :id person-id, (param :age) {}}]
* {:age 42})
* ; -> [{topic :person msg/type :set-age :age 42 :id person-id}]
*/
io.pedestal.app.messages.fill = (function() {
var fill = null;
var fill__2 = (function (message_type,messages){
return fill.call(null,message_type,messages,cljs.core.ObjMap.EMPTY);
});
var fill__3 = (function (message_type,messages,input_map){
var missing_keys__12108 = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.map.call(null,cljs.core.name,io.pedestal.app.messages.message_params.call(null,messages))));
var input_keys__12109 = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.keys.call(null,input_map)));
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,missing_keys__12108,input_keys__12109)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Missing keys "),cljs.core.str(missing_keys__12108),cljs.core.str(" is not a subset of "),cljs.core.str(input_keys__12109),cljs.core.str(".")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'empty?",cljs.core.with_meta(cljs.core.list("\uFDD1'set/difference","\uFDD1'missing-keys","\uFDD1'input-keys"),cljs.core.hash_map("\uFDD0'line",145,"\uFDD0'column",24))),cljs.core.hash_map("\uFDD0'line",145,"\uFDD0'column",16))))].join('')));
}
var messages__12110 = (cljs.core.truth_(message_type)?cljs.core.map.call(null,cljs.core.partial.call(null,io.pedestal.app.messages.add_message_type,message_type),messages):messages);
return io.pedestal.app.messages.fill_params.call(null,io.pedestal.app.messages.keys_to_param_keys.call(null,input_map),messages__12110);
});
fill = function(message_type,messages,input_map){
switch(arguments.length){
case 2:
return fill__2.call(this,message_type,messages);
case 3:
return fill__3.call(this,message_type,messages,input_map);
}
throw('Invalid arity: ' + arguments.length);
};
fill.cljs$lang$arity$2 = fill__2;
fill.cljs$lang$arity$3 = fill__3;
return fill;
})()
;
