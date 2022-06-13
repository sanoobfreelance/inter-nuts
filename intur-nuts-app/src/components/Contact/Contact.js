import {
  Button,
  Grid,
  TextField,
  Container,
  Alert,
  Snackbar,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
const useStyles = makeStyles({
  input: {
    background: "#ebe9e6",
    border: 0,
    borderRadius: 5,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    // height: 48,
    // padding: "0 30px",
  },
});
const Contact = () => {
  const form = useRef();
  const [openNotification, setOpenNotification] = React.useState(false);
  const [errorNotification, setErrorNotification] = React.useState(false);

  const [formData, setFormdata] = React.useState({
    full_name: "",
  });
  const textChange = (event) => {
    setFormdata({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenNotification(false);
    setErrorNotification(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseNotification}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData.full_name.length);
    if (formData.full_name.length > 0) {
      emailjs
        .sendForm(
          "service_5g3ddge",
          "template_8vns5fa",
          form.current,
          "B15yWeodhz0-FYaNL"
        )
        .then(
          (result) => {
            console.log(result.text);
            setOpenNotification(true);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("errr");
      setErrorNotification(true);
    }
  };

  const classes = useStyles();
  return (
    <div className="about-us-container">
      <form onSubmit={sendEmail} ref={form}>
        <h1 data-aos="fade-right" className="common-head">
          CONTACT US
        </h1>{" "}
        {/* notification */}
        <Snackbar
          open={errorNotification}
          autoHideDuration={4000}
          onClose={handleCloseNotification}
          action={action}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            Full name is mandatory
          </Alert>
        </Snackbar>
        <Snackbar
          open={openNotification}
          autoHideDuration={4000}
          onClose={handleCloseNotification}
          action={action}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Message sent successfully
          </Alert>
        </Snackbar>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className="contact"
        >
          <Grid item xs={12} md={12}>
            {" "}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {" "}
                <TextField
                  className={classes.input}
                  color="secondary"
                  id="filled-basic"
                  fullWidth
                  label="Full Name"
                  data-aos="fade-right"
                  variant="filled"
                  onChange={textChange}
                  size="small"
                  margin="normal"
                  name="full_name"
                />
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                {" "}
                <TextField
                  className={classes.input}
                  id="outlined-basic"
                  fullWidth
                  data-aos="fade-right"
                  color="secondary"
                  label="Mobile Number"
                  variant="filled"
                  size="small"
                  margin="normal"
                  name="mobile"
                />
              </Grid>
            </Grid>
            <TextField
              className={classes.input}
              fullWidth
              id="outlined-basic"
              color="secondary"
              label="Email"
              data-aos="fade-right"
              variant="filled"
              size="small"
              margin="normal"
              name="email"
            />
            <TextField
              className={classes.input}
              fullWidth
              id="standard-multiline-static"
              color="secondary"
              label="Description"
              variant="filled"
              multiline
              data-aos="fade-right"
              rows={4}
              size="small"
              margin="normal"
              name="description"
            />{" "}
            <Button
              variant="contained"
              size="small"
              margin="normal"
              fullWidth
              data-aos="fade-right"
              type="submit"
              // onClick={sendEmail1}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Contact;
