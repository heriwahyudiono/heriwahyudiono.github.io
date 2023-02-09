import React from "react";
import MetaTags from "react-meta-tags";
import "./Home.css";
import profilePicture from "../assets/img/heri_wahyudiono.jpg";
import WhatsApp from "../assets/icon/whatsapp.png";
import Instagram from "../assets/icon/instagram.png";
import Telegram from "../assets/icon/telegram.png";
import Checklist from "../assets/icon/checklist.png";

const Home = () => {
  return (
    <>
      <MetaTags>
        <title>Home | Heri Wahyudiono</title>
      </MetaTags>
      <div className="flex flex-col items-center mt-16">
        <img
          src={profilePicture}
          className="w-40 mt-36 mx-auto rounded-full border-4 border-blue-600 hover:scale-90 transform transition-all duration-200"
        />
        <p className="mt-8 text-center text-2xl font-bold">
          Heri Wahyudiono | Front End Developer
        </p>
        <div className="floating-animation">
          <div className="mt-8 flex justify-center">
            <a href="https://wa.me/6285609839193" className="mx-2">
              <img
                src={WhatsApp}
                className="w-8 hover:scale-125 transform transition-all duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/heri.wahyudiono"
              className="mx-2"
            >
              <img
                src={Instagram}
                className="w-8 hover:scale-125 transform transition-all duration-200"
              />
            </a>
            <a href="https://t.me/heri_wahyudiono" className="mx-2">
              <img
                src={Telegram}
                className="w-8 hover:scale-125 transform transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <div class="w-1/2 md:w-1/3 p-6">
          <h2 class="text-center font-bold text-indigo-500">
            KIRIMI SAYA PESAN
          </h2>
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="nama">
                Nama:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nama"
                type="text"
                name="nama"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                Email:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="subjek">
                Subjek:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subjek"
                type="text"
                name="subjek"
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="pesan">
                Pesan:
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pesan"
                type="text"
                name="pesan"
              />
            </div>
            <div class="flex items-center justify-center">
              <input
                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Kirim"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
