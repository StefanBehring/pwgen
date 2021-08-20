const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const special = document.getElementById('special');
const pwlength = document.getElementById('pwlength');

const btn = document.getElementById('button');

const letters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const lettersUppercase = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const lettersNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lettersSpecial = ['=', '+', '-', '*', '?', '(', ')', '_'];

let lettersArray = [];

const createPassword = (search) => {
	let isCorrect = false;
	let password = '';
	console.log(search);
	do {
		// Create a password
		password = '';
		for (let i = 0; i < pwlength.value; i++) {
			let index = Math.round(Math.random() * search.length);
			password += search[index];
		}
		// Check if password fullfills requirements
		isCorrect = true;
	} while (!isCorrect);
	return password;
};

btn.addEventListener('click', () => {
	lettersArray.push(...letters);
	if (uppercase.checked) {
		lettersArray.push(...lettersUppercase);
	}
	if (numbers.checked) {
		lettersArray.push(...lettersNumbers);
	}
	if (special.checked) {
		lettersArray.push(...lettersSpecial);
	}
	console.log(pwlength.value);
	console.log(lettersArray);
	let result = createPassword(lettersArray);
	console.log(result);
	lettersArray.length = 0;
	console.log(lettersArray);
});
