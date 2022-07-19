import "./App.scss";
import useAuthListener from "./hooks/use-auth-listener";
import { PrivateRoutes, PublicRoutes } from "./routes/routes";

function App() {
  const { user }=useAuthListener();
  return user ? <PrivateRoutes/>: <PublicRoutes/> ;
}

export default App;
