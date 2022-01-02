import React, { useEffect } from "react";
import Content from "../../components/Content";
import Header from "../../components/Header";
import useGlobalState from "../../context/useGlobalState";
import { getTodos } from "../../services/api";
import "./home.scss";

const HomeScreen = () => {
  const { globalDispatch } = useGlobalState();

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getTodos();
        globalDispatch({ type: "set_todos", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, [globalDispatch]);

  return (
    <div className="home">
      <Header />
      <Content />
    </div>
  );
};

export default HomeScreen;
