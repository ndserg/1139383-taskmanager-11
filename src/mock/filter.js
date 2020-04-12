const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

const generateFilters = (filterCount) => {
  return filterNames.map((it, idx) => {
    return {
      name: it,
      count: filterCount[idx],
    };
  });
};

export {generateFilters};
