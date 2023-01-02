import { useEffect, useState } from 'react'

/**
 * 
 * @param func Callback function that is called after timeout
 * @param params Parameters to use for debounce and to pass to `func`
 * @param timeout Time for the debounce
 */
export const useDebounce = (func: any, params: any[], timeout: number) => {
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            setLoading(true);

            const debounceCall = setTimeout(
                () => {
                    func(...params);
                    setLoading(false);
                },
                timeout
            );

            return () => {
                clearTimeout(debounceCall);
            }
        }, params
    );

    return loading;
}