import { EventEmitter } from '../../../stencil-public-runtime';
import { DotFieldStatus, DotFieldValueEvent, DotInputCalendarStatusEvent } from '../../../models';
export declare class DotInputCalendarComponent {
    el: HTMLElement;
    /** Value specifies the value of the <input> element */
    value: string;
    /** Name that will be used as ID */
    name: string;
    /** (optional) Determine if it is mandatory */
    required: boolean;
    /** (optional) Disables field's interaction */
    disabled: boolean;
    /** (optional) Min, minimum value that the field will allow to set, expect a Date Format. */
    min: string;
    /** (optional) Max, maximum value that the field will allow to set, expect a Date Format */
    max: string;
    /** (optional) Step specifies the legal number intervals for the input field */
    step: string;
    /** type specifies the type of <input> element to display */
    type: string;
    status: DotFieldStatus;
    _dotValueChange: EventEmitter<DotFieldValueEvent>;
    _dotStatusChange: EventEmitter<DotInputCalendarStatusEvent>;
    /**
     * Reset properties of the field, clear value and emit events.
     */
    reset(): Promise<void>;
    componentWillLoad(): void;
    render(): any;
    private isValid;
    private isRequired;
    private isValueInRange;
    private isInMinRange;
    private isInMaxRange;
    private blurHandler;
    private setValue;
    private emitStatusChange;
    private emitValueChange;
    private formattedValue;
}
