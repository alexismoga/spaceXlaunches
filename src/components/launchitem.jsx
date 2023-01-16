import dayjs from "dayjs"
import { Box, Flex, Text, Spacer, Tag, Button} from '@chakra-ui/react'
import { FcCalendar } from "react-icons/fc";
import "dayjs/locale/es"

export function LaunchItem(launch) {
    return (
        <Box     
        borderRadius='lg' 
        bg='gray.100' 
        p={4} 
        m={4}
        >
          <Flex>
            <Text fontSize="xl"> 
              Mission <strong>{launch.name}</strong>
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.success ? "green" : "red"}>
              {launch.success ? "Success" : "Failure"}
            </Tag>
          </Flex> 
          <Flex align="center">
            <FcCalendar /> 
            <Text fontSize="sm" ml={2}>
              {dayjs(launch.date_utc)
                .locale("es")
                .format("D MMMM, YYYY")}
            </Text>
          </Flex>
        <Button size='xs' colorScheme='pink'>
          View details</Button>
        </Box>
    )
}