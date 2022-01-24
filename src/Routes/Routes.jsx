import { Route, Switch } from "react-router-dom";
import AdminLogin from "../Components/Admin/AdminLogin";
import AdminView from "../Components/Admin/AdminView";
import User from "../Components/User/User";
import UserView from "../Components/User/UserView";
import { PrivateRoute } from "./PrivateRoute";

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact>
                <UserView/>
            </Route>
            <PrivateRoute path="/admin" exact>
                <AdminView/>
            </PrivateRoute>
            <Route path="/login">
                <AdminLogin/>
            </Route>
            <Route>
                Page not found 404!!!
            </Route>
            
        </Switch>
        
    )
}