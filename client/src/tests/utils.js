import React from 'react';
import { configureAxe, toHaveNoViolations} from 'jest-axe';

const axe = configureAxe({
    runOnly: {
        values: ['wcag21aa']
    },
    rules: {
        enabled: false
    }
})
