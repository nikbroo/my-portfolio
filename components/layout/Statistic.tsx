const Statistic = ({ count, title }: { count: string; title: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-3xl text-secondary font-bold">{count}</h2>
      <p className="text-gray-300 text-sm">{title}</p>
    </div>
  );
};

export default Statistic;
