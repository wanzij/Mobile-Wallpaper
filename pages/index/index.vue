<template>
	<view class="content">
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgb(180, 180, 180)" indicator-active-color="#fff" autoplay>
				<swiper-item v-for="item in 3">
					<image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="tuiwen">
			<view class="left">
				<uni-icons type="sound-filled" size="25" color="rgb(70,173,141)"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="container">
				<swiper :autoplay="true" :interval="3000" :duration="1000" vertical>
					<swiper-item>
						<view class="swiper-item">欢迎关注麦旋风壁纸</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">麦旋风前端欢迎您</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="20"></uni-icons>
			</view>
		</view>

		<view class="zhuti">
			<biao-ti>
				<template v-slot:header>
					<view>每日推荐</view>
				</template>
				<template v-slot:footer>
					<view>
						<uni-icons class="icon" type="calendar" size="20" color="rgb(70,173,141)"></uni-icons>
						<text style="color: rgb(70,173,141);">16日</text>
					</view>
				</template>
			</biao-ti>
			<view class="scoll">
				<scroll-view scroll-x="true" @scroll="scroll" class="scroll-item">
					<view class="pic">
						<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
					</view>
					<view class="pic">
						<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
					</view>
					<view class="pic">
						<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
					</view>
					
					<view class="pic">
						<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
					</view>
					<view class="pic">
						<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
			<view class="more">
				<biao-ti>
					<template v-slot:header>
						<view>专题精选</view>
					</template>
					<template v-slot:footer>
						<view>
							<text style="color:#bfbeb2">More+</text>
						</view>
					</template>
				</biao-ti>
			    <view class="box">
					<bi-zhi v-for="(item,index) in 8" :key="item.index"></bi-zhi>
					<bi-zhi :isMore="true"></bi-zhi>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.content {
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				swiper-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					box-sizing: border-box;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}

		.tuiwen {
			width: 690rpx;
			height: 80rpx;
			margin: 30rpx auto;
			display: flex;
			background-color: rgb(236, 236, 236);
			line-height: 80rpx;
			border-radius: 10rpx;

			.left {
				width: 130rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 15rpx;
				color: rgb(70, 173, 141);
			}

			.container {
				flex: 1;
				height: 100%;

				swiper {
					height: 100%;

					swiper-item {
						height: 100%;
					}
				}
			}

			.right {
				width: 90rpx;
				padding-left: 15rpx;
			}
		}
		.zhuti{
			padding: 50rpx 0;
			.scoll {
				padding:0 30rpx;
				.scroll-item{
					white-space: nowrap;
					.pic {
						width: 200rpx;
						height: 440rpx;
						display: inline-block;
						margin-right: 10rpx;
						border-radius: 10rpx;
						overflow: hidden;
						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
			.more {
				.box {
					width: 690rpx;
					margin: 0 auto;
					display: flex;
					flex-wrap: wrap;
				}
			}
		}
		
	}
</style>