<template>

  <div class="imgTxtList">
    <div class="imgList">
      <img v-for="item in imgList" :src="item.image"
           @touchend="jumpUrl(item.link_type_id, item.media_resource_id, item.link_id)">
    </div>
  </div>


</template>

<style media="screen" lang="scss" scoped>
  .imgTxtList {
    padding: 15px;
    line-height: 175%;
  }
</style>

<script lang="babel">

	import {Toast, Indicator} from 'mint-ui'
	import util from '../../assets/lib/q.util.js'

	export default {
		data(){
			return {
				imgList: null
			}
		},
		created(){
			const me = this;

			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});

			me.fetchData({}, res => {
				console.log(res)
        return
				if (res.image_text) {
					res.image_text = util.unescapeHTML(res.image_text);
					if (res.image_text) {
						util.getEl('.imgTxtList').innerHTML = res.image_text;
					} else {
						const a = document.createElement('a');
						a.href = '/'
						a.innerHTML = '暂无内容, 点击查看更多精彩!';
						util.getEl('.imgTxtList').innerHTML = ''
					}
				} else {
					me.imgList = res.images
				}

			});

		},
		components: {},
		computed: {},
		methods: {
			fetchData(data, cb){
				const me = this;
				let {media_id} = me.$route.query;
				// route=mapi/media&media_id=32
				this.$http.jsonp(
					window.q.interfaceHost + 'index.php?',
//          'http://106.75.17.211:6603/index.php?',
					{
						params: {
							route: 'mapi/media',
							format: 'jsonp',
							media_id
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
