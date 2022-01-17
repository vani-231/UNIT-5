import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const initState = {
        companyName: "",
        jobTitle: "",
        salaryRange: "",
        jobDescription: "",
        location: "",
        jobType: "",
    };

    const [form, setForm] = useState(initState);
    const navigate = useNavigate();


    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/job`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                navigate("/");
            })
    };

    return (
        <>
            <Container
                mt={5}
                rounded={50}
                border={"2px solid #c0bdbd"}
                p={10}
            >
                <form onSubmit={handleSubmit}>
                    <VStack rounded={20}>
                        <Heading color={"gray"}>ADD NEW JOB</Heading>
                        <Input
                            onChange={handleChange}
                            name="companyName"
                            type="text"
                            placeholder="Company name"
                        />
                        <Input
                            onChange={handleChange}
                            name="jobTitle"
                            type="text"
                            placeholder="Job title"
                        />
                        <Input
                            onChange={handleChange}
                            name="salaryRange"
                            type="text"
                            placeholder="salary range"
                        />
                        <Input
                            onChange={handleChange}
                            name="jobDescription"
                            type="text"
                            placeholder="Job description"
                        />
                        <Input
                            onChange={handleChange}
                            name="location"
                            type="text"
                            placeholder="Location"
                        />
                        <Input
                            onChange={handleChange}
                            name="jobType "
                            type="text"
                            placeholder="Job type "
                        />
                        <Button w={"100%"} colorScheme={"orange"} type="submit">
                            Submit
                        </Button>
                    </VStack>
                </form>
            </Container>
        </>
    );
};