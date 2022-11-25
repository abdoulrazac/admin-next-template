import './ProTable.less'

import { isNumber, set } from 'lodash-es'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { Grid as VxeGrid } from 'vxe-table'

import proTableProps, {
  ProTableRef,
  UpdateFormItemOptions
} from './ProTableTypes'

export { proTableProps }

export default defineComponent({
  name: 'ProTable',
  props: proTableProps(),
  setup(props) {
    const tableHeight = ref(0)
    const tableId = ref(`pro-table-${Math.random().toString().slice(-5)}`)
    const table = ref({} as ProTableRef['table'])
    const tableOptions = ref(props.options)

    const config = computed(() => ({
      id: tableId.value,
      height: tableHeight.value || '',
      ...tableOptions.value
    }))

    function calcHeight() {
      if (isNumber(props.fixedHeight)) {
        tableHeight.value = props.fixedHeight
      } else if (props.fixedHeight) {
        if (props.fixedInContent) {
          const app = document.querySelector('#app')
          tableHeight.value = app!.clientHeight - 114
        } else {
          const parentEl = table.value.$parent!.$el.parentElement
          const paddingTop = getComputedStyle(parentEl).paddingTop.replace(
            'px',
            ''
          )
          const paddingBottom = getComputedStyle(
            parentEl
          ).paddingBottom.replace('px', '')

          tableHeight.value =
            parentEl.clientHeight - Number(paddingTop) - Number(paddingBottom)
        }
      }
    }

    function updateFormItem(options: UpdateFormItemOptions) {
      const item = tableOptions.value!.formConfig!.items!.find(
        v => v.field === options.field
      )

      set(item!, options.key, options.value)
    }

    function showLoading() {
      tableOptions.value!.loading = true
    }

    function hideLoading() {
      tableOptions.value!.loading = false
    }

    async function refresh(callback?: PromiseFunc) {
      try {
        showLoading()
        await callback?.()
        await table.value.commitProxy('query')
      } finally {
        hideLoading()
      }
    }

    onMounted(() => {
      calcHeight()
    })

    return {
      config,
      table,
      updateFormItem,
      showLoading,
      hideLoading,
      refresh
    }
  },
  render() {
    return (
      <VxeGrid
        ref="table"
        class="proTable"
        v-slots={this.$slots}
        {...this.config}
      />
    )
  }
})
