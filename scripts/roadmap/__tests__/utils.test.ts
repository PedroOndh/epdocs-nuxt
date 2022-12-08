import { COLORS } from '@scripts/roadmap/config';
import * as fs from 'fs';
import { generateThemesPalette, themesAdapter } from '../utils';

const roadmapDataMock = [
  { fields: { customfield_10600: { data: { id: 346, summary: 'test 1' } } } },
  { fields: { customfield_10600: { data: { id: 347, summary: 'test 2' } } } },
  { fields: { customfield_10600: { data: { id: 345, summary: 'test 3' } } } }
];

jest.mock('fs', () => ({
  writeFileSync: jest.fn()
}));

describe('Testing roadmap utils', () => {
  it('Color palette is generated with the correct colors and order', () => {
    generateThemesPalette(themesAdapter(roadmapDataMock));
    // Getting second argument of first call
    const generatedPallete = (fs.writeFileSync as jest.Mock).mock.calls[0][1];
    expect(JSON.parse(generatedPallete)).toMatchObject([
      { theme: 'test 3', color: COLORS[0] },
      { theme: 'test 1', color: COLORS[1] },
      { theme: 'test 2', color: COLORS[2] }
    ]);
  });
});
