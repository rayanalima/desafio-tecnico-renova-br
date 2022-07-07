import React, { useEffect, useState } from "react";
import api from '../api';
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Link,
    SimpleGrid,
    chakra  } from '@chakra-ui/react';
  import Navbar from '../components/Navbar'

export default function ListComponent() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    api.get("/users/")
       .then((response) => {
         setCandidates(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");
    return (
    <>
        <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#1A202C",
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
        textAlign='center'      >
        <Stack
          direction={{
            base: "column",
          }}
          w="full"
          bg={{
            md: bg,
          }}
          shadow="lg"
        >
          {candidates.map((candidate) => {
            return (
              <Flex
                direction={{
                  base: "row",
                  md: "column",
                }}
                bg={dataColor}
              >
                <SimpleGrid
                  spacingY={2}
                  columns={{
                    base: 1,
                    md: 2,
                  }}
                  w={{
                    base: 120,
                    md: "full",
                  }}
                  textTransform="uppercase"
                  bg={bg2}
                  color={"gray.500"}
                  py={{
                    base: 1,
                    md: 3,
                  }}
                  px={{
                    base: 2,
                    md: 5,
                  }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>Name</span>
                  <span>ID</span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={2}
                  columns={{
                    base: 1,
                    md: 2,
                  }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                  textAlign='center'
                  ml={3}
                >
                  <span>{candidate.name}</span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {candidate.user_id}
                  </chakra.span>
                </SimpleGrid>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
    </>
    );
  };