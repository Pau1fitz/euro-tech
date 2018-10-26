import React from 'react'
import Name from './'

describe('<Name />', () => {
  it('renders <Name /> component', () => {
    const wrapper = shallow(
      <Name />
    )
    expect(wrapper.length).toEqual(1)
  })
})