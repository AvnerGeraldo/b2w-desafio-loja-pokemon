import 'jsdom-global/register'
import * as React from 'react'
import { mount } from 'enzyme'
import PokemonList from '../PokemonList';
import { PokemonItemProps } from '../../../components/PokemonItem/PokemonItem';
import { Provider } from 'react-redux';
import store from '../../../store';
import { retrievePokemonData } from '../../../store/actions';

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
        store.dispatch(retrievePokemonData(fakeData()))

        const data = fakeData()
        const wrapper = mount(
            <Provider store={store}>
                <PokemonList />
            </Provider>
        )
        const listItems = wrapper.find('div.pokemon-list-item')
        expect(listItems).toHaveLength(data.length)
    });
});