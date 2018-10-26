import React from 'react'
import BioBlock from './'

describe('<BioBlock />', () => {
  it('renders <BioBlock /> component', () => {
    const wrapper = shallow(
      <BioBlock />
    );
    expect(wrapper.length).toEqual(1)
  })
})