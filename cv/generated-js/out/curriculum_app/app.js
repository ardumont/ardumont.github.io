goog.provide('curriculum_app.app');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('curriculum_app.cv');
goog.require('dommy.template');
goog.require('domina');
/**
* Given the html data, modify the dom id html-id with such data
*/
curriculum_app.app.render_html_BANG_ = (function render_html_BANG_(html_data,html_id){
return domina.append_BANG_.call(null,domina.by_id.call(null,html_id),dommy.template.node.call(null,html_data));
});
curriculum_app.app.render_identity_BANG_ = (function render_identity_BANG_(){
var map__25593__25594 = (new cljs.core.Keyword("\uFDD0'identity")).call(null,curriculum_app.cv.cv);
var map__25593__25595 = ((cljs.core.seq_QMARK_.call(null,map__25593__25594))?cljs.core.apply.call(null,cljs.core.hash_map,map__25593__25594):map__25593__25594);
var address__25596 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'address",null);
var country__25597 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'country",null);
var middle_name__25598 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'middle-name",null);
var xp__25599 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'xp",null);
var name__25600 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'name",null);
var first_name__25601 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'first-name",null);
var title__25602 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'title",null);
var city__25603 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'city",null);
var emails__25604 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'emails",null);
var phone__25605 = cljs.core._lookup.call(null,map__25593__25595,"\uFDD0'phone",null);
var profile__25606 = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'div.title",clojure.string.join.call(null," ",cljs.core.PersistentVector.fromArray([first_name__25601,middle_name__25598,name__25600], true))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",title__25602], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",[cljs.core.str(" ("),cljs.core.str(xp__25599),cljs.core.str(")")].join('')], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null," - ",cljs.core.PersistentVector.fromArray([address__25596,city__25603,country__25597], true))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null," - ",emails__25604)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",phone__25605], true),cljs.core.PersistentVector.fromArray(["\uFDD0'span.photo"], true)], true);
var G__25607__25608 = cljs.core.seq.call(null,profile__25606);
if(G__25607__25608)
{var p__25609 = cljs.core.first.call(null,G__25607__25608);
var G__25607__25610 = G__25607__25608;
while(true){
curriculum_app.app.render_html_BANG_.call(null,p__25609,"profile");
var temp__4092__auto____25611 = cljs.core.next.call(null,G__25607__25610);
if(temp__4092__auto____25611)
{var G__25607__25612 = temp__4092__auto____25611;
{
var G__25613 = cljs.core.first.call(null,G__25607__25612);
var G__25614 = G__25607__25612;
p__25609 = G__25613;
G__25607__25610 = G__25614;
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
curriculum_app.app.render_current_position_BANG_ = (function render_current_position_BANG_(){
var map__25625__25627 = (new cljs.core.Keyword("\uFDD0'jobs")).call(null,curriculum_app.cv.cv);
var map__25625__25628 = ((cljs.core.seq_QMARK_.call(null,map__25625__25627))?cljs.core.apply.call(null,cljs.core.hash_map,map__25625__25627):map__25625__25627);
var current_pos__25629 = map__25625__25628;
var current__25630 = cljs.core._lookup.call(null,map__25625__25628,"\uFDD0'current",null);
var map__25626__25631 = current_pos__25629.call(null,current__25630);
var map__25626__25632 = ((cljs.core.seq_QMARK_.call(null,map__25626__25631))?cljs.core.apply.call(null,cljs.core.hash_map,map__25626__25631):map__25626__25631);
var period__25633 = cljs.core._lookup.call(null,map__25626__25632,"\uFDD0'period",null);
var as__25634 = cljs.core._lookup.call(null,map__25626__25632,"\uFDD0'as",null);
return curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",[cljs.core.str(as__25634),cljs.core.str(" at "),cljs.core.str(clojure.string.capitalize.call(null,cljs.core.name.call(null,current__25630))),cljs.core.str(" since "),cljs.core.str(period__25633)].join('')], true),"cpos");
});
curriculum_app.app.render_previous_positions_BANG_ = (function render_previous_positions_BANG_(){
var previous_pos__25648 = cljs.core.get_in.call(null,curriculum_app.cv.cv,cljs.core.PersistentVector.fromArray(["\uFDD0'jobs","\uFDD0'previous-pos"], true));
var positions__25654 = cljs.core.map.call(null,(function (p){
var map__25649__25650 = cljs.core.get_in.call(null,curriculum_app.cv.cv,cljs.core.PersistentVector.fromArray(["\uFDD0'jobs",p], true));
var map__25649__25651 = ((cljs.core.seq_QMARK_.call(null,map__25649__25650))?cljs.core.apply.call(null,cljs.core.hash_map,map__25649__25650):map__25649__25650);
var period__25652 = cljs.core._lookup.call(null,map__25649__25651,"\uFDD0'period",null);
var as__25653 = cljs.core._lookup.call(null,map__25649__25651,"\uFDD0'as",null);
return cljs.core.PersistentVector.fromArray([as__25653,"at",clojure.string.capitalize.call(null,cljs.core.name.call(null,p)),"for the period",period__25652], true);
}),previous_pos__25648);
var G__25655__25656 = cljs.core.seq.call(null,positions__25654);
if(G__25655__25656)
{var p__25657 = cljs.core.first.call(null,G__25655__25656);
var G__25655__25658 = G__25655__25656;
while(true){
curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null," ",p__25657)], true),"ppos");
var temp__4092__auto____25659 = cljs.core.next.call(null,G__25655__25658);
if(temp__4092__auto____25659)
{var G__25655__25660 = temp__4092__auto____25659;
{
var G__25661 = cljs.core.first.call(null,G__25655__25660);
var G__25662 = G__25655__25660;
p__25657 = G__25661;
G__25655__25658 = G__25662;
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
curriculum_app.app.render_formations_BANG_ = (function render_formations_BANG_(){
var form__25671 = (new cljs.core.Keyword("\uFDD0'formations")).call(null,curriculum_app.cv.cv);
var period__25672 = (new cljs.core.Keyword("\uFDD0'period")).call(null,form__25671);
var map__25670__25673 = (new cljs.core.Keyword("\uFDD0'master")).call(null,form__25671);
var map__25670__25674 = ((cljs.core.seq_QMARK_.call(null,map__25670__25673))?cljs.core.apply.call(null,cljs.core.hash_map,map__25670__25673):map__25670__25673);
var college__25675 = cljs.core._lookup.call(null,map__25670__25674,"\uFDD0'college",null);
var title__25676 = cljs.core._lookup.call(null,map__25670__25674,"\uFDD0'title",null);
return curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",[cljs.core.str(title__25676),cljs.core.str(" at "),cljs.core.str(college__25675),cljs.core.str(" for "),cljs.core.str(period__25672)].join('')], true),"formation");
});
curriculum_app.app.render_hobbies_BANG_ = (function render_hobbies_BANG_(){
return curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null,", ",(new cljs.core.Keyword("\uFDD0'hobbies")).call(null,curriculum_app.cv.cv))], true),"hobbies");
});
curriculum_app.app.render_misc_BANG_ = (function render_misc_BANG_(){
return curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null,", ",(new cljs.core.Keyword("\uFDD0'misc")).call(null,curriculum_app.cv.cv))], true),"misc");
});
/**
* Given a key and comma separated values, render a html li data structure of k - v0, v1, ...
*/
curriculum_app.app.render_key_csv = (function render_key_csv(k,v){
return cljs.core.PersistentVector.fromArray(["\uFDD0'li.dash",[cljs.core.str(k),cljs.core.str(" - "),cljs.core.str(clojure.string.join.call(null,", ",v))].join('')], true);
});
/**
* Given a key and comma separated values containing href, render a html li data structure of k - v0href, v1href, ...
*/
curriculum_app.app.render_key_csv_href = (function render_key_csv_href(k,vh){
return cljs.core.PersistentVector.fromArray(["\uFDD0'li.dash",[cljs.core.str(k),cljs.core.str(" - ")].join(''),cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":vh}),vh], true)], true)], true);
});
/**
* Given a map with key and list as values, compute the html data
*/
curriculum_app.app.compute_map_key_csv = (function compute_map_key_csv(map_data,render_html_fn){
var keys__25707 = cljs.core.keys.call(null,map_data);
var all__25719 = (function (){var iter__19251__auto____25718 = (function iter__25708(s__25709){
return (new cljs.core.LazySeq(null,false,(function (){
var s__25709__25714 = s__25709;
while(true){
var temp__4092__auto____25715 = cljs.core.seq.call(null,s__25709__25714);
if(temp__4092__auto____25715)
{var xs__4579__auto____25716 = temp__4092__auto____25715;
var k__25717 = cljs.core.first.call(null,xs__4579__auto____25716);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([cljs.core.name.call(null,k__25717),map_data.call(null,k__25717)], true),iter__25708.call(null,cljs.core.rest.call(null,s__25709__25714)));
} else
{return null;
}
break;
}
}),null));
});
return iter__19251__auto____25718.call(null,keys__25707);
})();
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",(function (){var iter__19251__auto____25736 = (function iter__25720(s__25721){
return (new cljs.core.LazySeq(null,false,(function (){
var s__25721__25729 = s__25721;
while(true){
var temp__4092__auto____25730 = cljs.core.seq.call(null,s__25721__25729);
if(temp__4092__auto____25730)
{var xs__4579__auto____25731 = temp__4092__auto____25730;
var vec__25732__25733 = cljs.core.first.call(null,xs__4579__auto____25731);
var k__25734 = cljs.core.nth.call(null,vec__25732__25733,0,null);
var v__25735 = cljs.core.nth.call(null,vec__25732__25733,1,null);
return cljs.core.cons.call(null,render_html_fn.call(null,k__25734,v__25735),iter__25720.call(null,cljs.core.rest.call(null,s__25721__25729)));
} else
{return null;
}
break;
}
}),null));
});
return iter__19251__auto____25736.call(null,all__25719);
})()], true);
});
curriculum_app.app.render_skills_BANG_ = (function render_skills_BANG_(){
return curriculum_app.app.render_html_BANG_.call(null,curriculum_app.app.compute_map_key_csv.call(null,(new cljs.core.Keyword("\uFDD0'skills")).call(null,curriculum_app.cv.cv),curriculum_app.app.render_key_csv),"skills");
});
curriculum_app.app.render_xp_BANG_ = (function render_xp_BANG_(){
return curriculum_app.app.render_html_BANG_.call(null,curriculum_app.app.compute_map_key_csv.call(null,(new cljs.core.Keyword("\uFDD0'xp")).call(null,curriculum_app.cv.cv),curriculum_app.app.render_key_csv),"xp");
});
curriculum_app.app.render_projects_BANG_ = (function render_projects_BANG_(){
return curriculum_app.app.render_html_BANG_.call(null,curriculum_app.app.compute_map_key_csv.call(null,(new cljs.core.Keyword("\uFDD0'projects")).call(null,curriculum_app.cv.cv),curriculum_app.app.render_key_csv_href),"projects");
});
curriculum_app.app.render_profiles_BANG_ = (function render_profiles_BANG_(){
return curriculum_app.app.render_html_BANG_.call(null,curriculum_app.app.compute_map_key_csv.call(null,(new cljs.core.Keyword("\uFDD0'profiles")).call(null,curriculum_app.cv.cv),curriculum_app.app.render_key_csv_href),"profiles");
});
curriculum_app.app.main = (function main(){
curriculum_app.app.render_identity_BANG_.call(null);
curriculum_app.app.render_current_position_BANG_.call(null);
curriculum_app.app.render_previous_positions_BANG_.call(null);
curriculum_app.app.render_xp_BANG_.call(null);
curriculum_app.app.render_skills_BANG_.call(null);
curriculum_app.app.render_profiles_BANG_.call(null);
curriculum_app.app.render_projects_BANG_.call(null);
curriculum_app.app.render_formations_BANG_.call(null);
curriculum_app.app.render_hobbies_BANG_.call(null);
return curriculum_app.app.render_misc_BANG_.call(null);
});
goog.exportSymbol('curriculum_app.app.main', curriculum_app.app.main);
