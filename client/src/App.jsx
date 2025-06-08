import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContractPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { verify } from "./store/actions/clientActions";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {

  const dispatch = useDispatch()
  const [token, setToken] = useLocalStorage("USER_TOKEN", "")
  useEffect(()=>{
    if(token){
      dispatch(verify(token))
    }
  },[])




  return (
    <PageContent>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </PageContent>
  )
}

