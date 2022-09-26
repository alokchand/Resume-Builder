import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateWork} from "../../Redux/actions"
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
import { Box, Button, Input, Text } from "@chakra-ui/react";

export default function ExperienceAddnew({ isOpen, onOpen, onClose, w, swap, setSwap, data }) {
const dispatch = useDispatch();
const [newData, setNewData] = useState(w);
var temp = useSelector((store)=>store)
function onSave(){
  dispatch(updateWork(data, newData, w, temp));
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
        <ModalHeader>Edit Experience</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="8px">Role</Text>
          <Input size="sm" value={newData?.role}
           onChange={(e)=>{
            setNewData({...newData, role: e.target.value})
          }}  
          />
          <Text mb="8px">Company</Text>
          <Input size="sm" value={newData?.company}
           onChange={(e)=>{
            setNewData({...newData, company: e.target.value})
          }}  
          />
          <Box flexDirection="row" justifyContent="flexStart">
            <Box float="left">
              <Text mb="8px">Start date</Text>
              <Input
              value={newData?.startDate}
                size="md"
                width="185px"
                heigh="47px"
                onChange={(e)=>{
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
                onChange={(e)=>{
                  setNewData({...newData, endDate: e.target.value})
                }}  
              />
            </Box>
          </Box>
          <br />
          <br />
          <br />
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
