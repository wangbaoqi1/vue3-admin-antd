<template>
  <div class="login-box">
    <div class="login-left">
      <img src="http://static-test.easytruck-go.com/img/loginEasy.png" />
    </div>
    <div class="login-right">
      <div class="login-title">
        <h1 class="mb-0 ml-2 text-3xl font-bold">Sign in</h1>
        <div>Easy truck Easy go</div>
      </div>
      <a-form
        ref="formRef"
        layout="horizontal"
        :model="state.formInline"
        :rules="rules"
        @finish="handleSubmit"
      >
        <a-form-item name="username">
          <a-input
            v-model:value="state.formInline.username"
            size="large"
            placeholder="请输入用户名"
          >
            <template #prefix><user-outlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input
            v-model:value="state.formInline.password"
            size="large"
            type="password"
            placeholder="请输入密码"
            autocomplete="new-password"
          >
            <template #prefix><lock-outlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="verifyCode">
          <a-input
            v-model:value="state.formInline.captchaCode"
            placeholder="验证码"
            :maxlength="4"
            size="large"
          >
            <template #prefix>
              <SafetyOutlined />
            </template>
            <template #suffix>
              <img
                :src="state.captcha"
                class="absolute right-3 h-full cursor-pointer"
                @click="onRefreshCaptcha"
              />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" size="large" :loading="state.loading" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
  import { useRoute, useRouter } from 'vue-router';
  import md5 from 'md5';
  import { message, Modal } from 'ant-design-vue';
  import { useUserStore } from '@/store/modules/user';
  import { to } from '@/utils/awaitTo';

  const state = reactive({
    loading: false,
    captcha: `/api/captcha/generate?captchaType=Login&d=${new Date().getTime()}`,
    formInline: {
      username: '',
      password: '',
      captchaCode: '',
    },
  });

  const route = useRoute();
  const router = useRouter();
  const formRef = ref();
  const userStore = useUserStore();
  const rules = {
    username: [{ required: true, message: '请输入密码', trigger: 'change' }],
    password: [{ required: true, message: '请输入账号', trigger: 'change' }],
    captchaCode: [
      {
        required: true,
        pattern: /^[a-zA-Z0-9]+$/,
        message: '请输入正确的验证码',
        trigger: 'change',
      },
    ],
  };
  // state.captcha =
  //   'https://mgr-test.ndwybd.com/api/captcha/generate?captchaType=Login&d=1710744853561&width=100&height=50';
  const onRefreshCaptcha = () => {
    state.captcha = `/api/captcha/generate?captchaType=Login&d=${new Date().getTime()}`;
  };
  const handleSubmit = async () => {
    const { username, password, captchaCode } = state.formInline;
    message.loading('登录中...', 0);
    state.loading = true;
    const [err] = await to(
      userStore.login({
        username: username.trim(),
        password: md5(password.trim()),
        captchaCode,
      }),
    );
    if (err) {
      console.log(err, 1000);

      // Modal.error({
      //   title: () => '提示',
      //   content: () => err.message,
      // });
    } else {
      message.success('登录成功！');
      setTimeout(() => router.replace((route.query.redirect as string) ?? '/'));
    }
    state.loading = false;
    message.destroy();
  };
</script>

<style lang="less" scoped>
  @import url('./index.less');
</style>
