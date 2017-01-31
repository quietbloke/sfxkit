namespace sfxkit
{
    export class OscillatorSquare implements Oscillator
    {
        public GetValueAt(angle:number, newCycle:boolean):number
        {
            if ( angle < Math.PI)
                return 1;
            else
                return -1;
        }
    }
}