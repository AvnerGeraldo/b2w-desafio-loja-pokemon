import * as React from 'react'
import { shallow, mount } from 'enzyme'

import PokemonList from '../PokemonList'

describe('PokemonList Container', () => {
    it('should show a friendly error message when the data is not loaded', () => {
        const wrapper = shallow(<PokemonList pokemonData={[]}/>)
        const message = 'Não há dados para serem exibidos.:('
        const instance = wrapper.instance()

        expect(instance.props).toHaveProperty('pokemonData')
        expect(JSON.stringify(instance.props)).toBe(JSON.stringify({ pokemonData: [] }))
        expect(wrapper.find('.error-message-empty-content').text()).toEqual(message)
    });
});