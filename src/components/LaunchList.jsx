import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { LaunchItem } from "./LaunchItem";
import * as API from "../services/launches";

export function LaunchList(){
    //Aqui guardaremos el array de todos los objetos llamados en la API
    const [launches, setlaunches] = useState([])

    useEffect(() => {
    API.getAllLaunches().then(setlaunches)
    }, []);

    return(
        <>
        <Heading as='h1' size='lg' m={4}>
            SpaceX Launches
        </Heading>

        <section>
        {launches.map(launch => (
            <LaunchItem key={launch.name} {...launch}/>  
            ))}
        </section>
        
        </>

    );
}