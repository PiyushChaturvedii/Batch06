import { Link } from "react-router-dom";
import Backup  from "../assets/images/logo.jpg";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: Backup;
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-base" src={image} alt="" />
      </Link>
      <Link to={`/movie/${id}`}>
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading dark:text-white">
          {original_title}
        </h5>
      </Link>
      <p className="mb-6 text-body text-gray-900 dark:text-gray-400">
        {overview}
      </p>
      <Link
        to="#"
        className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none dark:text-gray-400 "
      >
        Read more
        <svg
          className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </Link>
    </div>
  );
};
