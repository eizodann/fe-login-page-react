import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  IconButton,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Apple, ArrowDropDown, Facebook } from "@material-ui/icons";

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
        <div className="lang">
          <Button className="faded-font" endIcon={<ArrowDropDown />}>
            English (USA)
          </Button>
        </div>

        <div className="main-section-signup">
          <h1>Sign up to Asgard</h1>
          <p className="faded-font">
            already have an account?{" "}
            <span>
              <a>Log in</a>
            </span>
          </p>

          <div className="social-sign-up">
            <Button variant="outlined">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 48 48"
                className="abcRioButtonSvg"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              <span className="btn-span">&nbsp;Sign up with google</span>
            </Button>

            <Button className="fb" startIcon={<Facebook />}></Button>

            <Button className="apple" startIcon={<Apple />}></Button>
          </div>

          <div className="faded-font alt-or">- OR -</div>

          <TextField
            className="input-field"
            label="Full Name"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            className="input-field"
            type="email"
            label="Email address"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            className="input-field"
            type="password"
            label="Password"
            InputLabelProps={{ shrink: true }}
          />

          <div id="strength">
            <p>Password strength</p>
            <ul id="strengthBar">
              <li className="point" style={{backgroundColor: "#0F0"}}></li>
              <li className="point" style={{backgroundColor: "#0F0"}}></li>
              <li className="point" style={{backgroundColor: "#0F0"}}></li>
              <li className="point" style={{backgroundColor: ""}}></li>
            </ul>
          </div>

          <div className="check-box-body">
            <Checkbox />

            <span>
              By creating account you agree to accept our{" "}
              <span>
                <a>Privacy Policy,Terms of Service</a>
              </span>{" "}
              and{" "}
              <span>
                <a>Notification settings</a>
              </span>
            </span>
          </div>

          <div className="submit">
            <Button variant="contained">Create Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
