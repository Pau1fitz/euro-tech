import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import BioBlock from '../BioBlock'
import LastFive from '../LastFive'
import PlayerImage from '../PlayerImage'
import Country from '../Country'
import Name from '../Name'

class PlayerCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playerCardElWidth: null
    }

    this.PlayerCardEl = React.createRef()
    // used to reconfigure the animation if user resizes the window
    this.updateCardWidth = debounce(this.setPlayerCardWidth, 1000)
    
  }

  componentDidMount () {
    this.setPlayerCardWidth()
    window.addEventListener('resize', this.updateCardWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateCardWidth)
  }

  setPlayerCardWidth = () => {
    this.setState({
      playerCardElWidth: this.PlayerCardEl.current.offsetWidth
    })
  }

  render() {
    const {player, slideIndex} = this.props
    return (
      <PlayerCardContainer
          ref={this.PlayerCardEl} 
          key={player.shortname}
          style={{
            transform: `translateX(-${slideIndex * this.state.playerCardElWidth}px)`
          }}
      >
        <PlayerCardColumn>  
          <Rank className='rank'>#{player.data.rank}</Rank>
          <Name 
            firstName={player.firstname}
            lastName={player.lastname}
          />
          <Country country={player.country} />
          <p><Points>{player.data.points}</Points> points</p>
        </PlayerCardColumn>
    
        <PlayerCardColumn>
          <PlayerImage picture={player.picture}/>
          <LastFive lastFiveResults={player.data.last} />
        </PlayerCardColumn>
    

        <PlayerCardColumn>
          <BioBlock 
            header={'Age'} 
            detail={player.data.age}
          />
          <BioBlock 
            header={'Sex'} 
            detail={player.sex}
          />
          <BioBlock 
            header={'Height'} 
            detail={player.data.height}
          />
          <BioBlock 
            header={'Weight'} 
            detail={`${player.data.weight / 1000} kg`}
          />
        </PlayerCardColumn>
      </PlayerCardContainer>
    )
  }
}

PlayerCard.propTypes = {
  player: PropTypes.object,
  slideIndex: PropTypes.number
}

const PlayerCardContainer = styled.section`
  text-align: center;
  transition: 0.5s transform;
  display: flex;
  flex: 1 0 100%;
  width: 600px;
  flex-direction: row;
  padding: 20px;
  justify-content: space-around;
  background: rgb(246, 246, 246);
  border-radius: 4px;
  @media (max-width: 600px) {
    max-width: 320px;
  }
`
const Rank = styled.p`
  color: #FF4136;
  font-weight: 800;
  font-size: 25px;
  padding-bottom: 15px;
`
const Points = styled.span`
  font-weight: 800;
`

const PlayerCardColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.333%;
`

export default PlayerCard