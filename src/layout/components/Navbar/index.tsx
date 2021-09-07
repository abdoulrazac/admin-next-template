import './index.less'

import { Space } from 'ant-design-vue'
import { defineComponent } from 'vue'

import Avatar from './Avatar'
import Breadcrumb from './Breadcrumb'
import ScreenFull from './ScreenFull'
import SiderTheme from './SiderTheme'
import Trigger from './Trigger'

export default defineComponent({
  name: 'Header',
  render() {
    return (
      <div class="navbar">
        <div class="left">
          <Trigger />
          <Breadcrumb />
        </div>
        <div class="right">
          <Space>
            <ScreenFull />
            <SiderTheme />
            <Avatar />
          </Space>
        </div>
      </div>
    )
  }
})