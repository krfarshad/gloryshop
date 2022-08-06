


import React from 'react'
import { useRef, useEffect } from 'react'
const useTitle = (title:string )=> {
    const prevTitleRef = useRef(document.title);
    if (document.title !== title && title) document.title = title;

    useEffect(() => {
        if(prevTitleRef){
            return () => {
                document.title = prevTitleRef.current;
            };
        }
    }, []);

}
export default useTitle;
