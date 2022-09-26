import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchData } from "./Redux/actions";
function App() {
  const dispatch = useDispatch();
  var data = [
    {
      bio: { name: "", email: "", shortBio: "", picture: "" },
      education: [],
      work: [],
      Achievements: [],
    },
  ];
  dispatch(fetchData(data));
  return (
    <ChakraProvider>
      <div className="App">
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
