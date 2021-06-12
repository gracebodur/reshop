import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "pages/Home";
import Product from "pages/Product";
import Result from "pages/Result";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";
import { CartProvider } from "use-shopping-cart";

const queryClient = new QueryClient();

const stripePromise= loadStripe('process.env.REACT_APP_PK_TEST')

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode='checkout-session'
        stripe={stripePromise}
        currency='USD'
      >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
          <Route path="/:productId" component={Product} />
        </Switch>
      </Router>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
