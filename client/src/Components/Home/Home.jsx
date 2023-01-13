import React, { useState } from "react";
//import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatchs, handleSetPage } from "../../redux/actions/GET";

import MatchCards from "./MatchCards/MatchCards";
import Nav from "../Nav/Nav";
import Searchbar from "./Searchbar/Searchbar";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";
import MyAccount from "../MyAccount/MyAccount";

import styles from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatchs());
  });

  return (
    <div className={styles.home}>
      <Nav />
      <div className={styles.content}>
        <div className={styles.menu}>
          <Searchbar />
          <Filter />
        </div>
        <MatchCards />
      </div>
      <Footer />
    </div>
  );
}
