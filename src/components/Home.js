import React from "react";
import {Stack} from "react-bootstrap";
import picture from "../pictures/me.png";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div>
      <Stack direction="horizontal" gap={5}>
        <Fade big><img className="rounded-circle px-4 mt-2 p-2" width = "780" height = "640" src={picture} ></img></Fade>
        <Fade right big><div className="display-3"> Welcome to my portfolio! My name is Rahul,
          A UBC computer science student, with a passion for Web/Blockchain development.</div></Fade>
      </Stack>
    </div>


  )
}

export default Home