let name = "riki"
let umur = 20


if(name === "riki" && umur === "20"){
	console.log("Equal value and type,")
} else if(name === "riki" || umur === "20") {
	console.log("Equal value")
} else {
	console.log("not equal")
}

name==="riki" ? console.log("name is riki") : console.log("name is not riki")

if(typeof(umur) != typeof(name)){
	console.log("not equal type")
}

typeof(umur) != typeof(name) && console.log("not equal type - ternary")

// if(umur !== "20"){
// 	console.log("umur not equal type")
// } else {
// 	console.log("umur equal type")
// }

// if(umur>="20"){
// 	console.log("umur more than 20 or 20")
// }

// switch (umur) {
// 	case umur=20:
// 		console.log("umur is 20")
// 		break;
// 	case umur="20":
// 		console.log("umur is not 20")
// 		break;
// 	default:
// 		console.log("final")
// }