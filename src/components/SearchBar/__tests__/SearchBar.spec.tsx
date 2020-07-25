import * as React from 'react'
import { shallow } from 'enzyme'
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
    it('should change the value when a user types something', () => {
        const wrapper = shallow(<SearchBar />)
        wrapper.find('#inputTextPokemon').simulate('change', { target: { value: 'some text' }})
        expect(wrapper.find('#inputTextPokemon').props().value).toEqual('some text')
    });
});