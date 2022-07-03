import { Route, Switch } from 'react-router-dom';

import './App.css';

import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

import { CartProvider } from './providers/cart';
import { ProductsProvider } from './providers/products';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function App() {
  return (
    <>
      <ToastContainer />
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
