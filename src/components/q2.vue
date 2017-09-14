<template>
	<div class="box">
		<div class="luqu">
			<div class="p"></div>
			<div class="cont">
				<h2>中南大学</h2>
				<p>主修课程：名侦探柯南与化学探秘</p>
				<p>课程特色：你的化学棒棒的！那家搞笑最适合你？真相只有一个！</p>
			</div>
			<ul class="two">
				<li class="lue"></li>
				<li class="gao"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		mounted () {
		  	this.$http.get('../static/school_list.json').then((data)=>{
				console.log(data)
			})
		  }
	}
</script>

<style>
	.box{
		width:100%;
		height:100%;
	}
	.luqu{
		width:80%;
		height:70%;
		margin:0 auto;
		background:pink;
		background: url(../../static/activity/imgs/bg-matriculate.png) no-repeat;
		background-size: 100%;
		display: flex;
		margin-top:0.8rem;
		position:relative;
	}
	.luqu .p{
		width:2.3rem;
		height:2.3rem;
		position:absolute;
		right:-0.2rem;
		top:0;
		background: url(../../static/activity/imgs/seal.png) no-repeat;
		background-size:100%;
		
	}
	.luqu .cont{
		width:80%;
		height:1.6rem;
		position:absolute;
		top:30%;
		left:50%;
		margin-top:0;
		margin-left:-40%;
		/*background: pink;;*/
	}
	.luqu .cont p{
		width:90%;
		font-size:0.28rem;
		line-height:0.43rem;
	}
	.luqu .cont h2{
		width:40%;
		/*text-align: center;*/
		position:absolute;
		top:-0.5rem;
		left:30%;
		font-size:0.4rem;
		font-weight: normal;
	}
	.luqu .two{
		width:80%;
		position:absolute;
		top:55%;
		left:10%;
		display:flex;
		list-style: none;
	}
	.two .lue{
		width:50%;
		height:1.2rem;
		background: url(../../static/activity/imgs/btn-intr.png) no-repeat;
		background-size:100%;
	}
	.two .gao{
		width:50%;
		height:1.2rem;
		background: url(../../static/activity/imgs/btn-share.png) no-repeat;
		background-size:100%;
	}
</style>