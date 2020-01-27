export const todoFilterTypes = {
  all: 'ALL',
  active: 'ACTIVE',
  completed: 'COMPLETED'
}

export type TodoFilterTypeEnum = 'ALL' | 'ACTIVE' | 'COMPLETED'

export type TodoFilterType = TodoFilterTypeEnum | string
