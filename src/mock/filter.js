const FILTERS = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

const generateFilters = (filterCount) => {
  return FILTERS.map((it, idx) => {
    return {
      name: it,
      count: filterCount[idx],
    };
  });
};

export {generateFilters};
