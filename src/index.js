import './css/styles.css';
import { refs } from './js/getRefs';
import { makeImageMarkup } from './js/markupService';
import { FetchImagesService } from './js/fetchImagesService';
import { LoadMoreBtn } from './js/load-more-btn';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



refs.formSearch.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);