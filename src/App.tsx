import './App.css'
import Post from './components/Post'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <main className="app">
      <h1>Find Those Bugs 🐛</h1>
      <TodoApp />

      <section className="posts">
        <h2>Utvalda inlägg</h2>
        <Post id={1} />
        <Post id={2} />
      </section>
    </main>
  )
}

export default App
