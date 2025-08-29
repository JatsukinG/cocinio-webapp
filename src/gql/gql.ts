/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  query ModelsQuery(\n    $city: ID,\n    $gender: ModelsModelGenderChoices,\n    $smoker: Boolean,\n    $boobs: Boolean,\n    $piercings: Boolean,\n    $tattoos: Boolean,\n    $party: Boolean,\n    $eyesColor: ModelsModelEyesColorChoices,\n    $hairColor: ModelsModelHairColorChoices,\n    $languages: String,\n    $rangeType: ModelsModelRangeTypeChoices,\n    $user_Id: String,\n    $user_Type: String,\n    $nonVisibleServices: String,\n    $attributes: String,\n    $isActive: Boolean,\n  ) {\n    models(\n      city: $city,\n      gender: $gender,\n      smoker: $smoker\n      boobs: $boobs,\n      piercings: $piercings,\n      tattoos: $tattoos,\n      party: $party\n      eyesColor: $eyesColor,\n      hairColor: $hairColor,\n      languages: $languages,\n      rangeType: $rangeType,\n      user_Id: $user_Id,\n      user_Type: $user_Type,\n      nonVisibleServices: $nonVisibleServices,\n      attributes: $attributes,\n      isActive: $isActive,\n    ) {\n      edges{\n        node{\n          id\n          name\n          weight\n          height\n          metrics\n          gender\n          age\n          hairColor\n          eyesColor\n          nationality\n          boobs\n          smoker\n          piercings\n          tattoos\n          party\n          languages\n          rangeType\n          services\n          isActive\n          isVerified\n          nonVisibleServices\n          attributes\n          city{\n            id\n            name\n          }\n          images {\n            id\n            imageUrl\n          }\n          user {\n            type\n          }\n        }\n      }\n    }\n  }\n": typeof types.ModelsQueryDocument;
};
const documents: Documents = {
  "\n  query ModelsQuery(\n    $city: ID,\n    $gender: ModelsModelGenderChoices,\n    $smoker: Boolean,\n    $boobs: Boolean,\n    $piercings: Boolean,\n    $tattoos: Boolean,\n    $party: Boolean,\n    $eyesColor: ModelsModelEyesColorChoices,\n    $hairColor: ModelsModelHairColorChoices,\n    $languages: String,\n    $rangeType: ModelsModelRangeTypeChoices,\n    $user_Id: String,\n    $user_Type: String,\n    $nonVisibleServices: String,\n    $attributes: String,\n    $isActive: Boolean,\n  ) {\n    models(\n      city: $city,\n      gender: $gender,\n      smoker: $smoker\n      boobs: $boobs,\n      piercings: $piercings,\n      tattoos: $tattoos,\n      party: $party\n      eyesColor: $eyesColor,\n      hairColor: $hairColor,\n      languages: $languages,\n      rangeType: $rangeType,\n      user_Id: $user_Id,\n      user_Type: $user_Type,\n      nonVisibleServices: $nonVisibleServices,\n      attributes: $attributes,\n      isActive: $isActive,\n    ) {\n      edges{\n        node{\n          id\n          name\n          weight\n          height\n          metrics\n          gender\n          age\n          hairColor\n          eyesColor\n          nationality\n          boobs\n          smoker\n          piercings\n          tattoos\n          party\n          languages\n          rangeType\n          services\n          isActive\n          isVerified\n          nonVisibleServices\n          attributes\n          city{\n            id\n            name\n          }\n          images {\n            id\n            imageUrl\n          }\n          user {\n            type\n          }\n        }\n      }\n    }\n  }\n":
    types.ModelsQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query ModelsQuery(\n    $city: ID,\n    $gender: ModelsModelGenderChoices,\n    $smoker: Boolean,\n    $boobs: Boolean,\n    $piercings: Boolean,\n    $tattoos: Boolean,\n    $party: Boolean,\n    $eyesColor: ModelsModelEyesColorChoices,\n    $hairColor: ModelsModelHairColorChoices,\n    $languages: String,\n    $rangeType: ModelsModelRangeTypeChoices,\n    $user_Id: String,\n    $user_Type: String,\n    $nonVisibleServices: String,\n    $attributes: String,\n    $isActive: Boolean,\n  ) {\n    models(\n      city: $city,\n      gender: $gender,\n      smoker: $smoker\n      boobs: $boobs,\n      piercings: $piercings,\n      tattoos: $tattoos,\n      party: $party\n      eyesColor: $eyesColor,\n      hairColor: $hairColor,\n      languages: $languages,\n      rangeType: $rangeType,\n      user_Id: $user_Id,\n      user_Type: $user_Type,\n      nonVisibleServices: $nonVisibleServices,\n      attributes: $attributes,\n      isActive: $isActive,\n    ) {\n      edges{\n        node{\n          id\n          name\n          weight\n          height\n          metrics\n          gender\n          age\n          hairColor\n          eyesColor\n          nationality\n          boobs\n          smoker\n          piercings\n          tattoos\n          party\n          languages\n          rangeType\n          services\n          isActive\n          isVerified\n          nonVisibleServices\n          attributes\n          city{\n            id\n            name\n          }\n          images {\n            id\n            imageUrl\n          }\n          user {\n            type\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query ModelsQuery(\n    $city: ID,\n    $gender: ModelsModelGenderChoices,\n    $smoker: Boolean,\n    $boobs: Boolean,\n    $piercings: Boolean,\n    $tattoos: Boolean,\n    $party: Boolean,\n    $eyesColor: ModelsModelEyesColorChoices,\n    $hairColor: ModelsModelHairColorChoices,\n    $languages: String,\n    $rangeType: ModelsModelRangeTypeChoices,\n    $user_Id: String,\n    $user_Type: String,\n    $nonVisibleServices: String,\n    $attributes: String,\n    $isActive: Boolean,\n  ) {\n    models(\n      city: $city,\n      gender: $gender,\n      smoker: $smoker\n      boobs: $boobs,\n      piercings: $piercings,\n      tattoos: $tattoos,\n      party: $party\n      eyesColor: $eyesColor,\n      hairColor: $hairColor,\n      languages: $languages,\n      rangeType: $rangeType,\n      user_Id: $user_Id,\n      user_Type: $user_Type,\n      nonVisibleServices: $nonVisibleServices,\n      attributes: $attributes,\n      isActive: $isActive,\n    ) {\n      edges{\n        node{\n          id\n          name\n          weight\n          height\n          metrics\n          gender\n          age\n          hairColor\n          eyesColor\n          nationality\n          boobs\n          smoker\n          piercings\n          tattoos\n          party\n          languages\n          rangeType\n          services\n          isActive\n          isVerified\n          nonVisibleServices\n          attributes\n          city{\n            id\n            name\n          }\n          images {\n            id\n            imageUrl\n          }\n          user {\n            type\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
