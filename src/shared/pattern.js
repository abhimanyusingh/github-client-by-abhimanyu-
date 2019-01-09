/* @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import {Link} from '@reach/router'
//import { ThemeProvider } from 'emotion-theming'

const Button = styled.button({
    color: '#333',
    padding: '6px 12px',
    marginBottom: '0',
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '1.4',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    textDecoration: 'none'


})

const PrimaryButton = styled(Button)({
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#2e6da4',
    '&:hover, &:active, &:focus': {
        color: '#fff',
        backgroundColor: '#286090',
        borderColor: '#204d74'
    },
    ':focus': {
        borderColor: '#122b40'
    }
})

const Text =  styled.span({
    fontSize: '14px'
})

const Input = styled.input({
    display: 'block',
    width:'100%',
    height:'34px',
    padding:'6px 12px',
    fontSize:'14px',
    lineHeight: '1.4',
    color:'#555',
    backgroundColor: '#fff',
    borderColor: '1px solid #ccc',
    backgroundImage: 'None',
    borderRadius: '4px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    transition: 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
  ':focus': {
    borderColor: '#66afe9',
    outline: '0',
    boxShadow:
      'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6)',
  },

})

const ButtonLink = Button.withComponent(Link);
const PrimaryButtonLink =PrimaryButton.withComponent(Link)


const LoadingMessagePage = ({children}) => {
    return (
        <IsolateContainer>
            <div css={{
                textAlign: 'center'
            }}>
            <p>
                <Text size="subheading">{children}</Text>
            </p>
            </div>
        </IsolateContainer>
    )
}

const IsolateContainer = ({children, ...props}) => {
    return (
        <div
            css={{
                marginTop: 300,
                display: 'flex',
                justifyContent: 'center'
            }}    
            {...props}
        >
            <div>{children}</div>
        </div>
    )
}

export {
    Button,
    PrimaryButton,
    IsolateContainer,
    LoadingMessagePage,
    Input,
    ButtonLink,
    PrimaryButtonLink,
    Text
}