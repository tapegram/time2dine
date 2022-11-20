
type Props = {
  restaurant: Restaurant
}

type Restaurant = {
  name: string
  imageUrl: string
  imageAlt: string
  googleHTMLAttributation?: string // html
}

const Restaurant = ({ restaurant }: Props) => (
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      {restaurant.googleHTMLAttributation ?
        (<h2 className="card-title" style={{ fontSize: "52px" }}
          dangerouslySetInnerHTML={{ __html: restaurant.googleHTMLAttributation }} >
        </h2>) :
        (<h2 className="card-title" style={{ fontSize: "52px" }}>
          {restaurant.name}
        </h2>)
      }
    </div>
    <figure><img src={restaurant.imageUrl} alt={restaurant.imageAlt} /></figure>
  </div >
)

export default Restaurant
