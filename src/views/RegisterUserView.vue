<script setup>
import RegisterForm from '@/components/RegisterForm.vue';
</script>

<template>
	<section class="register">
		<RegisterForm />
	</section>
</template>

<style scoped>
.register {
	align-items: center;
	display: flex;
	height: calc(100vh - 90px);
	justify-content: center;
	width: 100vw;
	overflow: hidden;
}

@media (orientation: landscape) {
	.register {
		margin-top: 1rem;
		overflow: auto;
		height: auto;
	}
}
</style>
