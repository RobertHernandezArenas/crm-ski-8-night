<script setup>
import { httpRequest } from '@/services';
import { tools } from '@/tools';
import { reactive } from 'vue';

const registerStore = reactive({
	api: {
		baseUrl: 'https://apieverywhere.com',
		endpoint: '/addUsuario',
	},
	title: 'Register',
	formElements: {
		name: {
			placeholder: 'Name',
			value: null,
			hasError: false,
			errorMessage: null,
			errorTypeMessage: {
				minLength: 'El nombre debe contener un mínimo de 2 carácteres',
				maxLength: 'El nombre no debe exceder un máximo de 20 carácteres',
				numberSpecialCharacters:
					'El nombre no acepta números y carácteres especiales',
			},
			type: 'name',
		},
		surname: {
			placeholder: 'Surname',
			value: null,
			hasError: false,
			errorMessage: null,
			errorTypeMessage: {
				minLength: 'Los apellidos deben contener un mínimo de 2 carácteres',
				maxLength:
					'Los apellidos no deben exceder un máximo de 20 carácteres',
				numberSpecialCharacters:
					'Los apellidos no acepta números y carácteres especiales',
			},
			type: 'surname',
		},
		birthdate: {
			name: 'Birthdate',
			format: 'YYYY/MM/DD',
			value: null,
			hasError: false,
			errorMessage: null,
			errorTypeMessage: {
				wrongFormat:
					'El formato de la fecha de nacimiento no es correcto: YYYY/MM/DD',
			},
			type: 'birthdate',
		},
		button: {
			name: 'Create new user',
		},
	},
	errorForm: {
		hasError: false,
		message: null,
		errorTypeMessage: {
			required: 'Todos los campos son obligatorios',
		},
	},
	limitations: {
		min: 2,
		max: 20,
	},
});

// api
const { baseUrl, endpoint } = registerStore.api;

// data inputs
const { name, surname, birthdate, button } = registerStore.formElements;

// ErrorForm
const errorForm = registerStore.errorForm;

// Limitations
const { limitations } = registerStore;

const minLength = event => {
	let input = event.target.value;
	if (input.length < limitations.min && event.target.name === name.type) {
		return (name.errorMessage = name.errorTypeMessage.minLength);
	}
	if (input.length < limitations.min && event.target.name === surname.type) {
		return (surname.errorMessage = surname.errorTypeMessage.minLength);
	}
};

const maxLength = event => {
	let input = event.target.value;
	if (input.length > limitations.max && event.target.name === name.type) {
		return (name.errorMessage = name.errorTypeMessage.maxLength);
	}
	if (input.length > limitations.max && event.target.name === surname.type) {
		return (surname.errorMessage = surname.errorTypeMessage.maxLength);
	}
};

const sanitizeInputs = event => {
	let input = event.target.value;
	const noNumbers = tools.removeNumbers(input);
	const noSymbols = tools.removeSymbols(noNumbers);

	if (event.target.name == name.type) {
		name.errorMessage = name.errorTypeMessage.numberSpecialCharacters;
		return (name.value = noSymbols);
	}
	if ((event.target.name = surname.type)) {
		surname.errorMessage = surname.errorTypeMessage.numberSpecialCharacters;
		return (surname.value = noSymbols);
	}
};

const resetMessges = () => {
	birthdate.errorMessage = '';
	name.errorMessage = '';
	surname.errorMessage = '';
	errorForm.message = '';
};

const addUser = async () => {
	try {
		if (!name.value || !surname.value || !birthdate.value) {
			return (errorForm.message = errorForm.errorTypeMessage.required);
		}
		// Enviar el formulario al servidor
		await httpRequest.post(baseUrl + endpoint, {
			name: name.value,
			surname: surname.value,
			birthdate: birthdate.value,
		});

		// Limpiar los campos del formulario
		name.value = null;
		surname.value = null;
		birthdate.value = null;
	} catch (error) {
		console.log(error);
	}
};
</script>

<template>
	<a-form layout="vertical" class="register-form" autocomplte="off">
		<fieldset class="register-form__fieldset">
			<legend class="register-form__title">{{ registerStore.title }}</legend>

			<a-input
				v-model:value="name.value"
				size="large"
				:name="name.type"
				class="register-form__input"
				:placeholder="name.placeholder"
				@blur="maxLength"
				@focus="minLength"
				@input="sanitizeInputs"
				@keydown="resetMessges"
			/>

			<span class="register-form__error-message">{{
				name.errorMessage
			}}</span>

			<a-input
				v-model:value="surname.value"
				size="large"
				:name="surname.type"
				class="register-form__input"
				:placeholder="surname.placeholder"
				@blur="minLength"
				@focus="maxLength"
				@input="sanitizeInputs"
				@keydown="resetMessges"
			/>

			<span class="register-form__error-message">{{
				surname.errorMessage
			}}</span>

			<a-date-picker
				v-model:value="birthdate.value"
				:name="birthdate.type"
				label="Selecciona tu fecha de nacimiento"
				:format="birthdate.format"
				class="register-form__input"
			/>
		</fieldset>
		<br />

		<span class="register-form__error-message">{{ errorForm.message }}</span>

		<br />
		<a-button
			type="submit"
			class="register-form__button"
			@click.prevent="addUser(newUser)"
			>{{ button.name }}</a-button
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

.register-form__error-message {
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
