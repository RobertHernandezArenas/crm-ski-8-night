const getAge = (now, birthdate) => {
	now = new Date(now);
	birthdate = new Date(birthdate);
	let age = now.getFullYear() - birthdate.getFullYear();
	const monthDiff = now.getMonth() - birthdate.getMonth();

	if (
		monthDiff < 0 ||
		(monthDiff === 0 && now.getDate() < birthdate.getDate())
	) {
		age--;
	}

	return age;
};

export { getAge };
