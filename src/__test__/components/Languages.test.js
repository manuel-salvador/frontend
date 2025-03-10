import React from 'react';
import { mount } from 'enzyme';
import Languages from '../../components/Languages';
import db from '../../../data.json';

const { data } = db;

describe('<Languages />', () => {
  const languages = mount(<Languages languages={data.languages} />);

  test('Languages render', () => {
    expect(languages.length).toEqual(1);
  });

  test('Languages title', () => {
    expect(languages.find('.Languages-title').length).toEqual(1);
  });

  test('Languages has 2 items', () => {
    expect(languages.find('.Languages-item').length).toBeGreaterThan(1);
  });
});
