import {
  XCircleIcon,
  TrendingUpIcon,
  TagIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import millify from "millify";
import Image from "next/image";
import { useRouter } from "next/router";
import GenreBadge from "../../components/GenreBadge";

export default function DetailID({ detail }) {
  console.log(detail)

  const smallingNum = (num) => {
    let noDot = Number((num.toString()).split('.').join(''));
    return millify(noDot);
  }

  const router = useRouter();
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-sm sm:text-lg font-bold mr-2">{detail.title}</h2>
        <XCircleIcon className="h-9 cursor-pointer" onClick={() => router.back()} />
      </div>
      <Image className="rounded-md" src={`${BASE_URL}${detail.backdrop_path}`} layout="responsive" width={1920} height={1080} />
      <div className="flex mt-3 flex-wrap">
        {(detail.genres).map((genre) => (<GenreBadge key={genre.id} genre={genre.name} />))}
      </div>
      <div className="flex items-center mt-2">
        <TagIcon className="h-5 mr-1" />
        {detail.adult ? "Adult" : "All Age"} |
        <TrendingUpIcon className="h-5 mx-1" />
        {smallingNum(detail.popularity)} |
        <ThumbUpIcon className="h-5 mx-1" />
        {detail.vote_average}
      </div>
      <h2 className="mt-2 sm:text-lg font-bold">{detail.original_title}</h2>
      {detail.tagline ? <p>{detail.tagline} - Tagline</p> : null}
      <div className="mt-2 text-sm">
        <p className="font-bold sm:text-lg">Overview</p>
        {detail.overview}
      </div>
    </div>
  )
}

export async function getServerSideProps(contenxt) {
  const id = contenxt.query.id;
  const API_KEY = process.env.API_KEY;

  const detail = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`).then((res) => res.json());

  return {
    props: {
      detail: detail,
    },
  };
} 
