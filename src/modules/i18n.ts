import { createI18n } from 'vue-i18n'
import type { VueModule } from './types' // import type怎么理解
// 准备语言包
const messages = {
  en: {
    greeting: 'Hello {name}!',
    button: {
      submit: 'Submit'
    }
  },
  zh: {
    greeting: '你好 {name}！',
    button: {
      submit: '提交'
    }
  }
}

export const install: VueModule = ({ app }) => {
    const i18n = createI18n({
        legacy: false, // 必须设置为 false 使用 Composition API
        locale: 'zh', // 默认语言
        fallbackLocale: 'en', // 回退语言
        messages
    })
    app.use(i18n)
}
