namespace sfxkit
{
    export class PlayerBasic
    {
        public BuildData(bitrate:number, duration:number, osc:Component):number[]
        {
            var values:number[] = new Array();
            var valueSize:number = 1;
            var inc:number = 1/bitrate;

            values[0] = osc.GetNextValue(0);
            for ( var x = inc; x <= duration;x = x + inc)
            {
                var value = osc.GetNextValue(inc);

                values[valueSize++] = value;
            }

            return values;
        }
    }
}