namespace sfxkit
{
    export class OscillatorSine implements Oscillator
    {
        public GetValueAt(angle:number, newCycle:boolean):number
        {
            return Math.sin(angle);
        }

    }
}