import { render, } from '@testing-library/react'
import LoginForm from './index'


test('when clicking the new button, we should be able to login user', () => {
    const { baseElement } = render(<LoginForm />)

    expect(baseElement).toBeDefined();
})
