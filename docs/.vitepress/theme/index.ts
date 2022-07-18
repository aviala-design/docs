import Theme from 'vitepress/theme'
console.log('there')
globalThis.hello = 'hello'

import './sys-custom.css'


export default {
  ...Theme,

}