import React from 'react'
import { useRestaurants } from '../hooks/useRestaurants'

export default function RestaurantList() {
  const { restaurants, loading, error } = useRestaurants()
  console.log('restaurants:', restaurants)
  console.log('loading:', loading)
  console.log('error:', error)

  return (
    <>
    </>
  )
}