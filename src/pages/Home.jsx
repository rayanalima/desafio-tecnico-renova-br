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
    return (
    <>
    <Navbar />
    <HomeComponent />
    </>
    );
  };