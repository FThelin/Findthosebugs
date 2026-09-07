import type { Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label>
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </label>
      <button type="button" aria-label={`Ta bort "${todo.text}"`} onClick={onDelete}>
        Ta bort
      </button>
    </li>
  )
}
