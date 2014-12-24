goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__25738 = (((x == null))?null:x);
if((p[goog.typeOf(x__25738)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__25739__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__25739 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__25739__delegate.call(this, array, i, idxs);
};
G__25739.cljs$lang$maxFixedArity = 2;
G__25739.cljs$lang$applyTo = (function (arglist__25740){
var array = cljs.core.first(arglist__25740);
var i = cljs.core.first(cljs.core.next(arglist__25740));
var idxs = cljs.core.rest(cljs.core.next(arglist__25740));
return G__25739__delegate(array, i, idxs);
});
G__25739.cljs$lang$arity$variadic = G__25739__delegate;
return G__25739;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto____25825 = this$;
if(and__3941__auto____25825)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto____25825;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__19152__auto____25826 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25827 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25826)]);
if(or__3943__auto____25827)
{return or__3943__auto____25827;
} else
{var or__3943__auto____25828 = (cljs.core._invoke["_"]);
if(or__3943__auto____25828)
{return or__3943__auto____25828;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto____25829 = this$;
if(and__3941__auto____25829)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto____25829;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__19152__auto____25830 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25831 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25830)]);
if(or__3943__auto____25831)
{return or__3943__auto____25831;
} else
{var or__3943__auto____25832 = (cljs.core._invoke["_"]);
if(or__3943__auto____25832)
{return or__3943__auto____25832;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto____25833 = this$;
if(and__3941__auto____25833)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto____25833;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__19152__auto____25834 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25835 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25834)]);
if(or__3943__auto____25835)
{return or__3943__auto____25835;
} else
{var or__3943__auto____25836 = (cljs.core._invoke["_"]);
if(or__3943__auto____25836)
{return or__3943__auto____25836;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto____25837 = this$;
if(and__3941__auto____25837)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto____25837;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__19152__auto____25838 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25839 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25838)]);
if(or__3943__auto____25839)
{return or__3943__auto____25839;
} else
{var or__3943__auto____25840 = (cljs.core._invoke["_"]);
if(or__3943__auto____25840)
{return or__3943__auto____25840;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto____25841 = this$;
if(and__3941__auto____25841)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto____25841;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__19152__auto____25842 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25843 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25842)]);
if(or__3943__auto____25843)
{return or__3943__auto____25843;
} else
{var or__3943__auto____25844 = (cljs.core._invoke["_"]);
if(or__3943__auto____25844)
{return or__3943__auto____25844;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto____25845 = this$;
if(and__3941__auto____25845)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto____25845;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__19152__auto____25846 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25847 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25846)]);
if(or__3943__auto____25847)
{return or__3943__auto____25847;
} else
{var or__3943__auto____25848 = (cljs.core._invoke["_"]);
if(or__3943__auto____25848)
{return or__3943__auto____25848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto____25849 = this$;
if(and__3941__auto____25849)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto____25849;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__19152__auto____25850 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25851 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25850)]);
if(or__3943__auto____25851)
{return or__3943__auto____25851;
} else
{var or__3943__auto____25852 = (cljs.core._invoke["_"]);
if(or__3943__auto____25852)
{return or__3943__auto____25852;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto____25853 = this$;
if(and__3941__auto____25853)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto____25853;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__19152__auto____25854 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25855 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25854)]);
if(or__3943__auto____25855)
{return or__3943__auto____25855;
} else
{var or__3943__auto____25856 = (cljs.core._invoke["_"]);
if(or__3943__auto____25856)
{return or__3943__auto____25856;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto____25857 = this$;
if(and__3941__auto____25857)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto____25857;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__19152__auto____25858 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25859 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25858)]);
if(or__3943__auto____25859)
{return or__3943__auto____25859;
} else
{var or__3943__auto____25860 = (cljs.core._invoke["_"]);
if(or__3943__auto____25860)
{return or__3943__auto____25860;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto____25861 = this$;
if(and__3941__auto____25861)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto____25861;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__19152__auto____25862 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25863 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25862)]);
if(or__3943__auto____25863)
{return or__3943__auto____25863;
} else
{var or__3943__auto____25864 = (cljs.core._invoke["_"]);
if(or__3943__auto____25864)
{return or__3943__auto____25864;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto____25865 = this$;
if(and__3941__auto____25865)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto____25865;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__19152__auto____25866 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25867 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25866)]);
if(or__3943__auto____25867)
{return or__3943__auto____25867;
} else
{var or__3943__auto____25868 = (cljs.core._invoke["_"]);
if(or__3943__auto____25868)
{return or__3943__auto____25868;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto____25869 = this$;
if(and__3941__auto____25869)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto____25869;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__19152__auto____25870 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25871 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25870)]);
if(or__3943__auto____25871)
{return or__3943__auto____25871;
} else
{var or__3943__auto____25872 = (cljs.core._invoke["_"]);
if(or__3943__auto____25872)
{return or__3943__auto____25872;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto____25873 = this$;
if(and__3941__auto____25873)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto____25873;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__19152__auto____25874 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25875 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25874)]);
if(or__3943__auto____25875)
{return or__3943__auto____25875;
} else
{var or__3943__auto____25876 = (cljs.core._invoke["_"]);
if(or__3943__auto____25876)
{return or__3943__auto____25876;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto____25877 = this$;
if(and__3941__auto____25877)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto____25877;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__19152__auto____25878 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25879 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25878)]);
if(or__3943__auto____25879)
{return or__3943__auto____25879;
} else
{var or__3943__auto____25880 = (cljs.core._invoke["_"]);
if(or__3943__auto____25880)
{return or__3943__auto____25880;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto____25881 = this$;
if(and__3941__auto____25881)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto____25881;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__19152__auto____25882 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25883 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25882)]);
if(or__3943__auto____25883)
{return or__3943__auto____25883;
} else
{var or__3943__auto____25884 = (cljs.core._invoke["_"]);
if(or__3943__auto____25884)
{return or__3943__auto____25884;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto____25885 = this$;
if(and__3941__auto____25885)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto____25885;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__19152__auto____25886 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25887 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25886)]);
if(or__3943__auto____25887)
{return or__3943__auto____25887;
} else
{var or__3943__auto____25888 = (cljs.core._invoke["_"]);
if(or__3943__auto____25888)
{return or__3943__auto____25888;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto____25889 = this$;
if(and__3941__auto____25889)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto____25889;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__19152__auto____25890 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25891 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25890)]);
if(or__3943__auto____25891)
{return or__3943__auto____25891;
} else
{var or__3943__auto____25892 = (cljs.core._invoke["_"]);
if(or__3943__auto____25892)
{return or__3943__auto____25892;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto____25893 = this$;
if(and__3941__auto____25893)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto____25893;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__19152__auto____25894 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25895 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25894)]);
if(or__3943__auto____25895)
{return or__3943__auto____25895;
} else
{var or__3943__auto____25896 = (cljs.core._invoke["_"]);
if(or__3943__auto____25896)
{return or__3943__auto____25896;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto____25897 = this$;
if(and__3941__auto____25897)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto____25897;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__19152__auto____25898 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25899 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25898)]);
if(or__3943__auto____25899)
{return or__3943__auto____25899;
} else
{var or__3943__auto____25900 = (cljs.core._invoke["_"]);
if(or__3943__auto____25900)
{return or__3943__auto____25900;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto____25901 = this$;
if(and__3941__auto____25901)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto____25901;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__19152__auto____25902 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25903 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25902)]);
if(or__3943__auto____25903)
{return or__3943__auto____25903;
} else
{var or__3943__auto____25904 = (cljs.core._invoke["_"]);
if(or__3943__auto____25904)
{return or__3943__auto____25904;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto____25905 = this$;
if(and__3941__auto____25905)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto____25905;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__19152__auto____25906 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____25907 = (cljs.core._invoke[goog.typeOf(x__19152__auto____25906)]);
if(or__3943__auto____25907)
{return or__3943__auto____25907;
} else
{var or__3943__auto____25908 = (cljs.core._invoke["_"]);
if(or__3943__auto____25908)
{return or__3943__auto____25908;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3941__auto____25913 = coll;
if(and__3941__auto____25913)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto____25913;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__19152__auto____25914 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25915 = (cljs.core._count[goog.typeOf(x__19152__auto____25914)]);
if(or__3943__auto____25915)
{return or__3943__auto____25915;
} else
{var or__3943__auto____25916 = (cljs.core._count["_"]);
if(or__3943__auto____25916)
{return or__3943__auto____25916;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto____25921 = coll;
if(and__3941__auto____25921)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto____25921;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__19152__auto____25922 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25923 = (cljs.core._empty[goog.typeOf(x__19152__auto____25922)]);
if(or__3943__auto____25923)
{return or__3943__auto____25923;
} else
{var or__3943__auto____25924 = (cljs.core._empty["_"]);
if(or__3943__auto____25924)
{return or__3943__auto____25924;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto____25929 = coll;
if(and__3941__auto____25929)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto____25929;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__19152__auto____25930 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25931 = (cljs.core._conj[goog.typeOf(x__19152__auto____25930)]);
if(or__3943__auto____25931)
{return or__3943__auto____25931;
} else
{var or__3943__auto____25932 = (cljs.core._conj["_"]);
if(or__3943__auto____25932)
{return or__3943__auto____25932;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto____25941 = coll;
if(and__3941__auto____25941)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto____25941;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__19152__auto____25942 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25943 = (cljs.core._nth[goog.typeOf(x__19152__auto____25942)]);
if(or__3943__auto____25943)
{return or__3943__auto____25943;
} else
{var or__3943__auto____25944 = (cljs.core._nth["_"]);
if(or__3943__auto____25944)
{return or__3943__auto____25944;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto____25945 = coll;
if(and__3941__auto____25945)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto____25945;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__19152__auto____25946 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25947 = (cljs.core._nth[goog.typeOf(x__19152__auto____25946)]);
if(or__3943__auto____25947)
{return or__3943__auto____25947;
} else
{var or__3943__auto____25948 = (cljs.core._nth["_"]);
if(or__3943__auto____25948)
{return or__3943__auto____25948;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3941__auto____25953 = coll;
if(and__3941__auto____25953)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto____25953;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__19152__auto____25954 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25955 = (cljs.core._first[goog.typeOf(x__19152__auto____25954)]);
if(or__3943__auto____25955)
{return or__3943__auto____25955;
} else
{var or__3943__auto____25956 = (cljs.core._first["_"]);
if(or__3943__auto____25956)
{return or__3943__auto____25956;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto____25961 = coll;
if(and__3941__auto____25961)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto____25961;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__19152__auto____25962 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25963 = (cljs.core._rest[goog.typeOf(x__19152__auto____25962)]);
if(or__3943__auto____25963)
{return or__3943__auto____25963;
} else
{var or__3943__auto____25964 = (cljs.core._rest["_"]);
if(or__3943__auto____25964)
{return or__3943__auto____25964;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3941__auto____25969 = coll;
if(and__3941__auto____25969)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto____25969;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__19152__auto____25970 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25971 = (cljs.core._next[goog.typeOf(x__19152__auto____25970)]);
if(or__3943__auto____25971)
{return or__3943__auto____25971;
} else
{var or__3943__auto____25972 = (cljs.core._next["_"]);
if(or__3943__auto____25972)
{return or__3943__auto____25972;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto____25981 = o;
if(and__3941__auto____25981)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto____25981;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__19152__auto____25982 = (((o == null))?null:o);
return (function (){var or__3943__auto____25983 = (cljs.core._lookup[goog.typeOf(x__19152__auto____25982)]);
if(or__3943__auto____25983)
{return or__3943__auto____25983;
} else
{var or__3943__auto____25984 = (cljs.core._lookup["_"]);
if(or__3943__auto____25984)
{return or__3943__auto____25984;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto____25985 = o;
if(and__3941__auto____25985)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto____25985;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__19152__auto____25986 = (((o == null))?null:o);
return (function (){var or__3943__auto____25987 = (cljs.core._lookup[goog.typeOf(x__19152__auto____25986)]);
if(or__3943__auto____25987)
{return or__3943__auto____25987;
} else
{var or__3943__auto____25988 = (cljs.core._lookup["_"]);
if(or__3943__auto____25988)
{return or__3943__auto____25988;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto____25993 = coll;
if(and__3941__auto____25993)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto____25993;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__19152__auto____25994 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____25995 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__19152__auto____25994)]);
if(or__3943__auto____25995)
{return or__3943__auto____25995;
} else
{var or__3943__auto____25996 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____25996)
{return or__3943__auto____25996;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto____26001 = coll;
if(and__3941__auto____26001)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto____26001;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__19152__auto____26002 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26003 = (cljs.core._assoc[goog.typeOf(x__19152__auto____26002)]);
if(or__3943__auto____26003)
{return or__3943__auto____26003;
} else
{var or__3943__auto____26004 = (cljs.core._assoc["_"]);
if(or__3943__auto____26004)
{return or__3943__auto____26004;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto____26009 = coll;
if(and__3941__auto____26009)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto____26009;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__19152__auto____26010 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26011 = (cljs.core._dissoc[goog.typeOf(x__19152__auto____26010)]);
if(or__3943__auto____26011)
{return or__3943__auto____26011;
} else
{var or__3943__auto____26012 = (cljs.core._dissoc["_"]);
if(or__3943__auto____26012)
{return or__3943__auto____26012;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3941__auto____26017 = coll;
if(and__3941__auto____26017)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto____26017;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__19152__auto____26018 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26019 = (cljs.core._key[goog.typeOf(x__19152__auto____26018)]);
if(or__3943__auto____26019)
{return or__3943__auto____26019;
} else
{var or__3943__auto____26020 = (cljs.core._key["_"]);
if(or__3943__auto____26020)
{return or__3943__auto____26020;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3941__auto____26025 = coll;
if(and__3941__auto____26025)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto____26025;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__19152__auto____26026 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26027 = (cljs.core._val[goog.typeOf(x__19152__auto____26026)]);
if(or__3943__auto____26027)
{return or__3943__auto____26027;
} else
{var or__3943__auto____26028 = (cljs.core._val["_"]);
if(or__3943__auto____26028)
{return or__3943__auto____26028;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto____26033 = coll;
if(and__3941__auto____26033)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto____26033;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__19152__auto____26034 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26035 = (cljs.core._disjoin[goog.typeOf(x__19152__auto____26034)]);
if(or__3943__auto____26035)
{return or__3943__auto____26035;
} else
{var or__3943__auto____26036 = (cljs.core._disjoin["_"]);
if(or__3943__auto____26036)
{return or__3943__auto____26036;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto____26041 = coll;
if(and__3941__auto____26041)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto____26041;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__19152__auto____26042 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26043 = (cljs.core._peek[goog.typeOf(x__19152__auto____26042)]);
if(or__3943__auto____26043)
{return or__3943__auto____26043;
} else
{var or__3943__auto____26044 = (cljs.core._peek["_"]);
if(or__3943__auto____26044)
{return or__3943__auto____26044;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto____26049 = coll;
if(and__3941__auto____26049)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto____26049;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__19152__auto____26050 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26051 = (cljs.core._pop[goog.typeOf(x__19152__auto____26050)]);
if(or__3943__auto____26051)
{return or__3943__auto____26051;
} else
{var or__3943__auto____26052 = (cljs.core._pop["_"]);
if(or__3943__auto____26052)
{return or__3943__auto____26052;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto____26057 = coll;
if(and__3941__auto____26057)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto____26057;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__19152__auto____26058 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26059 = (cljs.core._assoc_n[goog.typeOf(x__19152__auto____26058)]);
if(or__3943__auto____26059)
{return or__3943__auto____26059;
} else
{var or__3943__auto____26060 = (cljs.core._assoc_n["_"]);
if(or__3943__auto____26060)
{return or__3943__auto____26060;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto____26065 = o;
if(and__3941__auto____26065)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto____26065;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__19152__auto____26066 = (((o == null))?null:o);
return (function (){var or__3943__auto____26067 = (cljs.core._deref[goog.typeOf(x__19152__auto____26066)]);
if(or__3943__auto____26067)
{return or__3943__auto____26067;
} else
{var or__3943__auto____26068 = (cljs.core._deref["_"]);
if(or__3943__auto____26068)
{return or__3943__auto____26068;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto____26073 = o;
if(and__3941__auto____26073)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto____26073;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__19152__auto____26074 = (((o == null))?null:o);
return (function (){var or__3943__auto____26075 = (cljs.core._deref_with_timeout[goog.typeOf(x__19152__auto____26074)]);
if(or__3943__auto____26075)
{return or__3943__auto____26075;
} else
{var or__3943__auto____26076 = (cljs.core._deref_with_timeout["_"]);
if(or__3943__auto____26076)
{return or__3943__auto____26076;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto____26081 = o;
if(and__3941__auto____26081)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto____26081;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__19152__auto____26082 = (((o == null))?null:o);
return (function (){var or__3943__auto____26083 = (cljs.core._meta[goog.typeOf(x__19152__auto____26082)]);
if(or__3943__auto____26083)
{return or__3943__auto____26083;
} else
{var or__3943__auto____26084 = (cljs.core._meta["_"]);
if(or__3943__auto____26084)
{return or__3943__auto____26084;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto____26089 = o;
if(and__3941__auto____26089)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto____26089;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__19152__auto____26090 = (((o == null))?null:o);
return (function (){var or__3943__auto____26091 = (cljs.core._with_meta[goog.typeOf(x__19152__auto____26090)]);
if(or__3943__auto____26091)
{return or__3943__auto____26091;
} else
{var or__3943__auto____26092 = (cljs.core._with_meta["_"]);
if(or__3943__auto____26092)
{return or__3943__auto____26092;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto____26101 = coll;
if(and__3941__auto____26101)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto____26101;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__19152__auto____26102 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26103 = (cljs.core._reduce[goog.typeOf(x__19152__auto____26102)]);
if(or__3943__auto____26103)
{return or__3943__auto____26103;
} else
{var or__3943__auto____26104 = (cljs.core._reduce["_"]);
if(or__3943__auto____26104)
{return or__3943__auto____26104;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto____26105 = coll;
if(and__3941__auto____26105)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto____26105;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__19152__auto____26106 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26107 = (cljs.core._reduce[goog.typeOf(x__19152__auto____26106)]);
if(or__3943__auto____26107)
{return or__3943__auto____26107;
} else
{var or__3943__auto____26108 = (cljs.core._reduce["_"]);
if(or__3943__auto____26108)
{return or__3943__auto____26108;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto____26113 = coll;
if(and__3941__auto____26113)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto____26113;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__19152__auto____26114 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26115 = (cljs.core._kv_reduce[goog.typeOf(x__19152__auto____26114)]);
if(or__3943__auto____26115)
{return or__3943__auto____26115;
} else
{var or__3943__auto____26116 = (cljs.core._kv_reduce["_"]);
if(or__3943__auto____26116)
{return or__3943__auto____26116;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto____26121 = o;
if(and__3941__auto____26121)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto____26121;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__19152__auto____26122 = (((o == null))?null:o);
return (function (){var or__3943__auto____26123 = (cljs.core._equiv[goog.typeOf(x__19152__auto____26122)]);
if(or__3943__auto____26123)
{return or__3943__auto____26123;
} else
{var or__3943__auto____26124 = (cljs.core._equiv["_"]);
if(or__3943__auto____26124)
{return or__3943__auto____26124;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto____26129 = o;
if(and__3941__auto____26129)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto____26129;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__19152__auto____26130 = (((o == null))?null:o);
return (function (){var or__3943__auto____26131 = (cljs.core._hash[goog.typeOf(x__19152__auto____26130)]);
if(or__3943__auto____26131)
{return or__3943__auto____26131;
} else
{var or__3943__auto____26132 = (cljs.core._hash["_"]);
if(or__3943__auto____26132)
{return or__3943__auto____26132;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto____26137 = o;
if(and__3941__auto____26137)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto____26137;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__19152__auto____26138 = (((o == null))?null:o);
return (function (){var or__3943__auto____26139 = (cljs.core._seq[goog.typeOf(x__19152__auto____26138)]);
if(or__3943__auto____26139)
{return or__3943__auto____26139;
} else
{var or__3943__auto____26140 = (cljs.core._seq["_"]);
if(or__3943__auto____26140)
{return or__3943__auto____26140;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto____26145 = coll;
if(and__3941__auto____26145)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto____26145;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__19152__auto____26146 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26147 = (cljs.core._rseq[goog.typeOf(x__19152__auto____26146)]);
if(or__3943__auto____26147)
{return or__3943__auto____26147;
} else
{var or__3943__auto____26148 = (cljs.core._rseq["_"]);
if(or__3943__auto____26148)
{return or__3943__auto____26148;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto____26153 = coll;
if(and__3941__auto____26153)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto____26153;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__19152__auto____26154 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26155 = (cljs.core._sorted_seq[goog.typeOf(x__19152__auto____26154)]);
if(or__3943__auto____26155)
{return or__3943__auto____26155;
} else
{var or__3943__auto____26156 = (cljs.core._sorted_seq["_"]);
if(or__3943__auto____26156)
{return or__3943__auto____26156;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto____26161 = coll;
if(and__3941__auto____26161)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto____26161;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__19152__auto____26162 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26163 = (cljs.core._sorted_seq_from[goog.typeOf(x__19152__auto____26162)]);
if(or__3943__auto____26163)
{return or__3943__auto____26163;
} else
{var or__3943__auto____26164 = (cljs.core._sorted_seq_from["_"]);
if(or__3943__auto____26164)
{return or__3943__auto____26164;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto____26169 = coll;
if(and__3941__auto____26169)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto____26169;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__19152__auto____26170 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26171 = (cljs.core._entry_key[goog.typeOf(x__19152__auto____26170)]);
if(or__3943__auto____26171)
{return or__3943__auto____26171;
} else
{var or__3943__auto____26172 = (cljs.core._entry_key["_"]);
if(or__3943__auto____26172)
{return or__3943__auto____26172;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto____26177 = coll;
if(and__3941__auto____26177)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto____26177;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__19152__auto____26178 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26179 = (cljs.core._comparator[goog.typeOf(x__19152__auto____26178)]);
if(or__3943__auto____26179)
{return or__3943__auto____26179;
} else
{var or__3943__auto____26180 = (cljs.core._comparator["_"]);
if(or__3943__auto____26180)
{return or__3943__auto____26180;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto____26185 = o;
if(and__3941__auto____26185)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto____26185;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__19152__auto____26186 = (((o == null))?null:o);
return (function (){var or__3943__auto____26187 = (cljs.core._pr_seq[goog.typeOf(x__19152__auto____26186)]);
if(or__3943__auto____26187)
{return or__3943__auto____26187;
} else
{var or__3943__auto____26188 = (cljs.core._pr_seq["_"]);
if(or__3943__auto____26188)
{return or__3943__auto____26188;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto____26193 = d;
if(and__3941__auto____26193)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto____26193;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__19152__auto____26194 = (((d == null))?null:d);
return (function (){var or__3943__auto____26195 = (cljs.core._realized_QMARK_[goog.typeOf(x__19152__auto____26194)]);
if(or__3943__auto____26195)
{return or__3943__auto____26195;
} else
{var or__3943__auto____26196 = (cljs.core._realized_QMARK_["_"]);
if(or__3943__auto____26196)
{return or__3943__auto____26196;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto____26201 = this$;
if(and__3941__auto____26201)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto____26201;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__19152__auto____26202 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____26203 = (cljs.core._notify_watches[goog.typeOf(x__19152__auto____26202)]);
if(or__3943__auto____26203)
{return or__3943__auto____26203;
} else
{var or__3943__auto____26204 = (cljs.core._notify_watches["_"]);
if(or__3943__auto____26204)
{return or__3943__auto____26204;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto____26209 = this$;
if(and__3941__auto____26209)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto____26209;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__19152__auto____26210 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____26211 = (cljs.core._add_watch[goog.typeOf(x__19152__auto____26210)]);
if(or__3943__auto____26211)
{return or__3943__auto____26211;
} else
{var or__3943__auto____26212 = (cljs.core._add_watch["_"]);
if(or__3943__auto____26212)
{return or__3943__auto____26212;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto____26217 = this$;
if(and__3941__auto____26217)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto____26217;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__19152__auto____26218 = (((this$ == null))?null:this$);
return (function (){var or__3943__auto____26219 = (cljs.core._remove_watch[goog.typeOf(x__19152__auto____26218)]);
if(or__3943__auto____26219)
{return or__3943__auto____26219;
} else
{var or__3943__auto____26220 = (cljs.core._remove_watch["_"]);
if(or__3943__auto____26220)
{return or__3943__auto____26220;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto____26225 = coll;
if(and__3941__auto____26225)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto____26225;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__19152__auto____26226 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26227 = (cljs.core._as_transient[goog.typeOf(x__19152__auto____26226)]);
if(or__3943__auto____26227)
{return or__3943__auto____26227;
} else
{var or__3943__auto____26228 = (cljs.core._as_transient["_"]);
if(or__3943__auto____26228)
{return or__3943__auto____26228;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto____26233 = tcoll;
if(and__3941__auto____26233)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto____26233;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__19152__auto____26234 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____26235 = (cljs.core._conj_BANG_[goog.typeOf(x__19152__auto____26234)]);
if(or__3943__auto____26235)
{return or__3943__auto____26235;
} else
{var or__3943__auto____26236 = (cljs.core._conj_BANG_["_"]);
if(or__3943__auto____26236)
{return or__3943__auto____26236;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto____26241 = tcoll;
if(and__3941__auto____26241)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto____26241;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__19152__auto____26242 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____26243 = (cljs.core._persistent_BANG_[goog.typeOf(x__19152__auto____26242)]);
if(or__3943__auto____26243)
{return or__3943__auto____26243;
} else
{var or__3943__auto____26244 = (cljs.core._persistent_BANG_["_"]);
if(or__3943__auto____26244)
{return or__3943__auto____26244;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto____26249 = tcoll;
if(and__3941__auto____26249)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto____26249;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__19152__auto____26250 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____26251 = (cljs.core._assoc_BANG_[goog.typeOf(x__19152__auto____26250)]);
if(or__3943__auto____26251)
{return or__3943__auto____26251;
} else
{var or__3943__auto____26252 = (cljs.core._assoc_BANG_["_"]);
if(or__3943__auto____26252)
{return or__3943__auto____26252;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto____26257 = tcoll;
if(and__3941__auto____26257)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto____26257;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__19152__auto____26258 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____26259 = (cljs.core._dissoc_BANG_[goog.typeOf(x__19152__auto____26258)]);
if(or__3943__auto____26259)
{return or__3943__auto____26259;
} else
{var or__3943__auto____26260 = (cljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____26260)
{return or__3943__auto____26260;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto____26265 = tcoll;
if(and__3941__auto____26265)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto____26265;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__19152__auto____26266 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____26267 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__19152__auto____26266)]);
if(or__3943__auto____26267)
{return or__3943__auto____26267;
} else
{var or__3943__auto____26268 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____26268)
{return or__3943__auto____26268;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto____26273 = tcoll;
if(and__3941__auto____26273)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto____26273;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__19152__auto____26274 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____26275 = (cljs.core._pop_BANG_[goog.typeOf(x__19152__auto____26274)]);
if(or__3943__auto____26275)
{return or__3943__auto____26275;
} else
{var or__3943__auto____26276 = (cljs.core._pop_BANG_["_"]);
if(or__3943__auto____26276)
{return or__3943__auto____26276;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto____26281 = tcoll;
if(and__3941__auto____26281)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto____26281;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__19152__auto____26282 = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto____26283 = (cljs.core._disjoin_BANG_[goog.typeOf(x__19152__auto____26282)]);
if(or__3943__auto____26283)
{return or__3943__auto____26283;
} else
{var or__3943__auto____26284 = (cljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____26284)
{return or__3943__auto____26284;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto____26289 = x;
if(and__3941__auto____26289)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto____26289;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__19152__auto____26290 = (((x == null))?null:x);
return (function (){var or__3943__auto____26291 = (cljs.core._compare[goog.typeOf(x__19152__auto____26290)]);
if(or__3943__auto____26291)
{return or__3943__auto____26291;
} else
{var or__3943__auto____26292 = (cljs.core._compare["_"]);
if(or__3943__auto____26292)
{return or__3943__auto____26292;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto____26297 = coll;
if(and__3941__auto____26297)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto____26297;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__19152__auto____26298 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26299 = (cljs.core._drop_first[goog.typeOf(x__19152__auto____26298)]);
if(or__3943__auto____26299)
{return or__3943__auto____26299;
} else
{var or__3943__auto____26300 = (cljs.core._drop_first["_"]);
if(or__3943__auto____26300)
{return or__3943__auto____26300;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto____26305 = coll;
if(and__3941__auto____26305)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto____26305;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__19152__auto____26306 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26307 = (cljs.core._chunked_first[goog.typeOf(x__19152__auto____26306)]);
if(or__3943__auto____26307)
{return or__3943__auto____26307;
} else
{var or__3943__auto____26308 = (cljs.core._chunked_first["_"]);
if(or__3943__auto____26308)
{return or__3943__auto____26308;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto____26313 = coll;
if(and__3941__auto____26313)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto____26313;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__19152__auto____26314 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26315 = (cljs.core._chunked_rest[goog.typeOf(x__19152__auto____26314)]);
if(or__3943__auto____26315)
{return or__3943__auto____26315;
} else
{var or__3943__auto____26316 = (cljs.core._chunked_rest["_"]);
if(or__3943__auto____26316)
{return or__3943__auto____26316;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto____26321 = coll;
if(and__3941__auto____26321)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto____26321;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__19152__auto____26322 = (((coll == null))?null:coll);
return (function (){var or__3943__auto____26323 = (cljs.core._chunked_next[goog.typeOf(x__19152__auto____26322)]);
if(or__3943__auto____26323)
{return or__3943__auto____26323;
} else
{var or__3943__auto____26324 = (cljs.core._chunked_next["_"]);
if(or__3943__auto____26324)
{return or__3943__auto____26324;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto____26326 = (x === y);
if(or__3943__auto____26326)
{return or__3943__auto____26326;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__26327__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__26328 = y;
var G__26329 = cljs.core.first.call(null,more);
var G__26330 = cljs.core.next.call(null,more);
x = G__26328;
y = G__26329;
more = G__26330;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__26327 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26327__delegate.call(this, x, y, more);
};
G__26327.cljs$lang$maxFixedArity = 2;
G__26327.cljs$lang$applyTo = (function (arglist__26331){
var x = cljs.core.first(arglist__26331);
var y = cljs.core.first(cljs.core.next(arglist__26331));
var more = cljs.core.rest(cljs.core.next(arglist__26331));
return G__26327__delegate(x, y, more);
});
G__26327.cljs$lang$arity$variadic = G__26327__delegate;
return G__26327;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__26332 = null;
var G__26332__2 = (function (o,k){
return null;
});
var G__26332__3 = (function (o,k,not_found){
return not_found;
});
G__26332 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__26332__2.call(this,o,k);
case 3:
return G__26332__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26332;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__26333 = null;
var G__26333__2 = (function (_,f){
return f.call(null);
});
var G__26333__3 = (function (_,f,start){
return start;
});
G__26333 = function(_,f,start){
switch(arguments.length){
case 2:
return G__26333__2.call(this,_,f);
case 3:
return G__26333__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26333;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__26334 = null;
var G__26334__2 = (function (_,n){
return null;
});
var G__26334__3 = (function (_,n,not_found){
return not_found;
});
G__26334 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__26334__2.call(this,_,n);
case 3:
return G__26334__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26334;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3941__auto____26335 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3941__auto____26335)
{return (o.toString() === other.toString());
} else
{return and__3941__auto____26335;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__26348 = cljs.core._count.call(null,cicoll);
if((cnt__26348 === 0))
{return f.call(null);
} else
{var val__26349 = cljs.core._nth.call(null,cicoll,0);
var n__26350 = 1;
while(true){
if((n__26350 < cnt__26348))
{var nval__26351 = f.call(null,val__26349,cljs.core._nth.call(null,cicoll,n__26350));
if(cljs.core.reduced_QMARK_.call(null,nval__26351))
{return cljs.core.deref.call(null,nval__26351);
} else
{{
var G__26360 = nval__26351;
var G__26361 = (n__26350 + 1);
val__26349 = G__26360;
n__26350 = G__26361;
continue;
}
}
} else
{return val__26349;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__26352 = cljs.core._count.call(null,cicoll);
var val__26353 = val;
var n__26354 = 0;
while(true){
if((n__26354 < cnt__26352))
{var nval__26355 = f.call(null,val__26353,cljs.core._nth.call(null,cicoll,n__26354));
if(cljs.core.reduced_QMARK_.call(null,nval__26355))
{return cljs.core.deref.call(null,nval__26355);
} else
{{
var G__26362 = nval__26355;
var G__26363 = (n__26354 + 1);
val__26353 = G__26362;
n__26354 = G__26363;
continue;
}
}
} else
{return val__26353;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__26356 = cljs.core._count.call(null,cicoll);
var val__26357 = val;
var n__26358 = idx;
while(true){
if((n__26358 < cnt__26356))
{var nval__26359 = f.call(null,val__26357,cljs.core._nth.call(null,cicoll,n__26358));
if(cljs.core.reduced_QMARK_.call(null,nval__26359))
{return cljs.core.deref.call(null,nval__26359);
} else
{{
var G__26364 = nval__26359;
var G__26365 = (n__26358 + 1);
val__26357 = G__26364;
n__26358 = G__26365;
continue;
}
}
} else
{return val__26357;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__26378 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__26379 = (arr[0]);
var n__26380 = 1;
while(true){
if((n__26380 < cnt__26378))
{var nval__26381 = f.call(null,val__26379,(arr[n__26380]));
if(cljs.core.reduced_QMARK_.call(null,nval__26381))
{return cljs.core.deref.call(null,nval__26381);
} else
{{
var G__26390 = nval__26381;
var G__26391 = (n__26380 + 1);
val__26379 = G__26390;
n__26380 = G__26391;
continue;
}
}
} else
{return val__26379;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__26382 = arr.length;
var val__26383 = val;
var n__26384 = 0;
while(true){
if((n__26384 < cnt__26382))
{var nval__26385 = f.call(null,val__26383,(arr[n__26384]));
if(cljs.core.reduced_QMARK_.call(null,nval__26385))
{return cljs.core.deref.call(null,nval__26385);
} else
{{
var G__26392 = nval__26385;
var G__26393 = (n__26384 + 1);
val__26383 = G__26392;
n__26384 = G__26393;
continue;
}
}
} else
{return val__26383;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__26386 = arr.length;
var val__26387 = val;
var n__26388 = idx;
while(true){
if((n__26388 < cnt__26386))
{var nval__26389 = f.call(null,val__26387,(arr[n__26388]));
if(cljs.core.reduced_QMARK_.call(null,nval__26389))
{return cljs.core.deref.call(null,nval__26389);
} else
{{
var G__26394 = nval__26389;
var G__26395 = (n__26388 + 1);
val__26387 = G__26394;
n__26388 = G__26395;
continue;
}
}
} else
{return val__26387;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__26396 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__26397 = this;
if(((this__26397.i + 1) < this__26397.a.length))
{return (new cljs.core.IndexedSeq(this__26397.a,(this__26397.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__26398 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__26399 = this;
var c__26400 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__26400 > 0))
{return (new cljs.core.RSeq(coll,(c__26400 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__26401 = this;
var this__26402 = this;
return cljs.core.pr_str.call(null,this__26402);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__26403 = this;
if(cljs.core.counted_QMARK_.call(null,this__26403.a))
{return cljs.core.ci_reduce.call(null,this__26403.a,f,(this__26403.a[this__26403.i]),(this__26403.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__26403.a[this__26403.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__26404 = this;
if(cljs.core.counted_QMARK_.call(null,this__26404.a))
{return cljs.core.ci_reduce.call(null,this__26404.a,f,start,this__26404.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__26405 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__26406 = this;
return (this__26406.a.length - this__26406.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__26407 = this;
return (this__26407.a[this__26407.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__26408 = this;
if(((this__26408.i + 1) < this__26408.a.length))
{return (new cljs.core.IndexedSeq(this__26408.a,(this__26408.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__26409 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__26410 = this;
var i__26411 = (n + this__26410.i);
if((i__26411 < this__26410.a.length))
{return (this__26410.a[i__26411]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__26412 = this;
var i__26413 = (n + this__26412.i);
if((i__26413 < this__26412.a.length))
{return (this__26412.a[i__26413]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__26414 = null;
var G__26414__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__26414__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__26414 = function(array,f,start){
switch(arguments.length){
case 2:
return G__26414__2.call(this,array,f);
case 3:
return G__26414__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26414;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__26415 = null;
var G__26415__2 = (function (array,k){
return (array[k]);
});
var G__26415__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__26415 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__26415__2.call(this,array,k);
case 3:
return G__26415__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26415;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__26416 = null;
var G__26416__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__26416__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__26416 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__26416__2.call(this,array,n);
case 3:
return G__26416__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26416;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__26417 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__26418 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__26419 = this;
var this__26420 = this;
return cljs.core.pr_str.call(null,this__26420);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__26421 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__26422 = this;
return (this__26422.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__26423 = this;
return cljs.core._nth.call(null,this__26423.ci,this__26423.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__26424 = this;
if((this__26424.i > 0))
{return (new cljs.core.RSeq(this__26424.ci,(this__26424.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__26425 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__26426 = this;
return (new cljs.core.RSeq(this__26426.ci,this__26426.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__26427 = this;
return this__26427.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__26431__26432 = coll;
if(G__26431__26432)
{if((function (){var or__3943__auto____26433 = (G__26431__26432.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto____26433)
{return or__3943__auto____26433;
} else
{return G__26431__26432.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__26431__26432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__26431__26432);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__26431__26432);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__26438__26439 = coll;
if(G__26438__26439)
{if((function (){var or__3943__auto____26440 = (G__26438__26439.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____26440)
{return or__3943__auto____26440;
} else
{return G__26438__26439.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__26438__26439.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26438__26439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26438__26439);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__26441 = cljs.core.seq.call(null,coll);
if((s__26441 == null))
{return null;
} else
{return cljs.core._first.call(null,s__26441);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__26446__26447 = coll;
if(G__26446__26447)
{if((function (){var or__3943__auto____26448 = (G__26446__26447.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____26448)
{return or__3943__auto____26448;
} else
{return G__26446__26447.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__26446__26447.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26446__26447);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26446__26447);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__26449 = cljs.core.seq.call(null,coll);
if(!((s__26449 == null)))
{return cljs.core._rest.call(null,s__26449);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__26453__26454 = coll;
if(G__26453__26454)
{if((function (){var or__3943__auto____26455 = (G__26453__26454.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto____26455)
{return or__3943__auto____26455;
} else
{return G__26453__26454.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__26453__26454.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__26453__26454);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__26453__26454);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__26457 = cljs.core.next.call(null,s);
if(!((sn__26457 == null)))
{{
var G__26458 = sn__26457;
s = G__26458;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__26459__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__26460 = conj.call(null,coll,x);
var G__26461 = cljs.core.first.call(null,xs);
var G__26462 = cljs.core.next.call(null,xs);
coll = G__26460;
x = G__26461;
xs = G__26462;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__26459 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26459__delegate.call(this, coll, x, xs);
};
G__26459.cljs$lang$maxFixedArity = 2;
G__26459.cljs$lang$applyTo = (function (arglist__26463){
var coll = cljs.core.first(arglist__26463);
var x = cljs.core.first(cljs.core.next(arglist__26463));
var xs = cljs.core.rest(cljs.core.next(arglist__26463));
return G__26459__delegate(coll, x, xs);
});
G__26459.cljs$lang$arity$variadic = G__26459__delegate;
return G__26459;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__26466 = cljs.core.seq.call(null,coll);
var acc__26467 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__26466))
{return (acc__26467 + cljs.core._count.call(null,s__26466));
} else
{{
var G__26468 = cljs.core.next.call(null,s__26466);
var G__26469 = (acc__26467 + 1);
s__26466 = G__26468;
acc__26467 = G__26469;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__26476__26477 = coll;
if(G__26476__26477)
{if((function (){var or__3943__auto____26478 = (G__26476__26477.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____26478)
{return or__3943__auto____26478;
} else
{return G__26476__26477.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__26476__26477.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__26476__26477);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__26476__26477);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__26479__26480 = coll;
if(G__26479__26480)
{if((function (){var or__3943__auto____26481 = (G__26479__26480.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____26481)
{return or__3943__auto____26481;
} else
{return G__26479__26480.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__26479__26480.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__26479__26480);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__26479__26480);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__26484__delegate = function (coll,k,v,kvs){
while(true){
var ret__26483 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__26485 = ret__26483;
var G__26486 = cljs.core.first.call(null,kvs);
var G__26487 = cljs.core.second.call(null,kvs);
var G__26488 = cljs.core.nnext.call(null,kvs);
coll = G__26485;
k = G__26486;
v = G__26487;
kvs = G__26488;
continue;
}
} else
{return ret__26483;
}
break;
}
};
var G__26484 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26484__delegate.call(this, coll, k, v, kvs);
};
G__26484.cljs$lang$maxFixedArity = 3;
G__26484.cljs$lang$applyTo = (function (arglist__26489){
var coll = cljs.core.first(arglist__26489);
var k = cljs.core.first(cljs.core.next(arglist__26489));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26489)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26489)));
return G__26484__delegate(coll, k, v, kvs);
});
G__26484.cljs$lang$arity$variadic = G__26484__delegate;
return G__26484;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__26492__delegate = function (coll,k,ks){
while(true){
var ret__26491 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__26493 = ret__26491;
var G__26494 = cljs.core.first.call(null,ks);
var G__26495 = cljs.core.next.call(null,ks);
coll = G__26493;
k = G__26494;
ks = G__26495;
continue;
}
} else
{return ret__26491;
}
break;
}
};
var G__26492 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26492__delegate.call(this, coll, k, ks);
};
G__26492.cljs$lang$maxFixedArity = 2;
G__26492.cljs$lang$applyTo = (function (arglist__26496){
var coll = cljs.core.first(arglist__26496);
var k = cljs.core.first(cljs.core.next(arglist__26496));
var ks = cljs.core.rest(cljs.core.next(arglist__26496));
return G__26492__delegate(coll, k, ks);
});
G__26492.cljs$lang$arity$variadic = G__26492__delegate;
return G__26492;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__26500__26501 = o;
if(G__26500__26501)
{if((function (){var or__3943__auto____26502 = (G__26500__26501.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____26502)
{return or__3943__auto____26502;
} else
{return G__26500__26501.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__26500__26501.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__26500__26501);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__26500__26501);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__26505__delegate = function (coll,k,ks){
while(true){
var ret__26504 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__26506 = ret__26504;
var G__26507 = cljs.core.first.call(null,ks);
var G__26508 = cljs.core.next.call(null,ks);
coll = G__26506;
k = G__26507;
ks = G__26508;
continue;
}
} else
{return ret__26504;
}
break;
}
};
var G__26505 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26505__delegate.call(this, coll, k, ks);
};
G__26505.cljs$lang$maxFixedArity = 2;
G__26505.cljs$lang$applyTo = (function (arglist__26509){
var coll = cljs.core.first(arglist__26509);
var k = cljs.core.first(cljs.core.next(arglist__26509));
var ks = cljs.core.rest(cljs.core.next(arglist__26509));
return G__26505__delegate(coll, k, ks);
});
G__26505.cljs$lang$arity$variadic = G__26505__delegate;
return G__26505;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__26511 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__26511);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__26511;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__26513 = (cljs.core.string_hash_cache[k]);
if(!((h__26513 == null)))
{return h__26513;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto____26515 = goog.isString(o);
if(and__3941__auto____26515)
{return check_cache;
} else
{return and__3941__auto____26515;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__26519__26520 = x;
if(G__26519__26520)
{if((function (){var or__3943__auto____26521 = (G__26519__26520.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto____26521)
{return or__3943__auto____26521;
} else
{return G__26519__26520.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__26519__26520.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__26519__26520);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__26519__26520);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__26525__26526 = x;
if(G__26525__26526)
{if((function (){var or__3943__auto____26527 = (G__26525__26526.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto____26527)
{return or__3943__auto____26527;
} else
{return G__26525__26526.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__26525__26526.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__26525__26526);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__26525__26526);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__26531__26532 = x;
if(G__26531__26532)
{if((function (){var or__3943__auto____26533 = (G__26531__26532.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto____26533)
{return or__3943__auto____26533;
} else
{return G__26531__26532.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__26531__26532.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__26531__26532);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__26531__26532);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__26537__26538 = x;
if(G__26537__26538)
{if((function (){var or__3943__auto____26539 = (G__26537__26538.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto____26539)
{return or__3943__auto____26539;
} else
{return G__26537__26538.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__26537__26538.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__26537__26538);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__26537__26538);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__26543__26544 = x;
if(G__26543__26544)
{if((function (){var or__3943__auto____26545 = (G__26543__26544.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto____26545)
{return or__3943__auto____26545;
} else
{return G__26543__26544.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__26543__26544.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__26543__26544);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__26543__26544);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__26549__26550 = x;
if(G__26549__26550)
{if((function (){var or__3943__auto____26551 = (G__26549__26550.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____26551)
{return or__3943__auto____26551;
} else
{return G__26549__26550.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__26549__26550.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__26549__26550);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__26549__26550);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__26555__26556 = x;
if(G__26555__26556)
{if((function (){var or__3943__auto____26557 = (G__26555__26556.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____26557)
{return or__3943__auto____26557;
} else
{return G__26555__26556.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__26555__26556.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__26555__26556);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__26555__26556);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__26561__26562 = x;
if(G__26561__26562)
{if((function (){var or__3943__auto____26563 = (G__26561__26562.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto____26563)
{return or__3943__auto____26563;
} else
{return G__26561__26562.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__26561__26562.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__26561__26562);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__26561__26562);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__26567__26568 = x;
if(G__26567__26568)
{if((function (){var or__3943__auto____26569 = (G__26567__26568.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto____26569)
{return or__3943__auto____26569;
} else
{return G__26567__26568.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__26567__26568.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__26567__26568);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__26567__26568);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__26573__26574 = x;
if(G__26573__26574)
{if(cljs.core.truth_((function (){var or__3943__auto____26575 = null;
if(cljs.core.truth_(or__3943__auto____26575))
{return or__3943__auto____26575;
} else
{return G__26573__26574.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__26573__26574.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__26573__26574);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__26573__26574);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__26576__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__26576 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__26576__delegate.call(this, keyvals);
};
G__26576.cljs$lang$maxFixedArity = 0;
G__26576.cljs$lang$applyTo = (function (arglist__26577){
var keyvals = cljs.core.seq(arglist__26577);;
return G__26576__delegate(keyvals);
});
G__26576.cljs$lang$arity$variadic = G__26576__delegate;
return G__26576;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__26579 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__26579.push(key);
}));
return keys__26579;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__26583 = i;
var j__26584 = j;
var len__26585 = len;
while(true){
if((len__26585 === 0))
{return to;
} else
{(to[j__26584] = (from[i__26583]));
{
var G__26586 = (i__26583 + 1);
var G__26587 = (j__26584 + 1);
var G__26588 = (len__26585 - 1);
i__26583 = G__26586;
j__26584 = G__26587;
len__26585 = G__26588;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__26592 = (i + (len - 1));
var j__26593 = (j + (len - 1));
var len__26594 = len;
while(true){
if((len__26594 === 0))
{return to;
} else
{(to[j__26593] = (from[i__26592]));
{
var G__26595 = (i__26592 - 1);
var G__26596 = (j__26593 - 1);
var G__26597 = (len__26594 - 1);
i__26592 = G__26595;
j__26593 = G__26596;
len__26594 = G__26597;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__26601__26602 = s;
if(G__26601__26602)
{if((function (){var or__3943__auto____26603 = (G__26601__26602.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____26603)
{return or__3943__auto____26603;
} else
{return G__26601__26602.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__26601__26602.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26601__26602);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26601__26602);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__26607__26608 = s;
if(G__26607__26608)
{if((function (){var or__3943__auto____26609 = (G__26607__26608.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____26609)
{return or__3943__auto____26609;
} else
{return G__26607__26608.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__26607__26608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__26607__26608);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__26607__26608);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto____26612 = goog.isString(x);
if(and__3941__auto____26612)
{return !((function (){var or__3943__auto____26613 = (x.charAt(0) === "\uFDD0");
if(or__3943__auto____26613)
{return or__3943__auto____26613;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3941__auto____26612;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto____26615 = goog.isString(x);
if(and__3941__auto____26615)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto____26615;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3941__auto____26617 = goog.isString(x);
if(and__3941__auto____26617)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3941__auto____26617;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto____26622 = cljs.core.fn_QMARK_.call(null,f);
if(or__3943__auto____26622)
{return or__3943__auto____26622;
} else
{var G__26623__26624 = f;
if(G__26623__26624)
{if((function (){var or__3943__auto____26625 = (G__26623__26624.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____26625)
{return or__3943__auto____26625;
} else
{return G__26623__26624.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__26623__26624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__26623__26624);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__26623__26624);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto____26627 = cljs.core.number_QMARK_.call(null,n);
if(and__3941__auto____26627)
{return (n == n.toFixed());
} else
{return and__3941__auto____26627;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3941__auto____26630 = coll;
if(cljs.core.truth_(and__3941__auto____26630))
{var and__3941__auto____26631 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3941__auto____26631)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3941__auto____26631;
}
} else
{return and__3941__auto____26630;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__26640__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__26636 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__26637 = more;
while(true){
var x__26638 = cljs.core.first.call(null,xs__26637);
var etc__26639 = cljs.core.next.call(null,xs__26637);
if(cljs.core.truth_(xs__26637))
{if(cljs.core.contains_QMARK_.call(null,s__26636,x__26638))
{return false;
} else
{{
var G__26641 = cljs.core.conj.call(null,s__26636,x__26638);
var G__26642 = etc__26639;
s__26636 = G__26641;
xs__26637 = G__26642;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__26640 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26640__delegate.call(this, x, y, more);
};
G__26640.cljs$lang$maxFixedArity = 2;
G__26640.cljs$lang$applyTo = (function (arglist__26643){
var x = cljs.core.first(arglist__26643);
var y = cljs.core.first(cljs.core.next(arglist__26643));
var more = cljs.core.rest(cljs.core.next(arglist__26643));
return G__26640__delegate(x, y, more);
});
G__26640.cljs$lang$arity$variadic = G__26640__delegate;
return G__26640;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__26647__26648 = x;
if(G__26647__26648)
{if(cljs.core.truth_((function (){var or__3943__auto____26649 = null;
if(cljs.core.truth_(or__3943__auto____26649))
{return or__3943__auto____26649;
} else
{return G__26647__26648.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__26647__26648.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__26647__26648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__26647__26648);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__26654 = cljs.core.count.call(null,xs);
var yl__26655 = cljs.core.count.call(null,ys);
if((xl__26654 < yl__26655))
{return -1;
} else
{if((xl__26654 > yl__26655))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__26654,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__26656 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3941__auto____26657 = (d__26656 === 0);
if(and__3941__auto____26657)
{return ((n + 1) < len);
} else
{return and__3941__auto____26657;
}
})())
{{
var G__26658 = xs;
var G__26659 = ys;
var G__26660 = len;
var G__26661 = (n + 1);
xs = G__26658;
ys = G__26659;
len = G__26660;
n = G__26661;
continue;
}
} else
{return d__26656;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__26663 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__26663))
{return r__26663;
} else
{if(cljs.core.truth_(r__26663))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__26665 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__26665,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__26665);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto____26671 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____26671)
{var s__26672 = temp__4090__auto____26671;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__26672),cljs.core.next.call(null,s__26672));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__26673 = val;
var coll__26674 = cljs.core.seq.call(null,coll);
while(true){
if(coll__26674)
{var nval__26675 = f.call(null,val__26673,cljs.core.first.call(null,coll__26674));
if(cljs.core.reduced_QMARK_.call(null,nval__26675))
{return cljs.core.deref.call(null,nval__26675);
} else
{{
var G__26676 = nval__26675;
var G__26677 = cljs.core.next.call(null,coll__26674);
val__26673 = G__26676;
coll__26674 = G__26677;
continue;
}
}
} else
{return val__26673;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__26679 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__26679);
return cljs.core.vec.call(null,a__26679);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__26686__26687 = coll;
if(G__26686__26687)
{if((function (){var or__3943__auto____26688 = (G__26686__26687.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____26688)
{return or__3943__auto____26688;
} else
{return G__26686__26687.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__26686__26687.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__26686__26687);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__26686__26687);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__26689__26690 = coll;
if(G__26689__26690)
{if((function (){var or__3943__auto____26691 = (G__26689__26690.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____26691)
{return or__3943__auto____26691;
} else
{return G__26689__26690.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__26689__26690.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__26689__26690);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__26689__26690);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__26692 = this;
return this__26692.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__26693__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__26693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26693__delegate.call(this, x, y, more);
};
G__26693.cljs$lang$maxFixedArity = 2;
G__26693.cljs$lang$applyTo = (function (arglist__26694){
var x = cljs.core.first(arglist__26694);
var y = cljs.core.first(cljs.core.next(arglist__26694));
var more = cljs.core.rest(cljs.core.next(arglist__26694));
return G__26693__delegate(x, y, more);
});
G__26693.cljs$lang$arity$variadic = G__26693__delegate;
return G__26693;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__26695__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__26695 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26695__delegate.call(this, x, y, more);
};
G__26695.cljs$lang$maxFixedArity = 2;
G__26695.cljs$lang$applyTo = (function (arglist__26696){
var x = cljs.core.first(arglist__26696);
var y = cljs.core.first(cljs.core.next(arglist__26696));
var more = cljs.core.rest(cljs.core.next(arglist__26696));
return G__26695__delegate(x, y, more);
});
G__26695.cljs$lang$arity$variadic = G__26695__delegate;
return G__26695;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__26697__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__26697 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26697__delegate.call(this, x, y, more);
};
G__26697.cljs$lang$maxFixedArity = 2;
G__26697.cljs$lang$applyTo = (function (arglist__26698){
var x = cljs.core.first(arglist__26698);
var y = cljs.core.first(cljs.core.next(arglist__26698));
var more = cljs.core.rest(cljs.core.next(arglist__26698));
return G__26697__delegate(x, y, more);
});
G__26697.cljs$lang$arity$variadic = G__26697__delegate;
return G__26697;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__26699__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__26699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26699__delegate.call(this, x, y, more);
};
G__26699.cljs$lang$maxFixedArity = 2;
G__26699.cljs$lang$applyTo = (function (arglist__26700){
var x = cljs.core.first(arglist__26700);
var y = cljs.core.first(cljs.core.next(arglist__26700));
var more = cljs.core.rest(cljs.core.next(arglist__26700));
return G__26699__delegate(x, y, more);
});
G__26699.cljs$lang$arity$variadic = G__26699__delegate;
return G__26699;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__26701__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__26702 = y;
var G__26703 = cljs.core.first.call(null,more);
var G__26704 = cljs.core.next.call(null,more);
x = G__26702;
y = G__26703;
more = G__26704;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__26701 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26701__delegate.call(this, x, y, more);
};
G__26701.cljs$lang$maxFixedArity = 2;
G__26701.cljs$lang$applyTo = (function (arglist__26705){
var x = cljs.core.first(arglist__26705);
var y = cljs.core.first(cljs.core.next(arglist__26705));
var more = cljs.core.rest(cljs.core.next(arglist__26705));
return G__26701__delegate(x, y, more);
});
G__26701.cljs$lang$arity$variadic = G__26701__delegate;
return G__26701;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__26706__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__26707 = y;
var G__26708 = cljs.core.first.call(null,more);
var G__26709 = cljs.core.next.call(null,more);
x = G__26707;
y = G__26708;
more = G__26709;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__26706 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26706__delegate.call(this, x, y, more);
};
G__26706.cljs$lang$maxFixedArity = 2;
G__26706.cljs$lang$applyTo = (function (arglist__26710){
var x = cljs.core.first(arglist__26710);
var y = cljs.core.first(cljs.core.next(arglist__26710));
var more = cljs.core.rest(cljs.core.next(arglist__26710));
return G__26706__delegate(x, y, more);
});
G__26706.cljs$lang$arity$variadic = G__26706__delegate;
return G__26706;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__26711__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__26712 = y;
var G__26713 = cljs.core.first.call(null,more);
var G__26714 = cljs.core.next.call(null,more);
x = G__26712;
y = G__26713;
more = G__26714;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__26711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26711__delegate.call(this, x, y, more);
};
G__26711.cljs$lang$maxFixedArity = 2;
G__26711.cljs$lang$applyTo = (function (arglist__26715){
var x = cljs.core.first(arglist__26715);
var y = cljs.core.first(cljs.core.next(arglist__26715));
var more = cljs.core.rest(cljs.core.next(arglist__26715));
return G__26711__delegate(x, y, more);
});
G__26711.cljs$lang$arity$variadic = G__26711__delegate;
return G__26711;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__26716__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__26717 = y;
var G__26718 = cljs.core.first.call(null,more);
var G__26719 = cljs.core.next.call(null,more);
x = G__26717;
y = G__26718;
more = G__26719;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__26716 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26716__delegate.call(this, x, y, more);
};
G__26716.cljs$lang$maxFixedArity = 2;
G__26716.cljs$lang$applyTo = (function (arglist__26720){
var x = cljs.core.first(arglist__26720);
var y = cljs.core.first(cljs.core.next(arglist__26720));
var more = cljs.core.rest(cljs.core.next(arglist__26720));
return G__26716__delegate(x, y, more);
});
G__26716.cljs$lang$arity$variadic = G__26716__delegate;
return G__26716;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__26721__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__26721 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26721__delegate.call(this, x, y, more);
};
G__26721.cljs$lang$maxFixedArity = 2;
G__26721.cljs$lang$applyTo = (function (arglist__26722){
var x = cljs.core.first(arglist__26722);
var y = cljs.core.first(cljs.core.next(arglist__26722));
var more = cljs.core.rest(cljs.core.next(arglist__26722));
return G__26721__delegate(x, y, more);
});
G__26721.cljs$lang$arity$variadic = G__26721__delegate;
return G__26721;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__26723__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__26723 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26723__delegate.call(this, x, y, more);
};
G__26723.cljs$lang$maxFixedArity = 2;
G__26723.cljs$lang$applyTo = (function (arglist__26724){
var x = cljs.core.first(arglist__26724);
var y = cljs.core.first(cljs.core.next(arglist__26724));
var more = cljs.core.rest(cljs.core.next(arglist__26724));
return G__26723__delegate(x, y, more);
});
G__26723.cljs$lang$arity$variadic = G__26723__delegate;
return G__26723;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__26726 = (n % d);
return cljs.core.fix.call(null,((n - rem__26726) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__26728 = cljs.core.quot.call(null,n,d);
return (n - (d * q__26728));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__26731 = (v - ((v >> 1) & 1431655765));
var v__26732 = ((v__26731 & 858993459) + ((v__26731 >> 2) & 858993459));
return ((((v__26732 + (v__26732 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__26733__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__26734 = y;
var G__26735 = cljs.core.first.call(null,more);
var G__26736 = cljs.core.next.call(null,more);
x = G__26734;
y = G__26735;
more = G__26736;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__26733 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__26733__delegate.call(this, x, y, more);
};
G__26733.cljs$lang$maxFixedArity = 2;
G__26733.cljs$lang$applyTo = (function (arglist__26737){
var x = cljs.core.first(arglist__26737);
var y = cljs.core.first(cljs.core.next(arglist__26737));
var more = cljs.core.rest(cljs.core.next(arglist__26737));
return G__26733__delegate(x, y, more);
});
G__26733.cljs$lang$arity$variadic = G__26733__delegate;
return G__26733;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__26741 = n;
var xs__26742 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____26743 = xs__26742;
if(and__3941__auto____26743)
{return (n__26741 > 0);
} else
{return and__3941__auto____26743;
}
})()))
{{
var G__26744 = (n__26741 - 1);
var G__26745 = cljs.core.next.call(null,xs__26742);
n__26741 = G__26744;
xs__26742 = G__26745;
continue;
}
} else
{return xs__26742;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__26746__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__26747 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__26748 = cljs.core.next.call(null,more);
sb = G__26747;
more = G__26748;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__26746 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26746__delegate.call(this, x, ys);
};
G__26746.cljs$lang$maxFixedArity = 1;
G__26746.cljs$lang$applyTo = (function (arglist__26749){
var x = cljs.core.first(arglist__26749);
var ys = cljs.core.rest(arglist__26749);
return G__26746__delegate(x, ys);
});
G__26746.cljs$lang$arity$variadic = G__26746__delegate;
return G__26746;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__26750__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__26751 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__26752 = cljs.core.next.call(null,more);
sb = G__26751;
more = G__26752;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__26750 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__26750__delegate.call(this, x, ys);
};
G__26750.cljs$lang$maxFixedArity = 1;
G__26750.cljs$lang$applyTo = (function (arglist__26753){
var x = cljs.core.first(arglist__26753);
var ys = cljs.core.rest(arglist__26753);
return G__26750__delegate(x, ys);
});
G__26750.cljs$lang$arity$variadic = G__26750__delegate;
return G__26750;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__26754){
var fmt = cljs.core.first(arglist__26754);
var args = cljs.core.rest(arglist__26754);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__26757 = cljs.core.seq.call(null,x);
var ys__26758 = cljs.core.seq.call(null,y);
while(true){
if((xs__26757 == null))
{return (ys__26758 == null);
} else
{if((ys__26758 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__26757),cljs.core.first.call(null,ys__26758)))
{{
var G__26759 = cljs.core.next.call(null,xs__26757);
var G__26760 = cljs.core.next.call(null,ys__26758);
xs__26757 = G__26759;
ys__26758 = G__26760;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__26761_SHARP_,p2__26762_SHARP_){
return cljs.core.hash_combine.call(null,p1__26761_SHARP_,cljs.core.hash.call(null,p2__26762_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__26766 = 0;
var s__26767 = cljs.core.seq.call(null,m);
while(true){
if(s__26767)
{var e__26768 = cljs.core.first.call(null,s__26767);
{
var G__26769 = ((h__26766 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__26768)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__26768)))) % 4503599627370496);
var G__26770 = cljs.core.next.call(null,s__26767);
h__26766 = G__26769;
s__26767 = G__26770;
continue;
}
} else
{return h__26766;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__26774 = 0;
var s__26775 = cljs.core.seq.call(null,s);
while(true){
if(s__26775)
{var e__26776 = cljs.core.first.call(null,s__26775);
{
var G__26777 = ((h__26774 + cljs.core.hash.call(null,e__26776)) % 4503599627370496);
var G__26778 = cljs.core.next.call(null,s__26775);
h__26774 = G__26777;
s__26775 = G__26778;
continue;
}
} else
{return h__26774;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__26799__26800 = cljs.core.seq.call(null,fn_map);
if(G__26799__26800)
{var G__26802__26804 = cljs.core.first.call(null,G__26799__26800);
var vec__26803__26805 = G__26802__26804;
var key_name__26806 = cljs.core.nth.call(null,vec__26803__26805,0,null);
var f__26807 = cljs.core.nth.call(null,vec__26803__26805,1,null);
var G__26799__26808 = G__26799__26800;
var G__26802__26809 = G__26802__26804;
var G__26799__26810 = G__26799__26808;
while(true){
var vec__26811__26812 = G__26802__26809;
var key_name__26813 = cljs.core.nth.call(null,vec__26811__26812,0,null);
var f__26814 = cljs.core.nth.call(null,vec__26811__26812,1,null);
var G__26799__26815 = G__26799__26810;
var str_name__26816 = cljs.core.name.call(null,key_name__26813);
(obj[str_name__26816] = f__26814);
var temp__4092__auto____26817 = cljs.core.next.call(null,G__26799__26815);
if(temp__4092__auto____26817)
{var G__26799__26818 = temp__4092__auto____26817;
{
var G__26819 = cljs.core.first.call(null,G__26799__26818);
var G__26820 = G__26799__26818;
G__26802__26809 = G__26819;
G__26799__26810 = G__26820;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__26821 = this;
var h__18981__auto____26822 = this__26821.__hash;
if(!((h__18981__auto____26822 == null)))
{return h__18981__auto____26822;
} else
{var h__18981__auto____26823 = cljs.core.hash_coll.call(null,coll);
this__26821.__hash = h__18981__auto____26823;
return h__18981__auto____26823;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__26824 = this;
if((this__26824.count === 1))
{return null;
} else
{return this__26824.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__26825 = this;
return (new cljs.core.List(this__26825.meta,o,coll,(this__26825.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__26826 = this;
var this__26827 = this;
return cljs.core.pr_str.call(null,this__26827);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__26828 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__26829 = this;
return this__26829.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__26830 = this;
return this__26830.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__26831 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__26832 = this;
return this__26832.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__26833 = this;
if((this__26833.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__26833.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__26834 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__26835 = this;
return (new cljs.core.List(meta,this__26835.first,this__26835.rest,this__26835.count,this__26835.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__26836 = this;
return this__26836.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__26837 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__26838 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__26839 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__26840 = this;
return (new cljs.core.List(this__26840.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__26841 = this;
var this__26842 = this;
return cljs.core.pr_str.call(null,this__26842);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__26843 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__26844 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__26845 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__26846 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__26847 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__26848 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__26849 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__26850 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__26851 = this;
return this__26851.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__26852 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__26856__26857 = coll;
if(G__26856__26857)
{if((function (){var or__3943__auto____26858 = (G__26856__26857.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto____26858)
{return or__3943__auto____26858;
} else
{return G__26856__26857.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__26856__26857.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__26856__26857);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__26856__26857);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__26859__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__26859 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__26859__delegate.call(this, x, y, z, items);
};
G__26859.cljs$lang$maxFixedArity = 3;
G__26859.cljs$lang$applyTo = (function (arglist__26860){
var x = cljs.core.first(arglist__26860);
var y = cljs.core.first(cljs.core.next(arglist__26860));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__26860)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__26860)));
return G__26859__delegate(x, y, z, items);
});
G__26859.cljs$lang$arity$variadic = G__26859__delegate;
return G__26859;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__26861 = this;
var h__18981__auto____26862 = this__26861.__hash;
if(!((h__18981__auto____26862 == null)))
{return h__18981__auto____26862;
} else
{var h__18981__auto____26863 = cljs.core.hash_coll.call(null,coll);
this__26861.__hash = h__18981__auto____26863;
return h__18981__auto____26863;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__26864 = this;
if((this__26864.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__26864.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__26865 = this;
return (new cljs.core.Cons(null,o,coll,this__26865.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__26866 = this;
var this__26867 = this;
return cljs.core.pr_str.call(null,this__26867);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__26868 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__26869 = this;
return this__26869.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__26870 = this;
if((this__26870.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__26870.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__26871 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__26872 = this;
return (new cljs.core.Cons(meta,this__26872.first,this__26872.rest,this__26872.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__26873 = this;
return this__26873.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__26874 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__26874.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto____26879 = (coll == null);
if(or__3943__auto____26879)
{return or__3943__auto____26879;
} else
{var G__26880__26881 = coll;
if(G__26880__26881)
{if((function (){var or__3943__auto____26882 = (G__26880__26881.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____26882)
{return or__3943__auto____26882;
} else
{return G__26880__26881.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__26880__26881.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26880__26881);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__26880__26881);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__26886__26887 = x;
if(G__26886__26887)
{if((function (){var or__3943__auto____26888 = (G__26886__26887.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto____26888)
{return or__3943__auto____26888;
} else
{return G__26886__26887.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__26886__26887.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__26886__26887);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__26886__26887);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__26889 = null;
var G__26889__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__26889__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__26889 = function(string,f,start){
switch(arguments.length){
case 2:
return G__26889__2.call(this,string,f);
case 3:
return G__26889__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26889;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__26890 = null;
var G__26890__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__26890__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__26890 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__26890__2.call(this,string,k);
case 3:
return G__26890__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26890;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__26891 = null;
var G__26891__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__26891__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__26891 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__26891__2.call(this,string,n);
case 3:
return G__26891__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26891;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__26903 = null;
var G__26903__2 = (function (this_sym26894,coll){
var this__26896 = this;
var this_sym26894__26897 = this;
var ___26898 = this_sym26894__26897;
if((coll == null))
{return null;
} else
{var strobj__26899 = coll.strobj;
if((strobj__26899 == null))
{return cljs.core._lookup.call(null,coll,this__26896.k,null);
} else
{return (strobj__26899[this__26896.k]);
}
}
});
var G__26903__3 = (function (this_sym26895,coll,not_found){
var this__26896 = this;
var this_sym26895__26900 = this;
var ___26901 = this_sym26895__26900;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__26896.k,not_found);
}
});
G__26903 = function(this_sym26895,coll,not_found){
switch(arguments.length){
case 2:
return G__26903__2.call(this,this_sym26895,coll);
case 3:
return G__26903__3.call(this,this_sym26895,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26903;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym26892,args26893){
var this__26902 = this;
return this_sym26892.call.apply(this_sym26892,[this_sym26892].concat(args26893.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__26912 = null;
var G__26912__2 = (function (this_sym26906,coll){
var this_sym26906__26908 = this;
var this__26909 = this_sym26906__26908;
return cljs.core._lookup.call(null,coll,this__26909.toString(),null);
});
var G__26912__3 = (function (this_sym26907,coll,not_found){
var this_sym26907__26910 = this;
var this__26911 = this_sym26907__26910;
return cljs.core._lookup.call(null,coll,this__26911.toString(),not_found);
});
G__26912 = function(this_sym26907,coll,not_found){
switch(arguments.length){
case 2:
return G__26912__2.call(this,this_sym26907,coll);
case 3:
return G__26912__3.call(this,this_sym26907,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__26912;
})()
;
String.prototype.apply = (function (this_sym26904,args26905){
return this_sym26904.call.apply(this_sym26904,[this_sym26904].concat(args26905.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__26914 = lazy_seq.x;
if(lazy_seq.realized)
{return x__26914;
} else
{lazy_seq.x = x__26914.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__26915 = this;
var h__18981__auto____26916 = this__26915.__hash;
if(!((h__18981__auto____26916 == null)))
{return h__18981__auto____26916;
} else
{var h__18981__auto____26917 = cljs.core.hash_coll.call(null,coll);
this__26915.__hash = h__18981__auto____26917;
return h__18981__auto____26917;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__26918 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__26919 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__26920 = this;
var this__26921 = this;
return cljs.core.pr_str.call(null,this__26921);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__26922 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__26923 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__26924 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__26925 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__26926 = this;
return (new cljs.core.LazySeq(meta,this__26926.realized,this__26926.x,this__26926.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__26927 = this;
return this__26927.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__26928 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__26928.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__26929 = this;
return this__26929.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__26930 = this;
var ___26931 = this;
(this__26930.buf[this__26930.end] = o);
return this__26930.end = (this__26930.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__26932 = this;
var ___26933 = this;
var ret__26934 = (new cljs.core.ArrayChunk(this__26932.buf,0,this__26932.end));
this__26932.buf = null;
return ret__26934;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__26935 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__26935.arr[this__26935.off]),(this__26935.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__26936 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__26936.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__26937 = this;
if((this__26937.off === this__26937.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__26937.arr,(this__26937.off + 1),this__26937.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__26938 = this;
return (this__26938.arr[(this__26938.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__26939 = this;
if((function (){var and__3941__auto____26940 = (i >= 0);
if(and__3941__auto____26940)
{return (i < (this__26939.end - this__26939.off));
} else
{return and__3941__auto____26940;
}
})())
{return (this__26939.arr[(this__26939.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__26941 = this;
return (this__26941.end - this__26941.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__26942 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__26943 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__26944 = this;
return cljs.core._nth.call(null,this__26944.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__26945 = this;
if((cljs.core._count.call(null,this__26945.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__26945.chunk),this__26945.more,this__26945.meta));
} else
{if((this__26945.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__26945.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__26946 = this;
if((this__26946.more == null))
{return null;
} else
{return this__26946.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__26947 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__26948 = this;
return (new cljs.core.ChunkedCons(this__26948.chunk,this__26948.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__26949 = this;
return this__26949.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__26950 = this;
return this__26950.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__26951 = this;
if((this__26951.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__26951.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__26955__26956 = s;
if(G__26955__26956)
{if(cljs.core.truth_((function (){var or__3943__auto____26957 = null;
if(cljs.core.truth_(or__3943__auto____26957))
{return or__3943__auto____26957;
} else
{return G__26955__26956.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__26955__26956.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__26955__26956);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__26955__26956);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__26960 = [];
var s__26961 = s;
while(true){
if(cljs.core.seq.call(null,s__26961))
{ary__26960.push(cljs.core.first.call(null,s__26961));
{
var G__26962 = cljs.core.next.call(null,s__26961);
s__26961 = G__26962;
continue;
}
} else
{return ary__26960;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__26966 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__26967 = 0;
var xs__26968 = cljs.core.seq.call(null,coll);
while(true){
if(xs__26968)
{(ret__26966[i__26967] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__26968)));
{
var G__26969 = (i__26967 + 1);
var G__26970 = cljs.core.next.call(null,xs__26968);
i__26967 = G__26969;
xs__26968 = G__26970;
continue;
}
} else
{}
break;
}
return ret__26966;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__26978 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__26979 = cljs.core.seq.call(null,init_val_or_seq);
var i__26980 = 0;
var s__26981 = s__26979;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____26982 = s__26981;
if(and__3941__auto____26982)
{return (i__26980 < size);
} else
{return and__3941__auto____26982;
}
})()))
{(a__26978[i__26980] = cljs.core.first.call(null,s__26981));
{
var G__26985 = (i__26980 + 1);
var G__26986 = cljs.core.next.call(null,s__26981);
i__26980 = G__26985;
s__26981 = G__26986;
continue;
}
} else
{return a__26978;
}
break;
}
} else
{var n__19316__auto____26983 = size;
var i__26984 = 0;
while(true){
if((i__26984 < n__19316__auto____26983))
{(a__26978[i__26984] = init_val_or_seq);
{
var G__26987 = (i__26984 + 1);
i__26984 = G__26987;
continue;
}
} else
{}
break;
}
return a__26978;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__26995 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__26996 = cljs.core.seq.call(null,init_val_or_seq);
var i__26997 = 0;
var s__26998 = s__26996;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____26999 = s__26998;
if(and__3941__auto____26999)
{return (i__26997 < size);
} else
{return and__3941__auto____26999;
}
})()))
{(a__26995[i__26997] = cljs.core.first.call(null,s__26998));
{
var G__27002 = (i__26997 + 1);
var G__27003 = cljs.core.next.call(null,s__26998);
i__26997 = G__27002;
s__26998 = G__27003;
continue;
}
} else
{return a__26995;
}
break;
}
} else
{var n__19316__auto____27000 = size;
var i__27001 = 0;
while(true){
if((i__27001 < n__19316__auto____27000))
{(a__26995[i__27001] = init_val_or_seq);
{
var G__27004 = (i__27001 + 1);
i__27001 = G__27004;
continue;
}
} else
{}
break;
}
return a__26995;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__27012 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__27013 = cljs.core.seq.call(null,init_val_or_seq);
var i__27014 = 0;
var s__27015 = s__27013;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____27016 = s__27015;
if(and__3941__auto____27016)
{return (i__27014 < size);
} else
{return and__3941__auto____27016;
}
})()))
{(a__27012[i__27014] = cljs.core.first.call(null,s__27015));
{
var G__27019 = (i__27014 + 1);
var G__27020 = cljs.core.next.call(null,s__27015);
i__27014 = G__27019;
s__27015 = G__27020;
continue;
}
} else
{return a__27012;
}
break;
}
} else
{var n__19316__auto____27017 = size;
var i__27018 = 0;
while(true){
if((i__27018 < n__19316__auto____27017))
{(a__27012[i__27018] = init_val_or_seq);
{
var G__27021 = (i__27018 + 1);
i__27018 = G__27021;
continue;
}
} else
{}
break;
}
return a__27012;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__27026 = s;
var i__27027 = n;
var sum__27028 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____27029 = (i__27027 > 0);
if(and__3941__auto____27029)
{return cljs.core.seq.call(null,s__27026);
} else
{return and__3941__auto____27029;
}
})()))
{{
var G__27030 = cljs.core.next.call(null,s__27026);
var G__27031 = (i__27027 - 1);
var G__27032 = (sum__27028 + 1);
s__27026 = G__27030;
i__27027 = G__27031;
sum__27028 = G__27032;
continue;
}
} else
{return sum__27028;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__27037 = cljs.core.seq.call(null,x);
if(s__27037)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__27037))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__27037),concat.call(null,cljs.core.chunk_rest.call(null,s__27037),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__27037),concat.call(null,cljs.core.rest.call(null,s__27037),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__27041__delegate = function (x,y,zs){
var cat__27040 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__27039 = cljs.core.seq.call(null,xys);
if(xys__27039)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__27039))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__27039),cat.call(null,cljs.core.chunk_rest.call(null,xys__27039),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__27039),cat.call(null,cljs.core.rest.call(null,xys__27039),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__27040.call(null,concat.call(null,x,y),zs);
};
var G__27041 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27041__delegate.call(this, x, y, zs);
};
G__27041.cljs$lang$maxFixedArity = 2;
G__27041.cljs$lang$applyTo = (function (arglist__27042){
var x = cljs.core.first(arglist__27042);
var y = cljs.core.first(cljs.core.next(arglist__27042));
var zs = cljs.core.rest(cljs.core.next(arglist__27042));
return G__27041__delegate(x, y, zs);
});
G__27041.cljs$lang$arity$variadic = G__27041__delegate;
return G__27041;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__27043__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__27043 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__27043__delegate.call(this, a, b, c, d, more);
};
G__27043.cljs$lang$maxFixedArity = 4;
G__27043.cljs$lang$applyTo = (function (arglist__27044){
var a = cljs.core.first(arglist__27044);
var b = cljs.core.first(cljs.core.next(arglist__27044));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27044)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27044))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27044))));
return G__27043__delegate(a, b, c, d, more);
});
G__27043.cljs$lang$arity$variadic = G__27043__delegate;
return G__27043;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__27086 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__27087 = cljs.core._first.call(null,args__27086);
var args__27088 = cljs.core._rest.call(null,args__27086);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__27087);
} else
{return f.call(null,a__27087);
}
} else
{var b__27089 = cljs.core._first.call(null,args__27088);
var args__27090 = cljs.core._rest.call(null,args__27088);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__27087,b__27089);
} else
{return f.call(null,a__27087,b__27089);
}
} else
{var c__27091 = cljs.core._first.call(null,args__27090);
var args__27092 = cljs.core._rest.call(null,args__27090);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__27087,b__27089,c__27091);
} else
{return f.call(null,a__27087,b__27089,c__27091);
}
} else
{var d__27093 = cljs.core._first.call(null,args__27092);
var args__27094 = cljs.core._rest.call(null,args__27092);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__27087,b__27089,c__27091,d__27093);
} else
{return f.call(null,a__27087,b__27089,c__27091,d__27093);
}
} else
{var e__27095 = cljs.core._first.call(null,args__27094);
var args__27096 = cljs.core._rest.call(null,args__27094);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__27087,b__27089,c__27091,d__27093,e__27095);
} else
{return f.call(null,a__27087,b__27089,c__27091,d__27093,e__27095);
}
} else
{var f__27097 = cljs.core._first.call(null,args__27096);
var args__27098 = cljs.core._rest.call(null,args__27096);
if((argc === 6))
{if(f__27097.cljs$lang$arity$6)
{return f__27097.cljs$lang$arity$6(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097);
}
} else
{var g__27099 = cljs.core._first.call(null,args__27098);
var args__27100 = cljs.core._rest.call(null,args__27098);
if((argc === 7))
{if(f__27097.cljs$lang$arity$7)
{return f__27097.cljs$lang$arity$7(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099);
}
} else
{var h__27101 = cljs.core._first.call(null,args__27100);
var args__27102 = cljs.core._rest.call(null,args__27100);
if((argc === 8))
{if(f__27097.cljs$lang$arity$8)
{return f__27097.cljs$lang$arity$8(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101);
}
} else
{var i__27103 = cljs.core._first.call(null,args__27102);
var args__27104 = cljs.core._rest.call(null,args__27102);
if((argc === 9))
{if(f__27097.cljs$lang$arity$9)
{return f__27097.cljs$lang$arity$9(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103);
}
} else
{var j__27105 = cljs.core._first.call(null,args__27104);
var args__27106 = cljs.core._rest.call(null,args__27104);
if((argc === 10))
{if(f__27097.cljs$lang$arity$10)
{return f__27097.cljs$lang$arity$10(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105);
}
} else
{var k__27107 = cljs.core._first.call(null,args__27106);
var args__27108 = cljs.core._rest.call(null,args__27106);
if((argc === 11))
{if(f__27097.cljs$lang$arity$11)
{return f__27097.cljs$lang$arity$11(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107);
}
} else
{var l__27109 = cljs.core._first.call(null,args__27108);
var args__27110 = cljs.core._rest.call(null,args__27108);
if((argc === 12))
{if(f__27097.cljs$lang$arity$12)
{return f__27097.cljs$lang$arity$12(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109);
}
} else
{var m__27111 = cljs.core._first.call(null,args__27110);
var args__27112 = cljs.core._rest.call(null,args__27110);
if((argc === 13))
{if(f__27097.cljs$lang$arity$13)
{return f__27097.cljs$lang$arity$13(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111);
}
} else
{var n__27113 = cljs.core._first.call(null,args__27112);
var args__27114 = cljs.core._rest.call(null,args__27112);
if((argc === 14))
{if(f__27097.cljs$lang$arity$14)
{return f__27097.cljs$lang$arity$14(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113);
}
} else
{var o__27115 = cljs.core._first.call(null,args__27114);
var args__27116 = cljs.core._rest.call(null,args__27114);
if((argc === 15))
{if(f__27097.cljs$lang$arity$15)
{return f__27097.cljs$lang$arity$15(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115);
}
} else
{var p__27117 = cljs.core._first.call(null,args__27116);
var args__27118 = cljs.core._rest.call(null,args__27116);
if((argc === 16))
{if(f__27097.cljs$lang$arity$16)
{return f__27097.cljs$lang$arity$16(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117);
}
} else
{var q__27119 = cljs.core._first.call(null,args__27118);
var args__27120 = cljs.core._rest.call(null,args__27118);
if((argc === 17))
{if(f__27097.cljs$lang$arity$17)
{return f__27097.cljs$lang$arity$17(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119);
}
} else
{var r__27121 = cljs.core._first.call(null,args__27120);
var args__27122 = cljs.core._rest.call(null,args__27120);
if((argc === 18))
{if(f__27097.cljs$lang$arity$18)
{return f__27097.cljs$lang$arity$18(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119,r__27121);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119,r__27121);
}
} else
{var s__27123 = cljs.core._first.call(null,args__27122);
var args__27124 = cljs.core._rest.call(null,args__27122);
if((argc === 19))
{if(f__27097.cljs$lang$arity$19)
{return f__27097.cljs$lang$arity$19(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119,r__27121,s__27123);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119,r__27121,s__27123);
}
} else
{var t__27125 = cljs.core._first.call(null,args__27124);
var args__27126 = cljs.core._rest.call(null,args__27124);
if((argc === 20))
{if(f__27097.cljs$lang$arity$20)
{return f__27097.cljs$lang$arity$20(a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119,r__27121,s__27123,t__27125);
} else
{return f__27097.call(null,a__27087,b__27089,c__27091,d__27093,e__27095,f__27097,g__27099,h__27101,i__27103,j__27105,k__27107,l__27109,m__27111,n__27113,o__27115,p__27117,q__27119,r__27121,s__27123,t__27125);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__27141 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__27142 = cljs.core.bounded_count.call(null,args,(fixed_arity__27141 + 1));
if((bc__27142 <= fixed_arity__27141))
{return cljs.core.apply_to.call(null,f,bc__27142,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__27143 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__27144 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__27145 = cljs.core.bounded_count.call(null,arglist__27143,(fixed_arity__27144 + 1));
if((bc__27145 <= fixed_arity__27144))
{return cljs.core.apply_to.call(null,f,bc__27145,arglist__27143);
} else
{return f.cljs$lang$applyTo(arglist__27143);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__27143));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__27146 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__27147 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__27148 = cljs.core.bounded_count.call(null,arglist__27146,(fixed_arity__27147 + 1));
if((bc__27148 <= fixed_arity__27147))
{return cljs.core.apply_to.call(null,f,bc__27148,arglist__27146);
} else
{return f.cljs$lang$applyTo(arglist__27146);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__27146));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__27149 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__27150 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__27151 = cljs.core.bounded_count.call(null,arglist__27149,(fixed_arity__27150 + 1));
if((bc__27151 <= fixed_arity__27150))
{return cljs.core.apply_to.call(null,f,bc__27151,arglist__27149);
} else
{return f.cljs$lang$applyTo(arglist__27149);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__27149));
}
});
var apply__6 = (function() { 
var G__27155__delegate = function (f,a,b,c,d,args){
var arglist__27152 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__27153 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__27154 = cljs.core.bounded_count.call(null,arglist__27152,(fixed_arity__27153 + 1));
if((bc__27154 <= fixed_arity__27153))
{return cljs.core.apply_to.call(null,f,bc__27154,arglist__27152);
} else
{return f.cljs$lang$applyTo(arglist__27152);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__27152));
}
};
var G__27155 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__27155__delegate.call(this, f, a, b, c, d, args);
};
G__27155.cljs$lang$maxFixedArity = 5;
G__27155.cljs$lang$applyTo = (function (arglist__27156){
var f = cljs.core.first(arglist__27156);
var a = cljs.core.first(cljs.core.next(arglist__27156));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27156)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27156))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27156)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27156)))));
return G__27155__delegate(f, a, b, c, d, args);
});
G__27155.cljs$lang$arity$variadic = G__27155__delegate;
return G__27155;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__27157){
var obj = cljs.core.first(arglist__27157);
var f = cljs.core.first(cljs.core.next(arglist__27157));
var args = cljs.core.rest(cljs.core.next(arglist__27157));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__27158__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__27158 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27158__delegate.call(this, x, y, more);
};
G__27158.cljs$lang$maxFixedArity = 2;
G__27158.cljs$lang$applyTo = (function (arglist__27159){
var x = cljs.core.first(arglist__27159);
var y = cljs.core.first(cljs.core.next(arglist__27159));
var more = cljs.core.rest(cljs.core.next(arglist__27159));
return G__27158__delegate(x, y, more);
});
G__27158.cljs$lang$arity$variadic = G__27158__delegate;
return G__27158;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__27160 = pred;
var G__27161 = cljs.core.next.call(null,coll);
pred = G__27160;
coll = G__27161;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3943__auto____27163 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3943__auto____27163))
{return or__3943__auto____27163;
} else
{{
var G__27164 = pred;
var G__27165 = cljs.core.next.call(null,coll);
pred = G__27164;
coll = G__27165;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__27166 = null;
var G__27166__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__27166__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__27166__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__27166__3 = (function() { 
var G__27167__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__27167 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27167__delegate.call(this, x, y, zs);
};
G__27167.cljs$lang$maxFixedArity = 2;
G__27167.cljs$lang$applyTo = (function (arglist__27168){
var x = cljs.core.first(arglist__27168);
var y = cljs.core.first(cljs.core.next(arglist__27168));
var zs = cljs.core.rest(cljs.core.next(arglist__27168));
return G__27167__delegate(x, y, zs);
});
G__27167.cljs$lang$arity$variadic = G__27167__delegate;
return G__27167;
})()
;
G__27166 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__27166__0.call(this);
case 1:
return G__27166__1.call(this,x);
case 2:
return G__27166__2.call(this,x,y);
default:
return G__27166__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__27166.cljs$lang$maxFixedArity = 2;
G__27166.cljs$lang$applyTo = G__27166__3.cljs$lang$applyTo;
return G__27166;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__27169__delegate = function (args){
return x;
};
var G__27169 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27169__delegate.call(this, args);
};
G__27169.cljs$lang$maxFixedArity = 0;
G__27169.cljs$lang$applyTo = (function (arglist__27170){
var args = cljs.core.seq(arglist__27170);;
return G__27169__delegate(args);
});
G__27169.cljs$lang$arity$variadic = G__27169__delegate;
return G__27169;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__27177 = null;
var G__27177__0 = (function (){
return f.call(null,g.call(null));
});
var G__27177__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__27177__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__27177__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__27177__4 = (function() { 
var G__27178__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__27178 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27178__delegate.call(this, x, y, z, args);
};
G__27178.cljs$lang$maxFixedArity = 3;
G__27178.cljs$lang$applyTo = (function (arglist__27179){
var x = cljs.core.first(arglist__27179);
var y = cljs.core.first(cljs.core.next(arglist__27179));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27179)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27179)));
return G__27178__delegate(x, y, z, args);
});
G__27178.cljs$lang$arity$variadic = G__27178__delegate;
return G__27178;
})()
;
G__27177 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27177__0.call(this);
case 1:
return G__27177__1.call(this,x);
case 2:
return G__27177__2.call(this,x,y);
case 3:
return G__27177__3.call(this,x,y,z);
default:
return G__27177__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__27177.cljs$lang$maxFixedArity = 3;
G__27177.cljs$lang$applyTo = G__27177__4.cljs$lang$applyTo;
return G__27177;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__27180 = null;
var G__27180__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__27180__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__27180__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__27180__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__27180__4 = (function() { 
var G__27181__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__27181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27181__delegate.call(this, x, y, z, args);
};
G__27181.cljs$lang$maxFixedArity = 3;
G__27181.cljs$lang$applyTo = (function (arglist__27182){
var x = cljs.core.first(arglist__27182);
var y = cljs.core.first(cljs.core.next(arglist__27182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27182)));
return G__27181__delegate(x, y, z, args);
});
G__27181.cljs$lang$arity$variadic = G__27181__delegate;
return G__27181;
})()
;
G__27180 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__27180__0.call(this);
case 1:
return G__27180__1.call(this,x);
case 2:
return G__27180__2.call(this,x,y);
case 3:
return G__27180__3.call(this,x,y,z);
default:
return G__27180__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__27180.cljs$lang$maxFixedArity = 3;
G__27180.cljs$lang$applyTo = G__27180__4.cljs$lang$applyTo;
return G__27180;
})()
});
var comp__4 = (function() { 
var G__27183__delegate = function (f1,f2,f3,fs){
var fs__27174 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__27184__delegate = function (args){
var ret__27175 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__27174),args);
var fs__27176 = cljs.core.next.call(null,fs__27174);
while(true){
if(fs__27176)
{{
var G__27185 = cljs.core.first.call(null,fs__27176).call(null,ret__27175);
var G__27186 = cljs.core.next.call(null,fs__27176);
ret__27175 = G__27185;
fs__27176 = G__27186;
continue;
}
} else
{return ret__27175;
}
break;
}
};
var G__27184 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27184__delegate.call(this, args);
};
G__27184.cljs$lang$maxFixedArity = 0;
G__27184.cljs$lang$applyTo = (function (arglist__27187){
var args = cljs.core.seq(arglist__27187);;
return G__27184__delegate(args);
});
G__27184.cljs$lang$arity$variadic = G__27184__delegate;
return G__27184;
})()
;
};
var G__27183 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27183__delegate.call(this, f1, f2, f3, fs);
};
G__27183.cljs$lang$maxFixedArity = 3;
G__27183.cljs$lang$applyTo = (function (arglist__27188){
var f1 = cljs.core.first(arglist__27188);
var f2 = cljs.core.first(cljs.core.next(arglist__27188));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27188)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27188)));
return G__27183__delegate(f1, f2, f3, fs);
});
G__27183.cljs$lang$arity$variadic = G__27183__delegate;
return G__27183;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__27189__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__27189 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27189__delegate.call(this, args);
};
G__27189.cljs$lang$maxFixedArity = 0;
G__27189.cljs$lang$applyTo = (function (arglist__27190){
var args = cljs.core.seq(arglist__27190);;
return G__27189__delegate(args);
});
G__27189.cljs$lang$arity$variadic = G__27189__delegate;
return G__27189;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__27191__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__27191 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27191__delegate.call(this, args);
};
G__27191.cljs$lang$maxFixedArity = 0;
G__27191.cljs$lang$applyTo = (function (arglist__27192){
var args = cljs.core.seq(arglist__27192);;
return G__27191__delegate(args);
});
G__27191.cljs$lang$arity$variadic = G__27191__delegate;
return G__27191;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__27193__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__27193 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27193__delegate.call(this, args);
};
G__27193.cljs$lang$maxFixedArity = 0;
G__27193.cljs$lang$applyTo = (function (arglist__27194){
var args = cljs.core.seq(arglist__27194);;
return G__27193__delegate(args);
});
G__27193.cljs$lang$arity$variadic = G__27193__delegate;
return G__27193;
})()
;
});
var partial__5 = (function() { 
var G__27195__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__27196__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__27196 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__27196__delegate.call(this, args);
};
G__27196.cljs$lang$maxFixedArity = 0;
G__27196.cljs$lang$applyTo = (function (arglist__27197){
var args = cljs.core.seq(arglist__27197);;
return G__27196__delegate(args);
});
G__27196.cljs$lang$arity$variadic = G__27196__delegate;
return G__27196;
})()
;
};
var G__27195 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__27195__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__27195.cljs$lang$maxFixedArity = 4;
G__27195.cljs$lang$applyTo = (function (arglist__27198){
var f = cljs.core.first(arglist__27198);
var arg1 = cljs.core.first(cljs.core.next(arglist__27198));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27198)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27198))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27198))));
return G__27195__delegate(f, arg1, arg2, arg3, more);
});
G__27195.cljs$lang$arity$variadic = G__27195__delegate;
return G__27195;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__27199 = null;
var G__27199__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__27199__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__27199__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__27199__4 = (function() { 
var G__27200__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__27200 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27200__delegate.call(this, a, b, c, ds);
};
G__27200.cljs$lang$maxFixedArity = 3;
G__27200.cljs$lang$applyTo = (function (arglist__27201){
var a = cljs.core.first(arglist__27201);
var b = cljs.core.first(cljs.core.next(arglist__27201));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27201)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27201)));
return G__27200__delegate(a, b, c, ds);
});
G__27200.cljs$lang$arity$variadic = G__27200__delegate;
return G__27200;
})()
;
G__27199 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__27199__1.call(this,a);
case 2:
return G__27199__2.call(this,a,b);
case 3:
return G__27199__3.call(this,a,b,c);
default:
return G__27199__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__27199.cljs$lang$maxFixedArity = 3;
G__27199.cljs$lang$applyTo = G__27199__4.cljs$lang$applyTo;
return G__27199;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__27202 = null;
var G__27202__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__27202__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__27202__4 = (function() { 
var G__27203__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__27203 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27203__delegate.call(this, a, b, c, ds);
};
G__27203.cljs$lang$maxFixedArity = 3;
G__27203.cljs$lang$applyTo = (function (arglist__27204){
var a = cljs.core.first(arglist__27204);
var b = cljs.core.first(cljs.core.next(arglist__27204));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27204)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27204)));
return G__27203__delegate(a, b, c, ds);
});
G__27203.cljs$lang$arity$variadic = G__27203__delegate;
return G__27203;
})()
;
G__27202 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27202__2.call(this,a,b);
case 3:
return G__27202__3.call(this,a,b,c);
default:
return G__27202__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__27202.cljs$lang$maxFixedArity = 3;
G__27202.cljs$lang$applyTo = G__27202__4.cljs$lang$applyTo;
return G__27202;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__27205 = null;
var G__27205__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__27205__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__27205__4 = (function() { 
var G__27206__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__27206 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27206__delegate.call(this, a, b, c, ds);
};
G__27206.cljs$lang$maxFixedArity = 3;
G__27206.cljs$lang$applyTo = (function (arglist__27207){
var a = cljs.core.first(arglist__27207);
var b = cljs.core.first(cljs.core.next(arglist__27207));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27207)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27207)));
return G__27206__delegate(a, b, c, ds);
});
G__27206.cljs$lang$arity$variadic = G__27206__delegate;
return G__27206;
})()
;
G__27205 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__27205__2.call(this,a,b);
case 3:
return G__27205__3.call(this,a,b,c);
default:
return G__27205__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__27205.cljs$lang$maxFixedArity = 3;
G__27205.cljs$lang$applyTo = G__27205__4.cljs$lang$applyTo;
return G__27205;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__27223 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27231 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27231)
{var s__27232 = temp__4092__auto____27231;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27232))
{var c__27233 = cljs.core.chunk_first.call(null,s__27232);
var size__27234 = cljs.core.count.call(null,c__27233);
var b__27235 = cljs.core.chunk_buffer.call(null,size__27234);
var n__19316__auto____27236 = size__27234;
var i__27237 = 0;
while(true){
if((i__27237 < n__19316__auto____27236))
{cljs.core.chunk_append.call(null,b__27235,f.call(null,(idx + i__27237),cljs.core._nth.call(null,c__27233,i__27237)));
{
var G__27238 = (i__27237 + 1);
i__27237 = G__27238;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27235),mapi.call(null,(idx + size__27234),cljs.core.chunk_rest.call(null,s__27232)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__27232)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__27232)));
}
} else
{return null;
}
}),null));
});
return mapi__27223.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27248 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27248)
{var s__27249 = temp__4092__auto____27248;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27249))
{var c__27250 = cljs.core.chunk_first.call(null,s__27249);
var size__27251 = cljs.core.count.call(null,c__27250);
var b__27252 = cljs.core.chunk_buffer.call(null,size__27251);
var n__19316__auto____27253 = size__27251;
var i__27254 = 0;
while(true){
if((i__27254 < n__19316__auto____27253))
{var x__27255 = f.call(null,cljs.core._nth.call(null,c__27250,i__27254));
if((x__27255 == null))
{} else
{cljs.core.chunk_append.call(null,b__27252,x__27255);
}
{
var G__27257 = (i__27254 + 1);
i__27254 = G__27257;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27252),keep.call(null,f,cljs.core.chunk_rest.call(null,s__27249)));
} else
{var x__27256 = f.call(null,cljs.core.first.call(null,s__27249));
if((x__27256 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__27249));
} else
{return cljs.core.cons.call(null,x__27256,keep.call(null,f,cljs.core.rest.call(null,s__27249)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__27283 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27293 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27293)
{var s__27294 = temp__4092__auto____27293;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27294))
{var c__27295 = cljs.core.chunk_first.call(null,s__27294);
var size__27296 = cljs.core.count.call(null,c__27295);
var b__27297 = cljs.core.chunk_buffer.call(null,size__27296);
var n__19316__auto____27298 = size__27296;
var i__27299 = 0;
while(true){
if((i__27299 < n__19316__auto____27298))
{var x__27300 = f.call(null,(idx + i__27299),cljs.core._nth.call(null,c__27295,i__27299));
if((x__27300 == null))
{} else
{cljs.core.chunk_append.call(null,b__27297,x__27300);
}
{
var G__27302 = (i__27299 + 1);
i__27299 = G__27302;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27297),keepi.call(null,(idx + size__27296),cljs.core.chunk_rest.call(null,s__27294)));
} else
{var x__27301 = f.call(null,idx,cljs.core.first.call(null,s__27294));
if((x__27301 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__27294));
} else
{return cljs.core.cons.call(null,x__27301,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__27294)));
}
}
} else
{return null;
}
}),null));
});
return keepi__27283.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27388 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____27388))
{return p.call(null,y);
} else
{return and__3941__auto____27388;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27389 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____27389))
{var and__3941__auto____27390 = p.call(null,y);
if(cljs.core.truth_(and__3941__auto____27390))
{return p.call(null,z);
} else
{return and__3941__auto____27390;
}
} else
{return and__3941__auto____27389;
}
})());
});
var ep1__4 = (function() { 
var G__27459__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27391 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____27391))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3941__auto____27391;
}
})());
};
var G__27459 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27459__delegate.call(this, x, y, z, args);
};
G__27459.cljs$lang$maxFixedArity = 3;
G__27459.cljs$lang$applyTo = (function (arglist__27460){
var x = cljs.core.first(arglist__27460);
var y = cljs.core.first(cljs.core.next(arglist__27460));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27460)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27460)));
return G__27459__delegate(x, y, z, args);
});
G__27459.cljs$lang$arity$variadic = G__27459__delegate;
return G__27459;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27403 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____27403))
{return p2.call(null,x);
} else
{return and__3941__auto____27403;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27404 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____27404))
{var and__3941__auto____27405 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____27405))
{var and__3941__auto____27406 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____27406))
{return p2.call(null,y);
} else
{return and__3941__auto____27406;
}
} else
{return and__3941__auto____27405;
}
} else
{return and__3941__auto____27404;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27407 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____27407))
{var and__3941__auto____27408 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____27408))
{var and__3941__auto____27409 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____27409))
{var and__3941__auto____27410 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____27410))
{var and__3941__auto____27411 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____27411))
{return p2.call(null,z);
} else
{return and__3941__auto____27411;
}
} else
{return and__3941__auto____27410;
}
} else
{return and__3941__auto____27409;
}
} else
{return and__3941__auto____27408;
}
} else
{return and__3941__auto____27407;
}
})());
});
var ep2__4 = (function() { 
var G__27461__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27412 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____27412))
{return cljs.core.every_QMARK_.call(null,(function (p1__27258_SHARP_){
var and__3941__auto____27413 = p1.call(null,p1__27258_SHARP_);
if(cljs.core.truth_(and__3941__auto____27413))
{return p2.call(null,p1__27258_SHARP_);
} else
{return and__3941__auto____27413;
}
}),args);
} else
{return and__3941__auto____27412;
}
})());
};
var G__27461 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27461__delegate.call(this, x, y, z, args);
};
G__27461.cljs$lang$maxFixedArity = 3;
G__27461.cljs$lang$applyTo = (function (arglist__27462){
var x = cljs.core.first(arglist__27462);
var y = cljs.core.first(cljs.core.next(arglist__27462));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27462)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27462)));
return G__27461__delegate(x, y, z, args);
});
G__27461.cljs$lang$arity$variadic = G__27461__delegate;
return G__27461;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27432 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____27432))
{var and__3941__auto____27433 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____27433))
{return p3.call(null,x);
} else
{return and__3941__auto____27433;
}
} else
{return and__3941__auto____27432;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27434 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____27434))
{var and__3941__auto____27435 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____27435))
{var and__3941__auto____27436 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____27436))
{var and__3941__auto____27437 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____27437))
{var and__3941__auto____27438 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____27438))
{return p3.call(null,y);
} else
{return and__3941__auto____27438;
}
} else
{return and__3941__auto____27437;
}
} else
{return and__3941__auto____27436;
}
} else
{return and__3941__auto____27435;
}
} else
{return and__3941__auto____27434;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27439 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____27439))
{var and__3941__auto____27440 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____27440))
{var and__3941__auto____27441 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____27441))
{var and__3941__auto____27442 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____27442))
{var and__3941__auto____27443 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____27443))
{var and__3941__auto____27444 = p3.call(null,y);
if(cljs.core.truth_(and__3941__auto____27444))
{var and__3941__auto____27445 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____27445))
{var and__3941__auto____27446 = p2.call(null,z);
if(cljs.core.truth_(and__3941__auto____27446))
{return p3.call(null,z);
} else
{return and__3941__auto____27446;
}
} else
{return and__3941__auto____27445;
}
} else
{return and__3941__auto____27444;
}
} else
{return and__3941__auto____27443;
}
} else
{return and__3941__auto____27442;
}
} else
{return and__3941__auto____27441;
}
} else
{return and__3941__auto____27440;
}
} else
{return and__3941__auto____27439;
}
})());
});
var ep3__4 = (function() { 
var G__27463__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27447 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____27447))
{return cljs.core.every_QMARK_.call(null,(function (p1__27259_SHARP_){
var and__3941__auto____27448 = p1.call(null,p1__27259_SHARP_);
if(cljs.core.truth_(and__3941__auto____27448))
{var and__3941__auto____27449 = p2.call(null,p1__27259_SHARP_);
if(cljs.core.truth_(and__3941__auto____27449))
{return p3.call(null,p1__27259_SHARP_);
} else
{return and__3941__auto____27449;
}
} else
{return and__3941__auto____27448;
}
}),args);
} else
{return and__3941__auto____27447;
}
})());
};
var G__27463 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27463__delegate.call(this, x, y, z, args);
};
G__27463.cljs$lang$maxFixedArity = 3;
G__27463.cljs$lang$applyTo = (function (arglist__27464){
var x = cljs.core.first(arglist__27464);
var y = cljs.core.first(cljs.core.next(arglist__27464));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27464)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27464)));
return G__27463__delegate(x, y, z, args);
});
G__27463.cljs$lang$arity$variadic = G__27463__delegate;
return G__27463;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__27465__delegate = function (p1,p2,p3,ps){
var ps__27450 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__27260_SHARP_){
return p1__27260_SHARP_.call(null,x);
}),ps__27450);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__27261_SHARP_){
var and__3941__auto____27455 = p1__27261_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____27455))
{return p1__27261_SHARP_.call(null,y);
} else
{return and__3941__auto____27455;
}
}),ps__27450);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__27262_SHARP_){
var and__3941__auto____27456 = p1__27262_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____27456))
{var and__3941__auto____27457 = p1__27262_SHARP_.call(null,y);
if(cljs.core.truth_(and__3941__auto____27457))
{return p1__27262_SHARP_.call(null,z);
} else
{return and__3941__auto____27457;
}
} else
{return and__3941__auto____27456;
}
}),ps__27450);
});
var epn__4 = (function() { 
var G__27466__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____27458 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____27458))
{return cljs.core.every_QMARK_.call(null,(function (p1__27263_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__27263_SHARP_,args);
}),ps__27450);
} else
{return and__3941__auto____27458;
}
})());
};
var G__27466 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27466__delegate.call(this, x, y, z, args);
};
G__27466.cljs$lang$maxFixedArity = 3;
G__27466.cljs$lang$applyTo = (function (arglist__27467){
var x = cljs.core.first(arglist__27467);
var y = cljs.core.first(cljs.core.next(arglist__27467));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27467)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27467)));
return G__27466__delegate(x, y, z, args);
});
G__27466.cljs$lang$arity$variadic = G__27466__delegate;
return G__27466;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__27465 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27465__delegate.call(this, p1, p2, p3, ps);
};
G__27465.cljs$lang$maxFixedArity = 3;
G__27465.cljs$lang$applyTo = (function (arglist__27468){
var p1 = cljs.core.first(arglist__27468);
var p2 = cljs.core.first(cljs.core.next(arglist__27468));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27468)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27468)));
return G__27465__delegate(p1, p2, p3, ps);
});
G__27465.cljs$lang$arity$variadic = G__27465__delegate;
return G__27465;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3943__auto____27549 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____27549))
{return or__3943__auto____27549;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto____27550 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____27550))
{return or__3943__auto____27550;
} else
{var or__3943__auto____27551 = p.call(null,y);
if(cljs.core.truth_(or__3943__auto____27551))
{return or__3943__auto____27551;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__27620__delegate = function (x,y,z,args){
var or__3943__auto____27552 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____27552))
{return or__3943__auto____27552;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__27620 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27620__delegate.call(this, x, y, z, args);
};
G__27620.cljs$lang$maxFixedArity = 3;
G__27620.cljs$lang$applyTo = (function (arglist__27621){
var x = cljs.core.first(arglist__27621);
var y = cljs.core.first(cljs.core.next(arglist__27621));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27621)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27621)));
return G__27620__delegate(x, y, z, args);
});
G__27620.cljs$lang$arity$variadic = G__27620__delegate;
return G__27620;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto____27564 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____27564))
{return or__3943__auto____27564;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3943__auto____27565 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____27565))
{return or__3943__auto____27565;
} else
{var or__3943__auto____27566 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____27566))
{return or__3943__auto____27566;
} else
{var or__3943__auto____27567 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____27567))
{return or__3943__auto____27567;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto____27568 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____27568))
{return or__3943__auto____27568;
} else
{var or__3943__auto____27569 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____27569))
{return or__3943__auto____27569;
} else
{var or__3943__auto____27570 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____27570))
{return or__3943__auto____27570;
} else
{var or__3943__auto____27571 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____27571))
{return or__3943__auto____27571;
} else
{var or__3943__auto____27572 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____27572))
{return or__3943__auto____27572;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__27622__delegate = function (x,y,z,args){
var or__3943__auto____27573 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____27573))
{return or__3943__auto____27573;
} else
{return cljs.core.some.call(null,(function (p1__27303_SHARP_){
var or__3943__auto____27574 = p1.call(null,p1__27303_SHARP_);
if(cljs.core.truth_(or__3943__auto____27574))
{return or__3943__auto____27574;
} else
{return p2.call(null,p1__27303_SHARP_);
}
}),args);
}
};
var G__27622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27622__delegate.call(this, x, y, z, args);
};
G__27622.cljs$lang$maxFixedArity = 3;
G__27622.cljs$lang$applyTo = (function (arglist__27623){
var x = cljs.core.first(arglist__27623);
var y = cljs.core.first(cljs.core.next(arglist__27623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27623)));
return G__27622__delegate(x, y, z, args);
});
G__27622.cljs$lang$arity$variadic = G__27622__delegate;
return G__27622;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto____27593 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____27593))
{return or__3943__auto____27593;
} else
{var or__3943__auto____27594 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____27594))
{return or__3943__auto____27594;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto____27595 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____27595))
{return or__3943__auto____27595;
} else
{var or__3943__auto____27596 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____27596))
{return or__3943__auto____27596;
} else
{var or__3943__auto____27597 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____27597))
{return or__3943__auto____27597;
} else
{var or__3943__auto____27598 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____27598))
{return or__3943__auto____27598;
} else
{var or__3943__auto____27599 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____27599))
{return or__3943__auto____27599;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto____27600 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____27600))
{return or__3943__auto____27600;
} else
{var or__3943__auto____27601 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____27601))
{return or__3943__auto____27601;
} else
{var or__3943__auto____27602 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____27602))
{return or__3943__auto____27602;
} else
{var or__3943__auto____27603 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____27603))
{return or__3943__auto____27603;
} else
{var or__3943__auto____27604 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____27604))
{return or__3943__auto____27604;
} else
{var or__3943__auto____27605 = p3.call(null,y);
if(cljs.core.truth_(or__3943__auto____27605))
{return or__3943__auto____27605;
} else
{var or__3943__auto____27606 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____27606))
{return or__3943__auto____27606;
} else
{var or__3943__auto____27607 = p2.call(null,z);
if(cljs.core.truth_(or__3943__auto____27607))
{return or__3943__auto____27607;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__27624__delegate = function (x,y,z,args){
var or__3943__auto____27608 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____27608))
{return or__3943__auto____27608;
} else
{return cljs.core.some.call(null,(function (p1__27304_SHARP_){
var or__3943__auto____27609 = p1.call(null,p1__27304_SHARP_);
if(cljs.core.truth_(or__3943__auto____27609))
{return or__3943__auto____27609;
} else
{var or__3943__auto____27610 = p2.call(null,p1__27304_SHARP_);
if(cljs.core.truth_(or__3943__auto____27610))
{return or__3943__auto____27610;
} else
{return p3.call(null,p1__27304_SHARP_);
}
}
}),args);
}
};
var G__27624 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27624__delegate.call(this, x, y, z, args);
};
G__27624.cljs$lang$maxFixedArity = 3;
G__27624.cljs$lang$applyTo = (function (arglist__27625){
var x = cljs.core.first(arglist__27625);
var y = cljs.core.first(cljs.core.next(arglist__27625));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27625)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27625)));
return G__27624__delegate(x, y, z, args);
});
G__27624.cljs$lang$arity$variadic = G__27624__delegate;
return G__27624;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__27626__delegate = function (p1,p2,p3,ps){
var ps__27611 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__27305_SHARP_){
return p1__27305_SHARP_.call(null,x);
}),ps__27611);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__27306_SHARP_){
var or__3943__auto____27616 = p1__27306_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____27616))
{return or__3943__auto____27616;
} else
{return p1__27306_SHARP_.call(null,y);
}
}),ps__27611);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__27307_SHARP_){
var or__3943__auto____27617 = p1__27307_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____27617))
{return or__3943__auto____27617;
} else
{var or__3943__auto____27618 = p1__27307_SHARP_.call(null,y);
if(cljs.core.truth_(or__3943__auto____27618))
{return or__3943__auto____27618;
} else
{return p1__27307_SHARP_.call(null,z);
}
}
}),ps__27611);
});
var spn__4 = (function() { 
var G__27627__delegate = function (x,y,z,args){
var or__3943__auto____27619 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____27619))
{return or__3943__auto____27619;
} else
{return cljs.core.some.call(null,(function (p1__27308_SHARP_){
return cljs.core.some.call(null,p1__27308_SHARP_,args);
}),ps__27611);
}
};
var G__27627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27627__delegate.call(this, x, y, z, args);
};
G__27627.cljs$lang$maxFixedArity = 3;
G__27627.cljs$lang$applyTo = (function (arglist__27628){
var x = cljs.core.first(arglist__27628);
var y = cljs.core.first(cljs.core.next(arglist__27628));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27628)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27628)));
return G__27627__delegate(x, y, z, args);
});
G__27627.cljs$lang$arity$variadic = G__27627__delegate;
return G__27627;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__27626 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__27626__delegate.call(this, p1, p2, p3, ps);
};
G__27626.cljs$lang$maxFixedArity = 3;
G__27626.cljs$lang$applyTo = (function (arglist__27629){
var p1 = cljs.core.first(arglist__27629);
var p2 = cljs.core.first(cljs.core.next(arglist__27629));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27629)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27629)));
return G__27626__delegate(p1, p2, p3, ps);
});
G__27626.cljs$lang$arity$variadic = G__27626__delegate;
return G__27626;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27648 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27648)
{var s__27649 = temp__4092__auto____27648;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27649))
{var c__27650 = cljs.core.chunk_first.call(null,s__27649);
var size__27651 = cljs.core.count.call(null,c__27650);
var b__27652 = cljs.core.chunk_buffer.call(null,size__27651);
var n__19316__auto____27653 = size__27651;
var i__27654 = 0;
while(true){
if((i__27654 < n__19316__auto____27653))
{cljs.core.chunk_append.call(null,b__27652,f.call(null,cljs.core._nth.call(null,c__27650,i__27654)));
{
var G__27666 = (i__27654 + 1);
i__27654 = G__27666;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27652),map.call(null,f,cljs.core.chunk_rest.call(null,s__27649)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__27649)),map.call(null,f,cljs.core.rest.call(null,s__27649)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__27655 = cljs.core.seq.call(null,c1);
var s2__27656 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____27657 = s1__27655;
if(and__3941__auto____27657)
{return s2__27656;
} else
{return and__3941__auto____27657;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__27655),cljs.core.first.call(null,s2__27656)),map.call(null,f,cljs.core.rest.call(null,s1__27655),cljs.core.rest.call(null,s2__27656)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__27658 = cljs.core.seq.call(null,c1);
var s2__27659 = cljs.core.seq.call(null,c2);
var s3__27660 = cljs.core.seq.call(null,c3);
if((function (){var and__3941__auto____27661 = s1__27658;
if(and__3941__auto____27661)
{var and__3941__auto____27662 = s2__27659;
if(and__3941__auto____27662)
{return s3__27660;
} else
{return and__3941__auto____27662;
}
} else
{return and__3941__auto____27661;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__27658),cljs.core.first.call(null,s2__27659),cljs.core.first.call(null,s3__27660)),map.call(null,f,cljs.core.rest.call(null,s1__27658),cljs.core.rest.call(null,s2__27659),cljs.core.rest.call(null,s3__27660)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__27667__delegate = function (f,c1,c2,c3,colls){
var step__27665 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__27664 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__27664))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__27664),step.call(null,map.call(null,cljs.core.rest,ss__27664)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__27469_SHARP_){
return cljs.core.apply.call(null,f,p1__27469_SHARP_);
}),step__27665.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__27667 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__27667__delegate.call(this, f, c1, c2, c3, colls);
};
G__27667.cljs$lang$maxFixedArity = 4;
G__27667.cljs$lang$applyTo = (function (arglist__27668){
var f = cljs.core.first(arglist__27668);
var c1 = cljs.core.first(cljs.core.next(arglist__27668));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27668)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27668))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27668))));
return G__27667__delegate(f, c1, c2, c3, colls);
});
G__27667.cljs$lang$arity$variadic = G__27667__delegate;
return G__27667;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto____27671 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27671)
{var s__27672 = temp__4092__auto____27671;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__27672),take.call(null,(n - 1),cljs.core.rest.call(null,s__27672)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__27678 = (function (n,coll){
while(true){
var s__27676 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____27677 = (n > 0);
if(and__3941__auto____27677)
{return s__27676;
} else
{return and__3941__auto____27677;
}
})()))
{{
var G__27679 = (n - 1);
var G__27680 = cljs.core.rest.call(null,s__27676);
n = G__27679;
coll = G__27680;
continue;
}
} else
{return s__27676;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__27678.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__27683 = cljs.core.seq.call(null,coll);
var lead__27684 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__27684)
{{
var G__27685 = cljs.core.next.call(null,s__27683);
var G__27686 = cljs.core.next.call(null,lead__27684);
s__27683 = G__27685;
lead__27684 = G__27686;
continue;
}
} else
{return s__27683;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__27692 = (function (pred,coll){
while(true){
var s__27690 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____27691 = s__27690;
if(and__3941__auto____27691)
{return pred.call(null,cljs.core.first.call(null,s__27690));
} else
{return and__3941__auto____27691;
}
})()))
{{
var G__27693 = pred;
var G__27694 = cljs.core.rest.call(null,s__27690);
pred = G__27693;
coll = G__27694;
continue;
}
} else
{return s__27690;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__27692.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27697 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27697)
{var s__27698 = temp__4092__auto____27697;
return cljs.core.concat.call(null,s__27698,cycle.call(null,s__27698));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__27703 = cljs.core.seq.call(null,c1);
var s2__27704 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____27705 = s1__27703;
if(and__3941__auto____27705)
{return s2__27704;
} else
{return and__3941__auto____27705;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__27703),cljs.core.cons.call(null,cljs.core.first.call(null,s2__27704),interleave.call(null,cljs.core.rest.call(null,s1__27703),cljs.core.rest.call(null,s2__27704))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__27707__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__27706 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__27706))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__27706),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__27706)));
} else
{return null;
}
}),null));
};
var G__27707 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27707__delegate.call(this, c1, c2, colls);
};
G__27707.cljs$lang$maxFixedArity = 2;
G__27707.cljs$lang$applyTo = (function (arglist__27708){
var c1 = cljs.core.first(arglist__27708);
var c2 = cljs.core.first(cljs.core.next(arglist__27708));
var colls = cljs.core.rest(cljs.core.next(arglist__27708));
return G__27707__delegate(c1, c2, colls);
});
G__27707.cljs$lang$arity$variadic = G__27707__delegate;
return G__27707;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__27718 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____27716 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____27716)
{var coll__27717 = temp__4090__auto____27716;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__27717),cat.call(null,cljs.core.rest.call(null,coll__27717),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__27718.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__27719__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__27719 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__27719__delegate.call(this, f, coll, colls);
};
G__27719.cljs$lang$maxFixedArity = 2;
G__27719.cljs$lang$applyTo = (function (arglist__27720){
var f = cljs.core.first(arglist__27720);
var coll = cljs.core.first(cljs.core.next(arglist__27720));
var colls = cljs.core.rest(cljs.core.next(arglist__27720));
return G__27719__delegate(f, coll, colls);
});
G__27719.cljs$lang$arity$variadic = G__27719__delegate;
return G__27719;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27730 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27730)
{var s__27731 = temp__4092__auto____27730;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27731))
{var c__27732 = cljs.core.chunk_first.call(null,s__27731);
var size__27733 = cljs.core.count.call(null,c__27732);
var b__27734 = cljs.core.chunk_buffer.call(null,size__27733);
var n__19316__auto____27735 = size__27733;
var i__27736 = 0;
while(true){
if((i__27736 < n__19316__auto____27735))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__27732,i__27736))))
{cljs.core.chunk_append.call(null,b__27734,cljs.core._nth.call(null,c__27732,i__27736));
} else
{}
{
var G__27739 = (i__27736 + 1);
i__27736 = G__27739;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27734),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__27731)));
} else
{var f__27737 = cljs.core.first.call(null,s__27731);
var r__27738 = cljs.core.rest.call(null,s__27731);
if(cljs.core.truth_(pred.call(null,f__27737)))
{return cljs.core.cons.call(null,f__27737,filter.call(null,pred,r__27738));
} else
{return filter.call(null,pred,r__27738);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__27742 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__27742.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__27740_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__27740_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__27746__27747 = to;
if(G__27746__27747)
{if((function (){var or__3943__auto____27748 = (G__27746__27747.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3943__auto____27748)
{return or__3943__auto____27748;
} else
{return G__27746__27747.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__27746__27747.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__27746__27747);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__27746__27747);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__27749__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__27749 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__27749__delegate.call(this, f, c1, c2, c3, colls);
};
G__27749.cljs$lang$maxFixedArity = 4;
G__27749.cljs$lang$applyTo = (function (arglist__27750){
var f = cljs.core.first(arglist__27750);
var c1 = cljs.core.first(cljs.core.next(arglist__27750));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27750)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27750))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__27750))));
return G__27749__delegate(f, c1, c2, c3, colls);
});
G__27749.cljs$lang$arity$variadic = G__27749__delegate;
return G__27749;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27757 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27757)
{var s__27758 = temp__4092__auto____27757;
var p__27759 = cljs.core.take.call(null,n,s__27758);
if((n === cljs.core.count.call(null,p__27759)))
{return cljs.core.cons.call(null,p__27759,partition.call(null,n,step,cljs.core.drop.call(null,step,s__27758)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____27760 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____27760)
{var s__27761 = temp__4092__auto____27760;
var p__27762 = cljs.core.take.call(null,n,s__27761);
if((n === cljs.core.count.call(null,p__27762)))
{return cljs.core.cons.call(null,p__27762,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__27761)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__27762,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__27767 = cljs.core.lookup_sentinel;
var m__27768 = m;
var ks__27769 = cljs.core.seq.call(null,ks);
while(true){
if(ks__27769)
{var m__27770 = cljs.core._lookup.call(null,m__27768,cljs.core.first.call(null,ks__27769),sentinel__27767);
if((sentinel__27767 === m__27770))
{return not_found;
} else
{{
var G__27771 = sentinel__27767;
var G__27772 = m__27770;
var G__27773 = cljs.core.next.call(null,ks__27769);
sentinel__27767 = G__27771;
m__27768 = G__27772;
ks__27769 = G__27773;
continue;
}
}
} else
{return m__27768;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__27774,v){
var vec__27779__27780 = p__27774;
var k__27781 = cljs.core.nth.call(null,vec__27779__27780,0,null);
var ks__27782 = cljs.core.nthnext.call(null,vec__27779__27780,1);
if(cljs.core.truth_(ks__27782))
{return cljs.core.assoc.call(null,m,k__27781,assoc_in.call(null,cljs.core._lookup.call(null,m,k__27781,null),ks__27782,v));
} else
{return cljs.core.assoc.call(null,m,k__27781,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__27783,f,args){
var vec__27788__27789 = p__27783;
var k__27790 = cljs.core.nth.call(null,vec__27788__27789,0,null);
var ks__27791 = cljs.core.nthnext.call(null,vec__27788__27789,1);
if(cljs.core.truth_(ks__27791))
{return cljs.core.assoc.call(null,m,k__27790,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__27790,null),ks__27791,f,args));
} else
{return cljs.core.assoc.call(null,m,k__27790,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__27790,null),args));
}
};
var update_in = function (m,p__27783,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__27783, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__27792){
var m = cljs.core.first(arglist__27792);
var p__27783 = cljs.core.first(cljs.core.next(arglist__27792));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__27792)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__27792)));
return update_in__delegate(m, p__27783, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__27795 = this;
var h__18981__auto____27796 = this__27795.__hash;
if(!((h__18981__auto____27796 == null)))
{return h__18981__auto____27796;
} else
{var h__18981__auto____27797 = cljs.core.hash_coll.call(null,coll);
this__27795.__hash = h__18981__auto____27797;
return h__18981__auto____27797;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__27798 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__27799 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__27800 = this;
var new_array__27801 = this__27800.array.slice();
(new_array__27801[k] = v);
return (new cljs.core.Vector(this__27800.meta,new_array__27801,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__27832 = null;
var G__27832__2 = (function (this_sym27802,k){
var this__27804 = this;
var this_sym27802__27805 = this;
var coll__27806 = this_sym27802__27805;
return coll__27806.cljs$core$ILookup$_lookup$arity$2(coll__27806,k);
});
var G__27832__3 = (function (this_sym27803,k,not_found){
var this__27804 = this;
var this_sym27803__27807 = this;
var coll__27808 = this_sym27803__27807;
return coll__27808.cljs$core$ILookup$_lookup$arity$3(coll__27808,k,not_found);
});
G__27832 = function(this_sym27803,k,not_found){
switch(arguments.length){
case 2:
return G__27832__2.call(this,this_sym27803,k);
case 3:
return G__27832__3.call(this,this_sym27803,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27832;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym27793,args27794){
var this__27809 = this;
return this_sym27793.call.apply(this_sym27793,[this_sym27793].concat(args27794.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__27810 = this;
var new_array__27811 = this__27810.array.slice();
new_array__27811.push(o);
return (new cljs.core.Vector(this__27810.meta,new_array__27811,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__27812 = this;
var this__27813 = this;
return cljs.core.pr_str.call(null,this__27813);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__27814 = this;
return cljs.core.ci_reduce.call(null,this__27814.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__27815 = this;
return cljs.core.ci_reduce.call(null,this__27815.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__27816 = this;
if((this__27816.array.length > 0))
{var vector_seq__27817 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__27816.array.length))
{return cljs.core.cons.call(null,(this__27816.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__27817.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__27818 = this;
return this__27818.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__27819 = this;
var count__27820 = this__27819.array.length;
if((count__27820 > 0))
{return (this__27819.array[(count__27820 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__27821 = this;
if((this__27821.array.length > 0))
{var new_array__27822 = this__27821.array.slice();
new_array__27822.pop();
return (new cljs.core.Vector(this__27821.meta,new_array__27822,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__27823 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__27824 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__27825 = this;
return (new cljs.core.Vector(meta,this__27825.array,this__27825.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__27826 = this;
return this__27826.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__27827 = this;
if((function (){var and__3941__auto____27828 = (0 <= n);
if(and__3941__auto____27828)
{return (n < this__27827.array.length);
} else
{return and__3941__auto____27828;
}
})())
{return (this__27827.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__27829 = this;
if((function (){var and__3941__auto____27830 = (0 <= n);
if(and__3941__auto____27830)
{return (n < this__27829.array.length);
} else
{return and__3941__auto____27830;
}
})())
{return (this__27829.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__27831 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__27831.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__19099__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__27834 = pv.cnt;
if((cnt__27834 < 32))
{return 0;
} else
{return (((cnt__27834 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__27840 = level;
var ret__27841 = node;
while(true){
if((ll__27840 === 0))
{return ret__27841;
} else
{var embed__27842 = ret__27841;
var r__27843 = cljs.core.pv_fresh_node.call(null,edit);
var ___27844 = cljs.core.pv_aset.call(null,r__27843,0,embed__27842);
{
var G__27845 = (ll__27840 - 5);
var G__27846 = r__27843;
ll__27840 = G__27845;
ret__27841 = G__27846;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__27852 = cljs.core.pv_clone_node.call(null,parent);
var subidx__27853 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__27852,subidx__27853,tailnode);
return ret__27852;
} else
{var child__27854 = cljs.core.pv_aget.call(null,parent,subidx__27853);
if(!((child__27854 == null)))
{var node_to_insert__27855 = push_tail.call(null,pv,(level - 5),child__27854,tailnode);
cljs.core.pv_aset.call(null,ret__27852,subidx__27853,node_to_insert__27855);
return ret__27852;
} else
{var node_to_insert__27856 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__27852,subidx__27853,node_to_insert__27856);
return ret__27852;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto____27860 = (0 <= i);
if(and__3941__auto____27860)
{return (i < pv.cnt);
} else
{return and__3941__auto____27860;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__27861 = pv.root;
var level__27862 = pv.shift;
while(true){
if((level__27862 > 0))
{{
var G__27863 = cljs.core.pv_aget.call(null,node__27861,((i >>> level__27862) & 31));
var G__27864 = (level__27862 - 5);
node__27861 = G__27863;
level__27862 = G__27864;
continue;
}
} else
{return node__27861.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__27867 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__27867,(i & 31),val);
return ret__27867;
} else
{var subidx__27868 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__27867,subidx__27868,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__27868),i,val));
return ret__27867;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__27874 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__27875 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__27874));
if((function (){var and__3941__auto____27876 = (new_child__27875 == null);
if(and__3941__auto____27876)
{return (subidx__27874 === 0);
} else
{return and__3941__auto____27876;
}
})())
{return null;
} else
{var ret__27877 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__27877,subidx__27874,new_child__27875);
return ret__27877;
}
} else
{if((subidx__27874 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__27878 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__27878,subidx__27874,null);
return ret__27878;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__27881 = this;
return (new cljs.core.TransientVector(this__27881.cnt,this__27881.shift,cljs.core.tv_editable_root.call(null,this__27881.root),cljs.core.tv_editable_tail.call(null,this__27881.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__27882 = this;
var h__18981__auto____27883 = this__27882.__hash;
if(!((h__18981__auto____27883 == null)))
{return h__18981__auto____27883;
} else
{var h__18981__auto____27884 = cljs.core.hash_coll.call(null,coll);
this__27882.__hash = h__18981__auto____27884;
return h__18981__auto____27884;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__27885 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__27886 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__27887 = this;
if((function (){var and__3941__auto____27888 = (0 <= k);
if(and__3941__auto____27888)
{return (k < this__27887.cnt);
} else
{return and__3941__auto____27888;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__27889 = this__27887.tail.slice();
(new_tail__27889[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__27887.meta,this__27887.cnt,this__27887.shift,this__27887.root,new_tail__27889,null));
} else
{return (new cljs.core.PersistentVector(this__27887.meta,this__27887.cnt,this__27887.shift,cljs.core.do_assoc.call(null,coll,this__27887.shift,this__27887.root,k,v),this__27887.tail,null));
}
} else
{if((k === this__27887.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__27887.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__27937 = null;
var G__27937__2 = (function (this_sym27890,k){
var this__27892 = this;
var this_sym27890__27893 = this;
var coll__27894 = this_sym27890__27893;
return coll__27894.cljs$core$ILookup$_lookup$arity$2(coll__27894,k);
});
var G__27937__3 = (function (this_sym27891,k,not_found){
var this__27892 = this;
var this_sym27891__27895 = this;
var coll__27896 = this_sym27891__27895;
return coll__27896.cljs$core$ILookup$_lookup$arity$3(coll__27896,k,not_found);
});
G__27937 = function(this_sym27891,k,not_found){
switch(arguments.length){
case 2:
return G__27937__2.call(this,this_sym27891,k);
case 3:
return G__27937__3.call(this,this_sym27891,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__27937;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym27879,args27880){
var this__27897 = this;
return this_sym27879.call.apply(this_sym27879,[this_sym27879].concat(args27880.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__27898 = this;
var step_init__27899 = [0,init];
var i__27900 = 0;
while(true){
if((i__27900 < this__27898.cnt))
{var arr__27901 = cljs.core.array_for.call(null,v,i__27900);
var len__27902 = arr__27901.length;
var init__27906 = (function (){var j__27903 = 0;
var init__27904 = (step_init__27899[1]);
while(true){
if((j__27903 < len__27902))
{var init__27905 = f.call(null,init__27904,(j__27903 + i__27900),(arr__27901[j__27903]));
if(cljs.core.reduced_QMARK_.call(null,init__27905))
{return init__27905;
} else
{{
var G__27938 = (j__27903 + 1);
var G__27939 = init__27905;
j__27903 = G__27938;
init__27904 = G__27939;
continue;
}
}
} else
{(step_init__27899[0] = len__27902);
(step_init__27899[1] = init__27904);
return init__27904;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__27906))
{return cljs.core.deref.call(null,init__27906);
} else
{{
var G__27940 = (i__27900 + (step_init__27899[0]));
i__27900 = G__27940;
continue;
}
}
} else
{return (step_init__27899[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__27907 = this;
if(((this__27907.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__27908 = this__27907.tail.slice();
new_tail__27908.push(o);
return (new cljs.core.PersistentVector(this__27907.meta,(this__27907.cnt + 1),this__27907.shift,this__27907.root,new_tail__27908,null));
} else
{var root_overflow_QMARK___27909 = ((this__27907.cnt >>> 5) > (1 << this__27907.shift));
var new_shift__27910 = ((root_overflow_QMARK___27909)?(this__27907.shift + 5):this__27907.shift);
var new_root__27912 = ((root_overflow_QMARK___27909)?(function (){var n_r__27911 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__27911,0,this__27907.root);
cljs.core.pv_aset.call(null,n_r__27911,1,cljs.core.new_path.call(null,null,this__27907.shift,(new cljs.core.VectorNode(null,this__27907.tail))));
return n_r__27911;
})():cljs.core.push_tail.call(null,coll,this__27907.shift,this__27907.root,(new cljs.core.VectorNode(null,this__27907.tail))));
return (new cljs.core.PersistentVector(this__27907.meta,(this__27907.cnt + 1),new_shift__27910,new_root__27912,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__27913 = this;
if((this__27913.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__27913.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__27914 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__27915 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__27916 = this;
var this__27917 = this;
return cljs.core.pr_str.call(null,this__27917);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__27918 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__27919 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__27920 = this;
if((this__27920.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__27921 = this;
return this__27921.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__27922 = this;
if((this__27922.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__27922.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__27923 = this;
if((this__27923.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__27923.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__27923.meta);
} else
{if((1 < (this__27923.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__27923.meta,(this__27923.cnt - 1),this__27923.shift,this__27923.root,this__27923.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__27924 = cljs.core.array_for.call(null,coll,(this__27923.cnt - 2));
var nr__27925 = cljs.core.pop_tail.call(null,coll,this__27923.shift,this__27923.root);
var new_root__27926 = (((nr__27925 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__27925);
var cnt_1__27927 = (this__27923.cnt - 1);
if((function (){var and__3941__auto____27928 = (5 < this__27923.shift);
if(and__3941__auto____27928)
{return (cljs.core.pv_aget.call(null,new_root__27926,1) == null);
} else
{return and__3941__auto____27928;
}
})())
{return (new cljs.core.PersistentVector(this__27923.meta,cnt_1__27927,(this__27923.shift - 5),cljs.core.pv_aget.call(null,new_root__27926,0),new_tail__27924,null));
} else
{return (new cljs.core.PersistentVector(this__27923.meta,cnt_1__27927,this__27923.shift,new_root__27926,new_tail__27924,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__27929 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__27930 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__27931 = this;
return (new cljs.core.PersistentVector(meta,this__27931.cnt,this__27931.shift,this__27931.root,this__27931.tail,this__27931.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__27932 = this;
return this__27932.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__27933 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__27934 = this;
if((function (){var and__3941__auto____27935 = (0 <= n);
if(and__3941__auto____27935)
{return (n < this__27934.cnt);
} else
{return and__3941__auto____27935;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__27936 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__27936.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__27941 = xs.length;
var xs__27942 = (((no_clone === true))?xs:xs.slice());
if((l__27941 < 32))
{return (new cljs.core.PersistentVector(null,l__27941,5,cljs.core.PersistentVector.EMPTY_NODE,xs__27942,null));
} else
{var node__27943 = xs__27942.slice(0,32);
var v__27944 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__27943,null));
var i__27945 = 32;
var out__27946 = cljs.core._as_transient.call(null,v__27944);
while(true){
if((i__27945 < l__27941))
{{
var G__27947 = (i__27945 + 1);
var G__27948 = cljs.core.conj_BANG_.call(null,out__27946,(xs__27942[i__27945]));
i__27945 = G__27947;
out__27946 = G__27948;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__27946);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__27949){
var args = cljs.core.seq(arglist__27949);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__27950 = this;
if(((this__27950.off + 1) < this__27950.node.length))
{var s__27951 = cljs.core.chunked_seq.call(null,this__27950.vec,this__27950.node,this__27950.i,(this__27950.off + 1));
if((s__27951 == null))
{return null;
} else
{return s__27951;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__27952 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__27953 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__27954 = this;
return (this__27954.node[this__27954.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__27955 = this;
if(((this__27955.off + 1) < this__27955.node.length))
{var s__27956 = cljs.core.chunked_seq.call(null,this__27955.vec,this__27955.node,this__27955.i,(this__27955.off + 1));
if((s__27956 == null))
{return cljs.core.List.EMPTY;
} else
{return s__27956;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__27957 = this;
var l__27958 = this__27957.node.length;
var s__27959 = ((((this__27957.i + l__27958) < cljs.core._count.call(null,this__27957.vec)))?cljs.core.chunked_seq.call(null,this__27957.vec,(this__27957.i + l__27958),0):null);
if((s__27959 == null))
{return null;
} else
{return s__27959;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__27960 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__27961 = this;
return cljs.core.chunked_seq.call(null,this__27961.vec,this__27961.node,this__27961.i,this__27961.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__27962 = this;
return this__27962.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__27963 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__27963.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__27964 = this;
return cljs.core.array_chunk.call(null,this__27964.node,this__27964.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__27965 = this;
var l__27966 = this__27965.node.length;
var s__27967 = ((((this__27965.i + l__27966) < cljs.core._count.call(null,this__27965.vec)))?cljs.core.chunked_seq.call(null,this__27965.vec,(this__27965.i + l__27966),0):null);
if((s__27967 == null))
{return cljs.core.List.EMPTY;
} else
{return s__27967;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__27970 = this;
var h__18981__auto____27971 = this__27970.__hash;
if(!((h__18981__auto____27971 == null)))
{return h__18981__auto____27971;
} else
{var h__18981__auto____27972 = cljs.core.hash_coll.call(null,coll);
this__27970.__hash = h__18981__auto____27972;
return h__18981__auto____27972;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__27973 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__27974 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__27975 = this;
var v_pos__27976 = (this__27975.start + key);
return (new cljs.core.Subvec(this__27975.meta,cljs.core._assoc.call(null,this__27975.v,v_pos__27976,val),this__27975.start,((this__27975.end > (v_pos__27976 + 1)) ? this__27975.end : (v_pos__27976 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__28002 = null;
var G__28002__2 = (function (this_sym27977,k){
var this__27979 = this;
var this_sym27977__27980 = this;
var coll__27981 = this_sym27977__27980;
return coll__27981.cljs$core$ILookup$_lookup$arity$2(coll__27981,k);
});
var G__28002__3 = (function (this_sym27978,k,not_found){
var this__27979 = this;
var this_sym27978__27982 = this;
var coll__27983 = this_sym27978__27982;
return coll__27983.cljs$core$ILookup$_lookup$arity$3(coll__27983,k,not_found);
});
G__28002 = function(this_sym27978,k,not_found){
switch(arguments.length){
case 2:
return G__28002__2.call(this,this_sym27978,k);
case 3:
return G__28002__3.call(this,this_sym27978,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28002;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym27968,args27969){
var this__27984 = this;
return this_sym27968.call.apply(this_sym27968,[this_sym27968].concat(args27969.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__27985 = this;
return (new cljs.core.Subvec(this__27985.meta,cljs.core._assoc_n.call(null,this__27985.v,this__27985.end,o),this__27985.start,(this__27985.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__27986 = this;
var this__27987 = this;
return cljs.core.pr_str.call(null,this__27987);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__27988 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__27989 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__27990 = this;
var subvec_seq__27991 = (function subvec_seq(i){
if((i === this__27990.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__27990.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__27991.call(null,this__27990.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__27992 = this;
return (this__27992.end - this__27992.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__27993 = this;
return cljs.core._nth.call(null,this__27993.v,(this__27993.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__27994 = this;
if((this__27994.start === this__27994.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__27994.meta,this__27994.v,this__27994.start,(this__27994.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__27995 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__27996 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__27997 = this;
return (new cljs.core.Subvec(meta,this__27997.v,this__27997.start,this__27997.end,this__27997.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__27998 = this;
return this__27998.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__27999 = this;
return cljs.core._nth.call(null,this__27999.v,(this__27999.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__28000 = this;
return cljs.core._nth.call(null,this__28000.v,(this__28000.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28001 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__28001.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__28004 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__28004,0,tl.length);
return ret__28004;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__28008 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__28009 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__28008,subidx__28009,(((level === 5))?tail_node:(function (){var child__28010 = cljs.core.pv_aget.call(null,ret__28008,subidx__28009);
if(!((child__28010 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__28010,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__28008;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__28015 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__28016 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__28017 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__28015,subidx__28016));
if((function (){var and__3941__auto____28018 = (new_child__28017 == null);
if(and__3941__auto____28018)
{return (subidx__28016 === 0);
} else
{return and__3941__auto____28018;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__28015,subidx__28016,new_child__28017);
return node__28015;
}
} else
{if((subidx__28016 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__28015,subidx__28016,null);
return node__28015;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto____28023 = (0 <= i);
if(and__3941__auto____28023)
{return (i < tv.cnt);
} else
{return and__3941__auto____28023;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__28024 = tv.root;
var node__28025 = root__28024;
var level__28026 = tv.shift;
while(true){
if((level__28026 > 0))
{{
var G__28027 = cljs.core.tv_ensure_editable.call(null,root__28024.edit,cljs.core.pv_aget.call(null,node__28025,((i >>> level__28026) & 31)));
var G__28028 = (level__28026 - 5);
node__28025 = G__28027;
level__28026 = G__28028;
continue;
}
} else
{return node__28025.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__28068 = null;
var G__28068__2 = (function (this_sym28031,k){
var this__28033 = this;
var this_sym28031__28034 = this;
var coll__28035 = this_sym28031__28034;
return coll__28035.cljs$core$ILookup$_lookup$arity$2(coll__28035,k);
});
var G__28068__3 = (function (this_sym28032,k,not_found){
var this__28033 = this;
var this_sym28032__28036 = this;
var coll__28037 = this_sym28032__28036;
return coll__28037.cljs$core$ILookup$_lookup$arity$3(coll__28037,k,not_found);
});
G__28068 = function(this_sym28032,k,not_found){
switch(arguments.length){
case 2:
return G__28068__2.call(this,this_sym28032,k);
case 3:
return G__28068__3.call(this,this_sym28032,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28068;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym28029,args28030){
var this__28038 = this;
return this_sym28029.call.apply(this_sym28029,[this_sym28029].concat(args28030.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__28039 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__28040 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__28041 = this;
if(this__28041.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__28042 = this;
if((function (){var and__3941__auto____28043 = (0 <= n);
if(and__3941__auto____28043)
{return (n < this__28042.cnt);
} else
{return and__3941__auto____28043;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28044 = this;
if(this__28044.root.edit)
{return this__28044.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__28045 = this;
if(this__28045.root.edit)
{if((function (){var and__3941__auto____28046 = (0 <= n);
if(and__3941__auto____28046)
{return (n < this__28045.cnt);
} else
{return and__3941__auto____28046;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__28045.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__28051 = (function go(level,node){
var node__28049 = cljs.core.tv_ensure_editable.call(null,this__28045.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__28049,(n & 31),val);
return node__28049;
} else
{var subidx__28050 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__28049,subidx__28050,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__28049,subidx__28050)));
return node__28049;
}
}).call(null,this__28045.shift,this__28045.root);
this__28045.root = new_root__28051;
return tcoll;
}
} else
{if((n === this__28045.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__28045.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__28052 = this;
if(this__28052.root.edit)
{if((this__28052.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__28052.cnt))
{this__28052.cnt = 0;
return tcoll;
} else
{if((((this__28052.cnt - 1) & 31) > 0))
{this__28052.cnt = (this__28052.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__28053 = cljs.core.editable_array_for.call(null,tcoll,(this__28052.cnt - 2));
var new_root__28055 = (function (){var nr__28054 = cljs.core.tv_pop_tail.call(null,tcoll,this__28052.shift,this__28052.root);
if(!((nr__28054 == null)))
{return nr__28054;
} else
{return (new cljs.core.VectorNode(this__28052.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3941__auto____28056 = (5 < this__28052.shift);
if(and__3941__auto____28056)
{return (cljs.core.pv_aget.call(null,new_root__28055,1) == null);
} else
{return and__3941__auto____28056;
}
})())
{var new_root__28057 = cljs.core.tv_ensure_editable.call(null,this__28052.root.edit,cljs.core.pv_aget.call(null,new_root__28055,0));
this__28052.root = new_root__28057;
this__28052.shift = (this__28052.shift - 5);
this__28052.cnt = (this__28052.cnt - 1);
this__28052.tail = new_tail__28053;
return tcoll;
} else
{this__28052.root = new_root__28055;
this__28052.cnt = (this__28052.cnt - 1);
this__28052.tail = new_tail__28053;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__28058 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__28059 = this;
if(this__28059.root.edit)
{if(((this__28059.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__28059.tail[(this__28059.cnt & 31)] = o);
this__28059.cnt = (this__28059.cnt + 1);
return tcoll;
} else
{var tail_node__28060 = (new cljs.core.VectorNode(this__28059.root.edit,this__28059.tail));
var new_tail__28061 = cljs.core.make_array.call(null,32);
(new_tail__28061[0] = o);
this__28059.tail = new_tail__28061;
if(((this__28059.cnt >>> 5) > (1 << this__28059.shift)))
{var new_root_array__28062 = cljs.core.make_array.call(null,32);
var new_shift__28063 = (this__28059.shift + 5);
(new_root_array__28062[0] = this__28059.root);
(new_root_array__28062[1] = cljs.core.new_path.call(null,this__28059.root.edit,this__28059.shift,tail_node__28060));
this__28059.root = (new cljs.core.VectorNode(this__28059.root.edit,new_root_array__28062));
this__28059.shift = new_shift__28063;
this__28059.cnt = (this__28059.cnt + 1);
return tcoll;
} else
{var new_root__28064 = cljs.core.tv_push_tail.call(null,tcoll,this__28059.shift,this__28059.root,tail_node__28060);
this__28059.root = new_root__28064;
this__28059.cnt = (this__28059.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__28065 = this;
if(this__28065.root.edit)
{this__28065.root.edit = null;
var len__28066 = (this__28065.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__28067 = cljs.core.make_array.call(null,len__28066);
cljs.core.array_copy.call(null,this__28065.tail,0,trimmed_tail__28067,0,len__28066);
return (new cljs.core.PersistentVector(null,this__28065.cnt,this__28065.shift,this__28065.root,trimmed_tail__28067,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28069 = this;
var h__18981__auto____28070 = this__28069.__hash;
if(!((h__18981__auto____28070 == null)))
{return h__18981__auto____28070;
} else
{var h__18981__auto____28071 = cljs.core.hash_coll.call(null,coll);
this__28069.__hash = h__18981__auto____28071;
return h__18981__auto____28071;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28072 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__28073 = this;
var this__28074 = this;
return cljs.core.pr_str.call(null,this__28074);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28075 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__28076 = this;
return cljs.core._first.call(null,this__28076.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__28077 = this;
var temp__4090__auto____28078 = cljs.core.next.call(null,this__28077.front);
if(temp__4090__auto____28078)
{var f1__28079 = temp__4090__auto____28078;
return (new cljs.core.PersistentQueueSeq(this__28077.meta,f1__28079,this__28077.rear,null));
} else
{if((this__28077.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__28077.meta,this__28077.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28080 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28081 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__28081.front,this__28081.rear,this__28081.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28082 = this;
return this__28082.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28083 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__28083.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28084 = this;
var h__18981__auto____28085 = this__28084.__hash;
if(!((h__18981__auto____28085 == null)))
{return h__18981__auto____28085;
} else
{var h__18981__auto____28086 = cljs.core.hash_coll.call(null,coll);
this__28084.__hash = h__18981__auto____28086;
return h__18981__auto____28086;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28087 = this;
if(cljs.core.truth_(this__28087.front))
{return (new cljs.core.PersistentQueue(this__28087.meta,(this__28087.count + 1),this__28087.front,cljs.core.conj.call(null,(function (){var or__3943__auto____28088 = this__28087.rear;
if(cljs.core.truth_(or__3943__auto____28088))
{return or__3943__auto____28088;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__28087.meta,(this__28087.count + 1),cljs.core.conj.call(null,this__28087.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__28089 = this;
var this__28090 = this;
return cljs.core.pr_str.call(null,this__28090);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28091 = this;
var rear__28092 = cljs.core.seq.call(null,this__28091.rear);
if(cljs.core.truth_((function (){var or__3943__auto____28093 = this__28091.front;
if(cljs.core.truth_(or__3943__auto____28093))
{return or__3943__auto____28093;
} else
{return rear__28092;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__28091.front,cljs.core.seq.call(null,rear__28092),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28094 = this;
return this__28094.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__28095 = this;
return cljs.core._first.call(null,this__28095.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__28096 = this;
if(cljs.core.truth_(this__28096.front))
{var temp__4090__auto____28097 = cljs.core.next.call(null,this__28096.front);
if(temp__4090__auto____28097)
{var f1__28098 = temp__4090__auto____28097;
return (new cljs.core.PersistentQueue(this__28096.meta,(this__28096.count - 1),f1__28098,this__28096.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__28096.meta,(this__28096.count - 1),cljs.core.seq.call(null,this__28096.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__28099 = this;
return cljs.core.first.call(null,this__28099.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__28100 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28101 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28102 = this;
return (new cljs.core.PersistentQueue(meta,this__28102.count,this__28102.front,this__28102.rear,this__28102.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28103 = this;
return this__28103.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28104 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__28105 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__28108 = array.length;
var i__28109 = 0;
while(true){
if((i__28109 < len__28108))
{if((k === (array[i__28109])))
{return i__28109;
} else
{{
var G__28110 = (i__28109 + incr);
i__28109 = G__28110;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__28113 = cljs.core.hash.call(null,a);
var b__28114 = cljs.core.hash.call(null,b);
if((a__28113 < b__28114))
{return -1;
} else
{if((a__28113 > b__28114))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__28122 = m.keys;
var len__28123 = ks__28122.length;
var so__28124 = m.strobj;
var out__28125 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__28126 = 0;
var out__28127 = cljs.core.transient$.call(null,out__28125);
while(true){
if((i__28126 < len__28123))
{var k__28128 = (ks__28122[i__28126]);
{
var G__28129 = (i__28126 + 1);
var G__28130 = cljs.core.assoc_BANG_.call(null,out__28127,k__28128,(so__28124[k__28128]));
i__28126 = G__28129;
out__28127 = G__28130;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__28127,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__28136 = {};
var l__28137 = ks.length;
var i__28138 = 0;
while(true){
if((i__28138 < l__28137))
{var k__28139 = (ks[i__28138]);
(new_obj__28136[k__28139] = (obj[k__28139]));
{
var G__28140 = (i__28138 + 1);
i__28138 = G__28140;
continue;
}
} else
{}
break;
}
return new_obj__28136;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__28143 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28144 = this;
var h__18981__auto____28145 = this__28144.__hash;
if(!((h__18981__auto____28145 == null)))
{return h__18981__auto____28145;
} else
{var h__18981__auto____28146 = cljs.core.hash_imap.call(null,coll);
this__28144.__hash = h__18981__auto____28146;
return h__18981__auto____28146;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__28147 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__28148 = this;
if((function (){var and__3941__auto____28149 = goog.isString(k);
if(and__3941__auto____28149)
{return !((cljs.core.scan_array.call(null,1,k,this__28148.keys) == null));
} else
{return and__3941__auto____28149;
}
})())
{return (this__28148.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__28150 = this;
if(goog.isString(k))
{if((function (){var or__3943__auto____28151 = (this__28150.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto____28151)
{return or__3943__auto____28151;
} else
{return (this__28150.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__28150.keys) == null)))
{var new_strobj__28152 = cljs.core.obj_clone.call(null,this__28150.strobj,this__28150.keys);
(new_strobj__28152[k] = v);
return (new cljs.core.ObjMap(this__28150.meta,this__28150.keys,new_strobj__28152,(this__28150.update_count + 1),null));
} else
{var new_strobj__28153 = cljs.core.obj_clone.call(null,this__28150.strobj,this__28150.keys);
var new_keys__28154 = this__28150.keys.slice();
(new_strobj__28153[k] = v);
new_keys__28154.push(k);
return (new cljs.core.ObjMap(this__28150.meta,new_keys__28154,new_strobj__28153,(this__28150.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__28155 = this;
if((function (){var and__3941__auto____28156 = goog.isString(k);
if(and__3941__auto____28156)
{return !((cljs.core.scan_array.call(null,1,k,this__28155.keys) == null));
} else
{return and__3941__auto____28156;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__28178 = null;
var G__28178__2 = (function (this_sym28157,k){
var this__28159 = this;
var this_sym28157__28160 = this;
var coll__28161 = this_sym28157__28160;
return coll__28161.cljs$core$ILookup$_lookup$arity$2(coll__28161,k);
});
var G__28178__3 = (function (this_sym28158,k,not_found){
var this__28159 = this;
var this_sym28158__28162 = this;
var coll__28163 = this_sym28158__28162;
return coll__28163.cljs$core$ILookup$_lookup$arity$3(coll__28163,k,not_found);
});
G__28178 = function(this_sym28158,k,not_found){
switch(arguments.length){
case 2:
return G__28178__2.call(this,this_sym28158,k);
case 3:
return G__28178__3.call(this,this_sym28158,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28178;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym28141,args28142){
var this__28164 = this;
return this_sym28141.call.apply(this_sym28141,[this_sym28141].concat(args28142.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__28165 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__28166 = this;
var this__28167 = this;
return cljs.core.pr_str.call(null,this__28167);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28168 = this;
if((this__28168.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__28131_SHARP_){
return cljs.core.vector.call(null,p1__28131_SHARP_,(this__28168.strobj[p1__28131_SHARP_]));
}),this__28168.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28169 = this;
return this__28169.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28170 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28171 = this;
return (new cljs.core.ObjMap(meta,this__28171.keys,this__28171.strobj,this__28171.update_count,this__28171.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28172 = this;
return this__28172.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28173 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__28173.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__28174 = this;
if((function (){var and__3941__auto____28175 = goog.isString(k);
if(and__3941__auto____28175)
{return !((cljs.core.scan_array.call(null,1,k,this__28174.keys) == null));
} else
{return and__3941__auto____28175;
}
})())
{var new_keys__28176 = this__28174.keys.slice();
var new_strobj__28177 = cljs.core.obj_clone.call(null,this__28174.strobj,this__28174.keys);
new_keys__28176.splice(cljs.core.scan_array.call(null,1,k,new_keys__28176),1);
cljs.core.js_delete.call(null,new_strobj__28177,k);
return (new cljs.core.ObjMap(this__28174.meta,new_keys__28176,new_strobj__28177,(this__28174.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28182 = this;
var h__18981__auto____28183 = this__28182.__hash;
if(!((h__18981__auto____28183 == null)))
{return h__18981__auto____28183;
} else
{var h__18981__auto____28184 = cljs.core.hash_imap.call(null,coll);
this__28182.__hash = h__18981__auto____28184;
return h__18981__auto____28184;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__28185 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__28186 = this;
var bucket__28187 = (this__28186.hashobj[cljs.core.hash.call(null,k)]);
var i__28188 = (cljs.core.truth_(bucket__28187)?cljs.core.scan_array.call(null,2,k,bucket__28187):null);
if(cljs.core.truth_(i__28188))
{return (bucket__28187[(i__28188 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__28189 = this;
var h__28190 = cljs.core.hash.call(null,k);
var bucket__28191 = (this__28189.hashobj[h__28190]);
if(cljs.core.truth_(bucket__28191))
{var new_bucket__28192 = bucket__28191.slice();
var new_hashobj__28193 = goog.object.clone(this__28189.hashobj);
(new_hashobj__28193[h__28190] = new_bucket__28192);
var temp__4090__auto____28194 = cljs.core.scan_array.call(null,2,k,new_bucket__28192);
if(cljs.core.truth_(temp__4090__auto____28194))
{var i__28195 = temp__4090__auto____28194;
(new_bucket__28192[(i__28195 + 1)] = v);
return (new cljs.core.HashMap(this__28189.meta,this__28189.count,new_hashobj__28193,null));
} else
{new_bucket__28192.push(k,v);
return (new cljs.core.HashMap(this__28189.meta,(this__28189.count + 1),new_hashobj__28193,null));
}
} else
{var new_hashobj__28196 = goog.object.clone(this__28189.hashobj);
(new_hashobj__28196[h__28190] = [k,v]);
return (new cljs.core.HashMap(this__28189.meta,(this__28189.count + 1),new_hashobj__28196,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__28197 = this;
var bucket__28198 = (this__28197.hashobj[cljs.core.hash.call(null,k)]);
var i__28199 = (cljs.core.truth_(bucket__28198)?cljs.core.scan_array.call(null,2,k,bucket__28198):null);
if(cljs.core.truth_(i__28199))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__28224 = null;
var G__28224__2 = (function (this_sym28200,k){
var this__28202 = this;
var this_sym28200__28203 = this;
var coll__28204 = this_sym28200__28203;
return coll__28204.cljs$core$ILookup$_lookup$arity$2(coll__28204,k);
});
var G__28224__3 = (function (this_sym28201,k,not_found){
var this__28202 = this;
var this_sym28201__28205 = this;
var coll__28206 = this_sym28201__28205;
return coll__28206.cljs$core$ILookup$_lookup$arity$3(coll__28206,k,not_found);
});
G__28224 = function(this_sym28201,k,not_found){
switch(arguments.length){
case 2:
return G__28224__2.call(this,this_sym28201,k);
case 3:
return G__28224__3.call(this,this_sym28201,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28224;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym28180,args28181){
var this__28207 = this;
return this_sym28180.call.apply(this_sym28180,[this_sym28180].concat(args28181.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__28208 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__28209 = this;
var this__28210 = this;
return cljs.core.pr_str.call(null,this__28210);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28211 = this;
if((this__28211.count > 0))
{var hashes__28212 = cljs.core.js_keys.call(null,this__28211.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__28179_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__28211.hashobj[p1__28179_SHARP_])));
}),hashes__28212);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28213 = this;
return this__28213.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28214 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28215 = this;
return (new cljs.core.HashMap(meta,this__28215.count,this__28215.hashobj,this__28215.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28216 = this;
return this__28216.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28217 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__28217.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__28218 = this;
var h__28219 = cljs.core.hash.call(null,k);
var bucket__28220 = (this__28218.hashobj[h__28219]);
var i__28221 = (cljs.core.truth_(bucket__28220)?cljs.core.scan_array.call(null,2,k,bucket__28220):null);
if(cljs.core.not.call(null,i__28221))
{return coll;
} else
{var new_hashobj__28222 = goog.object.clone(this__28218.hashobj);
if((3 > bucket__28220.length))
{cljs.core.js_delete.call(null,new_hashobj__28222,h__28219);
} else
{var new_bucket__28223 = bucket__28220.slice();
new_bucket__28223.splice(i__28221,2);
(new_hashobj__28222[h__28219] = new_bucket__28223);
}
return (new cljs.core.HashMap(this__28218.meta,(this__28218.count - 1),new_hashobj__28222,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__28225 = ks.length;
var i__28226 = 0;
var out__28227 = cljs.core.HashMap.EMPTY;
while(true){
if((i__28226 < len__28225))
{{
var G__28228 = (i__28226 + 1);
var G__28229 = cljs.core.assoc.call(null,out__28227,(ks[i__28226]),(vs[i__28226]));
i__28226 = G__28228;
out__28227 = G__28229;
continue;
}
} else
{return out__28227;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__28233 = m.arr;
var len__28234 = arr__28233.length;
var i__28235 = 0;
while(true){
if((len__28234 <= i__28235))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__28233[i__28235]),k))
{return i__28235;
} else
{if("\uFDD0'else")
{{
var G__28236 = (i__28235 + 2);
i__28235 = G__28236;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__28239 = this;
return (new cljs.core.TransientArrayMap({},this__28239.arr.length,this__28239.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28240 = this;
var h__18981__auto____28241 = this__28240.__hash;
if(!((h__18981__auto____28241 == null)))
{return h__18981__auto____28241;
} else
{var h__18981__auto____28242 = cljs.core.hash_imap.call(null,coll);
this__28240.__hash = h__18981__auto____28242;
return h__18981__auto____28242;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__28243 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__28244 = this;
var idx__28245 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__28245 === -1))
{return not_found;
} else
{return (this__28244.arr[(idx__28245 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__28246 = this;
var idx__28247 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__28247 === -1))
{if((this__28246.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__28246.meta,(this__28246.cnt + 1),(function (){var G__28248__28249 = this__28246.arr.slice();
G__28248__28249.push(k);
G__28248__28249.push(v);
return G__28248__28249;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__28246.arr[(idx__28247 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__28246.meta,this__28246.cnt,(function (){var G__28250__28251 = this__28246.arr.slice();
(G__28250__28251[(idx__28247 + 1)] = v);
return G__28250__28251;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__28252 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__28284 = null;
var G__28284__2 = (function (this_sym28253,k){
var this__28255 = this;
var this_sym28253__28256 = this;
var coll__28257 = this_sym28253__28256;
return coll__28257.cljs$core$ILookup$_lookup$arity$2(coll__28257,k);
});
var G__28284__3 = (function (this_sym28254,k,not_found){
var this__28255 = this;
var this_sym28254__28258 = this;
var coll__28259 = this_sym28254__28258;
return coll__28259.cljs$core$ILookup$_lookup$arity$3(coll__28259,k,not_found);
});
G__28284 = function(this_sym28254,k,not_found){
switch(arguments.length){
case 2:
return G__28284__2.call(this,this_sym28254,k);
case 3:
return G__28284__3.call(this,this_sym28254,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28284;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym28237,args28238){
var this__28260 = this;
return this_sym28237.call.apply(this_sym28237,[this_sym28237].concat(args28238.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__28261 = this;
var len__28262 = this__28261.arr.length;
var i__28263 = 0;
var init__28264 = init;
while(true){
if((i__28263 < len__28262))
{var init__28265 = f.call(null,init__28264,(this__28261.arr[i__28263]),(this__28261.arr[(i__28263 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__28265))
{return cljs.core.deref.call(null,init__28265);
} else
{{
var G__28285 = (i__28263 + 2);
var G__28286 = init__28265;
i__28263 = G__28285;
init__28264 = G__28286;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__28266 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__28267 = this;
var this__28268 = this;
return cljs.core.pr_str.call(null,this__28268);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28269 = this;
if((this__28269.cnt > 0))
{var len__28270 = this__28269.arr.length;
var array_map_seq__28271 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__28270))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__28269.arr[i]),(this__28269.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__28271.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28272 = this;
return this__28272.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28273 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28274 = this;
return (new cljs.core.PersistentArrayMap(meta,this__28274.cnt,this__28274.arr,this__28274.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28275 = this;
return this__28275.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28276 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28276.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__28277 = this;
var idx__28278 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__28278 >= 0))
{var len__28279 = this__28277.arr.length;
var new_len__28280 = (len__28279 - 2);
if((new_len__28280 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__28281 = cljs.core.make_array.call(null,new_len__28280);
var s__28282 = 0;
var d__28283 = 0;
while(true){
if((s__28282 >= len__28279))
{return (new cljs.core.PersistentArrayMap(this__28277.meta,(this__28277.cnt - 1),new_arr__28281,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__28277.arr[s__28282])))
{{
var G__28287 = (s__28282 + 2);
var G__28288 = d__28283;
s__28282 = G__28287;
d__28283 = G__28288;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__28281[d__28283] = (this__28277.arr[s__28282]));
(new_arr__28281[(d__28283 + 1)] = (this__28277.arr[(s__28282 + 1)]));
{
var G__28289 = (s__28282 + 2);
var G__28290 = (d__28283 + 2);
s__28282 = G__28289;
d__28283 = G__28290;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__28291 = cljs.core.count.call(null,ks);
var i__28292 = 0;
var out__28293 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__28292 < len__28291))
{{
var G__28294 = (i__28292 + 1);
var G__28295 = cljs.core.assoc_BANG_.call(null,out__28293,(ks[i__28292]),(vs[i__28292]));
i__28292 = G__28294;
out__28293 = G__28295;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__28293);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__28296 = this;
if(cljs.core.truth_(this__28296.editable_QMARK_))
{var idx__28297 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__28297 >= 0))
{(this__28296.arr[idx__28297] = (this__28296.arr[(this__28296.len - 2)]));
(this__28296.arr[(idx__28297 + 1)] = (this__28296.arr[(this__28296.len - 1)]));
var G__28298__28299 = this__28296.arr;
G__28298__28299.pop();
G__28298__28299.pop();
G__28298__28299;
this__28296.len = (this__28296.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__28300 = this;
if(cljs.core.truth_(this__28300.editable_QMARK_))
{var idx__28301 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__28301 === -1))
{if(((this__28300.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__28300.len = (this__28300.len + 2);
this__28300.arr.push(key);
this__28300.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__28300.len,this__28300.arr),key,val);
}
} else
{if((val === (this__28300.arr[(idx__28301 + 1)])))
{return tcoll;
} else
{(this__28300.arr[(idx__28301 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__28302 = this;
if(cljs.core.truth_(this__28302.editable_QMARK_))
{if((function (){var G__28303__28304 = o;
if(G__28303__28304)
{if((function (){var or__3943__auto____28305 = (G__28303__28304.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____28305)
{return or__3943__auto____28305;
} else
{return G__28303__28304.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__28303__28304.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__28303__28304);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__28303__28304);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__28306 = cljs.core.seq.call(null,o);
var tcoll__28307 = tcoll;
while(true){
var temp__4090__auto____28308 = cljs.core.first.call(null,es__28306);
if(cljs.core.truth_(temp__4090__auto____28308))
{var e__28309 = temp__4090__auto____28308;
{
var G__28315 = cljs.core.next.call(null,es__28306);
var G__28316 = tcoll__28307.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__28307,cljs.core.key.call(null,e__28309),cljs.core.val.call(null,e__28309));
es__28306 = G__28315;
tcoll__28307 = G__28316;
continue;
}
} else
{return tcoll__28307;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__28310 = this;
if(cljs.core.truth_(this__28310.editable_QMARK_))
{this__28310.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__28310.len,2),this__28310.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__28311 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__28312 = this;
if(cljs.core.truth_(this__28312.editable_QMARK_))
{var idx__28313 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__28313 === -1))
{return not_found;
} else
{return (this__28312.arr[(idx__28313 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__28314 = this;
if(cljs.core.truth_(this__28314.editable_QMARK_))
{return cljs.core.quot.call(null,this__28314.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__28319 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__28320 = 0;
while(true){
if((i__28320 < len))
{{
var G__28321 = cljs.core.assoc_BANG_.call(null,out__28319,(arr[i__28320]),(arr[(i__28320 + 1)]));
var G__28322 = (i__28320 + 2);
out__28319 = G__28321;
i__28320 = G__28322;
continue;
}
} else
{return out__28319;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__19099__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__28327__28328 = arr.slice();
(G__28327__28328[i] = a);
return G__28327__28328;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__28329__28330 = arr.slice();
(G__28329__28330[i] = a);
(G__28329__28330[j] = b);
return G__28329__28330;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__28332 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__28332,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__28332,(2 * i),(new_arr__28332.length - (2 * i)));
return new_arr__28332;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__28335 = inode.ensure_editable(edit);
(editable__28335.arr[i] = a);
return editable__28335;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__28336 = inode.ensure_editable(edit);
(editable__28336.arr[i] = a);
(editable__28336.arr[j] = b);
return editable__28336;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__28343 = arr.length;
var i__28344 = 0;
var init__28345 = init;
while(true){
if((i__28344 < len__28343))
{var init__28348 = (function (){var k__28346 = (arr[i__28344]);
if(!((k__28346 == null)))
{return f.call(null,init__28345,k__28346,(arr[(i__28344 + 1)]));
} else
{var node__28347 = (arr[(i__28344 + 1)]);
if(!((node__28347 == null)))
{return node__28347.kv_reduce(f,init__28345);
} else
{return init__28345;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__28348))
{return cljs.core.deref.call(null,init__28348);
} else
{{
var G__28349 = (i__28344 + 2);
var G__28350 = init__28348;
i__28344 = G__28349;
init__28345 = G__28350;
continue;
}
}
} else
{return init__28345;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__28351 = this;
var inode__28352 = this;
if((this__28351.bitmap === bit))
{return null;
} else
{var editable__28353 = inode__28352.ensure_editable(e);
var earr__28354 = editable__28353.arr;
var len__28355 = earr__28354.length;
editable__28353.bitmap = (bit ^ editable__28353.bitmap);
cljs.core.array_copy.call(null,earr__28354,(2 * (i + 1)),earr__28354,(2 * i),(len__28355 - (2 * (i + 1))));
(earr__28354[(len__28355 - 2)] = null);
(earr__28354[(len__28355 - 1)] = null);
return editable__28353;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__28356 = this;
var inode__28357 = this;
var bit__28358 = (1 << ((hash >>> shift) & 0x01f));
var idx__28359 = cljs.core.bitmap_indexed_node_index.call(null,this__28356.bitmap,bit__28358);
if(((this__28356.bitmap & bit__28358) === 0))
{var n__28360 = cljs.core.bit_count.call(null,this__28356.bitmap);
if(((2 * n__28360) < this__28356.arr.length))
{var editable__28361 = inode__28357.ensure_editable(edit);
var earr__28362 = editable__28361.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__28362,(2 * idx__28359),earr__28362,(2 * (idx__28359 + 1)),(2 * (n__28360 - idx__28359)));
(earr__28362[(2 * idx__28359)] = key);
(earr__28362[((2 * idx__28359) + 1)] = val);
editable__28361.bitmap = (editable__28361.bitmap | bit__28358);
return editable__28361;
} else
{if((n__28360 >= 16))
{var nodes__28363 = cljs.core.make_array.call(null,32);
var jdx__28364 = ((hash >>> shift) & 0x01f);
(nodes__28363[jdx__28364] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__28365 = 0;
var j__28366 = 0;
while(true){
if((i__28365 < 32))
{if((((this__28356.bitmap >>> i__28365) & 1) === 0))
{{
var G__28419 = (i__28365 + 1);
var G__28420 = j__28366;
i__28365 = G__28419;
j__28366 = G__28420;
continue;
}
} else
{(nodes__28363[i__28365] = ((!(((this__28356.arr[j__28366]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__28356.arr[j__28366])),(this__28356.arr[j__28366]),(this__28356.arr[(j__28366 + 1)]),added_leaf_QMARK_):(this__28356.arr[(j__28366 + 1)])));
{
var G__28421 = (i__28365 + 1);
var G__28422 = (j__28366 + 2);
i__28365 = G__28421;
j__28366 = G__28422;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__28360 + 1),nodes__28363));
} else
{if("\uFDD0'else")
{var new_arr__28367 = cljs.core.make_array.call(null,(2 * (n__28360 + 4)));
cljs.core.array_copy.call(null,this__28356.arr,0,new_arr__28367,0,(2 * idx__28359));
(new_arr__28367[(2 * idx__28359)] = key);
(new_arr__28367[((2 * idx__28359) + 1)] = val);
cljs.core.array_copy.call(null,this__28356.arr,(2 * idx__28359),new_arr__28367,(2 * (idx__28359 + 1)),(2 * (n__28360 - idx__28359)));
added_leaf_QMARK_.val = true;
var editable__28368 = inode__28357.ensure_editable(edit);
editable__28368.arr = new_arr__28367;
editable__28368.bitmap = (editable__28368.bitmap | bit__28358);
return editable__28368;
} else
{return null;
}
}
}
} else
{var key_or_nil__28369 = (this__28356.arr[(2 * idx__28359)]);
var val_or_node__28370 = (this__28356.arr[((2 * idx__28359) + 1)]);
if((key_or_nil__28369 == null))
{var n__28371 = val_or_node__28370.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__28371 === val_or_node__28370))
{return inode__28357;
} else
{return cljs.core.edit_and_set.call(null,inode__28357,edit,((2 * idx__28359) + 1),n__28371);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__28369))
{if((val === val_or_node__28370))
{return inode__28357;
} else
{return cljs.core.edit_and_set.call(null,inode__28357,edit,((2 * idx__28359) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__28357,edit,(2 * idx__28359),null,((2 * idx__28359) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__28369,val_or_node__28370,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__28372 = this;
var inode__28373 = this;
return cljs.core.create_inode_seq.call(null,this__28372.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__28374 = this;
var inode__28375 = this;
var bit__28376 = (1 << ((hash >>> shift) & 0x01f));
if(((this__28374.bitmap & bit__28376) === 0))
{return inode__28375;
} else
{var idx__28377 = cljs.core.bitmap_indexed_node_index.call(null,this__28374.bitmap,bit__28376);
var key_or_nil__28378 = (this__28374.arr[(2 * idx__28377)]);
var val_or_node__28379 = (this__28374.arr[((2 * idx__28377) + 1)]);
if((key_or_nil__28378 == null))
{var n__28380 = val_or_node__28379.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__28380 === val_or_node__28379))
{return inode__28375;
} else
{if(!((n__28380 == null)))
{return cljs.core.edit_and_set.call(null,inode__28375,edit,((2 * idx__28377) + 1),n__28380);
} else
{if((this__28374.bitmap === bit__28376))
{return null;
} else
{if("\uFDD0'else")
{return inode__28375.edit_and_remove_pair(edit,bit__28376,idx__28377);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__28378))
{(removed_leaf_QMARK_[0] = true);
return inode__28375.edit_and_remove_pair(edit,bit__28376,idx__28377);
} else
{if("\uFDD0'else")
{return inode__28375;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__28381 = this;
var inode__28382 = this;
if((e === this__28381.edit))
{return inode__28382;
} else
{var n__28383 = cljs.core.bit_count.call(null,this__28381.bitmap);
var new_arr__28384 = cljs.core.make_array.call(null,(((n__28383 < 0))?4:(2 * (n__28383 + 1))));
cljs.core.array_copy.call(null,this__28381.arr,0,new_arr__28384,0,(2 * n__28383));
return (new cljs.core.BitmapIndexedNode(e,this__28381.bitmap,new_arr__28384));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__28385 = this;
var inode__28386 = this;
return cljs.core.inode_kv_reduce.call(null,this__28385.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__28387 = this;
var inode__28388 = this;
var bit__28389 = (1 << ((hash >>> shift) & 0x01f));
if(((this__28387.bitmap & bit__28389) === 0))
{return not_found;
} else
{var idx__28390 = cljs.core.bitmap_indexed_node_index.call(null,this__28387.bitmap,bit__28389);
var key_or_nil__28391 = (this__28387.arr[(2 * idx__28390)]);
var val_or_node__28392 = (this__28387.arr[((2 * idx__28390) + 1)]);
if((key_or_nil__28391 == null))
{return val_or_node__28392.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__28391))
{return cljs.core.PersistentVector.fromArray([key_or_nil__28391,val_or_node__28392], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__28393 = this;
var inode__28394 = this;
var bit__28395 = (1 << ((hash >>> shift) & 0x01f));
if(((this__28393.bitmap & bit__28395) === 0))
{return inode__28394;
} else
{var idx__28396 = cljs.core.bitmap_indexed_node_index.call(null,this__28393.bitmap,bit__28395);
var key_or_nil__28397 = (this__28393.arr[(2 * idx__28396)]);
var val_or_node__28398 = (this__28393.arr[((2 * idx__28396) + 1)]);
if((key_or_nil__28397 == null))
{var n__28399 = val_or_node__28398.inode_without((shift + 5),hash,key);
if((n__28399 === val_or_node__28398))
{return inode__28394;
} else
{if(!((n__28399 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__28393.bitmap,cljs.core.clone_and_set.call(null,this__28393.arr,((2 * idx__28396) + 1),n__28399)));
} else
{if((this__28393.bitmap === bit__28395))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__28393.bitmap ^ bit__28395),cljs.core.remove_pair.call(null,this__28393.arr,idx__28396)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__28397))
{return (new cljs.core.BitmapIndexedNode(null,(this__28393.bitmap ^ bit__28395),cljs.core.remove_pair.call(null,this__28393.arr,idx__28396)));
} else
{if("\uFDD0'else")
{return inode__28394;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__28400 = this;
var inode__28401 = this;
var bit__28402 = (1 << ((hash >>> shift) & 0x01f));
var idx__28403 = cljs.core.bitmap_indexed_node_index.call(null,this__28400.bitmap,bit__28402);
if(((this__28400.bitmap & bit__28402) === 0))
{var n__28404 = cljs.core.bit_count.call(null,this__28400.bitmap);
if((n__28404 >= 16))
{var nodes__28405 = cljs.core.make_array.call(null,32);
var jdx__28406 = ((hash >>> shift) & 0x01f);
(nodes__28405[jdx__28406] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__28407 = 0;
var j__28408 = 0;
while(true){
if((i__28407 < 32))
{if((((this__28400.bitmap >>> i__28407) & 1) === 0))
{{
var G__28423 = (i__28407 + 1);
var G__28424 = j__28408;
i__28407 = G__28423;
j__28408 = G__28424;
continue;
}
} else
{(nodes__28405[i__28407] = ((!(((this__28400.arr[j__28408]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__28400.arr[j__28408])),(this__28400.arr[j__28408]),(this__28400.arr[(j__28408 + 1)]),added_leaf_QMARK_):(this__28400.arr[(j__28408 + 1)])));
{
var G__28425 = (i__28407 + 1);
var G__28426 = (j__28408 + 2);
i__28407 = G__28425;
j__28408 = G__28426;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__28404 + 1),nodes__28405));
} else
{var new_arr__28409 = cljs.core.make_array.call(null,(2 * (n__28404 + 1)));
cljs.core.array_copy.call(null,this__28400.arr,0,new_arr__28409,0,(2 * idx__28403));
(new_arr__28409[(2 * idx__28403)] = key);
(new_arr__28409[((2 * idx__28403) + 1)] = val);
cljs.core.array_copy.call(null,this__28400.arr,(2 * idx__28403),new_arr__28409,(2 * (idx__28403 + 1)),(2 * (n__28404 - idx__28403)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__28400.bitmap | bit__28402),new_arr__28409));
}
} else
{var key_or_nil__28410 = (this__28400.arr[(2 * idx__28403)]);
var val_or_node__28411 = (this__28400.arr[((2 * idx__28403) + 1)]);
if((key_or_nil__28410 == null))
{var n__28412 = val_or_node__28411.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__28412 === val_or_node__28411))
{return inode__28401;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__28400.bitmap,cljs.core.clone_and_set.call(null,this__28400.arr,((2 * idx__28403) + 1),n__28412)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__28410))
{if((val === val_or_node__28411))
{return inode__28401;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__28400.bitmap,cljs.core.clone_and_set.call(null,this__28400.arr,((2 * idx__28403) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__28400.bitmap,cljs.core.clone_and_set.call(null,this__28400.arr,(2 * idx__28403),null,((2 * idx__28403) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__28410,val_or_node__28411,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__28413 = this;
var inode__28414 = this;
var bit__28415 = (1 << ((hash >>> shift) & 0x01f));
if(((this__28413.bitmap & bit__28415) === 0))
{return not_found;
} else
{var idx__28416 = cljs.core.bitmap_indexed_node_index.call(null,this__28413.bitmap,bit__28415);
var key_or_nil__28417 = (this__28413.arr[(2 * idx__28416)]);
var val_or_node__28418 = (this__28413.arr[((2 * idx__28416) + 1)]);
if((key_or_nil__28417 == null))
{return val_or_node__28418.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__28417))
{return val_or_node__28418;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__28434 = array_node.arr;
var len__28435 = (2 * (array_node.cnt - 1));
var new_arr__28436 = cljs.core.make_array.call(null,len__28435);
var i__28437 = 0;
var j__28438 = 1;
var bitmap__28439 = 0;
while(true){
if((i__28437 < len__28435))
{if((function (){var and__3941__auto____28440 = !((i__28437 === idx));
if(and__3941__auto____28440)
{return !(((arr__28434[i__28437]) == null));
} else
{return and__3941__auto____28440;
}
})())
{(new_arr__28436[j__28438] = (arr__28434[i__28437]));
{
var G__28441 = (i__28437 + 1);
var G__28442 = (j__28438 + 2);
var G__28443 = (bitmap__28439 | (1 << i__28437));
i__28437 = G__28441;
j__28438 = G__28442;
bitmap__28439 = G__28443;
continue;
}
} else
{{
var G__28444 = (i__28437 + 1);
var G__28445 = j__28438;
var G__28446 = bitmap__28439;
i__28437 = G__28444;
j__28438 = G__28445;
bitmap__28439 = G__28446;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__28439,new_arr__28436));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__28447 = this;
var inode__28448 = this;
var idx__28449 = ((hash >>> shift) & 0x01f);
var node__28450 = (this__28447.arr[idx__28449]);
if((node__28450 == null))
{var editable__28451 = cljs.core.edit_and_set.call(null,inode__28448,edit,idx__28449,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__28451.cnt = (editable__28451.cnt + 1);
return editable__28451;
} else
{var n__28452 = node__28450.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__28452 === node__28450))
{return inode__28448;
} else
{return cljs.core.edit_and_set.call(null,inode__28448,edit,idx__28449,n__28452);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__28453 = this;
var inode__28454 = this;
return cljs.core.create_array_node_seq.call(null,this__28453.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__28455 = this;
var inode__28456 = this;
var idx__28457 = ((hash >>> shift) & 0x01f);
var node__28458 = (this__28455.arr[idx__28457]);
if((node__28458 == null))
{return inode__28456;
} else
{var n__28459 = node__28458.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__28459 === node__28458))
{return inode__28456;
} else
{if((n__28459 == null))
{if((this__28455.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__28456,edit,idx__28457);
} else
{var editable__28460 = cljs.core.edit_and_set.call(null,inode__28456,edit,idx__28457,n__28459);
editable__28460.cnt = (editable__28460.cnt - 1);
return editable__28460;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__28456,edit,idx__28457,n__28459);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__28461 = this;
var inode__28462 = this;
if((e === this__28461.edit))
{return inode__28462;
} else
{return (new cljs.core.ArrayNode(e,this__28461.cnt,this__28461.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__28463 = this;
var inode__28464 = this;
var len__28465 = this__28463.arr.length;
var i__28466 = 0;
var init__28467 = init;
while(true){
if((i__28466 < len__28465))
{var node__28468 = (this__28463.arr[i__28466]);
if(!((node__28468 == null)))
{var init__28469 = node__28468.kv_reduce(f,init__28467);
if(cljs.core.reduced_QMARK_.call(null,init__28469))
{return cljs.core.deref.call(null,init__28469);
} else
{{
var G__28488 = (i__28466 + 1);
var G__28489 = init__28469;
i__28466 = G__28488;
init__28467 = G__28489;
continue;
}
}
} else
{return null;
}
} else
{return init__28467;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__28470 = this;
var inode__28471 = this;
var idx__28472 = ((hash >>> shift) & 0x01f);
var node__28473 = (this__28470.arr[idx__28472]);
if(!((node__28473 == null)))
{return node__28473.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__28474 = this;
var inode__28475 = this;
var idx__28476 = ((hash >>> shift) & 0x01f);
var node__28477 = (this__28474.arr[idx__28476]);
if(!((node__28477 == null)))
{var n__28478 = node__28477.inode_without((shift + 5),hash,key);
if((n__28478 === node__28477))
{return inode__28475;
} else
{if((n__28478 == null))
{if((this__28474.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__28475,null,idx__28476);
} else
{return (new cljs.core.ArrayNode(null,(this__28474.cnt - 1),cljs.core.clone_and_set.call(null,this__28474.arr,idx__28476,n__28478)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__28474.cnt,cljs.core.clone_and_set.call(null,this__28474.arr,idx__28476,n__28478)));
} else
{return null;
}
}
}
} else
{return inode__28475;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__28479 = this;
var inode__28480 = this;
var idx__28481 = ((hash >>> shift) & 0x01f);
var node__28482 = (this__28479.arr[idx__28481]);
if((node__28482 == null))
{return (new cljs.core.ArrayNode(null,(this__28479.cnt + 1),cljs.core.clone_and_set.call(null,this__28479.arr,idx__28481,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__28483 = node__28482.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__28483 === node__28482))
{return inode__28480;
} else
{return (new cljs.core.ArrayNode(null,this__28479.cnt,cljs.core.clone_and_set.call(null,this__28479.arr,idx__28481,n__28483)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__28484 = this;
var inode__28485 = this;
var idx__28486 = ((hash >>> shift) & 0x01f);
var node__28487 = (this__28484.arr[idx__28486]);
if(!((node__28487 == null)))
{return node__28487.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__28492 = (2 * cnt);
var i__28493 = 0;
while(true){
if((i__28493 < lim__28492))
{if(cljs.core.key_test.call(null,key,(arr[i__28493])))
{return i__28493;
} else
{{
var G__28494 = (i__28493 + 2);
i__28493 = G__28494;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__28495 = this;
var inode__28496 = this;
if((hash === this__28495.collision_hash))
{var idx__28497 = cljs.core.hash_collision_node_find_index.call(null,this__28495.arr,this__28495.cnt,key);
if((idx__28497 === -1))
{if((this__28495.arr.length > (2 * this__28495.cnt)))
{var editable__28498 = cljs.core.edit_and_set.call(null,inode__28496,edit,(2 * this__28495.cnt),key,((2 * this__28495.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__28498.cnt = (editable__28498.cnt + 1);
return editable__28498;
} else
{var len__28499 = this__28495.arr.length;
var new_arr__28500 = cljs.core.make_array.call(null,(len__28499 + 2));
cljs.core.array_copy.call(null,this__28495.arr,0,new_arr__28500,0,len__28499);
(new_arr__28500[len__28499] = key);
(new_arr__28500[(len__28499 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__28496.ensure_editable_array(edit,(this__28495.cnt + 1),new_arr__28500);
}
} else
{if(((this__28495.arr[(idx__28497 + 1)]) === val))
{return inode__28496;
} else
{return cljs.core.edit_and_set.call(null,inode__28496,edit,(idx__28497 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__28495.collision_hash >>> shift) & 0x01f)),[null,inode__28496,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__28501 = this;
var inode__28502 = this;
return cljs.core.create_inode_seq.call(null,this__28501.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__28503 = this;
var inode__28504 = this;
var idx__28505 = cljs.core.hash_collision_node_find_index.call(null,this__28503.arr,this__28503.cnt,key);
if((idx__28505 === -1))
{return inode__28504;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__28503.cnt === 1))
{return null;
} else
{var editable__28506 = inode__28504.ensure_editable(edit);
var earr__28507 = editable__28506.arr;
(earr__28507[idx__28505] = (earr__28507[((2 * this__28503.cnt) - 2)]));
(earr__28507[(idx__28505 + 1)] = (earr__28507[((2 * this__28503.cnt) - 1)]));
(earr__28507[((2 * this__28503.cnt) - 1)] = null);
(earr__28507[((2 * this__28503.cnt) - 2)] = null);
editable__28506.cnt = (editable__28506.cnt - 1);
return editable__28506;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__28508 = this;
var inode__28509 = this;
if((e === this__28508.edit))
{return inode__28509;
} else
{var new_arr__28510 = cljs.core.make_array.call(null,(2 * (this__28508.cnt + 1)));
cljs.core.array_copy.call(null,this__28508.arr,0,new_arr__28510,0,(2 * this__28508.cnt));
return (new cljs.core.HashCollisionNode(e,this__28508.collision_hash,this__28508.cnt,new_arr__28510));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__28511 = this;
var inode__28512 = this;
return cljs.core.inode_kv_reduce.call(null,this__28511.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__28513 = this;
var inode__28514 = this;
var idx__28515 = cljs.core.hash_collision_node_find_index.call(null,this__28513.arr,this__28513.cnt,key);
if((idx__28515 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__28513.arr[idx__28515])))
{return cljs.core.PersistentVector.fromArray([(this__28513.arr[idx__28515]),(this__28513.arr[(idx__28515 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__28516 = this;
var inode__28517 = this;
var idx__28518 = cljs.core.hash_collision_node_find_index.call(null,this__28516.arr,this__28516.cnt,key);
if((idx__28518 === -1))
{return inode__28517;
} else
{if((this__28516.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__28516.collision_hash,(this__28516.cnt - 1),cljs.core.remove_pair.call(null,this__28516.arr,cljs.core.quot.call(null,idx__28518,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__28519 = this;
var inode__28520 = this;
if((hash === this__28519.collision_hash))
{var idx__28521 = cljs.core.hash_collision_node_find_index.call(null,this__28519.arr,this__28519.cnt,key);
if((idx__28521 === -1))
{var len__28522 = this__28519.arr.length;
var new_arr__28523 = cljs.core.make_array.call(null,(len__28522 + 2));
cljs.core.array_copy.call(null,this__28519.arr,0,new_arr__28523,0,len__28522);
(new_arr__28523[len__28522] = key);
(new_arr__28523[(len__28522 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__28519.collision_hash,(this__28519.cnt + 1),new_arr__28523));
} else
{if(cljs.core._EQ_.call(null,(this__28519.arr[idx__28521]),val))
{return inode__28520;
} else
{return (new cljs.core.HashCollisionNode(null,this__28519.collision_hash,this__28519.cnt,cljs.core.clone_and_set.call(null,this__28519.arr,(idx__28521 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__28519.collision_hash >>> shift) & 0x01f)),[null,inode__28520])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__28524 = this;
var inode__28525 = this;
var idx__28526 = cljs.core.hash_collision_node_find_index.call(null,this__28524.arr,this__28524.cnt,key);
if((idx__28526 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__28524.arr[idx__28526])))
{return (this__28524.arr[(idx__28526 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__28527 = this;
var inode__28528 = this;
if((e === this__28527.edit))
{this__28527.arr = array;
this__28527.cnt = count;
return inode__28528;
} else
{return (new cljs.core.HashCollisionNode(this__28527.edit,this__28527.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__28533 = cljs.core.hash.call(null,key1);
if((key1hash__28533 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__28533,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___28534 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__28533,key1,val1,added_leaf_QMARK___28534).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___28534);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__28535 = cljs.core.hash.call(null,key1);
if((key1hash__28535 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__28535,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___28536 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__28535,key1,val1,added_leaf_QMARK___28536).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___28536);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28537 = this;
var h__18981__auto____28538 = this__28537.__hash;
if(!((h__18981__auto____28538 == null)))
{return h__18981__auto____28538;
} else
{var h__18981__auto____28539 = cljs.core.hash_coll.call(null,coll);
this__28537.__hash = h__18981__auto____28539;
return h__18981__auto____28539;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28540 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__28541 = this;
var this__28542 = this;
return cljs.core.pr_str.call(null,this__28542);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__28543 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__28544 = this;
if((this__28544.s == null))
{return cljs.core.PersistentVector.fromArray([(this__28544.nodes[this__28544.i]),(this__28544.nodes[(this__28544.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__28544.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__28545 = this;
if((this__28545.s == null))
{return cljs.core.create_inode_seq.call(null,this__28545.nodes,(this__28545.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__28545.nodes,this__28545.i,cljs.core.next.call(null,this__28545.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28546 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28547 = this;
return (new cljs.core.NodeSeq(meta,this__28547.nodes,this__28547.i,this__28547.s,this__28547.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28548 = this;
return this__28548.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28549 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__28549.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__28556 = nodes.length;
var j__28557 = i;
while(true){
if((j__28557 < len__28556))
{if(!(((nodes[j__28557]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__28557,null,null));
} else
{var temp__4090__auto____28558 = (nodes[(j__28557 + 1)]);
if(cljs.core.truth_(temp__4090__auto____28558))
{var node__28559 = temp__4090__auto____28558;
var temp__4090__auto____28560 = node__28559.inode_seq();
if(cljs.core.truth_(temp__4090__auto____28560))
{var node_seq__28561 = temp__4090__auto____28560;
return (new cljs.core.NodeSeq(null,nodes,(j__28557 + 2),node_seq__28561,null));
} else
{{
var G__28562 = (j__28557 + 2);
j__28557 = G__28562;
continue;
}
}
} else
{{
var G__28563 = (j__28557 + 2);
j__28557 = G__28563;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28564 = this;
var h__18981__auto____28565 = this__28564.__hash;
if(!((h__18981__auto____28565 == null)))
{return h__18981__auto____28565;
} else
{var h__18981__auto____28566 = cljs.core.hash_coll.call(null,coll);
this__28564.__hash = h__18981__auto____28566;
return h__18981__auto____28566;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28567 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__28568 = this;
var this__28569 = this;
return cljs.core.pr_str.call(null,this__28569);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__28570 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__28571 = this;
return cljs.core.first.call(null,this__28571.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__28572 = this;
return cljs.core.create_array_node_seq.call(null,null,this__28572.nodes,this__28572.i,cljs.core.next.call(null,this__28572.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28573 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28574 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__28574.nodes,this__28574.i,this__28574.s,this__28574.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28575 = this;
return this__28575.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28576 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__28576.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__28583 = nodes.length;
var j__28584 = i;
while(true){
if((j__28584 < len__28583))
{var temp__4090__auto____28585 = (nodes[j__28584]);
if(cljs.core.truth_(temp__4090__auto____28585))
{var nj__28586 = temp__4090__auto____28585;
var temp__4090__auto____28587 = nj__28586.inode_seq();
if(cljs.core.truth_(temp__4090__auto____28587))
{var ns__28588 = temp__4090__auto____28587;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__28584 + 1),ns__28588,null));
} else
{{
var G__28589 = (j__28584 + 1);
j__28584 = G__28589;
continue;
}
}
} else
{{
var G__28590 = (j__28584 + 1);
j__28584 = G__28590;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__28593 = this;
return (new cljs.core.TransientHashMap({},this__28593.root,this__28593.cnt,this__28593.has_nil_QMARK_,this__28593.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28594 = this;
var h__18981__auto____28595 = this__28594.__hash;
if(!((h__18981__auto____28595 == null)))
{return h__18981__auto____28595;
} else
{var h__18981__auto____28596 = cljs.core.hash_imap.call(null,coll);
this__28594.__hash = h__18981__auto____28596;
return h__18981__auto____28596;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__28597 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__28598 = this;
if((k == null))
{if(this__28598.has_nil_QMARK_)
{return this__28598.nil_val;
} else
{return not_found;
}
} else
{if((this__28598.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__28598.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__28599 = this;
if((k == null))
{if((function (){var and__3941__auto____28600 = this__28599.has_nil_QMARK_;
if(and__3941__auto____28600)
{return (v === this__28599.nil_val);
} else
{return and__3941__auto____28600;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__28599.meta,((this__28599.has_nil_QMARK_)?this__28599.cnt:(this__28599.cnt + 1)),this__28599.root,true,v,null));
}
} else
{var added_leaf_QMARK___28601 = (new cljs.core.Box(false));
var new_root__28602 = (((this__28599.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__28599.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___28601);
if((new_root__28602 === this__28599.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__28599.meta,((added_leaf_QMARK___28601.val)?(this__28599.cnt + 1):this__28599.cnt),new_root__28602,this__28599.has_nil_QMARK_,this__28599.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__28603 = this;
if((k == null))
{return this__28603.has_nil_QMARK_;
} else
{if((this__28603.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__28603.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__28626 = null;
var G__28626__2 = (function (this_sym28604,k){
var this__28606 = this;
var this_sym28604__28607 = this;
var coll__28608 = this_sym28604__28607;
return coll__28608.cljs$core$ILookup$_lookup$arity$2(coll__28608,k);
});
var G__28626__3 = (function (this_sym28605,k,not_found){
var this__28606 = this;
var this_sym28605__28609 = this;
var coll__28610 = this_sym28605__28609;
return coll__28610.cljs$core$ILookup$_lookup$arity$3(coll__28610,k,not_found);
});
G__28626 = function(this_sym28605,k,not_found){
switch(arguments.length){
case 2:
return G__28626__2.call(this,this_sym28605,k);
case 3:
return G__28626__3.call(this,this_sym28605,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28626;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym28591,args28592){
var this__28611 = this;
return this_sym28591.call.apply(this_sym28591,[this_sym28591].concat(args28592.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__28612 = this;
var init__28613 = ((this__28612.has_nil_QMARK_)?f.call(null,init,null,this__28612.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__28613))
{return cljs.core.deref.call(null,init__28613);
} else
{if(!((this__28612.root == null)))
{return this__28612.root.kv_reduce(f,init__28613);
} else
{if("\uFDD0'else")
{return init__28613;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__28614 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__28615 = this;
var this__28616 = this;
return cljs.core.pr_str.call(null,this__28616);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28617 = this;
if((this__28617.cnt > 0))
{var s__28618 = ((!((this__28617.root == null)))?this__28617.root.inode_seq():null);
if(this__28617.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__28617.nil_val], true),s__28618);
} else
{return s__28618;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28619 = this;
return this__28619.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28620 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28621 = this;
return (new cljs.core.PersistentHashMap(meta,this__28621.cnt,this__28621.root,this__28621.has_nil_QMARK_,this__28621.nil_val,this__28621.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28622 = this;
return this__28622.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28623 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__28623.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__28624 = this;
if((k == null))
{if(this__28624.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__28624.meta,(this__28624.cnt - 1),this__28624.root,false,null,null));
} else
{return coll;
}
} else
{if((this__28624.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__28625 = this__28624.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__28625 === this__28624.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__28624.meta,(this__28624.cnt - 1),new_root__28625,this__28624.has_nil_QMARK_,this__28624.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__28627 = ks.length;
var i__28628 = 0;
var out__28629 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__28628 < len__28627))
{{
var G__28630 = (i__28628 + 1);
var G__28631 = cljs.core.assoc_BANG_.call(null,out__28629,(ks[i__28628]),(vs[i__28628]));
i__28628 = G__28630;
out__28629 = G__28631;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__28629);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__28632 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__28633 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__28634 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__28635 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__28636 = this;
if((k == null))
{if(this__28636.has_nil_QMARK_)
{return this__28636.nil_val;
} else
{return null;
}
} else
{if((this__28636.root == null))
{return null;
} else
{return this__28636.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__28637 = this;
if((k == null))
{if(this__28637.has_nil_QMARK_)
{return this__28637.nil_val;
} else
{return not_found;
}
} else
{if((this__28637.root == null))
{return not_found;
} else
{return this__28637.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28638 = this;
if(this__28638.edit)
{return this__28638.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__28639 = this;
var tcoll__28640 = this;
if(this__28639.edit)
{if((function (){var G__28641__28642 = o;
if(G__28641__28642)
{if((function (){var or__3943__auto____28643 = (G__28641__28642.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____28643)
{return or__3943__auto____28643;
} else
{return G__28641__28642.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__28641__28642.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__28641__28642);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__28641__28642);
}
})())
{return tcoll__28640.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__28644 = cljs.core.seq.call(null,o);
var tcoll__28645 = tcoll__28640;
while(true){
var temp__4090__auto____28646 = cljs.core.first.call(null,es__28644);
if(cljs.core.truth_(temp__4090__auto____28646))
{var e__28647 = temp__4090__auto____28646;
{
var G__28658 = cljs.core.next.call(null,es__28644);
var G__28659 = tcoll__28645.assoc_BANG_(cljs.core.key.call(null,e__28647),cljs.core.val.call(null,e__28647));
es__28644 = G__28658;
tcoll__28645 = G__28659;
continue;
}
} else
{return tcoll__28645;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__28648 = this;
var tcoll__28649 = this;
if(this__28648.edit)
{if((k == null))
{if((this__28648.nil_val === v))
{} else
{this__28648.nil_val = v;
}
if(this__28648.has_nil_QMARK_)
{} else
{this__28648.count = (this__28648.count + 1);
this__28648.has_nil_QMARK_ = true;
}
return tcoll__28649;
} else
{var added_leaf_QMARK___28650 = (new cljs.core.Box(false));
var node__28651 = (((this__28648.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__28648.root).inode_assoc_BANG_(this__28648.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___28650);
if((node__28651 === this__28648.root))
{} else
{this__28648.root = node__28651;
}
if(added_leaf_QMARK___28650.val)
{this__28648.count = (this__28648.count + 1);
} else
{}
return tcoll__28649;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__28652 = this;
var tcoll__28653 = this;
if(this__28652.edit)
{if((k == null))
{if(this__28652.has_nil_QMARK_)
{this__28652.has_nil_QMARK_ = false;
this__28652.nil_val = null;
this__28652.count = (this__28652.count - 1);
return tcoll__28653;
} else
{return tcoll__28653;
}
} else
{if((this__28652.root == null))
{return tcoll__28653;
} else
{var removed_leaf_QMARK___28654 = (new cljs.core.Box(false));
var node__28655 = this__28652.root.inode_without_BANG_(this__28652.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___28654);
if((node__28655 === this__28652.root))
{} else
{this__28652.root = node__28655;
}
if(cljs.core.truth_((removed_leaf_QMARK___28654[0])))
{this__28652.count = (this__28652.count - 1);
} else
{}
return tcoll__28653;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__28656 = this;
var tcoll__28657 = this;
if(this__28656.edit)
{this__28656.edit = null;
return (new cljs.core.PersistentHashMap(null,this__28656.count,this__28656.root,this__28656.has_nil_QMARK_,this__28656.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__28662 = node;
var stack__28663 = stack;
while(true){
if(!((t__28662 == null)))
{{
var G__28664 = ((ascending_QMARK_)?t__28662.left:t__28662.right);
var G__28665 = cljs.core.conj.call(null,stack__28663,t__28662);
t__28662 = G__28664;
stack__28663 = G__28665;
continue;
}
} else
{return stack__28663;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28666 = this;
var h__18981__auto____28667 = this__28666.__hash;
if(!((h__18981__auto____28667 == null)))
{return h__18981__auto____28667;
} else
{var h__18981__auto____28668 = cljs.core.hash_coll.call(null,coll);
this__28666.__hash = h__18981__auto____28668;
return h__18981__auto____28668;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28669 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__28670 = this;
var this__28671 = this;
return cljs.core.pr_str.call(null,this__28671);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__28672 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28673 = this;
if((this__28673.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__28673.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__28674 = this;
return cljs.core.peek.call(null,this__28674.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__28675 = this;
var t__28676 = cljs.core.first.call(null,this__28675.stack);
var next_stack__28677 = cljs.core.tree_map_seq_push.call(null,((this__28675.ascending_QMARK_)?t__28676.right:t__28676.left),cljs.core.next.call(null,this__28675.stack),this__28675.ascending_QMARK_);
if(!((next_stack__28677 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__28677,this__28675.ascending_QMARK_,(this__28675.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28678 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28679 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__28679.stack,this__28679.ascending_QMARK_,this__28679.cnt,this__28679.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28680 = this;
return this__28680.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3941__auto____28682 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3941__auto____28682)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3941__auto____28682;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto____28684 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3941__auto____28684)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3941__auto____28684;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__28688 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__28688))
{return cljs.core.deref.call(null,init__28688);
} else
{var init__28689 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__28688):init__28688);
if(cljs.core.reduced_QMARK_.call(null,init__28689))
{return cljs.core.deref.call(null,init__28689);
} else
{var init__28690 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__28689):init__28689);
if(cljs.core.reduced_QMARK_.call(null,init__28690))
{return cljs.core.deref.call(null,init__28690);
} else
{return init__28690;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28693 = this;
var h__18981__auto____28694 = this__28693.__hash;
if(!((h__18981__auto____28694 == null)))
{return h__18981__auto____28694;
} else
{var h__18981__auto____28695 = cljs.core.hash_coll.call(null,coll);
this__28693.__hash = h__18981__auto____28695;
return h__18981__auto____28695;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__28696 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__28697 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__28698 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__28698.key,this__28698.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__28746 = null;
var G__28746__2 = (function (this_sym28699,k){
var this__28701 = this;
var this_sym28699__28702 = this;
var node__28703 = this_sym28699__28702;
return node__28703.cljs$core$ILookup$_lookup$arity$2(node__28703,k);
});
var G__28746__3 = (function (this_sym28700,k,not_found){
var this__28701 = this;
var this_sym28700__28704 = this;
var node__28705 = this_sym28700__28704;
return node__28705.cljs$core$ILookup$_lookup$arity$3(node__28705,k,not_found);
});
G__28746 = function(this_sym28700,k,not_found){
switch(arguments.length){
case 2:
return G__28746__2.call(this,this_sym28700,k);
case 3:
return G__28746__3.call(this,this_sym28700,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28746;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym28691,args28692){
var this__28706 = this;
return this_sym28691.call.apply(this_sym28691,[this_sym28691].concat(args28692.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__28707 = this;
return cljs.core.PersistentVector.fromArray([this__28707.key,this__28707.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__28708 = this;
return this__28708.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__28709 = this;
return this__28709.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__28710 = this;
var node__28711 = this;
return ins.balance_right(node__28711);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__28712 = this;
var node__28713 = this;
return (new cljs.core.RedNode(this__28712.key,this__28712.val,this__28712.left,this__28712.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__28714 = this;
var node__28715 = this;
return cljs.core.balance_right_del.call(null,this__28714.key,this__28714.val,this__28714.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__28716 = this;
var node__28717 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__28718 = this;
var node__28719 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__28719,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__28720 = this;
var node__28721 = this;
return cljs.core.balance_left_del.call(null,this__28720.key,this__28720.val,del,this__28720.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__28722 = this;
var node__28723 = this;
return ins.balance_left(node__28723);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__28724 = this;
var node__28725 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__28725,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__28747 = null;
var G__28747__0 = (function (){
var this__28726 = this;
var this__28728 = this;
return cljs.core.pr_str.call(null,this__28728);
});
G__28747 = function(){
switch(arguments.length){
case 0:
return G__28747__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28747;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__28729 = this;
var node__28730 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__28730,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__28731 = this;
var node__28732 = this;
return node__28732;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__28733 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__28734 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__28735 = this;
return cljs.core.list.call(null,this__28735.key,this__28735.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__28736 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__28737 = this;
return this__28737.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__28738 = this;
return cljs.core.PersistentVector.fromArray([this__28738.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__28739 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__28739.key,this__28739.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28740 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__28741 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__28741.key,this__28741.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__28742 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__28743 = this;
if((n === 0))
{return this__28743.key;
} else
{if((n === 1))
{return this__28743.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__28744 = this;
if((n === 0))
{return this__28744.key;
} else
{if((n === 1))
{return this__28744.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__28745 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28750 = this;
var h__18981__auto____28751 = this__28750.__hash;
if(!((h__18981__auto____28751 == null)))
{return h__18981__auto____28751;
} else
{var h__18981__auto____28752 = cljs.core.hash_coll.call(null,coll);
this__28750.__hash = h__18981__auto____28752;
return h__18981__auto____28752;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__28753 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__28754 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__28755 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__28755.key,this__28755.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__28803 = null;
var G__28803__2 = (function (this_sym28756,k){
var this__28758 = this;
var this_sym28756__28759 = this;
var node__28760 = this_sym28756__28759;
return node__28760.cljs$core$ILookup$_lookup$arity$2(node__28760,k);
});
var G__28803__3 = (function (this_sym28757,k,not_found){
var this__28758 = this;
var this_sym28757__28761 = this;
var node__28762 = this_sym28757__28761;
return node__28762.cljs$core$ILookup$_lookup$arity$3(node__28762,k,not_found);
});
G__28803 = function(this_sym28757,k,not_found){
switch(arguments.length){
case 2:
return G__28803__2.call(this,this_sym28757,k);
case 3:
return G__28803__3.call(this,this_sym28757,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28803;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym28748,args28749){
var this__28763 = this;
return this_sym28748.call.apply(this_sym28748,[this_sym28748].concat(args28749.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__28764 = this;
return cljs.core.PersistentVector.fromArray([this__28764.key,this__28764.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__28765 = this;
return this__28765.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__28766 = this;
return this__28766.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__28767 = this;
var node__28768 = this;
return (new cljs.core.RedNode(this__28767.key,this__28767.val,this__28767.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__28769 = this;
var node__28770 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__28771 = this;
var node__28772 = this;
return (new cljs.core.RedNode(this__28771.key,this__28771.val,this__28771.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__28773 = this;
var node__28774 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__28775 = this;
var node__28776 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__28776,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__28777 = this;
var node__28778 = this;
return (new cljs.core.RedNode(this__28777.key,this__28777.val,del,this__28777.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__28779 = this;
var node__28780 = this;
return (new cljs.core.RedNode(this__28779.key,this__28779.val,ins,this__28779.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__28781 = this;
var node__28782 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__28781.left))
{return (new cljs.core.RedNode(this__28781.key,this__28781.val,this__28781.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__28781.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__28781.right))
{return (new cljs.core.RedNode(this__28781.right.key,this__28781.right.val,(new cljs.core.BlackNode(this__28781.key,this__28781.val,this__28781.left,this__28781.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__28781.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__28782,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__28804 = null;
var G__28804__0 = (function (){
var this__28783 = this;
var this__28785 = this;
return cljs.core.pr_str.call(null,this__28785);
});
G__28804 = function(){
switch(arguments.length){
case 0:
return G__28804__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28804;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__28786 = this;
var node__28787 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__28786.right))
{return (new cljs.core.RedNode(this__28786.key,this__28786.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__28786.left,null)),this__28786.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__28786.left))
{return (new cljs.core.RedNode(this__28786.left.key,this__28786.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__28786.left.left,null)),(new cljs.core.BlackNode(this__28786.key,this__28786.val,this__28786.left.right,this__28786.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__28787,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__28788 = this;
var node__28789 = this;
return (new cljs.core.BlackNode(this__28788.key,this__28788.val,this__28788.left,this__28788.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__28790 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__28791 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__28792 = this;
return cljs.core.list.call(null,this__28792.key,this__28792.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__28793 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__28794 = this;
return this__28794.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__28795 = this;
return cljs.core.PersistentVector.fromArray([this__28795.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__28796 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__28796.key,this__28796.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28797 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__28798 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__28798.key,this__28798.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__28799 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__28800 = this;
if((n === 0))
{return this__28800.key;
} else
{if((n === 1))
{return this__28800.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__28801 = this;
if((n === 0))
{return this__28801.key;
} else
{if((n === 1))
{return this__28801.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__28802 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__28808 = comp.call(null,k,tree.key);
if((c__28808 === 0))
{(found[0] = tree);
return null;
} else
{if((c__28808 < 0))
{var ins__28809 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__28809 == null)))
{return tree.add_left(ins__28809);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__28810 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__28810 == null)))
{return tree.add_right(ins__28810);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__28813 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__28813))
{return (new cljs.core.RedNode(app__28813.key,app__28813.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__28813.left,null)),(new cljs.core.RedNode(right.key,right.val,app__28813.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__28813,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__28814 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__28814))
{return (new cljs.core.RedNode(app__28814.key,app__28814.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__28814.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__28814.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__28814,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__28820 = comp.call(null,k,tree.key);
if((c__28820 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__28820 < 0))
{var del__28821 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3943__auto____28822 = !((del__28821 == null));
if(or__3943__auto____28822)
{return or__3943__auto____28822;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__28821,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__28821,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__28823 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3943__auto____28824 = !((del__28823 == null));
if(or__3943__auto____28824)
{return or__3943__auto____28824;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__28823);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__28823,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__28827 = tree.key;
var c__28828 = comp.call(null,k,tk__28827);
if((c__28828 === 0))
{return tree.replace(tk__28827,v,tree.left,tree.right);
} else
{if((c__28828 < 0))
{return tree.replace(tk__28827,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__28827,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28831 = this;
var h__18981__auto____28832 = this__28831.__hash;
if(!((h__18981__auto____28832 == null)))
{return h__18981__auto____28832;
} else
{var h__18981__auto____28833 = cljs.core.hash_imap.call(null,coll);
this__28831.__hash = h__18981__auto____28833;
return h__18981__auto____28833;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__28834 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__28835 = this;
var n__28836 = coll.entry_at(k);
if(!((n__28836 == null)))
{return n__28836.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__28837 = this;
var found__28838 = [null];
var t__28839 = cljs.core.tree_map_add.call(null,this__28837.comp,this__28837.tree,k,v,found__28838);
if((t__28839 == null))
{var found_node__28840 = cljs.core.nth.call(null,found__28838,0);
if(cljs.core._EQ_.call(null,v,found_node__28840.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__28837.comp,cljs.core.tree_map_replace.call(null,this__28837.comp,this__28837.tree,k,v),this__28837.cnt,this__28837.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__28837.comp,t__28839.blacken(),(this__28837.cnt + 1),this__28837.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__28841 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__28875 = null;
var G__28875__2 = (function (this_sym28842,k){
var this__28844 = this;
var this_sym28842__28845 = this;
var coll__28846 = this_sym28842__28845;
return coll__28846.cljs$core$ILookup$_lookup$arity$2(coll__28846,k);
});
var G__28875__3 = (function (this_sym28843,k,not_found){
var this__28844 = this;
var this_sym28843__28847 = this;
var coll__28848 = this_sym28843__28847;
return coll__28848.cljs$core$ILookup$_lookup$arity$3(coll__28848,k,not_found);
});
G__28875 = function(this_sym28843,k,not_found){
switch(arguments.length){
case 2:
return G__28875__2.call(this,this_sym28843,k);
case 3:
return G__28875__3.call(this,this_sym28843,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28875;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym28829,args28830){
var this__28849 = this;
return this_sym28829.call.apply(this_sym28829,[this_sym28829].concat(args28830.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__28850 = this;
if(!((this__28850.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__28850.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__28851 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__28852 = this;
if((this__28852.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__28852.tree,false,this__28852.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__28853 = this;
var this__28854 = this;
return cljs.core.pr_str.call(null,this__28854);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__28855 = this;
var coll__28856 = this;
var t__28857 = this__28855.tree;
while(true){
if(!((t__28857 == null)))
{var c__28858 = this__28855.comp.call(null,k,t__28857.key);
if((c__28858 === 0))
{return t__28857;
} else
{if((c__28858 < 0))
{{
var G__28876 = t__28857.left;
t__28857 = G__28876;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__28877 = t__28857.right;
t__28857 = G__28877;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__28859 = this;
if((this__28859.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__28859.tree,ascending_QMARK_,this__28859.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__28860 = this;
if((this__28860.cnt > 0))
{var stack__28861 = null;
var t__28862 = this__28860.tree;
while(true){
if(!((t__28862 == null)))
{var c__28863 = this__28860.comp.call(null,k,t__28862.key);
if((c__28863 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__28861,t__28862),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__28863 < 0))
{{
var G__28878 = cljs.core.conj.call(null,stack__28861,t__28862);
var G__28879 = t__28862.left;
stack__28861 = G__28878;
t__28862 = G__28879;
continue;
}
} else
{{
var G__28880 = stack__28861;
var G__28881 = t__28862.right;
stack__28861 = G__28880;
t__28862 = G__28881;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__28863 > 0))
{{
var G__28882 = cljs.core.conj.call(null,stack__28861,t__28862);
var G__28883 = t__28862.right;
stack__28861 = G__28882;
t__28862 = G__28883;
continue;
}
} else
{{
var G__28884 = stack__28861;
var G__28885 = t__28862.left;
stack__28861 = G__28884;
t__28862 = G__28885;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__28861 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__28861,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__28864 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__28865 = this;
return this__28865.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28866 = this;
if((this__28866.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__28866.tree,true,this__28866.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28867 = this;
return this__28867.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28868 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28869 = this;
return (new cljs.core.PersistentTreeMap(this__28869.comp,this__28869.tree,this__28869.cnt,meta,this__28869.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28870 = this;
return this__28870.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28871 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__28871.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__28872 = this;
var found__28873 = [null];
var t__28874 = cljs.core.tree_map_remove.call(null,this__28872.comp,this__28872.tree,k,found__28873);
if((t__28874 == null))
{if((cljs.core.nth.call(null,found__28873,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__28872.comp,null,0,this__28872.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__28872.comp,t__28874.blacken(),(this__28872.cnt - 1),this__28872.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__28888 = cljs.core.seq.call(null,keyvals);
var out__28889 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__28888)
{{
var G__28890 = cljs.core.nnext.call(null,in__28888);
var G__28891 = cljs.core.assoc_BANG_.call(null,out__28889,cljs.core.first.call(null,in__28888),cljs.core.second.call(null,in__28888));
in__28888 = G__28890;
out__28889 = G__28891;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__28889);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__28892){
var keyvals = cljs.core.seq(arglist__28892);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__28893){
var keyvals = cljs.core.seq(arglist__28893);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__28897 = [];
var obj__28898 = {};
var kvs__28899 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__28899)
{ks__28897.push(cljs.core.first.call(null,kvs__28899));
(obj__28898[cljs.core.first.call(null,kvs__28899)] = cljs.core.second.call(null,kvs__28899));
{
var G__28900 = cljs.core.nnext.call(null,kvs__28899);
kvs__28899 = G__28900;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__28897,obj__28898);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__28901){
var keyvals = cljs.core.seq(arglist__28901);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__28904 = cljs.core.seq.call(null,keyvals);
var out__28905 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__28904)
{{
var G__28906 = cljs.core.nnext.call(null,in__28904);
var G__28907 = cljs.core.assoc.call(null,out__28905,cljs.core.first.call(null,in__28904),cljs.core.second.call(null,in__28904));
in__28904 = G__28906;
out__28905 = G__28907;
continue;
}
} else
{return out__28905;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__28908){
var keyvals = cljs.core.seq(arglist__28908);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__28911 = cljs.core.seq.call(null,keyvals);
var out__28912 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__28911)
{{
var G__28913 = cljs.core.nnext.call(null,in__28911);
var G__28914 = cljs.core.assoc.call(null,out__28912,cljs.core.first.call(null,in__28911),cljs.core.second.call(null,in__28911));
in__28911 = G__28913;
out__28912 = G__28914;
continue;
}
} else
{return out__28912;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__28915){
var comparator = cljs.core.first(arglist__28915);
var keyvals = cljs.core.rest(arglist__28915);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__28916_SHARP_,p2__28917_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3943__auto____28919 = p1__28916_SHARP_;
if(cljs.core.truth_(or__3943__auto____28919))
{return or__3943__auto____28919;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__28917_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__28920){
var maps = cljs.core.seq(arglist__28920);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__28928 = (function (m,e){
var k__28926 = cljs.core.first.call(null,e);
var v__28927 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__28926))
{return cljs.core.assoc.call(null,m,k__28926,f.call(null,cljs.core._lookup.call(null,m,k__28926,null),v__28927));
} else
{return cljs.core.assoc.call(null,m,k__28926,v__28927);
}
});
var merge2__28930 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__28928,(function (){var or__3943__auto____28929 = m1;
if(cljs.core.truth_(or__3943__auto____28929))
{return or__3943__auto____28929;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__28930,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__28931){
var f = cljs.core.first(arglist__28931);
var maps = cljs.core.rest(arglist__28931);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__28936 = cljs.core.ObjMap.EMPTY;
var keys__28937 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__28937)
{var key__28938 = cljs.core.first.call(null,keys__28937);
var entry__28939 = cljs.core._lookup.call(null,map,key__28938,"\uFDD0'cljs.core/not-found");
{
var G__28940 = ((cljs.core.not_EQ_.call(null,entry__28939,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__28936,key__28938,entry__28939):ret__28936);
var G__28941 = cljs.core.next.call(null,keys__28937);
ret__28936 = G__28940;
keys__28937 = G__28941;
continue;
}
} else
{return ret__28936;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__28945 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__28945.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28946 = this;
var h__18981__auto____28947 = this__28946.__hash;
if(!((h__18981__auto____28947 == null)))
{return h__18981__auto____28947;
} else
{var h__18981__auto____28948 = cljs.core.hash_iset.call(null,coll);
this__28946.__hash = h__18981__auto____28948;
return h__18981__auto____28948;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__28949 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__28950 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__28950.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__28971 = null;
var G__28971__2 = (function (this_sym28951,k){
var this__28953 = this;
var this_sym28951__28954 = this;
var coll__28955 = this_sym28951__28954;
return coll__28955.cljs$core$ILookup$_lookup$arity$2(coll__28955,k);
});
var G__28971__3 = (function (this_sym28952,k,not_found){
var this__28953 = this;
var this_sym28952__28956 = this;
var coll__28957 = this_sym28952__28956;
return coll__28957.cljs$core$ILookup$_lookup$arity$3(coll__28957,k,not_found);
});
G__28971 = function(this_sym28952,k,not_found){
switch(arguments.length){
case 2:
return G__28971__2.call(this,this_sym28952,k);
case 3:
return G__28971__3.call(this,this_sym28952,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28971;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym28943,args28944){
var this__28958 = this;
return this_sym28943.call.apply(this_sym28943,[this_sym28943].concat(args28944.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28959 = this;
return (new cljs.core.PersistentHashSet(this__28959.meta,cljs.core.assoc.call(null,this__28959.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__28960 = this;
var this__28961 = this;
return cljs.core.pr_str.call(null,this__28961);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28962 = this;
return cljs.core.keys.call(null,this__28962.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__28963 = this;
return (new cljs.core.PersistentHashSet(this__28963.meta,cljs.core.dissoc.call(null,this__28963.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28964 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28965 = this;
var and__3941__auto____28966 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____28966)
{var and__3941__auto____28967 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____28967)
{return cljs.core.every_QMARK_.call(null,(function (p1__28942_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__28942_SHARP_);
}),other);
} else
{return and__3941__auto____28967;
}
} else
{return and__3941__auto____28966;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__28968 = this;
return (new cljs.core.PersistentHashSet(meta,this__28968.hash_map,this__28968.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28969 = this;
return this__28969.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28970 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__28970.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__28972 = cljs.core.count.call(null,items);
var i__28973 = 0;
var out__28974 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__28973 < len__28972))
{{
var G__28975 = (i__28973 + 1);
var G__28976 = cljs.core.conj_BANG_.call(null,out__28974,(items[i__28973]));
i__28973 = G__28975;
out__28974 = G__28976;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__28974);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__28994 = null;
var G__28994__2 = (function (this_sym28980,k){
var this__28982 = this;
var this_sym28980__28983 = this;
var tcoll__28984 = this_sym28980__28983;
if((cljs.core._lookup.call(null,this__28982.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__28994__3 = (function (this_sym28981,k,not_found){
var this__28982 = this;
var this_sym28981__28985 = this;
var tcoll__28986 = this_sym28981__28985;
if((cljs.core._lookup.call(null,this__28982.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__28994 = function(this_sym28981,k,not_found){
switch(arguments.length){
case 2:
return G__28994__2.call(this,this_sym28981,k);
case 3:
return G__28994__3.call(this,this_sym28981,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28994;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym28978,args28979){
var this__28987 = this;
return this_sym28978.call.apply(this_sym28978,[this_sym28978].concat(args28979.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__28988 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__28989 = this;
if((cljs.core._lookup.call(null,this__28989.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__28990 = this;
return cljs.core.count.call(null,this__28990.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__28991 = this;
this__28991.transient_map = cljs.core.dissoc_BANG_.call(null,this__28991.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__28992 = this;
this__28992.transient_map = cljs.core.assoc_BANG_.call(null,this__28992.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__28993 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__28993.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__28997 = this;
var h__18981__auto____28998 = this__28997.__hash;
if(!((h__18981__auto____28998 == null)))
{return h__18981__auto____28998;
} else
{var h__18981__auto____28999 = cljs.core.hash_iset.call(null,coll);
this__28997.__hash = h__18981__auto____28999;
return h__18981__auto____28999;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__29000 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__29001 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__29001.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__29027 = null;
var G__29027__2 = (function (this_sym29002,k){
var this__29004 = this;
var this_sym29002__29005 = this;
var coll__29006 = this_sym29002__29005;
return coll__29006.cljs$core$ILookup$_lookup$arity$2(coll__29006,k);
});
var G__29027__3 = (function (this_sym29003,k,not_found){
var this__29004 = this;
var this_sym29003__29007 = this;
var coll__29008 = this_sym29003__29007;
return coll__29008.cljs$core$ILookup$_lookup$arity$3(coll__29008,k,not_found);
});
G__29027 = function(this_sym29003,k,not_found){
switch(arguments.length){
case 2:
return G__29027__2.call(this,this_sym29003,k);
case 3:
return G__29027__3.call(this,this_sym29003,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__29027;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym28995,args28996){
var this__29009 = this;
return this_sym28995.call.apply(this_sym28995,[this_sym28995].concat(args28996.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__29010 = this;
return (new cljs.core.PersistentTreeSet(this__29010.meta,cljs.core.assoc.call(null,this__29010.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__29011 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__29011.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__29012 = this;
var this__29013 = this;
return cljs.core.pr_str.call(null,this__29013);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__29014 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__29014.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__29015 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__29015.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__29016 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__29017 = this;
return cljs.core._comparator.call(null,this__29017.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__29018 = this;
return cljs.core.keys.call(null,this__29018.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__29019 = this;
return (new cljs.core.PersistentTreeSet(this__29019.meta,cljs.core.dissoc.call(null,this__29019.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__29020 = this;
return cljs.core.count.call(null,this__29020.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__29021 = this;
var and__3941__auto____29022 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____29022)
{var and__3941__auto____29023 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____29023)
{return cljs.core.every_QMARK_.call(null,(function (p1__28977_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__28977_SHARP_);
}),other);
} else
{return and__3941__auto____29023;
}
} else
{return and__3941__auto____29022;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__29024 = this;
return (new cljs.core.PersistentTreeSet(meta,this__29024.tree_map,this__29024.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__29025 = this;
return this__29025.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__29026 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__29026.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__29032__delegate = function (keys){
var in__29030 = cljs.core.seq.call(null,keys);
var out__29031 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__29030))
{{
var G__29033 = cljs.core.next.call(null,in__29030);
var G__29034 = cljs.core.conj_BANG_.call(null,out__29031,cljs.core.first.call(null,in__29030));
in__29030 = G__29033;
out__29031 = G__29034;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__29031);
}
break;
}
};
var G__29032 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29032__delegate.call(this, keys);
};
G__29032.cljs$lang$maxFixedArity = 0;
G__29032.cljs$lang$applyTo = (function (arglist__29035){
var keys = cljs.core.seq(arglist__29035);;
return G__29032__delegate(keys);
});
G__29032.cljs$lang$arity$variadic = G__29032__delegate;
return G__29032;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__29036){
var keys = cljs.core.seq(arglist__29036);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__29038){
var comparator = cljs.core.first(arglist__29038);
var keys = cljs.core.rest(arglist__29038);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__29044 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4090__auto____29045 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4090__auto____29045))
{var e__29046 = temp__4090__auto____29045;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__29046));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__29044,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__29037_SHARP_){
var temp__4090__auto____29047 = cljs.core.find.call(null,smap,p1__29037_SHARP_);
if(cljs.core.truth_(temp__4090__auto____29047))
{var e__29048 = temp__4090__auto____29047;
return cljs.core.second.call(null,e__29048);
} else
{return p1__29037_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__29078 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__29071,seen){
while(true){
var vec__29072__29073 = p__29071;
var f__29074 = cljs.core.nth.call(null,vec__29072__29073,0,null);
var xs__29075 = vec__29072__29073;
var temp__4092__auto____29076 = cljs.core.seq.call(null,xs__29075);
if(temp__4092__auto____29076)
{var s__29077 = temp__4092__auto____29076;
if(cljs.core.contains_QMARK_.call(null,seen,f__29074))
{{
var G__29079 = cljs.core.rest.call(null,s__29077);
var G__29080 = seen;
p__29071 = G__29079;
seen = G__29080;
continue;
}
} else
{return cljs.core.cons.call(null,f__29074,step.call(null,cljs.core.rest.call(null,s__29077),cljs.core.conj.call(null,seen,f__29074)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__29078.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__29083 = cljs.core.PersistentVector.EMPTY;
var s__29084 = s;
while(true){
if(cljs.core.next.call(null,s__29084))
{{
var G__29085 = cljs.core.conj.call(null,ret__29083,cljs.core.first.call(null,s__29084));
var G__29086 = cljs.core.next.call(null,s__29084);
ret__29083 = G__29085;
s__29084 = G__29086;
continue;
}
} else
{return cljs.core.seq.call(null,ret__29083);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3943__auto____29089 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____29089)
{return or__3943__auto____29089;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__29090 = x.lastIndexOf("/");
if((i__29090 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__29090 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3943__auto____29093 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____29093)
{return or__3943__auto____29093;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__29094 = x.lastIndexOf("/");
if((i__29094 > -1))
{return cljs.core.subs.call(null,x,2,i__29094);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__29101 = cljs.core.ObjMap.EMPTY;
var ks__29102 = cljs.core.seq.call(null,keys);
var vs__29103 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3941__auto____29104 = ks__29102;
if(and__3941__auto____29104)
{return vs__29103;
} else
{return and__3941__auto____29104;
}
})())
{{
var G__29105 = cljs.core.assoc.call(null,map__29101,cljs.core.first.call(null,ks__29102),cljs.core.first.call(null,vs__29103));
var G__29106 = cljs.core.next.call(null,ks__29102);
var G__29107 = cljs.core.next.call(null,vs__29103);
map__29101 = G__29105;
ks__29102 = G__29106;
vs__29103 = G__29107;
continue;
}
} else
{return map__29101;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__29110__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__29095_SHARP_,p2__29096_SHARP_){
return max_key.call(null,k,p1__29095_SHARP_,p2__29096_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__29110 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29110__delegate.call(this, k, x, y, more);
};
G__29110.cljs$lang$maxFixedArity = 3;
G__29110.cljs$lang$applyTo = (function (arglist__29111){
var k = cljs.core.first(arglist__29111);
var x = cljs.core.first(cljs.core.next(arglist__29111));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29111)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29111)));
return G__29110__delegate(k, x, y, more);
});
G__29110.cljs$lang$arity$variadic = G__29110__delegate;
return G__29110;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__29112__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__29108_SHARP_,p2__29109_SHARP_){
return min_key.call(null,k,p1__29108_SHARP_,p2__29109_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__29112 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29112__delegate.call(this, k, x, y, more);
};
G__29112.cljs$lang$maxFixedArity = 3;
G__29112.cljs$lang$applyTo = (function (arglist__29113){
var k = cljs.core.first(arglist__29113);
var x = cljs.core.first(cljs.core.next(arglist__29113));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29113)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29113)));
return G__29112__delegate(k, x, y, more);
});
G__29112.cljs$lang$arity$variadic = G__29112__delegate;
return G__29112;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____29116 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____29116)
{var s__29117 = temp__4092__auto____29116;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__29117),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__29117)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____29120 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____29120)
{var s__29121 = temp__4092__auto____29120;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__29121))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__29121),take_while.call(null,pred,cljs.core.rest.call(null,s__29121)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__29123 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__29123.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__29135 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto____29136 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4092__auto____29136))
{var vec__29137__29138 = temp__4092__auto____29136;
var e__29139 = cljs.core.nth.call(null,vec__29137__29138,0,null);
var s__29140 = vec__29137__29138;
if(cljs.core.truth_(include__29135.call(null,e__29139)))
{return s__29140;
} else
{return cljs.core.next.call(null,s__29140);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__29135,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____29141 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4092__auto____29141))
{var vec__29142__29143 = temp__4092__auto____29141;
var e__29144 = cljs.core.nth.call(null,vec__29142__29143,0,null);
var s__29145 = vec__29142__29143;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__29144))?s__29145:cljs.core.next.call(null,s__29145)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__29157 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto____29158 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4092__auto____29158))
{var vec__29159__29160 = temp__4092__auto____29158;
var e__29161 = cljs.core.nth.call(null,vec__29159__29160,0,null);
var s__29162 = vec__29159__29160;
if(cljs.core.truth_(include__29157.call(null,e__29161)))
{return s__29162;
} else
{return cljs.core.next.call(null,s__29162);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__29157,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____29163 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4092__auto____29163))
{var vec__29164__29165 = temp__4092__auto____29163;
var e__29166 = cljs.core.nth.call(null,vec__29164__29165,0,null);
var s__29167 = vec__29164__29165;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__29166))?s__29167:cljs.core.next.call(null,s__29167)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__29168 = this;
var h__18981__auto____29169 = this__29168.__hash;
if(!((h__18981__auto____29169 == null)))
{return h__18981__auto____29169;
} else
{var h__18981__auto____29170 = cljs.core.hash_coll.call(null,rng);
this__29168.__hash = h__18981__auto____29170;
return h__18981__auto____29170;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__29171 = this;
if((this__29171.step > 0))
{if(((this__29171.start + this__29171.step) < this__29171.end))
{return (new cljs.core.Range(this__29171.meta,(this__29171.start + this__29171.step),this__29171.end,this__29171.step,null));
} else
{return null;
}
} else
{if(((this__29171.start + this__29171.step) > this__29171.end))
{return (new cljs.core.Range(this__29171.meta,(this__29171.start + this__29171.step),this__29171.end,this__29171.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__29172 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__29173 = this;
var this__29174 = this;
return cljs.core.pr_str.call(null,this__29174);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__29175 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__29176 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__29177 = this;
if((this__29177.step > 0))
{if((this__29177.start < this__29177.end))
{return rng;
} else
{return null;
}
} else
{if((this__29177.start > this__29177.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__29178 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__29178.end - this__29178.start) / this__29178.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__29179 = this;
return this__29179.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__29180 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__29180.meta,(this__29180.start + this__29180.step),this__29180.end,this__29180.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__29181 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__29182 = this;
return (new cljs.core.Range(meta,this__29182.start,this__29182.end,this__29182.step,this__29182.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__29183 = this;
return this__29183.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__29184 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__29184.start + (n * this__29184.step));
} else
{if((function (){var and__3941__auto____29185 = (this__29184.start > this__29184.end);
if(and__3941__auto____29185)
{return (this__29184.step === 0);
} else
{return and__3941__auto____29185;
}
})())
{return this__29184.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__29186 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__29186.start + (n * this__29186.step));
} else
{if((function (){var and__3941__auto____29187 = (this__29186.start > this__29186.end);
if(and__3941__auto____29187)
{return (this__29186.step === 0);
} else
{return and__3941__auto____29187;
}
})())
{return this__29186.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__29188 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__29188.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____29191 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____29191)
{var s__29192 = temp__4092__auto____29191;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__29192),take_nth.call(null,n,cljs.core.drop.call(null,n,s__29192)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____29199 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____29199)
{var s__29200 = temp__4092__auto____29199;
var fst__29201 = cljs.core.first.call(null,s__29200);
var fv__29202 = f.call(null,fst__29201);
var run__29203 = cljs.core.cons.call(null,fst__29201,cljs.core.take_while.call(null,(function (p1__29193_SHARP_){
return cljs.core._EQ_.call(null,fv__29202,f.call(null,p1__29193_SHARP_));
}),cljs.core.next.call(null,s__29200)));
return cljs.core.cons.call(null,run__29203,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__29203),s__29200))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____29218 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____29218)
{var s__29219 = temp__4090__auto____29218;
return reductions.call(null,f,cljs.core.first.call(null,s__29219),cljs.core.rest.call(null,s__29219));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____29220 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____29220)
{var s__29221 = temp__4092__auto____29220;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__29221)),cljs.core.rest.call(null,s__29221));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__29224 = null;
var G__29224__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__29224__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__29224__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__29224__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__29224__4 = (function() { 
var G__29225__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__29225 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29225__delegate.call(this, x, y, z, args);
};
G__29225.cljs$lang$maxFixedArity = 3;
G__29225.cljs$lang$applyTo = (function (arglist__29226){
var x = cljs.core.first(arglist__29226);
var y = cljs.core.first(cljs.core.next(arglist__29226));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29226)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29226)));
return G__29225__delegate(x, y, z, args);
});
G__29225.cljs$lang$arity$variadic = G__29225__delegate;
return G__29225;
})()
;
G__29224 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29224__0.call(this);
case 1:
return G__29224__1.call(this,x);
case 2:
return G__29224__2.call(this,x,y);
case 3:
return G__29224__3.call(this,x,y,z);
default:
return G__29224__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29224.cljs$lang$maxFixedArity = 3;
G__29224.cljs$lang$applyTo = G__29224__4.cljs$lang$applyTo;
return G__29224;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__29227 = null;
var G__29227__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__29227__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__29227__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__29227__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__29227__4 = (function() { 
var G__29228__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__29228 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29228__delegate.call(this, x, y, z, args);
};
G__29228.cljs$lang$maxFixedArity = 3;
G__29228.cljs$lang$applyTo = (function (arglist__29229){
var x = cljs.core.first(arglist__29229);
var y = cljs.core.first(cljs.core.next(arglist__29229));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29229)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29229)));
return G__29228__delegate(x, y, z, args);
});
G__29228.cljs$lang$arity$variadic = G__29228__delegate;
return G__29228;
})()
;
G__29227 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29227__0.call(this);
case 1:
return G__29227__1.call(this,x);
case 2:
return G__29227__2.call(this,x,y);
case 3:
return G__29227__3.call(this,x,y,z);
default:
return G__29227__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29227.cljs$lang$maxFixedArity = 3;
G__29227.cljs$lang$applyTo = G__29227__4.cljs$lang$applyTo;
return G__29227;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__29230 = null;
var G__29230__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__29230__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__29230__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__29230__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__29230__4 = (function() { 
var G__29231__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__29231 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29231__delegate.call(this, x, y, z, args);
};
G__29231.cljs$lang$maxFixedArity = 3;
G__29231.cljs$lang$applyTo = (function (arglist__29232){
var x = cljs.core.first(arglist__29232);
var y = cljs.core.first(cljs.core.next(arglist__29232));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29232)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29232)));
return G__29231__delegate(x, y, z, args);
});
G__29231.cljs$lang$arity$variadic = G__29231__delegate;
return G__29231;
})()
;
G__29230 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29230__0.call(this);
case 1:
return G__29230__1.call(this,x);
case 2:
return G__29230__2.call(this,x,y);
case 3:
return G__29230__3.call(this,x,y,z);
default:
return G__29230__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29230.cljs$lang$maxFixedArity = 3;
G__29230.cljs$lang$applyTo = G__29230__4.cljs$lang$applyTo;
return G__29230;
})()
});
var juxt__4 = (function() { 
var G__29233__delegate = function (f,g,h,fs){
var fs__29223 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__29234 = null;
var G__29234__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__29204_SHARP_,p2__29205_SHARP_){
return cljs.core.conj.call(null,p1__29204_SHARP_,p2__29205_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__29223);
});
var G__29234__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__29206_SHARP_,p2__29207_SHARP_){
return cljs.core.conj.call(null,p1__29206_SHARP_,p2__29207_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__29223);
});
var G__29234__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__29208_SHARP_,p2__29209_SHARP_){
return cljs.core.conj.call(null,p1__29208_SHARP_,p2__29209_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__29223);
});
var G__29234__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__29210_SHARP_,p2__29211_SHARP_){
return cljs.core.conj.call(null,p1__29210_SHARP_,p2__29211_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__29223);
});
var G__29234__4 = (function() { 
var G__29235__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__29212_SHARP_,p2__29213_SHARP_){
return cljs.core.conj.call(null,p1__29212_SHARP_,cljs.core.apply.call(null,p2__29213_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__29223);
};
var G__29235 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29235__delegate.call(this, x, y, z, args);
};
G__29235.cljs$lang$maxFixedArity = 3;
G__29235.cljs$lang$applyTo = (function (arglist__29236){
var x = cljs.core.first(arglist__29236);
var y = cljs.core.first(cljs.core.next(arglist__29236));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29236)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29236)));
return G__29235__delegate(x, y, z, args);
});
G__29235.cljs$lang$arity$variadic = G__29235__delegate;
return G__29235;
})()
;
G__29234 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29234__0.call(this);
case 1:
return G__29234__1.call(this,x);
case 2:
return G__29234__2.call(this,x,y);
case 3:
return G__29234__3.call(this,x,y,z);
default:
return G__29234__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29234.cljs$lang$maxFixedArity = 3;
G__29234.cljs$lang$applyTo = G__29234__4.cljs$lang$applyTo;
return G__29234;
})()
};
var G__29233 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29233__delegate.call(this, f, g, h, fs);
};
G__29233.cljs$lang$maxFixedArity = 3;
G__29233.cljs$lang$applyTo = (function (arglist__29237){
var f = cljs.core.first(arglist__29237);
var g = cljs.core.first(cljs.core.next(arglist__29237));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29237)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29237)));
return G__29233__delegate(f, g, h, fs);
});
G__29233.cljs$lang$arity$variadic = G__29233__delegate;
return G__29233;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__29240 = cljs.core.next.call(null,coll);
coll = G__29240;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____29239 = cljs.core.seq.call(null,coll);
if(and__3941__auto____29239)
{return (n > 0);
} else
{return and__3941__auto____29239;
}
})()))
{{
var G__29241 = (n - 1);
var G__29242 = cljs.core.next.call(null,coll);
n = G__29241;
coll = G__29242;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__29244 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__29244),s))
{if((cljs.core.count.call(null,matches__29244) === 1))
{return cljs.core.first.call(null,matches__29244);
} else
{return cljs.core.vec.call(null,matches__29244);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__29246 = re.exec(s);
if((matches__29246 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__29246) === 1))
{return cljs.core.first.call(null,matches__29246);
} else
{return cljs.core.vec.call(null,matches__29246);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__29251 = cljs.core.re_find.call(null,re,s);
var match_idx__29252 = s.search(re);
var match_str__29253 = ((cljs.core.coll_QMARK_.call(null,match_data__29251))?cljs.core.first.call(null,match_data__29251):match_data__29251);
var post_match__29254 = cljs.core.subs.call(null,s,(match_idx__29252 + cljs.core.count.call(null,match_str__29253)));
if(cljs.core.truth_(match_data__29251))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__29251,re_seq.call(null,re,post_match__29254));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__29261__29262 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___29263 = cljs.core.nth.call(null,vec__29261__29262,0,null);
var flags__29264 = cljs.core.nth.call(null,vec__29261__29262,1,null);
var pattern__29265 = cljs.core.nth.call(null,vec__29261__29262,2,null);
return (new RegExp(pattern__29265,flags__29264));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__29255_SHARP_){
return print_one.call(null,p1__29255_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3941__auto____29275 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3941__auto____29275))
{var and__3941__auto____29279 = (function (){var G__29276__29277 = obj;
if(G__29276__29277)
{if((function (){var or__3943__auto____29278 = (G__29276__29277.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____29278)
{return or__3943__auto____29278;
} else
{return G__29276__29277.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__29276__29277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__29276__29277);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__29276__29277);
}
})();
if(cljs.core.truth_(and__3941__auto____29279))
{return cljs.core.meta.call(null,obj);
} else
{return and__3941__auto____29279;
}
} else
{return and__3941__auto____29275;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3941__auto____29280 = !((obj == null));
if(and__3941__auto____29280)
{return obj.cljs$lang$type;
} else
{return and__3941__auto____29280;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__29281__29282 = obj;
if(G__29281__29282)
{if((function (){var or__3943__auto____29283 = (G__29281__29282.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto____29283)
{return or__3943__auto____29283;
} else
{return G__29281__29282.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__29281__29282.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__29281__29282);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__29281__29282);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__29303 = (new goog.string.StringBuffer());
var G__29304__29305 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__29304__29305)
{var string__29306 = cljs.core.first.call(null,G__29304__29305);
var G__29304__29307 = G__29304__29305;
while(true){
sb__29303.append(string__29306);
var temp__4092__auto____29308 = cljs.core.next.call(null,G__29304__29307);
if(temp__4092__auto____29308)
{var G__29304__29309 = temp__4092__auto____29308;
{
var G__29322 = cljs.core.first.call(null,G__29304__29309);
var G__29323 = G__29304__29309;
string__29306 = G__29322;
G__29304__29307 = G__29323;
continue;
}
} else
{}
break;
}
} else
{}
var G__29310__29311 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__29310__29311)
{var obj__29312 = cljs.core.first.call(null,G__29310__29311);
var G__29310__29313 = G__29310__29311;
while(true){
sb__29303.append(" ");
var G__29314__29315 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__29312,opts));
if(G__29314__29315)
{var string__29316 = cljs.core.first.call(null,G__29314__29315);
var G__29314__29317 = G__29314__29315;
while(true){
sb__29303.append(string__29316);
var temp__4092__auto____29318 = cljs.core.next.call(null,G__29314__29317);
if(temp__4092__auto____29318)
{var G__29314__29319 = temp__4092__auto____29318;
{
var G__29324 = cljs.core.first.call(null,G__29314__29319);
var G__29325 = G__29314__29319;
string__29316 = G__29324;
G__29314__29317 = G__29325;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____29320 = cljs.core.next.call(null,G__29310__29313);
if(temp__4092__auto____29320)
{var G__29310__29321 = temp__4092__auto____29320;
{
var G__29326 = cljs.core.first.call(null,G__29310__29321);
var G__29327 = G__29310__29321;
obj__29312 = G__29326;
G__29310__29313 = G__29327;
continue;
}
} else
{}
break;
}
} else
{}
return sb__29303;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__29329 = cljs.core.pr_sb.call(null,objs,opts);
sb__29329.append("\n");
return [cljs.core.str(sb__29329)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__29348__29349 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__29348__29349)
{var string__29350 = cljs.core.first.call(null,G__29348__29349);
var G__29348__29351 = G__29348__29349;
while(true){
cljs.core.string_print.call(null,string__29350);
var temp__4092__auto____29352 = cljs.core.next.call(null,G__29348__29351);
if(temp__4092__auto____29352)
{var G__29348__29353 = temp__4092__auto____29352;
{
var G__29366 = cljs.core.first.call(null,G__29348__29353);
var G__29367 = G__29348__29353;
string__29350 = G__29366;
G__29348__29351 = G__29367;
continue;
}
} else
{}
break;
}
} else
{}
var G__29354__29355 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__29354__29355)
{var obj__29356 = cljs.core.first.call(null,G__29354__29355);
var G__29354__29357 = G__29354__29355;
while(true){
cljs.core.string_print.call(null," ");
var G__29358__29359 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__29356,opts));
if(G__29358__29359)
{var string__29360 = cljs.core.first.call(null,G__29358__29359);
var G__29358__29361 = G__29358__29359;
while(true){
cljs.core.string_print.call(null,string__29360);
var temp__4092__auto____29362 = cljs.core.next.call(null,G__29358__29361);
if(temp__4092__auto____29362)
{var G__29358__29363 = temp__4092__auto____29362;
{
var G__29368 = cljs.core.first.call(null,G__29358__29363);
var G__29369 = G__29358__29363;
string__29360 = G__29368;
G__29358__29361 = G__29369;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____29364 = cljs.core.next.call(null,G__29354__29357);
if(temp__4092__auto____29364)
{var G__29354__29365 = temp__4092__auto____29364;
{
var G__29370 = cljs.core.first.call(null,G__29354__29365);
var G__29371 = G__29354__29365;
obj__29356 = G__29370;
G__29354__29357 = G__29371;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__29372){
var objs = cljs.core.seq(arglist__29372);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__29373){
var objs = cljs.core.seq(arglist__29373);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__29374){
var objs = cljs.core.seq(arglist__29374);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__29375){
var objs = cljs.core.seq(arglist__29375);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__29376){
var objs = cljs.core.seq(arglist__29376);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__29377){
var objs = cljs.core.seq(arglist__29377);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__29378){
var objs = cljs.core.seq(arglist__29378);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__29379){
var objs = cljs.core.seq(arglist__29379);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__29380){
var fmt = cljs.core.first(arglist__29380);
var args = cljs.core.rest(arglist__29380);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__29381 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__29381,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__29382 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__29382,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__29383 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__29383,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4092__auto____29384 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____29384))
{var nspc__29385 = temp__4092__auto____29384;
return [cljs.core.str(nspc__29385),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4092__auto____29386 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____29386))
{var nspc__29387 = temp__4092__auto____29386;
return [cljs.core.str(nspc__29387),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__29388 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__29388,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__29390 = (function (n,len){
var ns__29389 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__29389) < len))
{{
var G__29392 = [cljs.core.str("0"),cljs.core.str(ns__29389)].join('');
ns__29389 = G__29392;
continue;
}
} else
{return ns__29389;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__29390.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__29390.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__29390.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__29390.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__29390.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__29390.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__29391 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__29391,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__29393 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__29394 = this;
var G__29395__29396 = cljs.core.seq.call(null,this__29394.watches);
if(G__29395__29396)
{var G__29398__29400 = cljs.core.first.call(null,G__29395__29396);
var vec__29399__29401 = G__29398__29400;
var key__29402 = cljs.core.nth.call(null,vec__29399__29401,0,null);
var f__29403 = cljs.core.nth.call(null,vec__29399__29401,1,null);
var G__29395__29404 = G__29395__29396;
var G__29398__29405 = G__29398__29400;
var G__29395__29406 = G__29395__29404;
while(true){
var vec__29407__29408 = G__29398__29405;
var key__29409 = cljs.core.nth.call(null,vec__29407__29408,0,null);
var f__29410 = cljs.core.nth.call(null,vec__29407__29408,1,null);
var G__29395__29411 = G__29395__29406;
f__29410.call(null,key__29409,this$,oldval,newval);
var temp__4092__auto____29412 = cljs.core.next.call(null,G__29395__29411);
if(temp__4092__auto____29412)
{var G__29395__29413 = temp__4092__auto____29412;
{
var G__29420 = cljs.core.first.call(null,G__29395__29413);
var G__29421 = G__29395__29413;
G__29398__29405 = G__29420;
G__29395__29406 = G__29421;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__29414 = this;
return this$.watches = cljs.core.assoc.call(null,this__29414.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__29415 = this;
return this$.watches = cljs.core.dissoc.call(null,this__29415.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__29416 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__29416.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__29417 = this;
return this__29417.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__29418 = this;
return this__29418.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__29419 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__29433__delegate = function (x,p__29422){
var map__29428__29429 = p__29422;
var map__29428__29430 = ((cljs.core.seq_QMARK_.call(null,map__29428__29429))?cljs.core.apply.call(null,cljs.core.hash_map,map__29428__29429):map__29428__29429);
var validator__29431 = cljs.core._lookup.call(null,map__29428__29430,"\uFDD0'validator",null);
var meta__29432 = cljs.core._lookup.call(null,map__29428__29430,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__29432,validator__29431,null));
};
var G__29433 = function (x,var_args){
var p__29422 = null;
if (goog.isDef(var_args)) {
  p__29422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__29433__delegate.call(this, x, p__29422);
};
G__29433.cljs$lang$maxFixedArity = 1;
G__29433.cljs$lang$applyTo = (function (arglist__29434){
var x = cljs.core.first(arglist__29434);
var p__29422 = cljs.core.rest(arglist__29434);
return G__29433__delegate(x, p__29422);
});
G__29433.cljs$lang$arity$variadic = G__29433__delegate;
return G__29433;
})()
;
atom = function(x,var_args){
var p__29422 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto____29438 = a.validator;
if(cljs.core.truth_(temp__4092__auto____29438))
{var validate__29439 = temp__4092__auto____29438;
if(cljs.core.truth_(validate__29439.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__29440 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__29440,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__29441__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__29441 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__29441__delegate.call(this, a, f, x, y, z, more);
};
G__29441.cljs$lang$maxFixedArity = 5;
G__29441.cljs$lang$applyTo = (function (arglist__29442){
var a = cljs.core.first(arglist__29442);
var f = cljs.core.first(cljs.core.next(arglist__29442));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29442)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29442))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29442)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29442)))));
return G__29441__delegate(a, f, x, y, z, more);
});
G__29441.cljs$lang$arity$variadic = G__29441__delegate;
return G__29441;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__29443){
var iref = cljs.core.first(arglist__29443);
var f = cljs.core.first(cljs.core.next(arglist__29443));
var args = cljs.core.rest(cljs.core.next(arglist__29443));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__29444 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__29444.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__29445 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__29445.state,(function (p__29446){
var map__29447__29448 = p__29446;
var map__29447__29449 = ((cljs.core.seq_QMARK_.call(null,map__29447__29448))?cljs.core.apply.call(null,cljs.core.hash_map,map__29447__29448):map__29447__29448);
var curr_state__29450 = map__29447__29449;
var done__29451 = cljs.core._lookup.call(null,map__29447__29449,"\uFDD0'done",null);
if(cljs.core.truth_(done__29451))
{return curr_state__29450;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__29445.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__29480__29481 = options;
var map__29480__29482 = ((cljs.core.seq_QMARK_.call(null,map__29480__29481))?cljs.core.apply.call(null,cljs.core.hash_map,map__29480__29481):map__29480__29481);
var keywordize_keys__29483 = cljs.core._lookup.call(null,map__29480__29482,"\uFDD0'keywordize-keys",null);
var keyfn__29484 = (cljs.core.truth_(keywordize_keys__29483)?cljs.core.keyword:cljs.core.str);
var f__29507 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__19251__auto____29506 = (function iter__29496(s__29497){
return (new cljs.core.LazySeq(null,false,(function (){
var s__29497__29502 = s__29497;
while(true){
var temp__4092__auto____29503 = cljs.core.seq.call(null,s__29497__29502);
if(temp__4092__auto____29503)
{var xs__4579__auto____29504 = temp__4092__auto____29503;
var k__29505 = cljs.core.first.call(null,xs__4579__auto____29504);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__29484.call(null,k__29505),thisfn.call(null,(x[k__29505]))], true),iter__29496.call(null,cljs.core.rest.call(null,s__29497__29502)));
} else
{return null;
}
break;
}
}),null));
});
return iter__19251__auto____29506.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__29507.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__29508){
var x = cljs.core.first(arglist__29508);
var options = cljs.core.rest(arglist__29508);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__29513 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__29517__delegate = function (args){
var temp__4090__auto____29514 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__29513),args,null);
if(cljs.core.truth_(temp__4090__auto____29514))
{var v__29515 = temp__4090__auto____29514;
return v__29515;
} else
{var ret__29516 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__29513,cljs.core.assoc,args,ret__29516);
return ret__29516;
}
};
var G__29517 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29517__delegate.call(this, args);
};
G__29517.cljs$lang$maxFixedArity = 0;
G__29517.cljs$lang$applyTo = (function (arglist__29518){
var args = cljs.core.seq(arglist__29518);;
return G__29517__delegate(args);
});
G__29517.cljs$lang$arity$variadic = G__29517__delegate;
return G__29517;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__29520 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__29520))
{{
var G__29521 = ret__29520;
f = G__29521;
continue;
}
} else
{return ret__29520;
}
break;
}
});
var trampoline__2 = (function() { 
var G__29522__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__29522 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__29522__delegate.call(this, f, args);
};
G__29522.cljs$lang$maxFixedArity = 1;
G__29522.cljs$lang$applyTo = (function (arglist__29523){
var f = cljs.core.first(arglist__29523);
var args = cljs.core.rest(arglist__29523);
return G__29522__delegate(f, args);
});
G__29522.cljs$lang$arity$variadic = G__29522__delegate;
return G__29522;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__29525 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__29525,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__29525,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto____29534 = cljs.core._EQ_.call(null,child,parent);
if(or__3943__auto____29534)
{return or__3943__auto____29534;
} else
{var or__3943__auto____29535 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____29535)
{return or__3943__auto____29535;
} else
{var and__3941__auto____29536 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3941__auto____29536)
{var and__3941__auto____29537 = cljs.core.vector_QMARK_.call(null,child);
if(and__3941__auto____29537)
{var and__3941__auto____29538 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3941__auto____29538)
{var ret__29539 = true;
var i__29540 = 0;
while(true){
if((function (){var or__3943__auto____29541 = cljs.core.not.call(null,ret__29539);
if(or__3943__auto____29541)
{return or__3943__auto____29541;
} else
{return (i__29540 === cljs.core.count.call(null,parent));
}
})())
{return ret__29539;
} else
{{
var G__29542 = isa_QMARK_.call(null,h,child.call(null,i__29540),parent.call(null,i__29540));
var G__29543 = (i__29540 + 1);
ret__29539 = G__29542;
i__29540 = G__29543;
continue;
}
}
break;
}
} else
{return and__3941__auto____29538;
}
} else
{return and__3941__auto____29537;
}
} else
{return and__3941__auto____29536;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724,"\uFDD0'column",12))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728,"\uFDD0'column",12))))].join('')));
}
var tp__29552 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__29553 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__29554 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__29555 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3943__auto____29556 = ((cljs.core.contains_QMARK_.call(null,tp__29552.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__29554.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__29554.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__29552,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__29555.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__29553,parent,ta__29554),"\uFDD0'descendants":tf__29555.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__29554,tag,td__29553)});
})());
if(cljs.core.truth_(or__3943__auto____29556))
{return or__3943__auto____29556;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__29561 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__29562 = (cljs.core.truth_(parentMap__29561.call(null,tag))?cljs.core.disj.call(null,parentMap__29561.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__29563 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__29562))?cljs.core.assoc.call(null,parentMap__29561,tag,childsParents__29562):cljs.core.dissoc.call(null,parentMap__29561,tag));
var deriv_seq__29564 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__29544_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__29544_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__29544_SHARP_),cljs.core.second.call(null,p1__29544_SHARP_)));
}),cljs.core.seq.call(null,newParents__29563)));
if(cljs.core.contains_QMARK_.call(null,parentMap__29561.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__29545_SHARP_,p2__29546_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__29545_SHARP_,p2__29546_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__29564));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__29572 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3943__auto____29574 = (cljs.core.truth_((function (){var and__3941__auto____29573 = xprefs__29572;
if(cljs.core.truth_(and__3941__auto____29573))
{return xprefs__29572.call(null,y);
} else
{return and__3941__auto____29573;
}
})())?true:null);
if(cljs.core.truth_(or__3943__auto____29574))
{return or__3943__auto____29574;
} else
{var or__3943__auto____29576 = (function (){var ps__29575 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__29575) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__29575),prefer_table)))
{} else
{}
{
var G__29579 = cljs.core.rest.call(null,ps__29575);
ps__29575 = G__29579;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____29576))
{return or__3943__auto____29576;
} else
{var or__3943__auto____29578 = (function (){var ps__29577 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__29577) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__29577),y,prefer_table)))
{} else
{}
{
var G__29580 = cljs.core.rest.call(null,ps__29577);
ps__29577 = G__29580;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____29578))
{return or__3943__auto____29578;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto____29582 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3943__auto____29582))
{return or__3943__auto____29582;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__29600 = cljs.core.reduce.call(null,(function (be,p__29592){
var vec__29593__29594 = p__29592;
var k__29595 = cljs.core.nth.call(null,vec__29593__29594,0,null);
var ___29596 = cljs.core.nth.call(null,vec__29593__29594,1,null);
var e__29597 = vec__29593__29594;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__29595))
{var be2__29599 = (cljs.core.truth_((function (){var or__3943__auto____29598 = (be == null);
if(or__3943__auto____29598)
{return or__3943__auto____29598;
} else
{return cljs.core.dominates.call(null,k__29595,cljs.core.first.call(null,be),prefer_table);
}
})())?e__29597:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__29599),k__29595,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__29595),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__29599)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__29599;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__29600))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__29600));
return cljs.core.second.call(null,best_entry__29600);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto____29605 = mf;
if(and__3941__auto____29605)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto____29605;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__19152__auto____29606 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29607 = (cljs.core._reset[goog.typeOf(x__19152__auto____29606)]);
if(or__3943__auto____29607)
{return or__3943__auto____29607;
} else
{var or__3943__auto____29608 = (cljs.core._reset["_"]);
if(or__3943__auto____29608)
{return or__3943__auto____29608;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto____29613 = mf;
if(and__3941__auto____29613)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto____29613;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__19152__auto____29614 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29615 = (cljs.core._add_method[goog.typeOf(x__19152__auto____29614)]);
if(or__3943__auto____29615)
{return or__3943__auto____29615;
} else
{var or__3943__auto____29616 = (cljs.core._add_method["_"]);
if(or__3943__auto____29616)
{return or__3943__auto____29616;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto____29621 = mf;
if(and__3941__auto____29621)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto____29621;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__19152__auto____29622 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29623 = (cljs.core._remove_method[goog.typeOf(x__19152__auto____29622)]);
if(or__3943__auto____29623)
{return or__3943__auto____29623;
} else
{var or__3943__auto____29624 = (cljs.core._remove_method["_"]);
if(or__3943__auto____29624)
{return or__3943__auto____29624;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto____29629 = mf;
if(and__3941__auto____29629)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto____29629;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__19152__auto____29630 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29631 = (cljs.core._prefer_method[goog.typeOf(x__19152__auto____29630)]);
if(or__3943__auto____29631)
{return or__3943__auto____29631;
} else
{var or__3943__auto____29632 = (cljs.core._prefer_method["_"]);
if(or__3943__auto____29632)
{return or__3943__auto____29632;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto____29637 = mf;
if(and__3941__auto____29637)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto____29637;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__19152__auto____29638 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29639 = (cljs.core._get_method[goog.typeOf(x__19152__auto____29638)]);
if(or__3943__auto____29639)
{return or__3943__auto____29639;
} else
{var or__3943__auto____29640 = (cljs.core._get_method["_"]);
if(or__3943__auto____29640)
{return or__3943__auto____29640;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto____29645 = mf;
if(and__3941__auto____29645)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto____29645;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__19152__auto____29646 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29647 = (cljs.core._methods[goog.typeOf(x__19152__auto____29646)]);
if(or__3943__auto____29647)
{return or__3943__auto____29647;
} else
{var or__3943__auto____29648 = (cljs.core._methods["_"]);
if(or__3943__auto____29648)
{return or__3943__auto____29648;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto____29653 = mf;
if(and__3941__auto____29653)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto____29653;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__19152__auto____29654 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29655 = (cljs.core._prefers[goog.typeOf(x__19152__auto____29654)]);
if(or__3943__auto____29655)
{return or__3943__auto____29655;
} else
{var or__3943__auto____29656 = (cljs.core._prefers["_"]);
if(or__3943__auto____29656)
{return or__3943__auto____29656;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto____29661 = mf;
if(and__3941__auto____29661)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto____29661;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__19152__auto____29662 = (((mf == null))?null:mf);
return (function (){var or__3943__auto____29663 = (cljs.core._dispatch[goog.typeOf(x__19152__auto____29662)]);
if(or__3943__auto____29663)
{return or__3943__auto____29663;
} else
{var or__3943__auto____29664 = (cljs.core._dispatch["_"]);
if(or__3943__auto____29664)
{return or__3943__auto____29664;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__29667 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__29668 = cljs.core._get_method.call(null,mf,dispatch_val__29667);
if(cljs.core.truth_(target_fn__29668))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__29667)].join('')));
}
return cljs.core.apply.call(null,target_fn__29668,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__29669 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__29670 = this;
cljs.core.swap_BANG_.call(null,this__29670.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__29670.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__29670.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__29670.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__29671 = this;
cljs.core.swap_BANG_.call(null,this__29671.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__29671.method_cache,this__29671.method_table,this__29671.cached_hierarchy,this__29671.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__29672 = this;
cljs.core.swap_BANG_.call(null,this__29672.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__29672.method_cache,this__29672.method_table,this__29672.cached_hierarchy,this__29672.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__29673 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__29673.cached_hierarchy),cljs.core.deref.call(null,this__29673.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__29673.method_cache,this__29673.method_table,this__29673.cached_hierarchy,this__29673.hierarchy);
}
var temp__4090__auto____29674 = cljs.core.deref.call(null,this__29673.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4090__auto____29674))
{var target_fn__29675 = temp__4090__auto____29674;
return target_fn__29675;
} else
{var temp__4090__auto____29676 = cljs.core.find_and_cache_best_method.call(null,this__29673.name,dispatch_val,this__29673.hierarchy,this__29673.method_table,this__29673.prefer_table,this__29673.method_cache,this__29673.cached_hierarchy);
if(cljs.core.truth_(temp__4090__auto____29676))
{var target_fn__29677 = temp__4090__auto____29676;
return target_fn__29677;
} else
{return cljs.core.deref.call(null,this__29673.method_table).call(null,this__29673.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__29678 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__29678.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__29678.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__29678.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__29678.method_cache,this__29678.method_table,this__29678.cached_hierarchy,this__29678.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__29679 = this;
return cljs.core.deref.call(null,this__29679.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__29680 = this;
return cljs.core.deref.call(null,this__29680.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__29681 = this;
return cljs.core.do_dispatch.call(null,mf,this__29681.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__29683__delegate = function (_,args){
var self__29682 = this;
return cljs.core._dispatch.call(null,self__29682,args);
};
var G__29683 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__29683__delegate.call(this, _, args);
};
G__29683.cljs$lang$maxFixedArity = 1;
G__29683.cljs$lang$applyTo = (function (arglist__29684){
var _ = cljs.core.first(arglist__29684);
var args = cljs.core.rest(arglist__29684);
return G__29683__delegate(_, args);
});
G__29683.cljs$lang$arity$variadic = G__29683__delegate;
return G__29683;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__29685 = this;
return cljs.core._dispatch.call(null,self__29685,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__29686 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_29688,_){
var this__29687 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__29687.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__29689 = this;
var and__3941__auto____29690 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3941__auto____29690)
{return (this__29689.uuid === other.uuid);
} else
{return and__3941__auto____29690;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__29691 = this;
var this__29692 = this;
return cljs.core.pr_str.call(null,this__29692);
});
cljs.core.UUID;
