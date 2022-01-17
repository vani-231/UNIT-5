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
import { JobContext } from "../contexts/Jobcontext";

export const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const toast = useToast();
    const { handleToken } = useContext(JobContext);
    const navigate = useNavigate();

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
                if (res.token) {
                    handleToken(res.token);
                    navigate(-1);
                    toast({
                        title: "Login Successful",
                        status: "success",
                        duration: 2000,
                        position: "top",
                    });
                } else {
                    toast({
                        title: "Invalid Details",
                        status: "error",
                        duration: 2000,
                        position: "top",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container mt={20} rounded={50} border={"1px solid #dadada"} h={350} p={10}>
            <form onSubmit={handleSubmit}>
                <VStack gap={3}>
                    <Heading mb={3}>Login</Heading>
                    <Input onChange={handleChange} type="email" placeholder="Email" />
                    <Input
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                    />
                    <Button type="submit" w={"100%"} colorScheme={"telegram"}>
                        Submit
                    </Button>
                </VStack>
            </form>
        </Container>
    );
};