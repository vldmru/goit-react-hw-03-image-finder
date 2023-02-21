import { Component } from "react";
import PropTypes from 'prop-types';
import { Searchbar, SearchForm, Button, ButtonLabel, SearchFormInput } from "./Searchbar.styled";
import { toast } from 'react-toastify';
import { BsSearch } from "react-icons/bs";

export default class Serchbar extends Component{
    state = {
        image: '',
    }
    
    handleNameChange = event => {
        this.setState({ image: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.image.trim() === '') {
            return toast.warning('Enter your request');
        }
        this.props.onSubmit(this.state.image)
        this.setState({image: ''})
    }

    render() {
        const { image } = this.state;
        const { handleNameChange, handleSubmit } = this;
        return (
            <Searchbar>
                <SearchForm  onSubmit={handleSubmit}>
                    <Button type="submit">
                        
                        <BsSearch size="20" /><ButtonLabel> </ButtonLabel>
                    </Button>

                    <SearchFormInput
                    
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={image}
                    onChange={handleNameChange}
                    />
                </SearchForm>
            </Searchbar>
        )
    }
}

Serchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    
}