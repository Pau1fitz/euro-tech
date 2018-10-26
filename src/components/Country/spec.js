import React from 'react'
import Country from './'

describe('<Country />', () => {
  it('renders <Country /> component', () => {
    let country = {
      picture: 'fake-country.png',
      code: 'IRE'
    }
    const wrapper = shallow(
      <Country country={country} />
    );
    expect(wrapper.length).toEqual(1)
  })
})