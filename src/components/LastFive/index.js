import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LastFive = ({lastFiveResults}) => (
  <section>
    <LastFiveTitle>LAST 5</LastFiveTitle>
    <LastFiveContainer>
      {lastFiveResults.map((last, i) => {
        return i >= 5 ? null :
        last === 0 ? 
          <Result background={'#2ECC40'} key={i}/> :
          <Result background={'#FF4136'} key={i} />;

      })}
    </LastFiveContainer>
  </section>
)

LastFive.propTypes = {
  lastFiveResults: PropTypes.array
}

const LastFiveTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding: 5px 0;
`
const LastFiveContainer = styled.div`
  display: flex;
`
const Result = styled.div`
  background: ${props => props.background}
  height: 15px;
  width: 15px;
  margin: 0 1px;
  border-radius: 50%; 
`

LastFiveContainer.displayName = 'LastFiveContainer';

export default LastFive