goog.provide('io.pedestal.app.protocols');
goog.require('cljs.core');
io.pedestal.app.protocols.Activity = {};
io.pedestal.app.protocols.start = (function start(this$){
if((function (){var and__4236__auto____12115 = this$;
if(and__4236__auto____12115)
{return this$.io$pedestal$app$protocols$Activity$start$arity$1;
} else
{return and__4236__auto____12115;
}
})())
{return this$.io$pedestal$app$protocols$Activity$start$arity$1(this$);
} else
{var x__8178__auto____12116 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12117 = (io.pedestal.app.protocols.start[goog.typeOf(x__8178__auto____12116)]);
if(or__4238__auto____12117)
{return or__4238__auto____12117;
} else
{var or__4238__auto____12118 = (io.pedestal.app.protocols.start["_"]);
if(or__4238__auto____12118)
{return or__4238__auto____12118;
} else
{throw cljs.core.missing_protocol.call(null,"Activity.start",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.protocols.stop = (function stop(this$){
if((function (){var and__4236__auto____12123 = this$;
if(and__4236__auto____12123)
{return this$.io$pedestal$app$protocols$Activity$stop$arity$1;
} else
{return and__4236__auto____12123;
}
})())
{return this$.io$pedestal$app$protocols$Activity$stop$arity$1(this$);
} else
{var x__8178__auto____12124 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12125 = (io.pedestal.app.protocols.stop[goog.typeOf(x__8178__auto____12124)]);
if(or__4238__auto____12125)
{return or__4238__auto____12125;
} else
{var or__4238__auto____12126 = (io.pedestal.app.protocols.stop["_"]);
if(or__4238__auto____12126)
{return or__4238__auto____12126;
} else
{throw cljs.core.missing_protocol.call(null,"Activity.stop",this$);
}
}
})().call(null,this$);
}
});
io.pedestal.app.protocols.PutMessage = {};
io.pedestal.app.protocols.put_message = (function put_message(this$,message){
if((function (){var and__4236__auto____12131 = this$;
if(and__4236__auto____12131)
{return this$.io$pedestal$app$protocols$PutMessage$put_message$arity$2;
} else
{return and__4236__auto____12131;
}
})())
{return this$.io$pedestal$app$protocols$PutMessage$put_message$arity$2(this$,message);
} else
{var x__8178__auto____12132 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12133 = (io.pedestal.app.protocols.put_message[goog.typeOf(x__8178__auto____12132)]);
if(or__4238__auto____12133)
{return or__4238__auto____12133;
} else
{var or__4238__auto____12134 = (io.pedestal.app.protocols.put_message["_"]);
if(or__4238__auto____12134)
{return or__4238__auto____12134;
} else
{throw cljs.core.missing_protocol.call(null,"PutMessage.put-message",this$);
}
}
})().call(null,this$,message);
}
});
io.pedestal.app.protocols.TakeMessage = {};
io.pedestal.app.protocols.take_message = (function take_message(this$,f){
if((function (){var and__4236__auto____12139 = this$;
if(and__4236__auto____12139)
{return this$.io$pedestal$app$protocols$TakeMessage$take_message$arity$2;
} else
{return and__4236__auto____12139;
}
})())
{return this$.io$pedestal$app$protocols$TakeMessage$take_message$arity$2(this$,f);
} else
{var x__8178__auto____12140 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____12141 = (io.pedestal.app.protocols.take_message[goog.typeOf(x__8178__auto____12140)]);
if(or__4238__auto____12141)
{return or__4238__auto____12141;
} else
{var or__4238__auto____12142 = (io.pedestal.app.protocols.take_message["_"]);
if(or__4238__auto____12142)
{return or__4238__auto____12142;
} else
{throw cljs.core.missing_protocol.call(null,"TakeMessage.take-message",this$);
}
}
})().call(null,this$,f);
}
});
