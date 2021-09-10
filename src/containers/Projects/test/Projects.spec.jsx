import React from 'react';
import renderer from 'react-test-renderer';
import Projects from '../Projects';

// @todo Added as first nice contribution possibility - doesn't work in github action
xdescribe('Projects component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <Projects />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});