import { prefixPluginTranslations } from "@strapi/helper-plugin";

import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";
import getTrad from "./utils/getTrad";
const name = pluginPkg.strapi.name;

export default {
  register(app: any) {
    // Create the plugin's settings section
    app.createSettingSection(
      // created section
      {
        id: pluginId,
        intlLabel: {
          id: getTrad("Settings.section-label"),
          defaultMessage: "Embeddings",
        },
      },
      // links
      [
        {
          intlLabel: {
            id: "settings.page",
            defaultMessage: "Chroma DB",
          },
          id: "settings",
          to: `/settings/embeddings/chroma`,
          Component: async () => {
            const component = await import(
              /* webpackChunkName: "embeddings-settings-page" */ "./pages/Settings"
            );

            return component;
          },
          permissions: [],
        },
      ]
    );
    app.addMenuLink({
      to: `/plugins/${pluginId}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${pluginId}.plugin.name`,
        defaultMessage: name,
      },
      Component: async () => {
        const component = await import(
          /* webpackChunkName: "[request]" */ "./pages/App"
        );

        return component;
      },
      permissions: [
        // Uncomment to set the permissions of the plugin here
        // {
        //   action: '', // the action name should be plugin::plugin-name.actionType
        //   subject: null,
        // },
      ],
    });
    const plugin = {
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    };

    app.registerPlugin(plugin);
  },

  bootstrap(app: any) {},

  async registerTrads(app: any) {
    const { locales } = app;

    const importedTrads = await Promise.all(
      (locales as any[]).map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
