const addCommaToNumber = (number: number): string => {
	const arrOfStringsFromNumbersReverse: Array<string> = String(number)
		.split('')
		.reverse();

	const commaCount = Math.ceil(arrOfStringsFromNumbersReverse.length / 3 - 1);
	let addingCommaPlusPosition: number = 0;

	for (let i = 1; i <= commaCount; i++) {
		arrOfStringsFromNumbersReverse.splice(
			3 * i + addingCommaPlusPosition,
			0,
			','
		);

		addingCommaPlusPosition++;
	}

	return arrOfStringsFromNumbersReverse.reverse().join('');
};

export default addCommaToNumber;
