import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/listaUsuarios',
			name: 'userlisting',
			component: () => import('@/views/UserListingView.vue'),
		},
		{
			path: '/addUsuario',
			name: 'register',
			component: () => import('@/views/RegisterUserView.vue'),
		},
	],
});

export default router;
