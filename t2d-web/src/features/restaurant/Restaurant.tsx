import * as T from './Types'

type Props = {
  restaurant: T.Restaurant
}

const Restaurant = ({ restaurant }: Props) => (
  <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body items-center text-center">
      <h2 className="card-title">{restaurant.name}</h2>
    </div>
    <figure className="px-10 pt-10">
      <img width="350" src={restaurant.imageUrl} alt={restaurant.imageAlt} className="rounded-xl object-scale-down" />
    </figure>
  </div>
  // <div className="card w-2 bg-base-100 shadow-xl">
  //   <div className="card-body">
  //     <h2 className="card-title" style={{ fontSize: "52px" }}>
  //       {restaurant.name}
  //     </h2>
  //   </div>
  //   <div className="w-2 h-2">
  //     <figure className="w-2"><img src={restaurant.imageUrl} alt={restaurant.imageAlt} className="object-scale-down w-2" /></figure>
  //     {restaurant.googleHTMLAttribution ?
  //       (<h2 className="card-title"
  //         dangerouslySetInnerHTML={{ __html: restaurant.googleHTMLAttribution }} >
  //       </h2>) : <></>
  //     }
  //   </div>
  // </div >
)

export default Restaurant
