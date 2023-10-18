const address = {
	city: "east jakarta",
	province: "DKI Jakarta",
	postcode: 14313,
	detail : {
		streetName : "jalan pahlawan revolusi",
		number: 20
	}
}

let {city,province,postcode,is_native,detail:{streetName,number}} = address


console.log(streetName,number)