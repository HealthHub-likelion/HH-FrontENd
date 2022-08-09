import styled from "styled-components";
import proxy from '../../security/Proxy.json'

const SliceContainer = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
        rgba(6, 23, 38, 0.9),
        rgba(6, 23, 38, 0.9),
        rgba(6, 23, 38, 0.9)
        ),
    url(${proxy['proxy_url']}/media/images/HH_bg_slice.png);
    background-size: cover;
`;

export default SliceContainer;