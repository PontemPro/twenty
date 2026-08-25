/* Pontem Pro design-reference icons. Exact glyph geometry from the approved
 * mockup ("Twenty CRM - Pontem Pro Theme"), scaled from its 16-unit grid to
 * Tabler's 24-unit viewBox. Stroke width is 1.5x the requested value so the
 * rendered weight matches the mockup (stroke 2 on a 16 grid = 3 on 24).
 * API-compatible with Tabler icon components. */
/* oxlint-disable no-restricted-imports */
import { forwardRef, type ReactNode } from 'react';
import { type IconProps as TablerIconsProps } from '@tabler/icons-react';

const makePontemIcon = (tablerName: string, children: ReactNode) =>
  // eslint-disable-next-line react/display-name
  forwardRef<SVGSVGElement, TablerIconsProps>(
    ({ size = 24, stroke = 2, color = 'currentColor', className, ...rest }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={Number(stroke) * 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`tabler-icon tabler-icon-${tablerName} ${className ?? ''}`}
        {...rest}
      >
        {children}
      </svg>
    ),
  );

export const IconPPBuildingCommunity = makePontemIcon(
  'building-community',
  <path d="M4.5 20.25V6l7.5-2.7v16.95M12 8.25l7.5 2.7v9.3M3 20.25h18" />,
);

export const IconPPUser = makePontemIcon(
  'user',
  <>
    <circle cx="12" cy="8.25" r="4.2" />
    <path d="M4.2 20.25c1.2-3.9 4.2-6 7.8-6s6.6 2.1 7.8 6" />
  </>,
);

export const IconPPTarget = makePontemIcon(
  'target',
  <>
    <circle cx="12" cy="12" r="8.25" />
    <circle cx="12" cy="12" r="3" />
  </>,
);

export const IconPPCheckbox = makePontemIcon(
  'checkbox',
  <>
    <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="3.75" />
    <path d="m8.25 12 3 3 5.25-6" />
  </>,
);

export const IconPPNotes = makePontemIcon(
  'notes',
  <>
    <rect x="4.5" y="3.75" width="15" height="16.5" rx="3" />
    <path d="M8.25 9h7.5M8.25 12.75h7.5M8.25 16.5h4.5" />
  </>,
);

export const IconPPLayoutGrid = makePontemIcon(
  'layout-grid',
  <>
    <rect x="3.75" y="3.75" width="6.75" height="6.75" rx="1.8" />
    <rect x="13.5" y="3.75" width="6.75" height="6.75" rx="1.8" />
    <rect x="3.75" y="13.5" width="6.75" height="6.75" rx="1.8" />
    <rect x="13.5" y="13.5" width="6.75" height="6.75" rx="1.8" />
  </>,
);

export const IconPPSettingsAutomation = makePontemIcon(
  'settings-automation',
  <>
    <circle cx="12" cy="12" r="3.3" />
    <path d="M12 3.3v3M12 17.7v3M3.3 12h3M17.7 12h3M5.85 5.85l2.1 2.1M16.05 16.05l2.1 2.1M18.15 5.85l-2.1 2.1M7.95 16.05l-2.1 2.1" />
  </>,
);
