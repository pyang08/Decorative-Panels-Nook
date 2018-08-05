const filterProducts = (catalogArr, filtersObj) => {
  return catalogArr.filter((item) => {
    const priceRange = filtersObj.priceRange.length ? filtersObj.priceRange.includes(item.tags.priceRange) : item.tags.priceRange;
    const brand = filtersObj.brand.length ? filtersObj.brand.includes(item.tags.brand) : item.tags.brand;
    const color = filtersObj.color.length ? filtersObj.color.includes(item.tags.color) : item.tags.color;
    const thickness = filtersObj.thickness.length ? filtersObj.thickness.includes(item.tags.thickness) : item.tags.thickness;
    const faceDimensions = filtersObj.faceDimensions.length ? filtersObj.faceDimensions.includes(item.tags.faceDimensions) : item.tags.faceDimensions;
    const designContinuity = filtersObj.designContinuity.length ? filtersObj.designContinuity.includes(item.tags.designContinuity) : item.tags.designContinuity;

    return priceRange && brand && color  && thickness  && faceDimensions  && designContinuity;
  });
};

export default filterProducts;