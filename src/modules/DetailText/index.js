import React from 'react'
import {TopicBox, PicBox, TextBox, TextBox2} from './styled'
import DetailAc2 from 'modules/images/DetailAc2.svg'

export const LANGUAGE_STATE_D = {
    Thai: 0,
    Chinese: 1,
    Eng: 2
  }

const DetailText = ({name, state}) => {
    const renderDetailText = () => {
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
            {renderDetailText()}
            <PicBox src={DetailAc2} alt='DetailAc' />
        </TopicBox>
    )
}

export default DetailText