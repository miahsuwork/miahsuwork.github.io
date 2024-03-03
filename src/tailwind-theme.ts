import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const config = resolveConfig(tailwindConfig);
const theme = config.theme;
export default theme;
