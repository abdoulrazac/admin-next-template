import { Button } from 'ant-design-vue'
import { omit } from 'lodash-es'
import { defineComponent, ref } from 'vue'

import { demoApi } from '@/apis'
import { ProTable } from '@/components'
import {
  type ProTableProps,
  type ProTableRef
} from '@/components/ProTable/types'
import {
  TABLE_EDIT_RENDER,
  TABLE_FORMAT,
  TABLE_ITEM_RENDER,
  TBALE_RENDERER
} from '@/constants'

export default defineComponent({
  name: 'DemoTable',
  setup() {
    const tableRef = ref({} as ProTableRef)
    const tableConfig = ref({
      fixedHeight: true,
      options: {
        showOverflow: true,
        border: true,
        loading: false,
        keepSource: true,
        toolbarConfig: {
          perfect: true,
          custom: true,
          refresh: true,
          zoom: true,
          slots: {
            buttons: 'toolbar_buttons'
          }
        },
        editConfig: {
          trigger: 'click',
          showStatus: true
        },
        customConfig: {
          storage: true
        },
        formConfig: {
          items: [
            {
              title: '账号',
              field: 'account',
              itemRender: {
                name: TABLE_ITEM_RENDER.AInput,
                props: {
                  placeholder: '请输入'
                }
              }
            },
            {
              title: '昵称',
              field: 'nickname',
              itemRender: {
                name: TABLE_ITEM_RENDER.AInput,
                props: {
                  placeholder: '请输入'
                }
              }
            },
            {
              title: '角色',
              field: 'role',
              itemRender: {
                name: TABLE_ITEM_RENDER.ASelect,
                props: {
                  placeholder: '请选择'
                },
                options: [
                  {
                    label: 'admin',
                    value: 'admin'
                  },
                  {
                    label: 'normal',
                    value: 'normal'
                  }
                ]
              }
            },
            {
              title: '状态',
              field: 'status',
              itemRender: {
                name: TABLE_ITEM_RENDER.ASelect,
                props: {
                  placeholder: '请选择'
                },
                options: [
                  {
                    label: '禁用',
                    value: '0'
                  },
                  {
                    label: '启用',
                    value: '1'
                  }
                ]
              }
            },
            {
              title: '时间',
              field: 'date',
              itemRender: {
                name: TBALE_RENDERER.FormItemDate,
                props: {
                  type: 'range',
                  placeholder: ['开始时间', '结束时间'],
                  valueFormat: 'YYYY-MM-DD HH:mm:ss'
                }
              }
            },
            {
              itemRender: {
                name: TBALE_RENDERER.FormItemBtns
              }
            }
          ]
        },
        columns: [
          { type: 'checkbox', width: 50 },
          {
            title: 'ID',
            field: 'id'
          },
          {
            title: '账号',
            field: 'account'
          },
          {
            title: '邮箱',
            field: 'email'
          },
          {
            title: '昵称',
            field: 'nickname',
            editRender: {
              name: TABLE_EDIT_RENDER.AInput
            }
          },
          {
            title: '角色',
            field: 'role'
          },
          {
            title: '状态',
            field: 'status',
            editRender: {
              name: TABLE_EDIT_RENDER.ASelect,
              options: [
                {
                  label: '禁用',
                  value: '0'
                },
                {
                  label: '启用',
                  value: '1'
                }
              ]
            }
          },
          {
            title: '备注',
            field: 'remark',
            editRender: {
              name: TABLE_EDIT_RENDER.AInput
            }
          },
          {
            title: '创建时间',
            field: 'createTs',
            formatter: TABLE_FORMAT.Date
          }
        ],
        pagerConfig: {
          pageSize: 15
        },
        proxyConfig: {
          seq: true,
          form: true,
          props: {
            result: 'content',
            total: 'total'
          },
          ajax: {
            query: async ({ page, form }) => {
              if (form.date) {
                form.start = form.date[0]
                form.end = form.date[1]
                form = omit(form, ['date'])
              }

              const data = await demoApi.getList({
                pageSize: page.pageSize,
                current: page.currentPage,
                ...form
              })
              return data
            }
          }
        }
      }
    } as ProTableProps)

    function handleCustomRefresh() {
      tableRef.value.table.commitProxy('query')
    }

    return {
      tableRef,
      tableConfig,
      handleCustomRefresh
    }
  },
  render() {
    return (
      <div>
        <ProTable
          ref="tableRef"
          v-slots={{
            toolbar_buttons: () => {
              return (
                <Button type="link" onClick={this.handleCustomRefresh}>
                  自定义刷新
                </Button>
              )
            }
          }}
          {...this.tableConfig}
        />
      </div>
    )
  }
})
