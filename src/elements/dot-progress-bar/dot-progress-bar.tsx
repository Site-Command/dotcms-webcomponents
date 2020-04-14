import { Component, h, Host, Prop } from '@stencil/core';
/**
 * Represent a dotcms DotProgressBar control.
 *
 * @export
 * @class DotProgressBar
 */
@Component({
    tag: 'dot-progress-bar',
    styleUrl: 'dot-progress-bar.scss'
})
export class DotProgressBar {
    /** text to be show bellow the progress bar*/
    @Prop() text = '';

    /** indicates the progress to be show, a value 1 to 100 */
    @Prop() progress = '0';

    render() {
        return (
            <Host>
                <div  style={{'--progress-width': this.progress }} />
                <span>{this.text}</span>
            </Host>
        );
    }
}
