import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Layout from '../components/common/layout'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  textArea: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <TextField id="name" className={classes.textField} label="Name" margin="normal" aria-label="name" required />
        </p>
        <p>
          <TextField id="email" className={classes.textField} label="E-Mail" margin="normal" aria-label="email" required />
        </p>
        <p>
          <TextField id="message" className={classes.textArea} label="Message" margin="normal" multiline="true" rows="4" aria-label="message" required />
        </p>
        <p>
          <Fab variant="extended" aria-label="send" className="classes.fab">
            <SendIcon className={classes.extendedIcon} />
            Send
          </Fab>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage;