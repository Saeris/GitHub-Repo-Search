import React from "react"
import { ErrorMessage, Title, Subtitle, P } from "./elements"

export const OnError = ({ errMsg }) => (
  <ErrorMessage>
    <Title>Whoops! Looks like something went wrong. 😭</Title>
    <Subtitle>Try reloading?</Subtitle>
    {errMsg ? <P>{errMsg.message}</P> : null}
  </ErrorMessage>
)
