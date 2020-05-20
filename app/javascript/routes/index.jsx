import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CurrencyMonitorContainer from '../bundles/CurrencyMonitor/components/index-page/index-page.container'
import AdminPageContainer from '../bundles/CurrencyMonitor/components/admin-page/admin-page.container'

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={CurrencyMonitorContainer} />
      <Route path="/admin" exact component={AdminPageContainer} />
    </Switch>
  </BrowserRouter>
)
