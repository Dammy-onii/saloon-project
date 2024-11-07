
interface iNavHeader {
  NavHeader: string;
  NavLinks: string;
}

const CustomNavHeader = ({ NavHeader, NavLinks }: iNavHeader) => {
  return (
    <div
      className=" w-full h-72 bg-gray-500 flex flex-col items-center justify-center text-white gap-4 "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1675624965646-31252239a8a1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <h1 className=" text-6xl ">{NavHeader}</h1>
      <h2 className=" text-lg font-light ">{NavLinks}</h2>
    </div>
  );
};

export default CustomNavHeader;
