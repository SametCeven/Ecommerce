import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

export default function App() {


  return (
    <PageContent>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </PageContent>
  )
}

