<script setup>
import { RouterLink } from 'vue-router';
// Imports
import { toRefs } from 'vue';

const props = defineProps({
	navlinks: {
		type: Array,
		default: () => {
			return [
				{
					path: '/',
					name: 'Home',
				},
				{
					path: '/listaUsuarios',
					name: 'List',
				},
				{
					path: '/addUsuario',
					name: 'Register',
				},
			];
		},
	},
});

const { navlinks } = toRefs(props);
</script>

<template>
	<nav class="navigation">
		<ul class="navigation__list">
			<li v-for="link of navlinks" :key="link.id" class="navigation__item">
				<Transition transition="slide-fade">
					<RouterLink :to="link.path" class="navigation__link">{{
						link.name
					}}</RouterLink></Transition
				>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
.navigation {
	background: white;
	box-shadow:
		rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
		rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	padding: 2rem 1rem;
}

.navigation__list {
	display: flex;
	justify-content: center;
	list-style: none;
	gap: 1.5rem;
}

.navigation .navigation__link.router-link-exact-active {
	color: #526fff;
}

.navigation__link {
	color: var(--vt-c-indigo);
	text-decoration: none;
	font-weight: 700;
}

/** *********************************************/

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
