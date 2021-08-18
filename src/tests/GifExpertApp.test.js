import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Test in <GifExpertApp/>', () => {
    test('should render correctly', () => {
        const wrapper = shallow( <GifExpertApp/> );
        expect( wrapper ).toMatchSnapshot();

    })
    
})
