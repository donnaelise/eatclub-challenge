import type { ApiResponse } from '../types/restaurant'

export async function fetchRestaurants(): Promise<ApiResponse> {
	try {
		const res = await fetch('api/misc/challengedata.json')
		if (!res.ok) {
			throw new Error('Failed to fetch restaurants')
		}
		const data = await res.json() as ApiResponse
		return data
	} catch {
		throw new Error('Failed to fetch restaurants')
	}
}