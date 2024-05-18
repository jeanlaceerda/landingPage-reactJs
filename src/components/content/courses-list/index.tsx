import React, { useState } from 'react';
import { Box, Text, Flex, Input, IconButton, Button, Link, Heading } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaClock } from 'react-icons/fa';

const cursos = [
  {
    descricao: "Curso / Tecnologia",
    nome: "Curso de Desenvolvimento Web com React",
    duracao: "60h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    descricao: "Curso / Tecnologia",
    nome: "Curso de Desenvolvimento Web Front-End",
    duracao: "40h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    descricao: "Curso / Mercado e Vendas",
    nome: "Curso de Marketing Digital: primeiros passos",
    duracao: "30h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    descricao: "Curso / Tecnologia",
    nome: "Introdução à Inteligência Artificial",
    duracao: "50h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    descricao: "Curso / Tecnologia",
    nome: "Curso de Gestão de Projetos para analistas",
    duracao: "35h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    descricao: "Curso / Tecnologia",
    nome: "Curso de Fotografia Digital para iniciantes",
    duracao: "25h",
    imagem: "../../assets/jean.jpeg"
  },
  {
    descricao: "Curso / Empreendedorismo",
    nome: "Fundamentos básicos para a criação de negócios",
    duracao: "60h",
    imagem: "../../assets/jean.jpeg"
  },
];

const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex; // Mantém o índice atual se estiver na primeira posição
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === cursos.length - 1) {
        return prevIndex; // Mantém o índice atual se estiver na última posição
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
          ml={12} // Espaçamento à direita
        />
        <Flex justifyContent="center" alignItems="center" flexGrow={1}>
          {cursosVisiveis.map((curso, index) => (
            <Box
              key={index}
              position="relative" // Adicionando posição relativa ao card
              bg="gray.100"
              p={4}
              borderRadius="lg"
              width="290px"
              height="335px"
              mr={4} // Espaçamento entre os cursos
              mb={4} // Espaçamento abaixo dos cursos
            >
              <img src="../../../assets/jean.jpeg" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
              <Text mt={3} mb={7}>{curso.descricao}</Text>
              <Text fontSize="xl" color="#394d60" cursor="pointer" mt={3} fontFamily="Arial, Helvetica, sans-serif">{curso.nome}</Text>
              <Flex alignItems="center" mt={7}>
                <FaClock size={13} style={{ marginRight: '7px', color: '#2e66b7' }} /> {/* Ícone de tempo */}
                <Text style={{ color: '#617385', fontSize: '13px', fontFamily: 'Lato, sans-serif, Arial, helvetica' }}>Duração {curso.duracao}</Text>
              </Flex>
              <Box position="absolute" bottom={7} > {/* Posicionando o botão no canto inferior direito */}
                <Button colorScheme="blue">Inscreva-se Já</Button>
              </Box>
            </Box>
          ))}
        </Flex>
        <IconButton
          aria-label="Próximo"
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          mr={12} // Espaçamento à esquerda
        />
      </Flex>
    </Box>
  );
};

export default Carrossel;
