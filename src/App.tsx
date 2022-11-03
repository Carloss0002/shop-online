import {Rotas} from './router/routes'
import {AuthProvider} from '../src/Context/user'
import { Provider } from 'react-redux'
import {store} from './store/index'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <AuthProvider>
          <Rotas/>
        </AuthProvider>
      </Provider>
    </div>
  )
}

export default App
