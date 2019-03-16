const chalk = require( "chalk" )
const prettyLog = require( "json-stringify-pretty-compact" )



export function uncover<T = any>( tag: string = "" ): ( res: T ) => Promise<T>
{
	const _tag = chalk.bold( tag )
	
	return ( res: T ) => {
		
		console.log( `👋 [${uncover.label}] ${_tag}` )
		
		console.log( prettyLog( res, { maxLength: 0 } ) )
		
		console.log( "" )
		return Promise.resolve( res )
	}
}


uncover.label = chalk.cyan( "DEBUG" )



