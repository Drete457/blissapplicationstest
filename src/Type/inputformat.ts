import { ChangeEventHandler } from "react";

export type inputformat = {
    type: string;
    className: string;
    value: string;
    readOnly: boolean;
    onChange?: ChangeEventHandler,
    placeholder?: string;
};