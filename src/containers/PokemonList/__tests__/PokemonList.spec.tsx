import * as React from 'react'
import { shallow } from 'enzyme'

import PokemonList from '../PokemonList'

describe('PokemonList Container', () => {
    it('should show a friendly error message when the data is not loaded', () => {
        const wrapper = shallow(<PokemonList pokemonData={[]} loadingData={false}/>)
        const message = 'Não há dados para serem exibidos.:('

        expect(wrapper.find('.error-message-empty-content').text()).toEqual(message)
    });

    it('should show an image loading when trying to load data', () => {
        const wrapper = shallow(<PokemonList loadingData={true}/>)
        expect(wrapper.find('.loading-data-image')).toHaveLength(1)
    });
});