import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Text,
  SimpleGrid,
  GridItem,
  Heading,
  FormControl,
  FormLabel,
  Divider,
  Button,
  Link,
} from '@chakra-ui/react';
import apiUser from '../apiUser';
import Moment from 'moment';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function CandidateDetails({ data }) {
  const [candidate, setCandidate] = useState([]);
  const findHref = window.location.href;
  const userId = findHref.substring(findHref.length - 1, findHref.length);

  useEffect(() => {
    apiUser
      .get(`/${userId}`)
      .then(response => {
        setCandidate(response.data);
      })
      .catch(err => {
        console.error('ops! ocorreu um erro : ' + err);
      });
  });

  return (
    <>
      {candidate.map(person => {
        return (
          <>
            <Stack
              align={'center'}
              textAlign="center"
              spacing={{ base: 8, md: 5 }}
              direction={{ base: 'column', md: 'row' }}
              _dark={{
                bg: '#1A202C',
              }}
              pb={5}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                >
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
                      bg: 'green.100',
                      zIndex: -1,
                    }}
                  >
                    Ficha de Candidato
                  </Text>
                </Heading>
              </Stack>
            </Stack>
            <Flex
              _dark={{
                bg: '#1A202C',
              }}
              justifyContent="center"
            >
              <Box
                backgroundColor="#EDF2F7"
                _dark={{
                  bg: '#1A202C',
                }}
                p={10}
              >
                <Divider
                  visibility={{
                    base: 'hidden',
                    sm: 'visible',
                  }}
                />

                <Box
                  mt={[10, 0]}
                  align="center"
                  alignItems="center"
                  alignContent="center"
                  alignSelf="center"
                  textAlign="center"
                >
                  <SimpleGrid>
                    <GridItem
                      mt={[5, null, 0]}
                      colSpan={{
                        md: 2,
                      }}
                    >
                      <Stack
                        px={4}
                        py={5}
                        p={[null, 6]}
                        bg="white"
                        _dark={{
                          bg: '#141517',
                        }}
                        spacing={6}
                      >
                        <SimpleGrid columns={12} spacing={6}>
                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="name"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Nome
                            </FormLabel>
                            <Text>{person.name}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="age"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Idade
                            </FormLabel>
                            <Text>{person.age}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="genre"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Gênero
                            </FormLabel>
                            <Text>{person.genre}</Text>
                          </FormControl>
                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="sexual_orientation"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Orientação Sexual
                            </FormLabel>
                            <Text>{person.sexual_orientation}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="race"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Raça
                            </FormLabel>
                            <Text>{person.race}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="city"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Cidade
                            </FormLabel>
                            <Text>{person.city}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="state"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Estado
                            </FormLabel>
                            <Text>{person.state}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="email_address"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Formação Acadêmica
                            </FormLabel>
                            <Text>{person.education}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="income"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Renda
                            </FormLabel>
                            <Text>{person.income}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Id de Usuário
                            </FormLabel>
                            <Text>{person.user_id}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Data de inscrição
                            </FormLabel>
                            <Text>
                              {Moment(person.created_at).format(
                                'YYYY-MM-DD HH:mm'
                              )}
                            </Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.7 00"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                            >
                              Última Atualização
                            </FormLabel>
                            <Text>
                              {Moment(person.created_at).format(
                                'YYYY-MM-DD HH:mm'
                              )}
                            </Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              textAlign="center"
                              pl={[14, 16]}
                            >
                              <FaFacebook />
                            </FormLabel>
                            <Text>{person.facebook}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="email_address"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              pl={[14, 16]}
                            >
                              <FaInstagram />
                            </FormLabel>
                            <Text>{person.instagram}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              htmlFor="email_address"
                              fontSize="sm"
                              fontWeight="md"
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              pl={[14, 16]}
                            >
                              <FaTwitter />
                            </FormLabel>
                            <Text>{person.twitter}</Text>
                          </FormControl>

                          <FormControl as={GridItem} colSpan={[6, 3]}>
                            <FormLabel
                              color="gray.700"
                              _dark={{
                                color: 'gray.50',
                              }}
                              pl={[14, 16]}
                            >
                              <FaYoutube />
                            </FormLabel>
                            <Text>{person.youtube}</Text>
                          </FormControl>
                        </SimpleGrid>
                      </Stack>
                    </GridItem>
                  </SimpleGrid>
                </Box>
              </Box>
            </Flex>
          </>
        );
      })}
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: 'column', sm: 'row' }}
        alignSelf="center"
        justifyContent="center"
        pt={5}
      >
        <Link href="/candidates/list">
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'#38E069'}
            bg={'#38E069'}
            _hover={{ bg: '#38E069' }}
          >
            Lista de Candidatos
          </Button>
        </Link>
      </Stack>
    </>
  );
}
