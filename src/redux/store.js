import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducer'
 
const persistConfig = {
  key: 'root',
  //whitelist: ['navigation'] // only navigation will be persisted
  //blacklist: ['navigation'] // navigation will not be persisted
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__)
let persistor = persistStore(store)
export default { store, persistor }
