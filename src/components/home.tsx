import React, { useEffect } from "react";
import "./home.scss"; // Import file CSS
import vietnam from "../assets/img/—Pngtree—design and colors of the_16198550.png";
import zaloImg from "../assets/img/zalo-chat.webp";
import thingkingImg from "../assets/img/thingking.jpg";
import oneImg from "../assets/img/1.png";
import twoImg from "../assets/img/2.png";
import threeImg from "../assets/img/3.png";
import fourImg from "../assets/img/4.png";
import Button from "@mui/material/Button";
import logo from "../assets/img/logo.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoListOutline } from "react-icons/io5";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PricingTable from "./PricingTable";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";

const Home: React.FC = () => {
  const [view, setView] = React.useState("1");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: string | null
  ) => {
    // Chỉ cập nhật giá trị mới nếu nó khác giá trị hiện tại
    if (newView !== null && newView !== view) {
      setView(newView);
    }
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="header-logo">
          <img src={logo} alt="" style={{ width: "60px" }} />
          <h5
            style={{ fontSize: "25px", marginBottom: "0px", marginTop: "15px" }}
          >
            Plan book
          </h5>
        </div>
        <div className="container" style={{ marginTop: "60px" }}>
          <h1 className="title">A Better Way to Manage your Schedule</h1>
          <p className="subTitle">
            Launch your campaign and benefit from our expertise on designing and
          </p>
          <p className="subTitle">
            managing conversion centered bootstrap v5 html page.
          </p>
          <div
            className="cta-form"
            style={{ marginLeft: "430px", marginTop: "100px" }}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="email-input"
            />
            <button className="cta-button">Get Started</button>
          </div>
          {/* Hình ảnh minh họa */}
          <img src={vietnam} alt="Illustration" className="hero-image" />
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            style={{ margin: "0px 200px", textTransform: "none" }}
          >
            <Button style={{ color: "black", borderRight: "none" }}>
              <div className="feature" style={{ textTransform: "none" }}>
                <FaFacebook fontSize={"40px"} color="#0056b3" />
                <h3 style={{ fontWeight: "600px" }}>Easy To Use</h3>
                <p style={{ color: "#8492a6" }}>
                  Nisl nisi scelerisque eu ultrices vitae auctor eu. Bibendum ut
                  tristique et egestas quis.
                </p>
              </div>
            </Button>
            <Button style={{ color: "black", borderRight: "none" }}>
              <div className="feature" style={{ textTransform: "none" }}>
                <AiFillInstagram fontSize={"40px"} color="#0056b3" />
                <h3>Secure</h3>
                <p style={{ color: "#8492a6" }}>
                  Allegedly, a Latin scholar established the origin of a
                  celebrated theory by creating new words.
                </p>
              </div>
            </Button>
            <Button style={{ color: "black", borderRight: "none" }}>
              <div className="feature" style={{ textTransform: "none" }}>
                <FaGithub fontSize={"40px"} color="#0056b3" />
                <h3>Flexible</h3>
                <p style={{ color: "#8492a6" }}>
                  It seems that only fragments of the original text remain in
                  the Lorem Ipsum texts used today.
                </p>
              </div>
            </Button>
          </ButtonGroup>
        </div>
      </section>
      <section className="timeline-section">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="left">
            <img
              style={{ width: "500px", height: "400px", borderRadius: "3%" }}
              src={zaloImg}
              alt=""
            />
          </div>
          <div className="right" style={{ paddingLeft: "50px" }}>
            <br />
            <FaCalendarTimes fontSize={"3rem"} color="#0056b3" />
            <br />
            <h2>Track your timeline</h2>
            <br />
            <div className="timeline-section-content">
              <p style={{ marginTop: "2px", marginBottom: "0px" }}>
                Due to its widespread use as filler text for layouts,
                non-readability is
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                of great importance: human perception is tuned to recognize
                certain
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                patterns and repetitions in texts. If the distribution of
                letters visual
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>impact.</p>
            </div>
            <br />
            <div
              className="timeline-section-arrow"
              style={{ display: "flex", height: "20px" }}
            >
              <FaRegArrowAltCircleRight
                color="#0056b3"
                style={{ paddingRight: "5px" }}
              />
              <p style={{ marginTop: "0px" }}>
                Digital Marketing Solutions for Tomorrow
              </p>
            </div>
            <div className="timeline-section-arrow" style={{ display: "flex" }}>
              <FaRegArrowAltCircleRight
                color="#0056b3"
                style={{ paddingRight: "5px" }}
              />
              <p style={{ marginTop: "0px" }}>
                Create your own skin to match your brand
              </p>
            </div>
            <br />
            <div className="navigate" style={{ display: "flex" }}>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "#0056b3",
                }}
              >
                Find Out More
              </a>
              <IoIosArrowForward
                color="#0056b3"
                style={{ paddingLeft: "3px", paddingTop: "1px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="left" style={{ paddingRight: "50px" }}>
            <br />
            <IoListOutline fontSize={"3rem"} color="#0056b3" />
            <br />
            <h2 style={{ marginBottom: "0px" }}>Plans and Collaborate</h2>
            <h2 style={{ marginTop: "10px" }}>your content</h2>
            <br />
            <div className="timeline-section-content">
              <p style={{ marginTop: "2px", marginBottom: "0px" }}>
                Due to its widespread use as filler text for layouts,
                non-readability is
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                of great importance: human perception is tuned to recognize
                certain
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                patterns and repetitions in texts. If the distribution of
                letters visual
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>impact.</p>
            </div>
            <br />
            <div
              className="timeline-section-arrow"
              style={{ display: "flex", height: "20px" }}
            >
              <FaRegArrowAltCircleRight
                color="#0056b3"
                style={{ paddingRight: "5px" }}
              />
              <p style={{ marginTop: "0px" }}>
                Digital Marketing Solutions for Tomorrow
              </p>
            </div>
            <div className="timeline-section-arrow" style={{ display: "flex" }}>
              <FaRegArrowAltCircleRight
                color="#0056b3"
                style={{ paddingRight: "5px" }}
              />
              <p style={{ marginTop: "0px" }}>
                Create your own skin to match your brand
              </p>
            </div>
            <br />
            <div className="navigate" style={{ display: "flex" }}>
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "#0056b3",
                }}
              >
                Find Out More
              </a>
              <IoIosArrowForward
                color="#0056b3"
                style={{ paddingLeft: "3px", paddingTop: "1px" }}
              />
            </div>
          </div>
          <div className="right">
            <img
              style={{ width: "500px", height: "400px", borderRadius: "3%" }}
              src={thingkingImg}
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div style={{ marginBottom: "80px" }}>
          <div
            className="title-dashboard"
            style={{
              display: "flex",
              justifyContent: "center",
              height: "90px",
            }}
          >
            <h4 style={{ fontSize: "30px" }}>
              Discover what makes
              <span style={{ color: "#0056b3" }}>Task manager</span> great.
            </h4>
          </div>
          <div
            className="content-dashboard"
            style={{ marginTop: "0px", marginBottom: "0px" }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#8492a6",
              }}
            >
              Start working with
              <span
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  fontWeight: "bold",
                  color: "#2f55d4",
                }}
              >
                Landrick
              </span>
              that can provide everything you need to generate
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#8492a6",
              }}
            >
              awareness, drive traffic, connect.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className="dashboard"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="left">
            <ToggleButtonGroup
              orientation="vertical"
              value={view}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton
                value="1"
                aria-label="list"
                className={view === "1" ? "toggle-button-selected" : ""}
              >
                <div
                  className="form-left"
                  style={{
                    textAlign: "left",
                    textTransform: "none",
                    paddingLeft: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Management Dashboard
                  </h5>
                  <p style={{ marginBottom: "0px", color: "#8492a6" }}>
                    Dummy text is text that is used in the publishing
                  </p>
                  <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                    industry or by web designers.
                  </p>
                </div>
              </ToggleButton>
              <ToggleButton
                value="2"
                aria-label="list"
                className={view === "2" ? "toggle-button-selected" : ""}
              >
                <div
                  className="form-left"
                  style={{
                    textAlign: "left",
                    textTransform: "none",
                    paddingLeft: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Management Dashboard
                  </h5>
                  <p style={{ marginBottom: "0px" }}>
                    Dummy text is text that is used in the publishing
                  </p>
                  <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                    industry or by web designers.
                  </p>
                </div>
              </ToggleButton>
              <ToggleButton
                value="3"
                aria-label="list"
                className={view === "3" ? "toggle-button-selected" : ""}
              >
                <div
                  className="form-left"
                  style={{
                    textAlign: "left",
                    textTransform: "none",
                    paddingLeft: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Management Dashboard
                  </h5>
                  <p style={{ marginBottom: "0px" }}>
                    Dummy text is text that is used in the publishing
                  </p>
                  <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                    industry or by web designers.
                  </p>
                </div>
              </ToggleButton>
              <ToggleButton
                value="4"
                aria-label="list"
                className={view === "4" ? "toggle-button-selected" : ""}
              >
                <div
                  className="form-left"
                  style={{
                    textAlign: "left",
                    textTransform: "none",
                    paddingLeft: "10px",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Management Dashboard
                  </h5>
                  <p style={{ marginBottom: "0px" }}>
                    Dummy text is text that is used in the publishing
                  </p>
                  <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                    industry or by web designers.
                  </p>
                </div>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div
            className="right"
            style={{ marginLeft: "50px", marginTop: "14px" }}
          >
            {view === "1" && (
              <img
                style={{
                  width: "600px",
                  height: "450px",
                  borderRadius: "3%",
                  boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                src={oneImg}
                alt=""
              />
            )}
            {view === "2" && (
              <img
                style={{
                  width: "600px",
                  height: "450px",
                  borderRadius: "3%",
                  boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                src={twoImg}
                alt=""
              />
            )}{" "}
            {view === "3" && (
              <img
                style={{
                  width: "600px",
                  height: "450px",
                  borderRadius: "3%",
                  boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                src={threeImg}
                alt=""
              />
            )}{" "}
            {view === "4" && (
              <img
                style={{
                  width: "600px",
                  height: "450px",
                  borderRadius: "3%",
                  boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                src={fourImg}
                alt=""
              />
            )}
          </div>
        </div>
      </section>
      <section className="great-features">
        <div className="features-container">
          <div className="features-text">
            <h2>Great Features</h2>
            <p>
              Start working with{" "}
              <span style={{ color: "#0056b3" }}>Landrick</span> that can
              provide
            </p>
            <p>everything you need to generate awareness,</p>
            <p>drive traffic, connect.</p>
          </div>
          <div className="features-grid">
            <div className="feature-item-left">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="planning">
                  🗂️
                </span>
              </div>
              <h5>Task Planning</h5>
              <p>
                It is a long established fact that a reader will be of a page
                reader will be of at its layout.
              </p>
            </div>
            <div className="feature-item-right">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="scheduling">
                  📅
                </span>
              </div>
              <h5>Task Scheduling</h5>
              <p>
                It is a long established fact that a reader will be of a page
                reader will be of at its layout.
              </p>
            </div>
            <div className="feature-item-left">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="tracking">
                  ⏰
                </span>
              </div>
              <h5>Task Tracking</h5>
              <p>
                It is a long established fact that a reader will be of a page
                reader will be of at its layout.
              </p>
            </div>
            <div className="feature-item-right">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="calendar">
                  📆
                </span>
              </div>
              <h5>Calendar</h5>
              <p>
                It is a long established fact that a reader will be of a page
                reader will be of at its layout.
              </p>
            </div>
            <div className="feature-item-left">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="collaboration">
                  🤝
                </span>
              </div>
              <h5>Collaboration</h5>
              <p>
                It is a long established fact that a reader will be of a page
                reader will be of at its layout.
              </p>
            </div>
            <button className="see-more">See more →</button>
          </div>
        </div>
      </section>
      <section>
        <div className="pricing-title">
          <h5>Let’s get some real price done here.</h5>
          <p>
            Start working with Landrick that can provide everything you need to
            generate
          </p>
          <p>awareness, drive traffic, connect.</p>
        </div>
        <PricingTable />
      </section>
      <section>
        <div className="question">
          <div className="question-item">
            <div className="question-icon">
              {/* Icon placeholder */}
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="question-content">
              <h5>How our Landrick work ?</h5>
              <p>
                Due to its widespread use as filler text for layouts,
                non-readability is of great importance: human perception is
                tuned to recognize certain patterns and repetitions in texts.
              </p>
            </div>
          </div>
          <div className="question-item">
            <div className="question-icon">
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="question-content">
              <h5>What is the main process open account ?</h5>
              <p>
                If the distribution of letters and 'words' is random, the reader
                will not be distracted from making a neutral judgement on the
                visual impact
              </p>
            </div>
          </div>
          <div className="question-item">
            <div className="question-icon">
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="question-content">
              <h5>How to make unlimited data entry ?</h5>
              <p>
                Furthermore, it is advantageous when the dummy text is
                relatively realistic so that the layout impression of the final
                publication is not compromised.
              </p>
            </div>
          </div>
          <div className="question-item">
            <div className="question-icon">
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="question-content">
              <h5>Is Landrick safer to use with my account ?</h5>
              <p>
                The most well-known dummy text is the 'Lorem Ipsum', which is
                said to have originated in the 16th century. Lorem Ipsum is
                composed in a pseudo-Latin language which more or less
                corresponds to 'proper' Latin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact">
          <div className="contact-title">
            <h5>Have Question ? Get in touch!</h5>
          </div>
          <div className="contact-content">
            <p style={{ marginBottom: "0px" }}>
              Start working with{" "}
              <span style={{ color: "#0056b3" }}>Landrick</span> that can
              provide everything you need to generate
            </p>
            <p style={{ marginTop: "5px", marginBottom: "40px" }}>
              awareness, drive traffic, connect.
            </p>
          </div>
          <button className="contact-button">
            {" "}
            <FaPhoneAlt style={{ marginRight: "10px" }} />
            Contact us
          </button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div style={{ display: "flex" }}>
              <img src={logo} alt="Logo" style={{ width: "50px" }} />
              <h5 style={{ fontSize: "20px", margin: "10px 0" }}>Plan Book</h5>
            </div>

            <p style={{ fontSize: "13px" }}>
              Start working with Landrick that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">
                  {" "}
                  <IoIosArrowForward />
                  Home
                </a>
              </li>
              <li>
                <a href="#features">
                  {" "}
                  <IoIosArrowForward />
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing">
                  {" "}
                  <IoIosArrowForward />
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact">
                  {" "}
                  <IoIosArrowForward />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} color="#fff" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} color="#fff" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} color="#fff" />
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Nhà văn hóa sinh viên</p>
            <p>Email: contact@planbook.com</p>
            <p>Phone: (+84) 024-123456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
