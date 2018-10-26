import React from 'react'
import Error from './'

describe('<Error />', () => {
  it('renders <Error /> component', () => {
    const wrapper = shallow(<Error />)
    expect(wrapper.length).toEqual(1)
  })
})