import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

function CursoSearchField() {
  return (
    <InputGroup w="880px" h="45px" >
      <Input placeholder="Digite aqui o curso desejado" borderRadius="30px" />
      <InputRightElement h="100%" children={<FaSearch />} color="gray.400" mr="5px" cursor="pointer" />
    </InputGroup>
  );
}

export default CursoSearchField;