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
          <div className={`${styles.header} flex items-center gap-[20px]`}>
            <Image
              src="/img.jpg"
              alt="img"
              width={480}
              height={640}
              priority
              className="w-[75px] scale h-[75px] sm:w-[105px] sm:h-[105px] md:w-[125px] md:h-[125px] lg:w-[150px] lg:h-[150px] object-cover object-top rounded-full"
            />
            <div>
              <p className="text-xl sm:text-2xl xl:text-3xl xl:mb-[8px] font-bold mt-[5px] mb-[6px]">
                Ivan Kovdryn
              </p>
              <p>English level: Pre-Intermediate</p>
              <p>Living in Ivano-Frankivsk, Ukraine</p>
              <p>22 y.o.</p>
            </div>
          </div>
          <p className="text-md sm:text-lg bg-[#e6e6e6] py-2 px-10 rounded-md self-center md:text-xl xl:text-2xl text-center font-extrabold text-black">
            Full Stack (React, Node.js) developer
          </p>
          <div>
            <div className={styles.title}>Experience with some projects:</div>
            <div className="flex flex-col gap-[15px]">
              <div>
                <p className="font-semibold">
                  &nbsp;-&nbsp; Corporate website with admin panel
                </p>
                <Link
                  className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400"
                  href="http://vanyaaa.cloud/"
                >
                  http://vanyaaa.cloud/
                </Link>
                <p className="text-[#e6e6e6]">
                  HTML5, CSS3, SASS/SCSS, JavaScript, EJS, Node.js, Express.js,
                  Docker, mongoose, MongoDB, Git...
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  &nbsp;-&nbsp; Online shop (without back-end & not adaptive)
                </p>
                <Link
                  className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400"
                  href="https://nextjs-app-shop.vercel.app/"
                >
                  https://nextjs-app-shop.vercel.app/
                </Link>
                <p className="text-[#e6e6e6]">
                  Next.js, React, CSS, SCSS, Tailwind CSS, Redux Toolkit, Axios,
                  Custom API, Git...
                </p>
              </div>
              <div>
                <p className="font-semibold">
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
                <p className="font-semibold">
                  &nbsp;-&nbsp; Website layouts, also on GitHub
                </p>
                <Link
                  className="ml-[-2px] w-fit p-[2px] transition-all text-blue-200 hover:text-blue-400"
                  href="https://github.com/IvanKovdryn?tab=repositories"
                >
                  https://github.com/IvanKovdryn?tab=repositories
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.rightcol} flex flex-col justify-center min-h-[100vh] gap-[25px] sm:gap-[30px]`}
        >
          <div className={styles.skillswrapper}>
            <div className={styles.title}>Skills</div>
            <ul>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; React, Next.js
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; React Native, Expo
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Redux Toolkit
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; JavaScript, TypeScript
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; HTML, CSS, SASS, Tailwind CSS
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Git
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Docker
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Postman
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Wordpress
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Node.js, Express.js, Nest.js
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; Prisma, Mongoose
              </li>
              <li className={styles.skillsli}>
                <span>-</span> &nbsp; MongoDB, PostgreSQL, MySQL
              </li>
            </ul>
          </div>
          <div className={styles.contactwrapper}>
            <div className={styles.title}>Contact info</div>
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
