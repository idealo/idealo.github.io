import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('../../../components/Gallery/Gallery', () => 'Gallery')
jest.mock('../../../components/ProgressiveImage/ProgressiveImage', () => 'ProgressiveImage')

// @todo Added as first nice contribution possibility - doesn't work in github action
xdescribe('App component', () => {
    it('should render as expected', () => {
        const renderedComponent = renderer.create(
            <App />
        );
        expect(renderedComponent.toJSON()).toMatchSnapshot();
    })
});