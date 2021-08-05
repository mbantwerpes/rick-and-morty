import type {
  AllCharactersFromAPI,
  CharacterFromAPI,
  Character,
} from '../types';

export async function getCharacters(nameFilter?: string): Promise<Character[]> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${
      nameFilter ? nameFilter : ''
    }`
  );
  const data: AllCharactersFromAPI = await response.json();

  if (!Object.prototype.hasOwnProperty.call(data, 'error')) {
    const characters = data.results;

    const charArrConverted: Character[] = characters.map(
      (charFromApi: CharacterFromAPI) => {
        const char: Character = {
          image: charFromApi.image,
          name: charFromApi.name,
          status: charFromApi.status,
          species: charFromApi.species,
          location: charFromApi.location.name,
          origin: charFromApi.origin.name,
        };
        return char;
      }
    );
    return charArrConverted;
  }
  return [];
}
