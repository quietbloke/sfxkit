namespace sfxkit
{
    export interface Component
    {
        GetNextValue(timespan:number): number;
        Reset();
    }
}