import React from "react";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Main = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <h1>Main</h1>
      <Footer />
    </section>
  );
};
export default Main;
