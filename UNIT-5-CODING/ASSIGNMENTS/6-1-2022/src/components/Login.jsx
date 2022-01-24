import {
    Button,
    Container,
    Heading,
    Input,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const { handleToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const toast = useToast();

    const handleChange = ({ target: { type, value } }) => {
        setForm({ ...form, [type]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                if (res.token) {
                    handleToken(res.token);
                    navigate(-1);
                    toast({
                        title: "Login Successful",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: "Wrong Details",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container
            border={"1px solid #e0e0e0"}
            h={"350px"}
            mt={20}
            p={10}
            rounded={10}
        >
            <form onSubmit={handleSubmit}>
                <VStack gap={3}>
                    <Heading my={4}>Login</Heading>
                    <Input onChange={handleChange} type="email" placeholder="Email" />
                    <Input
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                    />
                    <Button type="submit" w={"100%"} colorScheme={"red"}>
                        Submit
                    </Button>
                </VStack>
            </form>
        </Container>
    );
};