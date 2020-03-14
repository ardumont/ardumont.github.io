goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__4236__auto____18873 = reader;
if(and__4236__auto____18873)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__4236__auto____18873;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__8178__auto____18874 = (((reader == null))?null:reader);
return (function (){var or__4238__auto____18875 = (cljs.reader.read_char[goog.typeOf(x__8178__auto____18874)]);
if(or__4238__auto____18875)
{return or__4238__auto____18875;
} else
{var or__4238__auto____18876 = (cljs.reader.read_char["_"]);
if(or__4238__auto____18876)
{return or__4238__auto____18876;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__4236__auto____18881 = reader;
if(and__4236__auto____18881)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__4236__auto____18881;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__8178__auto____18882 = (((reader == null))?null:reader);
return (function (){var or__4238__auto____18883 = (cljs.reader.unread[goog.typeOf(x__8178__auto____18882)]);
if(or__4238__auto____18883)
{return or__4238__auto____18883;
} else
{var or__4238__auto____18884 = (cljs.reader.unread["_"]);
if(or__4238__auto____18884)
{return or__4238__auto____18884;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$lang$type = true;
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__8124__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__18885 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__18885.buffer_atom)))
{var idx__18886 = cljs.core.deref.call(null,this__18885.index_atom);
cljs.core.swap_BANG_.call(null,this__18885.index_atom,cljs.core.inc);
return (this__18885.s[idx__18886]);
} else
{var buf__18887 = cljs.core.deref.call(null,this__18885.buffer_atom);
cljs.core.swap_BANG_.call(null,this__18885.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__18887);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__18888 = this;
return cljs.core.swap_BANG_.call(null,this__18888.buffer_atom,(function (p1__18868_SHARP_){
return cljs.core.cons.call(null,ch,p1__18868_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__4238__auto____18890 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__4238__auto____18890))
{return or__4238__auto____18890;
} else
{return ("," === ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric(ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return (";" === ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__4238__auto____18895 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__4238__auto____18895)
{return or__4238__auto____18895;
} else
{var and__4236__auto____18897 = (function (){var or__4238__auto____18896 = ("+" === initch);
if(or__4238__auto____18896)
{return or__4238__auto____18896;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__4236__auto____18897))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__18898 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__18898);
return next_ch__18898;
})());
} else
{return and__4236__auto____18897;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__18899){
var rdr = cljs.core.first(arglist__18899);
var msg = cljs.core.rest(arglist__18899);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__4236__auto____18903 = !((ch === "#"));
if(and__4236__auto____18903)
{var and__4236__auto____18904 = !((ch === "'"));
if(and__4236__auto____18904)
{var and__4236__auto____18905 = !((ch === ":"));
if(and__4236__auto____18905)
{return cljs.reader.macros.call(null,ch);
} else
{return and__4236__auto____18905;
}
} else
{return and__4236__auto____18904;
}
} else
{return and__4236__auto____18903;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__18910 = (new goog.string.StringBuffer(initch));
var ch__18911 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__4238__auto____18912 = (ch__18911 == null);
if(or__4238__auto____18912)
{return or__4238__auto____18912;
} else
{var or__4238__auto____18913 = cljs.reader.whitespace_QMARK_.call(null,ch__18911);
if(or__4238__auto____18913)
{return or__4238__auto____18913;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__18911);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__18911);
return sb__18910.toString();
} else
{{
var G__18914 = (function (){sb__18910.append(ch__18911);
return sb__18910;
})();
var G__18915 = cljs.reader.read_char.call(null,rdr);
sb__18910 = G__18914;
ch__18911 = G__18915;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){
while(true){
var ch__18919 = cljs.reader.read_char.call(null,reader);
if((function (){var or__4238__auto____18920 = (ch__18919 === "n");
if(or__4238__auto____18920)
{return or__4238__auto____18920;
} else
{var or__4238__auto____18921 = (ch__18919 === "r");
if(or__4238__auto____18921)
{return or__4238__auto____18921;
} else
{return (ch__18919 == null);
}
}
})())
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.re_find_STAR_ = (function re_find_STAR_(re,s){
var matches__18923 = re.exec(s);
if((matches__18923 == null))
{return null;
} else
{if((matches__18923.length === 1))
{return (matches__18923[0]);
} else
{return matches__18923;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__18931 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__18932 = (groups__18931[2]);
if(!((function (){var or__4238__auto____18933 = (group3__18932 == null);
if(or__4238__auto____18933)
{return or__4238__auto____18933;
} else
{return (group3__18932.length < 1);
}
})()))
{return 0;
} else
{var negate__18934 = ((("-" === (groups__18931[1])))?-1:1);
var a__18935 = (cljs.core.truth_((groups__18931[3]))?[(groups__18931[3]),10]:(cljs.core.truth_((groups__18931[4]))?[(groups__18931[4]),16]:(cljs.core.truth_((groups__18931[5]))?[(groups__18931[5]),8]:(cljs.core.truth_((groups__18931[7]))?[(groups__18931[7]),parseInt((groups__18931[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__18936 = (a__18935[0]);
var radix__18937 = (a__18935[1]);
if((n__18936 == null))
{return null;
} else
{return (negate__18934 * parseInt(n__18936,radix__18937));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__18941 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__18942 = (groups__18941[1]);
var denominator__18943 = (groups__18941[2]);
return (parseInt(numinator__18942) / parseInt(denominator__18943));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__18946 = re.exec(s);
if((function (){var and__4236__auto____18947 = !((matches__18946 == null));
if(and__4236__auto____18947)
{return ((matches__18946[0]) === s);
} else
{return and__4236__auto____18947;
}
})())
{if((matches__18946.length === 1))
{return (matches__18946[0]);
} else
{return matches__18946;
}
} else
{return null;
}
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = (function escape_char_map(c){
if((c === "t"))
{return "\t";
} else
{if((c === "r"))
{return "\r";
} else
{if((c === "n"))
{return "\n";
} else
{if((c === "\\"))
{return "\\";
} else
{if((c === "\""))
{return "\"";
} else
{if((c === "b"))
{return "\b";
} else
{if((c === "f"))
{return "\f";
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
});
cljs.reader.read_2_chars = (function read_2_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.read_4_chars = (function read_4_chars(reader){
return (new goog.string.StringBuffer(cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader),cljs.reader.read_char.call(null,reader))).toString();
});
cljs.reader.unicode_2_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{2}");
cljs.reader.unicode_4_pattern = cljs.core.re_pattern.call(null,"[0-9A-Fa-f]{4}");
cljs.reader.validate_unicode_escape = (function validate_unicode_escape(unicode_pattern,reader,escape_char,unicode_str){
if(cljs.core.truth_(cljs.core.re_matches.call(null,unicode_pattern,unicode_str)))
{return unicode_str;
} else
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",escape_char,unicode_str);
}
});
cljs.reader.make_unicode_char = (function make_unicode_char(code_str){
var code__18949 = parseInt(code_str,16);
return String.fromCharCode(code__18949);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__18952 = cljs.reader.read_char.call(null,reader);
var mapresult__18953 = cljs.reader.escape_char_map.call(null,ch__18952);
if(cljs.core.truth_(mapresult__18953))
{return mapresult__18953;
} else
{if((ch__18952 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__18952,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__18952 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__18952,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__18952))
{return String.fromCharCode(ch__18952);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__18952);
} else
{return null;
}
}
}
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__18955 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__18955)))
{{
var G__18956 = cljs.reader.read_char.call(null,rdr);
ch__18955 = G__18956;
continue;
}
} else
{return ch__18955;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__18963 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__18964 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__18964))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__18964))
{return cljs.core.persistent_BANG_.call(null,a__18963);
} else
{var temp__4423__auto____18965 = cljs.reader.macros.call(null,ch__18964);
if(cljs.core.truth_(temp__4423__auto____18965))
{var macrofn__18966 = temp__4423__auto____18965;
var mret__18967 = macrofn__18966.call(null,rdr,ch__18964);
{
var G__18969 = (((mret__18967 === rdr))?a__18963:cljs.core.conj_BANG_.call(null,a__18963,mret__18967));
a__18963 = G__18969;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__18964);
var o__18968 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__18970 = (((o__18968 === rdr))?a__18963:cljs.core.conj_BANG_.call(null,a__18963,o__18968));
a__18963 = G__18970;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__18975 = cljs.reader.read_char.call(null,rdr);
var dm__18976 = cljs.reader.dispatch_macros.call(null,ch__18975);
if(cljs.core.truth_(dm__18976))
{return dm__18976.call(null,rdr,_);
} else
{var temp__4423__auto____18977 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__18975);
if(cljs.core.truth_(temp__4423__auto____18977))
{var obj__18978 = temp__4423__auto____18977;
return obj__18978;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__18975);
}
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__18980 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__18980)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__18980);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__18987 = (new goog.string.StringBuffer(initch));
var ch__18988 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__4238__auto____18989 = (ch__18988 == null);
if(or__4238__auto____18989)
{return or__4238__auto____18989;
} else
{var or__4238__auto____18990 = cljs.reader.whitespace_QMARK_.call(null,ch__18988);
if(or__4238__auto____18990)
{return or__4238__auto____18990;
} else
{return cljs.reader.macros.call(null,ch__18988);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__18988);
var s__18991 = buffer__18987.toString();
var or__4238__auto____18992 = cljs.reader.match_number.call(null,s__18991);
if(cljs.core.truth_(or__4238__auto____18992))
{return or__4238__auto____18992;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__18991,"]");
}
} else
{{
var G__18993 = (function (){buffer__18987.append(ch__18988);
return buffer__18987;
})();
var G__18994 = cljs.reader.read_char.call(null,reader);
buffer__18987 = G__18993;
ch__18988 = G__18994;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__18997 = (new goog.string.StringBuffer());
var ch__18998 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__18998 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__18998))
{{
var G__18999 = (function (){buffer__18997.append(cljs.reader.escape_char.call(null,buffer__18997,reader));
return buffer__18997;
})();
var G__19000 = cljs.reader.read_char.call(null,reader);
buffer__18997 = G__18999;
ch__18998 = G__19000;
continue;
}
} else
{if(("\"" === ch__18998))
{return buffer__18997.toString();
} else
{if("\uFDD0'default")
{{
var G__19001 = (function (){buffer__18997.append(ch__18998);
return buffer__18997;
})();
var G__19002 = cljs.reader.read_char.call(null,reader);
buffer__18997 = G__19001;
ch__18998 = G__19002;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = (function special_symbols(t,not_found){
if((t === "nil"))
{return null;
} else
{if((t === "true"))
{return true;
} else
{if((t === "false"))
{return false;
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
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__19004 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__19004,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__19004,0,token__19004.indexOf("/")),cljs.core.subs.call(null,token__19004,(token__19004.indexOf("/") + 1),token__19004.length));
} else
{return cljs.reader.special_symbols.call(null,token__19004,cljs.core.symbol.call(null,token__19004));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__19014 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__19015 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__19014);
var token__19016 = (a__19015[0]);
var ns__19017 = (a__19015[1]);
var name__19018 = (a__19015[2]);
if(cljs.core.truth_((function (){var or__4238__auto____19020 = (function (){var and__4236__auto____19019 = !((void 0 === ns__19017));
if(and__4236__auto____19019)
{return (ns__19017.substring((ns__19017.length - 2),ns__19017.length) === ":/");
} else
{return and__4236__auto____19019;
}
})();
if(cljs.core.truth_(or__4238__auto____19020))
{return or__4238__auto____19020;
} else
{var or__4238__auto____19021 = ((name__19018[(name__19018.length - 1)]) === ":");
if(or__4238__auto____19021)
{return or__4238__auto____19021;
} else
{return !((token__19016.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__19016);
} else
{if((function (){var and__4236__auto____19022 = !((ns__19017 == null));
if(and__4236__auto____19022)
{return (ns__19017.length > 0);
} else
{return and__4236__auto____19022;
}
})())
{return cljs.core.keyword.call(null,ns__19017.substring(0,ns__19017.indexOf("/")),name__19018);
} else
{return cljs.core.keyword.call(null,token__19016);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.symbol_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.string_QMARK_.call(null,f))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.keyword_QMARK_.call(null,f))
{return cljs.core.PersistentArrayMap.fromArrays([f],[true]);
} else
{if("\uFDD0'else")
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__19028 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__19028))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__19029 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__19030__19031 = o__19029;
if(G__19030__19031)
{if((function (){var or__4238__auto____19032 = (G__19030__19031.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__4238__auto____19032)
{return or__4238__auto____19032;
} else
{return G__19030__19031.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__19030__19031.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__19030__19031);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__19030__19031);
}
})())
{return cljs.core.with_meta.call(null,o__19029,cljs.core.merge.call(null,cljs.core.meta.call(null,o__19029),m__19028));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = (function macros(c){
if((c === "\""))
{return cljs.reader.read_string_STAR_;
} else
{if((c === ":"))
{return cljs.reader.read_keyword;
} else
{if((c === ";"))
{return cljs.reader.not_implemented;
} else
{if((c === "'"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'quote");
} else
{if((c === "@"))
{return cljs.reader.wrapping_reader.call(null,"\uFDD1'deref");
} else
{if((c === "^"))
{return cljs.reader.read_meta;
} else
{if((c === "`"))
{return cljs.reader.not_implemented;
} else
{if((c === "~"))
{return cljs.reader.not_implemented;
} else
{if((c === "("))
{return cljs.reader.read_list;
} else
{if((c === ")"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "["))
{return cljs.reader.read_vector;
} else
{if((c === "]"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "{"))
{return cljs.reader.read_map;
} else
{if((c === "}"))
{return cljs.reader.read_unmatched_delimiter;
} else
{if((c === "\\"))
{return cljs.reader.read_char;
} else
{if((c === "%"))
{return cljs.reader.not_implemented;
} else
{if((c === "#"))
{return cljs.reader.read_dispatch;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
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
cljs.reader.dispatch_macros = (function dispatch_macros(s){
if((s === "{"))
{return cljs.reader.read_set;
} else
{if((s === "<"))
{return cljs.reader.throwing_reader.call(null,"Unreadable form");
} else
{if((s === "\""))
{return cljs.reader.read_regex;
} else
{if((s === "!"))
{return cljs.reader.read_comment;
} else
{if((s === "_"))
{return cljs.reader.read_discard;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
}
}
}
});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__19036 = cljs.reader.read_char.call(null,reader);
if((ch__19036 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__19036))
{{
var G__19039 = reader;
var G__19040 = eof_is_error;
var G__19041 = sentinel;
var G__19042 = is_recursive;
reader = G__19039;
eof_is_error = G__19040;
sentinel = G__19041;
is_recursive = G__19042;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__19036))
{{
var G__19043 = cljs.reader.read_comment.call(null,reader,ch__19036);
var G__19044 = eof_is_error;
var G__19045 = sentinel;
var G__19046 = is_recursive;
reader = G__19043;
eof_is_error = G__19044;
sentinel = G__19045;
is_recursive = G__19046;
continue;
}
} else
{if("\uFDD0'else")
{var f__19037 = cljs.reader.macros.call(null,ch__19036);
var res__19038 = (cljs.core.truth_(f__19037)?f__19037.call(null,reader,ch__19036):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__19036))?cljs.reader.read_number.call(null,reader,ch__19036):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__19036):null)));
if((res__19038 === reader))
{{
var G__19047 = reader;
var G__19048 = eof_is_error;
var G__19049 = sentinel;
var G__19050 = is_recursive;
reader = G__19047;
eof_is_error = G__19048;
sentinel = G__19049;
is_recursive = G__19050;
continue;
}
} else
{return res__19038;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__19052 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__19052,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__19054 = (new goog.string.StringBuffer(s));
while(true){
if((b__19054.getLength() < width))
{{
var G__19055 = b__19054.append("0");
b__19054 = G__19055;
continue;
}
} else
{return b__19054.toString();
}
break;
}
} else
{return null;
}
}
}
});
cljs.reader.divisible_QMARK_ = (function divisible_QMARK_(num,div){
return ((num % div) === 0);
});
cljs.reader.indivisible_QMARK_ = (function indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function leap_year_QMARK_(year){
var and__4236__auto____19058 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__4236__auto____19058))
{var or__4238__auto____19059 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__4238__auto____19059))
{return or__4238__auto____19059;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__4236__auto____19058;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__19064 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__19065 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__19065:dim_norm__19064),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__19066 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__19068 = (function (low,n,high,msg){
if((function (){var and__4236__auto____19067 = (low <= n);
if(and__4236__auto____19067)
{return (n <= high);
} else
{return and__4236__auto____19067;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4425__auto____19069 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__19066,ts)));
if(cljs.core.truth_(temp__4425__auto____19069))
{var vec__19070__19073 = temp__4425__auto____19069;
var vec__19071__19074 = cljs.core.nth.call(null,vec__19070__19073,0,null);
var ___19075 = cljs.core.nth.call(null,vec__19071__19074,0,null);
var years__19076 = cljs.core.nth.call(null,vec__19071__19074,1,null);
var months__19077 = cljs.core.nth.call(null,vec__19071__19074,2,null);
var days__19078 = cljs.core.nth.call(null,vec__19071__19074,3,null);
var hours__19079 = cljs.core.nth.call(null,vec__19071__19074,4,null);
var minutes__19080 = cljs.core.nth.call(null,vec__19071__19074,5,null);
var seconds__19081 = cljs.core.nth.call(null,vec__19071__19074,6,null);
var milliseconds__19082 = cljs.core.nth.call(null,vec__19071__19074,7,null);
var vec__19072__19083 = cljs.core.nth.call(null,vec__19070__19073,1,null);
var ___19084 = cljs.core.nth.call(null,vec__19072__19083,0,null);
var ___19085 = cljs.core.nth.call(null,vec__19072__19083,1,null);
var ___19086 = cljs.core.nth.call(null,vec__19072__19083,2,null);
var V__19087 = vec__19070__19073;
var vec__19088__19091 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__19063_SHARP_){
return parseInt(p1__19063_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__19061_SHARP_,p2__19060_SHARP_){
return cljs.core.update_in.call(null,p2__19060_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__19061_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__19062_SHARP_){
if(cljs.core._EQ_.call(null,p1__19062_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__19087));
var vec__19089__19092 = cljs.core.nth.call(null,vec__19088__19091,0,null);
var ___19093 = cljs.core.nth.call(null,vec__19089__19092,0,null);
var y__19094 = cljs.core.nth.call(null,vec__19089__19092,1,null);
var mo__19095 = cljs.core.nth.call(null,vec__19089__19092,2,null);
var d__19096 = cljs.core.nth.call(null,vec__19089__19092,3,null);
var h__19097 = cljs.core.nth.call(null,vec__19089__19092,4,null);
var m__19098 = cljs.core.nth.call(null,vec__19089__19092,5,null);
var s__19099 = cljs.core.nth.call(null,vec__19089__19092,6,null);
var ms__19100 = cljs.core.nth.call(null,vec__19089__19092,7,null);
var vec__19090__19101 = cljs.core.nth.call(null,vec__19088__19091,1,null);
var offset_sign__19102 = cljs.core.nth.call(null,vec__19090__19101,0,null);
var offset_hours__19103 = cljs.core.nth.call(null,vec__19090__19101,1,null);
var offset_minutes__19104 = cljs.core.nth.call(null,vec__19090__19101,2,null);
var offset__19105 = (offset_sign__19102 * ((offset_hours__19103 * 60) + offset_minutes__19104));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__19076))?1970:y__19094),((cljs.core.not.call(null,months__19077))?1:check__19068.call(null,1,mo__19095,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__19078))?1:check__19068.call(null,1,d__19096,cljs.reader.days_in_month.call(null,mo__19095,cljs.reader.leap_year_QMARK_.call(null,y__19094)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__19079))?0:check__19068.call(null,0,h__19097,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__19080))?0:check__19068.call(null,0,m__19098,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__19081))?0:check__19068.call(null,0,s__19099,((cljs.core._EQ_.call(null,m__19098,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__19082))?0:check__19068.call(null,0,ms__19100,999,"timestamp millisecond field must be in range 0..999")),offset__19105], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4423__auto____19117 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4423__auto____19117))
{var vec__19118__19119 = temp__4423__auto____19117;
var years__19120 = cljs.core.nth.call(null,vec__19118__19119,0,null);
var months__19121 = cljs.core.nth.call(null,vec__19118__19119,1,null);
var days__19122 = cljs.core.nth.call(null,vec__19118__19119,2,null);
var hours__19123 = cljs.core.nth.call(null,vec__19118__19119,3,null);
var minutes__19124 = cljs.core.nth.call(null,vec__19118__19119,4,null);
var seconds__19125 = cljs.core.nth.call(null,vec__19118__19119,5,null);
var ms__19126 = cljs.core.nth.call(null,vec__19118__19119,6,null);
var offset__19127 = cljs.core.nth.call(null,vec__19118__19119,7,null);
return (new Date((Date.UTC(years__19120,(months__19121 - 1),days__19122,hours__19123,minutes__19124,seconds__19125,ms__19126) - ((offset__19127 * 60) * 1000))));
} else
{return cljs.reader.reader_error.call(null,null,[cljs.core.str("Unrecognized date/time syntax: "),cljs.core.str(ts)].join(''));
}
});
cljs.reader.read_date = (function read_date(s){
if(cljs.core.string_QMARK_.call(null,s))
{return cljs.reader.parse_timestamp.call(null,s);
} else
{return cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.");
}
});
cljs.reader.read_queue = (function read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems))
{return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else
{return cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.");
}
});
cljs.reader.read_uuid = (function read_uuid(uuid){
if(cljs.core.string_QMARK_.call(null,uuid))
{return (new cljs.core.UUID(uuid));
} else
{return cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.");
}
});
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject(["inst","uuid","queue"],{"inst":cljs.reader.read_date,"uuid":cljs.reader.read_uuid,"queue":cljs.reader.read_queue}));
cljs.reader.maybe_read_tagged_type = (function maybe_read_tagged_type(rdr,initch){
var tag__19131 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__4423__auto____19132 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__19131),null);
if(cljs.core.truth_(temp__4423__auto____19132))
{var pfn__19133 = temp__4423__auto____19132;
return pfn__19133.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__19131)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__19136 = cljs.core.name.call(null,tag);
var old_parser__19137 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__19136,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__19136,f);
return old_parser__19137;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__19140 = cljs.core.name.call(null,tag);
var old_parser__19141 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__19140,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__19140);
return old_parser__19141;
});
