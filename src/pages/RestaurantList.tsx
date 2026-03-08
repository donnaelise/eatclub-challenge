import { useState } from 'react'
import type { Restaurant } from '../types/restaurant'
import { useRestaurants } from '../hooks/useRestaurants'
import SearchBar from '../components/SearchBar'
import RestaurantCard from '../components/RestaurantCard'


export default function RestaurantList() {
	const { restaurants, loading, error } = useRestaurants()
	const [query, setQuery] = useState('')

	if(loading) { return(<p>loading...</p>);} 
	if(error) { return(<p>{error}</p>);}
	if (restaurants.length === 0) {	return (<p>No restaurants found</p>)}

		const getBestDiscount = (restaurant: Restaurant) =>
	Math.max(...restaurant.deals.map(d => Number(d.discount)))

	const sorted = [...restaurants].sort((a, b) => 
		getBestDiscount(b) - getBestDiscount(a)
		);
	const loweredQuery = query.toLowerCase()
	const filtered = sorted.filter((restaurant) => {
		const matchesName = restaurant.name.toLowerCase().includes(loweredQuery)
		const matchesCuisine = restaurant.cuisines.some((cuisine) =>
			cuisine.toLowerCase().includes(loweredQuery)
			)

		return matchesName || matchesCuisine
	})

	return (
		<main className="restaurant-list-page">
			<SearchBar query={query} onQueryChange={setQuery} />
			<ul className="restaurant-list">
				{filtered.map((restaurant) => (
					<RestaurantCard
						key={restaurant.objectId}
						restaurant={restaurant}
						/>
						))}
			</ul>
		</main>
		)

}
