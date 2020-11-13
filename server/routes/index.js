import express from 'express';
import { addFavorites, getFavorites, removeFavorites } from '../controllers';

const Router = express.Router();

Router.get('/', getFavorites);
Router.post('/', addFavorites);
Router.delete('/:id', removeFavorites);

export default Router;
