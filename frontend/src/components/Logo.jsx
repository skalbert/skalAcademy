import logo from '../assets/logo.png'; // Import the logo image

const Logo = () => {
  return (
    <div className="flex top-0 left-0 fixed p-1 z-50" >
      <img src={logo} alt="Company Logo" className="h-12 p-1 transition duration-300 hover:drop-shadow-lg
      cursor-pointer" />
    </div>
  );
};

export default Logo;
