import styled from 'styled-components/native';

export const FormsInput = styled.TextInput`
    width: 100%;
    height: 56px;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.COLORS.SHAPE};  
`;