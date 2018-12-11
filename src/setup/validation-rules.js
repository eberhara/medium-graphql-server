import { createComplexityLimitRule } from 'graphql-validation-complexity'

const MAX_COMPLEXITY = 50

const costs = {
  scalarCost: 1,
  objectCost: 0,
  listFactor: 10,
  introspectionListFactor: 0,
  formatErrorMessage: cost => (`query with cost ${cost} exceeds complexity limit (${MAX_COMPLEXITY})`)
}

const complexityLimitRule = createComplexityLimitRule(MAX_COMPLEXITY, costs)

export default [complexityLimitRule]