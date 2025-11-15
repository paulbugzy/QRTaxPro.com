import { optimize } from '@ampproject/toolbox-optimizer';

export async function optimizeAmpContent(html: string): Promise<string> {
  const optimizedHtml = await optimize(html);
  
  // Add AMP-specific meta tags
  const ampMeta = `
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
    <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  `;

  return optimizedHtml.replace('</head>', `${ampMeta}</head>`);
}

export function convertToAmpHtml(html: string): string {
  return html
    .replace(/<img/g, '<amp-img layout="responsive"')
    .replace(/<video/g, '<amp-video layout="responsive"')
    .replace(/<iframe/g, '<amp-iframe layout="responsive"')
    .replace(/<script(?!\s+type="application\/ld\+json")/g, '<script async');
}