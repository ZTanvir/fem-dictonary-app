type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto flex h-full w-full flex-1 flex-col px-4 py-6 md:max-w-6xl">
      {children}
    </div>
  );
}
