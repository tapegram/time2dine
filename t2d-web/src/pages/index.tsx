import type { NextPage } from 'next'
import { useState } from 'react'
import Restaurant from '../features/restaurant/Restaurant'

const IndexPage: NextPage = () => {
  const [showRestaurant, setShowRestaurant] = useState(false)
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
