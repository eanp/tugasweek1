const aljabar = {
	pertambahan: function(num1,num2){
		return num1+num2
	},
	perkalianDanPenjumlahan: function(num1,num2,num3){
		// (num1*num2) +num3
		let perkalian =  num1*num2
		let hasil = this.pertambahan(perkalian,num3)
		return hasil
	},
	perkalian: (num1,num2)=> {
		let total = num1 * num2 
		return total
	},
	kuadrat: num => num*num,
}

// const {perkalian,pertambahan,perkalianDanPenjumlahan} = aljabar

// console.log(aljabar.perkalian(2,4))
console.log(aljabar.kuadrat(4))
// console.log(aljabar.perkalianDanPenjumlahan(2,4,4))