import React from 'react'
import Loading from './'

describe('<Loading />', () => {
  it('renders <Loading /> component', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.length).toEqual(1)
  })
})