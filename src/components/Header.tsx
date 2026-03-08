import { SlidersHorizontal, UserRound } from 'lucide-react'
import eatclubLogo from '../assets/eatclub-logo.svg'

export default function Header() {
  return (
    <header className="top-nav">
      <button type="button" className="nav-icon-button" aria-label="Open profile">
        <UserRound className="nav-icon" />
      </button>

      <img src={eatclubLogo} alt="EatClub" className="brand-logo" widht="30px" />

      <button type="button" className="nav-icon-button" aria-label="Open filters">
        <SlidersHorizontal className="nav-icon" />
      </button>
    </header>
  )
}