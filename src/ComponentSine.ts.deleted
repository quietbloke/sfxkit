namespace sfxkit
{
	export class ComponentSine implements Component
	{
	  private angle:number = 0;
      private initialAngle = 0;
      private frequency:Component;

      constructor (freq:Component)
      {
          this.frequency = freq;
      }

	  public GetNextValue (timeSpan:number)
	  {
			var angleInc = timeSpan * this.frequency.GetNextValue(timeSpan) * (Math.PI * 2);

			this.angle += angleInc;
			if ( this.angle >= Math.PI * 2)
			  this.angle -= Math.PI * 2;

	    return Math.sin(this.angle);
	  };

      public Reset ()
      {
          this.angle = this.initialAngle;
          this.frequency.Reset();
      }

      // Custom Methods
        public SetFrequency(value:Component):ComponentSine
        {
            this.frequency = value;
            return this;
        }

      public InitialAngle(initailAngle:number):ComponentSine
      {
          this.initialAngle = initailAngle;
          return this;
      }
	}
}