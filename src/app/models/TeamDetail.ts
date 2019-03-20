import { CharacterListItem } from './CharacterListItem';

export interface TeamDetail {
    TeamId: number;
    TeamName: string;
    TotalPoints?: number;
    Characters: Array<CharacterListItem>;
}