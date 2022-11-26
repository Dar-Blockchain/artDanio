/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Button, Flex, Grid, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
import Card from "components/card/Card.js";
import { Text } from "@chakra-ui/react";
// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React, { useState } from "react";
import Project from "./components/Project";

export default function Overview() {
  const [modalState, setModalState] = useState(1)
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Evaluating NFT Value</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx='auto'>
          <Flex direction='column' justifyContent={'center'} alignItems='center' mx="auto">
            {modalState === 1 ? (
              <>
                <Spinner />
                <Text>Please wait</Text>
              </>
            ):(
              <>
              <Text>the floor price is<Text color='blue.600' fontSize='2xl'>
              $450
            </Text></Text>
            <Text>you can get <Text color='blue.600' fontSize='2xl'>
              $250
            </Text></Text>
          
              </>
            )}
            
          
            </Flex>  
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => {
              setModalState(3)
              onClose()
            }} >
              Accept
            </Button>
            <Button variant='ghost' onClick={onClose} >Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    <Flex justifyContent={'space-between'} pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Card mb={{ base: "0px", "2xl": "20px" }}>
            <Text
              color={textColorPrimary}
              fontWeight='bold'
              fontSize='2xl'
              mt='10px'
              mb='4px'>
              All collaterals.
            </Text>
            <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
              Here you can find more details about your collaterals.
            </Text>
            { modalState === 3 ? (""):(
            <Project
                action={() => {onOpen()
                  let x = setTimeout(() => {setModalState(2)}, 39899999999999000);
                  return () => {clearTimeout(x)}
                  }}
              boxShadow={cardShadow}
              mb='20px'
              image={Project1}
              ranking='1QS8Z'
              link='#'
              title='CLONE'
            />)
            }
                  <Project
                  action={() => {onOpen()
                    let x = setTimeout(() => {setModalState(2)}, 39899999999999000);
                    return () => {clearTimeout(x)}
                    }}
                  boxShadow={cardShadow}
                  mb='20px'
                  image={Project2}
                  ranking='2QSDD'
                  link='#'
                  title='AZUKI'
                />
            
            

            <Project
            action={() => {onOpen()
              let x = setTimeout(() => {setModalState(2)}, 39899999999999000);
              return () => {clearTimeout(x)}
              }}
            boxShadow={cardShadow}
              image={Project3}
              ranking='3QSDK5'
              link='#'
              title='CLONE'
            />
          </Card>
        <General
          minH='365px'
          pe='20px'
          w="50%"
          ml='5'
        />
    </Flex>
    </>
  );
}
