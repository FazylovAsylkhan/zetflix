import { IDropdownItem } from '../../../../ui/dropdown/models';

export interface IField {
  title: string;
  componentType: string;
  placeholder?: string;
  initialItems?: IDropdownItem[];
}
