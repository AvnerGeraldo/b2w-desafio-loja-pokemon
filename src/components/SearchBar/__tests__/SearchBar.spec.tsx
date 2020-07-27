import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import SearchBar from '../SearchBar';
import { Provider } from 'react-redux';
import store from '../../../store';

const loadLocalStorage = (offset: number, limit: number) => ({})
const setPage = (newPage: number) => ({ })

describe('SearchBar Component', () => {
    it('should change the value when a user types something', () => {
        const wrapper = mount(
            <Provider store={store}>
                <SearchBar loadLocalStorage={loadLocalStorage} setPage={setPage} />
            </Provider>
        )
        
        wrapper.find('#inputTextPokemon').at(0).simulate('change', { target: { value: 'some text' }})
        expect(wrapper.find('#inputTextPokemon').at(0).props().value).toEqual('some text')
    });
});