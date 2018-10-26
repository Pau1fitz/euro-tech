const FETCH_ENDPOINT = 'https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json'

export const fetchPlayers = async () => {
  const res = await fetch(FETCH_ENDPOINT)
  if(res.ok) {
    return await res.json()
  } else {
    throw new Error('Something went wrong');
  }
}

