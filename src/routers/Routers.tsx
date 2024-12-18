import AuthRouters from "./AuthRouters";
import MainRouters from "./MainRouters";

const Routers = () => {
  return 1 > 2 ? <MainRouters /> : <AuthRouters />;
};

export default Routers;
