namespace sfxkit
{
    export interface Oscillator
    {
        GetValueAt(angle:number, newCycle:boolean):number;
    }
}