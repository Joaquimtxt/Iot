import { useContext } from "react";
import {ThemeContext} from "../contexts/ThemeContextInstance.js";

export function useTheme() {
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error("useTheme precisa de um ThemeProvider");
    }
    
      return context;
}
