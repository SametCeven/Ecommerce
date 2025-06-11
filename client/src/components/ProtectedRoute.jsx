import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ component: Component, ...rest }) {

    const { user } = useSelector((store) => store.client)

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