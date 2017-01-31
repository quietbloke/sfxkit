namespace sfxkit
{
	export class ComponentOscillator implements Component
	{
        private angle:number = 0;
        private initialAngle = 0;
        private frequency:Component;
        private oscillator:Oscillator;

        constructor (freq:Component)
        {
            this.frequency = freq;
            this.oscillator = new OscillatorSine();
        }

        public GetNextValue (timeSpan:number):number
        {
            var angleInc = timeSpan * this.frequency.GetNextValue(timeSpan) * (Math.PI * 2);
            var newCycle:boolean = false;
            this.angle += angleInc;
            if ( this.angle >= Math.PI * 2)
            {
                this.angle -= Math.PI * 2;
                newCycle = true;
            }

            return this.oscillator.GetValueAt(this.angle, newCycle);
        };

        public Reset ()
        {
            this.angle = this.initialAngle;
            this.frequency.Reset();
        }

        // Custom Methods
        public SetFrequency(value:Component):ComponentOscillator
        {
            this.frequency = value;
            return this;
        }

        public SetInitialAngle(initailAngle:number):ComponentOscillator
        {
            this.initialAngle = initailAngle;
            return this;
        }

        public SetOscillator(oscillator:Oscillator):ComponentOscillator
        {
            this.oscillator = oscillator;
            return this;
        }
	}
}