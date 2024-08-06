<template>
	<view class="container">
		<view class="box">
			<view class="pic">
				<image src="../../static/xxmLogo.png" mode=""></image>
			</view>
			<view class="ip">
				119.10.110.3
			</view>
			<view class="address">
				来自：山东
			</view>
		</view>
		
		<view class="list">
			<view class="list-item" v-for="item in 3" :key="item.index">
				<view class="left">
					<uni-icons class="img" type="download-filled" size="25" color="#20b000"></uni-icons>
					<view class="text">
						我的下载
					</view>
				</view>
				<view class="right">
					<view class="text">
						0
					</view>
					<uni-icons class="img" type="forward" size="20" color="#aaa"></uni-icons>
				</view>
			</view>
		</view>
		
		<view class="list">
			<view class="list-item" v-for="item in 2" :key="item.index">
				<view class="left">
					<uni-icons class="img" type="download-filled" size="25" color="#20b000"></uni-icons>
					<view class="text">
						我的下载
					</view>
				</view>
				<view class="right">
					<view class="text">
						0
					</view>
					<uni-icons class="img" type="forward" size="20" color="#aaa"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container{
	.box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 120rpx 0;
		.pic {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.ip {
			font-size: 40rpx;
			padding: 20rpx 0;
		}
		.address {
			color: #adadad;
		}
	}
	.list {
		border: 1px solid #eee;
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx #e7e7e7;
		margin: 0 30rpx 100rpx;
		.list-item {
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #eee;
			padding: 0 20rpx;
			color: #7c7c7c;
			.list-item:last-child {
				border-bottom: 0;
			}
			.left {
				display: flex;
				align-items: center;
				.img {
					margin-right: 10rpx;
				}
			}
			.right {
				display: flex;
				align-items: center;
			}
		}
		
	}
}
</style>
