<script setup>
import UserCard from '@/components/UserCard.vue';
import LoaderPage from '@/components/LoaderPage.vue';
import GoUp from '@/components/GoUp.vue';
import { ref, computed, onMounted } from 'vue';
import { httpRequest } from '@/services';

const apiUrl = 'https://apieverywhere.com/listaUsuarios';
const users = ref([]);
const isLoading = ref(true);
const searchTerm = ref('');

const filteredUsers = computed(() => {
	return users.value.filter(user => {
		const fullName = `${user.name} ${user.surname}`;
		return fullName.toLowerCase().includes(searchTerm.value.toLowerCase());
	});
});

onMounted(async () => {
	//await tools.sleepLoading(1); // Para que se aprecie el loader
	await loadUsers();
});

const getUsers = async () => {
	try {
		const request = await httpRequest.get(apiUrl);
		const data = await request;
		return data;
	} catch (error) {
		console.error(error.message);
	} finally {
		isLoading.value = false;
	}
};

const loadUsers = async () => {
	const data = await getUsers();
	users.value = data;
};
</script>

<template>
	<section class="user-listing">
		<h1 class="user-listing__title">List</h1>

		<a-input-search
			v-model:value="searchTerm"
			class="user-listing__search"
			placeholder="input search text"
			enter-button
		/>
		<LoaderPage v-if="isLoading" :is-showed="isLoading" />
		<GoUp />
		<UserCard
			v-for="user of filteredUsers"
			:key="user?.id"
			:user-data="user"
		/>
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
.user-listing__search {
	width: 50%;
}
@media only screen and (min-width: 820px) {
	.user-listing__title {
		padding-left: 0rem;
	}
}
</style>
