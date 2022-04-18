import { mapJSON } from './mapJSON';
import { markdownToHTML } from './markdownToHTML';

export function transformContentPage(pageData) {
  return mapJSON(pageData, async (val, [key, ...rest]) => {
    if (key.endsWith('__md')) {
      return await markdownToHTML(val);
    }
    return val;
  });
}
