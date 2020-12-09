import React from "react";

function usePromise(promise) {  
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(function() { 
       setData(null); 
       setError(null);
       if(promise != null)
	       promise.then(dt => setData(dt)).catch(er=> setError(er));
		else
			return undefined
    }, [promise]);
    return [data, error];
}

export default usePromise;