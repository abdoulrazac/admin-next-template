import { Menu } from 'ant-design-vue'
import { computed, defineComponent } from 'vue'

import { propTypes } from '@/utils'

import MainMenu from './MainMenu'
import type { Item } from './types'

export default defineComponent({
  name: 'SubMenu',
  props: {
    item: propTypes.object<Item>().isRequired
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
      <Menu.SubMenu
        key={this.item.path}
        icon={this.item.meta.icon}
        title={this.item.meta.title}
      >
        {this.item.children?.map(item =>
          item.children ? <sub-menu item={item} /> : <MainMenu item={item} />
        )}
      </Menu.SubMenu>
    )
  }
})