import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreFilter from './genre-filter';
import {genres as mockGenres} from "../../mocks/films";

configure({adapter: new Adapter()});

const onFilterChange = jest.fn();
const evt = {preventDefault: ()=>{}};

it(`Click on genre filter`, () => {
  const genreFiler = shallow(<GenreFilter onFilterChange={onFilterChange} activeFilter={mockGenres[0]} genres={mockGenres}/>);
  const genres = genreFiler.find(`.catalog__genres-link`);

  genres.at(0).simulate(`click`, evt);

  expect(onFilterChange).toHaveBeenCalledTimes(1);
});
