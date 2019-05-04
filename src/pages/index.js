import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

import Layout from "../components/layout"
import Image from "../components/image"

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

const IndexPage = props => {
  const { classes } = props

  return (
    <Layout>
      <h1>Hi people</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Alarm clock"
          type="time"
          defaultValue="07:30"
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

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(IndexPage)
