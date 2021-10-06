import { useEffect, useState } from "react";
import { Route, Switch } from "react-router"
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => {

    const [ authenticated, setAuthenticated ] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@kenziehub/token"))

        if(token) {
            return setAuthenticated(true)
        }
    }, [authenticated])

    return (
        <Switch>
            <Route exact path="/" >
                <Home authenticated={authenticated} />
            </Route>
            <Route path={"/registro"}>
                <Register authenticated={authenticated} />
            </Route>
            <Route path={"/login"}>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route path={"/dashboard"}>
                <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
        </Switch>
    )
}

export default Routes;