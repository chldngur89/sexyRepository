import { supabase } from './supabase';
import { mockContents } from '../data/mockData';
import type { ContentItem } from '../App';

export async function fetchContents(): Promise<ContentItem[]> {
    try {
        const { data, error } = await supabase
            .from('sere_contents')
            .select('*')
            .order('rank', { ascending: true });

        if (error) {
            console.error('Error fetching data from Supabase:', error);
            return mockContents;
        }

        if (!data || data.length === 0) {
            console.log('No data found in Supabase, using mock data.');
            return mockContents;
        }

        // Map database fields to ContentItem interface if necessary
        // Assuming the DB columns match the interface exactly based on our SQL script
        return data as ContentItem[];
    } catch (err) {
        console.error('Unexpected error:', err);
        return mockContents;
    }
}
