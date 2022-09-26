import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { fetchData } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AddNew from "./AddNew";
import {
  SimpleGrid,
  VStack,
  Image,
  Textarea,
  GridItem,
  Text,
} from "@chakra-ui/react";
import DisplayAll from "./DisplayAll";

export default function Home() {
  const [swap, setSwap] = useState(true);
  const [bio, setBio] = useState();
  var temp = useSelector((store) => store);
  var myObject;
  myObject = useSelector((store) => store);
  const dispatch = useDispatch();
  function handleFile(e) {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      dispatch(fetchData(JSON.parse(e.target.result)));
    };
  }

  var download = useSelector((store) => store);
  function onExport() {
    setSwap(!swap);
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(download)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  }
  return (
    <>
      <Box
        display={"flex"}
        mt="5px"
        h="45px"
        borderBottom="1px solid #D9D9D9"
        justifyContent={"space-around"}
      >
        <Box ml={"10px"}>
          <svg
            width="32"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.8293 4H23C25.7614 4 28 6.23858 28 9V25C28 27.7614 25.7614 30 23 30H9C6.23858 30 4 27.7614 4 25V9C4 6.23858 6.23858 4 9 4H9.17071C9.58254 2.83481 10.6938 2 12 2H20C21.3062 2 22.4175 2.83481 22.8293 4ZM9.17071 6H9C7.34315 6 6 7.34315 6 9V25C6 26.6569 7.34315 28 9 28H23C24.6569 28 26 26.6569 26 25V9C26 7.34315 24.6569 6 23 6H22.8293C22.4175 7.16519 21.3062 8 20 8H12C10.6938 8 9.58254 7.16519 9.17071 6ZM11 5C11 4.44772 11.4477 4 12 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H12C11.4477 6 11 5.55228 11 5Z"
              fill="#5050C5"
            />
          </svg>
        </Box>
        <Box
          ml={"20px"}
          top="-2.22%"
          bottom="27.78%"
          fontFamily="Avenir Next"
          fontStyle="normal"
          fontSize="20px"
          color="#5050C5"
        >
          Resume Builder
        </Box>

        <Box ml="900px">
          <Input type={"file"} onChange={(e) => handleFile(e)} />
        </Box>

        <Box>
          {" "}
          <Button colorScheme="red" variant="solid" onClick={onExport}>
            Export
          </Button>
        </Box>
      </Box>
      {/* -------------------------------------------------------------------------------------------------------------- */}
      <VStack w="full" p={10}>
        <SimpleGrid columns={3} columnGap={10} w="full">
          <VStack>
            <GridItem>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://www.toddleapp.com/wp-content/uploads/2021/09/Group-1608.png"
              />
            </GridItem>
          </VStack>
          <VStack marginRight={"300px"}>
            <GridItem>
              <Text fontSize="xl">Name</Text>
              {temp?.bio ? (
                <Text mr={"100px"} fontSize="xl">
                  {temp.bio.name}
                </Text>
              ) : (
                <Input
                  width={"400px"}
                  onChange={(e) => {
                    setBio({ ...bio, name: e.target.value });
                  }}
                  value={bio?.name}
                />
              )}
            </GridItem>
            <GridItem>
              <Text fontSize="xl">Email-ID</Text>

              {temp?.bio ? (
                <Text fontSize="xl">{temp.bio.email}</Text>
              ) : (
                <Input
                  width={"400px"}
                  onChange={(e) => {
                    setBio({ ...bio, email: e.target.value });
                  }}
                  value={bio?.email}
                />
              )}
            </GridItem>

            <GridItem>
              {temp?.bio ? (
                <>
                  <Button colorScheme="blue">Edit</Button>
                </>
              ) : (
                <>
                  <Button
                    marginRight={"350px"}
                    marginTop={"10px"}
                    colorScheme="green"
                    size="sm"
                    onClick={() => {
                      temp.bio = bio;
                      dispatch(fetchData(temp));
                      setBio({ email: "", shortBio: "", name: "" });
                      setSwap(!swap);
                    }}
                  >
                    Save
                  </Button>
                </>
              )}
            </GridItem>
          </VStack>
          <VStack marginRight={"400px"}>
            <GridItem>
              <Text fontSize="xl">Short Bio</Text>
              {temp?.bio ? (
                <Text fontSize="xl">{temp.bio.shortBio}</Text>
              ) : (
                <Textarea
                  rows={4}
                  width={"400px"}
                  onChange={(e) => {
                    setBio({ ...bio, shortBio: e.target.value });
                  }}
                  value={bio?.shortBio}
                />
              )}
            </GridItem>
          </VStack>
        </SimpleGrid>
      </VStack>
      {/* ---------------------------------------------------------------------------------------------------------------------------- */}{" "}
      <Tabs isFitted>
        <TabList>
          <Tab>Education</Tab>
          <Tab>Work Experience</Tab>
          <Tab>Achievements</Tab>
        </TabList>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          padding="21px 284px"
          gap="24px"
          position="absolute"
          width="1388px"
          height="519.98px"
          left="56px"
          background="#FFFFFF"
          borderRadius="24px"
        >
          <TabPanels>
            <TabPanel>
              {myObject?.education ? (
                <>
                  <AddNew
                    data={myObject?.education}
                    type={"education"}
                    swap={swap}
                    setSwap={setSwap}
                  />
                </>
              ) : (
                <AddNew
                  data={[]}
                  type={"education"}
                  swap={swap}
                  setSwap={setSwap}
                />
              )}

              <DisplayAll
                data={myObject?.education}
                type={"education"}
                swap={swap}
                setSwap={setSwap}
              />
            </TabPanel>
            <TabPanel>
              {myObject?.work ? (
                <>
                  <AddNew
                    data={myObject?.work}
                    type={"work"}
                    swap={swap}
                    setSwap={setSwap}
                  />
                </>
              ) : (
                <AddNew data={[]} type={"work"} swap={swap} setSwap={setSwap} />
              )}

              <DisplayAll
                data={myObject?.work}
                type={"work"}
                swap={swap}
                setSwap={setSwap}
              />
            </TabPanel>
            <TabPanel>
              {myObject?.Achievements ? (
                <>
                  <AddNew
                    data={myObject?.Achievements}
                    type={"Achievements"}
                    swap={swap}
                    setSwap={setSwap}
                  />
                </>
              ) : (
                <AddNew
                  data={[]}
                  type={"Achievements"}
                  swap={swap}
                  setSwap={setSwap}
                />
              )}

              <DisplayAll
                data={myObject?.Achievements}
                type={"Achievements"}
                swap={swap}
                setSwap={setSwap}
              />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </>
  );
}
