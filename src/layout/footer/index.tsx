import { defineComponent } from 'vue';

import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons-vue';
import { Layout } from 'ant-design-vue';
import styles from './index.module.less';

const { Footer: ALayoutFooter } = Layout;

export default defineComponent({
  name: 'PageFooter',
  components: { ALayoutFooter },
  setup() {
    return () => (
      <>
        <a-layout-footer class={styles.page_footer}>
          <div class={styles.page_footer_link}>
            <a href="https://github.com/vuejs/vue-next" target="_blank">
              vue 3.0
            </a>
            <a href="https://github.com/wangbaoqi1" target="_blank">
              <GithubOutlined />
            </a>
            <a href="https://github.com/vueComponent/ant-design-vue" target="_blank">
              {' '}
              ant-design-vue 2.0
            </a>
          </div>
          <div class={styles.copyright}>
            Copyright <CopyrightOutlined /> 2020
            <a href="https://wangbaoqi1.gitee.io" target="_blank">
              wangbaoqi1.gitee.io
            </a>
          </div>
        </a-layout-footer>
      </>
    );
  },
});
