import type { Restaurant } from '../types/restaurant'
import { Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface RestaurantCardProps {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const bestDeal = restaurant.deals.reduce((best, current) =>
  Number(current.discount) > Number(best.discount) ? current : best
)
  const cuisines = restaurant.cuisines.slice(0, 3).join(' • ')
const navigate = useNavigate()

  return (
    <li className="restaurant-card" onClick={() => navigate(`/restaurant/${restaurant.objectId}`, { state: { restaurant } })} role="button">
      <div className="restaurant-image-wrap">
        <img
          className="restaurant-image"
          src={restaurant.imageLink}
          alt={restaurant.name}
        />
        {bestDeal && (
          <div className="deal-badge">
            <strong>{bestDeal.discount}% off {bestDeal.dineIn === 'true' ? ' - Dine in' : ''}</strong>
            
            <span>{bestDeal.close ? `Arrive before ${bestDeal.close}` : 'Anytime today'}</span>
          </div>
        )}
      </div>

      <div className="restaurant-content">
        <div className="restaurant-title-row">
          <h2>{restaurant.name}</h2>
          <Heart size={24} />

        </div>
        <p className="restaurant-location">
          {restaurant.suburb}
        </p>
        <p className="restaurant-cuisines">{cuisines}</p>
        <p className="restaurant-hours">
          {restaurant.open} - {restaurant.close}
        </p>
      </div>
    </li>
  )
}