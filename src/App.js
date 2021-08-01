import logo from "./logo.svg";
import "./App.css";
import { Button, IconButton, TextField } from "@material-ui/core";
// import { DeleteIcon } from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className="desc-section">
        <h2 className="faded-font">Asgard</h2>
        <p className="faded-font">
          A Cloud based community for you to connect with fellow Asgardians
        </p>
        <div className="img-body">
          <img src="desc-img-l.png" alt="" />
        </div>
      </div>

      <div className="main-section">
        <div className="lang faded-font">
          <Button>
            English (USA)
            {/* <mat-icon>arrow_drop_down</mat-icon> */}
          </Button>
        </div>

        <div className="main-section-signup">
          <h1>Sign up to Asgard</h1>
          <p className="faded-font">
            already have an account?{" "}
            <span>
              <a href="">Log in</a>
            </span>
          </p>

          <div className="social-sign-up">
          <IconButton>
            <DeleteIcon />
          </IconButton>
          </div>

          <div className="faded-font alt-or">- OR -</div>

          <TextField id="standard-basic" label="Full Name" InputLabelProps={{ shrink: true }}/>
          <TextField id="standard-basic" type="email" label="Email address" InputLabelProps={{ shrink: true }}/>
          <TextField id="standard-basic" type="password" label="Password" InputLabelProps={{ shrink: true }}/>
          {/* <mat-form-field appearance="standard" floatLabel="always">
        <mat-label>Full Name</mat-label>
        <input type="text" matInput placeholder="">
      </mat-form-field> */}


          {/* <div style="margin-top: 12px;">
        <mat-checkbox className="faded-font">By creating account you agree to accept our <span><a href="">Privacy Policy,Terms of Service</a></span> and <span><a href="">Notification settings</a></span></mat-checkbox>
      </div> */}

          {/* <div className="submit">
        <button mat-stroked-button>
          Create Account
        </button>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
