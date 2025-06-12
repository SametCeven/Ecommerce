import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

export default function ProtectedRoute({ component: Component, ...rest }) {

    const { user, loginLoading } = useSelector((store) => store.client)


    if(loginLoading){
        return(
            <div className="flex gap-3">
                <p> Loading ... </p>
                <Spinner></Spinner>
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                user && Object.keys(user).length !== 0 ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        >

        </Route>
    )
}