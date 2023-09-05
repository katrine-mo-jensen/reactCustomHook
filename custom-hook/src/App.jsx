
import './App.css'
// import { useFetch } from './components/Custom hooks/useFetch'
import { useFeetch } from './components/Custom hooks/codealongUseFetch'

function App() {
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  const url = "https://jsonplaceholder.typicode.com/todos"
  const {data} = useFeetch(url)
  console.log({data})
  return (
    <>
    <h1>Custom hooks</h1>
    <section>
{/*       <h3>To do API; useFetch custom hook</h3>
      {data &&
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })} */}
      <h3>Kaspers metode</h3>
      {data?.map((item, index) => {
        return(
          <p key={index}>{item.title}</p>
        )
      })}
      </section>
    </>
  )
}

export default App
