import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Test in hook useFetchGifs', () => {

    test('should return the initial state', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe( true ); 
    })
    
    /*test('should load an image and loading must be false', () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe( true ); 
    })*/
    
})
