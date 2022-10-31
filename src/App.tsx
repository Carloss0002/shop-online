import {Rotas} from './router/routes'
import {AuthProvider} from '../src/Context/user'

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </div>
  )
}

export default App
