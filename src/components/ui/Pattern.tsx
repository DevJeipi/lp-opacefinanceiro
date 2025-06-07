import React from 'react'
import styled from 'styled-components'

type PatternProps = {
    children?: React.ReactNode
}

export const Pattern: React.FC<PatternProps> = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    /* Add your background pattern here */
    --color: rgba(114, 114, 114, 0.3);
    background-color: #121212;
    background-image:
        linear-gradient(
            0deg,
            transparent 24%,
            var(--color) 25%,
            var(--color) 26%,
            transparent 27%,
            transparent 74%,
            var(--color) 75%,
            var(--color) 76%,
            transparent 77%,
            transparent
        ),
        linear-gradient(
            90deg,
            transparent 24%,
            var(--color) 25%,
            var(--color) 26%,
            transparent 27%,
            transparent 74%,
            var(--color) 75%,
            var(--color) 76%,
            transparent 77%,
            transparent
        );
    background-size: 55px 55px;
`

export default Pattern
