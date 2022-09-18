import { Icon } from '@iconify/vue'
import { SubMenu } from 'ant-design-vue'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'

import MainMenu from './MainMenu'
import type { MenuItem as Item } from './MenuTypes'

export default defineComponent({
  name: 'SubMenu',
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true
    }
  },
  setup(props) {
    const onlyOneChild = computed(() => {
      if (props.item.children!.length === 1) {
        if (props.item.meta) {
          if (props.item.meta.alwaysShow) {
            return false
          } else {
            return true
          }
        } else {
          return true
        }
      } else {
        return false
      }
    })

    return {
      onlyOneChild
    }
  },
  render() {
    return this.onlyOneChild ? (
      <MainMenu item={this.item.children![0]} />
    ) : (
      <SubMenu
        key={this.item.path}
        icon={this.item.meta.icon ? <Icon icon={this.item.meta.icon} /> : null}
        title={this.item.meta.title}
      >
        {this.item.children?.map(item =>
          item.children ? <sub-menu item={item} /> : <MainMenu item={item} />
        )}
      </SubMenu>
    )
  }
})
