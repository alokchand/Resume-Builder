import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux/actions";
import AchievementsEdit from "./Editing/AchievementsEdit";
import ExperienceEdit from "./Editing/ExperienceEdit";
import EducationEdit from "./Editing/EducationEdit";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function DisplayAll({ data, type, swap, setSwap }) {
  const {
    isOpen: isOpenEducationModal,
    onOpen: onOpenEducationModal,
    onClose: onCloseEducationModal,
  } = useDisclosure();
  const {
    isOpen: isOpenWorkModal,
    onOpen: onOpenWorkModal,
    onClose: onCloseWorkModal,
  } = useDisclosure();
  const {
    isOpen: isOpenAcheivementModal,
    onOpen: onOpenAcheivementModal,
    onClose: onCloseAcheivementModal,
  } = useDisclosure();

  var temp = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <Box w="800px">
      <Accordion>
        {data?.map((x,k) => (
          <>
            {" "}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {type === "education" && <>{x.institute}</>}
                    {type === "work" && <>{x.company}</>}
                    {type === "Achievements" && <>{x.title}</>}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {type === "education" && (
                  <>
                    Degree
                    <Text fontSize="sm">{x.degree}</Text>
                    Institute
                    <Text fontSize="sm">{x.institute}</Text>{" "}
                  </>
                )}
                {type === "work" && (
                  <>
                    Role
                    <Text fontSize="sm">{x.role}</Text>
                    Company
                    <Text fontSize="sm">{x.company}</Text>
                  </>
                )}
                {type === "Achievements" && (
                  <>
                    Title
                    <Text fontSize="sm">{x.title}</Text>
                    date
                    <Text fontSize="sm">{x.date}</Text>
                  </>
                )}
                {type === "education" ||
                  (type === "work" && (
                    <Box
                      display={"flex"}
                      justifyContent="space-between"
                      flexDirection={"row"}
                    >
                      <Box>start date : {x.startDate}</Box>
                      <Box>end date : {x.endDate}</Box>
                    </Box>
                  ))}
                Description
                <Text fontSize="sm">{x.description}</Text>
                <br />
                {type === "education" && (
                  <>
                    {" "}
                    <Button
                      colorScheme="white"
                      border="1px"
                      borderColor="black"
                      color={"black"}
                      onClick={onOpenEducationModal}
                    >
                      Edit
                    </Button>{" "}
                    <EducationEdit
                      isOpen={isOpenEducationModal}
                      onOpen={onOpenEducationModal}
                      onClose={onCloseEducationModal}
                      edu={data[k]}
                      swap={swap}
                      setSwap={setSwap}
                      data={data}
                    />
                    <Button
                      colorScheme="white"
                      border="1px"
                      borderColor="black"
                      color={"black"}
                      onClick={() => {
                        if (temp?.length !== 0) {
                          temp.education = temp.education.filter(
                            (y) => x.description !== y.description
                          );
                          dispatch(fetchData(temp));
                          setSwap(!swap);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </>
                )}
                {type === "work" && (
                  <>
                    {" "}
                    <Button
                      colorScheme="white"
                      border="1px"
                      borderColor="black"
                      color={"black"}
                      onClick={onOpenWorkModal}
                    >
                      Edit
                    </Button>{" "}
                    <ExperienceEdit
                      isOpen={isOpenWorkModal}
                      onOpen={onOpenWorkModal}
                      onClose={onCloseWorkModal}
                      w={data[k]}
                      swap={swap}
                      setSwap={setSwap}
                      data={data}
                    />
                    <Button
                      colorScheme="white"
                      border="1px"
                      borderColor="black"
                      color={"black"}
                      onClick={() => {
                        if (temp?.length !== 0) {
                          temp.work = temp.work.filter(
                            (y) => x.description !== y.description
                          );
                          dispatch(fetchData(temp));
                          setSwap(!swap);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </>
                )}
                {type === "Achievements" && (
                  <>
                    {" "}
                    <Button
                      colorScheme="white"
                      border="1px"
                      borderColor="black"
                      color={"black"}
                      onClick={onOpenAcheivementModal}
                    >
                      Edit
                    </Button>{" "}
                    <AchievementsEdit
                      isOpen={isOpenAcheivementModal}
                      onOpen={onOpenAcheivementModal}
                      onClose={onCloseAcheivementModal}
                      award={data[k]}
                      swap={swap}
                      setSwap={setSwap}
                      data={data}
                    />
                    <Button
                      colorScheme="white"
                      border="1px"
                      borderColor="black"
                      color={"black"}
                      onClick={() => {
                        if (temp?.length !== 0) {
                          temp.Achievements = temp.Achievements.filter(
                            (y) => x.description !== y.description
                          );
                          dispatch(fetchData(temp));
                          setSwap(!swap);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </AccordionPanel>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </Box>
  );
}
