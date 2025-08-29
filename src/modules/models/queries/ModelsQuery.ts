import { graphql } from '@gql'

const ModelsQuery = graphql(`
  query ModelsQuery(
    $city: ID,
    $gender: ModelsModelGenderChoices,
    $smoker: Boolean,
    $boobs: Boolean,
    $piercings: Boolean,
    $tattoos: Boolean,
    $party: Boolean,
    $eyesColor: ModelsModelEyesColorChoices,
    $hairColor: ModelsModelHairColorChoices,
    $languages: String,
    $rangeType: ModelsModelRangeTypeChoices,
    $user_Id: String,
    $user_Type: String,
    $nonVisibleServices: String,
    $attributes: String,
    $isActive: Boolean,
  ) {
    models(
      city: $city,
      gender: $gender,
      smoker: $smoker
      boobs: $boobs,
      piercings: $piercings,
      tattoos: $tattoos,
      party: $party
      eyesColor: $eyesColor,
      hairColor: $hairColor,
      languages: $languages,
      rangeType: $rangeType,
      user_Id: $user_Id,
      user_Type: $user_Type,
      nonVisibleServices: $nonVisibleServices,
      attributes: $attributes,
      isActive: $isActive,
    ) {
      edges{
        node{
          id
          name
          weight
          height
          metrics
          gender
          age
          hairColor
          eyesColor
          nationality
          boobs
          smoker
          piercings
          tattoos
          party
          languages
          rangeType
          services
          isActive
          isVerified
          nonVisibleServices
          attributes
          city{
            id
            name
          }
          images {
            id
            imageUrl
          }
          user {
            type
          }
        }
      }
    }
  }
`)

export default ModelsQuery
