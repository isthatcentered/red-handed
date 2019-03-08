# Red handed
Debug your promises value the lazy way 🥳

![redhanded debugs your promises values in the prettiest way](https://github.com/isthatcentered/red-handed/blob/master/snapshot.jpg)

```typescript
import {uncover} from "redhanded"

const thing = stuffThatReturnsAPromise()
	.then(res => saveUser(res, thing))

	.then(uncover("AfterUserSaved")) // Logs the value it gets and returns it  
	
	.then(resultOfSaveUser => doOtherStuff(resultOfSaveUser)) 

```

