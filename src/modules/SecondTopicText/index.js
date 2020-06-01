import React from 'react'
import secondTopicAc from 'modules/images/secondTopicAc.svg'
import {TopicBox, PicBox, TextBox, TextBox2} from './styled'

export const LANGUAGE_STATE_S = {
    Thai: 0,
    Chinese: 1,
    Eng: 2
}

const SecondTopicText = ({name, state}) => {
    const renderSecondTopicText = () => {
        if (state < 2) {
            return (
                <TextBox>{name}</TextBox>
            )
        }
        else {
            return (
                <TextBox2>{name}</TextBox2>
            )
        }
    }
    return (
        <TopicBox>
            {renderSecondTopicText()}
            <PicBox src={secondTopicAc} alt='secondTopic' />
        </TopicBox>
    )
}

export default SecondTopicText