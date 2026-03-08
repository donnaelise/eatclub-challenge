import type { Restaurant } from '../types/restaurant'
import { useRestaurants } from '../hooks/useRestaurants'
import RestaurantCard from '../components/RestaurantCard'

export default function RestaurantList() {
	const { restaurants, loading, error } = useRestaurants()
	if(loading) { return(<p>loading...</p>);} 
	if(error) { return(<p>{error}</p>);}
	if (restaurants.length === 0) {	return (<p>No restaurants found</p>)}

		const getBestDiscount = (restaurant: Restaurant) => 
	Math.max(...restaurant.deals.map(d => Number(d.discount)))

	const sorted = [...restaurants].sort((a, b) => 
		getBestDiscount(b) - getBestDiscount(a)
		);

	return (
		<main className="restaurant-list-page">
			<ul className="restaurant-list">
				{sorted.map((restaurant) => (
					<RestaurantCard
						key={restaurant.objectId}
						restaurant={restaurant}
						/>
						))}
			</ul>
		</main>
		)

}
