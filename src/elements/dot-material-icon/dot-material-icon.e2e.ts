import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('dot-material-icon', () => {
    let page: E2EPage;
    let dotSelectButton: E2EElement;

    beforeEach(async () => {
        page = await newE2EPage({
            html: `<dot-material-icon></dot-material-icon>`
        });
        dotSelectButton = await page.find('dot-material-icon');
        dotSelectButton.setProperty('value', 'accessibility');
        await page.waitForChanges();
    });

    describe('@Elements', () => {
        it('should have mwc-icon elements', async () => {
            dotSelectButton.click();
            await page.waitForChanges();
            const icons: E2EElement[] = await page.findAll(
                'dot-material-icon >>> .dot-material-icon__list mwc-icon'
            );
            expect(icons.length).toBeGreaterThan(0);
        });
    });

    describe('@Events', () => {
        let options: E2EElement[];
        let input: E2EElement;
        let event;

        beforeEach(async () => {
            event = await page.spyOnEvent('dotValueChange');
            dotSelectButton.click();
            await page.waitForChanges();
            input = await page.find('dot-material-icon >>> .dot-material-icon__input');
            options = await page.findAll('dot-material-icon >>> .dot-material-icon__option');
        });

        it('should go down on the options dropdown', async () => {
            await input.press('ArrowDown');
            await page.waitForChanges();
            expect(options[0].classList.contains('dot-material-icon__option-selected')).toBe(true);
        });

        it('should emit selected option and set value when pressed enter', async () => {
            await input.press('ArrowDown');
            await page.waitForChanges();
            await input.press('Enter');
            expect(event).toHaveReceivedEventDetail({ name: '', value: 'accessibility_new' });
            expect(await dotSelectButton.getProperty('value')).toEqual('accessibility_new');
        });

        it('should go up on the options dropdown', async () => {
            await input.press('ArrowUp');
            await page.waitForChanges();
            expect(
                options[options.length - 1].classList.contains('dot-material-icon__option-selected')
            ).toBe(true);
        });

        it('should emit selected option and set value when option clicked', async () => {
            await options[0].click();
            await page.waitForChanges();
            expect(event).toHaveReceivedEventDetail({ name: '', value: 'accessibility_new' });
            expect(await dotSelectButton.getProperty('value')).toEqual('accessibility_new');
        });
    });
});
