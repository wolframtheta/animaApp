import { Spell } from './spell.model';
import { SubPath } from './subPath.model';

export class Path {
    name: string;
    level?: number;
    subPath?: SubPath;
    freeAccessSpells?: Spell[];
}