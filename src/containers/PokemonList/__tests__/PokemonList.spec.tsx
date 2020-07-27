import 'jsdom-global/register'
import * as React from 'react'
import { shallow, mount } from 'enzyme'

import PokemonList from '../PokemonList'
import { Provider } from 'react-redux'
import store from '../../../store'
import { setLoadingData, retrievePokemonData } from '../../../store/actions'

describe('PokemonList Container', () => {
    it('should show a friendly error message when the data is not loaded', () => {
        store.dispatch(retrievePokemonData([]))

        const wrapper = mount(
            <Provider store={store}>
                <PokemonList />
            </Provider>
        )
        const message = 'Não há dados para serem exibidos.:('

        expect(wrapper.find('#error-message-empty-content').at(0).text()).toEqual(message)
    });

    it('should show an image loading when trying to load data', () => {
        store.dispatch(setLoadingData(true))

        const wrapper = shallow(
            <Provider store={store}>
                <PokemonList />
            </Provider>
        )

        expect(wrapper.find('#loading-data-image')).toBeTruthy()
    });
});