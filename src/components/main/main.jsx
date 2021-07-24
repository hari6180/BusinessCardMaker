import React from "react";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useState } from "react";

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Hari",
      company: "KDB",
      theme: "dark",
      title: "Product manager",
      email: "devhari618@gmail.com",
      message: "go for it",
      fileName: "hari",
      fileURL: null,
    },
    {
      id: "2",
      name: "Hari",
      company: "KDB",
      theme: "light",
      title: "Product manager",
      email: "devhari618@gmail.com",
      message: "go for it",
      fileName: "hari",
      fileURL: null,
    },
    {
      id: "3",
      name: "Hari",
      company: "KDB",
      theme: "colorful",
      title: "Product manager",
      email: "devhari618@gmail.com",
      message: "go for it",
      fileName: "hari",
      fileURL: null,
    },
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};
export default Main;
