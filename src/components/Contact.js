import React from 'react';
import {Stack} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const linkdenClick = () => {
    window.open("https://www.linkedin.com/in/rahul-nagulapally-8250a5196/");
}

const githubClick = () => {
    window.open("https://github.com/rahulnag7963");
}

const twitterClick = () => {
    window.open("https://twitter.com/Rahul7963");
}

const Contact = () => {
  return (
    <div>
        <Fade big><div className="display-1 p-3"> Find me on:</div></Fade>
        <Stack direction ="horizontal">
            <Fade right big>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="p-3" onClick={() => linkdenClick()} width="500" height="500"></img>
                <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" className="p-3" onClick={()=> githubClick()} width="500" height="500" ></img>
                <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1200px-Twitter_Bird.svg.png" className="p-3" onClick={()=> twitterClick()} width="500" height="500" ></img>
            </Fade>
        </Stack>
    </div>
  )
}

export default Contact