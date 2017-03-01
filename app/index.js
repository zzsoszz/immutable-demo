import _ from 'lodash';
import {User} from './User';
import $ from "jquery";
import Rx from "rxjs";
import Immutable from "immutable";
var user=new User("qingtian","88888");


$(document).ready(function(){
    $("<div></div>").appendTo($("body"));
    var map1 = Immutable.Map({a:1, b:2, c:3});
    var map2 = map1.set('a', 50);
    Rx.Observable.interval(1000).subscribe(function(x){
        $("div").text(map2.get('a'));
    });
});