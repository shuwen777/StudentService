import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'
import store from "./store/goods.js"

Vue.prototype.$myRuquest = myRequest

Vue.config.productionTip = false
Vue.prototype.checkLogin = function(backpage, backtype){
	var SUID  = uni.getStorageSync('SUID');
	var SRAND = uni.getStorageSync('SRAND');
	var SNAME = uni.getStorageSync('SNAME');
	var SFACE = uni.getStorageSync('SFACE');
	if(SUID == '' || SRAND == '' || SFACE == ''){
		uni.redirectTo({url:'../login/login?backpage='+backpage+'&backtype='+backtype});
		return false;
	}
	return [SUID, SRAND, SNAME, SFACE];
}
var APITOKEN  = 'api2018';
Vue.prototype.apiServer = 'http://192.168.1.18/index.php?token='+APITOKEN+'&c=';
Vue.prototype.staticServe = 'http://192.168.1.18/';
App.mpType = 'app'

Vue.prototype.$store = store;
Vue.config.productionTip = false

const app = new Vue({
    ...App,
	store
})
app.$mount()
