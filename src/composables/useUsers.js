import { ref, onMounted } from 'vue';
import { httpRequest } from '@/services';
//import { tools } from '@/tools';

const titlePage = ref('List');
const apiUrl = 'https://apieverywhere.com/listaUsuarios';
const users = ref([]);
const isLoading = ref(true);

export const useUsers = () => {
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

	return { titlePage, users, getUsers, isLoading };
};
