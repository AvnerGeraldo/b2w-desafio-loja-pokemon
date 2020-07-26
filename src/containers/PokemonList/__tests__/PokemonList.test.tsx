import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import PokemonList from '../PokemonList';
import { PokemonItemProps } from '../../../components/PokemonItem/PokemonItem';

const fakeData = (): Array<PokemonItemProps> => {
    const rangeList = Array.from({ length: 10 }, (v,i) => i)

    return rangeList.map(v => ({
        id: (v + 1),
        name: `Image ${(v + 1)}`,
        price: parseFloat((Math.random() * 100).toFixed(2)),
        image: require('../../../assets/images/not-found-image.jpg').default
    }))
}

describe('PokemonList Container: Integration', () => {
    it('should show list items when data is provided', () => {
        const data = fakeData()
        const wrapper = mount(<PokemonList pokemonData={data}/>)
        const listItems = wrapper.find('.pokemon-list div.pokemon-list-item')

        expect(listItems).toHaveLength(data.length)
    });
});