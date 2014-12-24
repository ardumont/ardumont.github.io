goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var G__24102__24103 = cljs.core.seq.call(null,cljs.core._lookup.call(null,cljs.core.deref.call(null,io.pedestal.app.util.observers.listeners),topic,null));
if(G__24102__24103)
{var f__24104 = cljs.core.first.call(null,G__24102__24103);
var G__24102__24105 = G__24102__24103;
while(true){
f__24104.call(null,message);
var temp__4092__auto____24106 = cljs.core.next.call(null,G__24102__24105);
if(temp__4092__auto____24106)
{var G__24102__24107 = temp__4092__auto____24106;
{
var G__24108 = cljs.core.first.call(null,G__24102__24107);
var G__24109 = G__24102__24107;
f__24104 = G__24108;
G__24102__24105 = G__24109;
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
io.pedestal.app.util.observers.subscribe = (function subscribe(topic,f){
return cljs.core.swap_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.update_in,cljs.core.PersistentVector.fromArray([topic], true),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),f);
});
io.pedestal.app.util.observers.clear = (function clear(){
return cljs.core.reset_BANG_.call(null,io.pedestal.app.util.observers.listeners,cljs.core.ObjMap.EMPTY);
});
