goog.provide('io.pedestal.app.util.platform');
goog.require('cljs.core');
goog.require('goog.net.Cookies');
goog.require('cljs.reader');
io.pedestal.app.util.platform.safe_read_string = (function safe_read_string(s){
return cljs.reader.read_string.call(null,s);
});
io.pedestal.app.util.platform.parse_int = (function parse_int(s){
if((function (){var or__3943__auto____30565 = cljs.core.number_QMARK_.call(null,s);
if(or__3943__auto____30565)
{return or__3943__auto____30565;
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
}catch (e30568){if(cljs.core.instance_QMARK_.call(null,Error,e30568))
{var ___30569 = e30568;
return null;
} else
{if("\uFDD0'else")
{throw e30568;
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
var G__30576__30577 = cljs.core.seq.call(null,coll);
if(G__30576__30577)
{var d__30578 = cljs.core.first.call(null,G__30576__30577);
var G__30576__30579 = G__30576__30577;
while(true){
console.log(cljs.core.pr_str.call(null,d__30578));
var temp__4092__auto____30580 = cljs.core.next.call(null,G__30576__30579);
if(temp__4092__auto____30580)
{var G__30576__30581 = temp__4092__auto____30580;
{
var G__30582 = cljs.core.first.call(null,G__30576__30581);
var G__30583 = G__30576__30581;
d__30578 = G__30582;
G__30576__30579 = G__30583;
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
