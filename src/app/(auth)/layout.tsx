const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <h1 className="w-full max-w-sm md:max-w-3xl">{children}</h1>
      </div>
    </div>
  );
};

export default layout;
