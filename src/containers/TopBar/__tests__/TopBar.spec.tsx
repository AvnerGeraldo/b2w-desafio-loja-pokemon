import * as React from 'react'
import { shallow } from 'enzyme'

import TopBar from '../TopBar'
import Logo from '../../../components/Logo/Logo'

describe('TopBar Container', () => {
    it('should have a one logo component inside the container', () => {
        const wrapper = shallow(<TopBar />)
        expect(wrapper.find(Logo)).toHaveLength(1)
    });
});