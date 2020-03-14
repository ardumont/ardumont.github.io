goog.provide('io.pedestal.app.util.platform');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('goog.net.Cookies');
io.pedestal.app.util.platform.safe_read_string = (function safe_read_string(s){
return cljs.reader.read_string.call(null,s);
});
io.pedestal.app.util.platform.parse_int = (function parse_int(s){
if((function (){var or__4238__auto____18849 = cljs.core.number_QMARK_.call(null,s);
if(or__4238__auto____18849)
{return or__4238__auto____18849;
} else
{return cljs.core.string_QMARK_.call(null,s);
}
})())
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("the value passed to parse-int must be a number or a string"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'or",cljs.core.with_meta(cljs.core.list("\uFDD1'number?","\uFDD1's"),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'column",15)),cljs.core.with_meta(cljs.core.list("\uFDD1'string?","\uFDD1's"),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'column",27))),cljs.core.hash_map("\uFDD0'line",20,"\uFDD0'column",11))))].join('')));
}
return parseInt(s,10);
});
io.pedestal.app.util.platform.date = (function date(){
return (new Date());
});
io.pedestal.app.util.platform.create_timeout = (function create_timeout(msecs,f){
return window.setTimeout(f,msecs);
});
io.pedestal.app.util.platform.cancel_timeout = (function cancel_timeout(timeout){
return window.clearTimeout(timeout);
});
io.pedestal.app.util.platform.read_form_if_string = (function read_form_if_string(x){
if(cljs.core.string_QMARK_.call(null,x))
{try{return io.pedestal.app.util.platform.safe_read_string.call(null,x);
}catch (e18852){if(cljs.core.instance_QMARK_.call(null,Error,e18852))
{var ___18853 = e18852;
return null;
} else
{if("\uFDD0'else")
{throw e18852;
} else
{return null;
}
}
}} else
{return x;
}
});
io.pedestal.app.util.platform.get_cookie = (function get_cookie(cookie){
return (new goog.net.Cookies(document)).get(cookie);
});
io.pedestal.app.util.platform.log_group = (function log_group(pre,post,coll){
console.log("\n");
console.log(pre);
var G__18860__18861 = cljs.core.seq.call(null,coll);
if(G__18860__18861)
{var d__18862 = cljs.core.first.call(null,G__18860__18861);
var G__18860__18863 = G__18860__18861;
while(true){
console.log(cljs.core.pr_str.call(null,d__18862));
var temp__4425__auto____18864 = cljs.core.next.call(null,G__18860__18863);
if(temp__4425__auto____18864)
{var G__18860__18865 = temp__4425__auto____18864;
{
var G__18866 = cljs.core.first.call(null,G__18860__18865);
var G__18867 = G__18860__18865;
d__18862 = G__18866;
G__18860__18863 = G__18867;
continue;
}
} else
{}
break;
}
} else
{}
console.log(post);
return console.log("\n");
});
