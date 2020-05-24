import React, { FC } from 'react'
import styled from 'styled-components'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { useDispatch, useSelector } from 'react-redux'

import { removeElemTodoList } from '../actions/todoListActions'
import { ISingleElementList } from '../entities/todoSingleEl'

import { IState } from '../reducers'
import { ITodoListReducer } from '../reducers/todoListReducer'

import Colors from '../constans/Colors'

const Wrapper = styled.View`
    height: 100%;
    paddingBottom: 110px;
`

const Header = styled.View`
    backgroundColor:${Colors.black};
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
    margin: 0 18px 0 18px;
    display: flex;
    height: 100%
    align-items: stretch;
`

const ScrollVertical = styled.ScrollView`
    display: flex;
`

const Element = styled.View`
    border: 1px solid ${Colors.darkGray};
    borderRadius: 5px;
    padding: 15px;
    marginTop: 10px;
    marginBottom: 10px;
`
const ElementName = styled.Text`
    color: ${Colors.mercury};
    font-weight: bold;
    font-size: 20px;
`
const ElementDesc = styled.Text`
    color: ${Colors.manatee};
`

const ElementRemoveButton = styled.TouchableOpacity`
    position: absolute;
    width: 50px;
    height: 50px;
    alignItems: center;
    justifyContent: center;
    right: 7px;
    top: 7px;
`

const FloatingButton = styled.TouchableOpacity`
    backgroundColor:${Colors.green};
    position: absolute;
    width: 50px;
    height: 50px;
    alignItems: center;
    justifyContent: center;
    right: 25px;
    bottom: 30px;
    borderRadius: 50px;
`

type RemoveElemTodoList = ReturnType<typeof removeElemTodoList>

const TodoList: FC<{switchView(formView: boolean)}> = props => {
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const dispatch = useDispatch();

    const goToForm = () => {
        props.switchView(true)
    }

    const removeElem = (id: number) => {
        dispatch<RemoveElemTodoList>(removeElemTodoList(id))
    }
    return (
        <Wrapper>
            <Header>
                <HeaderText>My list</HeaderText>
            </Header>
            <MainContainer>
                <ScrollVertical>
                    {todoListState.todoList.map((elem: ISingleElementList, index: number) => 
                        <Element key={index}>
                            <ElementName>{elem.name}</ElementName>
                            <ElementDesc>{elem.description}</ElementDesc>
                            <ElementRemoveButton onPress={() => removeElem(elem.id)}>
                                <MaterialCommunityIcons
                                    name="close" 
                                    color={Colors.white} 
                                    size={20}
                                />
                            </ElementRemoveButton>
                        </Element>
                    )}
                </ScrollVertical>
            </MainContainer>
            <FloatingButton onPress={goToForm}>
                <MaterialCommunityIcons
                    name="plus" 
                    color={Colors.white} 
                    size={20}
                />
            </FloatingButton>
        </Wrapper>
    )
}

export default TodoList