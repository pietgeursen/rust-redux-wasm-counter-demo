import * as wasm from 'wasm-redux-test'
import * as html from 'yo-yo'

var store = new wasm.WrappedBundle()

var el = document.getElementById('content')

function increment () {
  store.increment()
}

function decrement () {
  store.decrement()
}
function Count (count) {
  return html`<div>
    <h2>The count is: ${count}</h2>
    <button onclick=${increment}>Increment</button>
    <button onclick=${decrement}>Decrement</button>
    </div>`
}

function render (count) {
  var page = Count(count)
  html.update(el, page)
}

render(store.get_state())

store.subscribe(render)
