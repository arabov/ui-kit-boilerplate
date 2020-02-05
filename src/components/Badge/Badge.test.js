import React from 'react';
import { render, getByText } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Badge from './Badge';

describe('Badge', () => {
    test('Props', () => {
        const { container } = render(<Badge text="Badge"/>);
        getByText(container, 'Badge');
    });

    test('Snapshot', () => {
        const tree = renderer.create(<Badge text="Badge"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});