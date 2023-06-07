import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { WorkExperience } from "./WorkExperience"
export const Pages = () => {
  const [index , setIndex] = useState(0)
  return (
    <>
      <Router>
        <Header setIndex={setIndex} index={index}/>
        <Switch>
          <Route exact path='/' render={() => <Home index={index}/>} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/workexperience' component={WorkExperience} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
