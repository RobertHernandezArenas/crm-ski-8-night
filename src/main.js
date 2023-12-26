import { createApp } from 'vue';

import App from './App.vue';

import router from './router';

import Antd from 'ant-design-vue/es';

// import { VueQueryPlugin } from '@tanstack/vue-query';

import './assets/main.css';

const app = createApp(App);

/*VueQueryPlugin.install(app, {
	queryClientConfig: {
		defaultOptions: {
			queries: {
				cacheTime: 1000 * 120, // 2 minutes
				refetchOnReconnect: 'always',
			},
		},
	},
});*/

app.use(router).use(Antd).mount('#app');
