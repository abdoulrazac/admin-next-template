<template>
  <div class="view">
    <div class="headerWrap">
      <div class="header">
        <Icon class="logoIcon" icon="logos:element" />
        <span class="title">{{ title }}</span>
      </div>
      <div class="desc">基于 Element Plus 的后台管理系统</div>
    </div>
    <el-form
      ref="formRef"
      class="loginForm"
      :model="formModel"
      :rules="formRules"
      size="large"
    >
      <el-form-item prop="username">
        <el-input v-model="formModel.username" placeholder="账号：admin">
          <template #prefix>
            <Icon icon="ep:user" :inline="true" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="formModel.password"
          placeholder="密码：任意"
          type="password"
          @keydown.enter="handleSubmit"
        >
          <template #prefix>
            <Icon icon="ep:lock" :inline="true" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          style="width: 100%"
          @click="handleSubmit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
    <Icon class="backgroundIcon" icon="custom:background" />
  </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue'
import type { FormInstance, FormRules } from 'element-plus'
import qs from 'query-string'
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useSettingStore, useUserStore } from '@/store'

export default defineComponent({
  name: 'LoginView',
  components: {
    Icon
  },
  setup() {
    const state = reactive({
      loading: false,
      redirect: null as Nullable<string>,
      otherQuery: {},
      formRef: {} as FormInstance,
      formModel: {
        username: '',
        password: ''
      },
      formRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      } as FormRules
    })

    const route = useRoute()
    const router = useRouter()
    const settingStore = useSettingStore()
    const userStore = useUserStore()

    const title = computed(() => settingStore.title)

    function handleSubmit() {
      state.formRef.validate(valid => {
        if (valid) {
          state.loading = true

          userStore
            .login(state.formModel)
            .then(() => {
              router.replace({
                path: state.redirect || '/',
                query: state.otherQuery
              })
            })
            .finally(() => {
              state.loading = false
            })
        }
      })
    }

    onMounted(() => {
      const { query } = route

      if (query) {
        const str = query.redirect as string

        if (str) {
          const { url, query } = qs.parseUrl(str)

          state.redirect = url
          state.otherQuery = query
        }
      }
    })

    return {
      ...toRefs(state),
      title,
      handleSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.view {
  padding: 110px 0 144px;
  height: 100%;
  box-sizing: border-box;

  .headerWrap {
    text-align: center;

    .header {
      height: 55px;

      .logoIcon {
        width: 55px;
        height: 55px;
        vertical-align: top;
        margin-right: 16px;
        border-style: none;
      }

      .title {
        position: relative;
        top: 2px;
        font-size: 33px;
        font-weight: bold;
        font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        color: rgb(0 0 0 / 85%);
      }
    }

    .desc {
      margin-top: 12px;
      margin-bottom: 40px;
      color: rgb(0 0 0 / 45%);
      font-size: 14px;
    }
  }

  .loginForm {
    width: 368px;
    min-width: 260px;
    margin: 0 auto;
  }

  .backgroundIcon {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #f0f2f5;
    z-index: -1;
  }
}
</style>
