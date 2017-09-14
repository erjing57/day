// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import animate from 'animate.css'
//import vueAxios from 'vue-axios'
//import bus from 'vue-bus'
import Vuex from 'vuex'
Vue.use(Vuex)
let store=new Vuex.Store({
	state:{
		quenum:null,
		selected_question:[]
	},
	mutations:{
		setdata:function(state,data){
			state.quenum=data
//			console.log(state.quenum)
		},
		questionType:function(state,type){
			let arr=[]
			let quenum=state.quenum
			function getevery_arr(arr){
				let tmp_arr=[]
				for(let i=0;i<4;i++){
					let tmp=random(0,arr.length);
					if(tmp_arr.indexOf(tmp)==-1){
						tmp_arr.push(tmp)
					}else{
						i--
					}
				}
				return [arr[tmp_arr[0]],arr[tmp_arr[1]],arr[tmp_arr[2]],arr[tmp_arr[3]]]
			}

		//随机数
		function random(min,max){
			return Math.floor(Math.random()*max-min)
		}
		//判断点击的是文科还是理科
		if(type="like"){
			Object.values(quenum).forEach((val)=>{
				if(val.type !==1){
					arr.push(val)
				}
			})
		}
		if(type='wenke'){
			Object.values(quenum).forEach((val)=>{
				if(val.type==1 || val.type==2){
					arr.push(val)
				}
			})
		}
		state.selected_question=[...getevery_arr(arr)]
		}

	},
	actions:{
		getdata:function({commit},data){
			commit('setdata',data)
		}
	}
})

Vue.prototype.$http=axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted () {
  	this.$http.get('../static/question.json').then((data)=>{
		this.$store.dispatch("getdata",data.data) 
//		console.log(data)
	})
  }
})
