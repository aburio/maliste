import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { QueryData } from "@supabase/supabase-js";
import { useLoaderData } from "react-router-dom";
import { supabase } from "../../lib/api/supabase";
import { Tables } from "../../lib/api/supabase.types";

const listWithDetails = supabase
  .from("lists")
  .select(`id, name, created_at, updated_at, users_profiles(name), elements(*)`)
  .single();
type ListWithDetails = QueryData<typeof listWithDetails>;

function List({ items }: { items: Tables<"elements">[] }) {
  const listItems = items?.map((item: Tables<"elements">) => (
    <Card key={item.id}>
      <CardBody
        cursor="pointer"
        onClick={() => window.open(item.external_url, "_blank")}
      >
        <Image src={String(item.img_url)} />
        <Stack direction={["column"]} mt={3} spacing={2}>
          <Heading size="sm" noOfLines={1}>
            {item.name}
          </Heading>
          <Text>{item.price + " €"}</Text>
          <Text align="justify">{item.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  ));

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} my={5} spacing={5}>
      {listItems}
    </SimpleGrid>
  );
}

export async function loader({ params }: any) {
  const { data, error } = await supabase
    .from("lists")
    .select(
      `id, name, created_at, updated_at, users_profiles(name), elements(*)`
    )
    .eq(`id`, String(params.listId))
    .maybeSingle();

  console.log(error);

  if (error) {
    return error;
  }
  console.log(data);
  return data;
}

export function ListDetailsPage() {
  const list = useLoaderData() as ListWithDetails;
  const items = list.elements;

  return (
    <>
      <Stack>
        <Flex
          minWidth="max-content"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading>{list.name}</Heading>
        </Flex>
        <Box>
          <Text>
            par {list.users_profiles?.name}, dernière mise à jour le{" "}
            {new Date(String(list.updated_at))?.toLocaleDateString()} à{" "}
            {new Date(String(list.updated_at))?.toLocaleTimeString()}
          </Text>
        </Box>
        <List items={items} />
      </Stack>
    </>
  );
}
