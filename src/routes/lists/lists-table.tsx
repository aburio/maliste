import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";
import { Supabase } from "../../lib/api/supabase";

export async function loader() {
  const { data, error } = await Supabase.from("lists").select(
    `id, name, created_at, updated_at, users_profiles(name)`
  );

  if (error) {
    console.error(error);
    return error;
  }

  console.log(data);
  return data;
}

export function ListsTable() {
  const params = useParams();

  if (!params.listId) {
    return (
      <>
        <Stack>
          <Flex
            minWidth="max-content"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading>Mes listes</Heading>
          </Flex>
          <Box>
            <Text></Text>
          </Box>
        </Stack>
      </>
    );
  } else {
    return <Outlet />;
  }
}
