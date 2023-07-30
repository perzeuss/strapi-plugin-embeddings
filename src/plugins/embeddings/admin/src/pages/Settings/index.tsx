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
