import React from 'react'
import LastFive from './'

describe('<LastFive />', () => {
  
  let wrapper, lastFiveResults
  beforeEach(() => {
    lastFiveResults = [0, 1, 0, 1, 0]
    wrapper = shallow(
      <LastFive
        lastFiveResults={lastFiveResults}
      />
    )
  })
  
  it('renders <LastFive /> component', () => {
    expect(wrapper.length).toEqual(1);
  })

  it('displays last five results for user', () => {
    expect(wrapper.find('LastFiveContainer').children().length).toEqual(5);
  })

  it('should only show five results even if more passed', () => {
    const lastSevenResults = [0, 1, 0, 1, 0, 1, 0]
    const wrapper = shallow(
      <LastFive
        lastFiveResults={lastSevenResults}
      />
    )
    expect(wrapper.find('LastFiveContainer').children().length).not.toEqual(7)
    expect(wrapper.find('LastFiveContainer').children().length).toEqual(5)
  })
})