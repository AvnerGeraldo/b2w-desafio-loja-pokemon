import * as React from 'react'
import { shallow } from 'enzyme'

import TopBar from '../TopBar'
import Logo from '../../../components/Logo/Logo'
import SearchBar from '../../../components/SearchBar/SearchBar';

describe('TopBar Container', () => {
    it('should have a one logo component inside the container', () => {
        const wrapper = shallow(<TopBar />)
        expect(wrapper.find(Logo)).toHaveLength(1)
    });

    it('should have a one search bar component inside the container', () => {
        const wrapper = shallow(<TopBar />)
        expect(wrapper.find(SearchBar)).toHaveLength(1)
    });
});