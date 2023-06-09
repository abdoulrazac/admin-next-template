import { omit } from 'lodash-unified'
import { reactive, toRef, toRefs } from 'vue'

import { demoApi } from '@/apis'
import { type ProGridOptions, useProGrid } from '@/components'
import {
  TABLE_EDIT_RENDER,
  TABLE_FORMAT,
  TABLE_ITEM_RENDER,
  TABLE_RENDERER
} from '@/constants'
import { genRandomID } from '@/utils'

export function useGrid() {
  const state = reactive({
    gridConfig: {
      id: genRandomID(),
      showOverflow: true,
      border: true,
      loading: false,
      keepSource: true,
      height: 'auto',
      resizeConfig: {
        refreshDelay: 10
      },
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
              name: TABLE_ITEM_RENDER.Input,
              props: {
                placeholder: '请输入'
              }
            }
          },
          {
            title: '昵称',
            field: 'nickname',
            itemRender: {
              name: TABLE_ITEM_RENDER.Input,
              props: {
                placeholder: '请输入'
              }
            }
          },
          {
            title: '角色',
            field: 'role',
            itemRender: {
              name: TABLE_ITEM_RENDER.Select,
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
              name: TABLE_ITEM_RENDER.Select,
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
              name: TABLE_RENDERER.FormItemDate,
              props: {
                type: 'datetimerange',
                startPlaceholder: '开始时间',
                endPlaceholder: '结束时间',
                format: 'YYYY-MM-DD HH:mm:ss'
              }
            }
          },
          {
            itemRender: {
              name: TABLE_RENDERER.FormItemBtns
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
            name: TABLE_EDIT_RENDER.Input
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
            name: TABLE_EDIT_RENDER.Select,
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
            name: TABLE_EDIT_RENDER.Input
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
    } as ProGridOptions
  })

  const proGridHook = useProGrid(toRef(state, 'gridConfig'))

  return {
    ...toRefs(state),
    proGridHook
  }
}
