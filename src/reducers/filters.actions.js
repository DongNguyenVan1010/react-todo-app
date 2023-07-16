//const
export const SEARCH_FILTER_CHANGE = 'FILTERS/SEARCH_FILTER_CHANGE'
export const STATUS_FILTER_CHANGE = 'FILTERS/STATUS_FILTER_CHANGE'
export const PRIORITIES_FILTER_CHANGE = 'FILTER/PRIORITIES_FILTER_CHANGE'

export const searchFilterChange = (text) => {
  return {
    type: SEARCH_FILTER_CHANGE,
    payload: text,
  }
}

export const statusFilterChange = (status) => {
  return {
    type: STATUS_FILTER_CHANGE,
    payload: status,
  }
}

export const priorityFilterChange = (priorities) => {
  return {
    type: PRIORITIES_FILTER_CHANGE,
    payload: priorities,
  }
}

