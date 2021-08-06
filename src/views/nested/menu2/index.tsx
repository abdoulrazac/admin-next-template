import { Alert } from 'ant-design-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NestedMenu2',
  render() {
    return (
      <div
        style={{
          padding: '30px'
        }}
      >
        <Alert closable={false} message="Menu 2" />
      </div>
    )
  }
})