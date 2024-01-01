export class Validation {
	constructor() {
		this.errors = [];
	}

	// Método para resetear los errores
	reset() {
		this.errors = [];
	}

	isRequired(value, fieldName) {
		if (!value || value.trim() === '') {
			this.errors.push(`El campo ${fieldName} es obligatorio`);
		}
	}

	isLength(value, minLength, maxLength, fieldName) {
		if (value.length < minLength || value.length > maxLength) {
			this.errors.push(
				`El campo ${fieldName} debe tener entre ${minLength} y ${maxLength} caracteres`,
			);
		}
	}

	isDate(value, fieldName) {
		if (isNaN(new Date(value).getTime())) {
			this.errors.push(`La fecha en el campo ${fieldName} es inválida`);
		}
	}

	hasSpecialCharacters(value, fieldName) {
		const isSpecialCharacters = /[^\w\u00f1\u00d1\u00c7\u00e7\u0020]+|_/gm;
		if (value.match(isSpecialCharacters)) {
			this.errors.push(
				`El campo ${fieldName} no permite carácteres especiales`,
			);
		}
	}

	hasNumbers(value, fieldName) {
		const isNumbers = /\d+/gm;
		if (value.match(isNumbers)) {
			this.errors.push(`El campo ${fieldName} no permite números`);
		}
	}
}
