<script setup>
import IconLoader from './icons/IconLoader.vue';
</script>
<template>
	<div class="loader-page">
		<IconLoader />
	</div>
</template>

<style scoped>
.loader-page {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	left: 0px;
	max-height: 100%;
	max-width: 100%;
	position: fixed;
	top: 0px;
	width: 100vw;
	background: white;
}
</style>
