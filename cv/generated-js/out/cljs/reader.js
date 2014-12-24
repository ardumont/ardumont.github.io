goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if((function (){var and__3941__auto____30589 = reader;
if(and__3941__auto____30589)
{return reader.cljs$reader$PushbackReader$read_char$arity$1;
} else
{return and__3941__auto____30589;
}
})())
{return reader.cljs$reader$PushbackReader$read_char$arity$1(reader);
} else
{var x__19152__auto____30590 = (((reader == null))?null:reader);
return (function (){var or__3943__auto____30591 = (cljs.reader.read_char[goog.typeOf(x__19152__auto____30590)]);
if(or__3943__auto____30591)
{return or__3943__auto____30591;
} else
{var or__3943__auto____30592 = (cljs.reader.read_char["_"]);
if(or__3943__auto____30592)
{return or__3943__auto____30592;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if((function (){var and__3941__auto____30597 = reader;
if(and__3941__auto____30597)
{return reader.cljs$reader$PushbackReader$unread$arity$2;
} else
{return and__3941__auto____30597;
}
})())
{return reader.cljs$reader$PushbackReader$unread$arity$2(reader,ch);
} else
{var x__19152__auto____30598 = (((reader == null))?null:reader);
return (function (){var or__3943__auto____30599 = (cljs.reader.unread[goog.typeOf(x__19152__auto____30598)]);
if(or__3943__auto____30599)
{return or__3943__auto____30599;
} else
{var or__3943__auto____30600 = (cljs.reader.unread["_"]);
if(or__3943__auto____30600)
{return or__3943__auto____30600;
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
cljs.reader.StringPushbackReader.cljs$lang$ctorPrSeq = (function (this__19098__auto__){
return cljs.core.list.call(null,"cljs.reader/StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1 = (function (reader){
var this__30601 = this;
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__30601.buffer_atom)))
{var idx__30602 = cljs.core.deref.call(null,this__30601.index_atom);
cljs.core.swap_BANG_.call(null,this__30601.index_atom,cljs.core.inc);
return (this__30601.s[idx__30602]);
} else
{var buf__30603 = cljs.core.deref.call(null,this__30601.buffer_atom);
cljs.core.swap_BANG_.call(null,this__30601.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__30603);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2 = (function (reader,ch){
var this__30604 = this;
return cljs.core.swap_BANG_.call(null,this__30604.buffer_atom,(function (p1__30584_SHARP_){
return cljs.core.cons.call(null,ch,p1__30584_SHARP_);
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
var or__3943__auto____30606 = goog.string.isBreakingWhitespace(ch);
if(cljs.core.truth_(or__3943__auto____30606))
{return or__3943__auto____30606;
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
var or__3943__auto____30611 = cljs.reader.numeric_QMARK_.call(null,initch);
if(or__3943__auto____30611)
{return or__3943__auto____30611;
} else
{var and__3941__auto____30613 = (function (){var or__3943__auto____30612 = ("+" === initch);
if(or__3943__auto____30612)
{return or__3943__auto____30612;
} else
{return ("-" === initch);
}
})();
if(cljs.core.truth_(and__3941__auto____30613))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__30614 = cljs.reader.read_char.call(null,reader);
cljs.reader.unread.call(null,reader,next_ch__30614);
return next_ch__30614;
})());
} else
{return and__3941__auto____30613;
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
reader_error.cljs$lang$applyTo = (function (arglist__30615){
var rdr = cljs.core.first(arglist__30615);
var msg = cljs.core.rest(arglist__30615);
return reader_error__delegate(rdr, msg);
});
reader_error.cljs$lang$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3941__auto____30619 = !((ch === "#"));
if(and__3941__auto____30619)
{var and__3941__auto____30620 = !((ch === "'"));
if(and__3941__auto____30620)
{var and__3941__auto____30621 = !((ch === ":"));
if(and__3941__auto____30621)
{return cljs.reader.macros.call(null,ch);
} else
{return and__3941__auto____30621;
}
} else
{return and__3941__auto____30620;
}
} else
{return and__3941__auto____30619;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__30626 = (new goog.string.StringBuffer(initch));
var ch__30627 = cljs.reader.read_char.call(null,rdr);
while(true){
if((function (){var or__3943__auto____30628 = (ch__30627 == null);
if(or__3943__auto____30628)
{return or__3943__auto____30628;
} else
{var or__3943__auto____30629 = cljs.reader.whitespace_QMARK_.call(null,ch__30627);
if(or__3943__auto____30629)
{return or__3943__auto____30629;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__30627);
}
}
})())
{cljs.reader.unread.call(null,rdr,ch__30627);
return sb__30626.toString();
} else
{{
var G__30630 = (function (){sb__30626.append(ch__30627);
return sb__30626;
})();
var G__30631 = cljs.reader.read_char.call(null,rdr);
sb__30626 = G__30630;
ch__30627 = G__30631;
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
var ch__30635 = cljs.reader.read_char.call(null,reader);
if((function (){var or__3943__auto____30636 = (ch__30635 === "n");
if(or__3943__auto____30636)
{return or__3943__auto____30636;
} else
{var or__3943__auto____30637 = (ch__30635 === "r");
if(or__3943__auto____30637)
{return or__3943__auto____30637;
} else
{return (ch__30635 == null);
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
var matches__30639 = re.exec(s);
if((matches__30639 == null))
{return null;
} else
{if((matches__30639.length === 1))
{return (matches__30639[0]);
} else
{return matches__30639;
}
}
});
cljs.reader.match_int = (function match_int(s){
var groups__30647 = cljs.reader.re_find_STAR_.call(null,cljs.reader.int_pattern,s);
var group3__30648 = (groups__30647[2]);
if(!((function (){var or__3943__auto____30649 = (group3__30648 == null);
if(or__3943__auto____30649)
{return or__3943__auto____30649;
} else
{return (group3__30648.length < 1);
}
})()))
{return 0;
} else
{var negate__30650 = ((("-" === (groups__30647[1])))?-1:1);
var a__30651 = (cljs.core.truth_((groups__30647[3]))?[(groups__30647[3]),10]:(cljs.core.truth_((groups__30647[4]))?[(groups__30647[4]),16]:(cljs.core.truth_((groups__30647[5]))?[(groups__30647[5]),8]:(cljs.core.truth_((groups__30647[7]))?[(groups__30647[7]),parseInt((groups__30647[7]))]:(("\uFDD0'default")?[null,null]:null)))));
var n__30652 = (a__30651[0]);
var radix__30653 = (a__30651[1]);
if((n__30652 == null))
{return null;
} else
{return (negate__30650 * parseInt(n__30652,radix__30653));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__30657 = cljs.reader.re_find_STAR_.call(null,cljs.reader.ratio_pattern,s);
var numinator__30658 = (groups__30657[1]);
var denominator__30659 = (groups__30657[2]);
return (parseInt(numinator__30658) / parseInt(denominator__30659));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat(s);
});
cljs.reader.re_matches_STAR_ = (function re_matches_STAR_(re,s){
var matches__30662 = re.exec(s);
if((function (){var and__3941__auto____30663 = !((matches__30662 == null));
if(and__3941__auto____30663)
{return ((matches__30662[0]) === s);
} else
{return and__3941__auto____30663;
}
})())
{if((matches__30662.length === 1))
{return (matches__30662[0]);
} else
{return matches__30662;
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
var code__30665 = parseInt(code_str,16);
return String.fromCharCode(code__30665);
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__30668 = cljs.reader.read_char.call(null,reader);
var mapresult__30669 = cljs.reader.escape_char_map.call(null,ch__30668);
if(cljs.core.truth_(mapresult__30669))
{return mapresult__30669;
} else
{if((ch__30668 === "x"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,reader,ch__30668,cljs.reader.read_2_chars.call(null,reader)));
} else
{if((ch__30668 === "u"))
{return cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,reader,ch__30668,cljs.reader.read_4_chars.call(null,reader)));
} else
{if(cljs.reader.numeric_QMARK_.call(null,ch__30668))
{return String.fromCharCode(ch__30668);
} else
{if("\uFDD0'else")
{return cljs.reader.reader_error.call(null,reader,"Unexpected unicode escape \\",ch__30668);
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
var ch__30671 = cljs.reader.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_(pred.call(null,ch__30671)))
{{
var G__30672 = cljs.reader.read_char.call(null,rdr);
ch__30671 = G__30672;
continue;
}
} else
{return ch__30671;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__30679 = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var ch__30680 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);
if(cljs.core.truth_(ch__30680))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if((delim === ch__30680))
{return cljs.core.persistent_BANG_.call(null,a__30679);
} else
{var temp__4090__auto____30681 = cljs.reader.macros.call(null,ch__30680);
if(cljs.core.truth_(temp__4090__auto____30681))
{var macrofn__30682 = temp__4090__auto____30681;
var mret__30683 = macrofn__30682.call(null,rdr,ch__30680);
{
var G__30685 = (((mret__30683 === rdr))?a__30679:cljs.core.conj_BANG_.call(null,a__30679,mret__30683));
a__30679 = G__30685;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__30680);
var o__30684 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);
{
var G__30686 = (((o__30684 === rdr))?a__30679:cljs.core.conj_BANG_.call(null,a__30679,o__30684));
a__30679 = G__30686;
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
var ch__30691 = cljs.reader.read_char.call(null,rdr);
var dm__30692 = cljs.reader.dispatch_macros.call(null,ch__30691);
if(cljs.core.truth_(dm__30692))
{return dm__30692.call(null,rdr,_);
} else
{var temp__4090__auto____30693 = cljs.reader.maybe_read_tagged_type.call(null,rdr,ch__30691);
if(cljs.core.truth_(temp__4090__auto____30693))
{var obj__30694 = temp__4090__auto____30693;
return obj__30694;
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__30691);
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
var l__30696 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__30696)))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__30696);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__30703 = (new goog.string.StringBuffer(initch));
var ch__30704 = cljs.reader.read_char.call(null,reader);
while(true){
if(cljs.core.truth_((function (){var or__3943__auto____30705 = (ch__30704 == null);
if(or__3943__auto____30705)
{return or__3943__auto____30705;
} else
{var or__3943__auto____30706 = cljs.reader.whitespace_QMARK_.call(null,ch__30704);
if(or__3943__auto____30706)
{return or__3943__auto____30706;
} else
{return cljs.reader.macros.call(null,ch__30704);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__30704);
var s__30707 = buffer__30703.toString();
var or__3943__auto____30708 = cljs.reader.match_number.call(null,s__30707);
if(cljs.core.truth_(or__3943__auto____30708))
{return or__3943__auto____30708;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__30707,"]");
}
} else
{{
var G__30709 = (function (){buffer__30703.append(ch__30704);
return buffer__30703;
})();
var G__30710 = cljs.reader.read_char.call(null,reader);
buffer__30703 = G__30709;
ch__30704 = G__30710;
continue;
}
}
break;
}
});
cljs.reader.read_string_STAR_ = (function read_string_STAR_(reader,_){
var buffer__30713 = (new goog.string.StringBuffer());
var ch__30714 = cljs.reader.read_char.call(null,reader);
while(true){
if((ch__30714 == null))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(("\\" === ch__30714))
{{
var G__30715 = (function (){buffer__30713.append(cljs.reader.escape_char.call(null,buffer__30713,reader));
return buffer__30713;
})();
var G__30716 = cljs.reader.read_char.call(null,reader);
buffer__30713 = G__30715;
ch__30714 = G__30716;
continue;
}
} else
{if(("\"" === ch__30714))
{return buffer__30713.toString();
} else
{if("\uFDD0'default")
{{
var G__30717 = (function (){buffer__30713.append(ch__30714);
return buffer__30713;
})();
var G__30718 = cljs.reader.read_char.call(null,reader);
buffer__30713 = G__30717;
ch__30714 = G__30718;
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
var token__30720 = cljs.reader.read_token.call(null,reader,initch);
if(cljs.core.truth_(goog.string.contains(token__30720,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__30720,0,token__30720.indexOf("/")),cljs.core.subs.call(null,token__30720,(token__30720.indexOf("/") + 1),token__30720.length));
} else
{return cljs.reader.special_symbols.call(null,token__30720,cljs.core.symbol.call(null,token__30720));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__30730 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var a__30731 = cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,token__30730);
var token__30732 = (a__30731[0]);
var ns__30733 = (a__30731[1]);
var name__30734 = (a__30731[2]);
if(cljs.core.truth_((function (){var or__3943__auto____30736 = (function (){var and__3941__auto____30735 = !((void 0 === ns__30733));
if(and__3941__auto____30735)
{return (ns__30733.substring((ns__30733.length - 2),ns__30733.length) === ":/");
} else
{return and__3941__auto____30735;
}
})();
if(cljs.core.truth_(or__3943__auto____30736))
{return or__3943__auto____30736;
} else
{var or__3943__auto____30737 = ((name__30734[(name__30734.length - 1)]) === ":");
if(or__3943__auto____30737)
{return or__3943__auto____30737;
} else
{return !((token__30732.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__30732);
} else
{if((function (){var and__3941__auto____30738 = !((ns__30733 == null));
if(and__3941__auto____30738)
{return (ns__30733.length > 0);
} else
{return and__3941__auto____30738;
}
})())
{return cljs.core.keyword.call(null,ns__30733.substring(0,ns__30733.indexOf("/")),name__30734);
} else
{return cljs.core.keyword.call(null,token__30732);
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
var m__30744 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));
if(cljs.core.map_QMARK_.call(null,m__30744))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__30745 = cljs.reader.read.call(null,rdr,true,null,true);
if((function (){var G__30746__30747 = o__30745;
if(G__30746__30747)
{if((function (){var or__3943__auto____30748 = (G__30746__30747.cljs$lang$protocol_mask$partition0$ & 262144);
if(or__3943__auto____30748)
{return or__3943__auto____30748;
} else
{return G__30746__30747.cljs$core$IWithMeta$;
}
})())
{return true;
} else
{if((!G__30746__30747.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__30746__30747);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,G__30746__30747);
}
})())
{return cljs.core.with_meta.call(null,o__30745,cljs.core.merge.call(null,cljs.core.meta.call(null,o__30745),m__30744));
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
var ch__30752 = cljs.reader.read_char.call(null,reader);
if((ch__30752 == null))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.reader.whitespace_QMARK_.call(null,ch__30752))
{{
var G__30755 = reader;
var G__30756 = eof_is_error;
var G__30757 = sentinel;
var G__30758 = is_recursive;
reader = G__30755;
eof_is_error = G__30756;
sentinel = G__30757;
is_recursive = G__30758;
continue;
}
} else
{if(cljs.reader.comment_prefix_QMARK_.call(null,ch__30752))
{{
var G__30759 = cljs.reader.read_comment.call(null,reader,ch__30752);
var G__30760 = eof_is_error;
var G__30761 = sentinel;
var G__30762 = is_recursive;
reader = G__30759;
eof_is_error = G__30760;
sentinel = G__30761;
is_recursive = G__30762;
continue;
}
} else
{if("\uFDD0'else")
{var f__30753 = cljs.reader.macros.call(null,ch__30752);
var res__30754 = (cljs.core.truth_(f__30753)?f__30753.call(null,reader,ch__30752):((cljs.reader.number_literal_QMARK_.call(null,reader,ch__30752))?cljs.reader.read_number.call(null,reader,ch__30752):(("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__30752):null)));
if((res__30754 === reader))
{{
var G__30763 = reader;
var G__30764 = eof_is_error;
var G__30765 = sentinel;
var G__30766 = is_recursive;
reader = G__30763;
eof_is_error = G__30764;
sentinel = G__30765;
is_recursive = G__30766;
continue;
}
} else
{return res__30754;
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
var r__30768 = cljs.reader.push_back_reader.call(null,s);
return cljs.reader.read.call(null,r__30768,true,null,false);
});
cljs.reader.zero_fill_right = (function zero_fill_right(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s)))
{return s;
} else
{if((width < cljs.core.count.call(null,s)))
{return s.substring(0,width);
} else
{if("\uFDD0'else")
{var b__30770 = (new goog.string.StringBuffer(s));
while(true){
if((b__30770.getLength() < width))
{{
var G__30771 = b__30770.append("0");
b__30770 = G__30771;
continue;
}
} else
{return b__30770.toString();
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
var and__3941__auto____30774 = cljs.reader.divisible_QMARK_.call(null,year,4);
if(cljs.core.truth_(and__3941__auto____30774))
{var or__3943__auto____30775 = cljs.reader.indivisible_QMARK_.call(null,year,100);
if(cljs.core.truth_(or__3943__auto____30775))
{return or__3943__auto____30775;
} else
{return cljs.reader.divisible_QMARK_.call(null,year,400);
}
} else
{return and__3941__auto____30774;
}
});
cljs.reader.days_in_month = (function (){var dim_norm__30780 = cljs.core.PersistentVector.fromArray([null,31,28,31,30,31,30,31,31,30,31,30,31], true);
var dim_leap__30781 = cljs.core.PersistentVector.fromArray([null,31,29,31,30,31,30,31,31,30,31,30,31], true);
return (function (month,leap_year_QMARK_){
return cljs.core._lookup.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap__30781:dim_norm__30780),month,null);
});
})();
cljs.reader.parse_and_validate_timestamp = (function (){var timestamp__30782 = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
var check__30784 = (function (low,n,high,msg){
if((function (){var and__3941__auto____30783 = (low <= n);
if(and__3941__auto____30783)
{return (n <= high);
} else
{return and__3941__auto____30783;
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str(" Failed:  "),cljs.core.str(low),cljs.core.str("<="),cljs.core.str(n),cljs.core.str("<="),cljs.core.str(high)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'<=","\uFDD1'low","\uFDD1'n","\uFDD1'high"),cljs.core.hash_map("\uFDD0'line",474,"\uFDD0'column",25))))].join('')));
}
return n;
});
return (function (ts){
var temp__4092__auto____30785 = cljs.core.map.call(null,cljs.core.vec,cljs.core.split_at.call(null,8,cljs.core.re_matches.call(null,timestamp__30782,ts)));
if(cljs.core.truth_(temp__4092__auto____30785))
{var vec__30786__30789 = temp__4092__auto____30785;
var vec__30787__30790 = cljs.core.nth.call(null,vec__30786__30789,0,null);
var ___30791 = cljs.core.nth.call(null,vec__30787__30790,0,null);
var years__30792 = cljs.core.nth.call(null,vec__30787__30790,1,null);
var months__30793 = cljs.core.nth.call(null,vec__30787__30790,2,null);
var days__30794 = cljs.core.nth.call(null,vec__30787__30790,3,null);
var hours__30795 = cljs.core.nth.call(null,vec__30787__30790,4,null);
var minutes__30796 = cljs.core.nth.call(null,vec__30787__30790,5,null);
var seconds__30797 = cljs.core.nth.call(null,vec__30787__30790,6,null);
var milliseconds__30798 = cljs.core.nth.call(null,vec__30787__30790,7,null);
var vec__30788__30799 = cljs.core.nth.call(null,vec__30786__30789,1,null);
var ___30800 = cljs.core.nth.call(null,vec__30788__30799,0,null);
var ___30801 = cljs.core.nth.call(null,vec__30788__30799,1,null);
var ___30802 = cljs.core.nth.call(null,vec__30788__30799,2,null);
var V__30803 = vec__30786__30789;
var vec__30804__30807 = cljs.core.map.call(null,(function (v){
return cljs.core.map.call(null,(function (p1__30779_SHARP_){
return parseInt(p1__30779_SHARP_,10);
}),v);
}),cljs.core.map.call(null,(function (p1__30777_SHARP_,p2__30776_SHARP_){
return cljs.core.update_in.call(null,p2__30776_SHARP_,cljs.core.PersistentVector.fromArray([0], true),p1__30777_SHARP_);
}),cljs.core.PersistentVector.fromArray([cljs.core.constantly.call(null,null),(function (p1__30778_SHARP_){
if(cljs.core._EQ_.call(null,p1__30778_SHARP_,"-"))
{return "-1";
} else
{return "1";
}
})], true),V__30803));
var vec__30805__30808 = cljs.core.nth.call(null,vec__30804__30807,0,null);
var ___30809 = cljs.core.nth.call(null,vec__30805__30808,0,null);
var y__30810 = cljs.core.nth.call(null,vec__30805__30808,1,null);
var mo__30811 = cljs.core.nth.call(null,vec__30805__30808,2,null);
var d__30812 = cljs.core.nth.call(null,vec__30805__30808,3,null);
var h__30813 = cljs.core.nth.call(null,vec__30805__30808,4,null);
var m__30814 = cljs.core.nth.call(null,vec__30805__30808,5,null);
var s__30815 = cljs.core.nth.call(null,vec__30805__30808,6,null);
var ms__30816 = cljs.core.nth.call(null,vec__30805__30808,7,null);
var vec__30806__30817 = cljs.core.nth.call(null,vec__30804__30807,1,null);
var offset_sign__30818 = cljs.core.nth.call(null,vec__30806__30817,0,null);
var offset_hours__30819 = cljs.core.nth.call(null,vec__30806__30817,1,null);
var offset_minutes__30820 = cljs.core.nth.call(null,vec__30806__30817,2,null);
var offset__30821 = (offset_sign__30818 * ((offset_hours__30819 * 60) + offset_minutes__30820));
return cljs.core.PersistentVector.fromArray([((cljs.core.not.call(null,years__30792))?1970:y__30810),((cljs.core.not.call(null,months__30793))?1:check__30784.call(null,1,mo__30811,12,"timestamp month field must be in range 1..12")),((cljs.core.not.call(null,days__30794))?1:check__30784.call(null,1,d__30812,cljs.reader.days_in_month.call(null,mo__30811,cljs.reader.leap_year_QMARK_.call(null,y__30810)),"timestamp day field must be in range 1..last day in month")),((cljs.core.not.call(null,hours__30795))?0:check__30784.call(null,0,h__30813,23,"timestamp hour field must be in range 0..23")),((cljs.core.not.call(null,minutes__30796))?0:check__30784.call(null,0,m__30814,59,"timestamp minute field must be in range 0..59")),((cljs.core.not.call(null,seconds__30797))?0:check__30784.call(null,0,s__30815,((cljs.core._EQ_.call(null,m__30814,59))?60:59),"timestamp second field must be in range 0..60")),((cljs.core.not.call(null,milliseconds__30798))?0:check__30784.call(null,0,ms__30816,999,"timestamp millisecond field must be in range 0..999")),offset__30821], true);
} else
{return null;
}
});
})();
cljs.reader.parse_timestamp = (function parse_timestamp(ts){
var temp__4090__auto____30833 = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4090__auto____30833))
{var vec__30834__30835 = temp__4090__auto____30833;
var years__30836 = cljs.core.nth.call(null,vec__30834__30835,0,null);
var months__30837 = cljs.core.nth.call(null,vec__30834__30835,1,null);
var days__30838 = cljs.core.nth.call(null,vec__30834__30835,2,null);
var hours__30839 = cljs.core.nth.call(null,vec__30834__30835,3,null);
var minutes__30840 = cljs.core.nth.call(null,vec__30834__30835,4,null);
var seconds__30841 = cljs.core.nth.call(null,vec__30834__30835,5,null);
var ms__30842 = cljs.core.nth.call(null,vec__30834__30835,6,null);
var offset__30843 = cljs.core.nth.call(null,vec__30834__30835,7,null);
return (new Date((Date.UTC(years__30836,(months__30837 - 1),days__30838,hours__30839,minutes__30840,seconds__30841,ms__30842) - ((offset__30843 * 60) * 1000))));
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
var tag__30847 = cljs.reader.read_symbol.call(null,rdr,initch);
var temp__4090__auto____30848 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),cljs.core.name.call(null,tag__30847),null);
if(cljs.core.truth_(temp__4090__auto____30848))
{var pfn__30849 = temp__4090__auto____30848;
return pfn__30849.call(null,cljs.reader.read.call(null,rdr,true,null,false));
} else
{return cljs.reader.reader_error.call(null,rdr,"Could not find tag parser for ",cljs.core.name.call(null,tag__30847)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_))));
}
});
cljs.reader.register_tag_parser_BANG_ = (function register_tag_parser_BANG_(tag,f){
var tag__30852 = cljs.core.name.call(null,tag);
var old_parser__30853 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__30852,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag__30852,f);
return old_parser__30853;
});
cljs.reader.deregister_tag_parser_BANG_ = (function deregister_tag_parser_BANG_(tag){
var tag__30856 = cljs.core.name.call(null,tag);
var old_parser__30857 = cljs.core._lookup.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag__30856,null);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag__30856);
return old_parser__30857;
});
