import { GraphQLModule } from '@graphql-modules/core'
import country from './modules/country/graphql'
import pokemon from './modules/pokemon/graphql'
import campaign from './modules/campaigns/graphql'

export default new GraphQLModule({
  imports: [country, pokemon, campaign],
})
