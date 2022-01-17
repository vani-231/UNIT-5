import { Button, Center, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "../contexts/Jobcontext";


export const Navbar = () => {
    const { token, handleToken } = useContext(JobContext);

    return (
        <>
            <Flex h={"80px"}>
                <Center>
                    <Button mr={2} colorScheme={"orange"} style={{ marginLeft: "500px", border: "2px solid green" }}>
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button mr={2} colorScheme={"orange"}>
                        <Link to={"/"}>Applied</Link>
                    </Button>

                    <Button mr={2} colorScheme={"orange"}>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </Button>
                    <Link to={"/login"}>
                        <Button
                            onClick={
                                !token
                                    ? () => {
                                        handleToken("");
                                    }
                                    : undefined
                            }
                            mr={4}
                            colorScheme={"orange"}
                        >
                            {!token ? "Login" : "Logout"}
                        </Button>
                    </Link>
                </Center>
            </Flex>
        </>
    );
};




/*
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
*/