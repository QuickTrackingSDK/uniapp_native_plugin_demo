<template>
	<view>
		<button type="primary" @tap="navigateToPrePage">上一页</button>
	</view>
</template>

<script>
// #ifdef APP-PLUS
const qt_plugin = uni.requireNativePlugin('qt-analytics-plugin')
// #endif	
import sdkAdaptor from '../../utils/sdkAdaptor.js'

export default {
	onShow() {
		// #ifdef APP-PLUS
		qt_plugin.onPageStart('Page2')
		// #endif
		sdkAdaptor.sendPV({a: 1, b: 2, c: 3, page_name: 'manpv_page_custom', d: undefined, e: null, f: ''})
	},
	onHide() {
		// #ifdef APP-PLUS
		qt_plugin.onPageEnd('Page2')
		// #endif
	},
	onUnload() {
		// #ifdef APP-PLUS
		qt_plugin.onPageEnd('Page2')
		// #endif
	},
	data() {
		return {
			
		}
	},
	methods: {
		navigateToPrePage: function() {
			uni.navigateBack({
				
			});
		},
	}
}
</script>

<style>

</style>
