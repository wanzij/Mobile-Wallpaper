<template>
	<view class="container">
		<navigator url="" class="box" v-if="!isMore">
			<view class="pic">
				<image src="../../common/images/classify1.jpg" mode="aspectFill"></image>
			</view>
			<view class="text">
				明星美女
			</view>
			<view class="tap">
				2月前更新
			</view>
		</navigator>
		
		<navigator url="" class="box more" v-if="isMore">
			<view class="pic">
				<image src="../../common/images/classify1.jpg" mode="aspectFill"></image>
			</view>
			<view class="text">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="gengduo">
					更多
				</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
defineProps({
	isMore:{
		type:Boolean,
		default:false 
	}
})
</script>

<style lang="scss" scoped>
.container{
	.box {
		width: 220rpx;
		height: 340rpx;
		position: relative;
		margin-right: 9.999rpx;
		margin-bottom: 10rpx;
		border-radius: 10rpx;
		overflow: hidden;
	
		.pic {
			width: 100%;
			height: 100%;
	
			image {
				width: 100%;
				height: 100%;
			}
		}
	
		.text {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 70rpx;
			width: 100%;
			line-height: 70rpx;
			text-align: center;
			color: white;
			font-size: 30rpx;
			background: rgba(136, 136, 136, 0.5);
			backdrop-filter: blur(10px);
			font-weight: 600;
		}
	
		.tap {
			position: absolute;
			left: 0;
			top: 0;
			color: #fff;
			background-color: rgba(217, 138, 109, 0.5);
			font-size: 22rpx;
			text-align: center;
			line-height: 30rpx;
			border-bottom-right-radius: 1em;
			padding: 6rpx 14rpx;
		}
	}
	.box.more {
		.text {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
}

</style>