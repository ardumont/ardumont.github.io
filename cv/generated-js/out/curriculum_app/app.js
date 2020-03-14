goog.provide('curriculum_app.app');
goog.require('cljs.core');
goog.require('domina');
goog.require('dommy.template');
goog.require('curriculum_app.cv');
goog.require('clojure.string');
/**
* Given the html data, modify the dom id html-id with such data
*/
curriculum_app.app.render_html_BANG_ = (function render_html_BANG_(html_data,html_id){
return domina.append_BANG_.call(null,domina.by_id.call(null,html_id),dommy.template.node.call(null,html_data));
});
curriculum_app.app.render_identity_BANG_ = (function render_identity_BANG_(){
var map__17431__17432 = (new cljs.core.Keyword("\uFDD0'identity")).call(null,curriculum_app.cv.cv);
var map__17431__17433 = ((cljs.core.seq_QMARK_.call(null,map__17431__17432))?cljs.core.apply.call(null,cljs.core.hash_map,map__17431__17432):map__17431__17432);
var emails__17434 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'emails",null);
var xp__17435 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'xp",null);
var country__17436 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'country",null);
var middle_name__17437 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'middle-name",null);
var address__17438 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'address",null);
var phone__17439 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'phone",null);
var name__17440 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'name",null);
var city__17441 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'city",null);
var first_name__17442 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'first-name",null);
var title__17443 = cljs.core._lookup.call(null,map__17431__17433,"\uFDD0'title",null);
var profile__17444 = cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray(["\uFDD0'div.title",clojure.string.join.call(null," ",cljs.core.PersistentVector.fromArray([first_name__17442,middle_name__17437,name__17440], true))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",title__17443], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",[cljs.core.str(" ("),cljs.core.str(xp__17435),cljs.core.str(")")].join('')], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null," - ",cljs.core.PersistentVector.fromArray([address__17438,city__17441,country__17436], true))], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null," - ",emails__17434)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'div",phone__17439], true),cljs.core.PersistentVector.fromArray(["\uFDD0'span.photo"], true)], true);
var G__17445__17446 = cljs.core.seq.call(null,profile__17444);
if(G__17445__17446)
{var p__17447 = cljs.core.first.call(null,G__17445__17446);
var G__17445__17448 = G__17445__17446;
while(true){
curriculum_app.app.render_html_BANG_.call(null,p__17447,"profile");
var temp__4425__auto____17449 = cljs.core.next.call(null,G__17445__17448);
if(temp__4425__auto____17449)
{var G__17445__17450 = temp__4425__auto____17449;
{
var G__17451 = cljs.core.first.call(null,G__17445__17450);
var G__17452 = G__17445__17450;
p__17447 = G__17451;
G__17445__17448 = G__17452;
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
var map__17463__17465 = (new cljs.core.Keyword("\uFDD0'jobs")).call(null,curriculum_app.cv.cv);
var map__17463__17466 = ((cljs.core.seq_QMARK_.call(null,map__17463__17465))?cljs.core.apply.call(null,cljs.core.hash_map,map__17463__17465):map__17463__17465);
var current_pos__17467 = map__17463__17466;
var current__17468 = cljs.core._lookup.call(null,map__17463__17466,"\uFDD0'current",null);
var map__17464__17469 = current_pos__17467.call(null,current__17468);
var map__17464__17470 = ((cljs.core.seq_QMARK_.call(null,map__17464__17469))?cljs.core.apply.call(null,cljs.core.hash_map,map__17464__17469):map__17464__17469);
var as__17471 = cljs.core._lookup.call(null,map__17464__17470,"\uFDD0'as",null);
var period__17472 = cljs.core._lookup.call(null,map__17464__17470,"\uFDD0'period",null);
return curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",[cljs.core.str(as__17471),cljs.core.str(" at "),cljs.core.str(clojure.string.capitalize.call(null,cljs.core.name.call(null,current__17468))),cljs.core.str(" since "),cljs.core.str(period__17472)].join('')], true),"cpos");
});
curriculum_app.app.render_previous_positions_BANG_ = (function render_previous_positions_BANG_(){
var previous_pos__17486 = cljs.core.get_in.call(null,curriculum_app.cv.cv,cljs.core.PersistentVector.fromArray(["\uFDD0'jobs","\uFDD0'previous-pos"], true));
var positions__17492 = cljs.core.map.call(null,(function (p){
var map__17487__17488 = cljs.core.get_in.call(null,curriculum_app.cv.cv,cljs.core.PersistentVector.fromArray(["\uFDD0'jobs",p], true));
var map__17487__17489 = ((cljs.core.seq_QMARK_.call(null,map__17487__17488))?cljs.core.apply.call(null,cljs.core.hash_map,map__17487__17488):map__17487__17488);
var as__17490 = cljs.core._lookup.call(null,map__17487__17489,"\uFDD0'as",null);
var period__17491 = cljs.core._lookup.call(null,map__17487__17489,"\uFDD0'period",null);
return cljs.core.PersistentVector.fromArray([as__17490,"at",clojure.string.capitalize.call(null,cljs.core.name.call(null,p)),"for the period",period__17491], true);
}),previous_pos__17486);
var G__17493__17494 = cljs.core.seq.call(null,positions__17492);
if(G__17493__17494)
{var p__17495 = cljs.core.first.call(null,G__17493__17494);
var G__17493__17496 = G__17493__17494;
while(true){
curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",clojure.string.join.call(null," ",p__17495)], true),"ppos");
var temp__4425__auto____17497 = cljs.core.next.call(null,G__17493__17496);
if(temp__4425__auto____17497)
{var G__17493__17498 = temp__4425__auto____17497;
{
var G__17499 = cljs.core.first.call(null,G__17493__17498);
var G__17500 = G__17493__17498;
p__17495 = G__17499;
G__17493__17496 = G__17500;
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
var form__17509 = (new cljs.core.Keyword("\uFDD0'formations")).call(null,curriculum_app.cv.cv);
var period__17510 = (new cljs.core.Keyword("\uFDD0'period")).call(null,form__17509);
var map__17508__17511 = (new cljs.core.Keyword("\uFDD0'master")).call(null,form__17509);
var map__17508__17512 = ((cljs.core.seq_QMARK_.call(null,map__17508__17511))?cljs.core.apply.call(null,cljs.core.hash_map,map__17508__17511):map__17508__17511);
var title__17513 = cljs.core._lookup.call(null,map__17508__17512,"\uFDD0'title",null);
var college__17514 = cljs.core._lookup.call(null,map__17508__17512,"\uFDD0'college",null);
return curriculum_app.app.render_html_BANG_.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",[cljs.core.str(title__17513),cljs.core.str(" at "),cljs.core.str(college__17514),cljs.core.str(" for "),cljs.core.str(period__17510)].join('')], true),"formation");
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
var keys__17545 = cljs.core.keys.call(null,map_data);
var all__17557 = (function (){var iter__8309__auto____17556 = (function iter__17546(s__17547){
return (new cljs.core.LazySeq(null,false,(function (){
var s__17547__17552 = s__17547;
while(true){
var temp__4425__auto____17553 = cljs.core.seq.call(null,s__17547__17552);
if(temp__4425__auto____17553)
{var xs__4977__auto____17554 = temp__4425__auto____17553;
var k__17555 = cljs.core.first.call(null,xs__4977__auto____17554);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([cljs.core.name.call(null,k__17555),map_data.call(null,k__17555)], true),iter__17546.call(null,cljs.core.rest.call(null,s__17547__17552)));
} else
{return null;
}
break;
}
}),null));
});
return iter__8309__auto____17556.call(null,keys__17545);
})();
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",(function (){var iter__8309__auto____17574 = (function iter__17558(s__17559){
return (new cljs.core.LazySeq(null,false,(function (){
var s__17559__17567 = s__17559;
while(true){
var temp__4425__auto____17568 = cljs.core.seq.call(null,s__17559__17567);
if(temp__4425__auto____17568)
{var xs__4977__auto____17569 = temp__4425__auto____17568;
var vec__17570__17571 = cljs.core.first.call(null,xs__4977__auto____17569);
var k__17572 = cljs.core.nth.call(null,vec__17570__17571,0,null);
var v__17573 = cljs.core.nth.call(null,vec__17570__17571,1,null);
return cljs.core.cons.call(null,render_html_fn.call(null,k__17572,v__17573),iter__17558.call(null,cljs.core.rest.call(null,s__17559__17567)));
} else
{return null;
}
break;
}
}),null));
});
return iter__8309__auto____17574.call(null,all__17557);
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
curriculum_app.app.render_old_projects_BANG_ = (function render_old_projects_BANG_(){
return curriculum_app.app.render_html_BANG_.call(null,curriculum_app.app.compute_map_key_csv.call(null,(new cljs.core.Keyword("\uFDD0'old-projects")).call(null,curriculum_app.cv.cv),curriculum_app.app.render_key_csv_href),"old-projects");
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
curriculum_app.app.render_old_projects_BANG_.call(null);
curriculum_app.app.render_formations_BANG_.call(null);
curriculum_app.app.render_hobbies_BANG_.call(null);
return curriculum_app.app.render_misc_BANG_.call(null);
});
goog.exportSymbol('curriculum_app.app.main', curriculum_app.app.main);
