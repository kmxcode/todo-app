import React, { FC } from 'react'
import styled from 'styled-components'

import Colors from '../../constans/Colors'

const Wrapper = styled.View`
     height: 100%;
`

const Header = styled.View`
    backgroundColor: ${Colors.black};
    width: 100%;
    padding: 25px 0 10px 15px;
`

const HeaderText = styled.Text`
    color: ${Colors.white};
    font-size: 30px;
    font-weight: bold;
    marginTop: 45px;
`
const MainContainer = styled.View`
    margin: 20px 0 0 0;
`

const ScrollVertical = styled.ScrollView`
    height: 100%;
`

const ScrollHorizontal = styled.ScrollView`
    width: 100%;
`

const Row = styled.View`
    margin: 10px 0 10px 0;
`

const RoundImage = styled.Image`
    width: 100px;
    height: 100px;
    borderRadius: 50px;
    marginLeft: 20px;
`


const Photos: FC = (props) => {

    return (
        <Wrapper>
            <Header>
                <HeaderText>Photos</HeaderText>
            </Header>
            <MainContainer>
                <ScrollVertical>
                    <Row>
                        <ScrollHorizontal horizontal showsHorizontalScrollIndicator={false}>
                            <RoundImage source={require('../../assets/green.png')} />
                            <RoundImage source={require('../../assets/blue.png')} />
                            <RoundImage source={require('../../assets/purple.png')} />
                            <RoundImage source={require('../../assets/yellow.png')} />
                            <RoundImage source={require('../../assets/pink.png')} />
                        </ScrollHorizontal>
                    </Row>
                    <Row>
                        <ScrollHorizontal horizontal showsHorizontalScrollIndicator={false}>
                            <RoundImage source={require('../../assets/pink.png')} />
                            <RoundImage source={require('../../assets/yellow.png')} />
                            <RoundImage source={require('../../assets/green.png')} />
                            <RoundImage source={require('../../assets/red.png')} />
                            <RoundImage source={require('../../assets/purple.png')} />
                            <RoundImage source={require('../../assets/blue.png')} />
                        </ScrollHorizontal>
                    </Row>
                </ScrollVertical>
            </MainContainer>
        </Wrapper>
    )
}

export default Photos