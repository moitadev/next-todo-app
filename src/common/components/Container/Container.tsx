import { StyledContainer } from "./Container.style";

type ContainerProps = {
    children: React.ReactNode
}

const Container = ( {children}: ContainerProps ) => {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

export {Container}