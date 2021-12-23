const GenreBadge = ({ genre }) => {
  return (
    <div className="bg-teal-50 rounded-full py-1 px-3 mr-2 text-slate-900 text-xs sm:text-base sm:font-bold">
      {genre}
    </div>
  );
};

export default GenreBadge;
