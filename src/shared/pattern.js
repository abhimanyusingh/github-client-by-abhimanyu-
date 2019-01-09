/* @jsx jsx */
import styled from '@emotion/styled'
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

export {
    Button,
    PrimaryButton
}