import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./Searchbar/Searchbar";
import getImgByQuery from "../Services/Api";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";


export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: null,
    totalPages: null,
    largeImageURL: null,
    isLoading: false,
    showModal: false,
    error: null,
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
    
    try {
        const response = await getImgByQuery(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          totalHits: response.totalHits,
        }));
      if (page === 1 && response.totalHits !== 0) {
          toast.success(`Hooray! We found ${response.totalHits} images.`);
        }
          
      if (response.hits.length === 0) {
          toast.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
        }
          
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  formSubmit = value => {
    if (value.trim() === '') {
      return toast.warning('Enter your request');
    }
    this.setState({
      images: [],
      query: value,
      page: 1,
    });
  };
  
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };

  render() {
    const { images, isLoading, totalHits, showModal, largeImageURL, tags} = this.state;
    const showBtn = images.length !== 0 && images.length !== totalHits && !isLoading;
    return (
      <Container>
        <SearchBar onSubmit={this.formSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onClick={this.toggleModal} />
        {showBtn && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      </Container>
    )
  }
};