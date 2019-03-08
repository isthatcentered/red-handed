import { uncover } from "./index"




test()



async function test()
{
	const promise: Promise<any> = Promise.resolve( {
		username: "Batman",
		password: "admin",
	} )
	
	console.log( "" )
	console.log( "" )
	console.log( "With tag:" )
	
	await promise
		.then( uncover( "After resolver" ) )
	
	console.log( "" )
	console.log( "" )
	console.log( "No tag:" )
	
	await promise
		.then( uncover() )
	
}


