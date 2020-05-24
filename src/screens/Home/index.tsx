import React, { FC } from 'react'
import styled from 'styled-components'

import Colors from '../../constans/Colors'

const Wrapper = styled.View`
    height: 100%;
    paddingBottom: 110px;
`

const Header = styled.View`
    backgroundColor: ${Colors.black};
    width: 100%;
    padding: 25px 0 10px 15px;
`

const HeaderImage = styled.Image`
    width: 40px;
    height: 40px;
    borderRadius: 25px;
`

const HeaderText = styled.Text`
    color: ${Colors.white};
    font-size: 30px;
    font-weight: bold;
    marginTop: 5px;
`
const MainContainer = styled.View`
    margin: 0 10px 0 10px;
    display: flex;
    height: 100%
    align-items: stretch;
`

const ScrollVertical = styled.ScrollView`
    display: flex;
`

const Element = styled.View`
    backgroundColor: ${Colors.shark};
    width: 100%;
    height: 170px;
    padding: 15px
    marginTop: 10px;
    marginBottom: 10px;
    borderRadius: 13px;
`

const ElementTitle = styled.Text`
    color: ${Colors.mercury};
    font-size: 25px;
    font-weight: bold;
    marginBottom: 10px;
`

const ElementDesc = styled.Text`
    color: ${Colors.manatee};
`

const Home: FC = (props) => {

    return (
        <Wrapper>
            <Header>
                <HeaderImage source={require('../../assets/profile-img.png')} />
                <HeaderText>Alex Smith</HeaderText>
            </Header>
            <MainContainer>
                <ScrollVertical>
                    <Element>
                        <ElementTitle>Expetendis</ElementTitle>
                        <ElementDesc>Quo an vide quaestio instructior, id est molestiae vituperata dissentiet. Et vix tempor semper delicata, sed tantas quaestio ad. Putent ancillae appareat vix an, ne quod tempor feugiat vim.</ElementDesc>
                    </Element>
                    <Element>
                        <ElementTitle>Maecenas</ElementTitle>
                        <ElementDesc>At oratio utinam partem vix. Te feugiat saperet ceteros mel, his ad omnes laboramus. Ex vix harum vituperata reprehendunt. Ad volumus voluptua est, volutpat evertitur sit eu.</ElementDesc>
                    </Element>
                    <Element>
                        <ElementTitle>Omnesque</ElementTitle>
                        <ElementDesc>Donec nec molestie lacus. Sed et risus id lacus rhoncus hendrerit nec a libero. Donec scelerisque magna ac pretium varius. Integer rhoncus mattis odio, sit amet aliquam urna. Vivamus vestibulum at lectus ut mollis.</ElementDesc>
                    </Element>
                    <Element>
                        <ElementTitle>Quisque</ElementTitle>
                        <ElementDesc>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec condimentum nisl vel tempus ultrices. Proin ullamcorper volutpat ipsum non pretium.</ElementDesc>
                    </Element>
                </ScrollVertical>
            </MainContainer>
        </Wrapper>
    )
}

export default Home