import React, { useEffect, useState } from "react";
import api from '../api';
import {
    Stack,
    Flex,
    Heading,
    Text,
    useColorModeValue,
    Link,
    SimpleGrid,
    chakra  } from '@chakra-ui/react';

export default function ListComponent() {
  const [candidates, setCandidates] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    api.get("/users/")
       .then((response) => {
         setCandidates(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  const a = 5

  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");
    return (
    <>
<Stack
          align={'center'}
          textAlign='center'
          spacing={{ base: 8, md: 5 }}
          py={{ base: 4, md: 10 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
                color='#95e6ad'>
                Candidatos
              </Text>
              </Heading>
              </Stack>
              </Stack>
        <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#1A202C",
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
        textAlign='center'>

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
            <Link href={'/candidate/' + candidate.user_id}>
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
              </Link>
            );
          })}
        </Stack>  
      </Flex>
    </>
    );
    console.log(userId)
  };