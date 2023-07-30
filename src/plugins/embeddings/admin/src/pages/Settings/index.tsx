/*
 *
 * Settings
 *
 */
import { NavLink } from "react-router-dom";
import React from "react";
import {
  ContentLayout,
  Layout,
  Box,
  Link,
  Typography,
  LinkButton,
  Flex,
  BaseHeaderLayout,
} from "@strapi/design-system";
import { Plus, CarretDown, Pencil, Trash } from "@strapi/icons";

// const DatabaseTable = () => {
//   const ROW_COUNT = 6;
//   const COL_COUNT = 10;
//   const entry = {
//     name: "localhost",
//     description: "Local running chroma",
//     url: "http://localhost:8000",
//   };
//   const entries = [];
//   for (let i = 0; i < 5; i++) {
//     entries.push({
//       ...entry,
//       id: i,
//     });
//   }
//   return (
//     <Box padding={8} background="neutral100">
//       <Table
//         colCount={COL_COUNT}
//         rowCount={ROW_COUNT}
//         footer={
//           <TFooter icon={<Plus />}>
//             Add another field to this collection type
//           </TFooter>
//         }
//       >
//         <Thead>
//           <Tr>
//             <Th
//               action={
//                 <IconButton label="Sort on ID" icon={<CarretDown />} noBorder />
//               }
//             >
//               <Typography variant="sigma">ID</Typography>
//             </Th>
//             <Th
//               action={
//                 <IconButton
//                   label="Sort on Name"
//                   icon={<CarretDown />}
//                   noBorder
//                 />
//               }
//             >
//               <Typography variant="sigma">Name</Typography>
//             </Th>
//             <Th>
//               <Typography variant="sigma">Description</Typography>
//             </Th>
//             <Th>
//               <Typography variant="sigma">Url</Typography>
//             </Th>
//             <Th>
//               <VisuallyHidden>Actions</VisuallyHidden>
//             </Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {entries.map((entry) => (
//             <Tr key={entry.id}>
//               <Td>
//                 <Typography textColor="neutral800">{entry.id}</Typography>
//               </Td>
//               <Td>
//                 <Typography textColor="neutral800">{entry.name}</Typography>
//               </Td>
//               <Td>
//                 <Typography textColor="neutral800">
//                   {entry.description}
//                 </Typography>
//               </Td>
//               <Td>
//                 <Typography textColor="neutral800">
//                   <a href={entry.url}>{entry.url}</a>
//                 </Typography>
//               </Td>
//               <Td>
//                 <Flex>
//                   <IconButton
//                     onClick={() => console.log("edit")}
//                     label="Edit"
//                     noBorder
//                     icon={<Pencil />}
//                   />
//                   <Box paddingLeft={1}>
//                     <IconButton
//                       onClick={() => console.log("delete")}
//                       label="Delete"
//                       noBorder
//                       icon={<Trash />}
//                     />
//                   </Box>
//                 </Flex>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

const Settings = () => {
  return (
    <Layout>
      <Box background="neutral100">
        <BaseHeaderLayout
          title="Chroma DB Setup"
          subtitle="Embeddings require a chroma database."
          as="h2"
        />
      </Box>
      <ContentLayout paddin={4}>
        <Flex direction="column" alignItems="left">
          <Box paddingBottom={4}>
            <Typography>
              The embeddings plugin stores embeddings in a{" "}
              <Link href="https://trychroma.com" target="_blank">
                chroma
              </Link>{" "}
              database. To start using embeddings, you need to configure at
              least one chroma instance.
            </Typography>
          </Box>
          <Box paddingBottom={4}>
            <LinkButton
              as={NavLink}
              to="/content-manager/collectionType/plugin::embeddings.chroma-db-connection?page=1&pageSize=10&sort=name:ASC"
            >
              Configure a new chroma db instance
            </LinkButton>
          </Box>
          <Box>
            <LinkButton
              as={NavLink}
              to="/content-manager/collectionType/plugin::embeddings.chroma-db-connection?page=1&pageSize=10&sort=name:ASC"
            >
              List configured chroma db instances
            </LinkButton>
          </Box>
        </Flex>
      </ContentLayout>
    </Layout>
  );
};

export default Settings;
