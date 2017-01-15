namespace sfxkit
{
    export class ComponentMultiply implements Component
    {
        private inputA:Component;
        private inputB:Component;

        public GetNextValue(timeSpan:number):number
        {
    	    return this.inputA.GetNextValue(timeSpan) * this.inputB.GetNextValue(timeSpan);
        }

        public Reset()
        {
            this.inputA.Reset();
            this.inputB.Reset();
        }

        // Custom Methods
        public SetValueA(value:Component):ComponentMultiply
        {
            this.inputA = value;
            return this;
        }

        public SetValueB(value:Component):ComponentMultiply
        {
            this.inputB = value;
            return this;
        }
    }
}