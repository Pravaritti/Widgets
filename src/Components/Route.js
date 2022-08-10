//no need to import react as we are not using any JSX

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
