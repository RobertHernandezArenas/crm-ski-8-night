import { reactive } from 'vue';
export const registerStore = reactive({
	title: 'Register',
	api: {
		baseUrl: 'https://apieverywhere.com',
		addUserEnpoint: '/addUsuario',
	},
});
