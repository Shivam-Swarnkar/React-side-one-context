import React, { Fragment } from "react";
import context from "./context";
import Context from "./context";
import Provider from "./provider";

const Agent = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return (
    <Context.Consumer>
      {context => (
        <Fragment>
          <p>Mission name: {context.data.mname}</p>
          <p>Mission status: {context.data.accept}</p>
          <button onClick={context.isMisssionAccepted}>Choose to accept</button>
        </Fragment>
      )
      }
    </Context.Consumer>
  )
}

const App = () => {
  return (
    <div>
      <h1>Mission details</h1>
      <Provider>
        <Agent />
      </Provider>
    </div>
  )
}

export default App;