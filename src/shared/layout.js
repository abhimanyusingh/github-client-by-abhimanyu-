import styled from '@emotion/styled/macro'

const sizes = {
    phone: 768,
    tablet: 992,
    desktop:1200
}

const queries = {
    phone: `@media (max-width: ${sizes.phone}px)`,
    tablet: `@media (max-width: ${sizes.tablet}px)`,
    desktop: `@media (max-width: ${sizes.desktop}px)`
}

const Container = styled.div({
    label: 'container',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    [queries.phone]: {
        maxWidth: '750px'
    },

    [queries.tablet]: {
        maxWidth: '970px'
    },

    [queries.desktop]: {
        maxWidth: '1170px'
    }
})

const Row =  styled.div({
    label: 'row',
    marginRight: '15px',
    marginLeft: '-15px',
    [queries.phone]: {
        display: 'flex',
        justifyContent: 'center'
    }
})


const Column = styled.div( 
    {
        label: 'coulmn',
        position: 'relative',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '15px'
    },
    ({width}) => ({
        [queries.phone]: {
            flex: width,
        }
    })
)

export {queries, Container, Row, Column}

