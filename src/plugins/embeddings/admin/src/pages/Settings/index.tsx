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
import { useTranslate } from "../../utils/use-translate";

const Settings = () => {
  const { translate } = useTranslate();
  return (
    <Layout>
      <Box background="neutral100">
        <BaseHeaderLayout
          title={translate("settings.header.title")}
          subtitle={translate("settings.header.subtitle")}
          as="h2"
        />
      </Box>
      <ContentLayout paddin={4}>
        <Flex direction="column" alignItems="left">
          <Box paddingBottom={4}>
            <Typography>
              {translate("settings.text1", {
                link: (
                  <Link
                    href="https://trychroma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {translate("settings.text1.link.name")}
                  </Link>
                ),
              })}
            </Typography>
          </Box>
          <Box paddingBottom={4}>
            <LinkButton
              as={NavLink}
              to="/content-manager/collectionType/plugin::embeddings.chroma-db-connection?page=1&pageSize=10&sort=name:ASC"
            >
              {translate("settings.button.add-instance.name")}
            </LinkButton>
          </Box>
          <Box>
            <LinkButton
              as={NavLink}
              to="/content-manager/collectionType/plugin::embeddings.chroma-db-connection?page=1&pageSize=10&sort=name:ASC"
            >
              {translate("settings.button.list-instances.name")}
            </LinkButton>
          </Box>
        </Flex>
      </ContentLayout>
    </Layout>
  );
};

export default Settings;
