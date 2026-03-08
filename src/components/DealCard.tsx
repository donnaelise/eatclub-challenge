import type { Deal } from '../types/restaurant'

interface DealCardProps {
	deal: Deal
}

function formatTime(time?: string) {
	if (!time) return ''
		const match = time.trim().match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/)
	if (!match) return time

		const hours24 = Number(match[1])
	const minutes = match[2]
	const suffix = hours24 >= 12 ? 'pm' : 'am'
	const hours12 = hours24 % 12 || 12
	return `${hours12}:${minutes} ${suffix}`
}

export default function DealCard({deal}: DealCardProps) {
	const dealWindow = deal.open && deal.close
	? `Between ${formatTime(deal.open)} - ${formatTime(deal.close)}`
	: deal.start && deal.end
	? `Between ${formatTime(deal.start)} - ${formatTime(deal.end)}`
	: 'Anytime today'

	return( 
		<div className="deal-card">
			<div className="deal-card-left">
				<p className="deal-card-title">
					{deal.lightning === 'true' ? '⚡ ' : ''}{deal.discount}% Off
				</p>
				<p className="deal-card-time">{dealWindow}</p>
				<p className="deal-card-qty">{deal.qtyLeft} Deals Left</p>
			</div>
			<button type="button" className="deal-card-redeem">Redeem</button>
		</div>

		)
}
