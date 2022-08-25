import React from "react";
import "./Rightbar.css";
import knetflix from "../images/knetflix.png";
import transfers from "../images/transfers.png";
import coin from "../images/coin.png";
import nft from "../images/nft.png";
import dd from "../images/dd.png";
import { Input } from "web3uikit";

const Rightbar = () => {
  const trends = [
    {
      img: knetflix,
      text: "Don´t miss your favourite K-Dramas in...",
      link: "https://netflixdecentralized.netlify.app/",
    },
    {
      img: transfers,
      text: "Send money to anyone in the world in seconds...",
      link: "https://cryptotransfers.netlify.app/",
    },
    {
      img: coin,
      text: "Investing in the cryptocurrency market is something...",
      link: "https://coinmarkethelp.netlify.app/",
    },
    {
      img: nft,
      text: "There are only 10000 in existence and 9981 remains to minted...",
      link: "https://awesomepunks.netlify.app/",
    },
    {
      img: dd,
      text: "We are core developers in the most transformative decentralized projects...",
      link: "https://www.draftdigital.org/",
    },
  ];

  return (
    <>
      <div className="rightbarContent">
        <Input
          label="Search Twitter"
          name="Search Twitter"
          prefixIcon="search"
          labelBgColor="#141d26"
        ></Input>

        <div className="rules">
          <p>This website rules under contract:</p>
          <a className="color" href="https://mumbai.polygonscan.com/address/0xc4d2652155135F7F0fdAcb2069426df39640d010" target="_blank" rel="noreferrer">
            0xc4d2652155135F7F0fdAcb2069426df39640d010
          </a>
          <br />
          <br />
          <p>
            Post your tweet and click on: <br />
            tweet button to save in web2 <br />
            Polygon button to save in web3
          </p>
        </div>

        <div className="trends">
          News For You
          {trends.map((e) => {
            return (
              <>
                <div className="trend" onClick={() => window.open(e.link)}>
                  <img src={e.img} className="trendImg" alt=""></img>
                  <div className="trendText">{e.text}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Rightbar;
