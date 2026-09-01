import { render, act } from '@testing-library/react';
import React from 'react';
import App from './App';

const viewports = [
    1920,
    1600,
    1440,
    1366,
    1280,
    1024,
    900,
    768,
    600,
    480,
    414,
    375,
    320,
    300
];

describe('Comprehensive Viewport Matrix (1920px -> 300px)', () => {
    viewports.forEach((width) => {
        test(`verifies layout integrity and section rendering at ${width}px`, () => {
            window.innerWidth = width;
            
            let rendered;
            act(() => {
                rendered = render(<App />);
                window.dispatchEvent(new Event('resize'));
            });

            const { container } = rendered;
            const main = container.querySelector('main');
            expect(main).toBeInTheDocument();

            if (width < 768) {
                // Mobile layout
                expect(main.style.marginLeft).toBe('0px');
                expect(main.style.width).toBe('100%');
            } else {
                // Desktop collapsed layout
                expect(main.style.marginLeft).toBe('64px');
                expect(main.style.width).toBe('calc(100% - 64px)');
            }

            // Verify all sections exist
            const sectionIds = ['section-1', 'section-1.2', 'section-2', 'section-3', 'section-4', 'section-4.5', 'section-5'];
            sectionIds.forEach((id) => {
                const section = container.querySelector(`#${id.replace('.', '\\.')}`);
                expect(section).toBeInTheDocument();
            });
        });
    });
});
