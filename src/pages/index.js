import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import { makeStyles } from '@material-ui/core/styles'
import TextField from "@material-ui/core/TextField"

import Layout from "../components/layout"
import Image from "../components/image"

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

const IndexPage = props => {
  const classes = useStyles()

  return (

    <Layout>
      <Helmet>
        <title>Welcome to my page</title>
      </Helmet>
      <h1>Hi people</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Alarm clock"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}



export default IndexPage
