// function doAsyncTask(callback){
// 	setTimeout(() => {
// 		callback("task complete")
// 	}, 4000);
// }

// function handleResult(result){
// 	console.log(result)
// }

// doAsyncTask(handleResult)

// function doAsyncTask() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//     //   resolve("task complete from promise");
//       reject("Task failed")
//     }, 2000);
//   });
// }

// doAsyncTask()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


function delay(ms){
	return new Promise(function(resolve){
		setTimeout(resolve,ms)
	})
}

async function doAsyncTask(){
	await delay(1000)
	return "Task Complete"
}

// await console.log(doAsyncTask())
// doAsyncTask()

async function handleAsyncTask(){
	try{
		console.log("fungsi dijalankan")
		console.log("loading...")
		const result = await doAsyncTask()
		console.log(result)
		console.log("fungsi success dijalankan")
	} catch(err){
		console.log(err)
		console.log("fungsi gagal dijalankan")
	} finally{
		console.log("fungsi selesai")
	}
}

handleAsyncTask()