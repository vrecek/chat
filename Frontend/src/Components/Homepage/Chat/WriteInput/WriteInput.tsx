import React from 'react'
import InputContainer from './InputContainer'

const WriteInput = ({conversationId}: {conversationId: string}) => {
    return (
        <section className="write-message">

            <InputContainer conversationId={conversationId} />

        </section>
    )
}

export default WriteInput