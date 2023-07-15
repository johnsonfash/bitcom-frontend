import { NavLink, Outlet } from "react-router-dom";

const Container = () => {
  return <div>
    <div className="sticky-top w-100 bg-white py-3 container">
      <NavLink to='/' className='btn btn-primary mx-3'>Polling Units</NavLink>
      <NavLink to='/lga' className='btn btn-primary mx-3'>Local Government Areas</NavLink>
    </div>
    <Outlet />
  </div>;
};

export default Container;
