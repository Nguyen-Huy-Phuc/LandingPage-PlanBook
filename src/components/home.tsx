import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaCalendarTimes,
  FaFacebook,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoIosArrowForward} from "react-icons/io";
import { IoListOutline } from "react-icons/io5";
import oneImg from "../assets/img/1.png";
import twoImg from "../assets/img/2.png";
import threeImg from "../assets/img/3.png";
import fourImg from "../assets/img/4.png";
import logo from "../assets/img/logo.png";
import thingkingImg from "../assets/img/thingking.jpg";
import zaloImg from "../assets/img/zalo-chat.webp";
import vietnam from "../assets/img/—Pngtree—design and colors of the_16198550.png";
import "./home.scss"; // Import file CSS
import PricingTable from "./PricingTable";

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

  const handleGetStartedClick = () => {
    window.location.href = "https://planbook.vn/";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1 className="title">Giải pháp toàn diện cho giáo viên</h1>
          <p className="subTitle">
          Quản lý giáo án, đề thi cá nhân, tham khảo nguồn giáo án theo chuẩn kiến thức 
          </p>
          <p className="subTitle">
          và cập nhật tin tức thông tư  của bộ giáo dục mới nhất.
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
            <button className="cta-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
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
                {/* <IoIosAlbums fontSize={"40px"} color="#0056b3" /> */}
                <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="planning" style={{fontSize:"40px" }}>
                  🗂️
                </span>
              </div>
                <h3 style={{ fontWeight: "600px" }}>Quản lý Giáo án Cá nhân </h3>
                <p style={{ color: "#8492a6" }}>
                Tạo và quản lý giáo án cá nhân một cách dễ dàng. 
                Tính năng này cho phép bạn tổ chức, chỉnh sửa, và lưu trữ giáo án theo từng chủ đề, môn học, 
                và lớp học, đảm bảo bạn luôn sẵn sàng với nội dung giảng dạy phù hợp.
                </p>
              </div>
            </Button>
            <Button style={{ color: "black", borderRight: "none" }}>
              <div className="feature" style={{ textTransform: "none" }}>
                {/* <IoLibrary fontSize={"40px"} color="#0056b3" /> */}
                <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="document" style={{fontSize:"40px" }}>
                 📚
                </span>
              </div>
                <h3>Kho Giáo án Toàn quốc </h3>
                <p style={{ color: "#8492a6" }}>
                Truy cập và chia sẻ giáo án từ các giáo viên trên khắp cả nước. 
                Kho tài liệu phong phú giúp bạn dễ dàng tìm kiếm những giáo án phù hợp, 
                nâng cao chất lượng giảng dạy và học hỏi từ đồng nghiệp.
                </p>
              </div>
            </Button>
            <Button style={{ color: "black", borderRight: "none" }}>
              <div className="feature" style={{ textTransform: "none" }}>
                {/* <FaRegCalendarAlt fontSize={"40px"} color="#0056b3" /> */}
                <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="scheduling" style={{fontSize:"40px" }}>
                  📅
                </span>
              </div>
                <h3>Lịch Giảng dạy và Giáo án </h3>
                <p style={{ color: "#8492a6" }}>
                Tạo và quản lý thời khóa biểu một cách hiệu quả với khả năng chọn và kéo thả giáo án ứng với từng tiết học.
                 Tính năng này giúp giáo viên dễ dàng tổ chức lịch dạy và truy cập nhanh chóng vào giáo án ngay trong thời khóa biểu, 
                 giúp tối ưu hóa công tác chuẩn bị giảng dạy.
                </p>
              </div>
            </Button>
          </ButtonGroup>
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
            Đa dạng trong việc tạo ra bài giáo án của riêng bạn.
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
              Bắt đầu sử dụng nền tảng
              <span
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  fontWeight: "bold",
                  color: "#f97316",
                }}
              >
                Planbook.vn
              </span>
              của chúng tôi để nhận mọi công cụ cần thiết cho việc quản lý giáo án,
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#8492a6",
              }}
            >
              tạo kết nối và nâng cao hiệu quả giảng dạy.
            </p>
          </div>
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
            <h2 style={{ marginBottom: "0px" }}>Cá nhân hóa bài giảng</h2>
            <h2 style={{ marginTop: "10px" }}>một cách linh hoạt</h2>
            <br />
            <div className="timeline-section-content">
              <p style={{ marginTop: "2px", marginBottom: "0px" }}>
                Trang web cung cấp nhiều công cụ mạnh mẽ và dễ sử dụng, cho phép giáo viên 
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                tự do sáng tạo và xây dựng các giáo án độc đáo, phù hợp với nhu cầu giảng
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                dạy riêng của từng lớp học. Từ việc sử dụng các mẫu giáo án có sẵn đến việc 
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                tự thiết kế từ đầu, giáo viên có thể lựa chọn phương pháp và cấu trúc bài 
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                giảng phù hợp nhất với phong cách giảng dạy của mình.
              </p>
            </div>
            <br />
            {/* <div
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
            </div> */}
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
            <h2>Tích hợp công nghệ hiện đại</h2>
            <br />
            <div className="timeline-section-content">
              <p style={{ marginTop: "2px", marginBottom: "0px" }}>
                Chức năng tạo giáo án được hỗ trợ bởi các công cụ công nghệ tiên tiến 
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                như trí tuệ nhân tạo (AI), giúp đề xuất nội dung, câu hỏi, và hoạt động 
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                giảng dạy phù hợp với mục tiêu bài học. Giáo viên cũng có thể kéo thả
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                các yếu tố trong giáo án, thêm hình ảnh, video, và tài liệu tham khảo
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                một cách dễ dàng.
              </p>
            </div>
            <br />
            {/* <div
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
            </div> */}
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
            <h2>Chia sẻ và hợp tác</h2>
            <br />
            <div className="timeline-section-content">
              <p style={{ marginTop: "2px", marginBottom: "0px" }}>
                Ngoài việc tạo giáo án, giáo viên có thể chia sẻ sáng tạo của mình với 
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                đồng nghiệp, tạo nên một cộng đồng giáo viên tích cực trao đổi kinh nghiệm. 
              </p>
              <p style={{ marginTop: "5px", marginBottom: "0px" }}>
                Bạn cũng có thể xem, tải về và điều chỉnh các giáo án từ kho tài liệu toàn
              </p>
              <p style={{ marginTop: "5px", marginBottom: "10px" }}>
                quốc, đảm bảo rằng bài giảng của mình luôn mới mẻ và đa dạng.  
              </p>
            </div>
            <br />
            {/* <div
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
            </div> */}
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
              Khám phá những 
              <span style={{ color: "#f97316" }}> tính năng vượt trội </span> 
              của công cụ quản lý giáo án.
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
              Bắt đầu với nền tảng giúp bạn 
              <span
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  fontWeight: "bold",
                  color: "#f97316",
                }}
              >
                tối ưu hóa
              </span>
              công việc giảng dạy và quản lý tài liệu 
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#8492a6",
              }}
            >
              một cách hiệu quả.
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
                    width: "350px"
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Kho giáo án
                  </h5>
                  <p style={{ marginBottom: "0px"}}>
                    Nguồn giáo án đảm bảo chuẩn kiến thức 
                  </p>
                  <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                    để tham khảo.
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
                    width: "350px"
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Giáo án cá nhân
                  </h5>
                  <p style={{ marginBottom: "0px" }}>
                    Lưu trữ giáo án, bảo mật và dễ dàng quản lí
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
                    width: "350px"
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Kho đề thi
                  </h5>
                  <p style={{ marginBottom: "0px" }}>
                    Đầy đủ phong phú các dạng bài kiểm tra, bài tập
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
                    width: "350px"
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.25rem",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    Thời khóa biểu
                  </h5>
                  <p style={{ marginBottom: "0px" }}>
                    Quản lí lịch dạy học đính kèm giáo án tiện lợi, 
                  </p>
                  <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                  dễ dàng xem mọi lúc.
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
            <h2>Tính Năng Mở Rộng</h2>
            <p>
              Bắt đầu sử dụng nền tảng{" "}
              <span style={{ color: "#f97316" }}> Planbook.vn </span> của chúng tôi 
            </p>
            <p> để nhận mọi công cụ cần thiết cho việc quản lý giáo án,</p>
            <p> tạo kết nối và nâng cao hiệu quả giảng dạy.</p>
          </div>
          <div className="features-grid">
            <div className="feature-item-left">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="planning">
                  🗂️
                </span>
              </div>
              <h5>Lập kế hoạch giảng dạy</h5>
              <p>
                Tạo ra một thời khóa biểu cá nhân đi kèm với giáo án tương ứng 
                cho từng tiết học. Tính năng này cho phép bạn dễ dàng quản lý 
                và sắp xếp thời gian giảng dạy, đảm bảo mọi bài giảng đều được 
                chuẩn bị kỹ lưỡng và đúng thời gian.
              </p>
            </div>
            <div className="feature-item-right">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="scheduling">
                  📅
                </span>
              </div>
              <h5>AI tạo giáo án</h5>
              <p>
                Tận dụng trí tuệ nhân tạo (AI) để tự động tạo ra các giáo án 
                phù hợp với mục tiêu giảng dạy của bạn. Chỉ cần nhập chủ đề và 
                yêu cầu, AI sẽ giúp bạn tạo ra một giáo án hoàn chỉnh, tiết 
                kiệm thời gian và công sức.
              </p>
            </div>
            <div className="feature-item-left">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="tracking">
                  ⏰
                </span>
              </div>
              <h5>Tạo bài kiểm tra</h5>
              <p>
                Thiết kế và tạo ra các bài kiểm tra một cách nhanh chóng và hiệu 
                quả. Bạn có thể chọn từ nhiều định dạng câu hỏi, bao gồm trắc 
                nghiệm, tự luận, và câu hỏi thực hành, phù hợp với từng mục tiêu 
                kiểm tra của lớp học.
              </p>
            </div>
            <div className="feature-item-right">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="calendar">
                  📆
                </span>
              </div>
              <h5>Diễn đàn chia sẻ kinh nghiệm</h5>
              <p>
                Tham gia vào cộng đồng giáo viên sôi nổi để chia sẻ kinh nghiệm 
                giảng dạy, tài liệu, và các phương pháp học tập hiệu quả. Diễn 
                đàn này là nơi bạn có thể học hỏi và đóng góp ý kiến, tạo nên một 
                môi trường hỗ trợ lẫn nhau.
              </p>
            </div>
            <div className="feature-item-left">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="collaboration">
                  🤝
                </span>
              </div>
              <h5>Chuẩn kiến thức</h5>
              <p>
                Đảm bảo rằng bài giảng của bạn luôn tuân thủ các chuẩn kiến thức và 
                kỹ năng của Bộ Giáo dục. Tính năng này giúp bạn dễ dàng truy cập và 
                tích hợp các chuẩn kiến thức vào giáo án, đảm bảo chất lượng giảng dạy.
              </p>
            </div>
            <div className="feature-item-right">
              <div className="feature-icon">
                {/* Icon placeholder */}
                <span role="img" aria-label="collaboration">
                  🤝
                </span>
              </div>
              <h5>Thư viện pháp luật</h5>
              <p>
                Truy cập vào thư viện pháp luật đầy đủ và cập nhật, bao gồm các quy 
                định, thông tư, và chính sách liên quan đến giáo dục. Đây là nguồn 
                tài liệu quý giá giúp bạn nắm rõ các quy định pháp lý, đảm bảo tuân 
                thủ trong quá trình giảng dạy và quản lý.
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
              <h5>Hệ thống của chúng tôi hoạt động như thế nào ?</h5>
              <p>
                Hệ thống được thiết kế để hỗ trợ giáo viên trong việc tạo và quản lý 
                giáo án, đề thi và các tài liệu giáo dục một cách hiệu quả. Với giao 
                diện thân thiện và dễ sử dụng, giáo viên có thể truy cập và sử dụng 
                các công cụ một cách nhanh chóng, giúp tối ưu hóa công việc giảng dạy.
              </p>
            </div>
          </div>
          <div className="question-item">
            <div className="question-icon">
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="question-content">
              <h5>Quy trình mở tài khoản như thế nào ?</h5>
              <p>
                Việc mở tài khoản rất đơn giản và nhanh chóng. Chỉ cần vài bước cơ bản, 
                bạn sẽ có ngay một tài khoản để truy cập vào các công cụ và tài liệu cần 
                thiết cho công việc giảng dạy của mình.
              </p>
            </div>
          </div>
          <div className="question-item">
            <div className="question-icon">
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="question-content">
              <h5>Làm thế nào để nhập liệu không giới hạn ?</h5>
              <p>
                Nền tảng của chúng tôi cho phép bạn nhập liệu một cách không giới hạn, 
                bao gồm tải lên và lưu trữ giáo án, đề thi và tài liệu tham khảo. Tất 
                cả dữ liệu được lưu trữ an toàn và dễ dàng truy cập bất kỳ lúc nào.
              </p>
            </div>
          </div>
          <div className="question-item">
            <div className="question-icon">
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className="question-content">
              <h5>Sử dụng hệ thống có an toàn không ?</h5>
              <p>
                Chúng tôi cam kết bảo mật tối đa cho tài khoản của bạn. Mọi dữ liệu 
                cá nhân và tài liệu của bạn đều được mã hóa và bảo vệ theo các tiêu 
                chuẩn bảo mật cao nhất, đảm bảo rằng bạn có thể yên tâm sử dụng hệ 
                thống mà không phải lo lắng về vấn đề bảo mật.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact">
          <div className="contact-title">
            <h5>Bạn còn điều chưa rõ? Liên hệ với chúng tôi!</h5>
          </div>
          <div className="contact-content">
            <p style={{ marginBottom: "0px" }}>
              Bắt đầu sử dụng nền tảng{" "}
              <span style={{ color: "#f97316" }}>Planbook.vn </span>  
              của chúng tôi để nhận mọi công cụ cần thiết cho việc quản lý giáo án,
            </p>
            <p style={{ marginTop: "5px", marginBottom: "40px" }}>
              tạo kết nối và nâng cao hiệu quả giảng dạy.
            </p>
          </div>
          <button className="contact-button">
            {" "}
            <FaPhoneAlt style={{ marginRight: "10px" }} />
            Liên hệ với chúng tôi
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
            Bắt đầu sử dụng nền tảng Planbook.vn của chúng tôi để nhận mọi công cụ 
            cần thiết cho việc quản lý giáo án, tạo kết nối và nâng cao hiệu quả giảng dạy.
            </p>
          </div>
          <div className="footer-links">
            <h4>Liên kết nhanh </h4>
            <ul>
              <li>
                <a href="#home">
                  {" "}
                  <IoIosArrowForward />
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#features">
                  {" "}
                  <IoIosArrowForward />
                  Giáo án
                </a>
              </li>
              <li>
                <a href="#pricing">
                  {" "}
                  <IoIosArrowForward />
                  Thời khóa biểu
                </a>
              </li>
              <li>
                <a href="#contact">
                  {" "}
                  <IoIosArrowForward />
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Theo dõi chúng tôi</h4>
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
            <h4>Liên hệ với chúng tôi</h4>
            <p>Nhà văn hóa sinh viên</p>
            <p>Email: contact@planbook.com</p>
            <p>Điện thoại: (+84) 703 742 715</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
