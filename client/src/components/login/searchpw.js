import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config/contansts";
import axios from "axios";

function Searchpw() {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const contact_number = e.target.contact_number.value;
    axios
      .get(`${API_URL}/user/findPW`, {
        params: { email, name, contact_number },
      })
      .then((response) => {
        console.log("로그인 성공");
        console.log(response.data);
        if (response.data) {
          alert(`회원님의 비밀번호는 "${response.data.password}" 입니다.`);
        } else {
          alert(`입력하신 정보가 올바르지 않습니다.`);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("조회된 데이터가 없습니다.");
      });
  };
  return (
    <div className="login_container">
      <div className="login_section" style={{ width: "40vw" }}>
        <h1>비밀번호 찾기</h1>
        <fieldset className="login_form">
          <form onSubmit={login} className="login_form">
            <div className="login_input">
              <div className="login_id_input">
                <label>이메일</label>
                <input
                  id="email"
                  type="text"
                  placeholder="이메일 입력"
                  autocomplete="off"
                ></input>
              </div>
              <div className="login_id_input">
                <label>이름</label>
                <input
                  id="name"
                  type="text"
                  placeholder="사용자 이름(실명) 입력"
                  autocomplete="off"
                ></input>
              </div>
              <div className="login_pwd_input">
                <label>전화번호</label>
                <input
                  id="contact_number"
                  type="number"
                  placeholder="전화번호 입력"
                  autocomplete="off"
                ></input>
              </div>
            </div>
            <div className="login_btn" style={{ paddingTop: "3vw" }}>
              <button type="submit">비밀번호 찾기</button>
            </div>
          </form>
        </fieldset>
        <ol className="login_nav">
          <Link to="/searchid">
            <li>이메일 찾기</li>
          </Link>

          <Link to="/register">
            <li className="login_nav_second">회원가입</li>
          </Link>

          <Link to="/login">
            <li>로그인</li>
          </Link>
        </ol>
      </div>
    </div>
  );
}

export default Searchpw;
