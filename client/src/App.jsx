import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContractPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";

export default function App() {


  return (
    <PageContent>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutUsPage} />
      </Switch>
    </PageContent>
  )
}

