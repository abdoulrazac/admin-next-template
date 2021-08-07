import {
  ExclamationCircleOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'
import { Dropdown, Menu, Modal } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { SvgIcon } from '@/components'
import { Actions, Key } from '@/store'

export default defineComponent({
  name: 'Avatar',
  setup() {
    const router = useRouter()
    const store = useStore(Key)

    function handleLogout() {
      Modal.confirm({
        title: '提示',
        icon: <ExclamationCircleOutlined />,
        content: '确认退出登录？',
        async onOk() {
          await store.dispatch(Actions.user.logout)
          router.replace({ path: '/login' })
        }
      })
    }

    return {
      handleLogout
    }
  },
  render() {
    return (
      <Dropdown
        v-slots={{
          default: () => (
            <div class="avatar-wrapper">
              <SvgIcon name="avatar" class="avatar" />
            </div>
          ),
          overlay: () => (
            <Menu>
              <Menu.Item onClick={this.handleLogout}>
                <LogoutOutlined />
                <span>退出登录</span>
              </Menu.Item>
            </Menu>
          )
        }}
      />
    )
  }
})