import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const IntroductionText = () => {
  return (
    <Box maxW="1170px" mx="auto" px="20px" mt="70px">
      <Box my="50px">
        <Heading as="h1" fontSize="40px" fontWeight="bold" textAlign="center" color="#333">
          Cursos com certificado
        </Heading>
        <Text fontSize="16px" lineHeight="1.6" color="#666" mt="30px">
          Tenha <strong>acesso a mais de 280 cursos online</strong>, para melhorar o seu currículo! Além de serem válidos em todo Brasil para: <strong>atividades complementares</strong>, provas de títulos, concursos públicos, conquistar um bom emprego e muito mais. <strong>Invista em seu futuro agora!</strong>
        </Text>
        <Text fontSize="16px" lineHeight="1.6" color="#666" mt="20px">
          Oferecemos também o certificado de conclusão, que é opcional para os cursos gratuitos, a partir de R$ 49,90. No caso dos cursos pagos, o certificado já está incluso no valor do curso. Nosso certificado é reconhecido em todo o Brasil.
        </Text>
      </Box>
    </Box>
  );
};

export default IntroductionText;
