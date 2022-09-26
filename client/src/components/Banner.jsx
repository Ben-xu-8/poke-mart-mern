import { ArrowLeftSharp, ArrowRightSharp } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;
const Arrow = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '1px'};
  right: ${(props) => props.direction === 'right' && '1px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 3;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgCont = styled.div`
  height: 100%;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-right: 45px;
`;
const Description = styled.p`
  font-style: 20px;
  margin: 50px 120px 50px 0px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 12px;
  cursor: pointer;
  background-color: transparent;
`;

const Image = styled.img`
  height: 90%;
`;
const InfoCont = styled.div`
  flex: 1;
`;

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftSharp />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slider bg={item.bg} key={item.id}>
            <ImgCont>
              <Image src={item.img} />
            </ImgCont>
            <InfoCont>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Learn More!</Button>
            </InfoCont>
          </Slider>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightSharp />
      </Arrow>
    </Container>
  );
};

export default Slide;
