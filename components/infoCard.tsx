import { useEffect, useState } from "react";
import Image from "next/image";
export default function InfoCard() {
  const [time, setTime] = useState(" ");

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("es-ES", {
        timeZone: "Europe/Madrid",
        hour12: false,
      });
      setTime(now);
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

 return (
  <div className="flex flex-col gap-4 w-full max-w-4xl px-4">
    <span className="text-purple-500 text-5xl sm:text-3xl font-bold drop-shadow-[0_0_8px_rgba(147,51,234,0.9)]">
      Software & Hardware Developer, Maker and HAM Radio Enthusiast
    </span>

    <span className="text-gray-400 text-4xl sm:text-2xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] flex items-center">
      Madrid - Spain
      <Image
        src="https://twemoji.maxcdn.com/v/latest/svg/1f1ea-1f1f8.svg"
        width={24}
        height={24}
        className="inline-block w-6 h-6 ml-2 align-text-bottom"
        alt="ES flag"
      />

      <span className="ml-2">- {time}</span>
    </span>

    <span className="text-white text-3xl sm:text-2xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] leading-snug">
      Hey there! I&apos;m Ángel &quot;ThePangel&quot; Fuentes Fernández, a 17-year-old who loves
      coding, electronics, and building creative projects.
    </span>

    <span className="text-white text-3xl sm:text-2xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] leading-snug">
      I&apos;ve worked on mini satellites, off-grid communications, software tools,
      Android apps, and websites. I enjoy tackling challenges and learning new
      technologies.
    </span>

    <span className="text-white text-3xl sm:text-2xl font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] leading-snug">
      In my free time, I experiment with microcontrollers, HAM radio,
      and other projects. I love learning about interesting things :p
      I also really love aviation, airsoft and military stuff, videogames and anime and the all glorius Gundam franchise
    </span>
  </div>
);


}
