import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     
      <header className="mb-20 pt-5">
        <h1 className=" font-mono text-4xl text-center">LEGENDARY-CARS</h1>
      </header>
      <main className="mb-7">
      <div className="flex gap-40 font-medium text-2xl justify-center mb-9 ">
      <Link to="/">
        <h2 className="">Mercedes Benz</h2>
      </Link>
      <Link to="/Cls">
        <h2 className="">Audi
        </h2>
      </Link>
      <Link to="/nike">
        <h2 className="">DODGE
        </h2>
      </Link>
      <Link to="/about">
        <h2 className="">BMW</h2>
      </Link>
      </div>
        <Outlet />
      </main>
      <footer className="mt-40">
      </footer>
    </>
  );
};

export default Layout;
