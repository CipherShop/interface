import { Injectable } from '@angular/core';
import { unified } from 'unified';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import stringWidth from 'string-width';
import remarkRehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  async processMDString(text: string): Promise<string> {
    let file = await unified()
      .use(remarkMdx)
      .use(remarkParse)
      .use(remarkGfm, {stringLength: stringWidth})
      .use(remarkRehype)
      .use(rehypeExternalLinks)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(text);
    return String(file);
  }
}
