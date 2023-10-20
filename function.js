function pertambahan(num1,num2){
	let total = num1 + num2
	return total
}

const pengurangan = function(num1,num2){
	let total = num1 - num2
	return total
}

const perkalian = (num1,num2) => {
	let total = num1 * num2
	return total
}

const kuadrat = num => typeof(num) !== 'number' || num <= 0 ? 'num must be number and positif number' : num*num

const kuadrat2 = (num) => {
	if(typeof(num) !== 'number' || num <= 0){
		return 'num must be number and positif number'
	}

	return num*num
}

console.log(kuadrat2(-5))