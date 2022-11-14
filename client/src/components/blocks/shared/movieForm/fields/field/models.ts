import { IDropdownItem } from '../../../../../ui/dropdown/models';

export const INPUT_TEXT = 'inputText';
export const INPUT_DATE = 'inputDate';
export const TEXTAREA = 'textarea';
export const DROPDOWN = 'dropdown';

export interface IField {
  title: string;
  componentType:
    | typeof INPUT_TEXT
    | typeof INPUT_DATE
    | typeof TEXTAREA
    | typeof DROPDOWN;
  placeholder?: string;
  initialItems?: IDropdownItem[];
}
