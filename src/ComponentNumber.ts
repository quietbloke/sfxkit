namespace sfxkit
{
    export class ComponentNumber implements Component
    {
        private value:number
        GetNextValue(timespan:number): number
        {
            return this.value;
        }

        Reset()
        {
            return;
        }

        // Custom Methods
        public SetValue(value:number):ComponentNumber
        {
            this.value = value;
            return this;
        }
    }
}