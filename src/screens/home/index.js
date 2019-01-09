
import React from 'react'
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { IsolateContainer, Input, PrimaryButton } from '../../shared/pattern';

function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.elements.username.value.trim()
    navigate(`/${username}`);
}

const Home = () => {
    return (
       <IsolateContainer>
           <form 
           onSubmit={handleSubmit}
           css={{
               display:'flex',
               justifyContent:'center',
               maxWidth: 240,
                margin:'auto'
           }}>
            <Input
                type="text"
                name="username"
                placeholder="Enter a Github username"
                autoFocus
                css={{
                    borderRight: 'none',
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0',
                    minWidth:190
                }}
                />
                <PrimaryButton
                    css={{

                    }}
                    type="submit"
                    >
                    Go
                </PrimaryButton>
           </form>
       </IsolateContainer>
    )
}

export default Home