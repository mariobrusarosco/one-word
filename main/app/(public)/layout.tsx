interface Props {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: Props) => {
  return (
    <div className="">
      {/* <i>under public layout</i> */}
      {children}
    </div>
  );
};

export default PublicLayout;
