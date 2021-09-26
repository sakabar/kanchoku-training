/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStrokeToKanji = /* GraphQL */ `
  mutation CreateStrokeToKanji(
    $input: CreateStrokeToKanjiInput!
    $condition: ModelStrokeToKanjiConditionInput
  ) {
    createStrokeToKanji(input: $input, condition: $condition) {
      id
      user_name
      stroke
      kanji
      createdAt
      updatedAt
    }
  }
`;
export const updateStrokeToKanji = /* GraphQL */ `
  mutation UpdateStrokeToKanji(
    $input: UpdateStrokeToKanjiInput!
    $condition: ModelStrokeToKanjiConditionInput
  ) {
    updateStrokeToKanji(input: $input, condition: $condition) {
      id
      user_name
      stroke
      kanji
      createdAt
      updatedAt
    }
  }
`;
export const deleteStrokeToKanji = /* GraphQL */ `
  mutation DeleteStrokeToKanji(
    $input: DeleteStrokeToKanjiInput!
    $condition: ModelStrokeToKanjiConditionInput
  ) {
    deleteStrokeToKanji(input: $input, condition: $condition) {
      id
      user_name
      stroke
      kanji
      createdAt
      updatedAt
    }
  }
`;
