import React, { Component, Link } from "react";
import Navbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer.js";
import Loader from "../Loader/loader";
import "./ca.css";
import axios from "axios";

// import { contactFunctions } from "./caFunctions";
/*class Ca extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}*/

class CA extends Component {
  state = {
    name: "",
    mail: "",
    col: "",
    mobnum: "",
    pass: "",
    msg: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:4500/api/ca/register/", {
        email: this.state.mail,
        name: this.state.name,
        phone: this.state.mobnum,
        password: this.state.pass,
        college: this.state.col,
      })

      .then(() => {
        console.log("Data has been sent to the server");
        this.setState({ msg: "CA Registration was succesfull" });
        this.resetUserInputs();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  resetUserInputs = () => {
    this.setState({
      name: "",
      mail: "",
      col: "",
      mobnum: "",
      pass: "",
    });
  };

  render() {
    console.log("State: ", this.state);
    return (
      <div>
        <Navbar />
        <div className="ca">
          {/* home section */}
          {/*<div>
            <img
              src={require("../../assets/img/astronaut.png")}
              alt=""
              className="astronaut1"
            />
          </div>*/}

          <div id="homeSection" className="homes">
            <h1 className="display-3 main-headline">
              Join CELESTA'20 Campus Ambassador Program
            </h1>
            <p className="abt-headline">
              Indian Institute Of Technology Patna is bringing forward it’s very
              own techno-management fest, <strong>CELESTA-20</strong>. Be the
              face of the innovation in your college. Inspire your friends to
              take part in the exciting events, be the leader!!
            </p>
            <br />
            <a href="#register" className="btn btn-outline-dark register-btn">
              {" "}
              Register Now{" "}
            </a>
          </div>
          {/* home section ends here */}
          {/* features start here */}
          <div id="features" className="features-x">
            <h1 className="display-3 features-headline">Why Become the CA?</h1>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-md-4 benefit-cards">
                  <img
                    src={require("../../assets/img/skills.jpg")}
                    className="img-resp"
                  />
                  <br />
                  <h4 className="display-5 ben-heading">Skill Improvement</h4>
                  <p className="about-tbl">
                    It will help you to improve your managerial as well as
                    communication skills.
                  </p>
                </div>
                <div className="col-md-4 benefit-cards">
                  <img
                    src={require("../../assets/img/networks.jpg")}
                    className="img-resp"
                  />
                  <br />
                  <h4 className="display-5 ben-heading">Networking</h4>
                  <p className="about-tbl">
                    By communicating with many people it will increase your
                    contacts which will help you in future.
                  </p>
                </div>
                <div className="col-md-4 benefit-cards">
                  <img
                    src={require("../../assets/img/recognition.jpg")}
                    className="img-resp"
                  />
                  <br />
                  <h4 className="display-5 ben-heading">Recognition</h4>
                  <p className="about-tbl">
                    You are getting to represent your college at a higher level.
                  </p>
                </div>
              </div>
            </div>

            <br />
          </div>
          {/* features ends here */}
          {/* registration section start here */}
          <div id="register" className="register-x">
            <h1 className="display-3 register-headline">
              Hurry Up and Register Yourself!
            </h1>
            <br />
            <br />
            <div className="form-registration">
              <div className="card card-x">
                <div className="card-body card-bodyx">
                  <form onSubmit={this.submit}>
                    <h1>{this.state.msg}</h1>
                    <div className="form-group" style={{ fontSize: "20px" }}>
                      <label className="form-label" htmlFor="identityName">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="identityName"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inputEmail">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="mail"
                        className="form-control"
                        id="inputEmail"
                        value={this.state.mail}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="mobileNum">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        name="mobnum"
                        className="form-control"
                        id="mobileNum"
                        pattern="^\d{10}$"
                        value={this.state.mobnum}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="colgName">
                        College/University Name
                      </label>
                      <input
                        type="text"
                        name="col"
                        className="form-control"
                        id="colgName"
                        value={this.state.col}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="pwd">
                        Password
                      </label>
                      <input
                        type="password"
                        name="pass"
                        className="form-control"
                        id="pwd"
                        value={this.state.pass}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <br />
                    <button className="btn btn-register btn-lg btn-block">
                      Register!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* end of registration section here */}
        </div>
      </div>
    );
  }
}

export default CA;
