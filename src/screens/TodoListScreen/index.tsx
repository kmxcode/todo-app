import React, { FC, useState } from 'react'
import { View } from 'react-native'

import Form from '../../components/Form'
import TodoList from '../../components/TodoList'

const TodoListScreen = () => {
    const [formView, setFormView] = useState<Boolean>(false)
    return (
        <View>
            {formView ? (
                <Form switchView={setFormView} />
            ) : (
                <TodoList switchView={setFormView} />
            )}
        </View>
    )
}

export default TodoListScreen