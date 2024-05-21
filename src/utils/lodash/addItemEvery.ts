export const addItemEvery = (str: string, item: string, every: number): string => {
	for (let i = 0; i < str.length; i++) {
		if (!(i % (every + 1))) {
			str = str.substring(0, i) + item + str.substring(i);
		}
	}
	return str.substring(1);
};
