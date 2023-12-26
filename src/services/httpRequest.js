export const httpRequest = {
	async get(url) {
		try {
			const request = await fetch(url);
			const response = await request.json();
			return response;
		} catch (error) {
			console.log(`[GET] - Error Services - :::> ${error}`);
		}
	},
	async post(url, body) {
		try {
			if (
				body.name == null ||
				body.surname == null ||
				body.birthdate == null
			) {
				throw new Error('Fallo en servidor');
			} else {
				return fetch(url, {
					method: 'POST',
					body: JSON.stringify(body),
					headers: {
						'Content-Type': 'application/json',
					},
				}).then(response => response.json());
			}
		} catch (error) {
			console.log(`[POST] - Error Services - :::> ${error}`);
		}
	},
	async put() {},
	async delete() {},
};
