import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {
    Login,
    AddService,
    EnrolledServices,
    Home,
    MakeAdmin,
    Order,
    Review,
    ServedList,
    NotFound,
} from './pages';
import { PrivateRoute } from './components/others';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect from="/home" to="/" />
                <Route path="/login" component={Login} />
                <Route exact path="/customer/order" component={Order} />
                <PrivateRoute path="/customer/order/:id">
                    <Order />
                </PrivateRoute>
                <Route path="/customer/enrolled-services">
                    <EnrolledServices />
                </Route>
                <Route path="/customer/review" component={Review} />
                <PrivateRoute path="/admin/service-list">
                    <ServedList />
                </PrivateRoute>
                <Route path="/admin/add-service" component={AddService} />
                <Route path="/admin/make-admin" component={MakeAdmin} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
