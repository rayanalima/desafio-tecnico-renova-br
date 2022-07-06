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
  } from '@chakra-ui/react';
import HomeComponent from '../components/Home';
  import Navbar from '../components/Navbar'


  export default function Home() {
    const GET_USER = 'https://desenvolvimento.renovabr.org/api/v1/users/';
console.log(GET_USER)
    return (
    <>
    <Navbar />
    <HomeComponent />
    </>
    );
  };