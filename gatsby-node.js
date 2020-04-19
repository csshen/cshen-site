const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const photoGallery = path.resolve(`./src/templates/photo-gallery.js`);
  const tagPage = path.resolve(`./src/templates/tags.js`);

  const result = await graphql(
    `
      {
        allMdx(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000, filter: {fileAbsolutePath: {regex: "/blog(.*)/"}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  );

  // Create blog posts from markdown files.
  const posts = result.data.allMdx.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    createPage({
      path: `/posts${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next
      }
    });

  })

  const galleryQuery = await graphql(
    `
    {
    allMdx(filter: {fileAbsolutePath: {regex: "/travelogue(.*)/"}}) {
      edges {
        node {
          frontmatter {
            translations
          }
        }
      }
    }
  }
    `
  );

  let gallery = galleryQuery.data.allMdx.edges;

  gallery.forEach(edge => {
    let title = edge.node.frontmatter.translations[0];
    let path = title.toLowerCase().replace(/ /g, '-');
    createPage({
      path: `/travelogue/${path}`,
      component: photoGallery,
      context: {
        seo: path,
        title: title
      }
    });
  });

  const tags = await graphql(
    `{
      allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }`
  );

  let t = tags.data.allMdx.group;
  for (let i = 0; i < t.length; i++) {
    let tag = t[i].tag;
    let slug = tag.toLowerCase().replace(/ /g, '-');

    createPage({
      path: `/tags/${slug}`,
      component: tagPage,
      context: {
        tag: tag,
        index: i
      }
    });
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, trailingSlash: false });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
}
