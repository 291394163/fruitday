
require("./styles/app.scss")

import RootComponent from "./scripts/components/RootComponent"

import {Router, Route, hashHistory, IndexRedirect, IndexRoute} from "react-router"

import IndexComponent from "./scripts/components/index/IndexComponent"

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={RootComponent}>
            <IndexRoute component={IndexComponent}/>
            <Route path="/index" component={IndexComponent}/>
            <Route path="*" component={IndexComponent}/>
        </Route>
    </Router>

    , document.getElementById("app")
)





















