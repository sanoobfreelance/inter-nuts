import { Button, Grid, TextField } from "@mui/material";
import mail from "../../Assets/mail.png";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
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
  const classes = useStyles();
  return (
    <div className="about-us-container">
      <h1 className="common-head">Contact Us</h1>
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
                variant="filled"
                size="small"
                margin="normal"
              />
            </Grid>{" "}
            <Grid item xs={12} md={6}>
              {" "}
              <TextField
                className={classes.input}
                id="outlined-basic"
                fullWidth
                color="secondary"
                label="Mobile Number"
                variant="filled"
                size="small"
                margin="normal"
              />
            </Grid>
          </Grid>
          <TextField
            className={classes.input}
            fullWidth
            id="outlined-basic"
            color="secondary"
            label="Email"
            variant="filled"
            size="small"
            margin="normal"
          />
          <TextField
            className={classes.input}
            fullWidth
            id="standard-multiline-static"
            color="secondary"
            label="Description"
            variant="filled"
            multiline
            rows={4}
            size="small"
            margin="normal"
          />{" "}
          <Button
            variant="contained"
            size="small"
            margin="normal"
            fullWidth
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
export default Contact;
