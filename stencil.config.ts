import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'my-health-report',
  outputTargets: [
    reactOutputTarget({
      outDir: '../my-health-report-react/src/stencil-generated/',
      // Next.js App Router SSR을 고려하면 hydrateModule 설정을 검토
      // hydrateModule: 'dist/hydrate/index.js' // 프로젝트 설정에 맞게
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
