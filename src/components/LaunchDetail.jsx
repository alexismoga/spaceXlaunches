import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Avatar, Box, Button, Collapse, Flex, Spacer, Spinner, Tag, Text, useDisclosure} from "@chakra-ui/react";
import rocket from '../assets/cohete.png'
import * as API from '../services/launches'

export function LaunchDetail(){
    const [launch, setLaunch] = useState({})
    const {launchId} = useParams()
    const { isOpen, onToggle } = useDisclosure()

    useEffect(() => {
        API.getLauchById(launchId).then(setLaunch).catch(console.log)
    }, [launchId]);

    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
          {!launch ? (
            <div>
                Loading... <Spinner color='pink.300' />
            </div>
          ) : (
            <>
              <Flex>
              <Avatar name='Rocket' src={rocket} />
                <Text p={2} fontSize="2xl">
                  Mission <strong>{launch.name}</strong>
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.success ? "green" : "red"}>
                  {launch.success ? "Success" : "Failure"}
                </Tag>
              </Flex>
              <Button onClick={onToggle} size='xs' colorScheme='pink'>
                Show me more
              </Button>
                <Collapse direction='bottom' in={isOpen} animateOpacity>
                    <Box
                        p='40px'
                        color='white'
                        mt='4'
                        bg='teal.500'
                        rounded='md'
                        shadow='md'
                        d="flex"
                        >
                        <Text p={2} fontSize="2xl">
                            {launch.details}
                        </Text>
                        
                    </Box>
                </Collapse>
              </>
      )}
      </Box>
    );
}