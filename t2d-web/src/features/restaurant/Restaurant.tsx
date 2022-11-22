import * as T from './Types'

type Props = {
  restaurant: T.Restaurant
}

const Restaurant = ({ restaurant }: Props) => (
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title" style={{ fontSize: "52px" }}>
        {restaurant.name}
      </h2>
    </div>
    <figure><img src={restaurant.imageUrl} alt={restaurant.imageAlt} /></figure>
    {restaurant.googleHTMLAttribution ?
      (<h2 className="card-title"
        dangerouslySetInnerHTML={{ __html: restaurant.googleHTMLAttribution }} >
      </h2>) : <></>
    }
  </div >
)

export default Restaurant
