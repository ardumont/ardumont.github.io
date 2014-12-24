goog.provide('io.pedestal.app.protocols');
goog.require('cljs.core');
io.pedestal.app.protocols.Activity = {};
io.pedestal.app.protocols.start = (function start(this$){
if((function (){var and__3941__auto____23089 = this$;
if(and__3941__auto____23089)
{return this$.io$pedestal$app$protocols$Activity$start$arity$1;
} else
{return and__3941__auto____23089;
}
})())
{return this$.io$pedestal$app$protocols$Activity$start$arity$1(this$);
} else
{var x__19152__auto____23090 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____23091 = (io.pedestal.app.protocols.start[goog.typeOf(x__19152__auto____23090)]);
if(or__3943__auto____23091)
{return or__3943__auto____23091;
} else
{var or__3943__auto____23092 = (io.pedestal.app.protocols.start["_"]);
if(or__3943__auto____23092)
{return or__3943__auto____23092;
} else
{throw cljs.core.missing_protocol.call(null,"Activity.start",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.protocols.stop = (function stop(this$){
if((function (){var and__3941__auto____23097 = this$;
if(and__3941__auto____23097)
{return this$.io$pedestal$app$protocols$Activity$stop$arity$1;
} else
{return and__3941__auto____23097;
}
})())
{return this$.io$pedestal$app$protocols$Activity$stop$arity$1(this$);
} else
{var x__19152__auto____23098 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____23099 = (io.pedestal.app.protocols.stop[goog.typeOf(x__19152__auto____23098)]);
if(or__3943__auto____23099)
{return or__3943__auto____23099;
} else
{var or__3943__auto____23100 = (io.pedestal.app.protocols.stop["_"]);
if(or__3943__auto____23100)
{return or__3943__auto____23100;
} else
{throw cljs.core.missing_protocol.call(null,"Activity.stop",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.protocols.PutMessage = {};
io.pedestal.app.protocols.put_message = (function put_message(this$,message){
if((function (){var and__3941__auto____23105 = this$;
if(and__3941__auto____23105)
{return this$.io$pedestal$app$protocols$PutMessage$put_message$arity$2;
} else
{return and__3941__auto____23105;
}
})())
{return this$.io$pedestal$app$protocols$PutMessage$put_message$arity$2(this$,message);
} else
{var x__19152__auto____23106 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____23107 = (io.pedestal.app.protocols.put_message[goog.typeOf(x__19152__auto____23106)]);
if(or__3943__auto____23107)
{return or__3943__auto____23107;
} else
{var or__3943__auto____23108 = (io.pedestal.app.protocols.put_message["_"]);
if(or__3943__auto____23108)
{return or__3943__auto____23108;
} else
{throw cljs.core.missing_protocol.call(null,"PutMessage.put-message",this$);
}
}
})().call(null,this$,message);
}
});
io.pedestal.app.protocols.TakeMessage = {};
io.pedestal.app.protocols.take_message = (function take_message(this$,f){
if((function (){var and__3941__auto____23113 = this$;
if(and__3941__auto____23113)
{return this$.io$pedestal$app$protocols$TakeMessage$take_message$arity$2;
} else
{return and__3941__auto____23113;
}
})())
{return this$.io$pedestal$app$protocols$TakeMessage$take_message$arity$2(this$,f);
} else
{var x__19152__auto____23114 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____23115 = (io.pedestal.app.protocols.take_message[goog.typeOf(x__19152__auto____23114)]);
if(or__3943__auto____23115)
{return or__3943__auto____23115;
} else
{var or__3943__auto____23116 = (io.pedestal.app.protocols.take_message["_"]);
if(or__3943__auto____23116)
{return or__3943__auto____23116;
} else
{throw cljs.core.missing_protocol.call(null,"TakeMessage.take-message",this$);
}
}
})().call(null,this$,f);
}
});
