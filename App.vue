<script>
	// #ifdef APP-PLUS
	const QtAnalytics = uni.requireNativePlugin('qt-analytics-plugin');
	// #endif
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			QtAnalytics.setCustomDomain('设置收数域名');
			console.log('App Launch', QtAnalytics)
			if (uni.getSystemInfoSync().platform === 'ios') {
				QtAnalytics.initWithAppkey('设置iOS appKey', '设置渠道', 1, '');
			} else {
				QtAnalytics.preInit('设置 Android appKey', '设置渠道', 1, '');
				// android 需要配合在隐私授权同意后调用 QtAnalytics.init 
			}
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
