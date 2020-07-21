import { SuiComponentFactory } from '../../../misc/util/services/component-factory.service';
import { ActiveModal } from "../classes/active-modal";
import { ModalConfig } from "../classes/modal-config";
export declare class SuiModalService {
    private _componentFactory;
    constructor(_componentFactory: SuiComponentFactory);
    open<T, U, V>(modal: ModalConfig<T, U, V>): ActiveModal<T, U, V>;
}
