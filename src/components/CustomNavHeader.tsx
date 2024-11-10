
interface iNavHeader {
  NavHeader: string;
  NavLinks: string;
}

const CustomNavHeader = ({ NavHeader, NavLinks }: iNavHeader) => {
  return (
    <div
      className=" w-full h-72 bg-gray-500 flex flex-col items-center justify-center text-white gap-4 "
      style={{
        backgroundImage: `url("/top-background.jpg")`,
      }}
    >
      <h1 className=" text-6xl ">{NavHeader}</h1>
      <h2 className=" text-lg font-light ">{NavLinks}</h2>
    </div>
  );
};

export default CustomNavHeader;
