import React, {useEffect, useState} from 'react'
import './style.css'
import { useQuery, gql } from '@apollo/client';

const SELECT_COUNTRY = gql`
query GetCountry($code: ID!) {
  country(code: $code) {
    code
    name
    native
    phone
    continent {
      name
    }
    capital
    currency
    languages {
      name
    }
    emoji
    emojiU
    states {
      name
    }
  }
}
`

const Country = ({selected: {name, x, y}}) => {
  const [countryId, setCountryId] = useState(null)
  const { loading, error, data } = useQuery(SELECT_COUNTRY, {variables: {code: countryId}});

useEffect(() => {
 if(name !== '' && name !== null) {
   setCountryId(name)
  }
},[name])

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

// const coordinates = {
//   left: '{x} px',
//   top: '{y} px',
// }

// console.log(name, x, y)
// console.log(data)

  return (
    <>
      {(name !== '' && name !== null) ? 
      (<div className='countryWrapper' style={{left: `${x}px`, top: `${y}px`}}>
        {data.country.emoji}
        <h4 className="country">{data.country.name}</h4>
        <h6>({data.country.native})</h6>
        <p>Capital: {data.country.capital}</p>
        
        <p>Continent: {data.country.continent.name}</p>
        <p>Official Language: {data.country.languages[0].name}</p>
        <p>Currency: {data.country.currency}</p>
        <p>Int Dialing Code: {data.country.currency}</p>
      </div>) 
    : null}
    </>
  )
}

export default Country