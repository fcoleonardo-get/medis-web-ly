import { useContext } from "react";
import AppContext from "../context/ApiContext";

const useAppData = () => useContext(AppContext)

export default useAppData