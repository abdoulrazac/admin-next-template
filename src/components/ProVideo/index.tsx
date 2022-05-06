import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import Player from 'xgplayer'

import props from './props'

export default defineComponent({
  name: 'ProVideo',
  props,
  setup(props) {
    const video = ref<ElementRef>(null)
    const player = ref({} as Player)

    function init() {
      player.value = new Player({
        el: video.value!,
        ...props.options!
      })
    }

    onMounted(() => {
      init()
    })

    onBeforeUnmount(() => {
      player.value?.destroy()
    })

    return {
      video,
      player
    }
  },
  render() {
    return <div ref="video"></div>
  }
})