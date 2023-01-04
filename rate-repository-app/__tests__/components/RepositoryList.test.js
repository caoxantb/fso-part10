import { render } from "@testing-library/react-native";
import { RepositoryListContainter } from "../../components/RepositoryList";

describe("RepositoryList", () => {
  const repositories = {
    totalCount: 8,
    pageInfo: {
      hasNextPage: true,
      endCursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
      startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
    },
    edges: [
      {
        node: {
          id: "jaredpalmer.formik",
          fullName: "jaredpalmer/formik",
          description: "Build forms in React, without the tears",
          language: "TypeScript",
          forksCount: 1619,
          stargazersCount: 21856,
          ratingAverage: 88,
          reviewCount: 3,
          ownerAvatarUrl:
            "https://avatars2.githubusercontent.com/u/4060187?v=4",
        },
        cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
      },
      {
        node: {
          id: "async-library.react-async",
          fullName: "async-library/react-async",
          description: "Flexible promise-based React data loader",
          language: "JavaScript",
          forksCount: 69,
          stargazersCount: 1760,
          ratingAverage: 72,
          reviewCount: 3,
          ownerAvatarUrl:
            "https://avatars1.githubusercontent.com/u/54310907?v=4",
        },
        cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
      },
    ],
  };

  it("renders repository information correctly", () => {
    const { getByTestId } = render(
      <RepositoryListContainter repositories={repositories} />
    );
    const list = getByTestId("repositoryList");
    expect(list).toBeDefined();
  });

  it("display repository metadata (name, description, language)", () => {
    const { getByText } = render(
      <RepositoryListContainter repositories={repositories} />
    );

    [
      "jaredpalmer/formik",
      "Build forms in React, without the tears",
      "TypeScript",
      "async-library/react-async",
      "Flexible promise-based React data loader",
      "JavaScript",
    ].forEach((str) => expect(getByText(str)).toBeDefined());
  });
});
