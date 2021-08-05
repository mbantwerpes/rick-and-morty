import type {
  AllCharactersFromAPI,
  CharacterFromAPI,
  Character,
} from '../types';

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data: AllCharactersFromAPI = await response.json();
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
