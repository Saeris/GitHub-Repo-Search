import React from "react"
import { Switch, Route } from "react-router-dom"

export const Directory = ({ paths }) => (
  <Switch>
    {paths.map((props, index) => <Route key={index} {...props} />)}
  </Switch>
)
