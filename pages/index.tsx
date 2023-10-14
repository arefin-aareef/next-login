import { Flex, Heading, Input, Button, Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { IoSunny, IoMoon } from 'react-icons/io5'

const Home = () => {

  const {toggleColorMode} = useColorMode()

  const formBackGround = useColorModeValue("gray.100", "gray.700")

  const [toggle, setToggle] = useState(false)

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        direction={"column"}
        background={formBackGround}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={6}>Log in</Heading>
        <Input
          placeHolder="Your email"
          variant={"flushed"}
          mb={3}
          type={"email"}
        ></Input>
        <Input
          placeHolder="Your password"
          variant={"flushed"}
          mb={6}
          type={"password"}
        ></Input>
        <Button colorScheme={"teal"}>Log in</Button>

        <Box
          position={"absolute"}
          top={2}
          right={2}
          courser={"pointer"}
          onClick={() => {
            toggleColorMode()
            setToggle(!toggle)
          }}
        >
          {
            toggle ? <IoMoon /> : <IoSunny />
          }
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
