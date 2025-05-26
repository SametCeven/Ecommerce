import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {


  return (
    <PageContent>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/product/:id" exact component={ProductDetailPage} />
      </Switch>
    </PageContent>
  )
}

