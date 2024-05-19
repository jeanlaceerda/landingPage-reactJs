import React, { useState } from 'react';
import { Box, Text, Flex, Input, IconButton, Button, Link, Heading } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaClock } from 'react-icons/fa';


const cursos = [
  {
    description: "Curso / Tecnologia",
    name: "Curso de Desenvolvimento Web com React",
    duration: "60h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    description: "Curso / Tecnologia",
    name: "Curso de Desenvolvimento Web Front-End",
    duration: "40h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    description: "Curso / Mercado e Vendas",
    name: "Curso de Marketing Digital: primeiros passos",
    duration: "30h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    description: "Curso / Tecnologia",
    name: "Introdução à Inteligência Artificial",
    duration: "50h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    description: "Curso / Tecnologia",
    name: "Curso de Gestão de Projetos para analistas",
    duration: "35h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    description: "Curso / Mercado e Vendas",
    name: "Curso de Fotografia Digital para iniciantes",
    duration: "25h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    description: "Curso / Empreendedorismo",
    name: "Fundamentos básicos para a criação de negócios",
    duration: "60h",
    imagem: "../../assets/jean.jpeg"
  },
];

const Carrossel = () => {
  const [hover, setHover] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === cursos.length - 1) {
        return prevIndex;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const cursosVisiveis = [
    cursos[currentIndex % cursos.length],
    cursos[(currentIndex + 1) % cursos.length],
    cursos[(currentIndex + 2) % cursos.length],
    cursos[(currentIndex + 3) % cursos.length],
    cursos[(currentIndex + 4) % cursos.length],
  ];

  return (
    <Box>
      <Heading as="h1" fontSize="40px" fontWeight="bold" textAlign="center" color="#333">
        Cursos online mais acessados
      </Heading>

      <Flex alignItems="center" justifyContent="center" mt="20px">
        <IconButton
          aria-label="Anterior"
          icon={<ChevronLeftIcon />}
          onClick={handlePrev}
          ml={12}
        />
        <Flex justifyContent="center" alignItems="center" flexGrow={1}>
          {cursosVisiveis.map((curso, index) => (
            <Box
              key={index}
              position="relative"
              bg="gray.100"
              p={4}
              borderRadius="lg"
              width="290px"
              height="335px"
              mr={4}
              mb={4}
            >
              <img src="../../../assets/jean.jpeg" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <Text mt={3} mb={7} color="#5c8fd6" fontSize="14px" fontFamily="Lato, sans-serif, Arial, helvetica">{curso.description}</Text>
              <Text
      fontSize="xl"
      color="#394d60"
      cursor="pointer"
      mt={3}
      fontFamily="Arial, Helvetica, sans-serif"
      style={{ textDecoration: hover ? 'underline' : 'none' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {curso.name}
    </Text>
              <Flex alignItems="center" mt={7}>
                <FaClock size={13} style={{ marginRight: '7px', color: '#2e66b7' }} />
                <Text style={{ color: '#617385', fontSize: '13px', fontFamily: 'Lato, sans-serif, Arial, helvetica' }}>Duração {curso.duration}</Text>
              </Flex>
              <Box position="absolute" bottom={7} >
                <Button colorScheme="blue">Inscreva-se Já</Button>
              </Box>
            </Box>
          ))}
          {/* <Button colorScheme="blue">Inscreva-se Já</Button> */}
        </Flex>
        <IconButton
          aria-label="Próximo"
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          mr={12}
        />
      </Flex>
      <Flex justify="center" mt="10px">
        <Button w="162px" h="52px" color="white" bgColor="#2e66b7">Exibir mais</Button>
      </Flex>
    </Box>
  );
};

export default Carrossel;
