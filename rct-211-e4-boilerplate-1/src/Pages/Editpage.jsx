import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCountries, updateCountry } from "../Redux/action";

export const Editpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [currentCountry, setCurrentCountry] = useState({});
  const [newCapital, setNewCapital] = useState("");
  const [newPopulation, setNewPopulation] = useState(0);
  const navigate = useNavigate();

  const handleUpdate = () => {
    dispatch(
      updateCountry(currentCountry.id, {
        city: newCapital,
        population: newPopulation,
      })
    );
    navigate("/");
  };

  useEffect(() => {
    if (countries.length == 0) {
      dispatch(getAllCountries());
    }
  }, []);

  useEffect(() => {
    let tempCountry = countries.find((item) => item.id === Number(id));
    tempCountry && setCurrentCountry(tempCountry);
  }, []);

  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input
          data-cy="capital-city"
          value={newCapital}
          onChange={(e) => setNewCapital(e.target.value)}
        />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input
          data-cy="population"
          value={newPopulation}
          onChange={(e) => setNewPopulation(e.target.value)}
        />
      </Box>
      <Button data-cy="update-button" onClick={() => handleUpdate()}>
        Update
      </Button>
    </Box>
  );
};

export default Editpage;
