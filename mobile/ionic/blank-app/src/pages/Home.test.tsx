import { render } from '@testing-library/react'
import Home from './Home'


describe('<Home />', () => {
    test('renders consistently', async () => {
        const { baseElement } = render(<Home />)
        expect(baseElement).toBeDefined();
    });

    test('page should be have a title of Home component', () => {
        const { getByText } = render(<Home />)
        const naviGationTitle = getByText('Navigation')
        expect(naviGationTitle).toBeInTheDocument()
    })
});

