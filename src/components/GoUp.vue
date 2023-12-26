<script setup>
import { onMounted } from 'vue';
import IconArrowUp from './icons/IconArrowUp.vue';

let distanceToTop = () => {
	return document.documentElement.scrollTop || document.body.scrollTop;
};
const toGoUp = () => {
	if (distanceToTop() > 0) scrollTo(0, 0);
};

onMounted(() => {
	let btn = document.querySelector('.go-up');
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop != 0) {
			btn.classList.add('mostrar');
		} else {
			btn.classList.remove('mostrar');
		}
	});
});
</script>

<template>
	<div id="go-up" class="go-up" @click="toGoUp">
		<IconArrowUp />
	</div>
</template>

<style scoped>
.go-up {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 3;
	right: 25px;
	bottom: 25px;
	background-color: #005aa6; /* #ffe200; */
	width: 30px;
	height: 30px;
	color: var(--lightColor);
	text-align: center;
	border-radius: 50%;
	transition: all 0.2s ease-out;
	opacity: 0;
}

#go-up:hover {
	cursor: pointer;
	transform: scale(1.1);
}

.mostrar {
	transition: all 0.35s ease-in;
	opacity: 1;
}
@media only screen and (min-width: 1024px) {
	#go-up {
		width: 35px;
		height: 35px;
	}
}
</style>
