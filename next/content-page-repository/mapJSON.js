export async function mapJSON(data, mapper, key = []) {
  if (!data) return data;

  const type = typeof data;
  if (
    ['string', 'number', 'boolean', 'function', 'bigint'].includes(type) ||
    data instanceof RegExp
  ) {
    return mapper(data, key);
  } else if (Array.isArray(data)) {
    const values = data.map((_, i) => mapJSON(_, mapper, [String(i)].concat(key)));
    return Promise.all(values);
  } else if (type === 'object') {
    const subKeys = Object.keys(data);
    const values = subKeys.map((k) => mapJSON(data[k], mapper, [k].concat(key)));
    const pairs = (await Promise.all(values)).map((_, i) => ({
      [subKeys[i]]: _
    }))
    return Object.assign({}, ...pairs);
  }
  return mapper(data, key);
}
