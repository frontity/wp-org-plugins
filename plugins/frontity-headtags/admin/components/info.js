import React from "react";
import styled from "@emotion/styled";
import Dropdown from "./dropdown";

const Info = () => {
  return (
    <Dropdown margin="56px 0" title="How to use REST API - Head Tags">
      <h3>If you are using Frontity:</h3>
      <ol>
        <li>
          Install the
          <a href="https://docs.frontity.org/api-reference-1" target="_blank">
            <code>@frontity/head-tags</code>
          </a>{" "}
          package in your Frontity project.
        </li>
        <li>
          Add it to your <code>frontity.settings.js</code> file.
        </li>
      </ol>
      <p>
        That's it. All the head tags of your pages will appear in your Frontity
        site automatically.
      </p>
      <br />
      <h3>If you are using other JS framework:</h3>
      <p>
        There is a new field named <code>head_tags</code>
        in each entity fetched from the WordPress REST API. This field is an
        array of objects representing the tags that WordPress would include
        normally inside the html <code>head</code> element.
      </p>
      <Question>
        Which entities will have a <code>head_tags</code> field?
      </Question>
      <p>The elements in which this field is included are the following:</p>
      <List>
        <li>Posts, pages, attachments and custom post types</li>
        <li>Post types: for archive pages </li>
        <li>Categories, tags and custom taxonomies</li>
        <li>Authors</li>
      </List>
      <Question>
        How do I fetch the <code>head_tags</code> field for each entity?
      </Question>
      <p>
        You just have to get the entities from their respective REST API
        endpoint, and they will have an extra field called{" "}
        <code>head_tags</code> as mentioned before. If you don't know how to do
        so, check the{" "}
        <a href="https://developer.wordpress.org/rest-api/reference/">
          WordPress REST API reference
        </a>{" "}
        for more info.
      </p>
      <Question>
        How is the format of the <code>head_tags</code> field?
      </Question>
      <p>
        This field is an array of objects representing the tags that WordPress
        would include normally inside the html <code>head</code> element. These
        objects have the properties <code>tag</code>, <code>attributes</code>{" "}
        and <code>content</code>.
      </p>
      <p>
        This is an example of the content of the <code>head_tags</code> field:
      </p>
      <CodeBlock>{headTagsSnippet}</CodeBlock>
      <p>for these HTML tags:</p>
      <CodeBlock>{headTagsHtml}</CodeBlock>
    </Dropdown>
  );
};

export default Info;

const headTagsSnippet = `"head_tags": [
  {
    "tag": "title",
    "content": "Hello world! - My Site"
  },
  {
    "tag": "meta",
    "attributes": {
      "name": "robots",
      "content": "max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    }
  },
  {
    "tag": "link",
    "attributes": {
      "rel": "canonical",
      "href": "http://mysite.com/hello-world/"
    }
  }
]
`;

const headTagsHtml = `
  <title>Hello wordl! - My Site</title>
  <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="canonical" href="http://mysite.com/hello-world/" />
`;

const List = styled.ul`
  list-style-type: disc;
  li {
    margin-left: 32px;
  }
`;

const Question = styled.p`
  margin-top: 32px;
  font-weight: bold;
`;

const CodeBlock = styled.pre`
  font-size: small;
  overflow-x: auto;
`;
