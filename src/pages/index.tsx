import { Titillium_Web as Font } from "next/font/google";
import Head from "next/head";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaPhone } from "react-icons/fa";

const font = Font({ weight: "400", subsets: ["latin"] });
// Possible Fonts
// Ubuntu
//

export default function Home() {
  return (
    <>
      <Head>
        <title>Kade Allen</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IconContext.Provider value={{ className: "text-4xl" }}>
        <main // bg-gradient-to-br from-[#060b19] to-[#060b19]
          className={`${font.className} align-center from-vulcan-950 to-vulcan-700 grid h-screen grid-cols-1 justify-center bg-gradient-to-br text-white md:grid-cols-2`}
        >
          <div className="m-auto text-2xl">
            <h3 className="ml-10">Hi, I'm</h3>
            <h1 className="text-9xl">Kade Allen</h1>
            <h3 className="ml-10">
              a <b className="text-vulcan-200">developer</b> in Wellington, New
              Zealand.
            </h3>
            <div className="links-container my-10 grid grid-cols-3 justify-items-center">
              <a href="www.github.com/kadeallen123">
                <FaGithub />
              </a>
              <a href="mailto:kadeallenprofessional@gmail.com">
                <MdEmail />
              </a>
              <a href="tel:027 404 8738">
                <FaPhone className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="m-auto">Right Side</div>
        </main>
      </IconContext.Provider>
    </>
  );
}
