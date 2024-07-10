import React from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.all}>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.left_container}>
            <div className={styles.left_title}>환영합니다!</div>
            <input
              className={styles.left_input_box}
              type="email"
              placeholder="이메일"
            />
            <input
              className={styles.left_input_box}
              type="password"
              placeholder="비밀번호"
            />
            <div className={styles.button_container}>
              <button className={styles.login_button} onClick={() => navigate("/Mainpage")}>로그인</button>
            </div>
            <div className={styles.signin_container}>
              <div className={styles.signin_text}>처음이신가요?</div>
              <div className={styles.signin_text}>(</div><div className={styles.signin_text_link}>회원가입 하러가기</div><div className={styles.signin_text}>)</div>
            </div>
          </div>
          <div className={styles.right_container}>
            <div>
              <div className={styles.right_title}>챗플로우</div>
              <div className={styles.right_subtitle}>
                내가 원하는 대화주제로 AI와 편하게 이야기 하자
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;