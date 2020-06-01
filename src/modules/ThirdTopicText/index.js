import React from 'react'
import {TopicBox, TextBox} from './styled'

const ThirdTopicText = ({name}) => {
    return (
        <TopicBox>
            <TextBox>{name}</TextBox>
        </TopicBox>
    )
}

export default ThirdTopicText