<script setup>
import { computed, toRefs } from 'vue';
import IconCross from './icons/IconCross.vue';
import IconError from './icons/IconError.vue';

const props = defineProps({
	config: {
		type: Object,
		default: () => {
			return {
				title: 'Type Erorr Title',
				delay: 4000,
				message:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sed?mneehj soi uwerh uhwe',
			};
		},
	},
});

const { config } = toRefs(props);

const titleLimited = computed(() => {
	return config.value.title.slice(0, 25);
});
const messageLimited = computed(() => {
	return config.value.message?.slice(0, 90);
});

const closeToast = () => {
	const toastBox = document.querySelector('.toast');
	toastBox.classList.toggle('show');
};
</script>
<template>
	<div class="toast">
		<div class="toast__icon">
			<IconError />
		</div>
		<div class="toast__description">
			<h1 class="toast__title">{{ titleLimited }}</h1>
			<p class="toast__message">
				{{ messageLimited }}
			</p>
		</div>
		<div class="toast__button-box" @click="closeToast">
			<IconCross />
		</div>
	</div>
</template>

<style scoped>
.toast {
	position: fixed;
	bottom: 12%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 350px;
	max-width: 350px;
	background: rgba(255, 231, 230, 0.7);
	border: solid #ff5757;
	border-width: 0 0 0 6px;
	color: #ff5757;
	padding: 1rem 0.5rem;
	border-radius: 0.35rem;
	opacity: 0;
	transform: translateY(100%);
	transition: all 0.45s ease-in-out;
	z-index: 10;
}

.toast.show {
	opacity: 1;
	transform: translateX(0%);
}
.toast.hidden {
	opacity: 0;
	transform: translateX(100%);
}

.toast__icon {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.toast__description {
	flex: 3;
}

.toast__title {
	font-size: 0.85rem;
	font-weight: 700;
}

.toast__message {
	line-height: 1.3;
	font-size: 0.85rem;
}

.toast__button-box {
	height: min-content;
}
</style>
