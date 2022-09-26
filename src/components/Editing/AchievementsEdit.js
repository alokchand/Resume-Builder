import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateAchievements} from "../../Redux/actions"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { Button, Input, Text } from "@chakra-ui/react";

export default function AchievementsAddnew({ isOpen, onOpen, onClose, award, swap, setSwap, data }) {
const dispatch = useDispatch();
const [newData, setNewData] = useState(award);
var temp = useSelector((store)=>store)
function onSave(){
  dispatch(updateAchievements(data, newData, award, temp));
  setSwap(!swap);
  onClose()
}

  return (
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
        <ModalHeader>Edit Achievements</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="8px">Title</Text>
          <Input size="sm" value={newData?.title}
           onChange={(e)=>{
            setNewData({...newData, title: e.target.value})
          }}  
          />
          <Text mb="8px">Date</Text>
          <Input size="sm" value={newData?.date}
           onChange={(e)=>{
            setNewData({...newData, date: e.target.value})
          }}  
          />
          <Text mb="8px">Description</Text>
          <Textarea value={newData?.description}
          onChange={(e)=>{
            setNewData({...newData, description: e.target.value})
          }} 
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onSave}

          >
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


  );
}
