import React,{Suspense} from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
export default function Layout(props){
    return (
        <Router>
            <Header title={props.header.title} sections={props.header.sections}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {props.routes.map(r=>r)}
                </Switch>
            </Suspense>
        </Router>  
    );
}