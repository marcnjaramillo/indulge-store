const normalizeProductImages = ({ edges }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: url, ...rest
  }))

const normalizeProductOption = ({ id, values, name: displayName }) => {

  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let output = {
        label: value
      }

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value
        }
      }

      return output
    })
  }

  return normalized
}

const normalizeProductVariants = ({ edges }) => {

  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node

    return {
      id,
      title,
      sku: sku || id,
      salePrice: priceV2.amount,
      regularPrice: compareAtPriceV2.amount,
      requiresShipping: true,
      options: selectedOptions.map(({ name, value }) => {
        const option = normalizeProductOption({
          id,
          name,
          values: [value]
        })

        return option
      })
    }
  })
}

export const normalizeProduct = (productNode) => {
  const {
    id,
    title,
    handle,
    description,
    tags,
    productType,
    images: imageConnection,
    priceRange,
    compareAtPriceRange,
    options,
    variants,
    ...rest
  } = productNode

  const product = {
    id,
    title,
    description,
    tags,
    productType,
    handle,
    images: normalizeProductImages(imageConnection),
    salePrice: priceRange.minVariantPrice.amount,
    regularPrice: compareAtPriceRange.minVariantPrice.amount,
    options: options ?
      options.filter(o => o.name !== 'Title')
        .map(o => normalizeProductOption(o)) : [],
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest
  }

  return product
}
