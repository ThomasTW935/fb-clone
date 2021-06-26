import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import Contacts from "../components/home/Contacts";

export default function Home() {
  
  return (
    <main className="home">
      {/* Left */}
      <section></section>
      {/* Middle */}
      {/* Right */}
      <Contacts/>
     
    </main>
  );
}
