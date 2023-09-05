import {BsBusFront} from 'react-icons/bs'

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg md:px-9 px-2 fixed z-10 ">
        <a className="btn btn-ghost normal-case text-xl">BusGo<BsBusFront/> </a>
      </div>
    </div>
  );
};
export default Nav;
