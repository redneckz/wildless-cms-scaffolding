import { setup } from '@redneckz/uni-jsx';
import { ContentPage } from '@redneckz/wildless-cms-uni-blocks';
import { defineComponent, h } from 'vue';

import '@redneckz/wildless-cms-uni-blocks/lib/common.css';

setup.vue(h);

export default defineComponent({
  setup() {
    const { data } = useLazyAsyncData('blog', () => import('../content/my-first-post.page.json'));
    return () => (data.value ? <ContentPage data={data.value} /> : null);
  },
});
