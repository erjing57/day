<template>
	<transition name="tran">
	<div :class="{loa:true,active:bool}">
		<div class="load">
			
		</div>
		<h1>loading. . .</h1>
	</div>
	</transition>
</template>

<script>
	export default {
		data () {
			return {
				bool:false
			}
		}
	}
</script>

<style>
	.tran-enter-active,.tran-leave-active{
		animation:pulse 2s linear; 
	}
	.loa{
		width:100%;
		height:100%;
		position:absolute;
		top:0;
		left:0;
		background: rgba(0,0,0,0.8);
		z-index:1000;
	}
	.active{
		display:none;
	}
	.load{
		width:60%;
		height:30%;
		margin:0 auto;
		margin-top:30%;
		background: url(../../static/activity/imgs/loading-img.png) no-repeat;
		background-size:100%;
	}
	h1{
		text-align: center;
		font-size:0.4rem;
		color:white;
	}
</style>