import React, { Component } from 'react';
import styled from 'styled-components'
import SlideShow from '../../components/SlideShow'
import SlideCircles from '../../components/SlideCircles'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Header from '../../components/Header'
import { fetchPlayers } from '../../api'

class AppContainer extends Component {

  state = {
    players: [],
    slideIndex: 0,
    error: false,
    isLoading: false
  }

  changeSlide = () => {
    this.setState({
      slideIndex: this.state.slideIndex === 0 ? 1 : 0
    })
  }

  async componentDidMount() {  
    this.setState({
      isLoading: true
    })

    try {
      const data = await fetchPlayers()
      this.setState({
        players: data.players,
        isLoading: false,
        error: false
      });
  
    } catch (error) {
      this.setState({
        error: true,
        isLoading: false
      })
    }
  }

  renderPlayers() {
    const { 
      players, 
      slideIndex,
      isLoading
    } = this.state
    
    return !isLoading ? (
      <main>
        <SlideShow 
          players={players}
          slideIndex={slideIndex}
        />
        <SlideCircles 
          players={players}
          slideIndex={slideIndex}
          changeSlide={this.changeSlide}
        />
      </main>
    ): <Loading />
  }
   
  render() {
    const {error} = this.state
    return (
      <main>
        <Header />
        <MainContainer>
          {
          !error ? this.renderPlayers() : <Error/>
          }
        </MainContainer>
      </main>
    );
  }
}

const MainContainer = styled.main`
  height: calc(100vh - 25px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default AppContainer