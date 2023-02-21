import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({onClick}) => {
    return (
        <StyledButton type="button" onClick={onClick}>Load More</StyledButton>
    )
}

Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
