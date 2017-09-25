
require("./styles/app.scss")

import RootComponent from "./scripts/components/RootComponent"
import IndexComponent from "./scripts/components/index/IndexComponent";
import CategoryComponent from "./scripts/components/category/CategoryComponent";
import Category2thComponent from "./scripts/components/category/Category2thComponent";
import NewSearchComponent from "./scripts/components/category/NewSearchComponent";
import LoginComponent from "./scripts/components/my/loginComponent";
import CartComponent from "./scripts/components/cart/CartComponent";

import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from "react-router"
import {Provider} from "react-redux";
import store from "./scripts/react-redux/store";



ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={RootComponent}>
                <IndexRoute component={IndexComponent}/>
                <Route path="/index" component={IndexComponent}/>
                <Route path="/category" component={CategoryComponent}/>
                <Route path="/category2th" component={Category2thComponent}/>
                <Route path="/newsearch" component={NewSearchComponent}/>
                <Route path="/my" component={LoginComponent}/>
                <Route path="/cart" component={CartComponent}/>
                <Route path="*" component={IndexComponent}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("app")
)





















