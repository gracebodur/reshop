import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "pages/Home";
import Product from "pages/Product";
import Result from "pages/Result";
import Navbar from "components/Navbar";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "components/LoadingSpinner";
import "./App.css";

const queryClient = new QueryClient();
const stripePromise = loadStripe('pk_test_51GqhEvBGImU03UKDK9jVTj2ZvyQzHtY2FYbsZ0d0CP2mSnyxCCjDn3uhW0uGSwf8YE7OTnTCdc3ZPChOsnbSYHjs00pphQWve8')

const App = () => {
  return (
    <Suspense fallback={LoadingSpinner}>
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode='checkout-session'
        stripe={stripePromise}
        currency='USD'
      >
      <Router>
        <Navbar />
        <Toaster position='bottom-center'/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Result} />
          <Route path="/:productId" component={Product} />
        </Switch>
      </Router>
      </CartProvider>
    </QueryClientProvider>
    </Suspense>
  );
};

export default App;
