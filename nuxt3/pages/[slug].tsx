import { setup } from '@redneckz/uni-jsx';
import { ContentPage } from '@redneckz/wildless-cms-uni-blocks';
import { defineComponent, h } from 'vue';

import '@redneckz/wildless-cms-uni-blocks/lib/common.css';

setup.vue(h);

export default defineComponent({
  setup() {
    const route = useRoute();
    let registry;
    const { data } = useLazyAsyncData('blog', async (ctx) => {
      if (!ctx.payload.serverRendered) return;
      const { ContentPageRepository } = await import(
        '@redneckz/wildless-cms-uni-blocks/lib/content-page-repository'
      );
      registry ||= ContentPageRepository({
          contentDir: 'content',
          publicDir: 'public',
        });
      const { getContentPageBySlug } = registry;
      return await getContentPageBySlug(route.params.slug as string);
    });
    return () => (data.value ? <ContentPage data={data.value} /> : null);
  },
});
