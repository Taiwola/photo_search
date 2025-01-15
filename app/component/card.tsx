"use client";
import Image from "next/image";
type Props = {
  likes: number;
  url: string;
  profile_img: string;
  alt: string;
  username: string;
};
export default function Card({
  likes,
  profile_img,
  url,
  alt,
  username,
}: Props) {
  return (
    <div className="flex w-full items-center border flex-col border-gray-200 shadow-sm overflow-hidden rounded-lg bg-zinc-100">
      <div className="w-full relative h-52">
        <Image
          src={url}
          alt={alt}
          loading="lazy"
          width={100}
          height={100}
          className="absolute h-full w-full left-0 top-0 right-0 bottom:0 bg-transparent"
        />
        <div className="bg-white rounded-full absolute text-[11px] px-2 py-1 right-3 top-3">
          ❤️ {likes}
        </div>
      </div>
      <div className="p-5 flex items-between w-full items-center justify-between">
        <div className="size-8 rounded-full border-2 border-zinc-800 flex-shrink-0">
          <Image
            alt={username}
            src={profile_img}
            width={32}
            height={32}
            className="rounded-full bg-transparent"
          />
        </div>
        <div>
          <p className="text-sm truncate pl-2">{username}</p>
        </div>
      </div>
    </div>
  );
}
