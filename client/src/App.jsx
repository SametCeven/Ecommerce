import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import 'react-toastify/dist/ReactToastify.css';
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContractPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { verify } from "./store/actions/clientActions";
import useLocalStorage from "./hooks/useLocalStorage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PreviousOrdersPage from "./pages/PreviousOrdersPage";

export default function App() {

  const dispatch = useDispatch()
  const [token] = useLocalStorage("USER_TOKEN", "")
  useEffect(() => {
    if (token) {
      dispatch(verify(token))
    }
  }, [])




  return (
    <PageContent>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:productNameSlug/:productId" component={ProductDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/shoppingCart" component={ShoppingCartPage} />
        <ProtectedRoute path="/createOrder" component={CreateOrderPage} />
        <ProtectedRoute path="/previousOrders" component={PreviousOrdersPage} />
      </Switch>
    </PageContent>
  )
}

