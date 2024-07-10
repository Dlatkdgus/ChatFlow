import React from "react";
import styles from "../styles/Mainpage.module.css";
import Chat from "./Chat";

function Mainpage() {
  return (
    <div className={styles.chat_page_container}>
      <div className={styles.chat_container}>
        <div className={styles.chat_title_text}>
          <div className={styles.all}>챗플로우</div>
          <div className={styles.chat_subtitle_text}>
          <div className={styles.all}>스마트한 대화의 시작</div>
        </div>
        </div>
        <div className={styles.chat_list_container}>
          <div className={styles.chat_list_box}>
            <div className={styles.chat_bot_images} />
            <div className={styles.chat_list_box_text}>소연이</div>
          </div>
        </div>
      </div>
      <div className={styles.chat_main_container}>
        <div className={styles.chat_title_container}></div>
        <Chat />
      </div>
    </div>
  );
}

export default Mainpage;
