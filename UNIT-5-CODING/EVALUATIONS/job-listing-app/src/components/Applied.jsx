import {
    Badge,
    Box,
    Divider,
    Heading,
    SimpleGrid,
    Text,
    Table,
    Tbody,
    Tr,
    Td,
    Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
const handleClick = () => {
    return (
        alert("APPLIED SUCCESSFULLY")
    )
}
export const Applied = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = () => {
        fetch(`http://localhost:3001/job`)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })

    };

    return (
        <>
            <Heading my={4} textAlign={"center"}>
                Applied jobs
            </Heading>

            <SimpleGrid columns={3} maxW={"900px"} m={"20px auto"}>
                {data.map(
                    ({
                        id,
                        companyName,
                        jobTitle,
                        salaryRange,
                        jobDescription,
                        location,
                        jobType,
                    }) => (
                        <Box
                            border={"1px solid #ebebeb"}
                            rounded={5}
                            p={4}
                            key={id}
                            boxShadow={"lg"}
                        >
                            <Text ms={5} fontSize={40} mb={2}>
                                <b>{companyName}</b>
                            </Text>
                            <Divider />
                            <Table >
                                <Tbody>
                                    <Tr>
                                        <Td>Job Title</Td>
                                        <Td>{jobTitle}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Salary Range</Td>
                                        <Td>₹ {salaryRange}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Job Description</Td>
                                        <Td>{jobDescription}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Job Title </Td>
                                        <Td>{location}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <Badge
                                m={"15px 25px"}
                                colorScheme={jobType === "Remote" ? "green" : "purple"}
                            >
                                {jobType}
                            </Badge>{" "}
                            <br />
                            <Button size="md" colorScheme={"green"} w={"100%"} onClick={handleClick} >
                                Applied

                            </Button>
                        </Box>
                    )
                )}
            </SimpleGrid>
        </>
    );
};