import React, { useContext } from 'react';
import Log from '../components/Log';
import{UidContext} from "../components/AppContext"
import UpdateProfil from '../components/ Profil/UpdateProfil';



//le uid context permet de recuperer la valeur de notre state  si jamais c'est le cas tu 
//reste dans le state nul donc tu reste sur la page d 'acceuil et donc propositonn de sinscrire ou de se connecter
const Profil = () => {

    const uid = useContext(UidContext)


    return (
       
        <div className="profil-page">

            {uid ? (
                <UpdateProfil/>
                
                
            ) : (
                    
            
            <div className="log-container">
                <Log signin ={false} signup={true} />
                <div className="img-container">

                <img  className="arbre"  src="./img/icons/arbre.png" alt="arbre" />
                </div>
                </div>
            )}
        </div>


        
       
    )
};

export default Profil;