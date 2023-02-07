import React from "react";
import profilePicture from "../assets/img/heri_wahyudiono.jpg";
import WhatsApp from "../assets/icon/whatsapp.png";
import Instagram from "../assets/icon/instagram.png";
import Telegram from "../assets/icon/telegram.png";

const Home = () => {
  return (
    <div className="mt-16">
      <img
        src={profilePicture}
        className="w-40 mt-36 mx-auto rounded-full border-4 border-blue-600 hover:scale-90"
      />
      <h1 className="mt-8 text-center font-bold text-2xl">
        Heri Wahyudiono | Front End Developer
      </h1>
      <p className="text-center">
        Saya sudah belajar coding selama satu tahun dan saya ingin mendalami
        Front End
      </p>
      <div className="flex gap-x-4 mt-8 justify-center">
        <a href="https://wa.me/6285609839193">
          <img src={WhatsApp} className="w-8 hover:scale-125" />
        </a>
        <a href="https://www.instagram.com/heri.wahyudiono">
          <img src={Instagram} className="w-8 hover:scale-125" />
        </a>
        <a href="https://telegram.org/heri_wahyudiono">
          <img src={Telegram} className="w-8 hover:scale-125" />
        </a>
      </div>
    </div>
  );
};

export default Home;
