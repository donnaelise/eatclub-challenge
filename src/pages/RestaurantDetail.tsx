import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, Clock3, Heart, MapPin, Newspaper, PhoneCall } from 'lucide-react'
import DealCard from '../components/DealCard'

export default function RestaurantDetail() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const location = useLocation()
	const navigate = useNavigate()
	const restaurant = location.state?.restaurant

	if (!restaurant) return <p>Restaurant not found</p>

		const cuisines = restaurant.cuisines.slice(0, 3).join(' • ')
	
	const sortedDeals = [...restaurant.deals].sort((a, b) => 
		Number(b.discount) - Number(a.discount)
		)
	return (
		<main className="restaurant-detail-page">
			<article className="restaurant-detail-card">
				<button className="detail-back-button" onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowLeft size={20} />
				</button>

				<div className="detail-hero-wrap">
					<img
						className="detail-hero-image"
						src={restaurant.imageLink}
						alt={restaurant.name}
					/>
					<span className="detail-new-badge">New</span>
					<div className="detail-dots" aria-hidden="true">
						<span className="detail-dot active" />
						<span className="detail-dot" />
						<span className="detail-dot" />
						<span className="detail-dot" />
						<span className="detail-dot" />
					</div>
				</div>

				<div className="detail-actions-row">
					<button type="button" className="detail-action">
						<Newspaper size={30} />
						<span>Menu</span>
					</button>
					<button type="button" className="detail-action">
						<PhoneCall size={30} />
						<span>Call us</span>
					</button>
					<button type="button" className="detail-action">
						<MapPin size={30} />
						<span>Location</span>
					</button>
					<button type="button" className="detail-action">
						<Heart size={30} />
						<span>Favourite</span>
					</button>
				</div>

				<div className="detail-content">
					<div className="detail-header">
						<h1 className="detail-title">{restaurant.name}</h1>
						<p className="detail-cuisines">{cuisines}</p>
					</div>

					<div className="detail-info">
						<p className="detail-info-row">
							<Clock3 />
							<span>Hours: {restaurant.open} - {restaurant.close}</span>
						</p>
						<p className="detail-info-row">
							<MapPin />
							<span>{restaurant.address1} {restaurant.suburb}</span>
						</p>
					</div>

					<div className="detail-deals">
						{sortedDeals.map((deal) => (
							<DealCard
								key={deal.objectId}
								deal={deal}
								/>
								))}
					</div>
				</div>
			</article>
		</main>
		)
}
