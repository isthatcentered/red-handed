import chalk from "chalk"




export function uncover<T>( tag: string = "" ): ( res: T ) => Promise<T>
{
	const _tag = chalk.bold( tag )
	
	return ( res: T ) => {
		
		console.log( `👋 [${uncover.label}] ${_tag}` )
		
		console.log( res )
		
		return Promise.resolve( res )
	}
}


uncover.label = chalk.cyan( "DEBUG" )