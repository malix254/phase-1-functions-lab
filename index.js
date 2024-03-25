// Code your solution in this file!
// Define functions for distance and fare calculations

function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);
}

function distanceFromHqInFeet(location) {
    const blockInFeet = 264; // One block is 264 feet
    return distanceFromHqInBlocks(location) * blockInFeet;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Assuming each block is 264 feet
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distance over 2000 feet
    } else {
        return 'cannot travel that far'; // Limiting rides over 2500 feet
    }
}

// Sample tests

describe('distanceFromHqInBlocks()', () => {
    it('returns a distance in blocks', () => {
        expect(distanceFromHqInBlocks(37)).toEqual(5);
    });

    it('calculates distances below 42nd street', () => {
        expect(distanceFromHqInBlocks(39)).toEqual(3);
    });
});

describe('distanceFromHqInFeet()', () => {
    it('returns a distance in feet', () => {
        expect(distanceFromHqInFeet(37)).toEqual(1320); // 5 blocks * 264 feet/block
    });

    it('calculates distances below 42nd street', () => {
        expect(distanceFromHqInFeet(39)).toEqual(792); // 3 blocks * 264 feet/block
    });
});

describe('distanceTravelledInFeet()', () => {
    it('returns the distance travelled in feet', () => {
        expect(distanceTravelledInFeet(37, 42)).toEqual(1320); // 5 blocks * 264 feet/block
    });

    it('returns distance when destination is below start', () => {
        expect(distanceTravelledInFeet(42, 37)).toEqual(1320); // 5 blocks * 264 feet/block
    });
});

describe('calculatesFarePrice()', () => {
    it('gives customers a free sample', () => {
        expect(calculatesFarePrice(37, 37)).toEqual(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000', () => {
        expect(calculatesFarePrice(37, 42)).toEqual(8.8); // 440 feet * 0.02
    });

    it('charges 25 dollars for a distance over 2000 feet', () => {
        expect(calculatesFarePrice(37, 45)).toEqual(25);
    });

    it('does not allow rides over 2500 feet', () => {
        expect(calculatesFarePrice(37, 50)).toEqual('cannot travel that far');
    });
});
