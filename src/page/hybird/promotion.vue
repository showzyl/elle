<template>

  <div class="promotion">
    <ul class="proList" v-for="list in proList">
      <li class="item" :data-modulat_id="item.modulat_id" v-for="item in list" :style="'width: '+ 100 / list.length  + '%;' ">
        <img :src="item.image" alt="">
      </li>
    </ul>
  </div>

</template>

<style media="screen" lang="scss" scoped>
 .promotion{
  .proList{
    overflow: hidden;
   .item{
     float: left;
   }
  }
 }
</style>

<script lang="babel">

	import {Toast, Indicator} from 'mint-ui'
	import util from '../../assets/lib/q.util.js'

	export default {
		data(){
			return {
				proList: null
			}
		},
		created(){
			const me = this;

			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			})

			me.fetchData({}, res => {
				console.log(res)
        me.proList = res.modulats
			})

		},
		components: {},
		computed: {},
		methods: {
			fetchData(data, cb){
				const me = this;
				let {promotion_id} = me.$route.query;
				this.$http.jsonp(
					window.q.interfaceHost + 'index.php?',
					{
						params: {
							route: 'mapi/promotion',
							format: 'jsonp',
							promotion_id // 测试 `23`
						}
					}
				).then(function (res) {
					let data = res.body;
					if (data.code + '' === '0') {
						cb && cb(data.data);
					} else {
						Toast({
							message: '暂无数据...',
							position: 'bottom',
							duration: 3000
						});
					}
					Indicator.close();
				}, function (err) {
					Indicator.close();
					Toast('网络错误...');
				});
			},
			jumpUrl(id, resource, link_id){
				switch (id) {
					case '1':
						// 去商品
						location.href = '/#/product/' + link_id;
						break;
					case '2':
						// 品牌
						location.href = '/#/brand/' + link_id;
						break;
					case '3':
						let {
							media_id,
							topic_id,
							topic_url,
							topic_source_id
						} = me.$route.query;
						// 媒体
						location.href = '/#/activity/comment?media_id=' + link_id
							+ '&media_id=' + media_id
							+ '&topic_id=' + topic_id
							+ '&topic_url=' + topic_url
							+ '&topic_source_id=' + topic_source_id
						;
						break;
					case '4':
						// 视频 直接播放
						this.playVideo(id, resource);
						break;
					case '5':
					case '6':
						// 下载app领取 优惠券
						Toast('请您下载app领取');
						break;
					default:
						Toast('请您下载app');
				}
			},
		},
		mounted() {

		},
		watch: {}
	}
</script>
