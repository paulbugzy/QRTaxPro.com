import { optimize } from '@ampproject/toolbox-optimizer';

export async function optimizeAmpContent(html: string): Promise<string> {
  try {
    const optimizedHtml = await optimize(html);
    return optimizedHtml;
  } catch (error) {
    console.error('AMP optimization failed:', error);
    return html;
  }
}

export function convertToAmpComponent(tagName: string, html: string): string {
  const ampComponents: Record<string, string> = {
    img: 'amp-img',
    video: 'amp-video',
    iframe: 'amp-iframe',
    form: 'amp-form',
    carousel: 'amp-carousel'
  };

  return html.replace(
    new RegExp(`<${tagName}`, 'g'),
    `<${ampComponents[tagName] || tagName}`
  );
}

export function addAmpBoilerplate(html: string): string {
  const ampBoilerplate = `
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
    <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
  `;

  return html.replace('</head>', `${ampBoilerplate}</head>`);
}