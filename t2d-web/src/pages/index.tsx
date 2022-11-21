import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Restaurant from '../features/restaurant/Restaurant'
import * as T from '../features/restaurant/Types'

type Response = {
  restaurants: T.Restaurant[]
}
const PROD_RESTAURANTS = "https://703x6e9vcd.execute-api.us-east-1.amazonaws.com/prod/api/restaurants"
const IndexPage: NextPage = () => {
  const [showRestaurant, setShowRestaurant] = useState(false)
  const [restaurants, setRestaurants] = useState([])

  useEffect(
    () => {
      console.log("firing effect!")
      fetch(PROD_RESTAURANTS).then(
        async (result) => {
          const data = await result.json() // should be the json
          console.log(JSON.stringify(data))
          setRestaurants((data as Response).restaurants)
        }
      )
        .catch(
          (reason) => console.log("fúck")
        )
    }, [] // Need to specify no dependencies otherwise state changes in the effect cause rerendering cause firing again :(
  )

  return (
    <div className="container my-20 min-w-full flex flex-col items-center">
      {(showRestaurant ? <Restaurant restaurant={BONGIOURNOS_NO_GOOGLE_ATTRIBUTION}></Restaurant> : <></>)}
      <button className="btn btn-wide my-5" onClick={() => setShowRestaurant(true)}>
        {showRestaurant ? "Gross, somewhere else please!" : "Pick a restaurant! Anywhere is good!"}
      </button>
    </div >
  )
}

const BONGIOURNOS = {
  name: "Bongiorno's Cucina Italiana & Pizzeria",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  imageAlt: "Wiki Pizza",
  googleHTMLAttributation: "<a href=\"https://maps.google.com/maps/contrib/100390283763501738247\">Bongiorno&#39;s Italian Deli &amp; Pizzeria</a>"
}

const BONGIOURNOS_NO_GOOGLE_ATTRIBUTION = {
  name: "Bongiorno's Cucina Italiana & Pizzeria",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  imageAlt: "Wiki Pizza",
  googleHTMLAttributation: null,
}
export default IndexPage
