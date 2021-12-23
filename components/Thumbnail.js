import Image from "next/image";
import { useRouter } from "next/router";

import {
  ThumbUpIcon,
  CalendarIcon,
} from "@heroicons/react/outline";

const Thumbnail = ({ result }) => {
  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50" onClick={() => router.push(`/detail/${result.id}`)}>
      <Image
        className="rounded-md"
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path}`}
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <div className="truncate max-w-md">
          {result.overview}
        </div>
        <div className="truncate mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title}
        </div>
        <div className="flex items-center opacity-0 group-hover:opacity-100">
          <CalendarIcon className="h-5 mr-1" />
          {result.release_date}
          <ThumbUpIcon className="h-5 mr-1 ml-2" />
          {result.vote_average}
        </div></div>
    </div>
  );
};

export default Thumbnail;
