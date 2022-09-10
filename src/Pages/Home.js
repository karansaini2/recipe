import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
const Home = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/addrecipe");
  };
  const submit_again = () => {
    navigate("/addedrecipe");
  };
  return (
    <div className="home">
      <Navbar />

      <div></div>
    </div>
  );
};

export default Home;
