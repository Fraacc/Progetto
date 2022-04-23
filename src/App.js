import { useSelector } from 'react-redux'
import { printInitialRoutes } from 'router'

function App() {
  const logged = localStorage.getItem("user")
  return (
    printInitialRoutes(logged)
  );
}

export default App
