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
  import LogoIcon from '../images/logo.png'


  export default function HomeComponent() {

    return (
    <>
      <Container maxW={'7xl'} >
        <Stack
          align={'center'}
          textAlign='center'
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
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
                  bg: '#39bd5f',
                  zIndex: -1,
                }}>
                Visualizar candidatos do
              </Text>
              <br />
              <Text as={'span'} color={'#39bd5f'}>
                Processo seletivo
              </Text>
              <br />
              <Image mt={2} ml={390} src={LogoIcon} h={150}/>
            </Heading>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
              alignSelf='center'>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'#38E069'}
                bg={'#38E069'}
                _hover={{ bg: '#38E069' }}>
                Ver participantes
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      </>
    );
  }