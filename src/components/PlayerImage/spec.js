import React from 'react'
import PlayerImage from './'

describe('<PlayerImage />', () => {
  it('renders <PlayerImage /> component', () => {
    const wrapper = shallow(
      <PlayerImage />
    )
    expect(wrapper.length).toEqual(1)
  })
})