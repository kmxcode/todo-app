import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { useDispatch } from 'react-redux'

import { setNewElemTodoList } from '../actions/todoListActions'
import { ISingleElementList } from '../entities/todoSingleEl'

import Colors from '../constans/Colors'

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
    margin: 20px 18px 0 18px;
`

const Input = styled.TextInput`
    color: ${Colors.white};
    border: 1px solid ${Colors.white};
    borderRadius: 5px;
    padding: 10px;
    marginBottom: 10px;
    width: 100%;
`

const SaveButton = styled.TouchableOpacity`
    backgroundColor: ${Colors.grey};
    max-width: 100px;
    borderRadius: 2px;
    padding: 5px 10px 5px 10px;
    margin-top: 10px;
`
const ButtonText = styled.Text`
    color: ${Colors.white};
    font-size: 20px;
    text-align: center;
`

const FloatingButton = styled.TouchableOpacity`
    position: absolute;
    width: 50px;
    height: 50px;
    alignItems: center;
    justifyContent: center;
    right: 0;
    top: -70px;
`

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>

const Form: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('')
    const [descInput, setDescrInput] = useState<string>('')
    const [nameInputColor, setNameInputColor] = useState<string>(Colors.white)
    const [descInputColor, setDescInputColor] = useState<string>(Colors.white)
    

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text)
        setNameInputColor(Colors.white)
    }

    const descriptionValueChange = (txt) => {
        setDescrInput(txt.nativeEvent.text)
        setDescInputColor(Colors.white)
    }

    const saveData = () => {
        if ( isDataValid()) {
            
            dispatch<SetNewElemTodoList>(setNewElemTodoList({
                name: nameInput,
                description: descInput,
                id: Math.floor(Math.random() * 100)
            } as ISingleElementList
            ))

            props.switchView(false)
        }
    }

    const isDataValid = () => {
        const isNameEmpty = isNameInputEmpty();
        const isDescEmpty = isDescInputEmpty();

        if( !isNameEmpty && !isDescEmpty) {
            return true
        } else {
            return false
        }
    }

    const isNameInputEmpty = () => {
        if(nameInput == '') {
            setNameInputColor(Colors.red)
            return true
        } else {
            setNameInputColor(Colors.white)
            return false
        }
    }

    const isDescInputEmpty = () => {
        if(descInput == '') {
            setDescInputColor(Colors.red)
            return true
        } else {
            setDescInputColor(Colors.white)
            return false
        }
    }

    const closeForm = () => {
        props.switchView(false)
    }

    return (
        <Wrapper>
            <Header>
                <HeaderText>Add new</HeaderText>
            </Header>
            <MainContainer>
                <Input value={nameInput} onChange={nameValueChange} style={{borderColor: nameInputColor}} placeholder="Name" placeholderTextColor="#ddd"/>
                <Input value={descInput} onChange={descriptionValueChange} style={{borderColor: descInputColor}} placeholder="Description" placeholderTextColor="#ddd"/>
                <SaveButton onPress={saveData}>
                    <ButtonText>Save</ButtonText>
                </SaveButton>
            <FloatingButton onPress={closeForm}>
                <MaterialCommunityIcons
                    name="close" 
                    color={Colors.white} 
                    size={20}
                />
            </FloatingButton>
            </MainContainer>
        </Wrapper>
    )
}

export default Form