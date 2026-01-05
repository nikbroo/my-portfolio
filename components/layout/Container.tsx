const Container = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div className={`w-full flex justify-center px-4 md:px-5`}>
      <div className={`w-full py-3 ${className}`} id={id}>
        {children}
      </div>
    </div>
  );
};

export default Container;
