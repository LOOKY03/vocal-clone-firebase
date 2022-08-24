import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="max-w-4xl mx-auto">
      <div className="flex justify-evenly ">
        <FacebookIcon className="ml-56 text-4xl" />
        <InstagramIcon className="text-4xl" />
        <TwitterIcon className="mr-56 text-4xl" />
      </div>
      <div className="max-w-xl mx-auto mt-5">
        <ul className="flex justify-around space-x-4">
          <li>Explore</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Support</li>
        </ul>
        <p className="text-center mt-5 mb-10">
          © 2022 Creatd, Inc . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
