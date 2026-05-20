/**
 * Prevents Angular change detection from
 * running with certain Web Component callbacks
 */

import { window } from "rxjs";

// eslint-disable-next-line no-underscore-dangle
(window as any).__Zone_disable_customElements = true;
