import { NextPage } from 'next';
import { useRef } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Overlay from '../components/Overlay';

const VIDEO_URL = '/video/clip.mp4';

const VideoPage: NextPage = () => {
    const videoEl = useRef<HTMLVideoElement>(null);

    return (
        <div>
            <Head>
                <title>Demo Video Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainStyled>
                <VideoPlayerStyled>
                    <VideoElementStyled ref={videoEl} src={VIDEO_URL} muted loop />
                    <Overlay />
                </VideoPlayerStyled>
            </MainStyled>
        </div>
    );
};

const VideoElementStyled = styled.video`
    height: 100%;
    width: 100%;
`;

const VideoPlayerStyled = styled.div`
    position: relative;
    border-radius: 12px;
    max-height: 480px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.75);
    aspect-ratio: ${16 / 9};
    box-shadow: 0px 4px 32px 3px rgba(0, 0, 0, 0.75);
    flex: 1;
    margin: 0 auto;
`;

const MainStyled = styled.main`
    height: 100vh;
    width: 100vw;
    padding: 40px;
    box-sizing: border-box;
`;

export default VideoPage;
