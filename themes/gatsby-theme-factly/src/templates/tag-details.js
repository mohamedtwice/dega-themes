import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ListItems from "../components/listItems";

function Tag({ data }) {
  const {
    dega: { tag, posts },
  } = data;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content order-2 lg:order-1 lg:w-3/5 mx-auto lg:-my-16">
          <div className="flex flex-col pb-6">
            {posts.nodes.map((item, index) => (
              <ListItems
                key={"posts" + index}
                orientation="vertical horizontal"
                item={item}
                index={index}
                categories
                excerpt
                image
                imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col order-1 lg:order-2 w-full lg:w-2/5 border-l pt-10 lg:pt-20 top-0 h-auto lg:h-screen static lg:sticky overflow-y-hidden">
          <div className="flex flex-col px-6">
            <div className="flex py-4">
              <div className="px-4">
                <h2 className="font-bold">{tag.name}</h2>
              </div>
            </div>
            <p className="text-base read-more-wrap">{tag.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tag;

export const query = graphql`
  query($id: Int!) {
    dega {
      tag(id: $id) {
        description
        id
        name
        slug
      }
      posts(tags: [$id]) {
        nodes {
          users {
            id
            first_name
            last_name
          }
          categories {
            slug
            name
          }
          medium {
            alt_text
            url
          }
          created_at
          id
          status
          subtitle
          title
          slug
        }
      }
    }
  }
`;
