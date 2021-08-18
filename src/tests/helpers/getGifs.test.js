import { getGifts } from "../../helpers/getGifs"

describe('test in getGifs', () => {
    test('should bring ten items', async() => {
        const gifs = await getGifts('One punch');
        expect( gifs.length ).toBe( 10 );
    })

    test('when we don"t send the category ', async () => {
        const gifs = await getGifts('');
        expect( gifs.length ).toBe( 0 );
    })
    
    
})
