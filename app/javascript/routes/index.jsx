import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CurrencyMonitorContainer from '../bundles/CurrencyMonitor/containers/CurrencyMonitorContainer'
import AdminPageContainer from '../bundles/CurrencyMonitor/containers/AdminPageContainer'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CurrencyMonitorContainer} />
      <Route path="/admin" exact component={AdminPageContainer} />
    </Switch>
  </BrowserRouter>
)
