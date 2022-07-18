import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { deleteCountry, getAllCountries } from "../Redux/action";
import { Link as RouterLink } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [sortBy, setSortBy] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteCountry(id));
  };

  // dispatch(getAllCountries());

  useEffect(() => {
    if (countries.length === 0) {
      let getParams = {
        params: {
          _sort: sortBy && "population",
          _order: sortBy,
        },
      };
      dispatch(getAllCountries(getParams));
    } else {
      dispatch(getAllCountries());
    }
  }, []);

  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup onChange={(e) => setSortBy(e)}>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {countries.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.country}</Td>
                  <Td>{item.city}</Td>
                  <Td>{item.population}</Td>
                  <Td>
                    <RouterLink to={`/country/${item.id}`}>
                      <button
                        style={{
                          border: "1px solid black",
                          padding: "3px 8px",
                          fontSize: "1rem",
                          borderRadius: "5px",
                        }}
                      >
                        EDIT
                      </button>
                    </RouterLink>
                  </Td>
                  <Td>
                    <button
                      style={{
                        border: "1px solid black",
                        padding: "3px 8px",
                        fontSize: "1rem",
                        borderRadius: "5px",
                      }}
                      onClick={() => handleDelete(item.id)}
                    >
                      DELETE
                    </button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
