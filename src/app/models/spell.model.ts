import { Path } from './path.model';
import { Grade } from './grade.model';

export class Spell {
    name: string;
    level: string;
    action: string;
    type: string[];
    effect: string;
    grades: Grade[];
    path: Path;
    typeMaintenance: string;
}