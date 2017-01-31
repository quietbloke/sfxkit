namespace sfxkit
{
    export class OscillatorRandom implements Oscillator
    {
        private currentValue:number = Math.random() * 2 - 1;
        
        public GetValueAt(angle:number, newCycle:boolean):number
        {
            if ( newCycle )
                this.currentValue = Math.random() * 2 - 1;

            return this.currentValue;
        }
    }
}