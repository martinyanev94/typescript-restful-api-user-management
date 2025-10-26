import axios from 'axios';

export const fetchData = async (url: string): Promise<any> => {
    const response = await axios.get(url);
    return response.data;
};
import { fetchData } from '../src/fetchData';
import axios from 'axios';

jest.mock('axios');

describe('fetchData', () => {
    it('should return data from the API', async () => {
        const mockData = { data: 'example data' };
        
        (axios.get as jest.Mock).mockResolvedValueOnce(mockData);
        
        const data = await fetchData('https://api.example.com/data');
        expect(data).toEqual(mockData.data);
    });
});
