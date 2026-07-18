"use client";

import Image from "next/image";
import { Shuffle } from "lucide-react";
import { useRef, useState } from "react";

const photos = [
  { src: "/vinitbabu.png", alt: "Vinit kumar" },
  { src: "/v.png", alt: "Vinit kumar, mirror selfie" },
];

export function AvatarSwitcher() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSwitch = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/keystroke2.mp3");
      audioRef.current.preload = "auto";
    }

    audioRef.current.currentTime = 0;
    void audioRef.current.play().catch(() => {});

    setIndex((i) => (i + 1) % photos.length);
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      aria-label="Switch profile photo"
      className="group relative max-md:w-fit flex-1 cursor-pointer rounded-2xl  bg-neutral-300/60 p-1 transition duration-300 hover:brightness-90 dark:bg-neutral-900"
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-2xl md:h-auto md:w-full md:aspect-square">
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            fill
            sizes="(max-width: 768px) 96px, 100vw"
            alt={photo.alt}
            className={`object-cover grayscale transition-all duration-500 ease-out ${
              i === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
            }`}
          />
        ))}
      </div>
      <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full  bg-background text-neutral-500 opacity-70 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:rotate-180 dark:text-neutral-400">
        <Shuffle className="size-3" strokeWidth={2} />
      </span>
    </button>
  );
}
