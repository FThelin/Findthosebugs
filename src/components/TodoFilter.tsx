import type { Filter } from '../types'

interface TodoFilterProps {
  filter: Filter
  onChange: (filter: Filter) => void
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Alla' },
  { value: 'active', label: 'Aktiva' },
  { value: 'completed', label: 'Klara' },
]

export default function TodoFilter({ filter, onChange }: TodoFilterProps) {
  return (
    <div className="todo-filter" role="group" aria-label="Filtrera uppgifter">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={filter === value}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
