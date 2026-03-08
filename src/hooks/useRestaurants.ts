import { useState, useEffect } from 'react'
import type { Restaurant } from '../types/restaurant'
import { fetchRestaurants } from '../services/api'

export function useRestaurants() {
	const [restaurants, setRestaurants ] = useState<Restaurant[]>([])
	const [loading, setLoading ] = useState<boolean>(true)
	const [error, setError ] = useState<string | null>(null)

	useEffect(() => {
		async function loadRestaurants() {
			try {
				const data = await fetchRestaurants()
				setRestaurants(data.restaurants)
			} catch {
				  setError('Failed to load restaurants')
			} finally {
				setLoading(false);
			}
		}
		loadRestaurants()
	}, [])
	return {restaurants, loading, error}
}