import Routing from './Routes/Routing'

function App() {
  const token = import.meta.env.VITE_API_TOKEN;

  console.log("Token:", token);

  return (
    <Routing />
  )
}

export default App
