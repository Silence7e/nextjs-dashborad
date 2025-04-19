'use server';

export async function getSymbolDate(): Promise<number> {
    const response = await fetch('https://api.woox.io/v4/public/info');
    const data = await response.json();
    return data.timestamp;
}

export async function getSymbolDate2(): Promise<number> {
    const response = await fetch('https://api.woox.io/v4/public/info', {
        cache: 'no-store'
    });
    const data = await response.json();
    return data.timestamp;
}