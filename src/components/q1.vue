<template>
	<div class="q1">
		<div class="boxBig">
			<div class="shang">化学题  第1题/共4题</div>
			<div class="zhong">
				<p>
					{{qname}}
				</p>
			</div>		
			<div class="xia">
				<ul>
					<li @click="changebg(0)" :class="{bg:arr[0]}">
						<b></b><span>{{an1}}</span>
					</li>
					<li @click="changebg(1)" :class="{bg:arr[1]}">
						<b></b><span>{{an2}}</span>
					</li>
					<li @click="changebg(2)" :class="{bg:arr[2]}">
						<b></b><span>{{an3}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        isbg: null,
        arr: [false, false, false],
        data:null,
        qname:'',
        an1:'',
        an2:'',
        an3:''
      }
    },
    watch:{
    	'$route':function(n,o){
    		this.arr = [false, false, false]
    	let id=this.$route.params.id*1//获取路由参数
    	console.log(this.$store.state.selected_question[id-1])
    		let {title,answers}=this.$store.state.selected_question[id-1]
		    this.qname=title
		    this.an1=answers[0]
		    this.an2=answers[1]
		    this.an3=answers[2]
    	}
    },
    methods: {
      changebg (i) {
      	//定义背景颜色的变量
        this.arr = [false, false, false]
        this.arr[i] = true
       if(this.$route.params.id*1+1<=4){
       	setTimeout(()=>{//设置定时器是为了可以看到点击选项切换到下一题时选项的背景颜色更换
       		this.$router.push("/q1/"+(this.$route.params.id*1+1))//更换路由	
       	},200)

       }else{
       	//更换路由为另一个页面
       	this.$router.push("/q2")
       }
     	
      }
    },
    created (){

    	if(this.$route.query.type==1){//根据路由参数设置是文还是梨
    		this.data=this.$store.commit('questionType','like')
    	}
    	if(this.$route.query.type==0){
    		this.data=this.$store.commit('questionType','wenke')
    	}
    	let id=this.$route.params.id*1//获取路由参数
		   let {title,answers}=this.$store.state.selected_question[id-1]
		    this.qname=title
		    this.an1=answers[0]
		    this.an2=answers[1]
		    this.an3=answers[2]
    }
  }
</script>

<style>
	.q1{
		width:100%;
		height:100%;
	}
	.boxBig{
		width:90%;
		margin:0 auto;
	}
	.shang{
		width:100%;
		height:1rem;
		background: url(../../static/activity/imgs/bg-qustion-top.png) no-repeat;
		background-size:100%;
		margin-top:0.4rem;
		text-align: center;
		color:forestgreen;
		line-height:0.6rem;
	}
	.zhong{
		width:100%;
		height:auto;
		background: url(../../static/activity/imgs/bg-question-center.png) no-repeat;
		background-size:100% 100%;
	}
	.zhong p{
		width:80%;
		margin:0 auto;
		font-size:0.28rem;
		padding:0.2rem 0;
	}
	.xia{
		width:100%;
		min-height:8.5rem;
		background: url(../../static/activity/imgs/bg-question-bottom.png) no-repeat;
		background-size:100% 100%;
		overflow: hidden;
	}
	.xia ul{
		width:90%;
		height:100%;
		margin:0 auto;
	}
	.xia ul li{
		list-style: none;
		width:100%;
		min-height:1rem;
		margin-top:0.4rem;
		line-height:1rem;
		color:white;
		display: flex;
		align-items: center;
		background: url(../../static/activity/imgs/btn-bg-select.png) no-repeat;
		background-size:100%;
	}
	.xia ul li b{
		display: inline-block;
		width:1rem;
		height:1rem;
		background: url(../../static/activity/imgs/a.png) no-repeat;
		background-position:center center;
		background-size:70%;
	}
	.xia ul li:nth-child(2) b{
		display: inline-block;
		width:1rem;
		height:1rem;
		background: url(../../static/activity/imgs/b.png) no-repeat;
		background-position:center center;
		background-size:60%;	
	}
	.xia ul li:nth-child(3) b{
		display: inline-block;
		width:1rem;
		height:1rem;
		background: url(../../static/activity/imgs/c.png) no-repeat;
		background-position:center center;
		background-size:60%;	
	}
	.xia ul li.bg{
		background-position: 0 -1rem;
	}
</style>