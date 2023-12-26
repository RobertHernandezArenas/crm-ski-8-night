export const tools = {
	randomNumber() {
		return Math.floor(Math.random() * 8) + 1;
	},
	removeNumbers(number) {
		number = number.replaceAll(/\d+/gm, '');
		return number;
	},
	removeSymbols(word) {
		return (word = word.replaceAll(
			/[^\w\u00f1\u00d1\u00c7\u00e7\u0020]+|_/gm,
			'',
		));
	},
	upperCaseFirstLetter(words) {
		words = words.toLowerCase().split(' ');
		words = words.map(word => {
			if (word !== '') word[0].toUpperCase() + word.slice(1);
		});
		return words.join(' ').trim();
	},

	hasDateCorrectFormat(date) {
		return /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/gm.test(date);
	},

	findKeyCode(eventWhich) {
		const symbolsCode = [
			48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102,
			103, 104, 105, 106, 107, 108, 109, 110, 111, 186, 187, 188, 189, 190,
			191, 219, 220, 221, 222,
		];
		return symbolsCode.find(key => key == eventWhich);
	},
	sleepLoading(seconds) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(true);
			}, seconds * 1000);
		});
	},
};
