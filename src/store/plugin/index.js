import createLogger from './logger'
import ls from '../../assets/lib/q.store.js'

console.log(ls);

const localStoragePlugin = store => {
  store.subscribe((mutation, {cart}) => {
    ls.set('test', JSON.stringify(cart.products))
  })
}

export default process.env.NODE_ENV !== 'production' 
? [createLogger(), localStoragePlugin] : [localStoragePlugin]





