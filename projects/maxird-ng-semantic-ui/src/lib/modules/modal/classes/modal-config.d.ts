import { Type } from "@angular/core";
import { ModalTemplate } from "./modal-template";
export declare type ModalSize = "mini" | "tiny" | "small" | "normal" | "large";
export declare const ModalSize: {
    Mini: import("../../../../../../../dist/public_api").ModalSize;
    Tiny: import("../../../../../../../dist/public_api").ModalSize;
    Small: import("../../../../../../../dist/public_api").ModalSize;
    Normal: import("../../../../../../../dist/public_api").ModalSize;
    Large: import("../../../../../../../dist/public_api").ModalSize;
};
export declare class ModalConfig<T, U = undefined, V = undefined> {
    isClosable: boolean;
    closeResult: V;
    context?: T;
    size: ModalSize;
    isFullScreen: boolean;
    isBasic: boolean;
    isInverted: boolean;
    isCentered: boolean;
    mustScroll: boolean;
    transition: string;
    transitionDuration: number;
    constructor(context?: T | undefined, isClosable?: boolean);
}
export declare class TemplateModalConfig<T, U = undefined, V = undefined> extends ModalConfig<T, U, V> {
    template: ModalTemplate<T, U, V>;
    constructor(template: ModalTemplate<T, U, V>, context?: T | undefined, isClosable?: boolean);
}
export declare class ComponentModalConfig<T, U = undefined, V = undefined> extends ModalConfig<T, U, V> {
    component: Type<any>;
    constructor(component: Type<any>, context?: T | undefined, isClosable?: boolean);
}
