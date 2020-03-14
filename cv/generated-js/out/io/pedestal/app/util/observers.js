goog.provide('io.pedestal.app.util.observers');
goog.require('cljs.core');
io.pedestal.app.util.observers.listeners = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
io.pedestal.app.util.observers.publish = (function publish(topic,message){
var G__13128__13129 = cljs.core.seq.call(null,cljs.core._lookup.call(null,cljs.core.deref.call(null,io.pedestal.app.util.observers.listeners),topic,null));
if(G__13128__13129)
{var f__13130 = cljs.core.first.call(null,G__13128__13129);
var G__13128__13131 = G__13128__13129;
while(true){
f__13130.call(null,message);
var temp__4425__auto____13132 = cljs.core.next.call(null,G__13128__13131);
if(temp__4425__auto____13132)
{var G__13128__13133 = temp__4425__auto____13132;
{
var G__13134 = cljs.core.first.call(null,G__13128__13133);
var G__13135 = G__13128__13133;
f__13130 = G__13134;
G__13128__13131 = G__13135;
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
