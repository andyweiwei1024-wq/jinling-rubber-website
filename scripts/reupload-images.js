require('dotenv').config({ path: '.env.local' });
const { S3Storage } = require('coze-coding-dev-sdk');

const storage = new S3Storage({});

const images = [
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_1886e1ea-d117-4201-91f7-a57d1b1c01f1.jpeg?sign=1808116451-a6fe9fc315-0-bd7960917d8c20f4bc0573cb7890ea2c2f7df197560496f92beb2edf73f93e8d', name: 'acid-resistant-workwear' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_9ec7c291-372b-4c30-b529-08fe1be33a7b.jpeg?sign=1808116450-1293297fe6-0-a4b97a706f3241313afba92382c041dc14ac2e82215578b7b5738e511964b5e0', name: 'gas-suit-maintenance' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_0eeb8212-6a4c-408c-9160-c1cf31f725ea.jpeg?sign=1808116450-b871e42744-0-550772bda1e360d19ec64a5cab47cbef139f0a7f65939835397c29661d3f5050', name: 'chemical-safety-standards' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_6ce50f25-9c26-4ae8-9f49-760bfda9910d.jpeg?sign=1808116452-0f90ed9b5b-0-544ce749454eafcf5bf6f316f238e0dbebfe8f064a52f705e5cbc5d8823e82fb', name: 'materials-comparison' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_c1750ed4-85d5-4ef7-82c0-6df9bf9171d5.jpeg?sign=1808116451-ddae8f0415-0-40599fef98e84714dfc70e218fe540b96f87e60300163c6391649196a6fe0e8f', name: 'safety-management' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_a3936756-cf26-49cc-89ab-9f0689e647ea.jpeg?sign=1808116449-f7780d9732-0-0151e0d662c576a81798e520c745883df6c33852f16478a2ed14906f22a0278f', name: 'gas-suit-buying' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_09991df0-5aad-45d0-9a2b-18e216cacde1.jpeg?sign=1808116451-7fed7b8c59-0-2ed71ece7ccb22032f9899355d0991e25db031d94f36b79518d28b621dcde801', name: 'anti-static-workwear' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_7a71dade-d1bd-4d99-9c01-9d7fe8aaacd1.jpeg?sign=1808116451-fd7cf4d395-0-b141f657224cba03f72964a7f363aaccbfdb72a0e2b84a47260cb491c528042c', name: 'fully-enclosed-suit' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_279a31f5-c0a5-437c-bc71-71e28e1a348f.jpeg?sign=1808116450-4f9d3192c0-0-8e4bee1bba728899bf32c1f5f631c975f9a6597120de360b19dfc33615784317', name: 'industrial-protective-suits' },
  { url: 'https://coze-coding-project.tos.coze.site/coze_storage_7620625790576918528/image/generate_image_931b22e4-7dd5-4fe6-aebe-fad66462a7a1.jpeg?sign=1808116450-fba1658410-0-26129c0dcd169edd53dc18139715acaf357932934db9d1ce0f11c39d42f3ad51', name: 'materials-detail' },
];

async function process() {
  const results = {};
  for (const img of images) {
    try {
      console.log('Processing: ' + img.name);
      const key = await storage.uploadFromUrl({
        url: img.url,
        timeout: 60000,
      });
      
      const url = await storage.generatePresignedUrl({
        key,
        expireTime: 315360000,
      });
      
      results[img.name] = url;
      console.log(img.name + ': ' + key);
    } catch (err) {
      console.error(img.name + ': ERROR - ' + err.message);
    }
  }
  console.log('\n=== RESULTS ===');
  console.log(JSON.stringify(results, null, 2));
}

process();
