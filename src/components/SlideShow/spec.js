import React from 'react'
import SlideShow from './'

describe('<SlideShow />', () => {
  it('renders <SlideShow /> component', () => {
    const players = []
    const wrapper = shallow(
      <SlideShow players={players} />
    )
    expect(wrapper.length).toEqual(1)
  })
})