import Nav from "./Nav";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  return (
    <>
      <header className="flex justify-between">
        <div className="flex items-center">
          <h1 className="mr-4">Necklace</h1>
          <div className="ml-auto">
            <p>Total Items: </p>
            <p>Total Price: </p>
            <Nav viewCart={viewCart} setViewCart={setViewCart} />
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
