import { Flex, Heading } from "@chakra-ui/react";

export const Home = () => {
    return (
        <>
            <Flex justify={"center"} mt={20}>
                <Heading>Welcome to Home Page</Heading>
            </Flex>
            <br /><br />
            <Heading>
                "email" - "eve.holt@reqres.in" "password" - "cityslicka"
            </Heading>
        </>
    );
};