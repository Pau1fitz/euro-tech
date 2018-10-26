import React from 'react'
import SlideCircles from './'

describe('<SlideCircles />', () => {
  it('renders <SlideCircles /> component', () => {
    const players = [
      { shortname: 'Rafa' }
    ]
    const wrapper = shallow(
      <SlideCircles players={players} />
    )
    expect(wrapper.length).toEqual(1)
  })
})