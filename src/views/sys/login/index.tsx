import { Icon } from '@iconify/vue'
import { Button, Form, FormItem, Input, InputPassword } from 'ant-design-vue'
import { parseUrl } from 'query-string'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useSettingStore, useUserStore } from '@/store'

import styles from './index.module.css'

const { useForm } = Form

export default defineComponent({
  name: 'LoginView',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const settingStore = useSettingStore()
    const userStore = useUserStore()

    const loading = ref(false)
    const redirect = ref<Nullable<string>>(null)
    const otherQuery = ref({})
    const formModel = ref({
      username: '',
      password: ''
    })
    const formRules = ref({
      username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    } as FormRules)

    const formRef = useForm(formModel.value, formRules.value)

    const title = computed(() => settingStore.title)

    function handleSubmit() {
      formRef
        .validate()
        .then(() => {
          loading.value = true

          userStore
            .login(formModel.value)
            .then(() => {
              router.replace({
                path: redirect.value || '/',
                query: otherQuery.value
              })
            })
            .finally(() => {
              loading.value = false
            })
        })
        .catch(() => {})
    }

    onMounted(() => {
      const { query } = route

      if (query) {
        const str = query.redirect as string

        if (str) {
          const { url, query } = parseUrl(str)

          redirect.value = url
          otherQuery.value = query
        }
      }
    })

    return {
      title,
      loading,
      formRef,
      formModel,
      handleSubmit
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.top}>
          <div class={styles.header}>
            <Icon class={styles.logoIcon} icon={'logos:ant-design'} />
            <span class={styles.title}>{this.title}</span>
          </div>
          <div class={styles.desc}>基于 Ant Design 的后台管理系统</div>
        </div>
        <Form class={styles.loginForm}>
          <FormItem
            name="username"
            wrapperCol={{ span: 24 }}
            {...this.formRef.validateInfos['username']}
          >
            <Input
              v-model:value={this.formModel.username}
              placeholder="账号：admin"
              size="large"
              prefix={<Icon icon={'ant-design:user-outlined'} />}
            />
          </FormItem>
          <FormItem
            name="password"
            wrapperCol={{ span: 24 }}
            {...this.formRef.validateInfos['password']}
          >
            <InputPassword
              v-model:value={this.formModel.password}
              placeholder="密码：任意"
              size="large"
              prefix={<Icon icon={'ant-design:lock-outlined'} />}
              onPressEnter={this.handleSubmit}
            />
          </FormItem>
          <FormItem wrapperCol={{ span: 24 }}>
            <Button
              size="large"
              type="primary"
              loading={this.loading}
              onClick={this.handleSubmit}
              style={{ width: '100%' }}
            >
              登录
            </Button>
          </FormItem>
        </Form>
        <Icon class={styles.backgroundIcon} icon={'custom:background'} />
      </div>
    )
  }
})
