
import './App.css'
import { useFetch } from './components/Custom hooks/useFetch'

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <>
    <h1>Custom hooks</h1>
    <section>
      <h3>To do API; useFetch custom hook</h3>
      {data &&
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
      </section>
    </>
  )
}

export default App
