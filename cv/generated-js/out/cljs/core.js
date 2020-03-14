goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.string.format');
goog.require('goog.object');
goog.require('goog.array');
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
var x__14765 = (((x == null))?null:x);
if((p[goog.typeOf(x__14765)]))
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
var G__14766__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__14766 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14766__delegate.call(this, array, i, idxs);
};
G__14766.cljs$lang$maxFixedArity = 2;
G__14766.cljs$lang$applyTo = (function (arglist__14767){
var array = cljs.core.first(arglist__14767);
var i = cljs.core.first(cljs.core.next(arglist__14767));
var idxs = cljs.core.rest(cljs.core.next(arglist__14767));
return G__14766__delegate(array, i, idxs);
});
G__14766.cljs$lang$arity$variadic = G__14766__delegate;
return G__14766;
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
if((function (){var and__4236__auto____14852 = this$;
if(and__4236__auto____14852)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__4236__auto____14852;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__8178__auto____14853 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14854 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14853)]);
if(or__4238__auto____14854)
{return or__4238__auto____14854;
} else
{var or__4238__auto____14855 = (cljs.core._invoke["_"]);
if(or__4238__auto____14855)
{return or__4238__auto____14855;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__4236__auto____14856 = this$;
if(and__4236__auto____14856)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__4236__auto____14856;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__8178__auto____14857 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14858 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14857)]);
if(or__4238__auto____14858)
{return or__4238__auto____14858;
} else
{var or__4238__auto____14859 = (cljs.core._invoke["_"]);
if(or__4238__auto____14859)
{return or__4238__auto____14859;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__4236__auto____14860 = this$;
if(and__4236__auto____14860)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__4236__auto____14860;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__8178__auto____14861 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14862 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14861)]);
if(or__4238__auto____14862)
{return or__4238__auto____14862;
} else
{var or__4238__auto____14863 = (cljs.core._invoke["_"]);
if(or__4238__auto____14863)
{return or__4238__auto____14863;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__4236__auto____14864 = this$;
if(and__4236__auto____14864)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__4236__auto____14864;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__8178__auto____14865 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14866 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14865)]);
if(or__4238__auto____14866)
{return or__4238__auto____14866;
} else
{var or__4238__auto____14867 = (cljs.core._invoke["_"]);
if(or__4238__auto____14867)
{return or__4238__auto____14867;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__4236__auto____14868 = this$;
if(and__4236__auto____14868)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__4236__auto____14868;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__8178__auto____14869 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14870 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14869)]);
if(or__4238__auto____14870)
{return or__4238__auto____14870;
} else
{var or__4238__auto____14871 = (cljs.core._invoke["_"]);
if(or__4238__auto____14871)
{return or__4238__auto____14871;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__4236__auto____14872 = this$;
if(and__4236__auto____14872)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__4236__auto____14872;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__8178__auto____14873 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14874 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14873)]);
if(or__4238__auto____14874)
{return or__4238__auto____14874;
} else
{var or__4238__auto____14875 = (cljs.core._invoke["_"]);
if(or__4238__auto____14875)
{return or__4238__auto____14875;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__4236__auto____14876 = this$;
if(and__4236__auto____14876)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__4236__auto____14876;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__8178__auto____14877 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14878 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14877)]);
if(or__4238__auto____14878)
{return or__4238__auto____14878;
} else
{var or__4238__auto____14879 = (cljs.core._invoke["_"]);
if(or__4238__auto____14879)
{return or__4238__auto____14879;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__4236__auto____14880 = this$;
if(and__4236__auto____14880)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__4236__auto____14880;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__8178__auto____14881 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14882 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14881)]);
if(or__4238__auto____14882)
{return or__4238__auto____14882;
} else
{var or__4238__auto____14883 = (cljs.core._invoke["_"]);
if(or__4238__auto____14883)
{return or__4238__auto____14883;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__4236__auto____14884 = this$;
if(and__4236__auto____14884)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__4236__auto____14884;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__8178__auto____14885 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14886 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14885)]);
if(or__4238__auto____14886)
{return or__4238__auto____14886;
} else
{var or__4238__auto____14887 = (cljs.core._invoke["_"]);
if(or__4238__auto____14887)
{return or__4238__auto____14887;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__4236__auto____14888 = this$;
if(and__4236__auto____14888)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__4236__auto____14888;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__8178__auto____14889 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14890 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14889)]);
if(or__4238__auto____14890)
{return or__4238__auto____14890;
} else
{var or__4238__auto____14891 = (cljs.core._invoke["_"]);
if(or__4238__auto____14891)
{return or__4238__auto____14891;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__4236__auto____14892 = this$;
if(and__4236__auto____14892)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__4236__auto____14892;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__8178__auto____14893 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14894 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14893)]);
if(or__4238__auto____14894)
{return or__4238__auto____14894;
} else
{var or__4238__auto____14895 = (cljs.core._invoke["_"]);
if(or__4238__auto____14895)
{return or__4238__auto____14895;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__4236__auto____14896 = this$;
if(and__4236__auto____14896)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__4236__auto____14896;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__8178__auto____14897 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14898 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14897)]);
if(or__4238__auto____14898)
{return or__4238__auto____14898;
} else
{var or__4238__auto____14899 = (cljs.core._invoke["_"]);
if(or__4238__auto____14899)
{return or__4238__auto____14899;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__4236__auto____14900 = this$;
if(and__4236__auto____14900)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__4236__auto____14900;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__8178__auto____14901 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14902 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14901)]);
if(or__4238__auto____14902)
{return or__4238__auto____14902;
} else
{var or__4238__auto____14903 = (cljs.core._invoke["_"]);
if(or__4238__auto____14903)
{return or__4238__auto____14903;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__4236__auto____14904 = this$;
if(and__4236__auto____14904)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__4236__auto____14904;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__8178__auto____14905 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14906 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14905)]);
if(or__4238__auto____14906)
{return or__4238__auto____14906;
} else
{var or__4238__auto____14907 = (cljs.core._invoke["_"]);
if(or__4238__auto____14907)
{return or__4238__auto____14907;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__4236__auto____14908 = this$;
if(and__4236__auto____14908)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__4236__auto____14908;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__8178__auto____14909 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14910 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14909)]);
if(or__4238__auto____14910)
{return or__4238__auto____14910;
} else
{var or__4238__auto____14911 = (cljs.core._invoke["_"]);
if(or__4238__auto____14911)
{return or__4238__auto____14911;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__4236__auto____14912 = this$;
if(and__4236__auto____14912)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__4236__auto____14912;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__8178__auto____14913 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14914 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14913)]);
if(or__4238__auto____14914)
{return or__4238__auto____14914;
} else
{var or__4238__auto____14915 = (cljs.core._invoke["_"]);
if(or__4238__auto____14915)
{return or__4238__auto____14915;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__4236__auto____14916 = this$;
if(and__4236__auto____14916)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__4236__auto____14916;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__8178__auto____14917 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14918 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14917)]);
if(or__4238__auto____14918)
{return or__4238__auto____14918;
} else
{var or__4238__auto____14919 = (cljs.core._invoke["_"]);
if(or__4238__auto____14919)
{return or__4238__auto____14919;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__4236__auto____14920 = this$;
if(and__4236__auto____14920)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__4236__auto____14920;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__8178__auto____14921 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14922 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14921)]);
if(or__4238__auto____14922)
{return or__4238__auto____14922;
} else
{var or__4238__auto____14923 = (cljs.core._invoke["_"]);
if(or__4238__auto____14923)
{return or__4238__auto____14923;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__4236__auto____14924 = this$;
if(and__4236__auto____14924)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__4236__auto____14924;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__8178__auto____14925 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14926 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14925)]);
if(or__4238__auto____14926)
{return or__4238__auto____14926;
} else
{var or__4238__auto____14927 = (cljs.core._invoke["_"]);
if(or__4238__auto____14927)
{return or__4238__auto____14927;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__4236__auto____14928 = this$;
if(and__4236__auto____14928)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__4236__auto____14928;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__8178__auto____14929 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14930 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14929)]);
if(or__4238__auto____14930)
{return or__4238__auto____14930;
} else
{var or__4238__auto____14931 = (cljs.core._invoke["_"]);
if(or__4238__auto____14931)
{return or__4238__auto____14931;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__4236__auto____14932 = this$;
if(and__4236__auto____14932)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__4236__auto____14932;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__8178__auto____14933 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____14934 = (cljs.core._invoke[goog.typeOf(x__8178__auto____14933)]);
if(or__4238__auto____14934)
{return or__4238__auto____14934;
} else
{var or__4238__auto____14935 = (cljs.core._invoke["_"]);
if(or__4238__auto____14935)
{return or__4238__auto____14935;
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
if((function (){var and__4236__auto____14940 = coll;
if(and__4236__auto____14940)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__4236__auto____14940;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__8178__auto____14941 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14942 = (cljs.core._count[goog.typeOf(x__8178__auto____14941)]);
if(or__4238__auto____14942)
{return or__4238__auto____14942;
} else
{var or__4238__auto____14943 = (cljs.core._count["_"]);
if(or__4238__auto____14943)
{return or__4238__auto____14943;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__4236__auto____14948 = coll;
if(and__4236__auto____14948)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__4236__auto____14948;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__8178__auto____14949 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14950 = (cljs.core._empty[goog.typeOf(x__8178__auto____14949)]);
if(or__4238__auto____14950)
{return or__4238__auto____14950;
} else
{var or__4238__auto____14951 = (cljs.core._empty["_"]);
if(or__4238__auto____14951)
{return or__4238__auto____14951;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__4236__auto____14956 = coll;
if(and__4236__auto____14956)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__4236__auto____14956;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__8178__auto____14957 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14958 = (cljs.core._conj[goog.typeOf(x__8178__auto____14957)]);
if(or__4238__auto____14958)
{return or__4238__auto____14958;
} else
{var or__4238__auto____14959 = (cljs.core._conj["_"]);
if(or__4238__auto____14959)
{return or__4238__auto____14959;
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
if((function (){var and__4236__auto____14968 = coll;
if(and__4236__auto____14968)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__4236__auto____14968;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__8178__auto____14969 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14970 = (cljs.core._nth[goog.typeOf(x__8178__auto____14969)]);
if(or__4238__auto____14970)
{return or__4238__auto____14970;
} else
{var or__4238__auto____14971 = (cljs.core._nth["_"]);
if(or__4238__auto____14971)
{return or__4238__auto____14971;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__4236__auto____14972 = coll;
if(and__4236__auto____14972)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__4236__auto____14972;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__8178__auto____14973 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14974 = (cljs.core._nth[goog.typeOf(x__8178__auto____14973)]);
if(or__4238__auto____14974)
{return or__4238__auto____14974;
} else
{var or__4238__auto____14975 = (cljs.core._nth["_"]);
if(or__4238__auto____14975)
{return or__4238__auto____14975;
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
if((function (){var and__4236__auto____14980 = coll;
if(and__4236__auto____14980)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__4236__auto____14980;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__8178__auto____14981 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14982 = (cljs.core._first[goog.typeOf(x__8178__auto____14981)]);
if(or__4238__auto____14982)
{return or__4238__auto____14982;
} else
{var or__4238__auto____14983 = (cljs.core._first["_"]);
if(or__4238__auto____14983)
{return or__4238__auto____14983;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__4236__auto____14988 = coll;
if(and__4236__auto____14988)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__4236__auto____14988;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__8178__auto____14989 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14990 = (cljs.core._rest[goog.typeOf(x__8178__auto____14989)]);
if(or__4238__auto____14990)
{return or__4238__auto____14990;
} else
{var or__4238__auto____14991 = (cljs.core._rest["_"]);
if(or__4238__auto____14991)
{return or__4238__auto____14991;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__4236__auto____14996 = coll;
if(and__4236__auto____14996)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__4236__auto____14996;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__8178__auto____14997 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____14998 = (cljs.core._next[goog.typeOf(x__8178__auto____14997)]);
if(or__4238__auto____14998)
{return or__4238__auto____14998;
} else
{var or__4238__auto____14999 = (cljs.core._next["_"]);
if(or__4238__auto____14999)
{return or__4238__auto____14999;
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
if((function (){var and__4236__auto____15008 = o;
if(and__4236__auto____15008)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__4236__auto____15008;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__8178__auto____15009 = (((o == null))?null:o);
return (function (){var or__4238__auto____15010 = (cljs.core._lookup[goog.typeOf(x__8178__auto____15009)]);
if(or__4238__auto____15010)
{return or__4238__auto____15010;
} else
{var or__4238__auto____15011 = (cljs.core._lookup["_"]);
if(or__4238__auto____15011)
{return or__4238__auto____15011;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__4236__auto____15012 = o;
if(and__4236__auto____15012)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__4236__auto____15012;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__8178__auto____15013 = (((o == null))?null:o);
return (function (){var or__4238__auto____15014 = (cljs.core._lookup[goog.typeOf(x__8178__auto____15013)]);
if(or__4238__auto____15014)
{return or__4238__auto____15014;
} else
{var or__4238__auto____15015 = (cljs.core._lookup["_"]);
if(or__4238__auto____15015)
{return or__4238__auto____15015;
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
if((function (){var and__4236__auto____15020 = coll;
if(and__4236__auto____15020)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__4236__auto____15020;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__8178__auto____15021 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15022 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__8178__auto____15021)]);
if(or__4238__auto____15022)
{return or__4238__auto____15022;
} else
{var or__4238__auto____15023 = (cljs.core._contains_key_QMARK_["_"]);
if(or__4238__auto____15023)
{return or__4238__auto____15023;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__4236__auto____15028 = coll;
if(and__4236__auto____15028)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__4236__auto____15028;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__8178__auto____15029 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15030 = (cljs.core._assoc[goog.typeOf(x__8178__auto____15029)]);
if(or__4238__auto____15030)
{return or__4238__auto____15030;
} else
{var or__4238__auto____15031 = (cljs.core._assoc["_"]);
if(or__4238__auto____15031)
{return or__4238__auto____15031;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__4236__auto____15036 = coll;
if(and__4236__auto____15036)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__4236__auto____15036;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__8178__auto____15037 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15038 = (cljs.core._dissoc[goog.typeOf(x__8178__auto____15037)]);
if(or__4238__auto____15038)
{return or__4238__auto____15038;
} else
{var or__4238__auto____15039 = (cljs.core._dissoc["_"]);
if(or__4238__auto____15039)
{return or__4238__auto____15039;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__4236__auto____15044 = coll;
if(and__4236__auto____15044)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__4236__auto____15044;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__8178__auto____15045 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15046 = (cljs.core._key[goog.typeOf(x__8178__auto____15045)]);
if(or__4238__auto____15046)
{return or__4238__auto____15046;
} else
{var or__4238__auto____15047 = (cljs.core._key["_"]);
if(or__4238__auto____15047)
{return or__4238__auto____15047;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__4236__auto____15052 = coll;
if(and__4236__auto____15052)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__4236__auto____15052;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__8178__auto____15053 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15054 = (cljs.core._val[goog.typeOf(x__8178__auto____15053)]);
if(or__4238__auto____15054)
{return or__4238__auto____15054;
} else
{var or__4238__auto____15055 = (cljs.core._val["_"]);
if(or__4238__auto____15055)
{return or__4238__auto____15055;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__4236__auto____15060 = coll;
if(and__4236__auto____15060)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__4236__auto____15060;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__8178__auto____15061 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15062 = (cljs.core._disjoin[goog.typeOf(x__8178__auto____15061)]);
if(or__4238__auto____15062)
{return or__4238__auto____15062;
} else
{var or__4238__auto____15063 = (cljs.core._disjoin["_"]);
if(or__4238__auto____15063)
{return or__4238__auto____15063;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__4236__auto____15068 = coll;
if(and__4236__auto____15068)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__4236__auto____15068;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__8178__auto____15069 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15070 = (cljs.core._peek[goog.typeOf(x__8178__auto____15069)]);
if(or__4238__auto____15070)
{return or__4238__auto____15070;
} else
{var or__4238__auto____15071 = (cljs.core._peek["_"]);
if(or__4238__auto____15071)
{return or__4238__auto____15071;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__4236__auto____15076 = coll;
if(and__4236__auto____15076)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__4236__auto____15076;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__8178__auto____15077 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15078 = (cljs.core._pop[goog.typeOf(x__8178__auto____15077)]);
if(or__4238__auto____15078)
{return or__4238__auto____15078;
} else
{var or__4238__auto____15079 = (cljs.core._pop["_"]);
if(or__4238__auto____15079)
{return or__4238__auto____15079;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__4236__auto____15084 = coll;
if(and__4236__auto____15084)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__4236__auto____15084;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__8178__auto____15085 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15086 = (cljs.core._assoc_n[goog.typeOf(x__8178__auto____15085)]);
if(or__4238__auto____15086)
{return or__4238__auto____15086;
} else
{var or__4238__auto____15087 = (cljs.core._assoc_n["_"]);
if(or__4238__auto____15087)
{return or__4238__auto____15087;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__4236__auto____15092 = o;
if(and__4236__auto____15092)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__4236__auto____15092;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__8178__auto____15093 = (((o == null))?null:o);
return (function (){var or__4238__auto____15094 = (cljs.core._deref[goog.typeOf(x__8178__auto____15093)]);
if(or__4238__auto____15094)
{return or__4238__auto____15094;
} else
{var or__4238__auto____15095 = (cljs.core._deref["_"]);
if(or__4238__auto____15095)
{return or__4238__auto____15095;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__4236__auto____15100 = o;
if(and__4236__auto____15100)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__4236__auto____15100;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__8178__auto____15101 = (((o == null))?null:o);
return (function (){var or__4238__auto____15102 = (cljs.core._deref_with_timeout[goog.typeOf(x__8178__auto____15101)]);
if(or__4238__auto____15102)
{return or__4238__auto____15102;
} else
{var or__4238__auto____15103 = (cljs.core._deref_with_timeout["_"]);
if(or__4238__auto____15103)
{return or__4238__auto____15103;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__4236__auto____15108 = o;
if(and__4236__auto____15108)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__4236__auto____15108;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__8178__auto____15109 = (((o == null))?null:o);
return (function (){var or__4238__auto____15110 = (cljs.core._meta[goog.typeOf(x__8178__auto____15109)]);
if(or__4238__auto____15110)
{return or__4238__auto____15110;
} else
{var or__4238__auto____15111 = (cljs.core._meta["_"]);
if(or__4238__auto____15111)
{return or__4238__auto____15111;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__4236__auto____15116 = o;
if(and__4236__auto____15116)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__4236__auto____15116;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__8178__auto____15117 = (((o == null))?null:o);
return (function (){var or__4238__auto____15118 = (cljs.core._with_meta[goog.typeOf(x__8178__auto____15117)]);
if(or__4238__auto____15118)
{return or__4238__auto____15118;
} else
{var or__4238__auto____15119 = (cljs.core._with_meta["_"]);
if(or__4238__auto____15119)
{return or__4238__auto____15119;
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
if((function (){var and__4236__auto____15128 = coll;
if(and__4236__auto____15128)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__4236__auto____15128;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__8178__auto____15129 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15130 = (cljs.core._reduce[goog.typeOf(x__8178__auto____15129)]);
if(or__4238__auto____15130)
{return or__4238__auto____15130;
} else
{var or__4238__auto____15131 = (cljs.core._reduce["_"]);
if(or__4238__auto____15131)
{return or__4238__auto____15131;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__4236__auto____15132 = coll;
if(and__4236__auto____15132)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__4236__auto____15132;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__8178__auto____15133 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15134 = (cljs.core._reduce[goog.typeOf(x__8178__auto____15133)]);
if(or__4238__auto____15134)
{return or__4238__auto____15134;
} else
{var or__4238__auto____15135 = (cljs.core._reduce["_"]);
if(or__4238__auto____15135)
{return or__4238__auto____15135;
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
if((function (){var and__4236__auto____15140 = coll;
if(and__4236__auto____15140)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__4236__auto____15140;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__8178__auto____15141 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15142 = (cljs.core._kv_reduce[goog.typeOf(x__8178__auto____15141)]);
if(or__4238__auto____15142)
{return or__4238__auto____15142;
} else
{var or__4238__auto____15143 = (cljs.core._kv_reduce["_"]);
if(or__4238__auto____15143)
{return or__4238__auto____15143;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__4236__auto____15148 = o;
if(and__4236__auto____15148)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__4236__auto____15148;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__8178__auto____15149 = (((o == null))?null:o);
return (function (){var or__4238__auto____15150 = (cljs.core._equiv[goog.typeOf(x__8178__auto____15149)]);
if(or__4238__auto____15150)
{return or__4238__auto____15150;
} else
{var or__4238__auto____15151 = (cljs.core._equiv["_"]);
if(or__4238__auto____15151)
{return or__4238__auto____15151;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__4236__auto____15156 = o;
if(and__4236__auto____15156)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__4236__auto____15156;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__8178__auto____15157 = (((o == null))?null:o);
return (function (){var or__4238__auto____15158 = (cljs.core._hash[goog.typeOf(x__8178__auto____15157)]);
if(or__4238__auto____15158)
{return or__4238__auto____15158;
} else
{var or__4238__auto____15159 = (cljs.core._hash["_"]);
if(or__4238__auto____15159)
{return or__4238__auto____15159;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__4236__auto____15164 = o;
if(and__4236__auto____15164)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__4236__auto____15164;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__8178__auto____15165 = (((o == null))?null:o);
return (function (){var or__4238__auto____15166 = (cljs.core._seq[goog.typeOf(x__8178__auto____15165)]);
if(or__4238__auto____15166)
{return or__4238__auto____15166;
} else
{var or__4238__auto____15167 = (cljs.core._seq["_"]);
if(or__4238__auto____15167)
{return or__4238__auto____15167;
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
if((function (){var and__4236__auto____15172 = coll;
if(and__4236__auto____15172)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__4236__auto____15172;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__8178__auto____15173 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15174 = (cljs.core._rseq[goog.typeOf(x__8178__auto____15173)]);
if(or__4238__auto____15174)
{return or__4238__auto____15174;
} else
{var or__4238__auto____15175 = (cljs.core._rseq["_"]);
if(or__4238__auto____15175)
{return or__4238__auto____15175;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__4236__auto____15180 = coll;
if(and__4236__auto____15180)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__4236__auto____15180;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__8178__auto____15181 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15182 = (cljs.core._sorted_seq[goog.typeOf(x__8178__auto____15181)]);
if(or__4238__auto____15182)
{return or__4238__auto____15182;
} else
{var or__4238__auto____15183 = (cljs.core._sorted_seq["_"]);
if(or__4238__auto____15183)
{return or__4238__auto____15183;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__4236__auto____15188 = coll;
if(and__4236__auto____15188)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__4236__auto____15188;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__8178__auto____15189 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15190 = (cljs.core._sorted_seq_from[goog.typeOf(x__8178__auto____15189)]);
if(or__4238__auto____15190)
{return or__4238__auto____15190;
} else
{var or__4238__auto____15191 = (cljs.core._sorted_seq_from["_"]);
if(or__4238__auto____15191)
{return or__4238__auto____15191;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__4236__auto____15196 = coll;
if(and__4236__auto____15196)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__4236__auto____15196;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__8178__auto____15197 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15198 = (cljs.core._entry_key[goog.typeOf(x__8178__auto____15197)]);
if(or__4238__auto____15198)
{return or__4238__auto____15198;
} else
{var or__4238__auto____15199 = (cljs.core._entry_key["_"]);
if(or__4238__auto____15199)
{return or__4238__auto____15199;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__4236__auto____15204 = coll;
if(and__4236__auto____15204)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__4236__auto____15204;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__8178__auto____15205 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15206 = (cljs.core._comparator[goog.typeOf(x__8178__auto____15205)]);
if(or__4238__auto____15206)
{return or__4238__auto____15206;
} else
{var or__4238__auto____15207 = (cljs.core._comparator["_"]);
if(or__4238__auto____15207)
{return or__4238__auto____15207;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__4236__auto____15212 = o;
if(and__4236__auto____15212)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__4236__auto____15212;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__8178__auto____15213 = (((o == null))?null:o);
return (function (){var or__4238__auto____15214 = (cljs.core._pr_seq[goog.typeOf(x__8178__auto____15213)]);
if(or__4238__auto____15214)
{return or__4238__auto____15214;
} else
{var or__4238__auto____15215 = (cljs.core._pr_seq["_"]);
if(or__4238__auto____15215)
{return or__4238__auto____15215;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__4236__auto____15220 = d;
if(and__4236__auto____15220)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__4236__auto____15220;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__8178__auto____15221 = (((d == null))?null:d);
return (function (){var or__4238__auto____15222 = (cljs.core._realized_QMARK_[goog.typeOf(x__8178__auto____15221)]);
if(or__4238__auto____15222)
{return or__4238__auto____15222;
} else
{var or__4238__auto____15223 = (cljs.core._realized_QMARK_["_"]);
if(or__4238__auto____15223)
{return or__4238__auto____15223;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__4236__auto____15228 = this$;
if(and__4236__auto____15228)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__4236__auto____15228;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__8178__auto____15229 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____15230 = (cljs.core._notify_watches[goog.typeOf(x__8178__auto____15229)]);
if(or__4238__auto____15230)
{return or__4238__auto____15230;
} else
{var or__4238__auto____15231 = (cljs.core._notify_watches["_"]);
if(or__4238__auto____15231)
{return or__4238__auto____15231;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__4236__auto____15236 = this$;
if(and__4236__auto____15236)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__4236__auto____15236;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__8178__auto____15237 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____15238 = (cljs.core._add_watch[goog.typeOf(x__8178__auto____15237)]);
if(or__4238__auto____15238)
{return or__4238__auto____15238;
} else
{var or__4238__auto____15239 = (cljs.core._add_watch["_"]);
if(or__4238__auto____15239)
{return or__4238__auto____15239;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__4236__auto____15244 = this$;
if(and__4236__auto____15244)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__4236__auto____15244;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__8178__auto____15245 = (((this$ == null))?null:this$);
return (function (){var or__4238__auto____15246 = (cljs.core._remove_watch[goog.typeOf(x__8178__auto____15245)]);
if(or__4238__auto____15246)
{return or__4238__auto____15246;
} else
{var or__4238__auto____15247 = (cljs.core._remove_watch["_"]);
if(or__4238__auto____15247)
{return or__4238__auto____15247;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__4236__auto____15252 = coll;
if(and__4236__auto____15252)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__4236__auto____15252;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__8178__auto____15253 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15254 = (cljs.core._as_transient[goog.typeOf(x__8178__auto____15253)]);
if(or__4238__auto____15254)
{return or__4238__auto____15254;
} else
{var or__4238__auto____15255 = (cljs.core._as_transient["_"]);
if(or__4238__auto____15255)
{return or__4238__auto____15255;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__4236__auto____15260 = tcoll;
if(and__4236__auto____15260)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__4236__auto____15260;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__8178__auto____15261 = (((tcoll == null))?null:tcoll);
return (function (){var or__4238__auto____15262 = (cljs.core._conj_BANG_[goog.typeOf(x__8178__auto____15261)]);
if(or__4238__auto____15262)
{return or__4238__auto____15262;
} else
{var or__4238__auto____15263 = (cljs.core._conj_BANG_["_"]);
if(or__4238__auto____15263)
{return or__4238__auto____15263;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__4236__auto____15268 = tcoll;
if(and__4236__auto____15268)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__4236__auto____15268;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__8178__auto____15269 = (((tcoll == null))?null:tcoll);
return (function (){var or__4238__auto____15270 = (cljs.core._persistent_BANG_[goog.typeOf(x__8178__auto____15269)]);
if(or__4238__auto____15270)
{return or__4238__auto____15270;
} else
{var or__4238__auto____15271 = (cljs.core._persistent_BANG_["_"]);
if(or__4238__auto____15271)
{return or__4238__auto____15271;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__4236__auto____15276 = tcoll;
if(and__4236__auto____15276)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__4236__auto____15276;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__8178__auto____15277 = (((tcoll == null))?null:tcoll);
return (function (){var or__4238__auto____15278 = (cljs.core._assoc_BANG_[goog.typeOf(x__8178__auto____15277)]);
if(or__4238__auto____15278)
{return or__4238__auto____15278;
} else
{var or__4238__auto____15279 = (cljs.core._assoc_BANG_["_"]);
if(or__4238__auto____15279)
{return or__4238__auto____15279;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__4236__auto____15284 = tcoll;
if(and__4236__auto____15284)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__4236__auto____15284;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__8178__auto____15285 = (((tcoll == null))?null:tcoll);
return (function (){var or__4238__auto____15286 = (cljs.core._dissoc_BANG_[goog.typeOf(x__8178__auto____15285)]);
if(or__4238__auto____15286)
{return or__4238__auto____15286;
} else
{var or__4238__auto____15287 = (cljs.core._dissoc_BANG_["_"]);
if(or__4238__auto____15287)
{return or__4238__auto____15287;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__4236__auto____15292 = tcoll;
if(and__4236__auto____15292)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__4236__auto____15292;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__8178__auto____15293 = (((tcoll == null))?null:tcoll);
return (function (){var or__4238__auto____15294 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__8178__auto____15293)]);
if(or__4238__auto____15294)
{return or__4238__auto____15294;
} else
{var or__4238__auto____15295 = (cljs.core._assoc_n_BANG_["_"]);
if(or__4238__auto____15295)
{return or__4238__auto____15295;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__4236__auto____15300 = tcoll;
if(and__4236__auto____15300)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__4236__auto____15300;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__8178__auto____15301 = (((tcoll == null))?null:tcoll);
return (function (){var or__4238__auto____15302 = (cljs.core._pop_BANG_[goog.typeOf(x__8178__auto____15301)]);
if(or__4238__auto____15302)
{return or__4238__auto____15302;
} else
{var or__4238__auto____15303 = (cljs.core._pop_BANG_["_"]);
if(or__4238__auto____15303)
{return or__4238__auto____15303;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__4236__auto____15308 = tcoll;
if(and__4236__auto____15308)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__4236__auto____15308;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__8178__auto____15309 = (((tcoll == null))?null:tcoll);
return (function (){var or__4238__auto____15310 = (cljs.core._disjoin_BANG_[goog.typeOf(x__8178__auto____15309)]);
if(or__4238__auto____15310)
{return or__4238__auto____15310;
} else
{var or__4238__auto____15311 = (cljs.core._disjoin_BANG_["_"]);
if(or__4238__auto____15311)
{return or__4238__auto____15311;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__4236__auto____15316 = x;
if(and__4236__auto____15316)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__4236__auto____15316;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__8178__auto____15317 = (((x == null))?null:x);
return (function (){var or__4238__auto____15318 = (cljs.core._compare[goog.typeOf(x__8178__auto____15317)]);
if(or__4238__auto____15318)
{return or__4238__auto____15318;
} else
{var or__4238__auto____15319 = (cljs.core._compare["_"]);
if(or__4238__auto____15319)
{return or__4238__auto____15319;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__4236__auto____15324 = coll;
if(and__4236__auto____15324)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__4236__auto____15324;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__8178__auto____15325 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15326 = (cljs.core._drop_first[goog.typeOf(x__8178__auto____15325)]);
if(or__4238__auto____15326)
{return or__4238__auto____15326;
} else
{var or__4238__auto____15327 = (cljs.core._drop_first["_"]);
if(or__4238__auto____15327)
{return or__4238__auto____15327;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__4236__auto____15332 = coll;
if(and__4236__auto____15332)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__4236__auto____15332;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__8178__auto____15333 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15334 = (cljs.core._chunked_first[goog.typeOf(x__8178__auto____15333)]);
if(or__4238__auto____15334)
{return or__4238__auto____15334;
} else
{var or__4238__auto____15335 = (cljs.core._chunked_first["_"]);
if(or__4238__auto____15335)
{return or__4238__auto____15335;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__4236__auto____15340 = coll;
if(and__4236__auto____15340)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__4236__auto____15340;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__8178__auto____15341 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15342 = (cljs.core._chunked_rest[goog.typeOf(x__8178__auto____15341)]);
if(or__4238__auto____15342)
{return or__4238__auto____15342;
} else
{var or__4238__auto____15343 = (cljs.core._chunked_rest["_"]);
if(or__4238__auto____15343)
{return or__4238__auto____15343;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__4236__auto____15348 = coll;
if(and__4236__auto____15348)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__4236__auto____15348;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__8178__auto____15349 = (((coll == null))?null:coll);
return (function (){var or__4238__auto____15350 = (cljs.core._chunked_next[goog.typeOf(x__8178__auto____15349)]);
if(or__4238__auto____15350)
{return or__4238__auto____15350;
} else
{var or__4238__auto____15351 = (cljs.core._chunked_next["_"]);
if(or__4238__auto____15351)
{return or__4238__auto____15351;
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
var or__4238__auto____15353 = (x === y);
if(or__4238__auto____15353)
{return or__4238__auto____15353;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__15354__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__15355 = y;
var G__15356 = cljs.core.first.call(null,more);
var G__15357 = cljs.core.next.call(null,more);
x = G__15355;
y = G__15356;
more = G__15357;
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
var G__15354 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15354__delegate.call(this, x, y, more);
};
G__15354.cljs$lang$maxFixedArity = 2;
G__15354.cljs$lang$applyTo = (function (arglist__15358){
var x = cljs.core.first(arglist__15358);
var y = cljs.core.first(cljs.core.next(arglist__15358));
var more = cljs.core.rest(cljs.core.next(arglist__15358));
return G__15354__delegate(x, y, more);
});
G__15354.cljs$lang$arity$variadic = G__15354__delegate;
return G__15354;
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
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__15359 = null;
var G__15359__2 = (function (o,k){
return null;
});
var G__15359__3 = (function (o,k,not_found){
return not_found;
});
G__15359 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__15359__2.call(this,o,k);
case 3:
return G__15359__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15359;
})()
);
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__15360 = null;
var G__15360__2 = (function (_,n){
return null;
});
var G__15360__3 = (function (_,n,not_found){
return not_found;
});
G__15360 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__15360__2.call(this,_,n);
case 3:
return G__15360__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15360;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
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
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__15361 = null;
var G__15361__2 = (function (_,f){
return f.call(null);
});
var G__15361__3 = (function (_,f,start){
return start;
});
G__15361 = function(_,f,start){
switch(arguments.length){
case 2:
return G__15361__2.call(this,_,f);
case 3:
return G__15361__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15361;
})()
);
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__4236__auto____15362 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__4236__auto____15362)
{return (o.toString() === other.toString());
} else
{return and__4236__auto____15362;
}
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
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
var cnt__15375 = cljs.core._count.call(null,cicoll);
if((cnt__15375 === 0))
{return f.call(null);
} else
{var val__15376 = cljs.core._nth.call(null,cicoll,0);
var n__15377 = 1;
while(true){
if((n__15377 < cnt__15375))
{var nval__15378 = f.call(null,val__15376,cljs.core._nth.call(null,cicoll,n__15377));
if(cljs.core.reduced_QMARK_.call(null,nval__15378))
{return cljs.core.deref.call(null,nval__15378);
} else
{{
var G__15387 = nval__15378;
var G__15388 = (n__15377 + 1);
val__15376 = G__15387;
n__15377 = G__15388;
continue;
}
}
} else
{return val__15376;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__15379 = cljs.core._count.call(null,cicoll);
var val__15380 = val;
var n__15381 = 0;
while(true){
if((n__15381 < cnt__15379))
{var nval__15382 = f.call(null,val__15380,cljs.core._nth.call(null,cicoll,n__15381));
if(cljs.core.reduced_QMARK_.call(null,nval__15382))
{return cljs.core.deref.call(null,nval__15382);
} else
{{
var G__15389 = nval__15382;
var G__15390 = (n__15381 + 1);
val__15380 = G__15389;
n__15381 = G__15390;
continue;
}
}
} else
{return val__15380;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__15383 = cljs.core._count.call(null,cicoll);
var val__15384 = val;
var n__15385 = idx;
while(true){
if((n__15385 < cnt__15383))
{var nval__15386 = f.call(null,val__15384,cljs.core._nth.call(null,cicoll,n__15385));
if(cljs.core.reduced_QMARK_.call(null,nval__15386))
{return cljs.core.deref.call(null,nval__15386);
} else
{{
var G__15391 = nval__15386;
var G__15392 = (n__15385 + 1);
val__15384 = G__15391;
n__15385 = G__15392;
continue;
}
}
} else
{return val__15384;
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
var cnt__15405 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__15406 = (arr[0]);
var n__15407 = 1;
while(true){
if((n__15407 < cnt__15405))
{var nval__15408 = f.call(null,val__15406,(arr[n__15407]));
if(cljs.core.reduced_QMARK_.call(null,nval__15408))
{return cljs.core.deref.call(null,nval__15408);
} else
{{
var G__15417 = nval__15408;
var G__15418 = (n__15407 + 1);
val__15406 = G__15417;
n__15407 = G__15418;
continue;
}
}
} else
{return val__15406;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__15409 = arr.length;
var val__15410 = val;
var n__15411 = 0;
while(true){
if((n__15411 < cnt__15409))
{var nval__15412 = f.call(null,val__15410,(arr[n__15411]));
if(cljs.core.reduced_QMARK_.call(null,nval__15412))
{return cljs.core.deref.call(null,nval__15412);
} else
{{
var G__15419 = nval__15412;
var G__15420 = (n__15411 + 1);
val__15410 = G__15419;
n__15411 = G__15420;
continue;
}
}
} else
{return val__15410;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__15413 = arr.length;
var val__15414 = val;
var n__15415 = idx;
while(true){
if((n__15415 < cnt__15413))
{var nval__15416 = f.call(null,val__15414,(arr[n__15415]));
if(cljs.core.reduced_QMARK_.call(null,nval__15416))
{return cljs.core.deref.call(null,nval__15416);
} else
{{
var G__15421 = nval__15416;
var G__15422 = (n__15415 + 1);
val__15414 = G__15421;
n__15415 = G__15422;
continue;
}
}
} else
{return val__15414;
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
this.cljs$lang$protocol_mask$partition0$ = 166199546;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__15423 = this;
var this__15424 = this;
return cljs.core.pr_str.call(null,this__15424);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__15425 = this;
var i__15426 = (n + this__15425.i);
if((i__15426 < this__15425.a.length))
{return (this__15425.a[i__15426]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__15427 = this;
var i__15428 = (n + this__15427.i);
if((i__15428 < this__15427.a.length))
{return (this__15427.a[i__15428]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__15429 = this;
if(((this__15429.i + 1) < this__15429.a.length))
{return (new cljs.core.IndexedSeq(this__15429.a,(this__15429.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__15430 = this;
return (this__15430.a.length - this__15430.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__15431 = this;
var c__15432 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__15432 > 0))
{return (new cljs.core.RSeq(coll,(c__15432 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15433 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15434 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__15435 = this;
if(cljs.core.counted_QMARK_.call(null,this__15435.a))
{return cljs.core.ci_reduce.call(null,this__15435.a,f,(this__15435.a[this__15435.i]),(this__15435.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__15435.a[this__15435.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__15436 = this;
if(cljs.core.counted_QMARK_.call(null,this__15436.a))
{return cljs.core.ci_reduce.call(null,this__15436.a,f,start,this__15436.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__15437 = this;
return (this__15437.a[this__15437.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__15438 = this;
if(((this__15438.i + 1) < this__15438.a.length))
{return (new cljs.core.IndexedSeq(this__15438.a,(this__15438.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__15439 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15440 = this;
return cljs.core.cons.call(null,o,coll);
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
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__15441 = null;
var G__15441__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__15441__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__15441 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__15441__2.call(this,array,n);
case 3:
return G__15441__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15441;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__15442 = null;
var G__15442__2 = (function (array,k){
return (array[k]);
});
var G__15442__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__15442 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__15442__2.call(this,array,k);
case 3:
return G__15442__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15442;
})()
);
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__15443 = null;
var G__15443__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__15443__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__15443 = function(array,f,start){
switch(arguments.length){
case 2:
return G__15443__2.call(this,array,f);
case 3:
return G__15443__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15443;
})()
);

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.toString = (function (){
var this__15444 = this;
var this__15445 = this;
return cljs.core.pr_str.call(null,this__15445);
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15446 = this;
return this__15446.meta;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15447 = this;
return (this__15447.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15448 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15449 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15450 = this;
return cljs.core._nth.call(null,this__15450.ci,this__15450.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15451 = this;
if((this__15451.i > 0))
{return (new cljs.core.RSeq(this__15451.ci,(this__15451.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15452 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__15453 = this;
return (new cljs.core.RSeq(this__15453.ci,this__15453.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15454 = this;
return cljs.core.cons.call(null,o,coll);
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
{if((function (){var G__15458__15459 = coll;
if(G__15458__15459)
{if((function (){var or__4238__auto____15460 = (G__15458__15459.cljs$lang$protocol_mask$partition0$ & 32);
if(or__4238__auto____15460)
{return or__4238__auto____15460;
} else
{return G__15458__15459.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__15458__15459.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__15458__15459);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__15458__15459);
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
{if((function (){var G__15465__15466 = coll;
if(G__15465__15466)
{if((function (){var or__4238__auto____15467 = (G__15465__15466.cljs$lang$protocol_mask$partition0$ & 64);
if(or__4238__auto____15467)
{return or__4238__auto____15467;
} else
{return G__15465__15466.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15465__15466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15465__15466);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15465__15466);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__15468 = cljs.core.seq.call(null,coll);
if((s__15468 == null))
{return null;
} else
{return cljs.core._first.call(null,s__15468);
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
{if((function (){var G__15473__15474 = coll;
if(G__15473__15474)
{if((function (){var or__4238__auto____15475 = (G__15473__15474.cljs$lang$protocol_mask$partition0$ & 64);
if(or__4238__auto____15475)
{return or__4238__auto____15475;
} else
{return G__15473__15474.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15473__15474.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15473__15474);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15473__15474);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__15476 = cljs.core.seq.call(null,coll);
if(!((s__15476 == null)))
{return cljs.core._rest.call(null,s__15476);
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
{if((function (){var G__15480__15481 = coll;
if(G__15480__15481)
{if((function (){var or__4238__auto____15482 = (G__15480__15481.cljs$lang$protocol_mask$partition0$ & 128);
if(or__4238__auto____15482)
{return or__4238__auto____15482;
} else
{return G__15480__15481.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__15480__15481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__15480__15481);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__15480__15481);
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
var sn__15484 = cljs.core.next.call(null,s);
if(!((sn__15484 == null)))
{{
var G__15485 = sn__15484;
s = G__15485;
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
var G__15486__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__15487 = conj.call(null,coll,x);
var G__15488 = cljs.core.first.call(null,xs);
var G__15489 = cljs.core.next.call(null,xs);
coll = G__15487;
x = G__15488;
xs = G__15489;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__15486 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15486__delegate.call(this, coll, x, xs);
};
G__15486.cljs$lang$maxFixedArity = 2;
G__15486.cljs$lang$applyTo = (function (arglist__15490){
var coll = cljs.core.first(arglist__15490);
var x = cljs.core.first(cljs.core.next(arglist__15490));
var xs = cljs.core.rest(cljs.core.next(arglist__15490));
return G__15486__delegate(coll, x, xs);
});
G__15486.cljs$lang$arity$variadic = G__15486__delegate;
return G__15486;
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
var s__15493 = cljs.core.seq.call(null,coll);
var acc__15494 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__15493))
{return (acc__15494 + cljs.core._count.call(null,s__15493));
} else
{{
var G__15495 = cljs.core.next.call(null,s__15493);
var G__15496 = (acc__15494 + 1);
s__15493 = G__15495;
acc__15494 = G__15496;
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
{if((function (){var G__15503__15504 = coll;
if(G__15503__15504)
{if((function (){var or__4238__auto____15505 = (G__15503__15504.cljs$lang$protocol_mask$partition0$ & 16);
if(or__4238__auto____15505)
{return or__4238__auto____15505;
} else
{return G__15503__15504.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__15503__15504.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15503__15504);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15503__15504);
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
{if((function (){var G__15506__15507 = coll;
if(G__15506__15507)
{if((function (){var or__4238__auto____15508 = (G__15506__15507.cljs$lang$protocol_mask$partition0$ & 16);
if(or__4238__auto____15508)
{return or__4238__auto____15508;
} else
{return G__15506__15507.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__15506__15507.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15506__15507);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15506__15507);
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
var G__15511__delegate = function (coll,k,v,kvs){
while(true){
var ret__15510 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__15512 = ret__15510;
var G__15513 = cljs.core.first.call(null,kvs);
var G__15514 = cljs.core.second.call(null,kvs);
var G__15515 = cljs.core.nnext.call(null,kvs);
coll = G__15512;
k = G__15513;
v = G__15514;
kvs = G__15515;
continue;
}
} else
{return ret__15510;
}
break;
}
};
var G__15511 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15511__delegate.call(this, coll, k, v, kvs);
};
G__15511.cljs$lang$maxFixedArity = 3;
G__15511.cljs$lang$applyTo = (function (arglist__15516){
var coll = cljs.core.first(arglist__15516);
var k = cljs.core.first(cljs.core.next(arglist__15516));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15516)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15516)));
return G__15511__delegate(coll, k, v, kvs);
});
G__15511.cljs$lang$arity$variadic = G__15511__delegate;
return G__15511;
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
var G__15519__delegate = function (coll,k,ks){
while(true){
var ret__15518 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__15520 = ret__15518;
var G__15521 = cljs.core.first.call(null,ks);
var G__15522 = cljs.core.next.call(null,ks);
coll = G__15520;
k = G__15521;
ks = G__15522;
continue;
}
} else
{return ret__15518;
}
break;
}
};
var G__15519 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15519__delegate.call(this, coll, k, ks);
};
G__15519.cljs$lang$maxFixedArity = 2;
G__15519.cljs$lang$applyTo = (function (arglist__15523){
var coll = cljs.core.first(arglist__15523);
var k = cljs.core.first(cljs.core.next(arglist__15523));
var ks = cljs.core.rest(cljs.core.next(arglist__15523));
return G__15519__delegate(coll, k, ks);
});
G__15519.cljs$lang$arity$variadic = G__15519__delegate;
return G__15519;
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
if((function (){var G__15527__15528 = o;
if(G__15527__15528)
{if((function (){var or__4238__auto____15529 = (G__15527__15528.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__4238__auto____15529)
{return or__4238__auto____15529;
} else
{return G__15527__15528.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__15527__15528.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__15527__15528);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__15527__15528);
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
var G__15532__delegate = function (coll,k,ks){
while(true){
var ret__15531 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__15533 = ret__15531;
var G__15534 = cljs.core.first.call(null,ks);
var G__15535 = cljs.core.next.call(null,ks);
coll = G__15533;
k = G__15534;
ks = G__15535;
continue;
}
} else
{return ret__15531;
}
break;
}
};
var G__15532 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15532__delegate.call(this, coll, k, ks);
};
G__15532.cljs$lang$maxFixedArity = 2;
G__15532.cljs$lang$applyTo = (function (arglist__15536){
var coll = cljs.core.first(arglist__15536);
var k = cljs.core.first(cljs.core.next(arglist__15536));
var ks = cljs.core.rest(cljs.core.next(arglist__15536));
return G__15532__delegate(coll, k, ks);
});
G__15532.cljs$lang$arity$variadic = G__15532__delegate;
return G__15532;
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
var h__15538 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__15538);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__15538;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__15540 = (cljs.core.string_hash_cache[k]);
if(!((h__15540 == null)))
{return h__15540;
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
if((function (){var and__4236__auto____15542 = goog.isString(o);
if(and__4236__auto____15542)
{return check_cache;
} else
{return and__4236__auto____15542;
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
{var G__15546__15547 = x;
if(G__15546__15547)
{if((function (){var or__4238__auto____15548 = (G__15546__15547.cljs$lang$protocol_mask$partition0$ & 8);
if(or__4238__auto____15548)
{return or__4238__auto____15548;
} else
{return G__15546__15547.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__15546__15547.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__15546__15547);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__15546__15547);
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
{var G__15552__15553 = x;
if(G__15552__15553)
{if((function (){var or__4238__auto____15554 = (G__15552__15553.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__4238__auto____15554)
{return or__4238__auto____15554;
} else
{return G__15552__15553.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__15552__15553.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__15552__15553);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__15552__15553);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__15558__15559 = x;
if(G__15558__15559)
{if((function (){var or__4238__auto____15560 = (G__15558__15559.cljs$lang$protocol_mask$partition0$ & 512);
if(or__4238__auto____15560)
{return or__4238__auto____15560;
} else
{return G__15558__15559.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__15558__15559.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__15558__15559);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__15558__15559);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__15564__15565 = x;
if(G__15564__15565)
{if((function (){var or__4238__auto____15566 = (G__15564__15565.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__4238__auto____15566)
{return or__4238__auto____15566;
} else
{return G__15564__15565.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__15564__15565.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__15564__15565);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__15564__15565);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__15570__15571 = x;
if(G__15570__15571)
{if((function (){var or__4238__auto____15572 = (G__15570__15571.cljs$lang$protocol_mask$partition0$ & 2);
if(or__4238__auto____15572)
{return or__4238__auto____15572;
} else
{return G__15570__15571.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__15570__15571.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__15570__15571);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__15570__15571);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__15576__15577 = x;
if(G__15576__15577)
{if((function (){var or__4238__auto____15578 = (G__15576__15577.cljs$lang$protocol_mask$partition0$ & 16);
if(or__4238__auto____15578)
{return or__4238__auto____15578;
} else
{return G__15576__15577.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__15576__15577.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15576__15577);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__15576__15577);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__15582__15583 = x;
if(G__15582__15583)
{if((function (){var or__4238__auto____15584 = (G__15582__15583.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__4238__auto____15584)
{return or__4238__auto____15584;
} else
{return G__15582__15583.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15582__15583.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15582__15583);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15582__15583);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__15588__15589 = x;
if(G__15588__15589)
{if((function (){var or__4238__auto____15590 = (G__15588__15589.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__4238__auto____15590)
{return or__4238__auto____15590;
} else
{return G__15588__15589.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__15588__15589.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__15588__15589);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__15588__15589);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__15594__15595 = x;
if(G__15594__15595)
{if((function (){var or__4238__auto____15596 = (G__15594__15595.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__4238__auto____15596)
{return or__4238__auto____15596;
} else
{return G__15594__15595.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__15594__15595.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__15594__15595);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__15594__15595);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__15600__15601 = x;
if(G__15600__15601)
{if(cljs.core.truth_((function (){var or__4238__auto____15602 = null;
if(cljs.core.truth_(or__4238__auto____15602))
{return or__4238__auto____15602;
} else
{return G__15600__15601.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__15600__15601.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__15600__15601);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__15600__15601);
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
var G__15603__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__15603 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15603__delegate.call(this, keyvals);
};
G__15603.cljs$lang$maxFixedArity = 0;
G__15603.cljs$lang$applyTo = (function (arglist__15604){
var keyvals = cljs.core.seq(arglist__15604);;
return G__15603__delegate(keyvals);
});
G__15603.cljs$lang$arity$variadic = G__15603__delegate;
return G__15603;
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
var keys__15606 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__15606.push(key);
}));
return keys__15606;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__15610 = i;
var j__15611 = j;
var len__15612 = len;
while(true){
if((len__15612 === 0))
{return to;
} else
{(to[j__15611] = (from[i__15610]));
{
var G__15613 = (i__15610 + 1);
var G__15614 = (j__15611 + 1);
var G__15615 = (len__15612 - 1);
i__15610 = G__15613;
j__15611 = G__15614;
len__15612 = G__15615;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__15619 = (i + (len - 1));
var j__15620 = (j + (len - 1));
var len__15621 = len;
while(true){
if((len__15621 === 0))
{return to;
} else
{(to[j__15620] = (from[i__15619]));
{
var G__15622 = (i__15619 - 1);
var G__15623 = (j__15620 - 1);
var G__15624 = (len__15621 - 1);
i__15619 = G__15622;
j__15620 = G__15623;
len__15621 = G__15624;
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
{var G__15628__15629 = s;
if(G__15628__15629)
{if((function (){var or__4238__auto____15630 = (G__15628__15629.cljs$lang$protocol_mask$partition0$ & 64);
if(or__4238__auto____15630)
{return or__4238__auto____15630;
} else
{return G__15628__15629.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15628__15629.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15628__15629);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15628__15629);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__15634__15635 = s;
if(G__15634__15635)
{if((function (){var or__4238__auto____15636 = (G__15634__15635.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__4238__auto____15636)
{return or__4238__auto____15636;
} else
{return G__15634__15635.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__15634__15635.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__15634__15635);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__15634__15635);
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
var and__4236__auto____15639 = goog.isString(x);
if(and__4236__auto____15639)
{return !((function (){var or__4238__auto____15640 = (x.charAt(0) === "\uFDD0");
if(or__4238__auto____15640)
{return or__4238__auto____15640;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__4236__auto____15639;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__4236__auto____15642 = goog.isString(x);
if(and__4236__auto____15642)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__4236__auto____15642;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__4236__auto____15644 = goog.isString(x);
if(and__4236__auto____15644)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__4236__auto____15644;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__4238__auto____15649 = cljs.core.fn_QMARK_.call(null,f);
if(or__4238__auto____15649)
{return or__4238__auto____15649;
} else
{var G__15650__15651 = f;
if(G__15650__15651)
{if((function (){var or__4238__auto____15652 = (G__15650__15651.cljs$lang$protocol_mask$partition0$ & 1);
if(or__4238__auto____15652)
{return or__4238__auto____15652;
} else
{return G__15650__15651.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__15650__15651.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__15650__15651);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__15650__15651);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__4236__auto____15654 = cljs.core.number_QMARK_.call(null,n);
if(and__4236__auto____15654)
{return (n == n.toFixed());
} else
{return and__4236__auto____15654;
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
if(cljs.core.truth_((function (){var and__4236__auto____15657 = coll;
if(cljs.core.truth_(and__4236__auto____15657))
{var and__4236__auto____15658 = cljs.core.associative_QMARK_.call(null,coll);
if(and__4236__auto____15658)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__4236__auto____15658;
}
} else
{return and__4236__auto____15657;
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
var G__15667__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__15663 = cljs.core.PersistentHashSet.fromArray([x,y]);
var xs__15664 = more;
while(true){
var x__15665 = cljs.core.first.call(null,xs__15664);
var etc__15666 = cljs.core.next.call(null,xs__15664);
if(cljs.core.truth_(xs__15664))
{if(cljs.core.contains_QMARK_.call(null,s__15663,x__15665))
{return false;
} else
{{
var G__15668 = cljs.core.conj.call(null,s__15663,x__15665);
var G__15669 = etc__15666;
s__15663 = G__15668;
xs__15664 = G__15669;
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
var G__15667 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15667__delegate.call(this, x, y, more);
};
G__15667.cljs$lang$maxFixedArity = 2;
G__15667.cljs$lang$applyTo = (function (arglist__15670){
var x = cljs.core.first(arglist__15670);
var y = cljs.core.first(cljs.core.next(arglist__15670));
var more = cljs.core.rest(cljs.core.next(arglist__15670));
return G__15667__delegate(x, y, more);
});
G__15667.cljs$lang$arity$variadic = G__15667__delegate;
return G__15667;
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
{if((function (){var G__15674__15675 = x;
if(G__15674__15675)
{if(cljs.core.truth_((function (){var or__4238__auto____15676 = null;
if(cljs.core.truth_(or__4238__auto____15676))
{return or__4238__auto____15676;
} else
{return G__15674__15675.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__15674__15675.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15674__15675);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__15674__15675);
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
var xl__15681 = cljs.core.count.call(null,xs);
var yl__15682 = cljs.core.count.call(null,ys);
if((xl__15681 < yl__15682))
{return -1;
} else
{if((xl__15681 > yl__15682))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__15681,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__15683 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__4236__auto____15684 = (d__15683 === 0);
if(and__4236__auto____15684)
{return ((n + 1) < len);
} else
{return and__4236__auto____15684;
}
})())
{{
var G__15685 = xs;
var G__15686 = ys;
var G__15687 = len;
var G__15688 = (n + 1);
xs = G__15685;
ys = G__15686;
len = G__15687;
n = G__15688;
continue;
}
} else
{return d__15683;
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
var r__15690 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__15690))
{return r__15690;
} else
{if(cljs.core.truth_(r__15690))
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
{var a__15692 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__15692,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__15692);
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
var temp__4423__auto____15698 = cljs.core.seq.call(null,coll);
if(temp__4423__auto____15698)
{var s__15699 = temp__4423__auto____15698;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__15699),cljs.core.next.call(null,s__15699));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__15700 = val;
var coll__15701 = cljs.core.seq.call(null,coll);
while(true){
if(coll__15701)
{var nval__15702 = f.call(null,val__15700,cljs.core.first.call(null,coll__15701));
if(cljs.core.reduced_QMARK_.call(null,nval__15702))
{return cljs.core.deref.call(null,nval__15702);
} else
{{
var G__15703 = nval__15702;
var G__15704 = cljs.core.next.call(null,coll__15701);
val__15700 = G__15703;
coll__15701 = G__15704;
continue;
}
}
} else
{return val__15700;
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
var a__15706 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__15706);
return cljs.core.vec.call(null,a__15706);
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
if((function (){var G__15713__15714 = coll;
if(G__15713__15714)
{if((function (){var or__4238__auto____15715 = (G__15713__15714.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__4238__auto____15715)
{return or__4238__auto____15715;
} else
{return G__15713__15714.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15713__15714.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15713__15714);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15713__15714);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__15716__15717 = coll;
if(G__15716__15717)
{if((function (){var or__4238__auto____15718 = (G__15716__15717.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__4238__auto____15718)
{return or__4238__auto____15718;
} else
{return G__15716__15717.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__15716__15717.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15716__15717);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__15716__15717);
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
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__15719 = this;
return this__15719.val;
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
var G__15720__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__15720 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15720__delegate.call(this, x, y, more);
};
G__15720.cljs$lang$maxFixedArity = 2;
G__15720.cljs$lang$applyTo = (function (arglist__15721){
var x = cljs.core.first(arglist__15721);
var y = cljs.core.first(cljs.core.next(arglist__15721));
var more = cljs.core.rest(cljs.core.next(arglist__15721));
return G__15720__delegate(x, y, more);
});
G__15720.cljs$lang$arity$variadic = G__15720__delegate;
return G__15720;
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
var G__15722__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__15722 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15722__delegate.call(this, x, y, more);
};
G__15722.cljs$lang$maxFixedArity = 2;
G__15722.cljs$lang$applyTo = (function (arglist__15723){
var x = cljs.core.first(arglist__15723);
var y = cljs.core.first(cljs.core.next(arglist__15723));
var more = cljs.core.rest(cljs.core.next(arglist__15723));
return G__15722__delegate(x, y, more);
});
G__15722.cljs$lang$arity$variadic = G__15722__delegate;
return G__15722;
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
var G__15724__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__15724 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15724__delegate.call(this, x, y, more);
};
G__15724.cljs$lang$maxFixedArity = 2;
G__15724.cljs$lang$applyTo = (function (arglist__15725){
var x = cljs.core.first(arglist__15725);
var y = cljs.core.first(cljs.core.next(arglist__15725));
var more = cljs.core.rest(cljs.core.next(arglist__15725));
return G__15724__delegate(x, y, more);
});
G__15724.cljs$lang$arity$variadic = G__15724__delegate;
return G__15724;
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
var G__15726__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__15726 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15726__delegate.call(this, x, y, more);
};
G__15726.cljs$lang$maxFixedArity = 2;
G__15726.cljs$lang$applyTo = (function (arglist__15727){
var x = cljs.core.first(arglist__15727);
var y = cljs.core.first(cljs.core.next(arglist__15727));
var more = cljs.core.rest(cljs.core.next(arglist__15727));
return G__15726__delegate(x, y, more);
});
G__15726.cljs$lang$arity$variadic = G__15726__delegate;
return G__15726;
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
var G__15728__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__15729 = y;
var G__15730 = cljs.core.first.call(null,more);
var G__15731 = cljs.core.next.call(null,more);
x = G__15729;
y = G__15730;
more = G__15731;
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
var G__15728 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15728__delegate.call(this, x, y, more);
};
G__15728.cljs$lang$maxFixedArity = 2;
G__15728.cljs$lang$applyTo = (function (arglist__15732){
var x = cljs.core.first(arglist__15732);
var y = cljs.core.first(cljs.core.next(arglist__15732));
var more = cljs.core.rest(cljs.core.next(arglist__15732));
return G__15728__delegate(x, y, more);
});
G__15728.cljs$lang$arity$variadic = G__15728__delegate;
return G__15728;
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
var G__15733__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__15734 = y;
var G__15735 = cljs.core.first.call(null,more);
var G__15736 = cljs.core.next.call(null,more);
x = G__15734;
y = G__15735;
more = G__15736;
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
var G__15733 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15733__delegate.call(this, x, y, more);
};
G__15733.cljs$lang$maxFixedArity = 2;
G__15733.cljs$lang$applyTo = (function (arglist__15737){
var x = cljs.core.first(arglist__15737);
var y = cljs.core.first(cljs.core.next(arglist__15737));
var more = cljs.core.rest(cljs.core.next(arglist__15737));
return G__15733__delegate(x, y, more);
});
G__15733.cljs$lang$arity$variadic = G__15733__delegate;
return G__15733;
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
var G__15738__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__15739 = y;
var G__15740 = cljs.core.first.call(null,more);
var G__15741 = cljs.core.next.call(null,more);
x = G__15739;
y = G__15740;
more = G__15741;
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
var G__15738 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15738__delegate.call(this, x, y, more);
};
G__15738.cljs$lang$maxFixedArity = 2;
G__15738.cljs$lang$applyTo = (function (arglist__15742){
var x = cljs.core.first(arglist__15742);
var y = cljs.core.first(cljs.core.next(arglist__15742));
var more = cljs.core.rest(cljs.core.next(arglist__15742));
return G__15738__delegate(x, y, more);
});
G__15738.cljs$lang$arity$variadic = G__15738__delegate;
return G__15738;
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
var G__15743__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__15744 = y;
var G__15745 = cljs.core.first.call(null,more);
var G__15746 = cljs.core.next.call(null,more);
x = G__15744;
y = G__15745;
more = G__15746;
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
var G__15743 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15743__delegate.call(this, x, y, more);
};
G__15743.cljs$lang$maxFixedArity = 2;
G__15743.cljs$lang$applyTo = (function (arglist__15747){
var x = cljs.core.first(arglist__15747);
var y = cljs.core.first(cljs.core.next(arglist__15747));
var more = cljs.core.rest(cljs.core.next(arglist__15747));
return G__15743__delegate(x, y, more);
});
G__15743.cljs$lang$arity$variadic = G__15743__delegate;
return G__15743;
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
var G__15748__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__15748 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15748__delegate.call(this, x, y, more);
};
G__15748.cljs$lang$maxFixedArity = 2;
G__15748.cljs$lang$applyTo = (function (arglist__15749){
var x = cljs.core.first(arglist__15749);
var y = cljs.core.first(cljs.core.next(arglist__15749));
var more = cljs.core.rest(cljs.core.next(arglist__15749));
return G__15748__delegate(x, y, more);
});
G__15748.cljs$lang$arity$variadic = G__15748__delegate;
return G__15748;
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
var G__15750__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__15750 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15750__delegate.call(this, x, y, more);
};
G__15750.cljs$lang$maxFixedArity = 2;
G__15750.cljs$lang$applyTo = (function (arglist__15751){
var x = cljs.core.first(arglist__15751);
var y = cljs.core.first(cljs.core.next(arglist__15751));
var more = cljs.core.rest(cljs.core.next(arglist__15751));
return G__15750__delegate(x, y, more);
});
G__15750.cljs$lang$arity$variadic = G__15750__delegate;
return G__15750;
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
var rem__15753 = (n % d);
return cljs.core.fix.call(null,((n - rem__15753) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__15755 = cljs.core.quot.call(null,n,d);
return (n - (d * q__15755));
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
var v__15758 = (v - ((v >> 1) & 1431655765));
var v__15759 = ((v__15758 & 858993459) + ((v__15758 >> 2) & 858993459));
return ((((v__15759 + (v__15759 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__15760__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__15761 = y;
var G__15762 = cljs.core.first.call(null,more);
var G__15763 = cljs.core.next.call(null,more);
x = G__15761;
y = G__15762;
more = G__15763;
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
var G__15760 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15760__delegate.call(this, x, y, more);
};
G__15760.cljs$lang$maxFixedArity = 2;
G__15760.cljs$lang$applyTo = (function (arglist__15764){
var x = cljs.core.first(arglist__15764);
var y = cljs.core.first(cljs.core.next(arglist__15764));
var more = cljs.core.rest(cljs.core.next(arglist__15764));
return G__15760__delegate(x, y, more);
});
G__15760.cljs$lang$arity$variadic = G__15760__delegate;
return G__15760;
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
var n__15768 = n;
var xs__15769 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__4236__auto____15770 = xs__15769;
if(and__4236__auto____15770)
{return (n__15768 > 0);
} else
{return and__4236__auto____15770;
}
})()))
{{
var G__15771 = (n__15768 - 1);
var G__15772 = cljs.core.next.call(null,xs__15769);
n__15768 = G__15771;
xs__15769 = G__15772;
continue;
}
} else
{return xs__15769;
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
var G__15773__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15774 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__15775 = cljs.core.next.call(null,more);
sb = G__15774;
more = G__15775;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__15773 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15773__delegate.call(this, x, ys);
};
G__15773.cljs$lang$maxFixedArity = 1;
G__15773.cljs$lang$applyTo = (function (arglist__15776){
var x = cljs.core.first(arglist__15776);
var ys = cljs.core.rest(arglist__15776);
return G__15773__delegate(x, ys);
});
G__15773.cljs$lang$arity$variadic = G__15773__delegate;
return G__15773;
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
var G__15777__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__15778 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__15779 = cljs.core.next.call(null,more);
sb = G__15778;
more = G__15779;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__15777 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15777__delegate.call(this, x, ys);
};
G__15777.cljs$lang$maxFixedArity = 1;
G__15777.cljs$lang$applyTo = (function (arglist__15780){
var x = cljs.core.first(arglist__15780);
var ys = cljs.core.rest(arglist__15780);
return G__15777__delegate(x, ys);
});
G__15777.cljs$lang$arity$variadic = G__15777__delegate;
return G__15777;
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
format.cljs$lang$applyTo = (function (arglist__15781){
var fmt = cljs.core.first(arglist__15781);
var args = cljs.core.rest(arglist__15781);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__15784 = cljs.core.seq.call(null,x);
var ys__15785 = cljs.core.seq.call(null,y);
while(true){
if((xs__15784 == null))
{return (ys__15785 == null);
} else
{if((ys__15785 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__15784),cljs.core.first.call(null,ys__15785)))
{{
var G__15786 = cljs.core.next.call(null,xs__15784);
var G__15787 = cljs.core.next.call(null,ys__15785);
xs__15784 = G__15786;
ys__15785 = G__15787;
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
return cljs.core.reduce.call(null,(function (p1__15788_SHARP_,p2__15789_SHARP_){
return cljs.core.hash_combine.call(null,p1__15788_SHARP_,cljs.core.hash.call(null,p2__15789_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__15793 = 0;
var s__15794 = cljs.core.seq.call(null,m);
while(true){
if(s__15794)
{var e__15795 = cljs.core.first.call(null,s__15794);
{
var G__15796 = ((h__15793 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__15795)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__15795)))) % 4503599627370496);
var G__15797 = cljs.core.next.call(null,s__15794);
h__15793 = G__15796;
s__15794 = G__15797;
continue;
}
} else
{return h__15793;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__15801 = 0;
var s__15802 = cljs.core.seq.call(null,s);
while(true){
if(s__15802)
{var e__15803 = cljs.core.first.call(null,s__15802);
{
var G__15804 = ((h__15801 + cljs.core.hash.call(null,e__15803)) % 4503599627370496);
var G__15805 = cljs.core.next.call(null,s__15802);
h__15801 = G__15804;
s__15802 = G__15805;
continue;
}
} else
{return h__15801;
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
var G__15826__15827 = cljs.core.seq.call(null,fn_map);
if(G__15826__15827)
{var G__15829__15831 = cljs.core.first.call(null,G__15826__15827);
var vec__15830__15832 = G__15829__15831;
var key_name__15833 = cljs.core.nth.call(null,vec__15830__15832,0,null);
var f__15834 = cljs.core.nth.call(null,vec__15830__15832,1,null);
var G__15826__15835 = G__15826__15827;
var G__15829__15836 = G__15829__15831;
var G__15826__15837 = G__15826__15835;
while(true){
var vec__15838__15839 = G__15829__15836;
var key_name__15840 = cljs.core.nth.call(null,vec__15838__15839,0,null);
var f__15841 = cljs.core.nth.call(null,vec__15838__15839,1,null);
var G__15826__15842 = G__15826__15837;
var str_name__15843 = cljs.core.name.call(null,key_name__15840);
(obj[str_name__15843] = f__15841);
var temp__4425__auto____15844 = cljs.core.next.call(null,G__15826__15842);
if(temp__4425__auto____15844)
{var G__15826__15845 = temp__4425__auto____15844;
{
var G__15846 = cljs.core.first.call(null,G__15826__15845);
var G__15847 = G__15826__15845;
G__15829__15836 = G__15846;
G__15826__15837 = G__15847;
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
this.cljs$lang$protocol_mask$partition0$ = 65413358;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.toString = (function (){
var this__15848 = this;
var this__15849 = this;
return cljs.core.pr_str.call(null,this__15849);
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15850 = this;
return this__15850.meta;
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15851 = this;
if((this__15851.count === 1))
{return null;
} else
{return this__15851.rest;
}
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15852 = this;
return this__15852.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15853 = this;
return this__15853.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15854 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15855 = this;
var h__8007__auto____15856 = this__15855.__hash;
if(!((h__8007__auto____15856 == null)))
{return h__8007__auto____15856;
} else
{var h__8007__auto____15857 = cljs.core.hash_coll.call(null,coll);
this__15855.__hash = h__8007__auto____15857;
return h__8007__auto____15857;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15858 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15859 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15860 = this;
return this__15860.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15861 = this;
if((this__15861.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__15861.rest;
}
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15862 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15863 = this;
return (new cljs.core.List(meta,this__15863.first,this__15863.rest,this__15863.count,this__15863.__hash));
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15864 = this;
return (new cljs.core.List(this__15864.meta,o,coll,(this__15864.count + 1),null));
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__15865 = this;
var this__15866 = this;
return cljs.core.pr_str.call(null,this__15866);
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15867 = this;
return this__15867.meta;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15868 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__15869 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__15870 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__15871 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15872 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15873 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15874 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15875 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15876 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15877 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15878 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15879 = this;
return (new cljs.core.List(this__15879.meta,o,null,1,null));
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__15883__15884 = coll;
if(G__15883__15884)
{if((function (){var or__4238__auto____15885 = (G__15883__15884.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__4238__auto____15885)
{return or__4238__auto____15885;
} else
{return G__15883__15884.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__15883__15884.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15883__15884);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__15883__15884);
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
var G__15886__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__15886 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__15886__delegate.call(this, x, y, z, items);
};
G__15886.cljs$lang$maxFixedArity = 3;
G__15886.cljs$lang$applyTo = (function (arglist__15887){
var x = cljs.core.first(arglist__15887);
var y = cljs.core.first(cljs.core.next(arglist__15887));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15887)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15887)));
return G__15886__delegate(x, y, z, items);
});
G__15886.cljs$lang$arity$variadic = G__15886__delegate;
return G__15886;
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
this.cljs$lang$protocol_mask$partition0$ = 65405164;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.toString = (function (){
var this__15888 = this;
var this__15889 = this;
return cljs.core.pr_str.call(null,this__15889);
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15890 = this;
return this__15890.meta;
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15891 = this;
if((this__15891.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__15891.rest);
}
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15892 = this;
var h__8007__auto____15893 = this__15892.__hash;
if(!((h__8007__auto____15893 == null)))
{return h__8007__auto____15893;
} else
{var h__8007__auto____15894 = cljs.core.hash_coll.call(null,coll);
this__15892.__hash = h__8007__auto____15894;
return h__8007__auto____15894;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15895 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15896 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15896.meta);
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15897 = this;
return this__15897.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15898 = this;
if((this__15898.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__15898.rest;
}
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15899 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15900 = this;
return (new cljs.core.Cons(meta,this__15900.first,this__15900.rest,this__15900.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15901 = this;
return (new cljs.core.Cons(null,o,coll,this__15901.__hash));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__4238__auto____15906 = (coll == null);
if(or__4238__auto____15906)
{return or__4238__auto____15906;
} else
{var G__15907__15908 = coll;
if(G__15907__15908)
{if((function (){var or__4238__auto____15909 = (G__15907__15908.cljs$lang$protocol_mask$partition0$ & 64);
if(or__4238__auto____15909)
{return or__4238__auto____15909;
} else
{return G__15907__15908.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__15907__15908.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15907__15908);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__15907__15908);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__15913__15914 = x;
if(G__15913__15914)
{if((function (){var or__4238__auto____15915 = (G__15913__15914.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__4238__auto____15915)
{return or__4238__auto____15915;
} else
{return G__15913__15914.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__15913__15914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15913__15914);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__15913__15914);
}
});
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__15916 = null;
var G__15916__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__15916__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__15916 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__15916__2.call(this,string,n);
case 3:
return G__15916__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15916;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__15917 = null;
var G__15917__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__15917__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__15917 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__15917__2.call(this,string,k);
case 3:
return G__15917__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15917;
})()
);
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__15918 = null;
var G__15918__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__15918__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__15918 = function(string,f,start){
switch(arguments.length){
case 2:
return G__15918__2.call(this,string,f);
case 3:
return G__15918__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15918;
})()
);

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__15930 = null;
var G__15930__2 = (function (this_sym15921,coll){
var this__15923 = this;
var this_sym15921__15924 = this;
var ___15925 = this_sym15921__15924;
if((coll == null))
{return null;
} else
{var strobj__15926 = coll.strobj;
if((strobj__15926 == null))
{return cljs.core._lookup.call(null,coll,this__15923.k,null);
} else
{return (strobj__15926[this__15923.k]);
}
}
});
var G__15930__3 = (function (this_sym15922,coll,not_found){
var this__15923 = this;
var this_sym15922__15927 = this;
var ___15928 = this_sym15922__15927;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__15923.k,not_found);
}
});
G__15930 = function(this_sym15922,coll,not_found){
switch(arguments.length){
case 2:
return G__15930__2.call(this,this_sym15922,coll);
case 3:
return G__15930__3.call(this,this_sym15922,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15930;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym15919,args15920){
var this__15929 = this;
return this_sym15919.call.apply(this_sym15919,[this_sym15919].concat(args15920.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__15939 = null;
var G__15939__2 = (function (this_sym15933,coll){
var this_sym15933__15935 = this;
var this__15936 = this_sym15933__15935;
return cljs.core._lookup.call(null,coll,this__15936.toString(),null);
});
var G__15939__3 = (function (this_sym15934,coll,not_found){
var this_sym15934__15937 = this;
var this__15938 = this_sym15934__15937;
return cljs.core._lookup.call(null,coll,this__15938.toString(),not_found);
});
G__15939 = function(this_sym15934,coll,not_found){
switch(arguments.length){
case 2:
return G__15939__2.call(this,this_sym15934,coll);
case 3:
return G__15939__3.call(this,this_sym15934,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15939;
})()
;
String.prototype.apply = (function (this_sym15931,args15932){
return this_sym15931.call.apply(this_sym15931,[this_sym15931].concat(args15932.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__15941 = lazy_seq.x;
if(lazy_seq.realized)
{return x__15941;
} else
{lazy_seq.x = x__15941.call(null);
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
this.cljs$lang$protocol_mask$partition0$ = 31850700;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__15942 = this;
var this__15943 = this;
return cljs.core.pr_str.call(null,this__15943);
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15944 = this;
return this__15944.meta;
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__15945 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__15946 = this;
var h__8007__auto____15947 = this__15946.__hash;
if(!((h__8007__auto____15947 == null)))
{return h__8007__auto____15947;
} else
{var h__8007__auto____15948 = cljs.core.hash_coll.call(null,coll);
this__15946.__hash = h__8007__auto____15948;
return h__8007__auto____15948;
}
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15949 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__15950 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__15950.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15951 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15952 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15953 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__15954 = this;
return (new cljs.core.LazySeq(meta,this__15954.realized,this__15954.x,this__15954.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__15955 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__15956 = this;
var ___15957 = this;
(this__15956.buf[this__15956.end] = o);
return this__15956.end = (this__15956.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__15958 = this;
var ___15959 = this;
var ret__15960 = (new cljs.core.ArrayChunk(this__15958.buf,0,this__15958.end));
this__15958.buf = null;
return ret__15960;
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__15961 = this;
return this__15961.end;
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
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__15962 = this;
return (this__15962.end - this__15962.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__15963 = this;
return (this__15963.arr[(this__15963.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__15964 = this;
if((function (){var and__4236__auto____15965 = (i >= 0);
if(and__4236__auto____15965)
{return (i < (this__15964.end - this__15964.off));
} else
{return and__4236__auto____15965;
}
})())
{return (this__15964.arr[(this__15964.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__15966 = this;
if((this__15966.off === this__15966.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__15966.arr,(this__15966.off + 1),this__15966.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__15967 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__15967.arr[this__15967.off]),(this__15967.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__15968 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__15968.off);
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
this.cljs$lang$protocol_mask$partition0$ = 27656296;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__15969 = this;
return this__15969.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__15970 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__15971 = this;
return cljs.core._nth.call(null,this__15971.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__15972 = this;
if((cljs.core._count.call(null,this__15972.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__15972.chunk),this__15972.more,this__15972.meta));
} else
{if((this__15972.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15972.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__15973 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__15974 = this;
return this__15974.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__15975 = this;
if((this__15975.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__15975.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__15976 = this;
return (new cljs.core.ChunkedCons(this__15976.chunk,this__15976.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__15977 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__15978 = this;
if((this__15978.more == null))
{return null;
} else
{return this__15978.more;
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
if((function (){var G__15982__15983 = s;
if(G__15982__15983)
{if(cljs.core.truth_((function (){var or__4238__auto____15984 = null;
if(cljs.core.truth_(or__4238__auto____15984))
{return or__4238__auto____15984;
} else
{return G__15982__15983.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__15982__15983.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15982__15983);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__15982__15983);
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
var ary__15987 = [];
var s__15988 = s;
while(true){
if(cljs.core.seq.call(null,s__15988))
{ary__15987.push(cljs.core.first.call(null,s__15988));
{
var G__15989 = cljs.core.next.call(null,s__15988);
s__15988 = G__15989;
continue;
}
} else
{return ary__15987;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__15993 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__15994 = 0;
var xs__15995 = cljs.core.seq.call(null,coll);
while(true){
if(xs__15995)
{(ret__15993[i__15994] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__15995)));
{
var G__15996 = (i__15994 + 1);
var G__15997 = cljs.core.next.call(null,xs__15995);
i__15994 = G__15996;
xs__15995 = G__15997;
continue;
}
} else
{}
break;
}
return ret__15993;
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
var a__16005 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__16006 = cljs.core.seq.call(null,init_val_or_seq);
var i__16007 = 0;
var s__16008 = s__16006;
while(true){
if(cljs.core.truth_((function (){var and__4236__auto____16009 = s__16008;
if(and__4236__auto____16009)
{return (i__16007 < size);
} else
{return and__4236__auto____16009;
}
})()))
{(a__16005[i__16007] = cljs.core.first.call(null,s__16008));
{
var G__16012 = (i__16007 + 1);
var G__16013 = cljs.core.next.call(null,s__16008);
i__16007 = G__16012;
s__16008 = G__16013;
continue;
}
} else
{return a__16005;
}
break;
}
} else
{var n__8342__auto____16010 = size;
var i__16011 = 0;
while(true){
if((i__16011 < n__8342__auto____16010))
{(a__16005[i__16011] = init_val_or_seq);
{
var G__16014 = (i__16011 + 1);
i__16011 = G__16014;
continue;
}
} else
{}
break;
}
return a__16005;
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
var a__16022 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__16023 = cljs.core.seq.call(null,init_val_or_seq);
var i__16024 = 0;
var s__16025 = s__16023;
while(true){
if(cljs.core.truth_((function (){var and__4236__auto____16026 = s__16025;
if(and__4236__auto____16026)
{return (i__16024 < size);
} else
{return and__4236__auto____16026;
}
})()))
{(a__16022[i__16024] = cljs.core.first.call(null,s__16025));
{
var G__16029 = (i__16024 + 1);
var G__16030 = cljs.core.next.call(null,s__16025);
i__16024 = G__16029;
s__16025 = G__16030;
continue;
}
} else
{return a__16022;
}
break;
}
} else
{var n__8342__auto____16027 = size;
var i__16028 = 0;
while(true){
if((i__16028 < n__8342__auto____16027))
{(a__16022[i__16028] = init_val_or_seq);
{
var G__16031 = (i__16028 + 1);
i__16028 = G__16031;
continue;
}
} else
{}
break;
}
return a__16022;
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
var a__16039 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__16040 = cljs.core.seq.call(null,init_val_or_seq);
var i__16041 = 0;
var s__16042 = s__16040;
while(true){
if(cljs.core.truth_((function (){var and__4236__auto____16043 = s__16042;
if(and__4236__auto____16043)
{return (i__16041 < size);
} else
{return and__4236__auto____16043;
}
})()))
{(a__16039[i__16041] = cljs.core.first.call(null,s__16042));
{
var G__16046 = (i__16041 + 1);
var G__16047 = cljs.core.next.call(null,s__16042);
i__16041 = G__16046;
s__16042 = G__16047;
continue;
}
} else
{return a__16039;
}
break;
}
} else
{var n__8342__auto____16044 = size;
var i__16045 = 0;
while(true){
if((i__16045 < n__8342__auto____16044))
{(a__16039[i__16045] = init_val_or_seq);
{
var G__16048 = (i__16045 + 1);
i__16045 = G__16048;
continue;
}
} else
{}
break;
}
return a__16039;
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
{var s__16053 = s;
var i__16054 = n;
var sum__16055 = 0;
while(true){
if(cljs.core.truth_((function (){var and__4236__auto____16056 = (i__16054 > 0);
if(and__4236__auto____16056)
{return cljs.core.seq.call(null,s__16053);
} else
{return and__4236__auto____16056;
}
})()))
{{
var G__16057 = cljs.core.next.call(null,s__16053);
var G__16058 = (i__16054 - 1);
var G__16059 = (sum__16055 + 1);
s__16053 = G__16057;
i__16054 = G__16058;
sum__16055 = G__16059;
continue;
}
} else
{return sum__16055;
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
var s__16064 = cljs.core.seq.call(null,x);
if(s__16064)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__16064))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__16064),concat.call(null,cljs.core.chunk_rest.call(null,s__16064),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__16064),concat.call(null,cljs.core.rest.call(null,s__16064),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__16068__delegate = function (x,y,zs){
var cat__16067 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__16066 = cljs.core.seq.call(null,xys);
if(xys__16066)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__16066))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__16066),cat.call(null,cljs.core.chunk_rest.call(null,xys__16066),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__16066),cat.call(null,cljs.core.rest.call(null,xys__16066),zs));
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
return cat__16067.call(null,concat.call(null,x,y),zs);
};
var G__16068 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16068__delegate.call(this, x, y, zs);
};
G__16068.cljs$lang$maxFixedArity = 2;
G__16068.cljs$lang$applyTo = (function (arglist__16069){
var x = cljs.core.first(arglist__16069);
var y = cljs.core.first(cljs.core.next(arglist__16069));
var zs = cljs.core.rest(cljs.core.next(arglist__16069));
return G__16068__delegate(x, y, zs);
});
G__16068.cljs$lang$arity$variadic = G__16068__delegate;
return G__16068;
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
var G__16070__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__16070 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16070__delegate.call(this, a, b, c, d, more);
};
G__16070.cljs$lang$maxFixedArity = 4;
G__16070.cljs$lang$applyTo = (function (arglist__16071){
var a = cljs.core.first(arglist__16071);
var b = cljs.core.first(cljs.core.next(arglist__16071));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16071)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16071))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16071))));
return G__16070__delegate(a, b, c, d, more);
});
G__16070.cljs$lang$arity$variadic = G__16070__delegate;
return G__16070;
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
var args__16113 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__16114 = cljs.core._first.call(null,args__16113);
var args__16115 = cljs.core._rest.call(null,args__16113);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__16114);
} else
{return f.call(null,a__16114);
}
} else
{var b__16116 = cljs.core._first.call(null,args__16115);
var args__16117 = cljs.core._rest.call(null,args__16115);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__16114,b__16116);
} else
{return f.call(null,a__16114,b__16116);
}
} else
{var c__16118 = cljs.core._first.call(null,args__16117);
var args__16119 = cljs.core._rest.call(null,args__16117);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__16114,b__16116,c__16118);
} else
{return f.call(null,a__16114,b__16116,c__16118);
}
} else
{var d__16120 = cljs.core._first.call(null,args__16119);
var args__16121 = cljs.core._rest.call(null,args__16119);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__16114,b__16116,c__16118,d__16120);
} else
{return f.call(null,a__16114,b__16116,c__16118,d__16120);
}
} else
{var e__16122 = cljs.core._first.call(null,args__16121);
var args__16123 = cljs.core._rest.call(null,args__16121);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__16114,b__16116,c__16118,d__16120,e__16122);
} else
{return f.call(null,a__16114,b__16116,c__16118,d__16120,e__16122);
}
} else
{var f__16124 = cljs.core._first.call(null,args__16123);
var args__16125 = cljs.core._rest.call(null,args__16123);
if((argc === 6))
{if(f__16124.cljs$lang$arity$6)
{return f__16124.cljs$lang$arity$6(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124);
}
} else
{var g__16126 = cljs.core._first.call(null,args__16125);
var args__16127 = cljs.core._rest.call(null,args__16125);
if((argc === 7))
{if(f__16124.cljs$lang$arity$7)
{return f__16124.cljs$lang$arity$7(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126);
}
} else
{var h__16128 = cljs.core._first.call(null,args__16127);
var args__16129 = cljs.core._rest.call(null,args__16127);
if((argc === 8))
{if(f__16124.cljs$lang$arity$8)
{return f__16124.cljs$lang$arity$8(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128);
}
} else
{var i__16130 = cljs.core._first.call(null,args__16129);
var args__16131 = cljs.core._rest.call(null,args__16129);
if((argc === 9))
{if(f__16124.cljs$lang$arity$9)
{return f__16124.cljs$lang$arity$9(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130);
}
} else
{var j__16132 = cljs.core._first.call(null,args__16131);
var args__16133 = cljs.core._rest.call(null,args__16131);
if((argc === 10))
{if(f__16124.cljs$lang$arity$10)
{return f__16124.cljs$lang$arity$10(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132);
}
} else
{var k__16134 = cljs.core._first.call(null,args__16133);
var args__16135 = cljs.core._rest.call(null,args__16133);
if((argc === 11))
{if(f__16124.cljs$lang$arity$11)
{return f__16124.cljs$lang$arity$11(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134);
}
} else
{var l__16136 = cljs.core._first.call(null,args__16135);
var args__16137 = cljs.core._rest.call(null,args__16135);
if((argc === 12))
{if(f__16124.cljs$lang$arity$12)
{return f__16124.cljs$lang$arity$12(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136);
}
} else
{var m__16138 = cljs.core._first.call(null,args__16137);
var args__16139 = cljs.core._rest.call(null,args__16137);
if((argc === 13))
{if(f__16124.cljs$lang$arity$13)
{return f__16124.cljs$lang$arity$13(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138);
}
} else
{var n__16140 = cljs.core._first.call(null,args__16139);
var args__16141 = cljs.core._rest.call(null,args__16139);
if((argc === 14))
{if(f__16124.cljs$lang$arity$14)
{return f__16124.cljs$lang$arity$14(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140);
}
} else
{var o__16142 = cljs.core._first.call(null,args__16141);
var args__16143 = cljs.core._rest.call(null,args__16141);
if((argc === 15))
{if(f__16124.cljs$lang$arity$15)
{return f__16124.cljs$lang$arity$15(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142);
}
} else
{var p__16144 = cljs.core._first.call(null,args__16143);
var args__16145 = cljs.core._rest.call(null,args__16143);
if((argc === 16))
{if(f__16124.cljs$lang$arity$16)
{return f__16124.cljs$lang$arity$16(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144);
}
} else
{var q__16146 = cljs.core._first.call(null,args__16145);
var args__16147 = cljs.core._rest.call(null,args__16145);
if((argc === 17))
{if(f__16124.cljs$lang$arity$17)
{return f__16124.cljs$lang$arity$17(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146);
}
} else
{var r__16148 = cljs.core._first.call(null,args__16147);
var args__16149 = cljs.core._rest.call(null,args__16147);
if((argc === 18))
{if(f__16124.cljs$lang$arity$18)
{return f__16124.cljs$lang$arity$18(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146,r__16148);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146,r__16148);
}
} else
{var s__16150 = cljs.core._first.call(null,args__16149);
var args__16151 = cljs.core._rest.call(null,args__16149);
if((argc === 19))
{if(f__16124.cljs$lang$arity$19)
{return f__16124.cljs$lang$arity$19(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146,r__16148,s__16150);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146,r__16148,s__16150);
}
} else
{var t__16152 = cljs.core._first.call(null,args__16151);
var args__16153 = cljs.core._rest.call(null,args__16151);
if((argc === 20))
{if(f__16124.cljs$lang$arity$20)
{return f__16124.cljs$lang$arity$20(a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146,r__16148,s__16150,t__16152);
} else
{return f__16124.call(null,a__16114,b__16116,c__16118,d__16120,e__16122,f__16124,g__16126,h__16128,i__16130,j__16132,k__16134,l__16136,m__16138,n__16140,o__16142,p__16144,q__16146,r__16148,s__16150,t__16152);
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
var fixed_arity__16168 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__16169 = cljs.core.bounded_count.call(null,args,(fixed_arity__16168 + 1));
if((bc__16169 <= fixed_arity__16168))
{return cljs.core.apply_to.call(null,f,bc__16169,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__16170 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__16171 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__16172 = cljs.core.bounded_count.call(null,arglist__16170,(fixed_arity__16171 + 1));
if((bc__16172 <= fixed_arity__16171))
{return cljs.core.apply_to.call(null,f,bc__16172,arglist__16170);
} else
{return f.cljs$lang$applyTo(arglist__16170);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__16170));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__16173 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__16174 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__16175 = cljs.core.bounded_count.call(null,arglist__16173,(fixed_arity__16174 + 1));
if((bc__16175 <= fixed_arity__16174))
{return cljs.core.apply_to.call(null,f,bc__16175,arglist__16173);
} else
{return f.cljs$lang$applyTo(arglist__16173);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__16173));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__16176 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__16177 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__16178 = cljs.core.bounded_count.call(null,arglist__16176,(fixed_arity__16177 + 1));
if((bc__16178 <= fixed_arity__16177))
{return cljs.core.apply_to.call(null,f,bc__16178,arglist__16176);
} else
{return f.cljs$lang$applyTo(arglist__16176);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__16176));
}
});
var apply__6 = (function() { 
var G__16182__delegate = function (f,a,b,c,d,args){
var arglist__16179 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__16180 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__16181 = cljs.core.bounded_count.call(null,arglist__16179,(fixed_arity__16180 + 1));
if((bc__16181 <= fixed_arity__16180))
{return cljs.core.apply_to.call(null,f,bc__16181,arglist__16179);
} else
{return f.cljs$lang$applyTo(arglist__16179);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__16179));
}
};
var G__16182 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__16182__delegate.call(this, f, a, b, c, d, args);
};
G__16182.cljs$lang$maxFixedArity = 5;
G__16182.cljs$lang$applyTo = (function (arglist__16183){
var f = cljs.core.first(arglist__16183);
var a = cljs.core.first(cljs.core.next(arglist__16183));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16183)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16183))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16183)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16183)))));
return G__16182__delegate(f, a, b, c, d, args);
});
G__16182.cljs$lang$arity$variadic = G__16182__delegate;
return G__16182;
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
vary_meta.cljs$lang$applyTo = (function (arglist__16184){
var obj = cljs.core.first(arglist__16184);
var f = cljs.core.first(cljs.core.next(arglist__16184));
var args = cljs.core.rest(cljs.core.next(arglist__16184));
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
var G__16185__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__16185 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16185__delegate.call(this, x, y, more);
};
G__16185.cljs$lang$maxFixedArity = 2;
G__16185.cljs$lang$applyTo = (function (arglist__16186){
var x = cljs.core.first(arglist__16186);
var y = cljs.core.first(cljs.core.next(arglist__16186));
var more = cljs.core.rest(cljs.core.next(arglist__16186));
return G__16185__delegate(x, y, more);
});
G__16185.cljs$lang$arity$variadic = G__16185__delegate;
return G__16185;
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
var G__16187 = pred;
var G__16188 = cljs.core.next.call(null,coll);
pred = G__16187;
coll = G__16188;
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
{var or__4238__auto____16190 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__4238__auto____16190))
{return or__4238__auto____16190;
} else
{{
var G__16191 = pred;
var G__16192 = cljs.core.next.call(null,coll);
pred = G__16191;
coll = G__16192;
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
var G__16193 = null;
var G__16193__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__16193__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__16193__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__16193__3 = (function() { 
var G__16194__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__16194 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16194__delegate.call(this, x, y, zs);
};
G__16194.cljs$lang$maxFixedArity = 2;
G__16194.cljs$lang$applyTo = (function (arglist__16195){
var x = cljs.core.first(arglist__16195);
var y = cljs.core.first(cljs.core.next(arglist__16195));
var zs = cljs.core.rest(cljs.core.next(arglist__16195));
return G__16194__delegate(x, y, zs);
});
G__16194.cljs$lang$arity$variadic = G__16194__delegate;
return G__16194;
})()
;
G__16193 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__16193__0.call(this);
case 1:
return G__16193__1.call(this,x);
case 2:
return G__16193__2.call(this,x,y);
default:
return G__16193__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__16193.cljs$lang$maxFixedArity = 2;
G__16193.cljs$lang$applyTo = G__16193__3.cljs$lang$applyTo;
return G__16193;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__16196__delegate = function (args){
return x;
};
var G__16196 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16196__delegate.call(this, args);
};
G__16196.cljs$lang$maxFixedArity = 0;
G__16196.cljs$lang$applyTo = (function (arglist__16197){
var args = cljs.core.seq(arglist__16197);;
return G__16196__delegate(args);
});
G__16196.cljs$lang$arity$variadic = G__16196__delegate;
return G__16196;
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
var G__16204 = null;
var G__16204__0 = (function (){
return f.call(null,g.call(null));
});
var G__16204__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__16204__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__16204__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__16204__4 = (function() { 
var G__16205__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__16205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16205__delegate.call(this, x, y, z, args);
};
G__16205.cljs$lang$maxFixedArity = 3;
G__16205.cljs$lang$applyTo = (function (arglist__16206){
var x = cljs.core.first(arglist__16206);
var y = cljs.core.first(cljs.core.next(arglist__16206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16206)));
return G__16205__delegate(x, y, z, args);
});
G__16205.cljs$lang$arity$variadic = G__16205__delegate;
return G__16205;
})()
;
G__16204 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__16204__0.call(this);
case 1:
return G__16204__1.call(this,x);
case 2:
return G__16204__2.call(this,x,y);
case 3:
return G__16204__3.call(this,x,y,z);
default:
return G__16204__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__16204.cljs$lang$maxFixedArity = 3;
G__16204.cljs$lang$applyTo = G__16204__4.cljs$lang$applyTo;
return G__16204;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__16207 = null;
var G__16207__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__16207__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__16207__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__16207__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__16207__4 = (function() { 
var G__16208__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__16208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16208__delegate.call(this, x, y, z, args);
};
G__16208.cljs$lang$maxFixedArity = 3;
G__16208.cljs$lang$applyTo = (function (arglist__16209){
var x = cljs.core.first(arglist__16209);
var y = cljs.core.first(cljs.core.next(arglist__16209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16209)));
return G__16208__delegate(x, y, z, args);
});
G__16208.cljs$lang$arity$variadic = G__16208__delegate;
return G__16208;
})()
;
G__16207 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__16207__0.call(this);
case 1:
return G__16207__1.call(this,x);
case 2:
return G__16207__2.call(this,x,y);
case 3:
return G__16207__3.call(this,x,y,z);
default:
return G__16207__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__16207.cljs$lang$maxFixedArity = 3;
G__16207.cljs$lang$applyTo = G__16207__4.cljs$lang$applyTo;
return G__16207;
})()
});
var comp__4 = (function() { 
var G__16210__delegate = function (f1,f2,f3,fs){
var fs__16201 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__16211__delegate = function (args){
var ret__16202 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__16201),args);
var fs__16203 = cljs.core.next.call(null,fs__16201);
while(true){
if(fs__16203)
{{
var G__16212 = cljs.core.first.call(null,fs__16203).call(null,ret__16202);
var G__16213 = cljs.core.next.call(null,fs__16203);
ret__16202 = G__16212;
fs__16203 = G__16213;
continue;
}
} else
{return ret__16202;
}
break;
}
};
var G__16211 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16211__delegate.call(this, args);
};
G__16211.cljs$lang$maxFixedArity = 0;
G__16211.cljs$lang$applyTo = (function (arglist__16214){
var args = cljs.core.seq(arglist__16214);;
return G__16211__delegate(args);
});
G__16211.cljs$lang$arity$variadic = G__16211__delegate;
return G__16211;
})()
;
};
var G__16210 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16210__delegate.call(this, f1, f2, f3, fs);
};
G__16210.cljs$lang$maxFixedArity = 3;
G__16210.cljs$lang$applyTo = (function (arglist__16215){
var f1 = cljs.core.first(arglist__16215);
var f2 = cljs.core.first(cljs.core.next(arglist__16215));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16215)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16215)));
return G__16210__delegate(f1, f2, f3, fs);
});
G__16210.cljs$lang$arity$variadic = G__16210__delegate;
return G__16210;
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
var G__16216__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__16216 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16216__delegate.call(this, args);
};
G__16216.cljs$lang$maxFixedArity = 0;
G__16216.cljs$lang$applyTo = (function (arglist__16217){
var args = cljs.core.seq(arglist__16217);;
return G__16216__delegate(args);
});
G__16216.cljs$lang$arity$variadic = G__16216__delegate;
return G__16216;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__16218__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__16218 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16218__delegate.call(this, args);
};
G__16218.cljs$lang$maxFixedArity = 0;
G__16218.cljs$lang$applyTo = (function (arglist__16219){
var args = cljs.core.seq(arglist__16219);;
return G__16218__delegate(args);
});
G__16218.cljs$lang$arity$variadic = G__16218__delegate;
return G__16218;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__16220__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__16220 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16220__delegate.call(this, args);
};
G__16220.cljs$lang$maxFixedArity = 0;
G__16220.cljs$lang$applyTo = (function (arglist__16221){
var args = cljs.core.seq(arglist__16221);;
return G__16220__delegate(args);
});
G__16220.cljs$lang$arity$variadic = G__16220__delegate;
return G__16220;
})()
;
});
var partial__5 = (function() { 
var G__16222__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__16223__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__16223 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__16223__delegate.call(this, args);
};
G__16223.cljs$lang$maxFixedArity = 0;
G__16223.cljs$lang$applyTo = (function (arglist__16224){
var args = cljs.core.seq(arglist__16224);;
return G__16223__delegate(args);
});
G__16223.cljs$lang$arity$variadic = G__16223__delegate;
return G__16223;
})()
;
};
var G__16222 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16222__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__16222.cljs$lang$maxFixedArity = 4;
G__16222.cljs$lang$applyTo = (function (arglist__16225){
var f = cljs.core.first(arglist__16225);
var arg1 = cljs.core.first(cljs.core.next(arglist__16225));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16225)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16225))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16225))));
return G__16222__delegate(f, arg1, arg2, arg3, more);
});
G__16222.cljs$lang$arity$variadic = G__16222__delegate;
return G__16222;
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
var G__16226 = null;
var G__16226__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__16226__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__16226__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__16226__4 = (function() { 
var G__16227__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__16227 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16227__delegate.call(this, a, b, c, ds);
};
G__16227.cljs$lang$maxFixedArity = 3;
G__16227.cljs$lang$applyTo = (function (arglist__16228){
var a = cljs.core.first(arglist__16228);
var b = cljs.core.first(cljs.core.next(arglist__16228));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16228)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16228)));
return G__16227__delegate(a, b, c, ds);
});
G__16227.cljs$lang$arity$variadic = G__16227__delegate;
return G__16227;
})()
;
G__16226 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__16226__1.call(this,a);
case 2:
return G__16226__2.call(this,a,b);
case 3:
return G__16226__3.call(this,a,b,c);
default:
return G__16226__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__16226.cljs$lang$maxFixedArity = 3;
G__16226.cljs$lang$applyTo = G__16226__4.cljs$lang$applyTo;
return G__16226;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__16229 = null;
var G__16229__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__16229__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__16229__4 = (function() { 
var G__16230__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__16230 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16230__delegate.call(this, a, b, c, ds);
};
G__16230.cljs$lang$maxFixedArity = 3;
G__16230.cljs$lang$applyTo = (function (arglist__16231){
var a = cljs.core.first(arglist__16231);
var b = cljs.core.first(cljs.core.next(arglist__16231));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16231)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16231)));
return G__16230__delegate(a, b, c, ds);
});
G__16230.cljs$lang$arity$variadic = G__16230__delegate;
return G__16230;
})()
;
G__16229 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__16229__2.call(this,a,b);
case 3:
return G__16229__3.call(this,a,b,c);
default:
return G__16229__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__16229.cljs$lang$maxFixedArity = 3;
G__16229.cljs$lang$applyTo = G__16229__4.cljs$lang$applyTo;
return G__16229;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__16232 = null;
var G__16232__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__16232__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__16232__4 = (function() { 
var G__16233__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__16233 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16233__delegate.call(this, a, b, c, ds);
};
G__16233.cljs$lang$maxFixedArity = 3;
G__16233.cljs$lang$applyTo = (function (arglist__16234){
var a = cljs.core.first(arglist__16234);
var b = cljs.core.first(cljs.core.next(arglist__16234));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16234)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16234)));
return G__16233__delegate(a, b, c, ds);
});
G__16233.cljs$lang$arity$variadic = G__16233__delegate;
return G__16233;
})()
;
G__16232 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__16232__2.call(this,a,b);
case 3:
return G__16232__3.call(this,a,b,c);
default:
return G__16232__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__16232.cljs$lang$maxFixedArity = 3;
G__16232.cljs$lang$applyTo = G__16232__4.cljs$lang$applyTo;
return G__16232;
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
var mapi__16250 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4425__auto____16258 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16258)
{var s__16259 = temp__4425__auto____16258;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16259))
{var c__16260 = cljs.core.chunk_first.call(null,s__16259);
var size__16261 = cljs.core.count.call(null,c__16260);
var b__16262 = cljs.core.chunk_buffer.call(null,size__16261);
var n__8342__auto____16263 = size__16261;
var i__16264 = 0;
while(true){
if((i__16264 < n__8342__auto____16263))
{cljs.core.chunk_append.call(null,b__16262,f.call(null,(idx + i__16264),cljs.core._nth.call(null,c__16260,i__16264)));
{
var G__16265 = (i__16264 + 1);
i__16264 = G__16265;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16262),mapi.call(null,(idx + size__16261),cljs.core.chunk_rest.call(null,s__16259)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__16259)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__16259)));
}
} else
{return null;
}
}),null));
});
return mapi__16250.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4425__auto____16275 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16275)
{var s__16276 = temp__4425__auto____16275;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16276))
{var c__16277 = cljs.core.chunk_first.call(null,s__16276);
var size__16278 = cljs.core.count.call(null,c__16277);
var b__16279 = cljs.core.chunk_buffer.call(null,size__16278);
var n__8342__auto____16280 = size__16278;
var i__16281 = 0;
while(true){
if((i__16281 < n__8342__auto____16280))
{var x__16282 = f.call(null,cljs.core._nth.call(null,c__16277,i__16281));
if((x__16282 == null))
{} else
{cljs.core.chunk_append.call(null,b__16279,x__16282);
}
{
var G__16284 = (i__16281 + 1);
i__16281 = G__16284;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16279),keep.call(null,f,cljs.core.chunk_rest.call(null,s__16276)));
} else
{var x__16283 = f.call(null,cljs.core.first.call(null,s__16276));
if((x__16283 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__16276));
} else
{return cljs.core.cons.call(null,x__16283,keep.call(null,f,cljs.core.rest.call(null,s__16276)));
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
var keepi__16310 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4425__auto____16320 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16320)
{var s__16321 = temp__4425__auto____16320;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16321))
{var c__16322 = cljs.core.chunk_first.call(null,s__16321);
var size__16323 = cljs.core.count.call(null,c__16322);
var b__16324 = cljs.core.chunk_buffer.call(null,size__16323);
var n__8342__auto____16325 = size__16323;
var i__16326 = 0;
while(true){
if((i__16326 < n__8342__auto____16325))
{var x__16327 = f.call(null,(idx + i__16326),cljs.core._nth.call(null,c__16322,i__16326));
if((x__16327 == null))
{} else
{cljs.core.chunk_append.call(null,b__16324,x__16327);
}
{
var G__16329 = (i__16326 + 1);
i__16326 = G__16329;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16324),keepi.call(null,(idx + size__16323),cljs.core.chunk_rest.call(null,s__16321)));
} else
{var x__16328 = f.call(null,idx,cljs.core.first.call(null,s__16321));
if((x__16328 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__16321));
} else
{return cljs.core.cons.call(null,x__16328,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__16321)));
}
}
} else
{return null;
}
}),null));
});
return keepi__16310.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16415 = p.call(null,x);
if(cljs.core.truth_(and__4236__auto____16415))
{return p.call(null,y);
} else
{return and__4236__auto____16415;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16416 = p.call(null,x);
if(cljs.core.truth_(and__4236__auto____16416))
{var and__4236__auto____16417 = p.call(null,y);
if(cljs.core.truth_(and__4236__auto____16417))
{return p.call(null,z);
} else
{return and__4236__auto____16417;
}
} else
{return and__4236__auto____16416;
}
})());
});
var ep1__4 = (function() { 
var G__16486__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16418 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__4236__auto____16418))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__4236__auto____16418;
}
})());
};
var G__16486 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16486__delegate.call(this, x, y, z, args);
};
G__16486.cljs$lang$maxFixedArity = 3;
G__16486.cljs$lang$applyTo = (function (arglist__16487){
var x = cljs.core.first(arglist__16487);
var y = cljs.core.first(cljs.core.next(arglist__16487));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16487)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16487)));
return G__16486__delegate(x, y, z, args);
});
G__16486.cljs$lang$arity$variadic = G__16486__delegate;
return G__16486;
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
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16430 = p1.call(null,x);
if(cljs.core.truth_(and__4236__auto____16430))
{return p2.call(null,x);
} else
{return and__4236__auto____16430;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16431 = p1.call(null,x);
if(cljs.core.truth_(and__4236__auto____16431))
{var and__4236__auto____16432 = p1.call(null,y);
if(cljs.core.truth_(and__4236__auto____16432))
{var and__4236__auto____16433 = p2.call(null,x);
if(cljs.core.truth_(and__4236__auto____16433))
{return p2.call(null,y);
} else
{return and__4236__auto____16433;
}
} else
{return and__4236__auto____16432;
}
} else
{return and__4236__auto____16431;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16434 = p1.call(null,x);
if(cljs.core.truth_(and__4236__auto____16434))
{var and__4236__auto____16435 = p1.call(null,y);
if(cljs.core.truth_(and__4236__auto____16435))
{var and__4236__auto____16436 = p1.call(null,z);
if(cljs.core.truth_(and__4236__auto____16436))
{var and__4236__auto____16437 = p2.call(null,x);
if(cljs.core.truth_(and__4236__auto____16437))
{var and__4236__auto____16438 = p2.call(null,y);
if(cljs.core.truth_(and__4236__auto____16438))
{return p2.call(null,z);
} else
{return and__4236__auto____16438;
}
} else
{return and__4236__auto____16437;
}
} else
{return and__4236__auto____16436;
}
} else
{return and__4236__auto____16435;
}
} else
{return and__4236__auto____16434;
}
})());
});
var ep2__4 = (function() { 
var G__16488__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16439 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__4236__auto____16439))
{return cljs.core.every_QMARK_.call(null,(function (p1__16285_SHARP_){
var and__4236__auto____16440 = p1.call(null,p1__16285_SHARP_);
if(cljs.core.truth_(and__4236__auto____16440))
{return p2.call(null,p1__16285_SHARP_);
} else
{return and__4236__auto____16440;
}
}),args);
} else
{return and__4236__auto____16439;
}
})());
};
var G__16488 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16488__delegate.call(this, x, y, z, args);
};
G__16488.cljs$lang$maxFixedArity = 3;
G__16488.cljs$lang$applyTo = (function (arglist__16489){
var x = cljs.core.first(arglist__16489);
var y = cljs.core.first(cljs.core.next(arglist__16489));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16489)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16489)));
return G__16488__delegate(x, y, z, args);
});
G__16488.cljs$lang$arity$variadic = G__16488__delegate;
return G__16488;
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
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16459 = p1.call(null,x);
if(cljs.core.truth_(and__4236__auto____16459))
{var and__4236__auto____16460 = p2.call(null,x);
if(cljs.core.truth_(and__4236__auto____16460))
{return p3.call(null,x);
} else
{return and__4236__auto____16460;
}
} else
{return and__4236__auto____16459;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16461 = p1.call(null,x);
if(cljs.core.truth_(and__4236__auto____16461))
{var and__4236__auto____16462 = p2.call(null,x);
if(cljs.core.truth_(and__4236__auto____16462))
{var and__4236__auto____16463 = p3.call(null,x);
if(cljs.core.truth_(and__4236__auto____16463))
{var and__4236__auto____16464 = p1.call(null,y);
if(cljs.core.truth_(and__4236__auto____16464))
{var and__4236__auto____16465 = p2.call(null,y);
if(cljs.core.truth_(and__4236__auto____16465))
{return p3.call(null,y);
} else
{return and__4236__auto____16465;
}
} else
{return and__4236__auto____16464;
}
} else
{return and__4236__auto____16463;
}
} else
{return and__4236__auto____16462;
}
} else
{return and__4236__auto____16461;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16466 = p1.call(null,x);
if(cljs.core.truth_(and__4236__auto____16466))
{var and__4236__auto____16467 = p2.call(null,x);
if(cljs.core.truth_(and__4236__auto____16467))
{var and__4236__auto____16468 = p3.call(null,x);
if(cljs.core.truth_(and__4236__auto____16468))
{var and__4236__auto____16469 = p1.call(null,y);
if(cljs.core.truth_(and__4236__auto____16469))
{var and__4236__auto____16470 = p2.call(null,y);
if(cljs.core.truth_(and__4236__auto____16470))
{var and__4236__auto____16471 = p3.call(null,y);
if(cljs.core.truth_(and__4236__auto____16471))
{var and__4236__auto____16472 = p1.call(null,z);
if(cljs.core.truth_(and__4236__auto____16472))
{var and__4236__auto____16473 = p2.call(null,z);
if(cljs.core.truth_(and__4236__auto____16473))
{return p3.call(null,z);
} else
{return and__4236__auto____16473;
}
} else
{return and__4236__auto____16472;
}
} else
{return and__4236__auto____16471;
}
} else
{return and__4236__auto____16470;
}
} else
{return and__4236__auto____16469;
}
} else
{return and__4236__auto____16468;
}
} else
{return and__4236__auto____16467;
}
} else
{return and__4236__auto____16466;
}
})());
});
var ep3__4 = (function() { 
var G__16490__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16474 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__4236__auto____16474))
{return cljs.core.every_QMARK_.call(null,(function (p1__16286_SHARP_){
var and__4236__auto____16475 = p1.call(null,p1__16286_SHARP_);
if(cljs.core.truth_(and__4236__auto____16475))
{var and__4236__auto____16476 = p2.call(null,p1__16286_SHARP_);
if(cljs.core.truth_(and__4236__auto____16476))
{return p3.call(null,p1__16286_SHARP_);
} else
{return and__4236__auto____16476;
}
} else
{return and__4236__auto____16475;
}
}),args);
} else
{return and__4236__auto____16474;
}
})());
};
var G__16490 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16490__delegate.call(this, x, y, z, args);
};
G__16490.cljs$lang$maxFixedArity = 3;
G__16490.cljs$lang$applyTo = (function (arglist__16491){
var x = cljs.core.first(arglist__16491);
var y = cljs.core.first(cljs.core.next(arglist__16491));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16491)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16491)));
return G__16490__delegate(x, y, z, args);
});
G__16490.cljs$lang$arity$variadic = G__16490__delegate;
return G__16490;
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
var G__16492__delegate = function (p1,p2,p3,ps){
var ps__16477 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__16287_SHARP_){
return p1__16287_SHARP_.call(null,x);
}),ps__16477);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__16288_SHARP_){
var and__4236__auto____16482 = p1__16288_SHARP_.call(null,x);
if(cljs.core.truth_(and__4236__auto____16482))
{return p1__16288_SHARP_.call(null,y);
} else
{return and__4236__auto____16482;
}
}),ps__16477);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__16289_SHARP_){
var and__4236__auto____16483 = p1__16289_SHARP_.call(null,x);
if(cljs.core.truth_(and__4236__auto____16483))
{var and__4236__auto____16484 = p1__16289_SHARP_.call(null,y);
if(cljs.core.truth_(and__4236__auto____16484))
{return p1__16289_SHARP_.call(null,z);
} else
{return and__4236__auto____16484;
}
} else
{return and__4236__auto____16483;
}
}),ps__16477);
});
var epn__4 = (function() { 
var G__16493__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__4236__auto____16485 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__4236__auto____16485))
{return cljs.core.every_QMARK_.call(null,(function (p1__16290_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__16290_SHARP_,args);
}),ps__16477);
} else
{return and__4236__auto____16485;
}
})());
};
var G__16493 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16493__delegate.call(this, x, y, z, args);
};
G__16493.cljs$lang$maxFixedArity = 3;
G__16493.cljs$lang$applyTo = (function (arglist__16494){
var x = cljs.core.first(arglist__16494);
var y = cljs.core.first(cljs.core.next(arglist__16494));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16494)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16494)));
return G__16493__delegate(x, y, z, args);
});
G__16493.cljs$lang$arity$variadic = G__16493__delegate;
return G__16493;
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
var G__16492 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16492__delegate.call(this, p1, p2, p3, ps);
};
G__16492.cljs$lang$maxFixedArity = 3;
G__16492.cljs$lang$applyTo = (function (arglist__16495){
var p1 = cljs.core.first(arglist__16495);
var p2 = cljs.core.first(cljs.core.next(arglist__16495));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16495)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16495)));
return G__16492__delegate(p1, p2, p3, ps);
});
G__16492.cljs$lang$arity$variadic = G__16492__delegate;
return G__16492;
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
var or__4238__auto____16576 = p.call(null,x);
if(cljs.core.truth_(or__4238__auto____16576))
{return or__4238__auto____16576;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__4238__auto____16577 = p.call(null,x);
if(cljs.core.truth_(or__4238__auto____16577))
{return or__4238__auto____16577;
} else
{var or__4238__auto____16578 = p.call(null,y);
if(cljs.core.truth_(or__4238__auto____16578))
{return or__4238__auto____16578;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__16647__delegate = function (x,y,z,args){
var or__4238__auto____16579 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__4238__auto____16579))
{return or__4238__auto____16579;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__16647 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16647__delegate.call(this, x, y, z, args);
};
G__16647.cljs$lang$maxFixedArity = 3;
G__16647.cljs$lang$applyTo = (function (arglist__16648){
var x = cljs.core.first(arglist__16648);
var y = cljs.core.first(cljs.core.next(arglist__16648));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16648)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16648)));
return G__16647__delegate(x, y, z, args);
});
G__16647.cljs$lang$arity$variadic = G__16647__delegate;
return G__16647;
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
var or__4238__auto____16591 = p1.call(null,x);
if(cljs.core.truth_(or__4238__auto____16591))
{return or__4238__auto____16591;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__4238__auto____16592 = p1.call(null,x);
if(cljs.core.truth_(or__4238__auto____16592))
{return or__4238__auto____16592;
} else
{var or__4238__auto____16593 = p1.call(null,y);
if(cljs.core.truth_(or__4238__auto____16593))
{return or__4238__auto____16593;
} else
{var or__4238__auto____16594 = p2.call(null,x);
if(cljs.core.truth_(or__4238__auto____16594))
{return or__4238__auto____16594;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__4238__auto____16595 = p1.call(null,x);
if(cljs.core.truth_(or__4238__auto____16595))
{return or__4238__auto____16595;
} else
{var or__4238__auto____16596 = p1.call(null,y);
if(cljs.core.truth_(or__4238__auto____16596))
{return or__4238__auto____16596;
} else
{var or__4238__auto____16597 = p1.call(null,z);
if(cljs.core.truth_(or__4238__auto____16597))
{return or__4238__auto____16597;
} else
{var or__4238__auto____16598 = p2.call(null,x);
if(cljs.core.truth_(or__4238__auto____16598))
{return or__4238__auto____16598;
} else
{var or__4238__auto____16599 = p2.call(null,y);
if(cljs.core.truth_(or__4238__auto____16599))
{return or__4238__auto____16599;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__16649__delegate = function (x,y,z,args){
var or__4238__auto____16600 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__4238__auto____16600))
{return or__4238__auto____16600;
} else
{return cljs.core.some.call(null,(function (p1__16330_SHARP_){
var or__4238__auto____16601 = p1.call(null,p1__16330_SHARP_);
if(cljs.core.truth_(or__4238__auto____16601))
{return or__4238__auto____16601;
} else
{return p2.call(null,p1__16330_SHARP_);
}
}),args);
}
};
var G__16649 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16649__delegate.call(this, x, y, z, args);
};
G__16649.cljs$lang$maxFixedArity = 3;
G__16649.cljs$lang$applyTo = (function (arglist__16650){
var x = cljs.core.first(arglist__16650);
var y = cljs.core.first(cljs.core.next(arglist__16650));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16650)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16650)));
return G__16649__delegate(x, y, z, args);
});
G__16649.cljs$lang$arity$variadic = G__16649__delegate;
return G__16649;
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
var or__4238__auto____16620 = p1.call(null,x);
if(cljs.core.truth_(or__4238__auto____16620))
{return or__4238__auto____16620;
} else
{var or__4238__auto____16621 = p2.call(null,x);
if(cljs.core.truth_(or__4238__auto____16621))
{return or__4238__auto____16621;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__4238__auto____16622 = p1.call(null,x);
if(cljs.core.truth_(or__4238__auto____16622))
{return or__4238__auto____16622;
} else
{var or__4238__auto____16623 = p2.call(null,x);
if(cljs.core.truth_(or__4238__auto____16623))
{return or__4238__auto____16623;
} else
{var or__4238__auto____16624 = p3.call(null,x);
if(cljs.core.truth_(or__4238__auto____16624))
{return or__4238__auto____16624;
} else
{var or__4238__auto____16625 = p1.call(null,y);
if(cljs.core.truth_(or__4238__auto____16625))
{return or__4238__auto____16625;
} else
{var or__4238__auto____16626 = p2.call(null,y);
if(cljs.core.truth_(or__4238__auto____16626))
{return or__4238__auto____16626;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__4238__auto____16627 = p1.call(null,x);
if(cljs.core.truth_(or__4238__auto____16627))
{return or__4238__auto____16627;
} else
{var or__4238__auto____16628 = p2.call(null,x);
if(cljs.core.truth_(or__4238__auto____16628))
{return or__4238__auto____16628;
} else
{var or__4238__auto____16629 = p3.call(null,x);
if(cljs.core.truth_(or__4238__auto____16629))
{return or__4238__auto____16629;
} else
{var or__4238__auto____16630 = p1.call(null,y);
if(cljs.core.truth_(or__4238__auto____16630))
{return or__4238__auto____16630;
} else
{var or__4238__auto____16631 = p2.call(null,y);
if(cljs.core.truth_(or__4238__auto____16631))
{return or__4238__auto____16631;
} else
{var or__4238__auto____16632 = p3.call(null,y);
if(cljs.core.truth_(or__4238__auto____16632))
{return or__4238__auto____16632;
} else
{var or__4238__auto____16633 = p1.call(null,z);
if(cljs.core.truth_(or__4238__auto____16633))
{return or__4238__auto____16633;
} else
{var or__4238__auto____16634 = p2.call(null,z);
if(cljs.core.truth_(or__4238__auto____16634))
{return or__4238__auto____16634;
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
var G__16651__delegate = function (x,y,z,args){
var or__4238__auto____16635 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__4238__auto____16635))
{return or__4238__auto____16635;
} else
{return cljs.core.some.call(null,(function (p1__16331_SHARP_){
var or__4238__auto____16636 = p1.call(null,p1__16331_SHARP_);
if(cljs.core.truth_(or__4238__auto____16636))
{return or__4238__auto____16636;
} else
{var or__4238__auto____16637 = p2.call(null,p1__16331_SHARP_);
if(cljs.core.truth_(or__4238__auto____16637))
{return or__4238__auto____16637;
} else
{return p3.call(null,p1__16331_SHARP_);
}
}
}),args);
}
};
var G__16651 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16651__delegate.call(this, x, y, z, args);
};
G__16651.cljs$lang$maxFixedArity = 3;
G__16651.cljs$lang$applyTo = (function (arglist__16652){
var x = cljs.core.first(arglist__16652);
var y = cljs.core.first(cljs.core.next(arglist__16652));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16652)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16652)));
return G__16651__delegate(x, y, z, args);
});
G__16651.cljs$lang$arity$variadic = G__16651__delegate;
return G__16651;
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
var G__16653__delegate = function (p1,p2,p3,ps){
var ps__16638 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__16332_SHARP_){
return p1__16332_SHARP_.call(null,x);
}),ps__16638);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__16333_SHARP_){
var or__4238__auto____16643 = p1__16333_SHARP_.call(null,x);
if(cljs.core.truth_(or__4238__auto____16643))
{return or__4238__auto____16643;
} else
{return p1__16333_SHARP_.call(null,y);
}
}),ps__16638);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__16334_SHARP_){
var or__4238__auto____16644 = p1__16334_SHARP_.call(null,x);
if(cljs.core.truth_(or__4238__auto____16644))
{return or__4238__auto____16644;
} else
{var or__4238__auto____16645 = p1__16334_SHARP_.call(null,y);
if(cljs.core.truth_(or__4238__auto____16645))
{return or__4238__auto____16645;
} else
{return p1__16334_SHARP_.call(null,z);
}
}
}),ps__16638);
});
var spn__4 = (function() { 
var G__16654__delegate = function (x,y,z,args){
var or__4238__auto____16646 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__4238__auto____16646))
{return or__4238__auto____16646;
} else
{return cljs.core.some.call(null,(function (p1__16335_SHARP_){
return cljs.core.some.call(null,p1__16335_SHARP_,args);
}),ps__16638);
}
};
var G__16654 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16654__delegate.call(this, x, y, z, args);
};
G__16654.cljs$lang$maxFixedArity = 3;
G__16654.cljs$lang$applyTo = (function (arglist__16655){
var x = cljs.core.first(arglist__16655);
var y = cljs.core.first(cljs.core.next(arglist__16655));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16655)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16655)));
return G__16654__delegate(x, y, z, args);
});
G__16654.cljs$lang$arity$variadic = G__16654__delegate;
return G__16654;
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
var G__16653 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__16653__delegate.call(this, p1, p2, p3, ps);
};
G__16653.cljs$lang$maxFixedArity = 3;
G__16653.cljs$lang$applyTo = (function (arglist__16656){
var p1 = cljs.core.first(arglist__16656);
var p2 = cljs.core.first(cljs.core.next(arglist__16656));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16656)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16656)));
return G__16653__delegate(p1, p2, p3, ps);
});
G__16653.cljs$lang$arity$variadic = G__16653__delegate;
return G__16653;
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
var temp__4425__auto____16675 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16675)
{var s__16676 = temp__4425__auto____16675;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16676))
{var c__16677 = cljs.core.chunk_first.call(null,s__16676);
var size__16678 = cljs.core.count.call(null,c__16677);
var b__16679 = cljs.core.chunk_buffer.call(null,size__16678);
var n__8342__auto____16680 = size__16678;
var i__16681 = 0;
while(true){
if((i__16681 < n__8342__auto____16680))
{cljs.core.chunk_append.call(null,b__16679,f.call(null,cljs.core._nth.call(null,c__16677,i__16681)));
{
var G__16693 = (i__16681 + 1);
i__16681 = G__16693;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16679),map.call(null,f,cljs.core.chunk_rest.call(null,s__16676)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__16676)),map.call(null,f,cljs.core.rest.call(null,s__16676)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16682 = cljs.core.seq.call(null,c1);
var s2__16683 = cljs.core.seq.call(null,c2);
if((function (){var and__4236__auto____16684 = s1__16682;
if(and__4236__auto____16684)
{return s2__16683;
} else
{return and__4236__auto____16684;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16682),cljs.core.first.call(null,s2__16683)),map.call(null,f,cljs.core.rest.call(null,s1__16682),cljs.core.rest.call(null,s2__16683)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__16685 = cljs.core.seq.call(null,c1);
var s2__16686 = cljs.core.seq.call(null,c2);
var s3__16687 = cljs.core.seq.call(null,c3);
if((function (){var and__4236__auto____16688 = s1__16685;
if(and__4236__auto____16688)
{var and__4236__auto____16689 = s2__16686;
if(and__4236__auto____16689)
{return s3__16687;
} else
{return and__4236__auto____16689;
}
} else
{return and__4236__auto____16688;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__16685),cljs.core.first.call(null,s2__16686),cljs.core.first.call(null,s3__16687)),map.call(null,f,cljs.core.rest.call(null,s1__16685),cljs.core.rest.call(null,s2__16686),cljs.core.rest.call(null,s3__16687)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__16694__delegate = function (f,c1,c2,c3,colls){
var step__16692 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16691 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16691))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__16691),step.call(null,map.call(null,cljs.core.rest,ss__16691)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__16496_SHARP_){
return cljs.core.apply.call(null,f,p1__16496_SHARP_);
}),step__16692.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__16694 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16694__delegate.call(this, f, c1, c2, c3, colls);
};
G__16694.cljs$lang$maxFixedArity = 4;
G__16694.cljs$lang$applyTo = (function (arglist__16695){
var f = cljs.core.first(arglist__16695);
var c1 = cljs.core.first(cljs.core.next(arglist__16695));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16695)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16695))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16695))));
return G__16694__delegate(f, c1, c2, c3, colls);
});
G__16694.cljs$lang$arity$variadic = G__16694__delegate;
return G__16694;
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
{var temp__4425__auto____16698 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16698)
{var s__16699 = temp__4425__auto____16698;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__16699),take.call(null,(n - 1),cljs.core.rest.call(null,s__16699)));
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
var step__16705 = (function (n,coll){
while(true){
var s__16703 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__4236__auto____16704 = (n > 0);
if(and__4236__auto____16704)
{return s__16703;
} else
{return and__4236__auto____16704;
}
})()))
{{
var G__16706 = (n - 1);
var G__16707 = cljs.core.rest.call(null,s__16703);
n = G__16706;
coll = G__16707;
continue;
}
} else
{return s__16703;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16705.call(null,n,coll);
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
var s__16710 = cljs.core.seq.call(null,coll);
var lead__16711 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__16711)
{{
var G__16712 = cljs.core.next.call(null,s__16710);
var G__16713 = cljs.core.next.call(null,lead__16711);
s__16710 = G__16712;
lead__16711 = G__16713;
continue;
}
} else
{return s__16710;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__16719 = (function (pred,coll){
while(true){
var s__16717 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__4236__auto____16718 = s__16717;
if(and__4236__auto____16718)
{return pred.call(null,cljs.core.first.call(null,s__16717));
} else
{return and__4236__auto____16718;
}
})()))
{{
var G__16720 = pred;
var G__16721 = cljs.core.rest.call(null,s__16717);
pred = G__16720;
coll = G__16721;
continue;
}
} else
{return s__16717;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__16719.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4425__auto____16724 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16724)
{var s__16725 = temp__4425__auto____16724;
return cljs.core.concat.call(null,s__16725,cycle.call(null,s__16725));
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
var s1__16730 = cljs.core.seq.call(null,c1);
var s2__16731 = cljs.core.seq.call(null,c2);
if((function (){var and__4236__auto____16732 = s1__16730;
if(and__4236__auto____16732)
{return s2__16731;
} else
{return and__4236__auto____16732;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__16730),cljs.core.cons.call(null,cljs.core.first.call(null,s2__16731),interleave.call(null,cljs.core.rest.call(null,s1__16730),cljs.core.rest.call(null,s2__16731))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__16734__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__16733 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__16733))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__16733),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__16733)));
} else
{return null;
}
}),null));
};
var G__16734 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16734__delegate.call(this, c1, c2, colls);
};
G__16734.cljs$lang$maxFixedArity = 2;
G__16734.cljs$lang$applyTo = (function (arglist__16735){
var c1 = cljs.core.first(arglist__16735);
var c2 = cljs.core.first(cljs.core.next(arglist__16735));
var colls = cljs.core.rest(cljs.core.next(arglist__16735));
return G__16734__delegate(c1, c2, colls);
});
G__16734.cljs$lang$arity$variadic = G__16734__delegate;
return G__16734;
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
var cat__16745 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4423__auto____16743 = cljs.core.seq.call(null,coll);
if(temp__4423__auto____16743)
{var coll__16744 = temp__4423__auto____16743;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__16744),cat.call(null,cljs.core.rest.call(null,coll__16744),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__16745.call(null,null,colls);
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
var G__16746__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__16746 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__16746__delegate.call(this, f, coll, colls);
};
G__16746.cljs$lang$maxFixedArity = 2;
G__16746.cljs$lang$applyTo = (function (arglist__16747){
var f = cljs.core.first(arglist__16747);
var coll = cljs.core.first(cljs.core.next(arglist__16747));
var colls = cljs.core.rest(cljs.core.next(arglist__16747));
return G__16746__delegate(f, coll, colls);
});
G__16746.cljs$lang$arity$variadic = G__16746__delegate;
return G__16746;
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
var temp__4425__auto____16757 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16757)
{var s__16758 = temp__4425__auto____16757;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16758))
{var c__16759 = cljs.core.chunk_first.call(null,s__16758);
var size__16760 = cljs.core.count.call(null,c__16759);
var b__16761 = cljs.core.chunk_buffer.call(null,size__16760);
var n__8342__auto____16762 = size__16760;
var i__16763 = 0;
while(true){
if((i__16763 < n__8342__auto____16762))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__16759,i__16763))))
{cljs.core.chunk_append.call(null,b__16761,cljs.core._nth.call(null,c__16759,i__16763));
} else
{}
{
var G__16766 = (i__16763 + 1);
i__16763 = G__16766;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16761),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__16758)));
} else
{var f__16764 = cljs.core.first.call(null,s__16758);
var r__16765 = cljs.core.rest.call(null,s__16758);
if(cljs.core.truth_(pred.call(null,f__16764)))
{return cljs.core.cons.call(null,f__16764,filter.call(null,pred,r__16765));
} else
{return filter.call(null,pred,r__16765);
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
var walk__16769 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__16769.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__16767_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__16767_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__16773__16774 = to;
if(G__16773__16774)
{if((function (){var or__4238__auto____16775 = (G__16773__16774.cljs$lang$protocol_mask$partition1$ & 1);
if(or__4238__auto____16775)
{return or__4238__auto____16775;
} else
{return G__16773__16774.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__16773__16774.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16773__16774);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__16773__16774);
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
var G__16776__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__16776 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__16776__delegate.call(this, f, c1, c2, c3, colls);
};
G__16776.cljs$lang$maxFixedArity = 4;
G__16776.cljs$lang$applyTo = (function (arglist__16777){
var f = cljs.core.first(arglist__16777);
var c1 = cljs.core.first(cljs.core.next(arglist__16777));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16777)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16777))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__16777))));
return G__16776__delegate(f, c1, c2, c3, colls);
});
G__16776.cljs$lang$arity$variadic = G__16776__delegate;
return G__16776;
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
var temp__4425__auto____16784 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16784)
{var s__16785 = temp__4425__auto____16784;
var p__16786 = cljs.core.take.call(null,n,s__16785);
if((n === cljs.core.count.call(null,p__16786)))
{return cljs.core.cons.call(null,p__16786,partition.call(null,n,step,cljs.core.drop.call(null,step,s__16785)));
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
var temp__4425__auto____16787 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____16787)
{var s__16788 = temp__4425__auto____16787;
var p__16789 = cljs.core.take.call(null,n,s__16788);
if((n === cljs.core.count.call(null,p__16789)))
{return cljs.core.cons.call(null,p__16789,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__16788)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__16789,pad)));
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
var sentinel__16794 = cljs.core.lookup_sentinel;
var m__16795 = m;
var ks__16796 = cljs.core.seq.call(null,ks);
while(true){
if(ks__16796)
{var m__16797 = cljs.core._lookup.call(null,m__16795,cljs.core.first.call(null,ks__16796),sentinel__16794);
if((sentinel__16794 === m__16797))
{return not_found;
} else
{{
var G__16798 = sentinel__16794;
var G__16799 = m__16797;
var G__16800 = cljs.core.next.call(null,ks__16796);
sentinel__16794 = G__16798;
m__16795 = G__16799;
ks__16796 = G__16800;
continue;
}
}
} else
{return m__16795;
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
cljs.core.assoc_in = (function assoc_in(m,p__16801,v){
var vec__16806__16807 = p__16801;
var k__16808 = cljs.core.nth.call(null,vec__16806__16807,0,null);
var ks__16809 = cljs.core.nthnext.call(null,vec__16806__16807,1);
if(cljs.core.truth_(ks__16809))
{return cljs.core.assoc.call(null,m,k__16808,assoc_in.call(null,cljs.core._lookup.call(null,m,k__16808,null),ks__16809,v));
} else
{return cljs.core.assoc.call(null,m,k__16808,v);
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
var update_in__delegate = function (m,p__16810,f,args){
var vec__16815__16816 = p__16810;
var k__16817 = cljs.core.nth.call(null,vec__16815__16816,0,null);
var ks__16818 = cljs.core.nthnext.call(null,vec__16815__16816,1);
if(cljs.core.truth_(ks__16818))
{return cljs.core.assoc.call(null,m,k__16817,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__16817,null),ks__16818,f,args));
} else
{return cljs.core.assoc.call(null,m,k__16817,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__16817,null),args));
}
};
var update_in = function (m,p__16810,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__16810, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__16819){
var m = cljs.core.first(arglist__16819);
var p__16810 = cljs.core.first(cljs.core.next(arglist__16819));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__16819)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__16819)));
return update_in__delegate(m, p__16810, f, args);
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
this.cljs$lang$protocol_mask$partition0$ = 32400159;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.toString = (function (){
var this__16822 = this;
var this__16823 = this;
return cljs.core.pr_str.call(null,this__16823);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16824 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16825 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16826 = this;
if((function (){var and__4236__auto____16827 = (0 <= n);
if(and__4236__auto____16827)
{return (n < this__16826.array.length);
} else
{return and__4236__auto____16827;
}
})())
{return (this__16826.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16828 = this;
if((function (){var and__4236__auto____16829 = (0 <= n);
if(and__4236__auto____16829)
{return (n < this__16828.array.length);
} else
{return and__4236__auto____16829;
}
})())
{return (this__16828.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16830 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16831 = this;
return this__16831.meta;
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16832 = this;
return this__16832.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16833 = this;
var count__16834 = this__16833.array.length;
if((count__16834 > 0))
{return (this__16833.array[(count__16834 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16835 = this;
if((this__16835.array.length > 0))
{var new_array__16836 = this__16835.array.slice();
new_array__16836.pop();
return (new cljs.core.Vector(this__16835.meta,new_array__16836,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16837 = this;
var h__8007__auto____16838 = this__16837.__hash;
if(!((h__8007__auto____16838 == null)))
{return h__8007__auto____16838;
} else
{var h__8007__auto____16839 = cljs.core.hash_coll.call(null,coll);
this__16837.__hash = h__8007__auto____16839;
return h__8007__auto____16839;
}
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16840 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16841 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__16841.meta);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16842 = this;
return cljs.core.ci_reduce.call(null,this__16842.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16843 = this;
return cljs.core.ci_reduce.call(null,this__16843.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16844 = this;
var new_array__16845 = this__16844.array.slice();
(new_array__16845[k] = v);
return (new cljs.core.Vector(this__16844.meta,new_array__16845,null));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16846 = this;
if((this__16846.array.length > 0))
{var vector_seq__16847 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__16846.array.length))
{return cljs.core.cons.call(null,(this__16846.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__16847.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16848 = this;
return (new cljs.core.Vector(meta,this__16848.array,this__16848.__hash));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16849 = this;
var new_array__16850 = this__16849.array.slice();
new_array__16850.push(o);
return (new cljs.core.Vector(this__16849.meta,new_array__16850,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__16859 = null;
var G__16859__2 = (function (this_sym16851,k){
var this__16853 = this;
var this_sym16851__16854 = this;
var coll__16855 = this_sym16851__16854;
return coll__16855.cljs$core$ILookup$_lookup$arity$2(coll__16855,k);
});
var G__16859__3 = (function (this_sym16852,k,not_found){
var this__16853 = this;
var this_sym16852__16856 = this;
var coll__16857 = this_sym16852__16856;
return coll__16857.cljs$core$ILookup$_lookup$arity$3(coll__16857,k,not_found);
});
G__16859 = function(this_sym16852,k,not_found){
switch(arguments.length){
case 2:
return G__16859__2.call(this,this_sym16852,k);
case 3:
return G__16859__3.call(this,this_sym16852,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16859;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym16820,args16821){
var this__16858 = this;
return this_sym16820.call.apply(this_sym16820,[this_sym16820].concat(args16821.slice()));
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
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__8125__auto__){
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
var cnt__16861 = pv.cnt;
if((cnt__16861 < 32))
{return 0;
} else
{return (((cnt__16861 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__16867 = level;
var ret__16868 = node;
while(true){
if((ll__16867 === 0))
{return ret__16868;
} else
{var embed__16869 = ret__16868;
var r__16870 = cljs.core.pv_fresh_node.call(null,edit);
var ___16871 = cljs.core.pv_aset.call(null,r__16870,0,embed__16869);
{
var G__16872 = (ll__16867 - 5);
var G__16873 = r__16870;
ll__16867 = G__16872;
ret__16868 = G__16873;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__16879 = cljs.core.pv_clone_node.call(null,parent);
var subidx__16880 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__16879,subidx__16880,tailnode);
return ret__16879;
} else
{var child__16881 = cljs.core.pv_aget.call(null,parent,subidx__16880);
if(!((child__16881 == null)))
{var node_to_insert__16882 = push_tail.call(null,pv,(level - 5),child__16881,tailnode);
cljs.core.pv_aset.call(null,ret__16879,subidx__16880,node_to_insert__16882);
return ret__16879;
} else
{var node_to_insert__16883 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__16879,subidx__16880,node_to_insert__16883);
return ret__16879;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__4236__auto____16887 = (0 <= i);
if(and__4236__auto____16887)
{return (i < pv.cnt);
} else
{return and__4236__auto____16887;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__16888 = pv.root;
var level__16889 = pv.shift;
while(true){
if((level__16889 > 0))
{{
var G__16890 = cljs.core.pv_aget.call(null,node__16888,((i >>> level__16889) & 31));
var G__16891 = (level__16889 - 5);
node__16888 = G__16890;
level__16889 = G__16891;
continue;
}
} else
{return node__16888.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__16894 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__16894,(i & 31),val);
return ret__16894;
} else
{var subidx__16895 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__16894,subidx__16895,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16895),i,val));
return ret__16894;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__16901 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__16902 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__16901));
if((function (){var and__4236__auto____16903 = (new_child__16902 == null);
if(and__4236__auto____16903)
{return (subidx__16901 === 0);
} else
{return and__4236__auto____16903;
}
})())
{return null;
} else
{var ret__16904 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16904,subidx__16901,new_child__16902);
return ret__16904;
}
} else
{if((subidx__16901 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__16905 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__16905,subidx__16901,null);
return ret__16905;
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
this.cljs$lang$protocol_mask$partition0$ = 167668511;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__16908 = this;
var this__16909 = this;
return cljs.core.pr_str.call(null,this__16909);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16910 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__16911 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__16912 = this;
var step_init__16913 = [0,init];
var i__16914 = 0;
while(true){
if((i__16914 < this__16912.cnt))
{var arr__16915 = cljs.core.array_for.call(null,v,i__16914);
var len__16916 = arr__16915.length;
var init__16920 = (function (){var j__16917 = 0;
var init__16918 = (step_init__16913[1]);
while(true){
if((j__16917 < len__16916))
{var init__16919 = f.call(null,init__16918,(j__16917 + i__16914),(arr__16915[j__16917]));
if(cljs.core.reduced_QMARK_.call(null,init__16919))
{return init__16919;
} else
{{
var G__16964 = (j__16917 + 1);
var G__16965 = init__16919;
j__16917 = G__16964;
init__16918 = G__16965;
continue;
}
}
} else
{(step_init__16913[0] = len__16916);
(step_init__16913[1] = init__16918);
return init__16918;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__16920))
{return cljs.core.deref.call(null,init__16920);
} else
{{
var G__16966 = (i__16914 + (step_init__16913[0]));
i__16914 = G__16966;
continue;
}
}
} else
{return (step_init__16913[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__16921 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__16922 = this;
if((function (){var and__4236__auto____16923 = (0 <= n);
if(and__4236__auto____16923)
{return (n < this__16922.cnt);
} else
{return and__4236__auto____16923;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__16924 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__16925 = this;
return this__16925.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__16926 = this;
return this__16926.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__16927 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__16928 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__16929 = this;
if((this__16929.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__16929.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__16930 = this;
if((this__16930.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__16930.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16930.meta);
} else
{if((1 < (this__16930.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__16930.meta,(this__16930.cnt - 1),this__16930.shift,this__16930.root,this__16930.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__16931 = cljs.core.array_for.call(null,coll,(this__16930.cnt - 2));
var nr__16932 = cljs.core.pop_tail.call(null,coll,this__16930.shift,this__16930.root);
var new_root__16933 = (((nr__16932 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__16932);
var cnt_1__16934 = (this__16930.cnt - 1);
if((function (){var and__4236__auto____16935 = (5 < this__16930.shift);
if(and__4236__auto____16935)
{return (cljs.core.pv_aget.call(null,new_root__16933,1) == null);
} else
{return and__4236__auto____16935;
}
})())
{return (new cljs.core.PersistentVector(this__16930.meta,cnt_1__16934,(this__16930.shift - 5),cljs.core.pv_aget.call(null,new_root__16933,0),new_tail__16931,null));
} else
{return (new cljs.core.PersistentVector(this__16930.meta,cnt_1__16934,this__16930.shift,new_root__16933,new_tail__16931,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__16936 = this;
if((this__16936.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__16936.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__16937 = this;
var h__8007__auto____16938 = this__16937.__hash;
if(!((h__8007__auto____16938 == null)))
{return h__8007__auto____16938;
} else
{var h__8007__auto____16939 = cljs.core.hash_coll.call(null,coll);
this__16937.__hash = h__8007__auto____16939;
return h__8007__auto____16939;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16940 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__16941 = this;
return (new cljs.core.TransientVector(this__16941.cnt,this__16941.shift,cljs.core.tv_editable_root.call(null,this__16941.root),cljs.core.tv_editable_tail.call(null,this__16941.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16942 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16942.meta);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__16943 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__16944 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__16945 = this;
if((function (){var and__4236__auto____16946 = (0 <= k);
if(and__4236__auto____16946)
{return (k < this__16945.cnt);
} else
{return and__4236__auto____16946;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__16947 = this__16945.tail.slice();
(new_tail__16947[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__16945.meta,this__16945.cnt,this__16945.shift,this__16945.root,new_tail__16947,null));
} else
{return (new cljs.core.PersistentVector(this__16945.meta,this__16945.cnt,this__16945.shift,cljs.core.do_assoc.call(null,coll,this__16945.shift,this__16945.root,k,v),this__16945.tail,null));
}
} else
{if((k === this__16945.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__16945.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16948 = this;
if((this__16948.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__16949 = this;
return (new cljs.core.PersistentVector(meta,this__16949.cnt,this__16949.shift,this__16949.root,this__16949.tail,this__16949.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16950 = this;
if(((this__16950.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__16951 = this__16950.tail.slice();
new_tail__16951.push(o);
return (new cljs.core.PersistentVector(this__16950.meta,(this__16950.cnt + 1),this__16950.shift,this__16950.root,new_tail__16951,null));
} else
{var root_overflow_QMARK___16952 = ((this__16950.cnt >>> 5) > (1 << this__16950.shift));
var new_shift__16953 = ((root_overflow_QMARK___16952)?(this__16950.shift + 5):this__16950.shift);
var new_root__16955 = ((root_overflow_QMARK___16952)?(function (){var n_r__16954 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__16954,0,this__16950.root);
cljs.core.pv_aset.call(null,n_r__16954,1,cljs.core.new_path.call(null,null,this__16950.shift,(new cljs.core.VectorNode(null,this__16950.tail))));
return n_r__16954;
})():cljs.core.push_tail.call(null,coll,this__16950.shift,this__16950.root,(new cljs.core.VectorNode(null,this__16950.tail))));
return (new cljs.core.PersistentVector(this__16950.meta,(this__16950.cnt + 1),new_shift__16953,new_root__16955,[o],null));
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__16967 = null;
var G__16967__2 = (function (this_sym16956,k){
var this__16958 = this;
var this_sym16956__16959 = this;
var coll__16960 = this_sym16956__16959;
return coll__16960.cljs$core$ILookup$_lookup$arity$2(coll__16960,k);
});
var G__16967__3 = (function (this_sym16957,k,not_found){
var this__16958 = this;
var this_sym16957__16961 = this;
var coll__16962 = this_sym16957__16961;
return coll__16962.cljs$core$ILookup$_lookup$arity$3(coll__16962,k,not_found);
});
G__16967 = function(this_sym16957,k,not_found){
switch(arguments.length){
case 2:
return G__16967__2.call(this,this_sym16957,k);
case 3:
return G__16967__3.call(this,this_sym16957,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16967;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym16906,args16907){
var this__16963 = this;
return this_sym16906.call.apply(this_sym16906,[this_sym16906].concat(args16907.slice()));
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__16968 = xs.length;
var xs__16969 = (((no_clone === true))?xs:xs.slice());
if((l__16968 < 32))
{return (new cljs.core.PersistentVector(null,l__16968,5,cljs.core.PersistentVector.EMPTY_NODE,xs__16969,null));
} else
{var node__16970 = xs__16969.slice(0,32);
var v__16971 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__16970,null));
var i__16972 = 32;
var out__16973 = cljs.core._as_transient.call(null,v__16971);
while(true){
if((i__16972 < l__16968))
{{
var G__16974 = (i__16972 + 1);
var G__16975 = cljs.core.conj_BANG_.call(null,out__16973,(xs__16969[i__16972]));
i__16972 = G__16974;
out__16973 = G__16975;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__16973);
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
vector.cljs$lang$applyTo = (function (arglist__16976){
var args = cljs.core.seq(arglist__16976);;
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
this.cljs$lang$protocol_mask$partition0$ = 27525356;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__16977 = this;
if(((this__16977.off + 1) < this__16977.node.length))
{var s__16978 = cljs.core.chunked_seq.call(null,this__16977.vec,this__16977.node,this__16977.i,(this__16977.off + 1));
if((s__16978 == null))
{return null;
} else
{return s__16978;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__16979 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__16980 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__16980.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__16981 = this;
return (this__16981.node[this__16981.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__16982 = this;
if(((this__16982.off + 1) < this__16982.node.length))
{var s__16983 = cljs.core.chunked_seq.call(null,this__16982.vec,this__16982.node,this__16982.i,(this__16982.off + 1));
if((s__16983 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16983;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__16984 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__16985 = this;
return cljs.core.array_chunk.call(null,this__16985.node,this__16985.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__16986 = this;
var l__16987 = this__16986.node.length;
var s__16988 = ((((this__16986.i + l__16987) < cljs.core._count.call(null,this__16986.vec)))?cljs.core.chunked_seq.call(null,this__16986.vec,(this__16986.i + l__16987),0):null);
if((s__16988 == null))
{return cljs.core.List.EMPTY;
} else
{return s__16988;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__16989 = this;
return cljs.core.chunked_seq.call(null,this__16989.vec,this__16989.node,this__16989.i,this__16989.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__16990 = this;
return this__16990.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__16991 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__16992 = this;
var l__16993 = this__16992.node.length;
var s__16994 = ((((this__16992.i + l__16993) < cljs.core._count.call(null,this__16992.vec)))?cljs.core.chunked_seq.call(null,this__16992.vec,(this__16992.i + l__16993),0):null);
if((s__16994 == null))
{return null;
} else
{return s__16994;
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
this.cljs$lang$protocol_mask$partition0$ = 32400159;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.toString = (function (){
var this__16997 = this;
var this__16998 = this;
return cljs.core.pr_str.call(null,this__16998);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__16999 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17000 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__17001 = this;
return cljs.core._nth.call(null,this__17001.v,(this__17001.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__17002 = this;
return cljs.core._nth.call(null,this__17002.v,(this__17002.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__17003 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17004 = this;
return this__17004.meta;
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17005 = this;
return (this__17005.end - this__17005.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__17006 = this;
return cljs.core._nth.call(null,this__17006.v,(this__17006.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__17007 = this;
if((this__17007.start === this__17007.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__17007.meta,this__17007.v,this__17007.start,(this__17007.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17008 = this;
var h__8007__auto____17009 = this__17008.__hash;
if(!((h__8007__auto____17009 == null)))
{return h__8007__auto____17009;
} else
{var h__8007__auto____17010 = cljs.core.hash_coll.call(null,coll);
this__17008.__hash = h__8007__auto____17010;
return h__8007__auto____17010;
}
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17011 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17012 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__17012.meta);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__17013 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__17014 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__17015 = this;
var v_pos__17016 = (this__17015.start + key);
return (new cljs.core.Subvec(this__17015.meta,cljs.core._assoc.call(null,this__17015.v,v_pos__17016,val),this__17015.start,((this__17015.end > (v_pos__17016 + 1)) ? this__17015.end : (v_pos__17016 + 1)),null));
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17017 = this;
var subvec_seq__17018 = (function subvec_seq(i){
if((i === this__17017.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__17017.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__17018.call(null,this__17017.start);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17019 = this;
return (new cljs.core.Subvec(meta,this__17019.v,this__17019.start,this__17019.end,this__17019.__hash));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17020 = this;
return (new cljs.core.Subvec(this__17020.meta,cljs.core._assoc_n.call(null,this__17020.v,this__17020.end,o),this__17020.start,(this__17020.end + 1),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__17029 = null;
var G__17029__2 = (function (this_sym17021,k){
var this__17023 = this;
var this_sym17021__17024 = this;
var coll__17025 = this_sym17021__17024;
return coll__17025.cljs$core$ILookup$_lookup$arity$2(coll__17025,k);
});
var G__17029__3 = (function (this_sym17022,k,not_found){
var this__17023 = this;
var this_sym17022__17026 = this;
var coll__17027 = this_sym17022__17026;
return coll__17027.cljs$core$ILookup$_lookup$arity$3(coll__17027,k,not_found);
});
G__17029 = function(this_sym17022,k,not_found){
switch(arguments.length){
case 2:
return G__17029__2.call(this,this_sym17022,k);
case 3:
return G__17029__3.call(this,this_sym17022,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17029;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym16995,args16996){
var this__17028 = this;
return this_sym16995.call.apply(this_sym16995,[this_sym16995].concat(args16996.slice()));
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
var ret__17031 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__17031,0,tl.length);
return ret__17031;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__17035 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__17036 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__17035,subidx__17036,(((level === 5))?tail_node:(function (){var child__17037 = cljs.core.pv_aget.call(null,ret__17035,subidx__17036);
if(!((child__17037 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__17037,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__17035;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__17042 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__17043 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__17044 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__17042,subidx__17043));
if((function (){var and__4236__auto____17045 = (new_child__17044 == null);
if(and__4236__auto____17045)
{return (subidx__17043 === 0);
} else
{return and__4236__auto____17045;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__17042,subidx__17043,new_child__17044);
return node__17042;
}
} else
{if((subidx__17043 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__17042,subidx__17043,null);
return node__17042;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__4236__auto____17050 = (0 <= i);
if(and__4236__auto____17050)
{return (i < tv.cnt);
} else
{return and__4236__auto____17050;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__17051 = tv.root;
var node__17052 = root__17051;
var level__17053 = tv.shift;
while(true){
if((level__17053 > 0))
{{
var G__17054 = cljs.core.tv_ensure_editable.call(null,root__17051.edit,cljs.core.pv_aget.call(null,node__17052,((i >>> level__17053) & 31)));
var G__17055 = (level__17053 - 5);
node__17052 = G__17054;
level__17053 = G__17055;
continue;
}
} else
{return node__17052.arr;
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
this.cljs$lang$protocol_mask$partition1$ = 22;
this.cljs$lang$protocol_mask$partition0$ = 275;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__17058 = this;
if(this__17058.root.edit)
{if(((this__17058.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__17058.tail[(this__17058.cnt & 31)] = o);
this__17058.cnt = (this__17058.cnt + 1);
return tcoll;
} else
{var tail_node__17059 = (new cljs.core.VectorNode(this__17058.root.edit,this__17058.tail));
var new_tail__17060 = cljs.core.make_array.call(null,32);
(new_tail__17060[0] = o);
this__17058.tail = new_tail__17060;
if(((this__17058.cnt >>> 5) > (1 << this__17058.shift)))
{var new_root_array__17061 = cljs.core.make_array.call(null,32);
var new_shift__17062 = (this__17058.shift + 5);
(new_root_array__17061[0] = this__17058.root);
(new_root_array__17061[1] = cljs.core.new_path.call(null,this__17058.root.edit,this__17058.shift,tail_node__17059));
this__17058.root = (new cljs.core.VectorNode(this__17058.root.edit,new_root_array__17061));
this__17058.shift = new_shift__17062;
this__17058.cnt = (this__17058.cnt + 1);
return tcoll;
} else
{var new_root__17063 = cljs.core.tv_push_tail.call(null,tcoll,this__17058.shift,this__17058.root,tail_node__17059);
this__17058.root = new_root__17063;
this__17058.cnt = (this__17058.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17064 = this;
if(this__17064.root.edit)
{this__17064.root.edit = null;
var len__17065 = (this__17064.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__17066 = cljs.core.make_array.call(null,len__17065);
cljs.core.array_copy.call(null,this__17064.tail,0,trimmed_tail__17066,0,len__17065);
return (new cljs.core.PersistentVector(null,this__17064.cnt,this__17064.shift,this__17064.root,trimmed_tail__17066,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__17067 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__17068 = this;
if(this__17068.root.edit)
{if((function (){var and__4236__auto____17069 = (0 <= n);
if(and__4236__auto____17069)
{return (n < this__17068.cnt);
} else
{return and__4236__auto____17069;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__17068.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__17074 = (function go(level,node){
var node__17072 = cljs.core.tv_ensure_editable.call(null,this__17068.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__17072,(n & 31),val);
return node__17072;
} else
{var subidx__17073 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__17072,subidx__17073,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__17072,subidx__17073)));
return node__17072;
}
}).call(null,this__17068.shift,this__17068.root);
this__17068.root = new_root__17074;
return tcoll;
}
} else
{if((n === this__17068.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__17068.cnt)].join('')));
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
var this__17075 = this;
if(this__17075.root.edit)
{if((this__17075.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__17075.cnt))
{this__17075.cnt = 0;
return tcoll;
} else
{if((((this__17075.cnt - 1) & 31) > 0))
{this__17075.cnt = (this__17075.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__17076 = cljs.core.editable_array_for.call(null,tcoll,(this__17075.cnt - 2));
var new_root__17078 = (function (){var nr__17077 = cljs.core.tv_pop_tail.call(null,tcoll,this__17075.shift,this__17075.root);
if(!((nr__17077 == null)))
{return nr__17077;
} else
{return (new cljs.core.VectorNode(this__17075.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__4236__auto____17079 = (5 < this__17075.shift);
if(and__4236__auto____17079)
{return (cljs.core.pv_aget.call(null,new_root__17078,1) == null);
} else
{return and__4236__auto____17079;
}
})())
{var new_root__17080 = cljs.core.tv_ensure_editable.call(null,this__17075.root.edit,cljs.core.pv_aget.call(null,new_root__17078,0));
this__17075.root = new_root__17080;
this__17075.shift = (this__17075.shift - 5);
this__17075.cnt = (this__17075.cnt - 1);
this__17075.tail = new_tail__17076;
return tcoll;
} else
{this__17075.root = new_root__17078;
this__17075.cnt = (this__17075.cnt - 1);
this__17075.tail = new_tail__17076;
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
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17081 = this;
if(this__17081.root.edit)
{return this__17081.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__17082 = this;
if(this__17082.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__17083 = this;
if((function (){var and__4236__auto____17084 = (0 <= n);
if(and__4236__auto____17084)
{return (n < this__17083.cnt);
} else
{return and__4236__auto____17084;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17085 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17086 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.call = (function() {
var G__17095 = null;
var G__17095__2 = (function (this_sym17087,k){
var this__17089 = this;
var this_sym17087__17090 = this;
var coll__17091 = this_sym17087__17090;
return coll__17091.cljs$core$ILookup$_lookup$arity$2(coll__17091,k);
});
var G__17095__3 = (function (this_sym17088,k,not_found){
var this__17089 = this;
var this_sym17088__17092 = this;
var coll__17093 = this_sym17088__17092;
return coll__17093.cljs$core$ILookup$_lookup$arity$3(coll__17093,k,not_found);
});
G__17095 = function(this_sym17088,k,not_found){
switch(arguments.length){
case 2:
return G__17095__2.call(this,this_sym17088,k);
case 3:
return G__17095__3.call(this,this_sym17088,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17095;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym17056,args17057){
var this__17094 = this;
return this_sym17056.call.apply(this_sym17056,[this_sym17056].concat(args17057.slice()));
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
this.cljs$lang$protocol_mask$partition0$ = 31850572;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__17096 = this;
var this__17097 = this;
return cljs.core.pr_str.call(null,this__17097);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17098 = this;
return this__17098.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17099 = this;
var h__8007__auto____17100 = this__17099.__hash;
if(!((h__8007__auto____17100 == null)))
{return h__8007__auto____17100;
} else
{var h__8007__auto____17101 = cljs.core.hash_coll.call(null,coll);
this__17099.__hash = h__8007__auto____17101;
return h__8007__auto____17101;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17102 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17103 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17103.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17104 = this;
return cljs.core._first.call(null,this__17104.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17105 = this;
var temp__4423__auto____17106 = cljs.core.next.call(null,this__17105.front);
if(temp__4423__auto____17106)
{var f1__17107 = temp__4423__auto____17106;
return (new cljs.core.PersistentQueueSeq(this__17105.meta,f1__17107,this__17105.rear,null));
} else
{if((this__17105.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__17105.meta,this__17105.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17108 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17109 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__17109.front,this__17109.rear,this__17109.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17110 = this;
return cljs.core.cons.call(null,o,coll);
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
this.cljs$lang$protocol_mask$partition0$ = 31858766;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__17111 = this;
var this__17112 = this;
return cljs.core.pr_str.call(null,this__17112);
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17113 = this;
return this__17113.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17114 = this;
return this__17114.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__17115 = this;
return cljs.core._first.call(null,this__17115.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__17116 = this;
if(cljs.core.truth_(this__17116.front))
{var temp__4423__auto____17117 = cljs.core.next.call(null,this__17116.front);
if(temp__4423__auto____17117)
{var f1__17118 = temp__4423__auto____17117;
return (new cljs.core.PersistentQueue(this__17116.meta,(this__17116.count - 1),f1__17118,this__17116.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__17116.meta,(this__17116.count - 1),cljs.core.seq.call(null,this__17116.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17119 = this;
var h__8007__auto____17120 = this__17119.__hash;
if(!((h__8007__auto____17120 == null)))
{return h__8007__auto____17120;
} else
{var h__8007__auto____17121 = cljs.core.hash_coll.call(null,coll);
this__17119.__hash = h__8007__auto____17121;
return h__8007__auto____17121;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17122 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17123 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17124 = this;
return cljs.core.first.call(null,this__17124.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17125 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17126 = this;
var rear__17127 = cljs.core.seq.call(null,this__17126.rear);
if(cljs.core.truth_((function (){var or__4238__auto____17128 = this__17126.front;
if(cljs.core.truth_(or__4238__auto____17128))
{return or__4238__auto____17128;
} else
{return rear__17127;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__17126.front,cljs.core.seq.call(null,rear__17127),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17129 = this;
return (new cljs.core.PersistentQueue(meta,this__17129.count,this__17129.front,this__17129.rear,this__17129.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17130 = this;
if(cljs.core.truth_(this__17130.front))
{return (new cljs.core.PersistentQueue(this__17130.meta,(this__17130.count + 1),this__17130.front,cljs.core.conj.call(null,(function (){var or__4238__auto____17131 = this__17130.rear;
if(cljs.core.truth_(or__4238__auto____17131))
{return or__4238__auto____17131;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__17130.meta,(this__17130.count + 1),cljs.core.conj.call(null,this__17130.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__17132 = this;
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
var len__17135 = array.length;
var i__17136 = 0;
while(true){
if((i__17136 < len__17135))
{if((k === (array[i__17136])))
{return i__17136;
} else
{{
var G__17137 = (i__17136 + incr);
i__17136 = G__17137;
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
var a__17140 = cljs.core.hash.call(null,a);
var b__17141 = cljs.core.hash.call(null,b);
if((a__17140 < b__17141))
{return -1;
} else
{if((a__17140 > b__17141))
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
var ks__17149 = m.keys;
var len__17150 = ks__17149.length;
var so__17151 = m.strobj;
var out__17152 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__17153 = 0;
var out__17154 = cljs.core.transient$.call(null,out__17152);
while(true){
if((i__17153 < len__17150))
{var k__17155 = (ks__17149[i__17153]);
{
var G__17156 = (i__17153 + 1);
var G__17157 = cljs.core.assoc_BANG_.call(null,out__17154,k__17155,(so__17151[k__17155]));
i__17153 = G__17156;
out__17154 = G__17157;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__17154,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__17163 = {};
var l__17164 = ks.length;
var i__17165 = 0;
while(true){
if((i__17165 < l__17164))
{var k__17166 = (ks[i__17165]);
(new_obj__17163[k__17166] = (obj[k__17166]));
{
var G__17167 = (i__17165 + 1);
i__17165 = G__17167;
continue;
}
} else
{}
break;
}
return new_obj__17163;
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
this.cljs$lang$protocol_mask$partition0$ = 15075087;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__17170 = this;
var this__17171 = this;
return cljs.core.pr_str.call(null,this__17171);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17172 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17173 = this;
if((function (){var and__4236__auto____17174 = goog.isString(k);
if(and__4236__auto____17174)
{return !((cljs.core.scan_array.call(null,1,k,this__17173.keys) == null));
} else
{return and__4236__auto____17174;
}
})())
{return (this__17173.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17175 = this;
return this__17175.meta;
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17176 = this;
return this__17176.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17177 = this;
var h__8007__auto____17178 = this__17177.__hash;
if(!((h__8007__auto____17178 == null)))
{return h__8007__auto____17178;
} else
{var h__8007__auto____17179 = cljs.core.hash_imap.call(null,coll);
this__17177.__hash = h__8007__auto____17179;
return h__8007__auto____17179;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17180 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__17181 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17182 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__17182.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17183 = this;
if((function (){var and__4236__auto____17184 = goog.isString(k);
if(and__4236__auto____17184)
{return !((cljs.core.scan_array.call(null,1,k,this__17183.keys) == null));
} else
{return and__4236__auto____17184;
}
})())
{var new_keys__17185 = this__17183.keys.slice();
var new_strobj__17186 = cljs.core.obj_clone.call(null,this__17183.strobj,this__17183.keys);
new_keys__17185.splice(cljs.core.scan_array.call(null,1,k,new_keys__17185),1);
cljs.core.js_delete.call(null,new_strobj__17186,k);
return (new cljs.core.ObjMap(this__17183.meta,new_keys__17185,new_strobj__17186,(this__17183.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17187 = this;
if(goog.isString(k))
{if((function (){var or__4238__auto____17188 = (this__17187.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__4238__auto____17188)
{return or__4238__auto____17188;
} else
{return (this__17187.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__17187.keys) == null)))
{var new_strobj__17189 = cljs.core.obj_clone.call(null,this__17187.strobj,this__17187.keys);
(new_strobj__17189[k] = v);
return (new cljs.core.ObjMap(this__17187.meta,this__17187.keys,new_strobj__17189,(this__17187.update_count + 1),null));
} else
{var new_strobj__17190 = cljs.core.obj_clone.call(null,this__17187.strobj,this__17187.keys);
var new_keys__17191 = this__17187.keys.slice();
(new_strobj__17190[k] = v);
new_keys__17191.push(k);
return (new cljs.core.ObjMap(this__17187.meta,new_keys__17191,new_strobj__17190,(this__17187.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17192 = this;
if((function (){var and__4236__auto____17193 = goog.isString(k);
if(and__4236__auto____17193)
{return !((cljs.core.scan_array.call(null,1,k,this__17192.keys) == null));
} else
{return and__4236__auto____17193;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17194 = this;
if((this__17194.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__17158_SHARP_){
return cljs.core.vector.call(null,p1__17158_SHARP_,(this__17194.strobj[p1__17158_SHARP_]));
}),this__17194.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17195 = this;
return (new cljs.core.ObjMap(meta,this__17195.keys,this__17195.strobj,this__17195.update_count,this__17195.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17196 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__17205 = null;
var G__17205__2 = (function (this_sym17197,k){
var this__17199 = this;
var this_sym17197__17200 = this;
var coll__17201 = this_sym17197__17200;
return coll__17201.cljs$core$ILookup$_lookup$arity$2(coll__17201,k);
});
var G__17205__3 = (function (this_sym17198,k,not_found){
var this__17199 = this;
var this_sym17198__17202 = this;
var coll__17203 = this_sym17198__17202;
return coll__17203.cljs$core$ILookup$_lookup$arity$3(coll__17203,k,not_found);
});
G__17205 = function(this_sym17198,k,not_found){
switch(arguments.length){
case 2:
return G__17205__2.call(this,this_sym17198,k);
case 3:
return G__17205__3.call(this,this_sym17198,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17205;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym17168,args17169){
var this__17204 = this;
return this_sym17168.call.apply(this_sym17168,[this_sym17168].concat(args17169.slice()));
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
this.cljs$lang$protocol_mask$partition0$ = 15075087;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.toString = (function (){
var this__17209 = this;
var this__17210 = this;
return cljs.core.pr_str.call(null,this__17210);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17211 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17212 = this;
var bucket__17213 = (this__17212.hashobj[cljs.core.hash.call(null,k)]);
var i__17214 = (cljs.core.truth_(bucket__17213)?cljs.core.scan_array.call(null,2,k,bucket__17213):null);
if(cljs.core.truth_(i__17214))
{return (bucket__17213[(i__17214 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17215 = this;
return this__17215.meta;
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17216 = this;
return this__17216.count;
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17217 = this;
var h__8007__auto____17218 = this__17217.__hash;
if(!((h__8007__auto____17218 == null)))
{return h__8007__auto____17218;
} else
{var h__8007__auto____17219 = cljs.core.hash_imap.call(null,coll);
this__17217.__hash = h__8007__auto____17219;
return h__8007__auto____17219;
}
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17220 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17221 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__17221.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17222 = this;
var h__17223 = cljs.core.hash.call(null,k);
var bucket__17224 = (this__17222.hashobj[h__17223]);
var i__17225 = (cljs.core.truth_(bucket__17224)?cljs.core.scan_array.call(null,2,k,bucket__17224):null);
if(cljs.core.not.call(null,i__17225))
{return coll;
} else
{var new_hashobj__17226 = goog.object.clone(this__17222.hashobj);
if((3 > bucket__17224.length))
{cljs.core.js_delete.call(null,new_hashobj__17226,h__17223);
} else
{var new_bucket__17227 = bucket__17224.slice();
new_bucket__17227.splice(i__17225,2);
(new_hashobj__17226[h__17223] = new_bucket__17227);
}
return (new cljs.core.HashMap(this__17222.meta,(this__17222.count - 1),new_hashobj__17226,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17228 = this;
var h__17229 = cljs.core.hash.call(null,k);
var bucket__17230 = (this__17228.hashobj[h__17229]);
if(cljs.core.truth_(bucket__17230))
{var new_bucket__17231 = bucket__17230.slice();
var new_hashobj__17232 = goog.object.clone(this__17228.hashobj);
(new_hashobj__17232[h__17229] = new_bucket__17231);
var temp__4423__auto____17233 = cljs.core.scan_array.call(null,2,k,new_bucket__17231);
if(cljs.core.truth_(temp__4423__auto____17233))
{var i__17234 = temp__4423__auto____17233;
(new_bucket__17231[(i__17234 + 1)] = v);
return (new cljs.core.HashMap(this__17228.meta,this__17228.count,new_hashobj__17232,null));
} else
{new_bucket__17231.push(k,v);
return (new cljs.core.HashMap(this__17228.meta,(this__17228.count + 1),new_hashobj__17232,null));
}
} else
{var new_hashobj__17235 = goog.object.clone(this__17228.hashobj);
(new_hashobj__17235[h__17229] = [k,v]);
return (new cljs.core.HashMap(this__17228.meta,(this__17228.count + 1),new_hashobj__17235,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17236 = this;
var bucket__17237 = (this__17236.hashobj[cljs.core.hash.call(null,k)]);
var i__17238 = (cljs.core.truth_(bucket__17237)?cljs.core.scan_array.call(null,2,k,bucket__17237):null);
if(cljs.core.truth_(i__17238))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17239 = this;
if((this__17239.count > 0))
{var hashes__17240 = cljs.core.js_keys.call(null,this__17239.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__17206_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__17239.hashobj[p1__17206_SHARP_])));
}),hashes__17240);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17241 = this;
return (new cljs.core.HashMap(meta,this__17241.count,this__17241.hashobj,this__17241.__hash));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17242 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__17251 = null;
var G__17251__2 = (function (this_sym17243,k){
var this__17245 = this;
var this_sym17243__17246 = this;
var coll__17247 = this_sym17243__17246;
return coll__17247.cljs$core$ILookup$_lookup$arity$2(coll__17247,k);
});
var G__17251__3 = (function (this_sym17244,k,not_found){
var this__17245 = this;
var this_sym17244__17248 = this;
var coll__17249 = this_sym17244__17248;
return coll__17249.cljs$core$ILookup$_lookup$arity$3(coll__17249,k,not_found);
});
G__17251 = function(this_sym17244,k,not_found){
switch(arguments.length){
case 2:
return G__17251__2.call(this,this_sym17244,k);
case 3:
return G__17251__3.call(this,this_sym17244,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17251;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym17207,args17208){
var this__17250 = this;
return this_sym17207.call.apply(this_sym17207,[this_sym17207].concat(args17208.slice()));
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__17252 = ks.length;
var i__17253 = 0;
var out__17254 = cljs.core.HashMap.EMPTY;
while(true){
if((i__17253 < len__17252))
{{
var G__17255 = (i__17253 + 1);
var G__17256 = cljs.core.assoc.call(null,out__17254,(ks[i__17253]),(vs[i__17253]));
i__17253 = G__17255;
out__17254 = G__17256;
continue;
}
} else
{return out__17254;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__17260 = m.arr;
var len__17261 = arr__17260.length;
var i__17262 = 0;
while(true){
if((len__17261 <= i__17262))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__17260[i__17262]),k))
{return i__17262;
} else
{if("\uFDD0'else")
{{
var G__17263 = (i__17262 + 2);
i__17262 = G__17263;
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
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__17266 = this;
var this__17267 = this;
return cljs.core.pr_str.call(null,this__17267);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17268 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17269 = this;
var idx__17270 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__17270 === -1))
{return not_found;
} else
{return (this__17269.arr[(idx__17270 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17271 = this;
var len__17272 = this__17271.arr.length;
var i__17273 = 0;
var init__17274 = init;
while(true){
if((i__17273 < len__17272))
{var init__17275 = f.call(null,init__17274,(this__17271.arr[i__17273]),(this__17271.arr[(i__17273 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__17275))
{return cljs.core.deref.call(null,init__17275);
} else
{{
var G__17311 = (i__17273 + 2);
var G__17312 = init__17275;
i__17273 = G__17311;
init__17274 = G__17312;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17276 = this;
return this__17276.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17277 = this;
return this__17277.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17278 = this;
var h__8007__auto____17279 = this__17278.__hash;
if(!((h__8007__auto____17279 == null)))
{return h__8007__auto____17279;
} else
{var h__8007__auto____17280 = cljs.core.hash_imap.call(null,coll);
this__17278.__hash = h__8007__auto____17280;
return h__8007__auto____17280;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17281 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__17282 = this;
return (new cljs.core.TransientArrayMap({},this__17282.arr.length,this__17282.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17283 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17283.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17284 = this;
var idx__17285 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__17285 >= 0))
{var len__17286 = this__17284.arr.length;
var new_len__17287 = (len__17286 - 2);
if((new_len__17287 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__17288 = cljs.core.make_array.call(null,new_len__17287);
var s__17289 = 0;
var d__17290 = 0;
while(true){
if((s__17289 >= len__17286))
{return (new cljs.core.PersistentArrayMap(this__17284.meta,(this__17284.cnt - 1),new_arr__17288,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__17284.arr[s__17289])))
{{
var G__17313 = (s__17289 + 2);
var G__17314 = d__17290;
s__17289 = G__17313;
d__17290 = G__17314;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__17288[d__17290] = (this__17284.arr[s__17289]));
(new_arr__17288[(d__17290 + 1)] = (this__17284.arr[(s__17289 + 1)]));
{
var G__17315 = (s__17289 + 2);
var G__17316 = (d__17290 + 2);
s__17289 = G__17315;
d__17290 = G__17316;
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
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17291 = this;
var idx__17292 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__17292 === -1))
{if((this__17291.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__17291.meta,(this__17291.cnt + 1),(function (){var G__17293__17294 = this__17291.arr.slice();
G__17293__17294.push(k);
G__17293__17294.push(v);
return G__17293__17294;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__17291.arr[(idx__17292 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__17291.meta,this__17291.cnt,(function (){var G__17295__17296 = this__17291.arr.slice();
(G__17295__17296[(idx__17292 + 1)] = v);
return G__17295__17296;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17297 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17298 = this;
if((this__17298.cnt > 0))
{var len__17299 = this__17298.arr.length;
var array_map_seq__17300 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__17299))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__17298.arr[i]),(this__17298.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__17300.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17301 = this;
return (new cljs.core.PersistentArrayMap(meta,this__17301.cnt,this__17301.arr,this__17301.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17302 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__17317 = null;
var G__17317__2 = (function (this_sym17303,k){
var this__17305 = this;
var this_sym17303__17306 = this;
var coll__17307 = this_sym17303__17306;
return coll__17307.cljs$core$ILookup$_lookup$arity$2(coll__17307,k);
});
var G__17317__3 = (function (this_sym17304,k,not_found){
var this__17305 = this;
var this_sym17304__17308 = this;
var coll__17309 = this_sym17304__17308;
return coll__17309.cljs$core$ILookup$_lookup$arity$3(coll__17309,k,not_found);
});
G__17317 = function(this_sym17304,k,not_found){
switch(arguments.length){
case 2:
return G__17317__2.call(this,this_sym17304,k);
case 3:
return G__17317__3.call(this,this_sym17304,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17317;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym17264,args17265){
var this__17310 = this;
return this_sym17264.call.apply(this_sym17264,[this_sym17264].concat(args17265.slice()));
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__17318 = cljs.core.count.call(null,ks);
var i__17319 = 0;
var out__17320 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__17319 < len__17318))
{{
var G__17321 = (i__17319 + 1);
var G__17322 = cljs.core.assoc_BANG_.call(null,out__17320,(ks[i__17319]),(vs[i__17319]));
i__17319 = G__17321;
out__17320 = G__17322;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17320);
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
this.cljs$lang$protocol_mask$partition0$ = 258;
this.cljs$lang$protocol_mask$partition1$ = 14;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__17323 = this;
if(cljs.core.truth_(this__17323.editable_QMARK_))
{return cljs.core.quot.call(null,this__17323.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__17324 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__17325 = this;
if(cljs.core.truth_(this__17325.editable_QMARK_))
{var idx__17326 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__17326 === -1))
{return not_found;
} else
{return (this__17325.arr[(idx__17326 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__17327 = this;
if(cljs.core.truth_(this__17327.editable_QMARK_))
{if((function (){var G__17328__17329 = o;
if(G__17328__17329)
{if((function (){var or__4238__auto____17330 = (G__17328__17329.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__4238__auto____17330)
{return or__4238__auto____17330;
} else
{return G__17328__17329.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__17328__17329.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17328__17329);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17328__17329);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__17331 = cljs.core.seq.call(null,o);
var tcoll__17332 = tcoll;
while(true){
var temp__4423__auto____17333 = cljs.core.first.call(null,es__17331);
if(cljs.core.truth_(temp__4423__auto____17333))
{var e__17334 = temp__4423__auto____17333;
{
var G__17342 = cljs.core.next.call(null,es__17331);
var G__17343 = tcoll__17332.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__17332,cljs.core.key.call(null,e__17334),cljs.core.val.call(null,e__17334));
es__17331 = G__17342;
tcoll__17332 = G__17343;
continue;
}
} else
{return tcoll__17332;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17335 = this;
if(cljs.core.truth_(this__17335.editable_QMARK_))
{this__17335.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__17335.len,2),this__17335.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__17336 = this;
if(cljs.core.truth_(this__17336.editable_QMARK_))
{var idx__17337 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__17337 === -1))
{if(((this__17336.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__17336.len = (this__17336.len + 2);
this__17336.arr.push(key);
this__17336.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__17336.len,this__17336.arr),key,val);
}
} else
{if((val === (this__17336.arr[(idx__17337 + 1)])))
{return tcoll;
} else
{(this__17336.arr[(idx__17337 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__17338 = this;
if(cljs.core.truth_(this__17338.editable_QMARK_))
{var idx__17339 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__17339 >= 0))
{(this__17338.arr[idx__17339] = (this__17338.arr[(this__17338.len - 2)]));
(this__17338.arr[(idx__17339 + 1)] = (this__17338.arr[(this__17338.len - 1)]));
var G__17340__17341 = this__17338.arr;
G__17340__17341.pop();
G__17340__17341.pop();
G__17340__17341;
this__17338.len = (this__17338.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__17346 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__17347 = 0;
while(true){
if((i__17347 < len))
{{
var G__17348 = cljs.core.assoc_BANG_.call(null,out__17346,(arr[i__17347]),(arr[(i__17347 + 1)]));
var G__17349 = (i__17347 + 2);
out__17346 = G__17348;
i__17347 = G__17349;
continue;
}
} else
{return out__17346;
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
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__8125__auto__){
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
var G__17354__17355 = arr.slice();
(G__17354__17355[i] = a);
return G__17354__17355;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__17356__17357 = arr.slice();
(G__17356__17357[i] = a);
(G__17356__17357[j] = b);
return G__17356__17357;
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
var new_arr__17359 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__17359,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__17359,(2 * i),(new_arr__17359.length - (2 * i)));
return new_arr__17359;
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
var editable__17362 = inode.ensure_editable(edit);
(editable__17362.arr[i] = a);
return editable__17362;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__17363 = inode.ensure_editable(edit);
(editable__17363.arr[i] = a);
(editable__17363.arr[j] = b);
return editable__17363;
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
var len__17370 = arr.length;
var i__17371 = 0;
var init__17372 = init;
while(true){
if((i__17371 < len__17370))
{var init__17375 = (function (){var k__17373 = (arr[i__17371]);
if(!((k__17373 == null)))
{return f.call(null,init__17372,k__17373,(arr[(i__17371 + 1)]));
} else
{var node__17374 = (arr[(i__17371 + 1)]);
if(!((node__17374 == null)))
{return node__17374.kv_reduce(f,init__17372);
} else
{return init__17372;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__17375))
{return cljs.core.deref.call(null,init__17375);
} else
{{
var G__17376 = (i__17371 + 2);
var G__17377 = init__17375;
i__17371 = G__17376;
init__17372 = G__17377;
continue;
}
}
} else
{return init__17372;
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
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__17378 = this;
var inode__17379 = this;
if((e === this__17378.edit))
{return inode__17379;
} else
{var n__17380 = cljs.core.bit_count.call(null,this__17378.bitmap);
var new_arr__17381 = cljs.core.make_array.call(null,(((n__17380 < 0))?4:(2 * (n__17380 + 1))));
cljs.core.array_copy.call(null,this__17378.arr,0,new_arr__17381,0,(2 * n__17380));
return (new cljs.core.BitmapIndexedNode(e,this__17378.bitmap,new_arr__17381));
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__17382 = this;
var inode__17383 = this;
var bit__17384 = (1 << ((hash >>> shift) & 0x01f));
if(((this__17382.bitmap & bit__17384) === 0))
{return inode__17383;
} else
{var idx__17385 = cljs.core.bitmap_indexed_node_index.call(null,this__17382.bitmap,bit__17384);
var key_or_nil__17386 = (this__17382.arr[(2 * idx__17385)]);
var val_or_node__17387 = (this__17382.arr[((2 * idx__17385) + 1)]);
if((key_or_nil__17386 == null))
{var n__17388 = val_or_node__17387.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__17388 === val_or_node__17387))
{return inode__17383;
} else
{if(!((n__17388 == null)))
{return cljs.core.edit_and_set.call(null,inode__17383,edit,((2 * idx__17385) + 1),n__17388);
} else
{if((this__17382.bitmap === bit__17384))
{return null;
} else
{if("\uFDD0'else")
{return inode__17383.edit_and_remove_pair(edit,bit__17384,idx__17385);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__17386))
{(removed_leaf_QMARK_[0] = true);
return inode__17383.edit_and_remove_pair(edit,bit__17384,idx__17385);
} else
{if("\uFDD0'else")
{return inode__17383;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__17389 = this;
var inode__17390 = this;
if((this__17389.bitmap === bit))
{return null;
} else
{var editable__17391 = inode__17390.ensure_editable(e);
var earr__17392 = editable__17391.arr;
var len__17393 = earr__17392.length;
editable__17391.bitmap = (bit ^ editable__17391.bitmap);
cljs.core.array_copy.call(null,earr__17392,(2 * (i + 1)),earr__17392,(2 * i),(len__17393 - (2 * (i + 1))));
(earr__17392[(len__17393 - 2)] = null);
(earr__17392[(len__17393 - 1)] = null);
return editable__17391;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__17394 = this;
var inode__17395 = this;
return cljs.core.create_inode_seq.call(null,this__17394.arr);
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__17396 = this;
var inode__17397 = this;
return cljs.core.inode_kv_reduce.call(null,this__17396.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__17398 = this;
var inode__17399 = this;
var bit__17400 = (1 << ((hash >>> shift) & 0x01f));
if(((this__17398.bitmap & bit__17400) === 0))
{return not_found;
} else
{var idx__17401 = cljs.core.bitmap_indexed_node_index.call(null,this__17398.bitmap,bit__17400);
var key_or_nil__17402 = (this__17398.arr[(2 * idx__17401)]);
var val_or_node__17403 = (this__17398.arr[((2 * idx__17401) + 1)]);
if((key_or_nil__17402 == null))
{return val_or_node__17403.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__17402))
{return val_or_node__17403;
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
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__17404 = this;
var inode__17405 = this;
var bit__17406 = (1 << ((hash >>> shift) & 0x01f));
var idx__17407 = cljs.core.bitmap_indexed_node_index.call(null,this__17404.bitmap,bit__17406);
if(((this__17404.bitmap & bit__17406) === 0))
{var n__17408 = cljs.core.bit_count.call(null,this__17404.bitmap);
if(((2 * n__17408) < this__17404.arr.length))
{var editable__17409 = inode__17405.ensure_editable(edit);
var earr__17410 = editable__17409.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__17410,(2 * idx__17407),earr__17410,(2 * (idx__17407 + 1)),(2 * (n__17408 - idx__17407)));
(earr__17410[(2 * idx__17407)] = key);
(earr__17410[((2 * idx__17407) + 1)] = val);
editable__17409.bitmap = (editable__17409.bitmap | bit__17406);
return editable__17409;
} else
{if((n__17408 >= 16))
{var nodes__17411 = cljs.core.make_array.call(null,32);
var jdx__17412 = ((hash >>> shift) & 0x01f);
(nodes__17411[jdx__17412] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__17413 = 0;
var j__17414 = 0;
while(true){
if((i__17413 < 32))
{if((((this__17404.bitmap >>> i__17413) & 1) === 0))
{{
var G__17446 = (i__17413 + 1);
var G__17447 = j__17414;
i__17413 = G__17446;
j__17414 = G__17447;
continue;
}
} else
{(nodes__17411[i__17413] = ((!(((this__17404.arr[j__17414]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__17404.arr[j__17414])),(this__17404.arr[j__17414]),(this__17404.arr[(j__17414 + 1)]),added_leaf_QMARK_):(this__17404.arr[(j__17414 + 1)])));
{
var G__17448 = (i__17413 + 1);
var G__17449 = (j__17414 + 2);
i__17413 = G__17448;
j__17414 = G__17449;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__17408 + 1),nodes__17411));
} else
{if("\uFDD0'else")
{var new_arr__17415 = cljs.core.make_array.call(null,(2 * (n__17408 + 4)));
cljs.core.array_copy.call(null,this__17404.arr,0,new_arr__17415,0,(2 * idx__17407));
(new_arr__17415[(2 * idx__17407)] = key);
(new_arr__17415[((2 * idx__17407) + 1)] = val);
cljs.core.array_copy.call(null,this__17404.arr,(2 * idx__17407),new_arr__17415,(2 * (idx__17407 + 1)),(2 * (n__17408 - idx__17407)));
added_leaf_QMARK_.val = true;
var editable__17416 = inode__17405.ensure_editable(edit);
editable__17416.arr = new_arr__17415;
editable__17416.bitmap = (editable__17416.bitmap | bit__17406);
return editable__17416;
} else
{return null;
}
}
}
} else
{var key_or_nil__17417 = (this__17404.arr[(2 * idx__17407)]);
var val_or_node__17418 = (this__17404.arr[((2 * idx__17407) + 1)]);
if((key_or_nil__17417 == null))
{var n__17419 = val_or_node__17418.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__17419 === val_or_node__17418))
{return inode__17405;
} else
{return cljs.core.edit_and_set.call(null,inode__17405,edit,((2 * idx__17407) + 1),n__17419);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__17417))
{if((val === val_or_node__17418))
{return inode__17405;
} else
{return cljs.core.edit_and_set.call(null,inode__17405,edit,((2 * idx__17407) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__17405,edit,(2 * idx__17407),null,((2 * idx__17407) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__17417,val_or_node__17418,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__17420 = this;
var inode__17421 = this;
var bit__17422 = (1 << ((hash >>> shift) & 0x01f));
var idx__17423 = cljs.core.bitmap_indexed_node_index.call(null,this__17420.bitmap,bit__17422);
if(((this__17420.bitmap & bit__17422) === 0))
{var n__17424 = cljs.core.bit_count.call(null,this__17420.bitmap);
if((n__17424 >= 16))
{var nodes__17425 = cljs.core.make_array.call(null,32);
var jdx__17426 = ((hash >>> shift) & 0x01f);
(nodes__17425[jdx__17426] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__17427 = 0;
var j__17428 = 0;
while(true){
if((i__17427 < 32))
{if((((this__17420.bitmap >>> i__17427) & 1) === 0))
{{
var G__17450 = (i__17427 + 1);
var G__17451 = j__17428;
i__17427 = G__17450;
j__17428 = G__17451;
continue;
}
} else
{(nodes__17425[i__17427] = ((!(((this__17420.arr[j__17428]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__17420.arr[j__17428])),(this__17420.arr[j__17428]),(this__17420.arr[(j__17428 + 1)]),added_leaf_QMARK_):(this__17420.arr[(j__17428 + 1)])));
{
var G__17452 = (i__17427 + 1);
var G__17453 = (j__17428 + 2);
i__17427 = G__17452;
j__17428 = G__17453;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__17424 + 1),nodes__17425));
} else
{var new_arr__17429 = cljs.core.make_array.call(null,(2 * (n__17424 + 1)));
cljs.core.array_copy.call(null,this__17420.arr,0,new_arr__17429,0,(2 * idx__17423));
(new_arr__17429[(2 * idx__17423)] = key);
(new_arr__17429[((2 * idx__17423) + 1)] = val);
cljs.core.array_copy.call(null,this__17420.arr,(2 * idx__17423),new_arr__17429,(2 * (idx__17423 + 1)),(2 * (n__17424 - idx__17423)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__17420.bitmap | bit__17422),new_arr__17429));
}
} else
{var key_or_nil__17430 = (this__17420.arr[(2 * idx__17423)]);
var val_or_node__17431 = (this__17420.arr[((2 * idx__17423) + 1)]);
if((key_or_nil__17430 == null))
{var n__17432 = val_or_node__17431.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__17432 === val_or_node__17431))
{return inode__17421;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__17420.bitmap,cljs.core.clone_and_set.call(null,this__17420.arr,((2 * idx__17423) + 1),n__17432)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__17430))
{if((val === val_or_node__17431))
{return inode__17421;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__17420.bitmap,cljs.core.clone_and_set.call(null,this__17420.arr,((2 * idx__17423) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__17420.bitmap,cljs.core.clone_and_set.call(null,this__17420.arr,(2 * idx__17423),null,((2 * idx__17423) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__17430,val_or_node__17431,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__17433 = this;
var inode__17434 = this;
var bit__17435 = (1 << ((hash >>> shift) & 0x01f));
if(((this__17433.bitmap & bit__17435) === 0))
{return not_found;
} else
{var idx__17436 = cljs.core.bitmap_indexed_node_index.call(null,this__17433.bitmap,bit__17435);
var key_or_nil__17437 = (this__17433.arr[(2 * idx__17436)]);
var val_or_node__17438 = (this__17433.arr[((2 * idx__17436) + 1)]);
if((key_or_nil__17437 == null))
{return val_or_node__17438.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__17437))
{return cljs.core.PersistentVector.fromArray([key_or_nil__17437,val_or_node__17438], true);
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
var this__17439 = this;
var inode__17440 = this;
var bit__17441 = (1 << ((hash >>> shift) & 0x01f));
if(((this__17439.bitmap & bit__17441) === 0))
{return inode__17440;
} else
{var idx__17442 = cljs.core.bitmap_indexed_node_index.call(null,this__17439.bitmap,bit__17441);
var key_or_nil__17443 = (this__17439.arr[(2 * idx__17442)]);
var val_or_node__17444 = (this__17439.arr[((2 * idx__17442) + 1)]);
if((key_or_nil__17443 == null))
{var n__17445 = val_or_node__17444.inode_without((shift + 5),hash,key);
if((n__17445 === val_or_node__17444))
{return inode__17440;
} else
{if(!((n__17445 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__17439.bitmap,cljs.core.clone_and_set.call(null,this__17439.arr,((2 * idx__17442) + 1),n__17445)));
} else
{if((this__17439.bitmap === bit__17441))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__17439.bitmap ^ bit__17441),cljs.core.remove_pair.call(null,this__17439.arr,idx__17442)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__17443))
{return (new cljs.core.BitmapIndexedNode(null,(this__17439.bitmap ^ bit__17441),cljs.core.remove_pair.call(null,this__17439.arr,idx__17442)));
} else
{if("\uFDD0'else")
{return inode__17440;
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
var arr__17461 = array_node.arr;
var len__17462 = (2 * (array_node.cnt - 1));
var new_arr__17463 = cljs.core.make_array.call(null,len__17462);
var i__17464 = 0;
var j__17465 = 1;
var bitmap__17466 = 0;
while(true){
if((i__17464 < len__17462))
{if((function (){var and__4236__auto____17467 = !((i__17464 === idx));
if(and__4236__auto____17467)
{return !(((arr__17461[i__17464]) == null));
} else
{return and__4236__auto____17467;
}
})())
{(new_arr__17463[j__17465] = (arr__17461[i__17464]));
{
var G__17468 = (i__17464 + 1);
var G__17469 = (j__17465 + 2);
var G__17470 = (bitmap__17466 | (1 << i__17464));
i__17464 = G__17468;
j__17465 = G__17469;
bitmap__17466 = G__17470;
continue;
}
} else
{{
var G__17471 = (i__17464 + 1);
var G__17472 = j__17465;
var G__17473 = bitmap__17466;
i__17464 = G__17471;
j__17465 = G__17472;
bitmap__17466 = G__17473;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__17466,new_arr__17463));
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
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__17474 = this;
var inode__17475 = this;
if((e === this__17474.edit))
{return inode__17475;
} else
{return (new cljs.core.ArrayNode(e,this__17474.cnt,this__17474.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__17476 = this;
var inode__17477 = this;
var idx__17478 = ((hash >>> shift) & 0x01f);
var node__17479 = (this__17476.arr[idx__17478]);
if((node__17479 == null))
{return inode__17477;
} else
{var n__17480 = node__17479.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__17480 === node__17479))
{return inode__17477;
} else
{if((n__17480 == null))
{if((this__17476.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__17477,edit,idx__17478);
} else
{var editable__17481 = cljs.core.edit_and_set.call(null,inode__17477,edit,idx__17478,n__17480);
editable__17481.cnt = (editable__17481.cnt - 1);
return editable__17481;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__17477,edit,idx__17478,n__17480);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__17482 = this;
var inode__17483 = this;
return cljs.core.create_array_node_seq.call(null,this__17482.arr);
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__17484 = this;
var inode__17485 = this;
var len__17486 = this__17484.arr.length;
var i__17487 = 0;
var init__17488 = init;
while(true){
if((i__17487 < len__17486))
{var node__17489 = (this__17484.arr[i__17487]);
if(!((node__17489 == null)))
{var init__17490 = node__17489.kv_reduce(f,init__17488);
if(cljs.core.reduced_QMARK_.call(null,init__17490))
{return cljs.core.deref.call(null,init__17490);
} else
{{
var G__17515 = (i__17487 + 1);
var G__17516 = init__17490;
i__17487 = G__17515;
init__17488 = G__17516;
continue;
}
}
} else
{return null;
}
} else
{return init__17488;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__17491 = this;
var inode__17492 = this;
var idx__17493 = ((hash >>> shift) & 0x01f);
var node__17494 = (this__17491.arr[idx__17493]);
if(!((node__17494 == null)))
{return node__17494.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__17495 = this;
var inode__17496 = this;
var idx__17497 = ((hash >>> shift) & 0x01f);
var node__17498 = (this__17495.arr[idx__17497]);
if((node__17498 == null))
{var editable__17499 = cljs.core.edit_and_set.call(null,inode__17496,edit,idx__17497,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__17499.cnt = (editable__17499.cnt + 1);
return editable__17499;
} else
{var n__17500 = node__17498.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__17500 === node__17498))
{return inode__17496;
} else
{return cljs.core.edit_and_set.call(null,inode__17496,edit,idx__17497,n__17500);
}
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__17501 = this;
var inode__17502 = this;
var idx__17503 = ((hash >>> shift) & 0x01f);
var node__17504 = (this__17501.arr[idx__17503]);
if((node__17504 == null))
{return (new cljs.core.ArrayNode(null,(this__17501.cnt + 1),cljs.core.clone_and_set.call(null,this__17501.arr,idx__17503,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__17505 = node__17504.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__17505 === node__17504))
{return inode__17502;
} else
{return (new cljs.core.ArrayNode(null,this__17501.cnt,cljs.core.clone_and_set.call(null,this__17501.arr,idx__17503,n__17505)));
}
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__17506 = this;
var inode__17507 = this;
var idx__17508 = ((hash >>> shift) & 0x01f);
var node__17509 = (this__17506.arr[idx__17508]);
if(!((node__17509 == null)))
{return node__17509.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__17510 = this;
var inode__17511 = this;
var idx__17512 = ((hash >>> shift) & 0x01f);
var node__17513 = (this__17510.arr[idx__17512]);
if(!((node__17513 == null)))
{var n__17514 = node__17513.inode_without((shift + 5),hash,key);
if((n__17514 === node__17513))
{return inode__17511;
} else
{if((n__17514 == null))
{if((this__17510.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__17511,null,idx__17512);
} else
{return (new cljs.core.ArrayNode(null,(this__17510.cnt - 1),cljs.core.clone_and_set.call(null,this__17510.arr,idx__17512,n__17514)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__17510.cnt,cljs.core.clone_and_set.call(null,this__17510.arr,idx__17512,n__17514)));
} else
{return null;
}
}
}
} else
{return inode__17511;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__17519 = (2 * cnt);
var i__17520 = 0;
while(true){
if((i__17520 < lim__17519))
{if(cljs.core.key_test.call(null,key,(arr[i__17520])))
{return i__17520;
} else
{{
var G__17521 = (i__17520 + 2);
i__17520 = G__17521;
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
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__17522 = this;
var inode__17523 = this;
if((e === this__17522.edit))
{return inode__17523;
} else
{var new_arr__17524 = cljs.core.make_array.call(null,(2 * (this__17522.cnt + 1)));
cljs.core.array_copy.call(null,this__17522.arr,0,new_arr__17524,0,(2 * this__17522.cnt));
return (new cljs.core.HashCollisionNode(e,this__17522.collision_hash,this__17522.cnt,new_arr__17524));
}
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__17525 = this;
var inode__17526 = this;
var idx__17527 = cljs.core.hash_collision_node_find_index.call(null,this__17525.arr,this__17525.cnt,key);
if((idx__17527 === -1))
{return inode__17526;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__17525.cnt === 1))
{return null;
} else
{var editable__17528 = inode__17526.ensure_editable(edit);
var earr__17529 = editable__17528.arr;
(earr__17529[idx__17527] = (earr__17529[((2 * this__17525.cnt) - 2)]));
(earr__17529[(idx__17527 + 1)] = (earr__17529[((2 * this__17525.cnt) - 1)]));
(earr__17529[((2 * this__17525.cnt) - 1)] = null);
(earr__17529[((2 * this__17525.cnt) - 2)] = null);
editable__17528.cnt = (editable__17528.cnt - 1);
return editable__17528;
}
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__17530 = this;
var inode__17531 = this;
return cljs.core.create_inode_seq.call(null,this__17530.arr);
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__17532 = this;
var inode__17533 = this;
return cljs.core.inode_kv_reduce.call(null,this__17532.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__17534 = this;
var inode__17535 = this;
var idx__17536 = cljs.core.hash_collision_node_find_index.call(null,this__17534.arr,this__17534.cnt,key);
if((idx__17536 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__17534.arr[idx__17536])))
{return (this__17534.arr[(idx__17536 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__17537 = this;
var inode__17538 = this;
if((hash === this__17537.collision_hash))
{var idx__17539 = cljs.core.hash_collision_node_find_index.call(null,this__17537.arr,this__17537.cnt,key);
if((idx__17539 === -1))
{if((this__17537.arr.length > (2 * this__17537.cnt)))
{var editable__17540 = cljs.core.edit_and_set.call(null,inode__17538,edit,(2 * this__17537.cnt),key,((2 * this__17537.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__17540.cnt = (editable__17540.cnt + 1);
return editable__17540;
} else
{var len__17541 = this__17537.arr.length;
var new_arr__17542 = cljs.core.make_array.call(null,(len__17541 + 2));
cljs.core.array_copy.call(null,this__17537.arr,0,new_arr__17542,0,len__17541);
(new_arr__17542[len__17541] = key);
(new_arr__17542[(len__17541 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__17538.ensure_editable_array(edit,(this__17537.cnt + 1),new_arr__17542);
}
} else
{if(((this__17537.arr[(idx__17539 + 1)]) === val))
{return inode__17538;
} else
{return cljs.core.edit_and_set.call(null,inode__17538,edit,(idx__17539 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__17537.collision_hash >>> shift) & 0x01f)),[null,inode__17538,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__17543 = this;
var inode__17544 = this;
if((hash === this__17543.collision_hash))
{var idx__17545 = cljs.core.hash_collision_node_find_index.call(null,this__17543.arr,this__17543.cnt,key);
if((idx__17545 === -1))
{var len__17546 = this__17543.arr.length;
var new_arr__17547 = cljs.core.make_array.call(null,(len__17546 + 2));
cljs.core.array_copy.call(null,this__17543.arr,0,new_arr__17547,0,len__17546);
(new_arr__17547[len__17546] = key);
(new_arr__17547[(len__17546 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__17543.collision_hash,(this__17543.cnt + 1),new_arr__17547));
} else
{if(cljs.core._EQ_.call(null,(this__17543.arr[idx__17545]),val))
{return inode__17544;
} else
{return (new cljs.core.HashCollisionNode(null,this__17543.collision_hash,this__17543.cnt,cljs.core.clone_and_set.call(null,this__17543.arr,(idx__17545 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__17543.collision_hash >>> shift) & 0x01f)),[null,inode__17544])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__17548 = this;
var inode__17549 = this;
if((e === this__17548.edit))
{this__17548.arr = array;
this__17548.cnt = count;
return inode__17549;
} else
{return (new cljs.core.HashCollisionNode(this__17548.edit,this__17548.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__17550 = this;
var inode__17551 = this;
var idx__17552 = cljs.core.hash_collision_node_find_index.call(null,this__17550.arr,this__17550.cnt,key);
if((idx__17552 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__17550.arr[idx__17552])))
{return cljs.core.PersistentVector.fromArray([(this__17550.arr[idx__17552]),(this__17550.arr[(idx__17552 + 1)])], true);
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
var this__17553 = this;
var inode__17554 = this;
var idx__17555 = cljs.core.hash_collision_node_find_index.call(null,this__17553.arr,this__17553.cnt,key);
if((idx__17555 === -1))
{return inode__17554;
} else
{if((this__17553.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__17553.collision_hash,(this__17553.cnt - 1),cljs.core.remove_pair.call(null,this__17553.arr,cljs.core.quot.call(null,idx__17555,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__17560 = cljs.core.hash.call(null,key1);
if((key1hash__17560 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__17560,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___17561 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__17560,key1,val1,added_leaf_QMARK___17561).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___17561);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__17562 = cljs.core.hash.call(null,key1);
if((key1hash__17562 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__17562,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___17563 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__17562,key1,val1,added_leaf_QMARK___17563).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___17563);
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
this.cljs$lang$protocol_mask$partition0$ = 31850572;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__17564 = this;
var this__17565 = this;
return cljs.core.pr_str.call(null,this__17565);
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17566 = this;
return this__17566.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17567 = this;
var h__8007__auto____17568 = this__17567.__hash;
if(!((h__8007__auto____17568 == null)))
{return h__8007__auto____17568;
} else
{var h__8007__auto____17569 = cljs.core.hash_coll.call(null,coll);
this__17567.__hash = h__8007__auto____17569;
return h__8007__auto____17569;
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17571 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17571.meta);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17572 = this;
if((this__17572.s == null))
{return cljs.core.PersistentVector.fromArray([(this__17572.nodes[this__17572.i]),(this__17572.nodes[(this__17572.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__17572.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17573 = this;
if((this__17573.s == null))
{return cljs.core.create_inode_seq.call(null,this__17573.nodes,(this__17573.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__17573.nodes,this__17573.i,cljs.core.next.call(null,this__17573.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17574 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17575 = this;
return (new cljs.core.NodeSeq(meta,this__17575.nodes,this__17575.i,this__17575.s,this__17575.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17576 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__17583 = nodes.length;
var j__17584 = i;
while(true){
if((j__17584 < len__17583))
{if(!(((nodes[j__17584]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__17584,null,null));
} else
{var temp__4423__auto____17585 = (nodes[(j__17584 + 1)]);
if(cljs.core.truth_(temp__4423__auto____17585))
{var node__17586 = temp__4423__auto____17585;
var temp__4423__auto____17587 = node__17586.inode_seq();
if(cljs.core.truth_(temp__4423__auto____17587))
{var node_seq__17588 = temp__4423__auto____17587;
return (new cljs.core.NodeSeq(null,nodes,(j__17584 + 2),node_seq__17588,null));
} else
{{
var G__17589 = (j__17584 + 2);
j__17584 = G__17589;
continue;
}
}
} else
{{
var G__17590 = (j__17584 + 2);
j__17584 = G__17590;
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
this.cljs$lang$protocol_mask$partition0$ = 31850572;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__17591 = this;
var this__17592 = this;
return cljs.core.pr_str.call(null,this__17592);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17593 = this;
return this__17593.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17594 = this;
var h__8007__auto____17595 = this__17594.__hash;
if(!((h__8007__auto____17595 == null)))
{return h__8007__auto____17595;
} else
{var h__8007__auto____17596 = cljs.core.hash_coll.call(null,coll);
this__17594.__hash = h__8007__auto____17596;
return h__8007__auto____17596;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17597 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17598 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__17598.meta);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__17599 = this;
return cljs.core.first.call(null,this__17599.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__17600 = this;
return cljs.core.create_array_node_seq.call(null,null,this__17600.nodes,this__17600.i,cljs.core.next.call(null,this__17600.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17601 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17602 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__17602.nodes,this__17602.i,this__17602.s,this__17602.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17603 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__17610 = nodes.length;
var j__17611 = i;
while(true){
if((j__17611 < len__17610))
{var temp__4423__auto____17612 = (nodes[j__17611]);
if(cljs.core.truth_(temp__4423__auto____17612))
{var nj__17613 = temp__4423__auto____17612;
var temp__4423__auto____17614 = nj__17613.inode_seq();
if(cljs.core.truth_(temp__4423__auto____17614))
{var ns__17615 = temp__4423__auto____17614;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__17611 + 1),ns__17615,null));
} else
{{
var G__17616 = (j__17611 + 1);
j__17611 = G__17616;
continue;
}
}
} else
{{
var G__17617 = (j__17611 + 1);
j__17611 = G__17617;
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
this.cljs$lang$protocol_mask$partition0$ = 16123663;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__17620 = this;
var this__17621 = this;
return cljs.core.pr_str.call(null,this__17621);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17622 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17623 = this;
if((k == null))
{if(this__17623.has_nil_QMARK_)
{return this__17623.nil_val;
} else
{return not_found;
}
} else
{if((this__17623.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__17623.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17624 = this;
var init__17625 = ((this__17624.has_nil_QMARK_)?f.call(null,init,null,this__17624.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__17625))
{return cljs.core.deref.call(null,init__17625);
} else
{if(!((this__17624.root == null)))
{return this__17624.root.kv_reduce(f,init__17625);
} else
{if("\uFDD0'else")
{return init__17625;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17626 = this;
return this__17626.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17627 = this;
return this__17627.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17628 = this;
var h__8007__auto____17629 = this__17628.__hash;
if(!((h__8007__auto____17629 == null)))
{return h__8007__auto____17629;
} else
{var h__8007__auto____17630 = cljs.core.hash_imap.call(null,coll);
this__17628.__hash = h__8007__auto____17630;
return h__8007__auto____17630;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17631 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__17632 = this;
return (new cljs.core.TransientHashMap({},this__17632.root,this__17632.cnt,this__17632.has_nil_QMARK_,this__17632.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17633 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__17633.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17634 = this;
if((k == null))
{if(this__17634.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__17634.meta,(this__17634.cnt - 1),this__17634.root,false,null,null));
} else
{return coll;
}
} else
{if((this__17634.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__17635 = this__17634.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__17635 === this__17634.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17634.meta,(this__17634.cnt - 1),new_root__17635,this__17634.has_nil_QMARK_,this__17634.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17636 = this;
if((k == null))
{if((function (){var and__4236__auto____17637 = this__17636.has_nil_QMARK_;
if(and__4236__auto____17637)
{return (v === this__17636.nil_val);
} else
{return and__4236__auto____17637;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17636.meta,((this__17636.has_nil_QMARK_)?this__17636.cnt:(this__17636.cnt + 1)),this__17636.root,true,v,null));
}
} else
{var added_leaf_QMARK___17638 = (new cljs.core.Box(false));
var new_root__17639 = (((this__17636.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__17636.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___17638);
if((new_root__17639 === this__17636.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__17636.meta,((added_leaf_QMARK___17638.val)?(this__17636.cnt + 1):this__17636.cnt),new_root__17639,this__17636.has_nil_QMARK_,this__17636.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17640 = this;
if((k == null))
{return this__17640.has_nil_QMARK_;
} else
{if((this__17640.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__17640.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17641 = this;
if((this__17641.cnt > 0))
{var s__17642 = ((!((this__17641.root == null)))?this__17641.root.inode_seq():null);
if(this__17641.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__17641.nil_val], true),s__17642);
} else
{return s__17642;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17643 = this;
return (new cljs.core.PersistentHashMap(meta,this__17643.cnt,this__17643.root,this__17643.has_nil_QMARK_,this__17643.nil_val,this__17643.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17644 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__17653 = null;
var G__17653__2 = (function (this_sym17645,k){
var this__17647 = this;
var this_sym17645__17648 = this;
var coll__17649 = this_sym17645__17648;
return coll__17649.cljs$core$ILookup$_lookup$arity$2(coll__17649,k);
});
var G__17653__3 = (function (this_sym17646,k,not_found){
var this__17647 = this;
var this_sym17646__17650 = this;
var coll__17651 = this_sym17646__17650;
return coll__17651.cljs$core$ILookup$_lookup$arity$3(coll__17651,k,not_found);
});
G__17653 = function(this_sym17646,k,not_found){
switch(arguments.length){
case 2:
return G__17653__2.call(this,this_sym17646,k);
case 3:
return G__17653__3.call(this,this_sym17646,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17653;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym17618,args17619){
var this__17652 = this;
return this_sym17618.call.apply(this_sym17618,[this_sym17618].concat(args17619.slice()));
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__17654 = ks.length;
var i__17655 = 0;
var out__17656 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__17655 < len__17654))
{{
var G__17657 = (i__17655 + 1);
var G__17658 = cljs.core.assoc_BANG_.call(null,out__17656,(ks[i__17655]),(vs[i__17655]));
i__17655 = G__17657;
out__17656 = G__17658;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17656);
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
this.cljs$lang$protocol_mask$partition0$ = 258;
this.cljs$lang$protocol_mask$partition1$ = 14;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__17659 = this;
var tcoll__17660 = this;
if(this__17659.edit)
{if((function (){var G__17661__17662 = o;
if(G__17661__17662)
{if((function (){var or__4238__auto____17663 = (G__17661__17662.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__4238__auto____17663)
{return or__4238__auto____17663;
} else
{return G__17661__17662.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__17661__17662.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17661__17662);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__17661__17662);
}
})())
{return tcoll__17660.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__17664 = cljs.core.seq.call(null,o);
var tcoll__17665 = tcoll__17660;
while(true){
var temp__4423__auto____17666 = cljs.core.first.call(null,es__17664);
if(cljs.core.truth_(temp__4423__auto____17666))
{var e__17667 = temp__4423__auto____17666;
{
var G__17685 = cljs.core.next.call(null,es__17664);
var G__17686 = tcoll__17665.assoc_BANG_(cljs.core.key.call(null,e__17667),cljs.core.val.call(null,e__17667));
es__17664 = G__17685;
tcoll__17665 = G__17686;
continue;
}
} else
{return tcoll__17665;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__17668 = this;
var tcoll__17669 = this;
if(this__17668.edit)
{if((k == null))
{if((this__17668.nil_val === v))
{} else
{this__17668.nil_val = v;
}
if(this__17668.has_nil_QMARK_)
{} else
{this__17668.count = (this__17668.count + 1);
this__17668.has_nil_QMARK_ = true;
}
return tcoll__17669;
} else
{var added_leaf_QMARK___17670 = (new cljs.core.Box(false));
var node__17671 = (((this__17668.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__17668.root).inode_assoc_BANG_(this__17668.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___17670);
if((node__17671 === this__17668.root))
{} else
{this__17668.root = node__17671;
}
if(added_leaf_QMARK___17670.val)
{this__17668.count = (this__17668.count + 1);
} else
{}
return tcoll__17669;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__17672 = this;
var tcoll__17673 = this;
if(this__17672.edit)
{if((k == null))
{if(this__17672.has_nil_QMARK_)
{this__17672.has_nil_QMARK_ = false;
this__17672.nil_val = null;
this__17672.count = (this__17672.count - 1);
return tcoll__17673;
} else
{return tcoll__17673;
}
} else
{if((this__17672.root == null))
{return tcoll__17673;
} else
{var removed_leaf_QMARK___17674 = (new cljs.core.Box(false));
var node__17675 = this__17672.root.inode_without_BANG_(this__17672.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___17674);
if((node__17675 === this__17672.root))
{} else
{this__17672.root = node__17675;
}
if(cljs.core.truth_((removed_leaf_QMARK___17674[0])))
{this__17672.count = (this__17672.count - 1);
} else
{}
return tcoll__17673;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__17676 = this;
var tcoll__17677 = this;
if(this__17676.edit)
{this__17676.edit = null;
return (new cljs.core.PersistentHashMap(null,this__17676.count,this__17676.root,this__17676.has_nil_QMARK_,this__17676.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17678 = this;
if(this__17678.edit)
{return this__17678.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__17679 = this;
if((k == null))
{if(this__17679.has_nil_QMARK_)
{return this__17679.nil_val;
} else
{return null;
}
} else
{if((this__17679.root == null))
{return null;
} else
{return this__17679.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__17680 = this;
if((k == null))
{if(this__17680.has_nil_QMARK_)
{return this__17680.nil_val;
} else
{return not_found;
}
} else
{if((this__17680.root == null))
{return not_found;
} else
{return this__17680.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__17681 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__17682 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__17683 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__17684 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__17689 = node;
var stack__17690 = stack;
while(true){
if(!((t__17689 == null)))
{{
var G__17691 = ((ascending_QMARK_)?t__17689.left:t__17689.right);
var G__17692 = cljs.core.conj.call(null,stack__17690,t__17689);
t__17689 = G__17691;
stack__17690 = G__17692;
continue;
}
} else
{return stack__17690;
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
this.cljs$lang$protocol_mask$partition0$ = 31850570;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__17693 = this;
var this__17694 = this;
return cljs.core.pr_str.call(null,this__17694);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17695 = this;
return this__17695.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17696 = this;
if((this__17696.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__17696.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17697 = this;
var h__8007__auto____17698 = this__17697.__hash;
if(!((h__8007__auto____17698 == null)))
{return h__8007__auto____17698;
} else
{var h__8007__auto____17699 = cljs.core.hash_coll.call(null,coll);
this__17697.__hash = h__8007__auto____17699;
return h__8007__auto____17699;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17700 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__17701 = this;
return cljs.core.peek.call(null,this__17701.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__17702 = this;
var t__17703 = cljs.core.first.call(null,this__17702.stack);
var next_stack__17704 = cljs.core.tree_map_seq_push.call(null,((this__17702.ascending_QMARK_)?t__17703.right:t__17703.left),cljs.core.next.call(null,this__17702.stack),this__17702.ascending_QMARK_);
if(!((next_stack__17704 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__17704,this__17702.ascending_QMARK_,(this__17702.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__17705 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17706 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__17706.stack,this__17706.ascending_QMARK_,this__17706.cnt,this__17706.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17707 = this;
return cljs.core.cons.call(null,o,coll);
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
{if((function (){var and__4236__auto____17709 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__4236__auto____17709)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__4236__auto____17709;
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
{if((function (){var and__4236__auto____17711 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__4236__auto____17711)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__4236__auto____17711;
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
var init__17715 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__17715))
{return cljs.core.deref.call(null,init__17715);
} else
{var init__17716 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__17715):init__17715);
if(cljs.core.reduced_QMARK_.call(null,init__17716))
{return cljs.core.deref.call(null,init__17716);
} else
{var init__17717 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__17716):init__17716);
if(cljs.core.reduced_QMARK_.call(null,init__17717))
{return cljs.core.deref.call(null,init__17717);
} else
{return init__17717;
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
this.cljs$lang$protocol_mask$partition0$ = 32402207;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__17720 = this;
var node__17721 = this;
return ins.balance_right(node__17721);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__17722 = this;
var node__17723 = this;
return (new cljs.core.RedNode(this__17722.key,this__17722.val,this__17722.left,this__17722.right,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__17724 = this;
var node__17725 = this;
return node__17725;
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__17726 = this;
var node__17727 = this;
return ins.balance_left(node__17727);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__17728 = this;
var node__17729 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__17730 = this;
var node__17731 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__17731,parent.right,null));
});
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__17732 = this;
var node__17733 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17733,null));
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__17734 = this;
var node__17735 = this;
return cljs.core.balance_left_del.call(null,this__17734.key,this__17734.val,del,this__17734.right);
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__17736 = this;
var node__17737 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17737,f,init);
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__17738 = this;
var node__17739 = this;
return cljs.core.balance_right_del.call(null,this__17738.key,this__17738.val,this__17738.left,del);
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__17773 = null;
var G__17773__0 = (function (){
var this__17740 = this;
var this__17742 = this;
return cljs.core.pr_str.call(null,this__17742);
});
G__17773 = function(){
switch(arguments.length){
case 0:
return G__17773__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17773;
})()
;
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17743 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17744 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17745 = this;
if((n === 0))
{return this__17745.key;
} else
{if((n === 1))
{return this__17745.val;
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
var this__17746 = this;
if((n === 0))
{return this__17746.key;
} else
{if((n === 1))
{return this__17746.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17747 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17747.key,this__17747.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17748 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17749 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17750 = this;
return this__17750.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17751 = this;
return this__17751.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17752 = this;
return this__17752.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17753 = this;
return cljs.core.PersistentVector.fromArray([this__17753.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17754 = this;
var h__8007__auto____17755 = this__17754.__hash;
if(!((h__8007__auto____17755 == null)))
{return h__8007__auto____17755;
} else
{var h__8007__auto____17756 = cljs.core.hash_coll.call(null,coll);
this__17754.__hash = h__8007__auto____17756;
return h__8007__auto____17756;
}
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17757 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__17758 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17759 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17760 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17761 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17761.key,this__17761.val], true),k,v);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17762 = this;
return cljs.core.list.call(null,this__17762.key,this__17762.val);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17763 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17763.key,this__17763.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17764 = this;
return cljs.core.PersistentVector.fromArray([this__17764.key,this__17764.val,o], true);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__17774 = null;
var G__17774__2 = (function (this_sym17765,k){
var this__17767 = this;
var this_sym17765__17768 = this;
var node__17769 = this_sym17765__17768;
return node__17769.cljs$core$ILookup$_lookup$arity$2(node__17769,k);
});
var G__17774__3 = (function (this_sym17766,k,not_found){
var this__17767 = this;
var this_sym17766__17770 = this;
var node__17771 = this_sym17766__17770;
return node__17771.cljs$core$ILookup$_lookup$arity$3(node__17771,k,not_found);
});
G__17774 = function(this_sym17766,k,not_found){
switch(arguments.length){
case 2:
return G__17774__2.call(this,this_sym17766,k);
case 3:
return G__17774__3.call(this,this_sym17766,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17774;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym17718,args17719){
var this__17772 = this;
return this_sym17718.call.apply(this_sym17718,[this_sym17718].concat(args17719.slice()));
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
this.cljs$lang$protocol_mask$partition0$ = 32402207;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__17777 = this;
var node__17778 = this;
return (new cljs.core.RedNode(this__17777.key,this__17777.val,this__17777.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__17779 = this;
var node__17780 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__17781 = this;
var node__17782 = this;
return (new cljs.core.BlackNode(this__17781.key,this__17781.val,this__17781.left,this__17781.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__17783 = this;
var node__17784 = this;
return (new cljs.core.RedNode(this__17783.key,this__17783.val,ins,this__17783.right,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__17785 = this;
var node__17786 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__17787 = this;
var node__17788 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17787.left))
{return (new cljs.core.RedNode(this__17787.key,this__17787.val,this__17787.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__17787.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17787.right))
{return (new cljs.core.RedNode(this__17787.right.key,this__17787.right.val,(new cljs.core.BlackNode(this__17787.key,this__17787.val,this__17787.left,this__17787.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__17787.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__17788,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__17789 = this;
var node__17790 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17789.right))
{return (new cljs.core.RedNode(this__17789.key,this__17789.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17789.left,null)),this__17789.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__17789.left))
{return (new cljs.core.RedNode(this__17789.left.key,this__17789.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__17789.left.left,null)),(new cljs.core.BlackNode(this__17789.key,this__17789.val,this__17789.left.right,this__17789.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__17790,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__17791 = this;
var node__17792 = this;
return (new cljs.core.RedNode(this__17791.key,this__17791.val,del,this__17791.right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__17793 = this;
var node__17794 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__17794,f,init);
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__17795 = this;
var node__17796 = this;
return (new cljs.core.RedNode(this__17795.key,this__17795.val,this__17795.left,del,null));
});
cljs.core.RedNode.prototype.toString = (function() {
var G__17830 = null;
var G__17830__0 = (function (){
var this__17797 = this;
var this__17799 = this;
return cljs.core.pr_str.call(null,this__17799);
});
G__17830 = function(){
switch(arguments.length){
case 0:
return G__17830__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17830;
})()
;
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__17800 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__17801 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__17802 = this;
if((n === 0))
{return this__17802.key;
} else
{if((n === 1))
{return this__17802.val;
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
var this__17803 = this;
if((n === 0))
{return this__17803.key;
} else
{if((n === 1))
{return this__17803.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__17804 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__17804.key,this__17804.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__17805 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__17806 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__17807 = this;
return this__17807.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__17808 = this;
return this__17808.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__17809 = this;
return this__17809.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__17810 = this;
return cljs.core.PersistentVector.fromArray([this__17810.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17811 = this;
var h__8007__auto____17812 = this__17811.__hash;
if(!((h__8007__auto____17812 == null)))
{return h__8007__auto____17812;
} else
{var h__8007__auto____17813 = cljs.core.hash_coll.call(null,coll);
this__17811.__hash = h__8007__auto____17813;
return h__8007__auto____17813;
}
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17814 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__17815 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__17816 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__17817 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__17818 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__17818.key,this__17818.val], true),k,v);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__17819 = this;
return cljs.core.list.call(null,this__17819.key,this__17819.val);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__17820 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__17820.key,this__17820.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__17821 = this;
return cljs.core.PersistentVector.fromArray([this__17821.key,this__17821.val,o], true);
});
cljs.core.RedNode.prototype.call = (function() {
var G__17831 = null;
var G__17831__2 = (function (this_sym17822,k){
var this__17824 = this;
var this_sym17822__17825 = this;
var node__17826 = this_sym17822__17825;
return node__17826.cljs$core$ILookup$_lookup$arity$2(node__17826,k);
});
var G__17831__3 = (function (this_sym17823,k,not_found){
var this__17824 = this;
var this_sym17823__17827 = this;
var node__17828 = this_sym17823__17827;
return node__17828.cljs$core$ILookup$_lookup$arity$3(node__17828,k,not_found);
});
G__17831 = function(this_sym17823,k,not_found){
switch(arguments.length){
case 2:
return G__17831__2.call(this,this_sym17823,k);
case 3:
return G__17831__3.call(this,this_sym17823,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17831;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym17775,args17776){
var this__17829 = this;
return this_sym17775.call.apply(this_sym17775,[this_sym17775].concat(args17776.slice()));
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__17835 = comp.call(null,k,tree.key);
if((c__17835 === 0))
{(found[0] = tree);
return null;
} else
{if((c__17835 < 0))
{var ins__17836 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__17836 == null)))
{return tree.add_left(ins__17836);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__17837 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__17837 == null)))
{return tree.add_right(ins__17837);
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
{var app__17840 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17840))
{return (new cljs.core.RedNode(app__17840.key,app__17840.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__17840.left,null)),(new cljs.core.RedNode(right.key,right.val,app__17840.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__17840,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__17841 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__17841))
{return (new cljs.core.RedNode(app__17841.key,app__17841.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__17841.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__17841.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__17841,right.right,null)));
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
{var c__17847 = comp.call(null,k,tree.key);
if((c__17847 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__17847 < 0))
{var del__17848 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__4238__auto____17849 = !((del__17848 == null));
if(or__4238__auto____17849)
{return or__4238__auto____17849;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__17848,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__17848,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__17850 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__4238__auto____17851 = !((del__17850 == null));
if(or__4238__auto____17851)
{return or__4238__auto____17851;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__17850);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__17850,null));
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
var tk__17854 = tree.key;
var c__17855 = comp.call(null,k,tk__17854);
if((c__17855 === 0))
{return tree.replace(tk__17854,v,tree.left,tree.right);
} else
{if((c__17855 < 0))
{return tree.replace(tk__17854,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__17854,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
this.cljs$lang$protocol_mask$partition0$ = 418776847;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__17858 = this;
var this__17859 = this;
return cljs.core.pr_str.call(null,this__17859);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__17860 = this;
var coll__17861 = this;
var t__17862 = this__17860.tree;
while(true){
if(!((t__17862 == null)))
{var c__17863 = this__17860.comp.call(null,k,t__17862.key);
if((c__17863 === 0))
{return t__17862;
} else
{if((c__17863 < 0))
{{
var G__17902 = t__17862.left;
t__17862 = G__17902;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__17903 = t__17862.right;
t__17862 = G__17903;
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
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__17864 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__17865 = this;
var n__17866 = coll.entry_at(k);
if(!((n__17866 == null)))
{return n__17866.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__17867 = this;
if(!((this__17867.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__17867.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17868 = this;
return this__17868.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17869 = this;
return this__17869.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__17870 = this;
if((this__17870.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17870.tree,false,this__17870.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17871 = this;
var h__8007__auto____17872 = this__17871.__hash;
if(!((h__8007__auto____17872 == null)))
{return h__8007__auto____17872;
} else
{var h__8007__auto____17873 = cljs.core.hash_imap.call(null,coll);
this__17871.__hash = h__8007__auto____17873;
return h__8007__auto____17873;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17874 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17875 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__17875.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__17876 = this;
var found__17877 = [null];
var t__17878 = cljs.core.tree_map_remove.call(null,this__17876.comp,this__17876.tree,k,found__17877);
if((t__17878 == null))
{if((cljs.core.nth.call(null,found__17877,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17876.comp,null,0,this__17876.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17876.comp,t__17878.blacken(),(this__17876.cnt - 1),this__17876.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__17879 = this;
var found__17880 = [null];
var t__17881 = cljs.core.tree_map_add.call(null,this__17879.comp,this__17879.tree,k,v,found__17880);
if((t__17881 == null))
{var found_node__17882 = cljs.core.nth.call(null,found__17880,0);
if(cljs.core._EQ_.call(null,v,found_node__17882.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__17879.comp,cljs.core.tree_map_replace.call(null,this__17879.comp,this__17879.tree,k,v),this__17879.cnt,this__17879.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__17879.comp,t__17881.blacken(),(this__17879.cnt + 1),this__17879.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__17883 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17884 = this;
if((this__17884.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17884.tree,true,this__17884.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17885 = this;
return (new cljs.core.PersistentTreeMap(this__17885.comp,this__17885.tree,this__17885.cnt,meta,this__17885.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__17886 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__17904 = null;
var G__17904__2 = (function (this_sym17887,k){
var this__17889 = this;
var this_sym17887__17890 = this;
var coll__17891 = this_sym17887__17890;
return coll__17891.cljs$core$ILookup$_lookup$arity$2(coll__17891,k);
});
var G__17904__3 = (function (this_sym17888,k,not_found){
var this__17889 = this;
var this_sym17888__17892 = this;
var coll__17893 = this_sym17888__17892;
return coll__17893.cljs$core$ILookup$_lookup$arity$3(coll__17893,k,not_found);
});
G__17904 = function(this_sym17888,k,not_found){
switch(arguments.length){
case 2:
return G__17904__2.call(this,this_sym17888,k);
case 3:
return G__17904__3.call(this,this_sym17888,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17904;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym17856,args17857){
var this__17894 = this;
return this_sym17856.call.apply(this_sym17856,[this_sym17856].concat(args17857.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__17895 = this;
if((this__17895.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__17895.tree,ascending_QMARK_,this__17895.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__17896 = this;
if((this__17896.cnt > 0))
{var stack__17897 = null;
var t__17898 = this__17896.tree;
while(true){
if(!((t__17898 == null)))
{var c__17899 = this__17896.comp.call(null,k,t__17898.key);
if((c__17899 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__17897,t__17898),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__17899 < 0))
{{
var G__17905 = cljs.core.conj.call(null,stack__17897,t__17898);
var G__17906 = t__17898.left;
stack__17897 = G__17905;
t__17898 = G__17906;
continue;
}
} else
{{
var G__17907 = stack__17897;
var G__17908 = t__17898.right;
stack__17897 = G__17907;
t__17898 = G__17908;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__17899 > 0))
{{
var G__17909 = cljs.core.conj.call(null,stack__17897,t__17898);
var G__17910 = t__17898.right;
stack__17897 = G__17909;
t__17898 = G__17910;
continue;
}
} else
{{
var G__17911 = stack__17897;
var G__17912 = t__17898.left;
stack__17897 = G__17911;
t__17898 = G__17912;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__17897 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__17897,ascending_QMARK_,-1,null));
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
var this__17900 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__17901 = this;
return this__17901.comp;
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
var in__17915 = cljs.core.seq.call(null,keyvals);
var out__17916 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__17915)
{{
var G__17917 = cljs.core.nnext.call(null,in__17915);
var G__17918 = cljs.core.assoc_BANG_.call(null,out__17916,cljs.core.first.call(null,in__17915),cljs.core.second.call(null,in__17915));
in__17915 = G__17917;
out__17916 = G__17918;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__17916);
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
hash_map.cljs$lang$applyTo = (function (arglist__17919){
var keyvals = cljs.core.seq(arglist__17919);;
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
array_map.cljs$lang$applyTo = (function (arglist__17920){
var keyvals = cljs.core.seq(arglist__17920);;
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
var ks__17924 = [];
var obj__17925 = {};
var kvs__17926 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__17926)
{ks__17924.push(cljs.core.first.call(null,kvs__17926));
(obj__17925[cljs.core.first.call(null,kvs__17926)] = cljs.core.second.call(null,kvs__17926));
{
var G__17927 = cljs.core.nnext.call(null,kvs__17926);
kvs__17926 = G__17927;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__17924,obj__17925);
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
obj_map.cljs$lang$applyTo = (function (arglist__17928){
var keyvals = cljs.core.seq(arglist__17928);;
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
var in__17931 = cljs.core.seq.call(null,keyvals);
var out__17932 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__17931)
{{
var G__17933 = cljs.core.nnext.call(null,in__17931);
var G__17934 = cljs.core.assoc.call(null,out__17932,cljs.core.first.call(null,in__17931),cljs.core.second.call(null,in__17931));
in__17931 = G__17933;
out__17932 = G__17934;
continue;
}
} else
{return out__17932;
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
sorted_map.cljs$lang$applyTo = (function (arglist__17935){
var keyvals = cljs.core.seq(arglist__17935);;
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
var in__17938 = cljs.core.seq.call(null,keyvals);
var out__17939 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__17938)
{{
var G__17940 = cljs.core.nnext.call(null,in__17938);
var G__17941 = cljs.core.assoc.call(null,out__17939,cljs.core.first.call(null,in__17938),cljs.core.second.call(null,in__17938));
in__17938 = G__17940;
out__17939 = G__17941;
continue;
}
} else
{return out__17939;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__17942){
var comparator = cljs.core.first(arglist__17942);
var keyvals = cljs.core.rest(arglist__17942);
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
{return cljs.core.reduce.call(null,(function (p1__17943_SHARP_,p2__17944_SHARP_){
return cljs.core.conj.call(null,(function (){var or__4238__auto____17946 = p1__17943_SHARP_;
if(cljs.core.truth_(or__4238__auto____17946))
{return or__4238__auto____17946;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__17944_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__17947){
var maps = cljs.core.seq(arglist__17947);;
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
{var merge_entry__17955 = (function (m,e){
var k__17953 = cljs.core.first.call(null,e);
var v__17954 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__17953))
{return cljs.core.assoc.call(null,m,k__17953,f.call(null,cljs.core._lookup.call(null,m,k__17953,null),v__17954));
} else
{return cljs.core.assoc.call(null,m,k__17953,v__17954);
}
});
var merge2__17957 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__17955,(function (){var or__4238__auto____17956 = m1;
if(cljs.core.truth_(or__4238__auto____17956))
{return or__4238__auto____17956;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__17957,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__17958){
var f = cljs.core.first(arglist__17958);
var maps = cljs.core.rest(arglist__17958);
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
var ret__17963 = cljs.core.ObjMap.EMPTY;
var keys__17964 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__17964)
{var key__17965 = cljs.core.first.call(null,keys__17964);
var entry__17966 = cljs.core._lookup.call(null,map,key__17965,"\uFDD0'cljs.core/not-found");
{
var G__17967 = ((cljs.core.not_EQ_.call(null,entry__17966,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__17963,key__17965,entry__17966):ret__17963);
var G__17968 = cljs.core.next.call(null,keys__17964);
ret__17963 = G__17967;
keys__17964 = G__17968;
continue;
}
} else
{return ret__17963;
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
this.cljs$lang$protocol_mask$partition0$ = 15077647;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__17972 = this;
var this__17973 = this;
return cljs.core.pr_str.call(null,this__17973);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__17974 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__17975 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__17975.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__17976 = this;
return this__17976.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__17977 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__17978 = this;
var h__8007__auto____17979 = this__17978.__hash;
if(!((h__8007__auto____17979 == null)))
{return h__8007__auto____17979;
} else
{var h__8007__auto____17980 = cljs.core.hash_iset.call(null,coll);
this__17978.__hash = h__8007__auto____17980;
return h__8007__auto____17980;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__17981 = this;
var and__4236__auto____17982 = cljs.core.set_QMARK_.call(null,other);
if(and__4236__auto____17982)
{var and__4236__auto____17983 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__4236__auto____17983)
{return cljs.core.every_QMARK_.call(null,(function (p1__17969_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__17969_SHARP_);
}),other);
} else
{return and__4236__auto____17983;
}
} else
{return and__4236__auto____17982;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__17984 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__17984.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__17985 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__17985.meta);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__17986 = this;
return (new cljs.core.PersistentHashSet(this__17986.meta,cljs.core.dissoc.call(null,this__17986.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__17987 = this;
return cljs.core.keys.call(null,this__17987.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__17988 = this;
return (new cljs.core.PersistentHashSet(meta,this__17988.hash_map,this__17988.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__17989 = this;
return (new cljs.core.PersistentHashSet(this__17989.meta,cljs.core.assoc.call(null,this__17989.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__17998 = null;
var G__17998__2 = (function (this_sym17990,k){
var this__17992 = this;
var this_sym17990__17993 = this;
var coll__17994 = this_sym17990__17993;
return coll__17994.cljs$core$ILookup$_lookup$arity$2(coll__17994,k);
});
var G__17998__3 = (function (this_sym17991,k,not_found){
var this__17992 = this;
var this_sym17991__17995 = this;
var coll__17996 = this_sym17991__17995;
return coll__17996.cljs$core$ILookup$_lookup$arity$3(coll__17996,k,not_found);
});
G__17998 = function(this_sym17991,k,not_found){
switch(arguments.length){
case 2:
return G__17998__2.call(this,this_sym17991,k);
case 3:
return G__17998__3.call(this,this_sym17991,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17998;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym17970,args17971){
var this__17997 = this;
return this_sym17970.call.apply(this_sym17970,[this_sym17970].concat(args17971.slice()));
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__17999 = cljs.core.count.call(null,items);
var i__18000 = 0;
var out__18001 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__18000 < len__17999))
{{
var G__18002 = (i__18000 + 1);
var G__18003 = cljs.core.conj_BANG_.call(null,out__18001,(items[i__18000]));
i__18000 = G__18002;
out__18001 = G__18003;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__18001);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition1$ = 34;
this.cljs$lang$protocol_mask$partition0$ = 259;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__18007 = this;
this__18007.transient_map = cljs.core.assoc_BANG_.call(null,this__18007.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__18008 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__18008.transient_map),null));
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__18009 = this;
this__18009.transient_map = cljs.core.dissoc_BANG_.call(null,this__18009.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__18010 = this;
return cljs.core.count.call(null,this__18010.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__18011 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__18012 = this;
if((cljs.core._lookup.call(null,this__18012.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__18021 = null;
var G__18021__2 = (function (this_sym18013,k){
var this__18015 = this;
var this_sym18013__18016 = this;
var tcoll__18017 = this_sym18013__18016;
if((cljs.core._lookup.call(null,this__18015.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__18021__3 = (function (this_sym18014,k,not_found){
var this__18015 = this;
var this_sym18014__18018 = this;
var tcoll__18019 = this_sym18014__18018;
if((cljs.core._lookup.call(null,this__18015.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__18021 = function(this_sym18014,k,not_found){
switch(arguments.length){
case 2:
return G__18021__2.call(this,this_sym18014,k);
case 3:
return G__18021__3.call(this,this_sym18014,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18021;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym18005,args18006){
var this__18020 = this;
return this_sym18005.call.apply(this_sym18005,[this_sym18005].concat(args18006.slice()));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__18024 = this;
var this__18025 = this;
return cljs.core.pr_str.call(null,this__18025);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__18026 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__18027 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__18027.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__18028 = this;
return this__18028.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__18029 = this;
return cljs.core.count.call(null,this__18029.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__18030 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__18030.tree_map));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__18031 = this;
var h__8007__auto____18032 = this__18031.__hash;
if(!((h__8007__auto____18032 == null)))
{return h__8007__auto____18032;
} else
{var h__8007__auto____18033 = cljs.core.hash_iset.call(null,coll);
this__18031.__hash = h__8007__auto____18033;
return h__8007__auto____18033;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__18034 = this;
var and__4236__auto____18035 = cljs.core.set_QMARK_.call(null,other);
if(and__4236__auto____18035)
{var and__4236__auto____18036 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__4236__auto____18036)
{return cljs.core.every_QMARK_.call(null,(function (p1__18004_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__18004_SHARP_);
}),other);
} else
{return and__4236__auto____18036;
}
} else
{return and__4236__auto____18035;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__18037 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__18037.meta);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__18038 = this;
return (new cljs.core.PersistentTreeSet(this__18038.meta,cljs.core.dissoc.call(null,this__18038.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__18039 = this;
return cljs.core.keys.call(null,this__18039.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__18040 = this;
return (new cljs.core.PersistentTreeSet(meta,this__18040.tree_map,this__18040.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__18041 = this;
return (new cljs.core.PersistentTreeSet(this__18041.meta,cljs.core.assoc.call(null,this__18041.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__18054 = null;
var G__18054__2 = (function (this_sym18042,k){
var this__18044 = this;
var this_sym18042__18045 = this;
var coll__18046 = this_sym18042__18045;
return coll__18046.cljs$core$ILookup$_lookup$arity$2(coll__18046,k);
});
var G__18054__3 = (function (this_sym18043,k,not_found){
var this__18044 = this;
var this_sym18043__18047 = this;
var coll__18048 = this_sym18043__18047;
return coll__18048.cljs$core$ILookup$_lookup$arity$3(coll__18048,k,not_found);
});
G__18054 = function(this_sym18043,k,not_found){
switch(arguments.length){
case 2:
return G__18054__2.call(this,this_sym18043,k);
case 3:
return G__18054__3.call(this,this_sym18043,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__18054;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym18022,args18023){
var this__18049 = this;
return this_sym18022.call.apply(this_sym18022,[this_sym18022].concat(args18023.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__18050 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__18050.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__18051 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__18051.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__18052 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__18053 = this;
return cljs.core._comparator.call(null,this__18053.tree_map);
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
var G__18059__delegate = function (keys){
var in__18057 = cljs.core.seq.call(null,keys);
var out__18058 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__18057))
{{
var G__18060 = cljs.core.next.call(null,in__18057);
var G__18061 = cljs.core.conj_BANG_.call(null,out__18058,cljs.core.first.call(null,in__18057));
in__18057 = G__18060;
out__18058 = G__18061;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__18058);
}
break;
}
};
var G__18059 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18059__delegate.call(this, keys);
};
G__18059.cljs$lang$maxFixedArity = 0;
G__18059.cljs$lang$applyTo = (function (arglist__18062){
var keys = cljs.core.seq(arglist__18062);;
return G__18059__delegate(keys);
});
G__18059.cljs$lang$arity$variadic = G__18059__delegate;
return G__18059;
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
sorted_set.cljs$lang$applyTo = (function (arglist__18063){
var keys = cljs.core.seq(arglist__18063);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__18065){
var comparator = cljs.core.first(arglist__18065);
var keys = cljs.core.rest(arglist__18065);
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
{var n__18071 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4423__auto____18072 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4423__auto____18072))
{var e__18073 = temp__4423__auto____18072;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__18073));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__18071,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__18064_SHARP_){
var temp__4423__auto____18074 = cljs.core.find.call(null,smap,p1__18064_SHARP_);
if(cljs.core.truth_(temp__4423__auto____18074))
{var e__18075 = temp__4423__auto____18074;
return cljs.core.second.call(null,e__18075);
} else
{return p1__18064_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__18105 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__18098,seen){
while(true){
var vec__18099__18100 = p__18098;
var f__18101 = cljs.core.nth.call(null,vec__18099__18100,0,null);
var xs__18102 = vec__18099__18100;
var temp__4425__auto____18103 = cljs.core.seq.call(null,xs__18102);
if(temp__4425__auto____18103)
{var s__18104 = temp__4425__auto____18103;
if(cljs.core.contains_QMARK_.call(null,seen,f__18101))
{{
var G__18106 = cljs.core.rest.call(null,s__18104);
var G__18107 = seen;
p__18098 = G__18106;
seen = G__18107;
continue;
}
} else
{return cljs.core.cons.call(null,f__18101,step.call(null,cljs.core.rest.call(null,s__18104),cljs.core.conj.call(null,seen,f__18101)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__18105.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__18110 = cljs.core.PersistentVector.EMPTY;
var s__18111 = s;
while(true){
if(cljs.core.next.call(null,s__18111))
{{
var G__18112 = cljs.core.conj.call(null,ret__18110,cljs.core.first.call(null,s__18111));
var G__18113 = cljs.core.next.call(null,s__18111);
ret__18110 = G__18112;
s__18111 = G__18113;
continue;
}
} else
{return cljs.core.seq.call(null,ret__18110);
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
{if((function (){var or__4238__auto____18116 = cljs.core.keyword_QMARK_.call(null,x);
if(or__4238__auto____18116)
{return or__4238__auto____18116;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__18117 = x.lastIndexOf("/");
if((i__18117 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__18117 + 1));
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
if((function (){var or__4238__auto____18120 = cljs.core.keyword_QMARK_.call(null,x);
if(or__4238__auto____18120)
{return or__4238__auto____18120;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__18121 = x.lastIndexOf("/");
if((i__18121 > -1))
{return cljs.core.subs.call(null,x,2,i__18121);
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
var map__18128 = cljs.core.ObjMap.EMPTY;
var ks__18129 = cljs.core.seq.call(null,keys);
var vs__18130 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__4236__auto____18131 = ks__18129;
if(and__4236__auto____18131)
{return vs__18130;
} else
{return and__4236__auto____18131;
}
})())
{{
var G__18132 = cljs.core.assoc.call(null,map__18128,cljs.core.first.call(null,ks__18129),cljs.core.first.call(null,vs__18130));
var G__18133 = cljs.core.next.call(null,ks__18129);
var G__18134 = cljs.core.next.call(null,vs__18130);
map__18128 = G__18132;
ks__18129 = G__18133;
vs__18130 = G__18134;
continue;
}
} else
{return map__18128;
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
var G__18137__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__18122_SHARP_,p2__18123_SHARP_){
return max_key.call(null,k,p1__18122_SHARP_,p2__18123_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__18137 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18137__delegate.call(this, k, x, y, more);
};
G__18137.cljs$lang$maxFixedArity = 3;
G__18137.cljs$lang$applyTo = (function (arglist__18138){
var k = cljs.core.first(arglist__18138);
var x = cljs.core.first(cljs.core.next(arglist__18138));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18138)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18138)));
return G__18137__delegate(k, x, y, more);
});
G__18137.cljs$lang$arity$variadic = G__18137__delegate;
return G__18137;
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
var G__18139__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__18135_SHARP_,p2__18136_SHARP_){
return min_key.call(null,k,p1__18135_SHARP_,p2__18136_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__18139 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18139__delegate.call(this, k, x, y, more);
};
G__18139.cljs$lang$maxFixedArity = 3;
G__18139.cljs$lang$applyTo = (function (arglist__18140){
var k = cljs.core.first(arglist__18140);
var x = cljs.core.first(cljs.core.next(arglist__18140));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18140)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18140)));
return G__18139__delegate(k, x, y, more);
});
G__18139.cljs$lang$arity$variadic = G__18139__delegate;
return G__18139;
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
var temp__4425__auto____18143 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____18143)
{var s__18144 = temp__4425__auto____18143;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__18144),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__18144)));
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
var temp__4425__auto____18147 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____18147)
{var s__18148 = temp__4425__auto____18147;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__18148))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__18148),take_while.call(null,pred,cljs.core.rest.call(null,s__18148)));
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
var comp__18150 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__18150.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__18162 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4425__auto____18163 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4425__auto____18163))
{var vec__18164__18165 = temp__4425__auto____18163;
var e__18166 = cljs.core.nth.call(null,vec__18164__18165,0,null);
var s__18167 = vec__18164__18165;
if(cljs.core.truth_(include__18162.call(null,e__18166)))
{return s__18167;
} else
{return cljs.core.next.call(null,s__18167);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__18162,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4425__auto____18168 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4425__auto____18168))
{var vec__18169__18170 = temp__4425__auto____18168;
var e__18171 = cljs.core.nth.call(null,vec__18169__18170,0,null);
var s__18172 = vec__18169__18170;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__18171))?s__18172:cljs.core.next.call(null,s__18172)));
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
var include__18184 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4425__auto____18185 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4425__auto____18185))
{var vec__18186__18187 = temp__4425__auto____18185;
var e__18188 = cljs.core.nth.call(null,vec__18186__18187,0,null);
var s__18189 = vec__18186__18187;
if(cljs.core.truth_(include__18184.call(null,e__18188)))
{return s__18189;
} else
{return cljs.core.next.call(null,s__18189);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__18184,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4425__auto____18190 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4425__auto____18190))
{var vec__18191__18192 = temp__4425__auto____18190;
var e__18193 = cljs.core.nth.call(null,vec__18191__18192,0,null);
var s__18194 = vec__18191__18192;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__18193))?s__18194:cljs.core.next.call(null,s__18194)));
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
this.cljs$lang$protocol_mask$partition0$ = 32375006;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.toString = (function (){
var this__18195 = this;
var this__18196 = this;
return cljs.core.pr_str.call(null,this__18196);
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__18197 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__18197.start + (n * this__18197.step));
} else
{if((function (){var and__4236__auto____18198 = (this__18197.start > this__18197.end);
if(and__4236__auto____18198)
{return (this__18197.step === 0);
} else
{return and__4236__auto____18198;
}
})())
{return this__18197.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__18199 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__18199.start + (n * this__18199.step));
} else
{if((function (){var and__4236__auto____18200 = (this__18199.start > this__18199.end);
if(and__4236__auto____18200)
{return (this__18199.step === 0);
} else
{return and__4236__auto____18200;
}
})())
{return this__18199.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__18201 = this;
return this__18201.meta;
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__18202 = this;
if((this__18202.step > 0))
{if(((this__18202.start + this__18202.step) < this__18202.end))
{return (new cljs.core.Range(this__18202.meta,(this__18202.start + this__18202.step),this__18202.end,this__18202.step,null));
} else
{return null;
}
} else
{if(((this__18202.start + this__18202.step) > this__18202.end))
{return (new cljs.core.Range(this__18202.meta,(this__18202.start + this__18202.step),this__18202.end,this__18202.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__18203 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__18203.end - this__18203.start) / this__18203.step));
}
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__18204 = this;
var h__8007__auto____18205 = this__18204.__hash;
if(!((h__8007__auto____18205 == null)))
{return h__8007__auto____18205;
} else
{var h__8007__auto____18206 = cljs.core.hash_coll.call(null,rng);
this__18204.__hash = h__8007__auto____18206;
return h__8007__auto____18206;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__18207 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__18208 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__18208.meta);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__18209 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__18210 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__18211 = this;
return this__18211.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__18212 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__18212.meta,(this__18212.start + this__18212.step),this__18212.end,this__18212.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__18213 = this;
if((this__18213.step > 0))
{if((this__18213.start < this__18213.end))
{return rng;
} else
{return null;
}
} else
{if((this__18213.start > this__18213.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__18214 = this;
return (new cljs.core.Range(meta,this__18214.start,this__18214.end,this__18214.step,this__18214.__hash));
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__18215 = this;
return cljs.core.cons.call(null,o,rng);
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
var temp__4425__auto____18218 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____18218)
{var s__18219 = temp__4425__auto____18218;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__18219),take_nth.call(null,n,cljs.core.drop.call(null,n,s__18219)));
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
var temp__4425__auto____18226 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____18226)
{var s__18227 = temp__4425__auto____18226;
var fst__18228 = cljs.core.first.call(null,s__18227);
var fv__18229 = f.call(null,fst__18228);
var run__18230 = cljs.core.cons.call(null,fst__18228,cljs.core.take_while.call(null,(function (p1__18220_SHARP_){
return cljs.core._EQ_.call(null,fv__18229,f.call(null,p1__18220_SHARP_));
}),cljs.core.next.call(null,s__18227)));
return cljs.core.cons.call(null,run__18230,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__18230),s__18227))));
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
var temp__4423__auto____18245 = cljs.core.seq.call(null,coll);
if(temp__4423__auto____18245)
{var s__18246 = temp__4423__auto____18245;
return reductions.call(null,f,cljs.core.first.call(null,s__18246),cljs.core.rest.call(null,s__18246));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4425__auto____18247 = cljs.core.seq.call(null,coll);
if(temp__4425__auto____18247)
{var s__18248 = temp__4425__auto____18247;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__18248)),cljs.core.rest.call(null,s__18248));
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
var G__18251 = null;
var G__18251__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__18251__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__18251__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__18251__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__18251__4 = (function() { 
var G__18252__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__18252 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18252__delegate.call(this, x, y, z, args);
};
G__18252.cljs$lang$maxFixedArity = 3;
G__18252.cljs$lang$applyTo = (function (arglist__18253){
var x = cljs.core.first(arglist__18253);
var y = cljs.core.first(cljs.core.next(arglist__18253));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18253)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18253)));
return G__18252__delegate(x, y, z, args);
});
G__18252.cljs$lang$arity$variadic = G__18252__delegate;
return G__18252;
})()
;
G__18251 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18251__0.call(this);
case 1:
return G__18251__1.call(this,x);
case 2:
return G__18251__2.call(this,x,y);
case 3:
return G__18251__3.call(this,x,y,z);
default:
return G__18251__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18251.cljs$lang$maxFixedArity = 3;
G__18251.cljs$lang$applyTo = G__18251__4.cljs$lang$applyTo;
return G__18251;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__18254 = null;
var G__18254__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__18254__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__18254__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__18254__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__18254__4 = (function() { 
var G__18255__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__18255 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18255__delegate.call(this, x, y, z, args);
};
G__18255.cljs$lang$maxFixedArity = 3;
G__18255.cljs$lang$applyTo = (function (arglist__18256){
var x = cljs.core.first(arglist__18256);
var y = cljs.core.first(cljs.core.next(arglist__18256));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18256)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18256)));
return G__18255__delegate(x, y, z, args);
});
G__18255.cljs$lang$arity$variadic = G__18255__delegate;
return G__18255;
})()
;
G__18254 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18254__0.call(this);
case 1:
return G__18254__1.call(this,x);
case 2:
return G__18254__2.call(this,x,y);
case 3:
return G__18254__3.call(this,x,y,z);
default:
return G__18254__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18254.cljs$lang$maxFixedArity = 3;
G__18254.cljs$lang$applyTo = G__18254__4.cljs$lang$applyTo;
return G__18254;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__18257 = null;
var G__18257__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__18257__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__18257__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__18257__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__18257__4 = (function() { 
var G__18258__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__18258 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18258__delegate.call(this, x, y, z, args);
};
G__18258.cljs$lang$maxFixedArity = 3;
G__18258.cljs$lang$applyTo = (function (arglist__18259){
var x = cljs.core.first(arglist__18259);
var y = cljs.core.first(cljs.core.next(arglist__18259));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18259)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18259)));
return G__18258__delegate(x, y, z, args);
});
G__18258.cljs$lang$arity$variadic = G__18258__delegate;
return G__18258;
})()
;
G__18257 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18257__0.call(this);
case 1:
return G__18257__1.call(this,x);
case 2:
return G__18257__2.call(this,x,y);
case 3:
return G__18257__3.call(this,x,y,z);
default:
return G__18257__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18257.cljs$lang$maxFixedArity = 3;
G__18257.cljs$lang$applyTo = G__18257__4.cljs$lang$applyTo;
return G__18257;
})()
});
var juxt__4 = (function() { 
var G__18260__delegate = function (f,g,h,fs){
var fs__18250 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__18261 = null;
var G__18261__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__18231_SHARP_,p2__18232_SHARP_){
return cljs.core.conj.call(null,p1__18231_SHARP_,p2__18232_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__18250);
});
var G__18261__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__18233_SHARP_,p2__18234_SHARP_){
return cljs.core.conj.call(null,p1__18233_SHARP_,p2__18234_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__18250);
});
var G__18261__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__18235_SHARP_,p2__18236_SHARP_){
return cljs.core.conj.call(null,p1__18235_SHARP_,p2__18236_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__18250);
});
var G__18261__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__18237_SHARP_,p2__18238_SHARP_){
return cljs.core.conj.call(null,p1__18237_SHARP_,p2__18238_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__18250);
});
var G__18261__4 = (function() { 
var G__18262__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__18239_SHARP_,p2__18240_SHARP_){
return cljs.core.conj.call(null,p1__18239_SHARP_,cljs.core.apply.call(null,p2__18240_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__18250);
};
var G__18262 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18262__delegate.call(this, x, y, z, args);
};
G__18262.cljs$lang$maxFixedArity = 3;
G__18262.cljs$lang$applyTo = (function (arglist__18263){
var x = cljs.core.first(arglist__18263);
var y = cljs.core.first(cljs.core.next(arglist__18263));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18263)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18263)));
return G__18262__delegate(x, y, z, args);
});
G__18262.cljs$lang$arity$variadic = G__18262__delegate;
return G__18262;
})()
;
G__18261 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__18261__0.call(this);
case 1:
return G__18261__1.call(this,x);
case 2:
return G__18261__2.call(this,x,y);
case 3:
return G__18261__3.call(this,x,y,z);
default:
return G__18261__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__18261.cljs$lang$maxFixedArity = 3;
G__18261.cljs$lang$applyTo = G__18261__4.cljs$lang$applyTo;
return G__18261;
})()
};
var G__18260 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18260__delegate.call(this, f, g, h, fs);
};
G__18260.cljs$lang$maxFixedArity = 3;
G__18260.cljs$lang$applyTo = (function (arglist__18264){
var f = cljs.core.first(arglist__18264);
var g = cljs.core.first(cljs.core.next(arglist__18264));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18264)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18264)));
return G__18260__delegate(f, g, h, fs);
});
G__18260.cljs$lang$arity$variadic = G__18260__delegate;
return G__18260;
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
var G__18267 = cljs.core.next.call(null,coll);
coll = G__18267;
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
if(cljs.core.truth_((function (){var and__4236__auto____18266 = cljs.core.seq.call(null,coll);
if(and__4236__auto____18266)
{return (n > 0);
} else
{return and__4236__auto____18266;
}
})()))
{{
var G__18268 = (n - 1);
var G__18269 = cljs.core.next.call(null,coll);
n = G__18268;
coll = G__18269;
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
var matches__18271 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__18271),s))
{if((cljs.core.count.call(null,matches__18271) === 1))
{return cljs.core.first.call(null,matches__18271);
} else
{return cljs.core.vec.call(null,matches__18271);
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
var matches__18273 = re.exec(s);
if((matches__18273 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__18273) === 1))
{return cljs.core.first.call(null,matches__18273);
} else
{return cljs.core.vec.call(null,matches__18273);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__18278 = cljs.core.re_find.call(null,re,s);
var match_idx__18279 = s.search(re);
var match_str__18280 = ((cljs.core.coll_QMARK_.call(null,match_data__18278))?cljs.core.first.call(null,match_data__18278):match_data__18278);
var post_match__18281 = cljs.core.subs.call(null,s,(match_idx__18279 + cljs.core.count.call(null,match_str__18280)));
if(cljs.core.truth_(match_data__18278))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__18278,re_seq.call(null,re,post_match__18281));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__18288__18289 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___18290 = cljs.core.nth.call(null,vec__18288__18289,0,null);
var flags__18291 = cljs.core.nth.call(null,vec__18288__18289,1,null);
var pattern__18292 = cljs.core.nth.call(null,vec__18288__18289,2,null);
return (new RegExp(pattern__18292,flags__18291));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__18282_SHARP_){
return print_one.call(null,p1__18282_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__4236__auto____18302 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__4236__auto____18302))
{var and__4236__auto____18306 = (function (){var G__18303__18304 = obj;
if(G__18303__18304)
{if((function (){var or__4238__auto____18305 = (G__18303__18304.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__4238__auto____18305)
{return or__4238__auto____18305;
} else
{return G__18303__18304.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__18303__18304.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__18303__18304);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__18303__18304);
}
})();
if(cljs.core.truth_(and__4236__auto____18306))
{return cljs.core.meta.call(null,obj);
} else
{return and__4236__auto____18306;
}
} else
{return and__4236__auto____18302;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__4236__auto____18307 = !((obj == null));
if(and__4236__auto____18307)
{return obj.cljs$lang$type;
} else
{return and__4236__auto____18307;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__18308__18309 = obj;
if(G__18308__18309)
{if((function (){var or__4238__auto____18310 = (G__18308__18309.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__4238__auto____18310)
{return or__4238__auto____18310;
} else
{return G__18308__18309.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__18308__18309.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__18308__18309);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__18308__18309);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__18330 = (new goog.string.StringBuffer());
var G__18331__18332 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__18331__18332)
{var string__18333 = cljs.core.first.call(null,G__18331__18332);
var G__18331__18334 = G__18331__18332;
while(true){
sb__18330.append(string__18333);
var temp__4425__auto____18335 = cljs.core.next.call(null,G__18331__18334);
if(temp__4425__auto____18335)
{var G__18331__18336 = temp__4425__auto____18335;
{
var G__18349 = cljs.core.first.call(null,G__18331__18336);
var G__18350 = G__18331__18336;
string__18333 = G__18349;
G__18331__18334 = G__18350;
continue;
}
} else
{}
break;
}
} else
{}
var G__18337__18338 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__18337__18338)
{var obj__18339 = cljs.core.first.call(null,G__18337__18338);
var G__18337__18340 = G__18337__18338;
while(true){
sb__18330.append(" ");
var G__18341__18342 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__18339,opts));
if(G__18341__18342)
{var string__18343 = cljs.core.first.call(null,G__18341__18342);
var G__18341__18344 = G__18341__18342;
while(true){
sb__18330.append(string__18343);
var temp__4425__auto____18345 = cljs.core.next.call(null,G__18341__18344);
if(temp__4425__auto____18345)
{var G__18341__18346 = temp__4425__auto____18345;
{
var G__18351 = cljs.core.first.call(null,G__18341__18346);
var G__18352 = G__18341__18346;
string__18343 = G__18351;
G__18341__18344 = G__18352;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4425__auto____18347 = cljs.core.next.call(null,G__18337__18340);
if(temp__4425__auto____18347)
{var G__18337__18348 = temp__4425__auto____18347;
{
var G__18353 = cljs.core.first.call(null,G__18337__18348);
var G__18354 = G__18337__18348;
obj__18339 = G__18353;
G__18337__18340 = G__18354;
continue;
}
} else
{}
break;
}
} else
{}
return sb__18330;
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
var sb__18356 = cljs.core.pr_sb.call(null,objs,opts);
sb__18356.append("\n");
return [cljs.core.str(sb__18356)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__18375__18376 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,cljs.core.first.call(null,objs),opts));
if(G__18375__18376)
{var string__18377 = cljs.core.first.call(null,G__18375__18376);
var G__18375__18378 = G__18375__18376;
while(true){
cljs.core.string_print.call(null,string__18377);
var temp__4425__auto____18379 = cljs.core.next.call(null,G__18375__18378);
if(temp__4425__auto____18379)
{var G__18375__18380 = temp__4425__auto____18379;
{
var G__18393 = cljs.core.first.call(null,G__18375__18380);
var G__18394 = G__18375__18380;
string__18377 = G__18393;
G__18375__18378 = G__18394;
continue;
}
} else
{}
break;
}
} else
{}
var G__18381__18382 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
if(G__18381__18382)
{var obj__18383 = cljs.core.first.call(null,G__18381__18382);
var G__18381__18384 = G__18381__18382;
while(true){
cljs.core.string_print.call(null," ");
var G__18385__18386 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__18383,opts));
if(G__18385__18386)
{var string__18387 = cljs.core.first.call(null,G__18385__18386);
var G__18385__18388 = G__18385__18386;
while(true){
cljs.core.string_print.call(null,string__18387);
var temp__4425__auto____18389 = cljs.core.next.call(null,G__18385__18388);
if(temp__4425__auto____18389)
{var G__18385__18390 = temp__4425__auto____18389;
{
var G__18395 = cljs.core.first.call(null,G__18385__18390);
var G__18396 = G__18385__18390;
string__18387 = G__18395;
G__18385__18388 = G__18396;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4425__auto____18391 = cljs.core.next.call(null,G__18381__18384);
if(temp__4425__auto____18391)
{var G__18381__18392 = temp__4425__auto____18391;
{
var G__18397 = cljs.core.first.call(null,G__18381__18392);
var G__18398 = G__18381__18392;
obj__18383 = G__18397;
G__18381__18384 = G__18398;
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
pr_str.cljs$lang$applyTo = (function (arglist__18399){
var objs = cljs.core.seq(arglist__18399);;
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
prn_str.cljs$lang$applyTo = (function (arglist__18400){
var objs = cljs.core.seq(arglist__18400);;
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
pr.cljs$lang$applyTo = (function (arglist__18401){
var objs = cljs.core.seq(arglist__18401);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__18402){
var objs = cljs.core.seq(arglist__18402);;
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
print_str.cljs$lang$applyTo = (function (arglist__18403){
var objs = cljs.core.seq(arglist__18403);;
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
println.cljs$lang$applyTo = (function (arglist__18404){
var objs = cljs.core.seq(arglist__18404);;
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
println_str.cljs$lang$applyTo = (function (arglist__18405){
var objs = cljs.core.seq(arglist__18405);;
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
prn.cljs$lang$applyTo = (function (arglist__18406){
var objs = cljs.core.seq(arglist__18406);;
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
printf.cljs$lang$applyTo = (function (arglist__18407){
var fmt = cljs.core.first(arglist__18407);
var args = cljs.core.rest(arglist__18407);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__18409 = (function (n,len){
var ns__18408 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__18408) < len))
{{
var G__18419 = [cljs.core.str("0"),cljs.core.str(ns__18408)].join('');
ns__18408 = G__18419;
continue;
}
} else
{return ns__18408;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__18409.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__18409.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__18409.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__18409.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__18409.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__18409.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__18410 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__18410,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__18411 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__18411,"{",", ","}",opts,coll);
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__18412 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__18412,"{",", ","}",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__18413 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__18413,"{",", ","}",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4425__auto____18414 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4425__auto____18414))
{var nspc__18415 = temp__4425__auto____18414;
return [cljs.core.str(nspc__18415),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4425__auto____18416 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4425__auto____18416))
{var nspc__18417 = temp__4425__auto____18416;
return [cljs.core.str(nspc__18417),cljs.core.str("/")].join('');
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
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__18418 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__18418,"{",", ","}",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
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
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__18420 = this;
return (o === other);
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__18421 = this;
return this__18421.state;
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__18422 = this;
return this__18422.meta;
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__18423 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__18423.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__18424 = this;
var G__18425__18426 = cljs.core.seq.call(null,this__18424.watches);
if(G__18425__18426)
{var G__18428__18430 = cljs.core.first.call(null,G__18425__18426);
var vec__18429__18431 = G__18428__18430;
var key__18432 = cljs.core.nth.call(null,vec__18429__18431,0,null);
var f__18433 = cljs.core.nth.call(null,vec__18429__18431,1,null);
var G__18425__18434 = G__18425__18426;
var G__18428__18435 = G__18428__18430;
var G__18425__18436 = G__18425__18434;
while(true){
var vec__18437__18438 = G__18428__18435;
var key__18439 = cljs.core.nth.call(null,vec__18437__18438,0,null);
var f__18440 = cljs.core.nth.call(null,vec__18437__18438,1,null);
var G__18425__18441 = G__18425__18436;
f__18440.call(null,key__18439,this$,oldval,newval);
var temp__4425__auto____18442 = cljs.core.next.call(null,G__18425__18441);
if(temp__4425__auto____18442)
{var G__18425__18443 = temp__4425__auto____18442;
{
var G__18447 = cljs.core.first.call(null,G__18425__18443);
var G__18448 = G__18425__18443;
G__18428__18435 = G__18447;
G__18425__18436 = G__18448;
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
var this__18444 = this;
return this$.watches = cljs.core.assoc.call(null,this__18444.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__18445 = this;
return this$.watches = cljs.core.dissoc.call(null,this__18445.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__18446 = this;
return goog.getUid(this$);
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
var G__18460__delegate = function (x,p__18449){
var map__18455__18456 = p__18449;
var map__18455__18457 = ((cljs.core.seq_QMARK_.call(null,map__18455__18456))?cljs.core.apply.call(null,cljs.core.hash_map,map__18455__18456):map__18455__18456);
var meta__18458 = cljs.core._lookup.call(null,map__18455__18457,"\uFDD0'meta",null);
var validator__18459 = cljs.core._lookup.call(null,map__18455__18457,"\uFDD0'validator",null);
return (new cljs.core.Atom(x,meta__18458,validator__18459,null));
};
var G__18460 = function (x,var_args){
var p__18449 = null;
if (goog.isDef(var_args)) {
  p__18449 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18460__delegate.call(this, x, p__18449);
};
G__18460.cljs$lang$maxFixedArity = 1;
G__18460.cljs$lang$applyTo = (function (arglist__18461){
var x = cljs.core.first(arglist__18461);
var p__18449 = cljs.core.rest(arglist__18461);
return G__18460__delegate(x, p__18449);
});
G__18460.cljs$lang$arity$variadic = G__18460__delegate;
return G__18460;
})()
;
atom = function(x,var_args){
var p__18449 = var_args;
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
var temp__4425__auto____18465 = a.validator;
if(cljs.core.truth_(temp__4425__auto____18465))
{var validate__18466 = temp__4425__auto____18465;
if(cljs.core.truth_(validate__18466.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__18467 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__18467,new_value);
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
var G__18468__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__18468 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__18468__delegate.call(this, a, f, x, y, z, more);
};
G__18468.cljs$lang$maxFixedArity = 5;
G__18468.cljs$lang$applyTo = (function (arglist__18469){
var a = cljs.core.first(arglist__18469);
var f = cljs.core.first(cljs.core.next(arglist__18469));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18469)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18469))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18469)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__18469)))));
return G__18468__delegate(a, f, x, y, z, more);
});
G__18468.cljs$lang$arity$variadic = G__18468__delegate;
return G__18468;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__18470){
var iref = cljs.core.first(arglist__18470);
var f = cljs.core.first(cljs.core.next(arglist__18470));
var args = cljs.core.rest(cljs.core.next(arglist__18470));
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
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__18471 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__18471.state,(function (p__18472){
var map__18473__18474 = p__18472;
var map__18473__18475 = ((cljs.core.seq_QMARK_.call(null,map__18473__18474))?cljs.core.apply.call(null,cljs.core.hash_map,map__18473__18474):map__18473__18474);
var curr_state__18476 = map__18473__18475;
var done__18477 = cljs.core._lookup.call(null,map__18473__18475,"\uFDD0'done",null);
if(cljs.core.truth_(done__18477))
{return curr_state__18476;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__18471.f.call(null)});
}
})));
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__18478 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__18478.state));
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
var map__18507__18508 = options;
var map__18507__18509 = ((cljs.core.seq_QMARK_.call(null,map__18507__18508))?cljs.core.apply.call(null,cljs.core.hash_map,map__18507__18508):map__18507__18508);
var keywordize_keys__18510 = cljs.core._lookup.call(null,map__18507__18509,"\uFDD0'keywordize-keys",null);
var keyfn__18511 = (cljs.core.truth_(keywordize_keys__18510)?cljs.core.keyword:cljs.core.str);
var f__18534 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__8277__auto____18533 = (function iter__18523(s__18524){
return (new cljs.core.LazySeq(null,false,(function (){
var s__18524__18529 = s__18524;
while(true){
var temp__4425__auto____18530 = cljs.core.seq.call(null,s__18524__18529);
if(temp__4425__auto____18530)
{var xs__4977__auto____18531 = temp__4425__auto____18530;
var k__18532 = cljs.core.first.call(null,xs__4977__auto____18531);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__18511.call(null,k__18532),thisfn.call(null,(x[k__18532]))], true),iter__18523.call(null,cljs.core.rest.call(null,s__18524__18529)));
} else
{return null;
}
break;
}
}),null));
});
return iter__8277__auto____18533.call(null,cljs.core.js_keys.call(null,x));
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
return f__18534.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__18535){
var x = cljs.core.first(arglist__18535);
var options = cljs.core.rest(arglist__18535);
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
var mem__18540 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__18544__delegate = function (args){
var temp__4423__auto____18541 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__18540),args,null);
if(cljs.core.truth_(temp__4423__auto____18541))
{var v__18542 = temp__4423__auto____18541;
return v__18542;
} else
{var ret__18543 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__18540,cljs.core.assoc,args,ret__18543);
return ret__18543;
}
};
var G__18544 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__18544__delegate.call(this, args);
};
G__18544.cljs$lang$maxFixedArity = 0;
G__18544.cljs$lang$applyTo = (function (arglist__18545){
var args = cljs.core.seq(arglist__18545);;
return G__18544__delegate(args);
});
G__18544.cljs$lang$arity$variadic = G__18544__delegate;
return G__18544;
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
var ret__18547 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__18547))
{{
var G__18548 = ret__18547;
f = G__18548;
continue;
}
} else
{return ret__18547;
}
break;
}
});
var trampoline__2 = (function() { 
var G__18549__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__18549 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18549__delegate.call(this, f, args);
};
G__18549.cljs$lang$maxFixedArity = 1;
G__18549.cljs$lang$applyTo = (function (arglist__18550){
var f = cljs.core.first(arglist__18550);
var args = cljs.core.rest(arglist__18550);
return G__18549__delegate(f, args);
});
G__18549.cljs$lang$arity$variadic = G__18549__delegate;
return G__18549;
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
var k__18552 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__18552,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__18552,cljs.core.PersistentVector.EMPTY),x));
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
var or__4238__auto____18561 = cljs.core._EQ_.call(null,child,parent);
if(or__4238__auto____18561)
{return or__4238__auto____18561;
} else
{var or__4238__auto____18562 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__4238__auto____18562)
{return or__4238__auto____18562;
} else
{var and__4236__auto____18563 = cljs.core.vector_QMARK_.call(null,parent);
if(and__4236__auto____18563)
{var and__4236__auto____18564 = cljs.core.vector_QMARK_.call(null,child);
if(and__4236__auto____18564)
{var and__4236__auto____18565 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__4236__auto____18565)
{var ret__18566 = true;
var i__18567 = 0;
while(true){
if((function (){var or__4238__auto____18568 = cljs.core.not.call(null,ret__18566);
if(or__4238__auto____18568)
{return or__4238__auto____18568;
} else
{return (i__18567 === cljs.core.count.call(null,parent));
}
})())
{return ret__18566;
} else
{{
var G__18569 = isa_QMARK_.call(null,h,child.call(null,i__18567),parent.call(null,i__18567));
var G__18570 = (i__18567 + 1);
ret__18566 = G__18569;
i__18567 = G__18570;
continue;
}
}
break;
}
} else
{return and__4236__auto____18565;
}
} else
{return and__4236__auto____18564;
}
} else
{return and__4236__auto____18563;
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
var tp__18579 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__18580 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__18581 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__18582 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__4238__auto____18583 = ((cljs.core.contains_QMARK_.call(null,tp__18579.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__18581.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__18581.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__18579,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__18582.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__18580,parent,ta__18581),"\uFDD0'descendants":tf__18582.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__18581,tag,td__18580)});
})());
if(cljs.core.truth_(or__4238__auto____18583))
{return or__4238__auto____18583;
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
var parentMap__18588 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__18589 = (cljs.core.truth_(parentMap__18588.call(null,tag))?cljs.core.disj.call(null,parentMap__18588.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__18590 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__18589))?cljs.core.assoc.call(null,parentMap__18588,tag,childsParents__18589):cljs.core.dissoc.call(null,parentMap__18588,tag));
var deriv_seq__18591 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__18571_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__18571_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__18571_SHARP_),cljs.core.second.call(null,p1__18571_SHARP_)));
}),cljs.core.seq.call(null,newParents__18590)));
if(cljs.core.contains_QMARK_.call(null,parentMap__18588.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__18572_SHARP_,p2__18573_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__18572_SHARP_,p2__18573_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__18591));
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
var xprefs__18599 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__4238__auto____18601 = (cljs.core.truth_((function (){var and__4236__auto____18600 = xprefs__18599;
if(cljs.core.truth_(and__4236__auto____18600))
{return xprefs__18599.call(null,y);
} else
{return and__4236__auto____18600;
}
})())?true:null);
if(cljs.core.truth_(or__4238__auto____18601))
{return or__4238__auto____18601;
} else
{var or__4238__auto____18603 = (function (){var ps__18602 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__18602) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__18602),prefer_table)))
{} else
{}
{
var G__18606 = cljs.core.rest.call(null,ps__18602);
ps__18602 = G__18606;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__4238__auto____18603))
{return or__4238__auto____18603;
} else
{var or__4238__auto____18605 = (function (){var ps__18604 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__18604) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__18604),y,prefer_table)))
{} else
{}
{
var G__18607 = cljs.core.rest.call(null,ps__18604);
ps__18604 = G__18607;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__4238__auto____18605))
{return or__4238__auto____18605;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__4238__auto____18609 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__4238__auto____18609))
{return or__4238__auto____18609;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__18627 = cljs.core.reduce.call(null,(function (be,p__18619){
var vec__18620__18621 = p__18619;
var k__18622 = cljs.core.nth.call(null,vec__18620__18621,0,null);
var ___18623 = cljs.core.nth.call(null,vec__18620__18621,1,null);
var e__18624 = vec__18620__18621;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__18622))
{var be2__18626 = (cljs.core.truth_((function (){var or__4238__auto____18625 = (be == null);
if(or__4238__auto____18625)
{return or__4238__auto____18625;
} else
{return cljs.core.dominates.call(null,k__18622,cljs.core.first.call(null,be),prefer_table);
}
})())?e__18624:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__18626),k__18622,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__18622),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__18626)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__18626;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__18627))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__18627));
return cljs.core.second.call(null,best_entry__18627);
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
if((function (){var and__4236__auto____18632 = mf;
if(and__4236__auto____18632)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__4236__auto____18632;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__8178__auto____18633 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18634 = (cljs.core._reset[goog.typeOf(x__8178__auto____18633)]);
if(or__4238__auto____18634)
{return or__4238__auto____18634;
} else
{var or__4238__auto____18635 = (cljs.core._reset["_"]);
if(or__4238__auto____18635)
{return or__4238__auto____18635;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__4236__auto____18640 = mf;
if(and__4236__auto____18640)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__4236__auto____18640;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__8178__auto____18641 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18642 = (cljs.core._add_method[goog.typeOf(x__8178__auto____18641)]);
if(or__4238__auto____18642)
{return or__4238__auto____18642;
} else
{var or__4238__auto____18643 = (cljs.core._add_method["_"]);
if(or__4238__auto____18643)
{return or__4238__auto____18643;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__4236__auto____18648 = mf;
if(and__4236__auto____18648)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__4236__auto____18648;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__8178__auto____18649 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18650 = (cljs.core._remove_method[goog.typeOf(x__8178__auto____18649)]);
if(or__4238__auto____18650)
{return or__4238__auto____18650;
} else
{var or__4238__auto____18651 = (cljs.core._remove_method["_"]);
if(or__4238__auto____18651)
{return or__4238__auto____18651;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__4236__auto____18656 = mf;
if(and__4236__auto____18656)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__4236__auto____18656;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__8178__auto____18657 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18658 = (cljs.core._prefer_method[goog.typeOf(x__8178__auto____18657)]);
if(or__4238__auto____18658)
{return or__4238__auto____18658;
} else
{var or__4238__auto____18659 = (cljs.core._prefer_method["_"]);
if(or__4238__auto____18659)
{return or__4238__auto____18659;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__4236__auto____18664 = mf;
if(and__4236__auto____18664)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__4236__auto____18664;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__8178__auto____18665 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18666 = (cljs.core._get_method[goog.typeOf(x__8178__auto____18665)]);
if(or__4238__auto____18666)
{return or__4238__auto____18666;
} else
{var or__4238__auto____18667 = (cljs.core._get_method["_"]);
if(or__4238__auto____18667)
{return or__4238__auto____18667;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__4236__auto____18672 = mf;
if(and__4236__auto____18672)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__4236__auto____18672;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__8178__auto____18673 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18674 = (cljs.core._methods[goog.typeOf(x__8178__auto____18673)]);
if(or__4238__auto____18674)
{return or__4238__auto____18674;
} else
{var or__4238__auto____18675 = (cljs.core._methods["_"]);
if(or__4238__auto____18675)
{return or__4238__auto____18675;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__4236__auto____18680 = mf;
if(and__4236__auto____18680)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__4236__auto____18680;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__8178__auto____18681 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18682 = (cljs.core._prefers[goog.typeOf(x__8178__auto____18681)]);
if(or__4238__auto____18682)
{return or__4238__auto____18682;
} else
{var or__4238__auto____18683 = (cljs.core._prefers["_"]);
if(or__4238__auto____18683)
{return or__4238__auto____18683;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__4236__auto____18688 = mf;
if(and__4236__auto____18688)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__4236__auto____18688;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__8178__auto____18689 = (((mf == null))?null:mf);
return (function (){var or__4238__auto____18690 = (cljs.core._dispatch[goog.typeOf(x__8178__auto____18689)]);
if(or__4238__auto____18690)
{return or__4238__auto____18690;
} else
{var or__4238__auto____18691 = (cljs.core._dispatch["_"]);
if(or__4238__auto____18691)
{return or__4238__auto____18691;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__18694 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__18695 = cljs.core._get_method.call(null,mf,dispatch_val__18694);
if(cljs.core.truth_(target_fn__18695))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__18694)].join('')));
}
return cljs.core.apply.call(null,target_fn__18695,args);
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
this.cljs$lang$protocol_mask$partition1$ = 64;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__18696 = this;
cljs.core.swap_BANG_.call(null,this__18696.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18696.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18696.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__18696.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__18697 = this;
cljs.core.swap_BANG_.call(null,this__18697.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__18697.method_cache,this__18697.method_table,this__18697.cached_hierarchy,this__18697.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__18698 = this;
cljs.core.swap_BANG_.call(null,this__18698.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__18698.method_cache,this__18698.method_table,this__18698.cached_hierarchy,this__18698.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__18699 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__18699.cached_hierarchy),cljs.core.deref.call(null,this__18699.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__18699.method_cache,this__18699.method_table,this__18699.cached_hierarchy,this__18699.hierarchy);
}
var temp__4423__auto____18700 = cljs.core.deref.call(null,this__18699.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4423__auto____18700))
{var target_fn__18701 = temp__4423__auto____18700;
return target_fn__18701;
} else
{var temp__4423__auto____18702 = cljs.core.find_and_cache_best_method.call(null,this__18699.name,dispatch_val,this__18699.hierarchy,this__18699.method_table,this__18699.prefer_table,this__18699.method_cache,this__18699.cached_hierarchy);
if(cljs.core.truth_(temp__4423__auto____18702))
{var target_fn__18703 = temp__4423__auto____18702;
return target_fn__18703;
} else
{return cljs.core.deref.call(null,this__18699.method_table).call(null,this__18699.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__18704 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__18704.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__18704.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__18704.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__18704.method_cache,this__18704.method_table,this__18704.cached_hierarchy,this__18704.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__18705 = this;
return cljs.core.deref.call(null,this__18705.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__18706 = this;
return cljs.core.deref.call(null,this__18706.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__18707 = this;
return cljs.core.do_dispatch.call(null,mf,this__18707.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__18708 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__18710__delegate = function (_,args){
var self__18709 = this;
return cljs.core._dispatch.call(null,self__18709,args);
};
var G__18710 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__18710__delegate.call(this, _, args);
};
G__18710.cljs$lang$maxFixedArity = 1;
G__18710.cljs$lang$applyTo = (function (arglist__18711){
var _ = cljs.core.first(arglist__18711);
var args = cljs.core.rest(arglist__18711);
return G__18710__delegate(_, args);
});
G__18710.cljs$lang$arity$variadic = G__18710__delegate;
return G__18710;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__18712 = this;
return cljs.core._dispatch.call(null,self__18712,args);
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
this.cljs$lang$protocol_mask$partition0$ = 543162368;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.toString = (function (){
var this__18713 = this;
var this__18714 = this;
return cljs.core.pr_str.call(null,this__18714);
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__18715 = this;
var and__4236__auto____18716 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__4236__auto____18716)
{return (this__18715.uuid === other.uuid);
} else
{return and__4236__auto____18716;
}
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_18718,_){
var this__18717 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__18717.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__18719 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID;
