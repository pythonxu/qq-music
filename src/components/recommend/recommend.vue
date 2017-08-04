<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <slider>

      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'components/slider/slider'
  import {getRecommend} from  'api/recommend'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        recommends: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
            console.log(this.recommends)
          }
        },(err) => {
          console.log(err.code)
        })
      }
    },
    components: {
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
