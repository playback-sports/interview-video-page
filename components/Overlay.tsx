import React from 'react';
import styled from 'styled-components';
import PlayIcon from '../public/svg/play.svg';

interface Overlay {
    className?: string;
}

const Overlay: React.FunctionComponent<Overlay> = (props) => {
    const { className } = props;

    return (
        <OverlayStyled className={className}>
            <PlayIcon />
        </OverlayStyled>
    );
};

const OverlayStyled = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        height: 128px;
        width: 128px;
        color: #ffffff;
    }
`;

export default Overlay;
