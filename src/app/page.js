import Image from "next/image";
import Link from "next/link";
import {
  BsTelephoneFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import styles from "./Global.module.css";

export default function Home() {
  const contacts = [
    {
      link: "https://www.linkedin.com/in/ivan-kovdryn-b22425279/",
      icon: <BsLinkedin className={styles.icon} />,
      name: "LinkedIn",
    },
    {
      link: "https://www.instagram.com/ivan.kovdryn/",
      icon: <BsInstagram className={styles.icon} />,
      name: "Instagram",
    },
    {
      link: "https://www.facebook.com/profile.php?id=100019765590610",
      icon: <FaFacebookF className={styles.icon} />,
      name: "Facebook",
    },
    {
      link: "https://github.com/IvanKovdryn",
      icon: <BsGithub className={styles.icon} />,
      name: "GitHub",
    },
    {
      link: "https://t.me/ivan_kovdryn",
      icon: <FaTelegramPlane className={styles.icon} />,
      name: "@ivan_kovdryn",
    },
    {
      link: "https://mail.google.com/mail/u/1/#inbox",
      icon: <IoMdMail className={styles.icon} />,
      name: "ivankovdrin@gmail.com",
    },
    {
      link: "tel:+380967135003",
      icon: <BsTelephoneFill className={styles.icon} />,
      name: "+380 96 713 50 03",
    },
  ];
  return (
    <div className="mx-auto max-w-[1240px]">
      <main className={styles.main}>
        <div
          className={`${styles.leftcol} relative flex flex-col justify-center gap-[20px] sm:gap-[25px] min-h-[100vh]`}
        >
          <div
            className={`${styles.leftcolbg} absolute right-0 top-0 w-[1500px] h-full`}
          ></div>
          <div className="flex items-center gap-[20px]">
            <Image
              src="/image-m2.jpg"
              alt="img"
              width={480}
              height={640}
              priority
              className="w-[75px] scale h-[75px] sm:w-[115px] sm:h-[115px] md:w-[150px] md:h-[150px] lg:w-[175px] lg:h-[175px] object-cover object-top rounded-full"
            />
            <div>
              <p className="text-xl sm:text-2xl xl:text-3xl xl:mb-[8px] font-bold mt-[5px] mb-[4px]">
                Ivan Kovdryn
              </p>
              <p>English level: Pre-Intermediate</p>
              <p>Living in Ivano-Frankivsk, Ukraine</p>
              <p>22 y.o.</p>
            </div>
          </div>
          <p className="text-md sm:text-lg self-center md:text-xl xl:text-2xl text-center font-bold text-blue-300">
            Full Stack (React, Node.js) developer
          </p>
          <div>
            <div className={styles.title}>Project experience</div>
            <span className={styles.line}></span>
            <div className="flex flex-col gap-[15px]">
              <div>
                <p>&nbsp;-&nbsp; Corporate website with admin panel</p>
                <Link
                  className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400"
                  href="http://vanyaaa.cloud/"
                >
                  http://vanyaaa.cloud/
                </Link>
                <p className="text-xs sm:text-sm">
                  HTML5, CSS3, SASS/SCSS, JavaScript, EJS, Node.js, Express.js,
                  Docker, MongoDB, Git...
                </p>
              </div>
              <div>
                <p>&nbsp;-&nbsp; Online shop</p>
                <Link
                  className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400"
                  href="https://nextjs-app-shop.vercel.app/"
                >
                  https://nextjs-app-shop.vercel.app/
                </Link>
                <p className="text-sm">
                  Next.js, React, CSS, SCSS, Tailwind CSS, Redux Toolkit, Axios,
                  Custom API, Git...
                </p>
              </div>
              <div>
                <p>
                  &nbsp;-&nbsp; Other projects on React, Next.js, JavaScript
                </p>
                <Link
                  className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400"
                  href="https://github.com/IvanKovdryn?tab=repositories"
                >
                  https://github.com/IvanKovdryn?tab=repositories
                </Link>
              </div>
              <div>
                <p>&nbsp;-&nbsp; Website layouts, also on GitHub</p>
                <Link
                  className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400"
                  href="https://github.com/IvanKovdryn?tab=repositories"
                >
                  https://github.com/IvanKovdryn?tab=repositories
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.title}>Academic background</div>
            <span className={styles.line}></span>
            <div className="flex flex-col gap-[15px]">
              <div>
                <p>
                  - I am studying for a master's degree at the Law Institute of
                  Vasyl Stefanyk Precarpathian National University
                </p>
                <span className="text-gray-300">Ivano-Frankivsk</span>
              </div>
              <div>
                <p>
                  - Bachelor's degree at the Faculty of Physical Education and
                  Sports Vasyl Stefanyk Precarpathian National University
                </p>
                <span className="text-gray-300">Ivano-Frankivsk</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.rightcol} flex flex-col justify-center min-h-[100vh] gap-[25px] sm:gap-[30px]`}
        >
          <div className={styles.skillswrapper}>
            <div className={styles.title}>Skills</div>
            <span className={styles.line}></span>
            <ul>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; React
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Next.js
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; React Native, Expo
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; JavaScript
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; TypeScript
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Redux Toolkit
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Node.js
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Express.js
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; EJS
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Git
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; MongoDB
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Docker
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; HTML5, CSS3, SASS/SCSS, Tailwind CSS
              </li>
            </ul>
          </div>
          <div className={styles.contactwrapper}>
            <div className={styles.title}>Contact info</div>
            <span className={styles.line}></span>
            <ul className={`${styles.contactlist} flex flex-col`}>
              {contacts.map((contact) =>
                contact.name === "+380 96 713 50 03" ? (
                  <a
                    className={`${styles.contactli} l-[-2px] w-fit p-[2px] transition-all text-dark hover:text-blue-700 flex gap-[15px] items-center`}
                    href="tel:+380967135003"
                  >
                    <span>{contact.icon}</span>
                    +380 96 713 50 03
                  </a>
                ) : (
                  <Link
                    key={contact.name}
                    className={`${styles.contactli} ml-[-2px] w-fit p-[2px] transition-all text-dark hover:text-blue-700 flex gap-[15px] items-center`}
                    href={`${contact.link}`}
                  >
                    <span>{contact.icon}</span>
                    {contact.name}
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
