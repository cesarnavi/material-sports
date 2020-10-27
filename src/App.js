import React, { Component } from 'react'
import MUIConfig from 'material-ui-shell/lib'
import merge from 'base-shell/lib/utils/config'
import _config from './config'
import Layout from './layout';
import routes from './config/routes';

const sections = [
    {title: "SportsBook",url:'/signin'},
    {title: "Quiniela",url:'/pools'},
    {title: "Exchange",url:'/exchange'},
    {title: "Academia",url:'/academy'},
    {title: "Advice",url:'/advice'},
    {title: "Data",url:'/data'}
];

const config = {
    header:{
        title:"BET EXCHANGE",
        sections
    },
    routes
}


export default function App (){

    return <Layout {...config}/>
  
}
