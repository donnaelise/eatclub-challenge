import { Menu, UserRound } from 'lucide-react'

interface HeaderProps {
  logoSrc?: string
  logoAlt?: string
}

export default function Header({ logoSrc, logoAlt = 'EatClub' }: HeaderProps) {
  return (
    <header className="top-nav">
    	<button type="button" className="nav-icon-button" aria-label="Open profile">
        <UserRound className="nav-icon" />
      </button>
      

      <div className="brand-mark" aria-label="Brand logo">
        {logoSrc ? <img src={logoSrc} alt={logoAlt} className="brand-logo-image" /> : <span>ec</span>}
      </div>
      <button type="button" className="nav-icon-button" aria-label="Open menu">
        
<Menu className="nav-icon" />
      </button>
      
    </header>
  )
}
