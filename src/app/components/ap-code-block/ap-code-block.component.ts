import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ap-code-block',
  standalone: true,
  templateUrl: './ap-code-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApCodeBlockComponent {
  private sanitizer = inject(DomSanitizer);

  highlighted: SafeHtml = '';

  @Input({ required: true })
  set code(v: string) {
    this.highlighted = this.sanitizer.bypassSecurityTrustHtml(
      v ? this.highlight(v) : ''
    );
  }

  private highlight(raw: string): string {
    let out = '';
    let i = 0;

    // HTML-escape a plain string
    const e = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const sp = (cls: string, s: string) =>
      `<span class="${cls}">${e(s)}</span>`;

    // Character class for attribute names (handles Angular bindings too)
    const isAttrChar = (ch: string) => /[\w\-:.()\[\]@*#!]/.test(ch);

    while (i < raw.length) {
      // ── Comment ──────────────────────────────────────────────
      if (raw.startsWith('<!--', i)) {
        const end = raw.indexOf('-->', i + 4);
        const j = end < 0 ? raw.length : end + 3;
        out += sp('hl-comment', raw.slice(i, j));
        i = j;
        continue;
      }

      // ── Tag ──────────────────────────────────────────────────
      if (raw[i] === '<') {
        out += sp('hl-punct', '<');
        i++;

        // Self-closing or closing slash
        if (i < raw.length && raw[i] === '/') {
          out += sp('hl-punct', '/');
          i++;
        }

        // Tag name
        const ts = i;
        while (i < raw.length && /[\w:-]/.test(raw[i])) i++;
        if (i > ts) out += sp('hl-tag', raw.slice(ts, i));

        // Attributes until closing >
        while (i < raw.length && raw[i] !== '>') {
          const ch = raw[i];
          if (/\s/.test(ch)) {
            out += ch;
            i++;
          } else if (ch === '"' || ch === "'") {
            const q = ch;
            const s = i++;
            while (i < raw.length && raw[i] !== q) i++;
            if (i < raw.length) i++;
            out += sp('hl-string', raw.slice(s, i));
          } else if (ch === '=') {
            out += sp('hl-punct', '=');
            i++;
          } else if (ch === '/') {
            out += sp('hl-punct', '/');
            i++;
          } else if (isAttrChar(ch)) {
            const s = i;
            while (i < raw.length && isAttrChar(raw[i])) i++;
            out += sp('hl-attr', raw.slice(s, i));
          } else {
            out += e(ch);
            i++;
          }
        }

        if (i < raw.length && raw[i] === '>') {
          out += sp('hl-punct', '>');
          i++;
        }
        continue;
      }

      // ── Text node ────────────────────────────────────────────
      out += e(raw[i++]);
    }

    return out;
  }
}
