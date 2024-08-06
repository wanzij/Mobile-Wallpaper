<template>
	<view class="biaoti">
		<view class="left">
			<slot name="header"></slot>
		</view>
		<view class="right">
<!-- 			<uni-icons  class="icon" type="calendar" size="20" color="rgb(70,173,141)"></uni-icons>
			<text style="color: rgb(70,173,141);">16日</text> -->
			<slot name="footer"></slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.biaoti {
	width: 690rpx;
	height: 80rpx;
	margin: 20rpx auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left{
		font-size: 40rpx;
		font-weight: 600;
	}
	.right{
		font-size: 25rpx;
		vertical-align:middle
		.icon{
			padding-right: 5rpx;
		}
	}
}
</style>