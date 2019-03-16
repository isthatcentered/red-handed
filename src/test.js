const { uncover } = require( "../dist/index" )

test()


async function test()
{
	const promise = Promise.resolve( {
		email: "batman@brucewayne.com",
		password: "imbatmanlolz",
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
	
	
	console.log( "" )
	console.log( "" )
	console.log( "Not objects:" )
	uncover()( "res" )
	uncover()( 1 )
	uncover()( null )
	uncover()( undefined )
	uncover()( [] )
	
}


