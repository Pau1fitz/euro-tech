import React from 'react'
import AppContainer from './'

describe('<AppContainer />', () => {
  let wrapper

  it('renders <AppContainer /> component', () => {
    wrapper = shallow(
      <AppContainer />
    )
    expect(wrapper.length).toEqual(1);
  })

  it('should be able to update the slideIndex', () => {
    wrapper.instance().changeSlide();
    expect(wrapper.state().slideIndex).toEqual(1)
    wrapper.instance().changeSlide();
    expect(wrapper.state().slideIndex).toEqual(0)
  })
})