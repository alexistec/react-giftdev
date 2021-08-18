import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Test in <GifGridItem/>', () => {
    const url='http://localhost/static/img/k.jpg';
    const title = 'Tilte test';
    const wrapper = shallow( <GifGridItem url={ url } title={ title } /> );

    test('should render the component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
    })

    test('should have a paragraph with a text',()=>{
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('we check the props of the img tag',()=>{
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('should have className animate__bounce', () => {
        const div = wrapper.find('div');  
        const className = div.prop('className');   
        expect( className.includes('animate__bounce') ).toBe( true )
    })
    
    
})
