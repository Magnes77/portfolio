import React from "react";

import {
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaTwitter,
  FaFacebook,
  FaEnvelope
} from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Contact
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out or explore my social media.
        </p>

        <div className="flex justify-center gap-8 text-2xl flex-wrap">

          <a href="mailto:wiktorcieplinski01@gmail.com">
            <FaEnvelope />
          </a>

          <a href="https://github.com/magnes77" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.instagram.com/victor_cieplinski_/" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://x.com/W_Magnescs" target="_blank">
            <FaTwitter />
          </a>

          <a href="https://www.facebook.com/Wiktor.Cieplinskii/?locale=pl_PL" target="_blank">
            <FaFacebook />
          </a>

        </div>

        <p className="text-gray-500 mt-10">
          Discord: magnes9920
        </p>

      </div>

    </section>
  )
}

export default Contact