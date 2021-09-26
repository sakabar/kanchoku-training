/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStrokeToKanji = /* GraphQL */ `
  query GetStrokeToKanji($id: ID!) {
    getStrokeToKanji(id: $id) {
      id
      user_name
      stroke
      kanji
      createdAt
      updatedAt
    }
  }
`;
export const listStrokeToKanjis = /* GraphQL */ `
  query ListStrokeToKanjis(
    $filter: ModelStrokeToKanjiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStrokeToKanjis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_name
        stroke
        kanji
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
