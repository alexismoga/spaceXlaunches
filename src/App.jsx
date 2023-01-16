import { useState, useEffect } from 'react'
import {Heading, Image} from '@chakra-ui/react'
import { LaunchItem } from './components/launchitem'
import * as API from './services/launches'
import logo from './assets/SpaceX-logo.svg.png'

export function App() {
  //Aqui guardaremos el array de todos los objetos llamados en la API
  const [launches, setlaunches] = useState([])

  useEffect(() => {
    API.getAllLaunches().then(setlaunches)
  }, []);

  return (
    <>
      <Image m={4} src={logo} width={300}/>

      <Heading as='h1' size='lg' m={4}>
        SpaceX Launches
      </Heading>

      <section>
        {launches.map(launch => (
         <LaunchItem key={launch.name} {...launch}/>  
        ))}
      </section>
    </>
  )
}

