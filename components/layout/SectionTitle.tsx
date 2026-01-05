const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-block px-5 py-2 text-sm border border-white/5 rounded-3xl text-secondary bg-background-secondary">
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
};

export default SectionTitle;
