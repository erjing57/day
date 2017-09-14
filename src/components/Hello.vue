<template>
  <div class="hello">
  	
  		<load ref="mask"></load>
  	
  	
  	<div class="left-hand"></div> 
    <div class="person">
    	<div class="gaokao">
    		<img src="../../static/activity/imgs/f-select.png" alt="" />
    	</div>
    	<router-link :to="{name:'q1',query:{type:1},params:{id:1}}"><div class="f-like"></div></router-link>
    	<router-link :to="{name:'q1',query:{type:0},params:{id:1}}"><div class="f-wenke"></div> </router-link>  	
    </div>
    <div class="right-hand"></div>
    <div class="orno">
    	<p class="ok"></p>
    	<p class="no"></p>
    </div>
  </div>
</template>

<script>
import loading from './loading.vue'
export default {
  name: 'hello',
  data () {
    return {
      data: []
    }
  },
  components:{
  	load:loading
  },
  mounted () {
  	setTimeout(()=>{
  		this.$refs.mask.bool=true
  		
  	},3000)
  }
}
</script>
	
<style>
	
	.hello{
		display:flex;
		position: relative;
		overflow-y: scroll;
	}
	.orno{
		position:absolute;
		top:10rem;
		left:16%;
		width:80%;
		display:flex;
	}
	.orno .ok{
		width:50%;
		height:2rem;
		background: url(../../static/activity/imgs/home-icon-1.png) no-repeat;
		background-size:40% 40%;
	}
	.orno .no{
		width:50%;
		height:2rem;
		background: url(../../static/activity/imgs/home-icon-2.png) no-repeat;
		background-size:40% 40%;
	}
	.person{
		width:80%;
		height:8rem;
		margin:0 auto;
		background:pink;
		background: url(../../static/activity/imgs/home-pepole.png) no-repeat;
		background-size: 100% 100%;
		display: flex;
		position: relative;
	}
	.gaokao{
		width:50%;
		height:2rem;
		position:absolute;
		top:9%;
		left:25%;
		background: url(../../static/activity/imgs/home-title.png) no-repeat;
		background-size:100% 100%;
	}
	.gaokao img{
		position: absolute;
		bottom:-1.2rem;
		width:100%;
		height:0.4rem;
	}
	.person a{
		display: block;
		width:100%;
		height:40%;
		margin-top:3.5rem;
		position: relative;
	}
	.person .f-like{
		width:90%;
		height:1.4rem;
		background:pink;
		background:url(../../static/activity/imgs/f-like.png) no-repeat;
		background-size:90% 90%;
		position:absolute;
		top:0.8rem;
		left:10%;
	}
	.person .f-wenke{
		width:90%;
		height:1.4rem;
		background:blue;
		background:url(../../static/activity/imgs/f-wenke.png) no-repeat;
		background-size:90% 90%;
		position:absolute;
		top:0.8rem;
		left:10%;
	}
	.left-hand{
		width:10%;
		height:70%;
		background: url(../../static/activity/imgs/home-left-hand.png) no-repeat;
		background-position: 0 80%;
		background-size:100%;
		
	}
	.right-hand{
		width:10%;
		height:70%;
		background: url(../../static/activity/imgs/home-right-hand.png) no-repeat;
		background-position: 0 80%;
		background-size:100%;
		
	}
</style>
