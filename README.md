# Red handed
Debug your promises value the lazy way 🥳

@todo: Image of log

```typescript
import {uncover} from "redhanded"

const thing = stuffThatReturnsAPromise()
	.then(res => doComplicatedStuff(res, thing))

	.then(uncover("After doComplicatedStuff()")) // Logs the value it gets and returns it  
	
	.then(doComplicatedStuffResult => doOtherStuff(doComplicatedStuffResult)) 

```

