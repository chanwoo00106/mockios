import { useEffect, useState } from 'react'
import query from './query'

interface HelloResponse {
  ok: boolean
  message: string
}

function App() {
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      const { data } = await query.get<HelloResponse>('/hello')
      setTitle(data.message)
    })()
  }, [])

  return (
    <div className='App'>
      <h1>{title}</h1>
    </div>
  )
}

export default App
