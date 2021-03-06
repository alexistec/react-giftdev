import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';


jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => {
        const category = 'One punch';
    

    test('should render correctly', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow( <GifGrid category={category} /> );
        expect( wrapper ).toMatchSnapshot();
    })

    test('should show items when images are loaded', () => {
        
        const gifs = [{
            id:'ABC',
            url:'http://localhost/cargado/img.jpg',
            title:'Aeasd'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });

        const wrapper = shallow( <GifGrid category={category} /> );

        expect( wrapper ).toMatchSnapshot();
        /*expect( wrapper.find('p').exists() ).toBe( gifs.length );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );*/

    })
    


    
})
