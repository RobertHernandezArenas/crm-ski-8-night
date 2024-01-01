<script setup>
// Imports
import { ref, computed, toRefs } from 'vue';

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
const now = new Date();

// Computed properties
const fullName = computed(() => {
	return `${name.split(' ')[0]} ${surname.split(' ')[0]}`;
});

const nowYear = now.getFullYear();
const birthdateUserYear = new Date(birthdate).getFullYear();
const nowMonth = now.getMonth() + 1;
const birthdateUserMonth = new Date(birthdate).getMonth() + 1;
const nowDay = now.getDate();
const birthdateUserDay = new Date(birthdate).getDate();

const age = computed(() => {
	if (nowMonth < birthdateUserMonth) {
		return nowYear - birthdateUserYear - 1;
	}
	return nowYear - birthdateUserYear;
});
const ageLabel = ref('Edad');

const monthDifference = computed(() => {
	if (nowMonth < birthdateUserMonth) {
		return birthdateUserMonth - nowMonth;
	}
	return nowMonth - birthdateUserMonth;
});
const monthLabel = ref('Meses');

const dayDifference = computed(() => {
	if (nowDay < birthdateUserDay) {
		return -(nowDay - birthdateUserDay);
	}
	return nowDay - birthdateUserDay;
});
const dayLabel = ref('Dias');
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
		<div class="user-card__info">
			<p class="user-card__age">{{ ageLabel }} {{ age }}</p>
			<p class="user-card__age"></p>
			<p class="user-card__age">{{ monthLabel }} {{ monthDifference }}</p>
			<p class="user-card__age"></p>
			<p class="user-card__age">{{ dayLabel }} {{ dayDifference }}</p>
			<p class="user-card__age"></p>
		</div>
	</article>
</template>

<style scoped>
.user-card {
	align-items: center;
	background: white;
	border-radius: 0.25rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	display: flex;
	justify-content: center;
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
	flex: 2;
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
.user-card__info {
	display: flex;
}

.user-card__name {
	flex: 3;
	font-weight: bold;
	text-align: left;
	margin: 0 1rem;
}
.user-card__age {
	flex: 2;
	font-weight: 500;
	font-size: 0.9rem;
}
</style>
