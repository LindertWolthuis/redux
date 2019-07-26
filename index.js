function counter(state=[], action) {
    if (typeof state === 'undefined') {
      return 0
    }

    switch (action.type) {
      case 'addtocart':
        return [...state, action.item]
      case 'checkout':
        return state = []
      default:
        return state
    }
}

var store = Redux.createStore(counter)
var valueEl = document.getElementById('total')

function render() {
    var pitem = store.getState();
    var sum = 0 ;

    for(item in pitem){
        sum += pitem[item].price;
    }
    valueEl.innerHTML = sum;
}

render()
store.subscribe(render)

function onAddCart(product) {
    store.dispatch({ type: 'addtocart' , item: product });
}
  
function checkout() {
    store.dispatch({ type: 'checkout' });
}