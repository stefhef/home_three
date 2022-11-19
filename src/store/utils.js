export const prepareData = (items) => {
  return {
    entities: items.reduce((acc, item) => {
      acc[item["id"]] = item;
      return acc;
    }, {}),
    ids: items.map(({ id }) => id),
  };
};
