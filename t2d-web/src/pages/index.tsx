import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Restaurant from '../features/restaurant/Restaurant'
import * as T from '../features/restaurant/Types'
import * as R from 'remeda'

type Response = {
  restaurants: T.Restaurant[]
}

const BASE_URLS = {
  "local": "http://localhost",
  "prod": "https://703x6e9vcd.execute-api.us-east-1.amazonaws.com/prod",
}
const RESTAURANTS_ROUTE = "/api/restaurants"


const IndexPage: NextPage = () => {
  const [showRestaurant, setShowRestaurant] = useState(false)
  const [restaurants, setRestaurants] = useState([])
  const [restaurant, setRestaurant] = useState(null)

  useEffect(
    () => {
      fetch(BASE_URLS.prod + RESTAURANTS_ROUTE, {
        mode: 'cors'
      }).then(
        async (result) => {
          const data = await result.json() // should be the json
          console.log(JSON.stringify(data))
          setRestaurants((data as Response).restaurants)
        }
      )
        .catch(
          (reason) => console.log(reason)
        )
    }, [] // Need to specify no dependencies otherwise state changes in the effect cause rerendering cause firing again :(
  )

  const pickRestaurant = (restaurants: T.Restaurant[]): T.Restaurant => {
    const rs = shuffle(restaurants) // For now, just randomly shuffle restaurants each time
    const r = R.first(rs)
    setRestaurants(R.drop(rs, 1))
    setRestaurant(r)
    return r
  }

  return (
    <div className="container my-20 min-w-full flex flex-col items-center">
      {(showRestaurant && restaurant ? <Restaurant restaurant={restaurant}></Restaurant> : <></>)}
      <button className="btn btn-wide my-5" onClick={
        () => {
          setRestaurant(pickRestaurant(restaurants))
          setShowRestaurant(true)
        }
      }>
        {showRestaurant ? "Gross, somewhere else please!" : "Pick a restaurant! Anywhere is good!"}
      </button>
    </div >
  )
}

const shuffle = <A,>(array: A[]) => (array.sort((a, b) => 0.5 - Math.random()))

export default IndexPage
