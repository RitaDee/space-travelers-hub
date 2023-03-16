import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/store';
import RocketLists from '../../routes/RocketLists';

describe('RocketsLists', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketLists />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
