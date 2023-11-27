import { getDisplayName } from "../utils/functions/getDisplayName";

describe('getDisplayName function', () => {
    it('should return correct value for an existing key', () => {
        expect(getDisplayName('title')).toBe('Titre');
        expect(getDisplayName('type')).toBe('Type');
    });

    it('should return undefined for a non-existing key', () => {
        expect(getDisplayName('nonExistingKey')).toBeUndefined();
    });

    it('should return correct value for each key', () => {
        const keys = [
            'title',
            'type',
            'interest',
            'description',
            'advices',
            'variants',
            'specialistType',
            'improType',
            'numberOfPlayers',
            'duration',
        ];

        keys.forEach((key) => {
            expect(getDisplayName(key)).toBeDefined();
        });
    });
});