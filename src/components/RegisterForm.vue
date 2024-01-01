<script setup>
import { httpRequest } from '@/services';
import { computed, ref } from 'vue';
import { registerStore } from '@/store/RegisterFrom.store';
import { Validation } from '@/tools/Validation';

// api
const { baseUrl, addUserEndpoint } = registerStore.api;

const buttonName = ref('Create user');

// Input name validation
const name = ref(null);
const nameErrors = ref([]);
const validationName = new Validation();
const isValidName = computed(() => nameErrors.value.length >= 0);
const validateNameInput = () => {
	try {
		validationName.reset();
		validationName.isRequired(name.value, 'Name');
		validationName.isLength(name.value, 2, 20, 'Name');
		validationName.hasSpecialCharacters(name.value, 'Name');
		validationName.hasNumbers(name.value, 'Name');
		// Actualizar los errores con los errores de la validación
		nameErrors.value = [...validationName.errors];
	} catch (error) {
		console.log(error);
	}
};

// Input surname validation
const surname = ref(null);
const surnameErrors = ref([]);
const validationSurname = new Validation();
const isValidSurname = computed(() => surnameErrors.value.length >= 0);
const validateSurnameInput = () => {
	try {
		validationSurname.reset();
		validationSurname.isRequired(surname.value, 'Surname');
		validationSurname.isLength(surname.value, 2, 20, 'Surname');
		validationSurname.hasSpecialCharacters(surname.value, 'Surname');
		validationSurname.hasNumbers(surname.value, 'Surname');
		// Actualizar los errores con los errores de la validación
		surnameErrors.value = [...validationSurname.errors];
	} catch (error) {
		console.log(error);
	}
};

// Input birthdate validation
const birthdate = ref(null);
const birthdateErrors = ref([]);
const validationBirthdate = new Validation();
const isValidBirthdate = computed(() => birthdateErrors.value.length >= 0);
const validateBirthdateInput = () => {
	try {
		validationBirthdate.reset();
		validationBirthdate.isRequired(birthdate.value, 'Birthdate');
		validationBirthdate.isLength(birthdate.value, 2, 20, 'Birthdate');
		validationBirthdate.hasSpecialCharacters(birthdate.value, 'Birthdate');
		validationBirthdate.hasNumbers(birthdate.value, 'Birthdate');
		// Actualizar los errores con los errores de la validación
		birthdateErrors.value = [...validationBirthdate.errors];
	} catch (error) {
		console.log(error);
	}
};

const addUser = async () => {
	if (!name.value || !surname.value || !birthdate.value) {
		throw new Error('hola error add user');
	}
	// Enviar el formulario al servidor
	await httpRequest.post(baseUrl + addUserEndpoint, {
		name: name.value,
		surname: surname.value,
		birthdate: birthdate.value,
	});
};
</script>

<template>
	<a-form layout="vertical" class="register-form">
		<legend class="register-form__title">{{ registerStore.title }}</legend>
		<a-input
			v-model:value="name"
			size="large"
			class="register-form__input"
			placeholder="Name"
			@input="validateNameInput"
		/>
		<div v-if="isValidName" class="register-form__error-list">
			<p
				v-for="error of nameErrors"
				:key="error.id"
				class="register-form_error"
			>
				* {{ error }}
			</p>
		</div>

		<a-input
			v-model:value="surname"
			size="large"
			class="register-form__input"
			placeholder="Surname"
			@input="validateSurnameInput"
		/>
		<div v-if="isValidSurname" class="register-form__error-list">
			<p
				v-for="error of surnameErrors"
				:key="error.id"
				class="register-form_error"
			>
				* {{ error }}
			</p>
		</div>

		<a-date-picker
			v-model:value="birthdate"
			format="YY/MM/DD"
			class="register-form__input"
			@input="validateBirthdateInput"
		/>

		<div v-if="isValidBirthdate" class="register-form__error-list">
			<p
				v-for="error of birthdateErrors"
				:key="error.id"
				class="register-form_error"
			>
				* {{ error }}
			</p>
		</div>

		<a-button
			class="register-form__button"
			@click.prevent="addUser(newUser)"
			>{{ buttonName }}</a-button
		>
	</a-form>
</template>

<style scoped>
.register-form {
	align-items: center;
	display: flex;
	flex-direction: column;
	background: transparent;
	box-shadow: none;
	height: auto;
	margin: 0 auto;
	padding: 0 0.5rem;
	width: clamp(330px, 90vw, 580px);
}

.register-form__fieldset {
	border: none;
}
.register-form__title {
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
	margin: 0.5rem 0;
}

.register-form__input {
	color: black;
	background: rgb(235, 235, 235);
	border-radius: 0.25rem;
	border: none;
	height: 3.5rem;
	margin: 1rem auto;
	outline: none;
	padding: 1rem;
	width: 100%;
}
.register-form__error-list {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
}

.register-form_error {
	text-align: left;
	font-size: 0.9rem;
	color: #ff5757;
}

.register-form__button {
	background: #526fff;
	border-radius: 0.25rem;
	border: none;
	color: white;
	font-size: 1rem;
	font-weight: 500;
	height: 4rem;
	outline: none;
	margin: 1rem 0;
	padding: 1rem 2rem;
	width: max-content;
}

@media (orientation: landscape) and (min-width: 660px) and (max-width: 768px) {
	.register-form {
		margin-top: 20rem;
	}
}
</style>
