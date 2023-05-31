import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill, BsGithub, BsInstagram } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import styles from "./Global.module.css";

export default function Home() {
  const contacts = [
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
      link: "https://t.me/",
      icon: <FaTelegramPlane className={styles.icon} />,
      name: "Telegram",
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
    <div className="mx-auto max-w-[1240px] py-[20px] px-[15px] sm:px-[20px]">
      <main className={styles.main}>
        <div className="flex flex-col gap-[20px] sm:gap-[25px]">
          <div>
            <Image
              src="/image-m.jpg"
              alt="img"
              width={480}
              height={640}
              priority
              className="w-[75px] h-[75px] sm:w-[115px] sm:h-[115px] md:w-[150px] md:h-[150px] lg:w-[175px] lg:h-[175px] object-cover object-top rounded-full"
            />
            <p className="text-xl sm:text-2xl xl:text-3xl xl:mb-0 font-bold mt-[5px] mb-[3px]">
              Ivan Kovdryn
            </p>
            <p>I'm 22</p>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-blue-300">
              Front-end (React, Next.js) developer
            </p>
          </div>
          <div>
            <div className={styles.title}>Skills</div>
            <span className={styles.line}></span>
            <ul>
              <li>- &nbsp; HTML5, CSS3, SASS/SCSS, Tailwind CSS</li>
              <li>- &nbsp; JavaScript</li>
              <li>- &nbsp; React</li>
              <li>- &nbsp; Next.js</li>
              <li>- &nbsp; Redux Toolkit</li>
              <li>- &nbsp; TypeScript</li>
              <li>- &nbsp; EJS</li>
              <li>- &nbsp; Node.js</li>
              <li>- &nbsp; Express.js</li>
              <li>- &nbsp; Git</li>
              <li>- &nbsp; Docker</li>
              <li>- &nbsp; MongoDB</li>
            </ul>
          </div>
          <div>
            <div className={styles.title}>Contact info:</div>
            <span className={styles.line}></span>
            <ul className="flex flex-col">
              {contacts.map((contact) =>
                contact.name === "+380 96 713 50 03" ? (
                  <a
                    className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400 flex gap-[15px] items-center"
                    href="tel:+380967135003"
                  >
                    <span>{contact.icon}</span>
                    +380 96 713 50 03
                  </a>
                ) : (
                  <Link
                    key={contact.name}
                    className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400 flex gap-[15px] items-center"
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
        <div className="flex flex-col gap-[25px] sm:gap-[30px]">
          <div>
            <div className={styles.title}>About me</div>
            <span className={styles.line}></span>
            <ul>
              <li>
                - Mainly Front end developer with experience in creating SPA
                using React, Next js
              </li>
              <li>- Knowledge of user interface and debugging processes</li>
              <li>
                - I usually spend my free time learning new technologies and
                improving old ones
              </li>
              <li>
                - I am looking for an opportunity to become a part of a friendly
                and professional team where I can develop my development skills
                to achieve team results.
              </li>
            </ul>
          </div>
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
      </main>
    </div>
  );
}
