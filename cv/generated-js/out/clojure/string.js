goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_.call(null,match))
{return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < 2))
{return clojure.string.upper_case.call(null,s);
} else
{return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec.call(null,[cljs.core.str(s)].join('').split(re));
} else
{var s__29699 = s;
var limit__29700 = limit;
var parts__29701 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,limit__29700,1))
{return cljs.core.conj.call(null,parts__29701,s__29699);
} else
{var temp__4090__auto____29702 = cljs.core.re_find.call(null,re,s__29699);
if(cljs.core.truth_(temp__4090__auto____29702))
{var m__29703 = temp__4090__auto____29702;
var index__29704 = s__29699.indexOf(m__29703);
{
var G__29705 = s__29699.substring((index__29704 + cljs.core.count.call(null,m__29703)));
var G__29706 = (limit__29700 - 1);
var G__29707 = cljs.core.conj.call(null,parts__29701,s__29699.substring(0,index__29704));
s__29699 = G__29705;
limit__29700 = G__29706;
parts__29701 = G__29707;
continue;
}
} else
{return cljs.core.conj.call(null,parts__29701,s__29699);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__29711 = s.length;
while(true){
if((index__29711 === 0))
{return "";
} else
{var ch__29712 = cljs.core._lookup.call(null,s,(index__29711 - 1),null);
if((function (){var or__3943__auto____29713 = cljs.core._EQ_.call(null,ch__29712,"\n");
if(or__3943__auto____29713)
{return or__3943__auto____29713;
} else
{return cljs.core._EQ_.call(null,ch__29712,"\r");
}
})())
{{
var G__29714 = (index__29711 - 1);
index__29711 = G__29714;
continue;
}
} else
{return s.substring(0,index__29711);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__29718 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3943__auto____29719 = cljs.core.not.call(null,s__29718);
if(or__3943__auto____29719)
{return or__3943__auto____29719;
} else
{var or__3943__auto____29720 = cljs.core._EQ_.call(null,"",s__29718);
if(or__3943__auto____29720)
{return or__3943__auto____29720;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__29718);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__29727 = (new goog.string.StringBuffer());
var length__29728 = s.length;
var index__29729 = 0;
while(true){
if(cljs.core._EQ_.call(null,length__29728,index__29729))
{return buffer__29727.toString();
} else
{var ch__29730 = s.charAt(index__29729);
var temp__4090__auto____29731 = cljs.core._lookup.call(null,cmap,ch__29730,null);
if(cljs.core.truth_(temp__4090__auto____29731))
{var replacement__29732 = temp__4090__auto____29731;
buffer__29727.append([cljs.core.str(replacement__29732)].join(''));
} else
{buffer__29727.append(ch__29730);
}
{
var G__29733 = (index__29729 + 1);
index__29729 = G__29733;
continue;
}
}
break;
}
});
