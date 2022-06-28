import DefaultTheme from 'vitepress/theme'
import Environment from '../components/Environment.vue'
import SDKInstall from '../components/SDKInstall.vue'
import YouTubeVideo from '../components/YouTubeVideo.vue'
import HistoryTags from '../components/HistoryTags.vue'
import Profile from '../components/Profile.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Environment', Environment)
    app.component('SDKInstall', SDKInstall)
    app.component('YouTubeVideo', YouTubeVideo)
    app.component('HistoryTags', HistoryTags)
    app.component('Profile', Profile)
  }
}
