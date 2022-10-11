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
      <VStack w="full"  style={{paddingTop:'40px'}}>
        <SimpleGrid columns={3} columnGap={10} w="full">
          <VStack>
            <GridItem>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="data:image/jpeg;base64,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"
              />
            </GridItem>
          </VStack>
          <VStack marginRight={"300px"}>
            <GridItem>
              <Text fontSize="xl">Name:</Text>
              {temp?.bio ? (
                <Text mr={"100px"} fontSize="ll">
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
            <GridItem >
              <Text fontSize="xl" marginRight={"140px"} >Email:</Text>

              {temp?.bio ? (
                <Text fontSize="l">{temp.bio.email}</Text>
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
            <GridItem boxSize="300px">
              <Text fontSize="xl">Short-Bio:</Text>
              {temp?.bio ? (
                <Text fontSize="l">{temp.bio.shortBio}</Text>
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
