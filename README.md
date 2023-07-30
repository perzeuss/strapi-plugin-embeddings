### Strapi Embeddings Plugin 🚀

[![GitHub](https://img.shields.io/github/license/perzeuss/strapi-plugin-embeddings)](https://github.com/perzeuss/strapi-plugin-embeddings/blob/main/LICENSE)  [![GitHub stars](https://img.shields.io/github/stars/perzeuss/strapi-plugin-embeddings)](https://github.com/perzeuss/strapi-plugin-embeddings/stargazers)

Welcome to the Strapi Embeddings Plugin! ✨ Enhance your Strapi CMS with the power of embeddings for an exceptional content management experience. This plugin introduces new content types that can be easily configured and managed via the Strapi Content Manager, allowing you to take control of your collections, documents, and embeddings directly within Strapi.

#### Features ✨

- 🔧 Easy Configuration: Configure and manage multiple chroma instances effortlessly using the intuitive Strapi Content Manager.
- 📚 Collection Management: List, create, update, and delete chroma collections to organize your data effectively. 
- ✏️ Document Management: List, create, update, and delete documents within chroma collections.
- 🌐 Multilingual UI: Enjoy a seamless multilingual experience with support for multiple languages in the user interface.
- 🔩 Schema Customization: Tailor object metadata schemas according to your specific requirements. Define custom fields and their data types to store the information that matters to you.
- 📋 Typescript Types Generation: Generate Typescript types for the chroma collections, enabling seamless integration and type safety in your code.
- ⬆️ Document Import: Easily import documents into strapi and chroma. The plugin automatically splits the documents and generates embeddings for each section, making it easy to create embeddings without a single line of code.
- 💡 Prompt-based Embeddings: Generate powerful embeddings for your Strapi documents using prompt templates. Shape the way your content is understood and processed by AI models.
- 🔄 Automatic Embedding Synchronization: The Strapi Embeddings Plugin automatically synchronizes the embeddings when data changes in Strapi. This ensures that your embeddings stay up to date and accurately reflect any modifications or updates made to your content
- 🔍 Semantic Search: Leverage the power of semantic search to retrieve documents that closely match the meaning and context of your query, enabling you to find the most relevant information quickly.
- 🚀 Simultaneous Queries across Instances & Collections: Perform queries across multiple Chroma instances and collections simultaneously, unlocking the potential of your data.
- 🧩 MaxDistance Queries: Fine-tune your queries and retrieve only the documents that semantically match your query, even across multiple Chroma instances and collections.
- 🔒 Secure Authentication: Utilize Strapi's user authentication and permission management system to control access to your content and protect sensitive information.
- 📦 API Integration: Integrate the plugin with other systems and platforms using the extensive API capabilities provided by Strapi. Seamlessly connect your content with your preferred tools and services.

#### Development 🛠️

To develop and contribute to the Strapi Embeddings Plugin, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/perzeuss/strapi-plugin-embeddings.git
   ```

2. Install dependencies:
   ```shell
   cd strapi-plugin-embeddings
   yarn install
   ```

3. Run Strapi in development mode and watch admin changes:
   ```shell
   yarn strapi develop --watch-admin
   ```

4. Start working on the plugin and make your desired changes.

For detailed installation instructions and more, please check the [Documentation](https://github.com/perzeuss/strapi-plugin-embeddings/blob/main/docs/).


#### Contributing ❤️

We welcome and appreciate your contributions! To learn more about how you can get involved, please refer to our [Contribution Guidelines](https://github.com/perzeuss/strapi-plugin-embeddings/blob/main/CONTRIBUTING.md).

#### License 📝

This plugin is licensed under the [MIT License](https://github.com/perzeuss/strapi-plugin-embeddings/blob/main/LICENSE). Feel free to use and modify the code to meet your requirements.

#### Acknowledgements 🙏

We would like to express our heartfelt gratitude to the developers and contributors of the Strapi CMS for providing an exceptional platform for building scalable and customizable applications.

If you encounter any issues or have any questions, please create an issue on our GitHub repository. We appreciate your feedback!

Happy content management with Strapi Embeddings Plugin! 🎉
