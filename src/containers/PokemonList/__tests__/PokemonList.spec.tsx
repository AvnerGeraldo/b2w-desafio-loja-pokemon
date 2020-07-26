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

    it('should try load the data before throw an error message', () => {
        const wrapper = shallow<PokemonList>(<PokemonList pokemonData={[]}/>)
        const instance = wrapper.instance()
        jest.spyOn(instance, 'loadPokemonList')
        instance.componentDidMount()

        expect(instance.loadPokemonList).toHaveBeenCalledTimes(1)
    });
});