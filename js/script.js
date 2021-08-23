const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const special = document.getElementById('special');
const pwlength = document.getElementById('pwlength');

const btn = document.getElementById('button');

const result = document.getElementById('result');
const yourpassword = document.getElementById('yourpassword');

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

const scanPassword = (password, searchArray) => {
	for (let i = 0; i < password.length; i++) {
		for (let letter of searchArray) {
			if (password[i] == letter) {
				return true;
			}
		}
	}
	return false;
};

const createPassword = (search, needsUppercase, needsNumbers, needsSpecial) => {
	let isCorrect = false;
	let password = '';
	do {
		// Create a password
		password = '';
		for (let i = 0; i < pwlength.value; i++) {
			let index = Math.round(Math.random() * search.length);
			password += search[index];
		}
		// Check if password fullfills requirements
		const hasLetters = scanPassword(password, letters);
		let hasUppercase = !needsUppercase;
		let hasNumbers = !needsNumbers;
		let hasSpecial = !needsSpecial;

		if (hasLetters && needsUppercase) {
			hasUppercase = scanPassword(password, lettersUppercase);
		}
		if (hasLetters && hasUppercase && needsNumbers) {
			hasNumbers = scanPassword(password, lettersNumbers);
		}
		if (hasLetters && hasUppercase && hasNumbers && needsSpecial) {
			hasSpecial = scanPassword(password, lettersSpecial);
		}
		if (hasLetters && hasUppercase && hasNumbers && hasSpecial)
			isCorrect = true;
	} while (!isCorrect);
	return password;
};

pwlength.addEventListener('change', () => {
	const value = pwlength.value;
	if (
		!Number.isInteger(parseInt(value)) ||
		parseInt(value) < 8 ||
		parseInt(value) > 40
	) {
		alert('Input must be a number between 8 and 40!');
		pwlength.value = 16;
	}
});

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
	let newPassword = createPassword(
		lettersArray,
		uppercase.checked,
		numbers.checked,
		special.checked
	);
	result.style.visibility = 'visible';
	yourpassword.value = newPassword;
	lettersArray.length = 0;
});
