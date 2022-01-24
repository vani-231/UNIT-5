import { Button, Center, Flex, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
    const { token, handleToken } = useContext(AuthContext);

    return (
        <>
            <Flex h={"60px"} bg={"#eeeeee"}>
                <Spacer />
                <Center>
                    <Link to={"/"}>
                        <Button me={4} colorScheme={"red"}>
                            Home
                        </Button>
                    </Link>
                    <Link to={"/dashboard"}>
                        <Button me={4} colorScheme={"red"}>
                            Dashboard
                        </Button>
                    </Link>
                    <Link to={"/dashboard/settings"}>
                        <Button me={4} colorScheme={"red"}>
                            Settings
                        </Button>
                    </Link>
                    <Link to={"/login"}>
                        <Button
                            onClick={
                                token
                                    ? () => {
                                        handleToken("");
                                    }
                                    : undefined
                            }
                            me={4}
                            colorScheme={"red"}
                        >
                            {!token ? "Login" : "Logout"}
                        </Button>
                    </Link>
                </Center>
            </Flex>
        </>
    );
};