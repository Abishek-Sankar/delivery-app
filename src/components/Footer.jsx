import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex justify-between border-2 px-5 py-5 items-center ">
      <div>
        <p>
          Best Eats - All right reserved &copy;-design&developed by
          abisheks.ec20@bitsathy.ac.in
        </p>
      </div>
      <div className="flex gap-2">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
