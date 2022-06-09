import { createContext, useState , useEffect} from "react";
import { getUserRequest } from '../../Controllers/apimedis'



interface AppContextProps{
    user?: object 
    saveUser?: (usuario) => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){

    const [user, setUser] = useState({})

    useEffect(()=>{
        getdata()
    },[])

    function saveUser(usuario){
        setUser(usuario)
    }

    async function getdata(){
        try{
            const user_id = localStorage.getItem('user_id')
            const response = await getUserRequest(user_id)   
            saveUser(response.data)
            
        }catch(erro){

        }
        
    }

    return(
        <div>
            <AppContext.Provider value={{
                user,
                saveUser
            }}>
                {props.children}
            </AppContext.Provider>
        </div>
    )

}

export default AppContext
