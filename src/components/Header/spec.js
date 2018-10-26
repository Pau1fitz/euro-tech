import React from 'react'
import Logo from './'

describe('<Logo />', () => {
  it('renders <Logo /> component', () => {
    const wrapper = shallow(<Logo />)
    expect(wrapper.length).toEqual(1)
  })
})