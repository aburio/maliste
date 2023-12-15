import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Stack alignItems="center" justifyContent="center" my={10}>
      <Box>
        <Heading>Oops !</Heading>
      </Box>
      <Box>
        <Text>Sorry, an unexpected error has occurred.</Text>
      </Box>
      <Box>
        <Text>
          <i>{error.statusText || error.message}</i>
        </Text>
      </Box>
    </Stack>
  );
}
