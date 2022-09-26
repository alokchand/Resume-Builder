import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeData } from "../../Redux/actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  useDisclosure
} from "@chakra-ui/react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

export default function AchivementsNew({data, type ,swap, setSwap}) {
  const [newData, setNewData] = useState();


  const { isOpen, onOpen, onClose } = useDisclosure();
  var temp = useSelector((store) => store);
  const dispatch = useDispatch();
  function onSave() {
    data.push(newData);
    temp.Achievements = data;
    dispatch(initializeData(temp));
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
          <ModalHeader>Add Achievements</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="8px">Title</Text>
            <Input
              size="sm"
              value={newData?.title}
              onChange={(e) => {
                setNewData({ ...newData, title: e.target.value });
              }}
            />
            <Text mb="8px">Date</Text>
            <Input
              size="sm"
              value={newData?.date}
              onChange={(e) => {
                setNewData({ ...newData, date: e.target.value });
              }}
            />
            
            <Text mb="8px">Description</Text>
            <Textarea
              value={newData?.description}
              onChange={(e) => {
                setNewData({ ...newData, description: e.target.value });
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
