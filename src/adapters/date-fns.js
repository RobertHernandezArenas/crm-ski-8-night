import { differenceInYears } from 'date-fns';

const getAge = (now, birthdate) => {
	return differenceInYears(new Date(now), new Date(birthdate));
};

export { getAge };
