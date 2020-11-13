import StatusCodes from '../utils/status-codes';
import favorites from '../data/favorites';

export async function getFavorites(req, res) {
  res.send(favorites);
}

export function addFavorites(req, res) {
  const { id, name } = req.body;

  if (favorites.find(favorite => favorite.id === id)) {
    res.status(StatusCodes.CONFLICT).send('This cocktail is already in your favorites.');
  } else {
    favorites.push({ id, name });
    res.status(StatusCodes.CREATED).send(favorites);
  }
}

export function removeFavorites(req, res) {
  const { id } = req.params;

  if (!favorites.find(favorite => favorite.id === id)) {
    return res.sendStatus(StatusCodes.NOT_FOUND);
  }

  favorites = favorites.filter(favorite => favorite.id === id);
  res.status(StatusCodes.OK).send(favorites);
}
