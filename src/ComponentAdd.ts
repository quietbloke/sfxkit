namespace sfxkit
{
    export class ComponentAdd implements Component
    {
        private inputA:Component;
        private inputB:Component;

        public GetNextValue(timeSpan:number):number
        {
    	    return this.inputA.GetNextValue(timeSpan) + this.inputB.GetNextValue(timeSpan);
        }

        public Reset()
        {
            this.inputA.Reset();
            this.inputB.Reset();
        }

        // Custom Methods
        public SetValueA(value:Component):ComponentAdd
        {
            this.inputA = value;
            return this;
        }

        public SetValueB(value:Component):ComponentAdd
        {
            this.inputB = value;
            return this;
        }
    }
}