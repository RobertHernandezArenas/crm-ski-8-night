<script setup>
import { useUsers } from '@/composables/useUsers';
import UserCard from '@/components/UserCard.vue';
import LoaderPage from '@/components/LoaderPage.vue';
import GoUp from '@/components/GoUp.vue';

const { titlePage, users, isLoading } = useUsers();
</script>

<template>
	<section class="user-listing">
		<h1 class="user-listing__title">{{ titlePage }}</h1>
		<LoaderPage v-if="isLoading" :is-showed="isLoading" />
		<GoUp />
		<UserCard v-for="user of users" :key="user?.id" :user-data="user" />
	</section>
</template>

<style scoped>
.user-listing {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 100vw;
	overflow-x: hidden;
}
.user-listing__title {
	height: fit-content;
	font-size: 2rem;
	font-weight: bold;
	padding-left: 1rem;
	margin: 1rem 0;
}
@media only screen and (min-width: 820px) {
	.user-listing__title {
		padding-left: 0rem;
	}
}
</style>
