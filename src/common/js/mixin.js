import  {mapGetters} from 'vuex'

export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted() {
    this.handlePlaylist(this.playlist)
  },
  //keep-alive组件且过来的时候触发
  activated() {
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: {
    // 组件需要实现这个方法，不然会调用playlistMixin的handlePlaylist
    handlePlaylist() {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
