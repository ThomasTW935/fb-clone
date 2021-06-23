import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";
import Contacts from "../components/home/contacts";
import { useAuth } from "../context/AuthContext";

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
