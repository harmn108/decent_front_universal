import {DctPipe} from './dct.pipe';

describe('DctPipe', () => {
    it('create an instance', () => {
        const pipe = new DctPipe();
        expect(pipe).toBeTruthy();
    });

    it('transform positive DCT', () => {
        const pipe = new DctPipe();
        expect(pipe.transform(10000)).toBe('0.0001 DCT');
    });

    it('transform 0 DCT', () => {
        const pipe = new DctPipe();
        expect(pipe.transform(0)).toBe('FREE');
    });
});
