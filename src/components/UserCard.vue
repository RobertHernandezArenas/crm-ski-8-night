<script setup>
// Imports
import { ref, computed, toRefs } from 'vue';
import { getAge } from '../adapters';

const props = defineProps({
	userData: {
		type: Object,
		required: true,
		default: () => {
			return {
				name: 'Robert',
				surname: 'Hernández',
				birthdate: new Date('1990-04-06'),
				image: '/avatar/robert-hernandez.png',
			};
		},
	},
});

const { userData } = toRefs(props);
const { name, surname, birthdate, image } = userData.value;
const now = ref(new Date()).value;
const ageLetter = ref('años');

// Computed properties
const fullName = computed(() => {
	return `${name.split(' ')[0]} ${surname.split(' ')[0]}`;
});
const age = computed(() => getAge(now, birthdate));
</script>

<template>
	<article class="user-card">
		<div class="user-card__image-box">
			<img
				:src="image"
				:title="fullName"
				:alt="fullName"
				class="user-card__image"
			/>
		</div>
		<h1 class="user-card__name">{{ fullName }}</h1>
		<p class="user-card__age">{{ age }} {{ ageLetter }}</p>
	</article>
</template>

<style scoped>
.user-card {
	align-items: center;
	background: white;
	border-radius: 0.25rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	display: inline-flex;
	height: 100px;
	margin: 1rem 0;
	padding: 1rem 2rem;
	transition: all 0.35s ease-in-out;
	width: clamp(330px, 90vw, 720px);
}
.user-card:hover {
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.user-card__image-box {
	display: flex;
	flex: 3;
	max-height: 70px;
	max-width: 70px;
}
.user-card__image {
	height: 70px;
	width: 70px;
	border-radius: 50%;
	box-shadow:
		rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

	object-fit: cover;
}

.user-card__name {
	flex: 3;
	font-weight: bold;
	text-align: center;
	margin: 0 0.5rem;
}
.user-card__age {
	flex: 1;
	font-weight: 500;
	text-align: center;
}
</style>
