import { Search } from 'lucide-react'

interface SearchBarProps {
  query: string
  onQueryChange: (value: string) => void
}

export default function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <div className="search-row">
      <Search className="search-icon" aria-hidden="true" />
      <input
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="e.g. chinese, pizza"
      />
    </div>
  )
}
