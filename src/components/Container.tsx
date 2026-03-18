type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto px-4 py-6 md:max-w-6xl">{children}</div>;
}
