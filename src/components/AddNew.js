import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

export default function AchivementsNew({ data, type, swap, setSwap }) {
  const [newData, setNewData] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  var temp = useSelector((store) => store);
  const dispatch = useDispatch();
  function onSave() {

    data.push(newData);
    if (type === "education") temp.education = data;
    if (type === "work") temp.work = data;
    if (type === "Achievements") temp.Achievements = data;
    dispatch(fetchData(temp));
    setNewData({});
    setSwap(!swap);
    onClose();
  }
  return (
    <Box width="800px">
      <Button
        colorScheme="white"
        width="100%"
        border="2px"
        borderColor="black"
        color={"black"}
        onClick={onOpen}
      >
        Add new
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        padding="40px"
        gap="24px"
        position="absolute"
        width="640px"
        height="661px"
        left="436px"
        top="40px"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add {type}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {type === "education" && (
              <>
                <Text mb="8px">Institute</Text>
                <Input
                  size="sm"
                  value={newData?.institute}
                  onChange={(e) => {
                    setNewData({...newData, institute: e.target.value})
                  }}
                />

                <Text mb="8px">Degree</Text>
                <Input
                  size="sm"
                  value={newData?.degree}
                  onChange={(e) => {
                    setNewData({...newData, degree: e.target.value})

                  }}
                />
              </>
            )}

            {type === "work" && (
              <>
                <Text mb="8px">Role</Text>
                <Input
                  size="sm"
                  value={newData?.role}
                  onChange={(e) => {

                    setNewData({...newData, role: e.target.value})
                  }}
                />

                <Text mb="8px">Company</Text>
                <Input
                  size="sm"
                  value={newData?.company}
                  onChange={(e) => {
                    setNewData({...newData, company: e.target.value})
                  }}
                />
              </>
            )}

            {type === "Achievements" && (
              <>
                <Text mb="8px">Title</Text>
                <Input
                  size="sm"
                  value={newData?.title}
                  onChange={(e) => {
                    setNewData({...newData, title: e.target.value})
                  }}
                />
                <Text mb="8px">Date</Text>
                <Input
                  size="sm"
                  value={newData?.date}
                  onChange={(e) => {
                    setNewData({...newData, date: e.target.value})
                  }}
                />
              </>
            )}

            {type === "Achievements" ||
              (type === "education" && (
                <>
                  <Box flexDirection="row" justifyContent="flexStart">
                    <Box float="left">
                      <Text mb="8px">Start date</Text>
                      <Input
                        value={newData?.startDate}
                        size="md"
                        width="185px"
                        heigh="47px"
                        onChange={(e) => {
                          setNewData({...newData, startDate: e.target.value})
                        }}
                      />
                    </Box>

                    <Box float="right">
                      <Text mb="8px">End date</Text>
                      <Input
                        value={newData?.endDate}
                        size="md"
                        width="180px"
                        heigh="47px"
                        onChange={(e) => {
                          setNewData({...newData, endDate: e.target.value})
                        }}
                      />
                    </Box>
                  </Box>
                  <br />
                  <br />
                  <br />
                </>
              ))}

            <Text mb="8px">Description</Text>
            <Textarea
              value={newData?.description}
              onChange={(e) => {
                setNewData({...newData, description: e.target.value})
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onSave}>
              Save
            </Button>
            <Button
              colorScheme="white"
              border="1px"
              borderColor="black"
              color={"black"}
              onClick={onOpen}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
